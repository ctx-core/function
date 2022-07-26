export function fn_pipe(...args) {
  return args.reduce((acc, el)=>el(acc))
}
export { fn_pipe as _p_ }
