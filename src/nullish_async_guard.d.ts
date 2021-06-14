import type { nullish } from './nullish';
export declare function nullish_async_guard<Val extends unknown = unknown>(label: string, ...fns: (() => Promise<nullish | Val>)[]): Promise<Val>;
export { nullish_async_guard as nullsy_async_guard };
