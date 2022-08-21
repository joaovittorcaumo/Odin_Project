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
const div = document.createElement('div');

div.style.color = 'blue';

div.style.cssText = 'color: blue; background: white;';


const container = document.querySelector('#container');


const content = document.createElement('div');
content.classList.add('content');
content.classList.add('p');
content.textContent = 'this is actually strange';

container.append(content);
container.append(div)