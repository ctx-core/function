const load_time =
  performance?.now
  ? performance.now()
  : process?.['hrtime']
    ? getNanoSeconds()
    : Date.now
      ? Date.now()
      : new Date().getTime()
export const performance_now =
  performance?.now
  ? ()=>performance.now()
  : process?.['hrtime']
    ? ()=>{
      const up_time = process.uptime() * 1e9
      const node_load_time = load_time - up_time
      return (getNanoSeconds() - node_load_time) / 1e6
    }
    : Date.now
      ? ()=>Date.now() - load_time
      : ()=>new Date().getTime() - load_time
function getNanoSeconds() {
  const hr = process.hrtime()
  return hr[0] * 1e9 + hr[1]
}
