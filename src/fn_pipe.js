export function fn_pipe(...args) {
  return args.reduce((acc, el)=>el(acc))
}
