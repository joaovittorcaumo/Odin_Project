/*
In this lesson we`ll study about the DOM. 
The DOM (document object model) is a tree-like representation of contents of a webpage, a tree of
nodes with different relationships depending on how they`re arranged in the html docment.
There will be an example of this named the first example in the index of thios folder
 */

/*
DOM METHODS
When yor html code is parsed by a webbrowser, it is converted to the DOM. One of the primary
differences is that these nodes are objects that have many properties and methods attached to them
These are the primary tools to manipulate our webpage with js
Query Selectors:
    element.querySelector(selector) return a reference to the first match of the selector
    element.querySelectorAll(selector) returns a "NodeList" with all the matches of the selector
*/
/*
To create an element its like this:
    const div = document.createElement('div');
This function does'nt put your new element into the DOM, it creates it in memory
This happens so we can manipulate the element before putting it into the webpage
*/
/*
APPEND ELEMENTS:
    parentNode.appendChilde(childnode)
    parentnode.insertBefore(newnode, referencenode)
REMOVE ELEMENTS
    parentnode.removeChild(child)
TESTING:
*/
/*const div = document.createElement('div');

div.style.color = 'blue';

div.style.cssText = 'color: blue; background: white;';


const container = document.querySelector('#container');


const content = document.createElement('div');
content.classList.add('content');
content.classList.add('p');
content.textContent = 'this is actually strange';

container.append(content);
container.append(div)*/
/*-------------------------------------------------------------------------------------------*/
const body = document.body; // Element we are going to change
//body.append("Hello world");//Use this to append string to your page
const div = document.createElement('div');
//div.innerText = "Hello World";//ADDS TEXT TO AN ELEMENT.
//div.innerHTML = "<p>HELLO WORLD</p>"//this lets you eddit an html 
const p = document.createElement('p');
const h3 = document.createElement('h3');
const h1 = document.createElement('h1');
const p2 = document.createElement('p')
const btn = document.createElement('button')

btn.style.color = "blue";
btn.innerText = "CLICK HERE";
btn.onclick = () =>  alert("Hello World");


p.style.color = "red";
p.innerText = "Hey, im red!";
h3.style.color = "blue";
h3.innerText ="Im a blue h3";
body.append(btn);
body.append(p);
body.append(h3)
div.style.borderColor = "black";
div.style.backgroundColor = "pink";
h1.innerText = "I'm in a div";
p2.style.color = "black";
p2.innerText = "ME TOO!"
div.append(h1);
div.append(p2);
body.append(div);















