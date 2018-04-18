# MD5
A function for providing the MD5 hash of a string.

JavaScript is an awful language to write this kind of function in, but the algorithm can be useful for web applications. The script always calls the toString method of whatever input it is given, and will always return a string containing the hash. The file can be adapted for either client-side scripts or server-side programs.

*IMPORTANT: MD5 is **not** a secure hashing function. Do not rely on it for encryption or checksums.*

#### Use
The `md5` function is exported as an ECMAScript 6 module.
```js
md5('Hello, World!');       // => new Uint8Array([
                            //        65, a8, e2, 7d,
                            //        88, 79, 28, 38,
                            //        31, b6, 64, bd,
                            //        8b, 7f, 0a, d4
                            //    ]).buffer
```
