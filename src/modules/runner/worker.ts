import { parentPort } from 'worker_threads'

const port = parentPort
if (!port) throw new Error('Invalid worker port')

port.on('message', (e) => {
  console.log('\n\nMESSAGE RECIEVED\n', e)
})

import { poll, auth, type Credentials, createRequestInit } from 'hexgate'

let connected = false
let status: 'connected' | 'disconnected' | 'connecting' = 'disconnected'
let credentials: Credentials | undefined = undefined
let timeout: NodeJS.Timeout
let init: ReturnType<typeof createRequestInit> | undefined

function pingLcu() {
  const port = credentials?.appPort
  if (!port) {
    throw new Error('Worker thinks it is connected to LCU, but it is not!')
  }
  // @ts-ignore
  return fetch(`https://127.0.0.1:${port}/lol-patch/v1/status`, init)
}

async function loop() {
  timeout && clearTimeout(timeout)

  if (!credentials) {
    status = 'disconnected'
    try {
      const creds = await poll(auth, 2000, 5)
      if (!creds) throw new Error('Unable to connect to LCU')
      credentials = creds
      init = createRequestInit(credentials)
      status = 'connecting'
      port?.postMessage({ status, connected, credentials })
    } catch (e) {
      connected = false
      credentials = undefined
      init = undefined
      status = 'disconnected'
    }
  } else {
    try {
      const alive = await pingLcu()
      if (alive.ok && !connected) {
        connected = true
        status = 'connected'
        port?.postMessage({ status, connected, credentials })
      }
    } catch (e) {
      connected = false
      credentials = undefined
      init = undefined
      status = 'disconnected'
      port?.postMessage({ status, connected, credentials })
    }
  }
  timeout = setTimeout(loop, 2000)
}

setTimeout(loop, 2000)
