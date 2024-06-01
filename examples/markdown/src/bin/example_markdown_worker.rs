use example_markdown::MarkdownWorker;

use ianaio::worker::Registrable;

fn main() {
    console_error_panic_hook::set_once();

    MarkdownWorker::registrar().register();
}
