interface ServerConfig {
    port: number;
    addr: string;
}

type Router = () => Response;

class HttpServer {
    /**
     * config object
     */
    config: ServerConfig;

    /**
     * Routers
     */
    routers: Router[];
    
    constructor(config: ServerConfig) {
        this.config = config;
        this.routers = [];
    }

    public route (router: Router): this {
        this.routers.push(router);

        return this;
    }
}


const listener = Deno.listen({port: 8080});

// const handle = async (connection: Deno.Conn) => {
//     for await (const { respondWith } of Deno.serveHttp(connection)) {
//         respondWith(new Response("Hello world From deno!"));
//     }
// }

(async () => {
    // for await (const conn of listener) {
    //     handle(conn)
    // }

    const server = new HttpServer({
        port: 8080,
        addr: "123"
    }).route(() => new Response("Hello world"));

    console.log(server);
    
})()