import { isPromise } from './isPromise';
/**
 * Returns an async function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @see {link:https://davidwalsh.name/javascript-debounce-function}
 */
export function debounce(func, wait, immediate) {
    let timeout;
    let promise, resolve, reject;
    return async function (...arg_a) {
        if (!promise)
            promise = new Promise((in_resolve, in_reject) => {
                resolve = in_resolve;
                reject = in_reject;
            });
        const apply_this = this;
        let rv, error;
        const later = async () => {
            timeout = null;
            promise = null;
            if (!immediate) {
                try {
                    rv = func.apply(apply_this, arg_a);
                }
                catch (e) {
                    error = e;
                }
            }
            if (isPromise(rv)) {
                await rv;
            }
            if (error) {
                reject(error);
            }
            else {
                resolve(null);
            }
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            try {
                rv = func.apply(apply_this, arg_a);
            }
            catch (e) {
                error = e;
            }
        }
        return promise;
    };
}
//# sourceMappingURL=src/debounce.js.map