document.querySelector('title');
const headerTitle = document.querySelector('#header-title');
headerTitle.style.borderBottom = '3px solid #000';
const Title = document.querySelector('.title');
Title.style.fontWeight = "bold";
Title.style.color = "green";

const items = document.querySelectorAll('.list-group-item');
items[2].style.color='green';

for(let i=0;i<items.length;i++){
   items[i].style.fontWeight='bold';
}