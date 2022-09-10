export function run_pipe(...args) {
  let argv = []
  for (const _ of args) {
    argv = [_(...argv)]
  }
  return argv[0]
}
