# scrollToElem
Scroll smoothly to a DOM element or a point on the Y axis


This package allows you to scroll smoothly to an element on the page. 
You can define the target and the length (in time) of the animation.
It uses new ES6 standards such as arrow functions and window.requestAnimationFrame().

To use it with browserify:

```
const scrollToElem = require('scrollToElem');

//If you want to scroll to an element whose id is 'myElem':
const elem = document.getElementById('myElem');

scrollToElem(elem, 1000); 
// 1000 means the animation will take 1000ms, or 1 second.


//If you want to scroll to the 100th pixel of the page from the top in half a second:
scrollToElem(100, 500);

//If you want to scroll to the end of the view port in 2 seconds:
scrollToElem(window.innerHeight, 2000);
```
