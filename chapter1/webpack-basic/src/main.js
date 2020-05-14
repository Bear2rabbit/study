// let a = require('./a.js)
console.log('88888');
import a from './a.js'
import './css/common.css'
import './less/common.less'
import './sass/common.scss'
import 'bootstrap/dist/css/bootstrap.css'
import '@babel/polyfill'
setTimeout(() => {
    console.log(a);
}, 1000)
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}
class Dog {
    name="dog"
    static color="red"
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}
console.log(new Dog())
console.dir(Dog)
function* foo(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}
var f = foo(5);
f.next(); 
f.next(); 
f.next(); 



