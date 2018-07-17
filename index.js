
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
const h = React.createElement;

let kebabs = [
    'chickenhearts',
    'marinated mushrooms',
    'beef'
];

let items = kababs.map((k) => {
    let virtualItems = React.createElement('li', null, k);
    return virtualItems; 

});

let title = React.createElement('h1', null, 'hello react!');
let item = React.createElement('li', null, 'chicken hearts');
let item2 = React.createElement('li', null, 'marinated mushrooms');
let list = React.createElement('ul', null, itmes);


let main = React.createElement('div', null, [
    title,
    list
]);

ReactDOM.render(main, document.querySelecter('[data-root]')); 