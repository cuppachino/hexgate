import nodeFetch, { Headers, Request, Response } from 'node-fetch'

globalThis.fetch = nodeFetch
globalThis.Headers = Headers
globalThis.Request = Request
globalThis.Response = Response

declare global {
  module globalThis {
    /**
     * `node-fetch` pollyfill.
     * @see {@link Headers | declaration}
     */
    var fetch: typeof nodeFetch
    /**
     * `node-fetch` pollyfill.
     * @see {@link Headers | declaration}
     */
    var Headers: typeof import('node-fetch').Headers
    /**
     * `node-fetch` pollyfill.
     * @see {@link Headers | declaration}
     */
    var Request: typeof import('node-fetch').Request
    /**
     * `node-fetch` pollyfill.
     * @see {@link Headers | declaration}
     */
    var Response: typeof import('node-fetch').Response
  }
}
