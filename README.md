# fxt
inline free text per sneaky use of function

`npm install fxt --save`

```javascript
var fxt = require('fxt');

var txt = fxt(function() {/*
    
    free text per sneaky use of function
    ------------------------------------

    There's no use trying to describe either Unthahorsten or his
    surroundings, because, for one thing, a good many million 
    years had passed since 1942 Anno Domini and, for another, 
    Unthahorsten wasn't on Earth, technically speaking. 

    He was doing the equivalent of standing in the equivalent 
    of a laboratory.

    He was preparing to test his time machi...

*/});

console.log(txt);

```
