import { promise_timeout } from './promise_timeout'
/**
 * @see [link: https://italonascimento.github.io/applying-a-timeout-to-your-promises/]
 * @see [link: http://disq.us/p/1k8w63m]
 */
export async function timeout_promise<O extends unknown = unknown>(
	ms:number, promise:Promise<O>
):Promise<O> {
	return await promise_timeout<O>(promise, ms) as O
}
export {
	timeout_promise as _timeout_promise
}
