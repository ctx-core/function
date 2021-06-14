import { promise_timeout } from './promise_timeout';
import { sleep } from './sleep';
export async function waitfor(fn, timeout) {
    await promise_timeout(async () => {
        for (;;) {
            if (await fn())
                return;
            await sleep(0);
        }
    }, timeout);
}
//# sourceMappingURL=src/waitfor.js.map