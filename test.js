const md5 = require('./md5.js');
const assert = require('assert');

function testEmpty(){
	var result = md5('');
	const trueResult = string2Buffer('d41d8cd98f00b204e9800998ecf8427e');
	try{
		assert(buffersEqual(result, trueResult));
		console.log('PASSED');
	} catch(e){
		console.log('FAILED');
		console.log('md5(\'\')');
		console.log(result + ' != ' + trueResult);
	}
}

function testLetter(){
	var result = md5('a');
	const trueResult = string2Buffer('0cc175b9c0f1b6a831c399e269772661');
	try{
		assert(buffersEqual(result, trueResult));
		console.log('PASSED');
	} catch(e){
		console.log('FAILED');
		console.log('md5(\'a\')');
		console.log(result + ' != ' + trueResult);
	}
}

function testWord(){
	var result = md5('abcd');
	const trueResult = string2Buffer('e2fc714c4727ee9395f324cd2e7f331f');
	try{
		assert(buffersEqual(result, trueResult));
		console.log('PASSED');
	} catch(e){
		console.log('FAILED');
		console.log('md5(\'abcd\')');
		console.log(result + ' != ' + trueResult);
	}
}

function testSentence(){
	var result = md5('The quick brown fox jumps over the lazy dog.');
	const trueResult = string2Buffer('e4d909c290d0fb1ca068ffaddf22cbd0');
	try{
		assert(buffersEqual(result, trueResult));
		console.log('PASSED');
	} catch(e){
		console.log('FAILED');
		console.log('md5(\'The quick brown fox jumps over the lazy dog.\')');
		console.log(result + ' != ' + trueResult);
	}
}

function testParagraph(){
	var result = md5(
		'\tThis is a sentence with a $pecial character.\nAnd here is a sentence on a new line.'
	);
	const trueResult = string2Buffer('bfa7ff452772026346a59086b8d5934d');
	try{
		assert(buffersEqual(result, trueResult));
		console.log('PASSED');
	} catch(e){
		console.log('FAILED');
		console.log('md5(\'\\tThis is a sentence with a $pecial character.\\nAnd here is a sentence on a new line.\')');
		console.log(result + ' != ' + trueResult);
	}
}

function testBook(){
	var result = md5('-'.repeat(100000));
	const trueResult = string2Buffer('2460c0181d203f95ad405819b1d247ef');
	try{
		assert(buffersEqual(result, trueResult));
		console.log('PASSED');
	} catch(e){
		console.log('FAILED');
		console.log('md5(\'-\'.repeat(100000))');
		console.log(result + ' != ' + trueResult);
	}
}

function string2Buffer(string){
	var bytes = new Uint8Array(string.length / 2);
	for(let i = 0; i < string.length / 2; ++i){
		bytes[i] = parseInt(string.substr(i * 2, 2), 16);
	}
	return bytes.buffer;
}

function buffersEqual(buf1, buf2){
	if(buf1 === buf2){
		return true;
	}

	if(buf1.byteLength !== buf2.byteLength){
		return false;
	}

	var view1 = new DataView(buf1);
	var view2 = new DataView(buf2);

	var i = buf1.byteLength;
	while(i--){
		if(view1.getUint8(i) !== view2.getUint8(i)){
			return false;
		}
	}

	return true;
}

testEmpty();
testLetter();
testWord();
testSentence();
testParagraph();
testBook();
