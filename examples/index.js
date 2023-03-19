import { auth } from '../dist'

const client = await auth()

console.log(client)
