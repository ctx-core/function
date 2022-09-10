import { test } from 'uvu'
import { equal, is } from 'uvu/assert'
import { fn_pipe, _p_, P } from '../index.js'
test('fn_pipe|synchronous', ()=>{
	const o = {}
	is(o, fn_pipe(o, $=>$))
	equal({ foo: 'bar', o }, fn_pipe(o, $=>$, o=>({ foo: 'bar', o })))
	is(o, _p_(o, $=>$))
	equal({ foo: 'bar', o }, _p_(o, $=>$, o=>({ foo: 'bar', o })))
	is(o, P(o, $=>$))
	equal({ foo: 'bar', o }, P(o, $=>$, o=>({ foo: 'bar', o })))
})
test('fn_pipe|async', async ()=>{
	const o = { one: 1 }
	equal({ one: 1, foo: 'bar', baz: 'quux' },
		await fn_pipe(o, async ()=>({ ...o, foo: 'bar' }), $=>$.then($=>({ ...$, baz: 'quux' }))))
	equal({ one: 1, foo: 'bar', baz: 'quux' },
		await _p_(o, async ()=>({ ...o, foo: 'bar' }), $=>$.then($=>({ ...$, baz: 'quux' }))))
	equal({ one: 1, foo: 'bar', baz: 'quux' },
		await P(o, async ()=>({ ...o, foo: 'bar' }), $=>$.then($=>({ ...$, baz: 'quux' }))))
})
test.run()
