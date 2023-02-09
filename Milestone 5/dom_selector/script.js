// getElementsByTagName()

const header = document.getElementsByTagName('h1');

console.log(header);

for(let i of header) console.log(i.innerText);
for(let i of header) console.log(i);

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

//querySelectorAll()

const list = document.querySelectorAll('li');

console.log(list);

for(let i of list) console.log(i.innerText);

const fruits_list = document.querySelectorAll('.fruits-container li');

console.log(fruits_list);

for(let i of fruits_list) console.log(i.innerText);

//querySelector()

const list2 = document.querySelector('li');

console.log(list2);

//style

const h1_color = document.querySelector('.dom1');

h1_color.style.color = 'orange';

const h2_text = document.getElementById('h2');

h2_text.innerText = 'DOM Tools PlayGround';

const tools_container = document.querySelector('.fruits-container');

tools_container.style.backgroundColor = 'seagreen';
tools_container.style.color = 'white';
tools_container.style.padding = '20px';

//DOM Properties Add & Remove 

const sections = document.querySelectorAll('section');

console.log(sections)

for(let section of sections){

    section.style.border = '';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.padding = '20px';
    section.style.backgroundColor = 'seagreen';

}

const fruitsContainer = document.getElementById('fruit-container');

fruitsContainer.classList.add('yellow-bg');
//fruitsContainer.classList.remove('yellow-bg');*/

// DOM Node & Create Elements

console.log(fruitsContainer.childNodes);
console.log(fruitsContainer.childNodes[1]);
console.log(fruitsContainer.firstChild);
console.log(fruitsContainer.childNodes[3].childNodes);

const new_li = document.createElement('li');

new_li.innerText = 'Peach'

const fruitsList = document.querySelector('#fruit-container ul');

fruitsList.appendChild(new_li)

const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');
const ul = document.createElement('ul');
const h1 = document.createElement('h1');

mainContainer.appendChild(section);

h1.innerText = 'Food List';
section.appendChild(h1);

section.appendChild(ul);

const new_li1 = document.createElement('li');
new_li1.innerText = 'Biryani';
section.appendChild(new_li1);

const new_li2 = document.createElement('li');
new_li2.innerText = 'Borhani';
section.appendChild(new_li2);

const new_li3 = document.createElement('li');
new_li3.innerText = 'Shahi Tukra';
section.appendChild(new_li3);

const sectionDress = document.createElement('section');

sectionDress.innerHTML = `
<h1>Dress List</h1>
<ul>
    <li>T-shirt</>
    <li>Shirt</>
    <li>Cap</li>
</ul>
`

mainContainer.appendChild(sectionDress);

const sections2 = document.querySelectorAll('section');

for(let section of sections2){

    section.style.border = '';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.padding = '20px';
    section.style.backgroundColor = 'seagreen';

}