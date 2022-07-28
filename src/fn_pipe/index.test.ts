import { test } from 'uvu'
import { equal, is } from 'uvu/assert'
import { _p_ } from '../index.js'
test('_p_|synchronous', ()=>{
	const o = {}
	is(o, _p_(o, $=>$))
	equal({ foo: 'bar', o }, _p_(o, $=>$, o=>({ foo: 'bar', o })))
})
test('_p_|async', async ()=>{
	const o = { one: 1 }
	equal({ one: 1, foo: 'bar', baz: 'quux' },
		await _p_(o, async ()=>({ ...o, foo: 'bar' }), $=>$.then($=>({ ...$, baz: 'quux' }))))
})
test.run()
