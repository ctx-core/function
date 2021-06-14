import { andand_or } from './andand_or';
export function many_andand_or_(name_a, or_) {
    return (obj, ...arg_a) => andand_or(obj, arg_a.concat(name_a), or_);
}
export { many_andand_or_ as _many_andand_or, many_andand_or_ as _andand_or__many, many_andand_or_ as _andand__or__many, };
//# sourceMappingURL=src/many_andand_or_.js.map