/*
Events are how you make the magic happen on your page. It`s main hability is to make the page react to the mouse and keyboard;
There are 2 ways do make this workd:
    1.Only in the html file
    2:
 */
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert("Hello World");
});
//YOU CAN ALSO MAKE A FUNCTION TO ADD TO THE BUTTONS:
function alertFunction() {
    alert("YEAH, IT WORKED MAN")
}
function changebackground(e){
    e.target.style.background = 'blue';
}

btn.addEventListener('click', alertFunction)
btn.addEventListener('click', changebackground);

//You can also run through a bunch of buttons

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        alert(button.id);
    });
});