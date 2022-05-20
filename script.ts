const listener = Deno.listen({port: 8080});

const handle = async (connection: Deno.Conn) => {
    for await (const { respondWith } of Deno.serveHttp(connection)) {
        respondWith(new Response("Hello world From deno!"));
    }
}

(async () => {
    for await (const conn of listener) {
        handle(conn)
    }
})()