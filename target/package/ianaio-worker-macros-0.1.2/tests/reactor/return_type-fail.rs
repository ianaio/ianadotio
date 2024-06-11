#![no_implicit_prelude]

#[::ianaio::worker::reactor::reactor]
fn Worker(_scope: ::ianaio::worker::reactor::ReactorScope<(), ()>) -> u32 {
    0
}

fn main() {}
