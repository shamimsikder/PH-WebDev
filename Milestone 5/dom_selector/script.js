// getElementsByTagName()

/*const header = document.getElementsByTagName('h1');

console.log(header);

for(let i of header) console.log(i.innerText);
for(let i of header) console.log(i);*/

//getElementById()

const heading = document.getElementById('h1');

console.log(heading.innerText);
console.log(heading.innerHTML);
console.log(heading.innerHTML = 'Document Object Model');

//getElementsByClass

const items = document.getElementsByClassName('item');

console.log(items);

for(let item of items) console.log(item);
for(let item of items) console.log(item.innerHTML);

