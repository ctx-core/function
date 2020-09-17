/**
 * Returns first obj property that is truthy
 */
export declare function or_property<T = unknown>(obj: T, name_a1: string[]): T[keyof T];
export declare const or__property: typeof or_property;
