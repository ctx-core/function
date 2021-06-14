const has_performance = typeof performance !== 'undefined';
const has_process = typeof process !== 'undefined';
const has_hrtime = has_process && typeof process['hrtime'] !== 'undefined';
const has_Date_now = typeof Date.now !== 'undefined';
const load_time = has_performance
    ? performance.now()
    : has_hrtime
        ? getNanoSeconds()
        : has_Date_now
            ? Date.now()
            : new Date().getTime();
export const performance_now = has_performance
    ? () => performance.now()
    : has_hrtime
        ? () => {
            const up_time = process.uptime() * 1e9;
            const node_load_time = load_time - up_time;
            return (getNanoSeconds() - node_load_time) / 1e6;
        }
        : has_Date_now
            ? () => Date.now() - load_time
            : () => new Date().getTime() - load_time;
function getNanoSeconds() {
    const hr = process.hrtime();
    return hr[0] * 1e9 + hr[1];
}
//# sourceMappingURL=src/performance_now.js.map