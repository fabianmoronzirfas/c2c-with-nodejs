// 1. erzeuge einen ordner in dem du arbeiten willst
// 2. navigiere in diesen ordner
// 3. erzeuge eine datei mit dem namen index.js
// 4. offne index.js mit dem Code Editor deiner Wahl
var rainbow = require('ansi-rainbow');

var myvariable = 5;
var mystring = 'Hello \'World\'';
var mystring1 = 'Hello "World"';
var anotherstring = 'single "quotes"';
var myboolean = true;
var myarray = [];
var myobject = {};
myobject.foobah = true;
myarray[0] = 'foo';
myarray[1] = 'bah';
myarray.push('baz');

for(var i = 0; i < myarray.length; i++) {
  console.log(rainbow.r(myarray[i]));
}
