import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { every_arg_ } from '../index.js'
test('every_arg_|default every fn & or', ()=>{
	equal(null, every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar')(null, null, null))
	equal(null, every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar')(null, null, true))
	equal(null, every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar')(null, true, true))
	equal('foobar', every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar')(false, true, true))
	equal(null, every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar')(false, null, true))
	equal(null, every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar')(false, false, null))
	equal('foobar', every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar')(false, false, false))
})
test('every_arg_|default or', ()=>{
	const I = ($:any)=>$
	equal(null, every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I)(false, false, false))
	equal(null, every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I)(false, false, true))
	equal(null, every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I)(false, true, true))
	equal(null, every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I)(false, true, true))
	equal(null, every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I)(false, false, true))
	equal(null, every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I)(false, false, false))
	equal(null, every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I)(false, false, true))
	equal(null, every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I)(false, true, true))
	equal('foobar', every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I)(true, true, true))
})
test('every_arg_|no defaults', ()=>{
	const I = ($:any)=>$
	equal(0, every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I, ()=>'')(false, false, false))
	equal(0, every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I, ()=>'')(false, false, true))
	equal(0, every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I, ()=>'')(false, true, true))
	equal(0, every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I, ()=>'')(false, true, true))
	equal(0, every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I, ()=>'')(false, false, true))
	equal(0, every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I, ()=>'')(false, false, false))
	equal(0, every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I, ()=>'')(false, false, true))
	equal(0, every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I, ()=>'')(false, true, true))
	equal('foobar', every_arg_((_$0:any, _$1:any, _$2:any)=>'foobar', I, ()=>'')(true, true, true))
})
test.run()
