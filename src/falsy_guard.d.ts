import type { falsy } from './falsy';
export declare function falsy_guard<Val extends unknown = unknown>(label: string, ...fns: (() => (falsy | Val))[]): number | Val;
export { falsy_guard as falsish_guard };
