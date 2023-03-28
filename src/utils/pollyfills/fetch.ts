import nodeFetch, { Headers, Request, Response } from 'node-fetch-commonjs'

globalThis.fetch = nodeFetch
globalThis.Headers = Headers
globalThis.Request = Request
globalThis.Response = Response

declare global {
  export module globalThis {
    /**
     * `node-fetch-commonjs` pollyfill.
     * @see {@link Headers | declaration}
     */
    var fetch: typeof nodeFetch
    /**
     * `node-fetch-commonjs` pollyfill.
     * @see {@link Headers | declaration}
     */
    var Headers: typeof import('node-fetch-commonjs').Headers
    /**
     * `node-fetch-commonjs` pollyfill.
     * @see {@link Headers | declaration}
     */
    var Request: typeof import('node-fetch-commonjs').Request
    /**
     * `node-fetch-commonjs` pollyfill.
     * @see {@link Headers | declaration}
     */
    var Response: typeof import('node-fetch-commonjs').Response
  }
}
