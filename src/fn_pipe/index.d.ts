export function fn_pipe<A>(o:A):A
export function fn_pipe<A, B>(o:A, op0:($:A)=>B):B
export function fn_pipe<A, B, C>(o:A, op0:($:A)=>B, op1:($:B)=>C):C
export function fn_pipe<A, B, C, D>(o:A, op0:($:A)=>B, op1:($:B)=>C, op2:($:C)=>D):D
export function fn_pipe<A, B, C, D, E>(o:A, op0:($:A)=>B, op1:($:B)=>C, op2:($:C)=>D, op3:($:D)=>E):E
export function fn_pipe<A, B, C, D, E, F>(o:A, op0:($:A)=>B, op1:($:B)=>C, op2:($:C)=>D, op3:($:D)=>E, op4:($:E)=>F):F
export function fn_pipe<A, B, C, D, E, F, G>(o:A, op0:($:A)=>B, op1:($:B)=>C, op2:($:C)=>D, op3:($:D)=>E, op4:($:E)=>F, op5:($:F)=>G):G
export function fn_pipe<A, B, C, D, E, F, G, H>(o:A, op0:($:A)=>B, op1:($:B)=>C, op2:($:C)=>D, op3:($:D)=>E, op4:($:E)=>F, op5:($:F)=>G, op6:($:G)=>H):H
export function fn_pipe<A, B, C, D, E, F, G, H, I>(o:A, op0:($:A)=>B, op1:($:B)=>C, op2:($:C)=>D, op3:($:D)=>E, op4:($:E)=>F, op5:($:F)=>G, op6:($:G)=>H, op7:($:H)=>I):I
export function fn_pipe<A, B, C, D, E, F, G, H, I, J>(o:A, op0:($:A)=>B, op1:($:B)=>C, op2:($:C)=>D, op3:($:D)=>E, op4:($:E)=>F, op5:($:F)=>G, op6:($:G)=>H, op7:($:H)=>I, op8:($:I)=>J):J
export function fn_pipe<A, B, C, D, E, F, G, H, I, J, K>(o:A, op0:($:A)=>B, op1:($:B)=>C, op2:($:C)=>D, op3:($:D)=>E, op4:($:E)=>F, op5:($:F)=>G, op6:($:G)=>H, op7:($:H)=>I, op8:($:I)=>J, ...args:(($:any)=>any)[]):K
