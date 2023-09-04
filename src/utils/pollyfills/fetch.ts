import nodeFetch, { Headers, Request, Response } from 'node-fetch-commonjs'

globalThis.fetch = nodeFetch
globalThis.Headers = Headers
globalThis.Request = Request
globalThis.Response = Response

declare global {
  export module globalThis {
    /**
     * `node-fetch-commonjs` pollyfill.
     * @see {@link fetch | fetch}
     */
    var fetch: typeof nodeFetch
    /**
     * `node-fetch-commonjs` pollyfill.
     * @see {@link Headers | Headers}
     */
    var Headers: typeof import('node-fetch-commonjs').Headers
    /**
     * `node-fetch-commonjs` pollyfill.
     * @see {@link Request | Request}
     */
    var Request: typeof import('node-fetch-commonjs').Request
    /**
     * `node-fetch-commonjs` pollyfill.
     * @see {@link Response | Response}
     */
    var Response: typeof import('node-fetch-commonjs').Response
  }
}
