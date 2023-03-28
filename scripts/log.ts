import cx from 'colorix'

const isDebug = process.argv
  .slice(2)
  .some((arg) =>
    ['--debug', '-d', '--log-level=debug', '--level=debug', '--level=d'].includes(arg.toLowerCase())
  )

if (isDebug) {
  console.log(cx('bold', 'blue')('Debug mode enabled. Logging output.'))
} else {
  console.log(cx('gray')('Debug mode disabled. Output is silenced.'))
}
export const log = isDebug
  ? Object.assign((...args: any[]) => console.log(...args), {
      count(...args: any[]) {
        console.count(...args)
      },
      table(...args: any[]) {
        console.table(...args)
      }
    })
  : undefined
