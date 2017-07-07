'use strict';

const menuItems = [
  {name: 'Home', link:'home.html'},
  {name: 'Info', link:'info.html'},
  {name: 'About', link:'about.html'},
  {name: 'Contact', link:'contact.html'}
];

const menu = document.querySelector('.menu');
let content = '';

for (const menuItem of menuItems) {
  const {name, link} = menuItem;

  content += `
    <li>
      <a href="${link}">${name}</a>
    </li>
  `;
}

menu.innerHTML = content;

/*const menuItems = [
  {name: 'Home', link:'home.html'},
  {name: 'Info', link:'info.html'},
  {name: 'About', link:'about.html'},
  {name: 'Contact', link:'contact.html'}
];

const menu = document.querySelector('.menu');

for (const name of menuItems){
  menu.innerHTML += `<li><a href = '${name.link}'>${name.name}</a></li>`;
}*/
