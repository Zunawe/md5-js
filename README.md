# MD5
A function for providing the MD5 hash of a string.

JavaScript is an awful language to write this kind of function in, but the algorithm can be useful for web applications. The script always calls the toString method of whatever input it is given, and will always return a string containing the hash. The file can be adapted for either client-side scripts or server-side programs.

*IMPORTANT: MD5 is **not** a secure hashing function. Do not rely on it for encryption or checksums.*

#### Client-Side
The functions must be appended to your own file or included before the use of the `md5` function.
```
<script src='/path/to/md5.js'></script>
<script>
	md5('Hello, World!');                          // => '65a8e27d8879283831b664bd8b7f0ad4'

	['a', 'b', 'c', 'd'].forEach(md5);             // => ['0cc175b9c0f1b6a831c399e269772661',
	                                               //     '92eb5ffee6ae2fec3ad71c777531578f',
	                                               //     '4a8a08f09d37b73795649038408b5f33',
                                                       //     '8277e0910d750195b448797616e091ad']
</script>
```

#### Server-Side
The file does not include anything outside the guidelines of ECMAScript 5, so modules for Node.js or any other exporting code must be added (though, the `md5` function is the only function that must be exported).
