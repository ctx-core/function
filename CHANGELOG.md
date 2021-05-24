# @ctx-core/function

## 17.10.1

### Patch Changes

- .gitignore: - \*.js

## 17.10.0

### Minor Changes

- dist,types directory: addressing typescript build issues

## 17.9.3

### Patch Changes

- types: ./src/index.d.ts: address error TS2742 issue

## 17.9.2

### Patch Changes

- .npmignore: + ~

## 17.9.1

### Patch Changes

- fix: target: 2018: nodejs compatability

## 17.9.0

### Minor Changes

- "noImplicitAny": true

## 17.8.5

### Patch Changes

- type issues

## 17.8.4

### Patch Changes

- fix types

## 17.8.3

### Patch Changes

- fix: type issues

## 17.8.2

### Patch Changes

- fix: run: return type is inferred from return type of fn argument

## 17.8.1

### Patch Changes

- run: return type: O extends unknown = unknown

## 17.8.0

### Minor Changes

- feat: run

## 17.7.1

### Patch Changes

- fix: performance_now: nodejs instances

## 17.7.0

### Minor Changes

- feat: performance_now

## 17.6.0

### Minor Changes

- feat: \_stacktrace,\_stacktrace_filename,\_stacktrace_line,\_stacktrace_line_pos,\_stacktrace_filename_line

## 17.5.0

### Minor Changes

- feat: sleep
- feat: waitfor

## 17.4.9

### Patch Changes

- promise_timeout: takes either an async function or a Promise

## 17.4.8

### Patch Changes

- fix: debounce: strict type issue

## 17.4.7

### Patch Changes

- compose: return type: O extends unknown = unknown

## 17.4.6

### Patch Changes

- update dependencies

## 17.4.5

### Patch Changes

- typescript: ^4.2.3 -> ^4.2.4

## 17.4.4

### Patch Changes

- version bump

## 17.4.3

### Patch Changes

- fix: npm publish: https://github.com/npm/cli/issues/2834

## 17.4.2

### Patch Changes

- fix: npm run compile: tsc -b .

## 17.4.1

### Patch Changes

- typescript: ^4.2.2 -> ^4.2.3

## 17.4.0

### Minor Changes

- const t = true,const f = false

## 17.3.6

### Patch Changes

- version bump

## 17.3.5

### Patch Changes

- fix: typescript build

## 17.3.4

### Patch Changes

- typescript: ^4.1.5 -> ^4.2.2

## 17.3.3

### Patch Changes

- fix: Timeout added to index

## 17.3.2

### Patch Changes

- typescript: ^4.1.4 -> ^4.1.5

## 17.3.1

### Patch Changes

- typescript: ^4.1.3 -> ^4.1.4

## 17.3.0

### Minor Changes

- - \_null

## 17.2.0

### Minor Changes

- nf type: null|false

## 17.1.0

### Minor Changes

- andand,andand*,map_andand*,map_andand_or,map_andand: return type is O generic instead of I|O

## 17.0.1

### Patch Changes

- alias using export as
- generics use extends

## 17.0.0

### Major Changes

- src directory

## 16.9.1

### Patch Changes

- promise_timeout: Timed out after [ms]ms. error message

## 16.9.0

### Minor Changes

- typescript types

## 16.8.2

### Patch Changes

- promise_timeout: timeout error stacktrace

## 16.8.1

### Patch Changes

- fix: add promise_timeout to index.ts

## 16.8.0

### Minor Changes

- promise_timeout: timeout_promise calls promise_timeout with arguments flipped

## 16.7.0

### Minor Changes

- export type nullsy = nullish
- feat: falsy_async_guard,falsy_guard,nullish_async_guard,nullish_guard

## 16.6.1

### Patch Changes

- fix: timeout_promise: let id: Timeout type declaration

## 16.6.0

### Minor Changes

- timeout_promise as \_timeout_promise

## 16.5.0

### Minor Changes

- feat: \_timeout_promise

## 16.4.0

### Minor Changes

- feat: Timeout type

### Patch Changes

- - .rush
- fix: debounce,throttle: type issues

## 16.3.0

### Minor Changes

- feat: debounce: async

  feat: isPromise

  feat: promise_resolve_type

  feat: promise_reject_type

## 16.2.1

### Patch Changes

- fix: debounce: timeout type signature

## 16.2.0

### Minor Changes

- feat: debounce,throttle

## 16.1.5

### Patch Changes

- using export as instead of export const

## 16.1.4

### Patch Changes

- typescript: ^4.1.2 -> ^4.1.3

## 16.1.3

### Patch Changes

- typescript: ^4.0.5 -> ^4.1.2

## 16.1.2

### Patch Changes

- typescript: ^4.0.3 -> ^4.0.5

## 16.1.1

### Patch Changes

- default generic types

## 16.1.0

### Minor Changes

- \_wrap_a2
  wrap_a1_item_type
  wrap_a2_item_type
  wrap_a2_type
  wrap_a_type
  wrap_concat

### Patch Changes

- stricter type checking of generics

## 16.0.0

### Major Changes

- Typescript strict checking

## 15.0.1

### Patch Changes

- fix: npm run compile: path to tsc

## 15.0.0

### Major Changes

- typescript types overhaul & extracting modules

### Minor Changes

- Added maybe, wrap_a1_type, wrap_a2_type

### Patch Changes

- typescript updates
