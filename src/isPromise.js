export function isPromise(obj) {
    return obj ? typeof obj.then === 'function' : false;
}
//# sourceMappingURL=src/isPromise.js.map