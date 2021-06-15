import type { falsy } from './falsy';
export declare function falsy_async_guard<Val extends unknown = unknown>(label: string, ...fns: (() => Promise<Val | falsy>)[]): Promise<Val | falsy>;
export { falsy_async_guard as falsish_async_guard };
