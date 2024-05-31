<div align="center">

  <h1><code>ianaio-console</code></h1>

  <p>
    <a href="https://crates.io/crates/ianaio-console"><img src="https://img.shields.io/crates/v/ianaio-console.svg?style=flat-square" alt="Crates.io version" /></a>
    <a href="https://crates.io/crates/ianaio-console"><img src="https://img.shields.io/crates/d/ianaio-console.svg?style=flat-square" alt="Download" /></a>
    <a href="https://docs.rs/ianaio-console"><img src="https://img.shields.io/badge/docs-latest-blue.svg?style=flat-square" alt="docs.rs docs" /></a>
  </p>

  <h3>
    <a href="https://docs.rs/ianaio-console">API Docs</a>
    <span> | </span>
    <a href="https://github.com/rustwasm/ianaio/blob/master/CONTRIBUTING.md">Contributing</a>
    <span> | </span>
    <a href="https://discordapp.com/channels/442252698964721669/443151097398296587">Chat</a>
  </h3>

<sub>Built with 🦀🕸 by <a href="https://rustwasm.github.io/">The Rust and WebAssembly Working Group</a></sub>
</div>

The JavaScript's `console` object provides access to the browser's console.
Using the `console` object in Rust/WASM directly is cumbersome as it requires JavaScript glue code.
This crate exists to solve this problem by providing a set of ergonomic Rust APIs to deal
with the browser console.

# Example

The following example logs text to the console using `console.log`

```rust
use ianaio_console::log;
let object = JsValue::from("any JsValue can be logged");
log!("text", object);
```
