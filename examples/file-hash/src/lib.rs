use futures::TryStreamExt;
use ianaio_worker::{HandlerId, Worker, WorkerScope};
use js_sys::Uint8Array;
use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use wasm_bindgen::prelude::*;
use wasm_bindgen_futures::spawn_local;
use wasm_streams::ReadableStream;

pub mod codec;

#[derive(Serialize, Deserialize)]
pub struct HashInput {
    #[serde(with = "serde_wasm_bindgen::preserve")]
    pub file: web_sys::File,
}

#[derive(Serialize, Deserialize)]
pub struct HashOutput {
    pub hash: String,
}

pub struct HashWorker {}

impl Worker for HashWorker {
    type Input = HashInput;
    type Output = HashOutput;
    type Message = ();

    fn create(_scope: &WorkerScope<Self>) -> Self {
        Self {}
    }

    fn connected(&mut self, _scope: &WorkerScope<Self>, _id: HandlerId) {}

    fn update(&mut self, _scope: &WorkerScope<Self>, _msg: Self::Message) {}

    fn received(&mut self, scope: &WorkerScope<Self>, msg: Self::Input, id: HandlerId) {
        let scope = scope.clone();

        spawn_local(async move {
            // This is a demonstration of codec and how to pass transferrable types to worker.
            //
            // If you are trying to calculate hashes in browsers for your application,
            // please consider using subtle crypto.
            //
            // This example does not use subtle crypto
            // because calculating hashes with subtle crypto doesn't need to be sent to a worker.
            let mut hasher = Sha256::new();

            // We assume that this file is big and cannot be loaded into the memory in one chunk.
            // So we process this as a stream.
            let mut s = ReadableStream::from_raw(msg.file.stream().unchecked_into()).into_stream();

            while let Some(chunk) = s.try_next().await.unwrap() {
                hasher.update(chunk.unchecked_into::<Uint8Array>().to_vec());
            }

            let hash = hasher.finalize();

            let hash_hex = hex::encode(hash);

            scope.respond(id, HashOutput { hash: hash_hex });
        });
    }
}
