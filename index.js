
//Vanilla DOM Programming 
// let hello = document.createElement('h1');
// hello.textContent = "Allo there";
//document.querySelector('[data-root]').appendChild(hello!);

// // jQuery version
// let jqHello = $('<h1>',{
//     text: " Oi! Ello Mate"
// });
//jqHello.appendTo('[data-root]');

//React Version 
let hello = React.createElement('h1', null, 'hello react!');
let item = React.createElement('li', null, 'chicken hearts');
let list = React.createElement('ul', null, item);

let main = React.createElement('div', null, 

ReactDOM.render(hello, document.querySelecter('[data-root]')); 