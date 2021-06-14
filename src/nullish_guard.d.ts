import type { nullish } from './nullish';
export declare function nullish_guard<Val extends unknown = unknown>(label: string, ...fns: (() => (nullish | Val))[]): Val;
export { nullish_guard as nullsy_guard };
