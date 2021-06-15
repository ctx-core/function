export function sleep(ms:number):Promise<number|NodeJS.Timeout> {
	return new Promise(resolve=>setTimeout(resolve, ms))
}
