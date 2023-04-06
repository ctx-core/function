import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { falsy__check_ } from '../index'
test('falsy__check_|-onfalsy', ()=>{
	const arg_aa:any[][] = []
	const _ = (...arg_a:any[])=>{
		arg_aa.push(arg_a)
		return arg_a
	}
	const undefined_val = undefined
	const null_val = null
	const zero = 0
	const str = ''
	const o = {}
	equal(falsy__check_([undefined_val], _), undefined)
	equal(arg_aa, [])
	equal(falsy__check_([null_val], _), null)
	equal(arg_aa, [])
	equal(falsy__check_([zero], _), [zero])
	equal(arg_aa, [[zero]])
	equal(falsy__check_([str], _), [str])
	equal(arg_aa, [[zero], [str]])
	equal(falsy__check_([o], _), [o])
	equal(arg_aa, [[zero], [str], [o]])
})
test('falsy__check_|+onfalsy', ()=>{
	const arg_aa:any[][] = []
	const _ = (...arg_a:any[])=>{
		arg_aa.push(arg_a)
		return arg_a
	}
	const onfalsy__arg_aa:any[][] = []
	const onfalsy = (...arg_a:any[])=>{
		onfalsy__arg_aa.push(arg_a)
		return 'foobar'
	}
	const undefined_val = undefined
	const null_val = null
	const zero = 0
	const str = ''
	const o = {}
	equal(falsy__check_([undefined_val], _, onfalsy), undefined)
	equal(arg_aa, [])
	equal(onfalsy__arg_aa, [[undefined]])
	equal(falsy__check_([null_val], _, onfalsy), null)
	equal(arg_aa, [])
	equal(onfalsy__arg_aa, [[undefined], [null]])
	equal(falsy__check_([zero], _, onfalsy), [zero])
	equal(arg_aa, [[zero]])
	equal(onfalsy__arg_aa, [[undefined], [null]])
	equal(falsy__check_([str], _, onfalsy), [str])
	equal(arg_aa, [[zero], [str]])
	equal(onfalsy__arg_aa, [[undefined], [null]])
	equal(falsy__check_([o], _, onfalsy), [o])
	equal(arg_aa, [[zero], [str], [o]])
	equal(onfalsy__arg_aa, [[undefined], [null]])
})
test.run()
