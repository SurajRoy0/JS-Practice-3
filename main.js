var items = document.querySelectorAll('li');
items[1].style.color='green'
// items[2].style.visibility='hidden';

var items = document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<items.length;i++){
   items[i].style.backgroundColor='green';

}