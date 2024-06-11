#![no_implicit_prelude]

#[::ianaio::worker::reactor::reactor]
async fn Worker(_scope: ::ianaio::worker::reactor::ReactorScope<(), ()>) {}

fn main() {}
