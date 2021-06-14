export async function promise_timeout(promise, ms) {
    let id;
    const error = new Error(`Timed out after ${ms}ms.`);
    let timeout = new Promise((_resolve, reject) => {
        id = setTimeout(() => reject(error), ms);
    });
    return Promise.race([
        typeof promise === 'function' ? promise() : promise,
        timeout
    ]).then((result) => {
        clearTimeout(id);
        return result;
    });
}
//# sourceMappingURL=src/promise_timeout.js.map