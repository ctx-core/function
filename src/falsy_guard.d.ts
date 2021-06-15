import type { falsy } from './falsy';
export declare function falsy_guard<Val extends unknown = unknown>(label: string, ...fns: (() => (Val | falsy))[]): Val | falsy;
export { falsy_guard as falsish_guard };
