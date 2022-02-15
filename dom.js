// Examine the document object //
// console.log(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title =123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent = "hello" ;
// console.log(document.forms[0]);
// console.log(document.links);

//console.log(document.images);

// getelemented //
//console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
//console.log(headerTitle);
// headerTitle.textContent = 'hello';
// headerTitle.innerText = 'Goodbye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = ' <h3>hello</h3>';
//header.style.borderBottom = 'solid 3px #000';
// get elements by classnames//

// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.background = 'yellow';
// //give error//
// //items.style.backgroundColor = '#f4f4f4';

// for(var i=0; i<items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// getelementbytagname //
// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.background = 'yellow';
// //give error//
// //items.style.backgroundColor = '#f4f4f4';

// for(var i=0; i<li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

//Query selector//
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';


// var input= document.querySelector('input');
// input.value='helloworld'; 

// var submit = document.querySelector('input[type="submit"]');
// submit.value="send";

// var item = document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem =document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue'; 

// var secondItem =document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral'; 

//querysectorall//
// var titles = document.querySelectorAll('.title');
// console.log(titles);
 
// titles[0].textContent='hello';

// var odd= document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');
// for(var i=0; i<odd.length;i++) {
//     odd[i].style.background ='#f4f4f4';
//     even[i].style.background ='#ccc';
// }

//trsversing the dom//
// var itemList = document.querySelector('#items');

//parentnode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);
 
// //parentnode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// //childnodes
// // console.log(itemList.childNodes);

// console.log(itemList.children);

// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

// //firstchild
// console.log(itemList.firstchild);
// //firstelement child
// console.log(itemList.firstElementChild);
//itemList.firstlElementChild.textContent ='hello 1';

// //lastchild
// console.log(itemList.lastchild);
// //lastelement child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent ='hello 4';
 
// //nextsibiling
// console.log(itemList.nextSibling);
// //next element sibling
// console.log(itemList.nextElementSibling);
 
//  // previoussibling
// console.log(itemList.previousSibling);
 // //previousElementSibling
// console.log(itemList.previousElementSibling);

// itemList.previousElementSibling.style.color='green';


//create element


//create a div
var newDiv = document.createElement('Div');
//add class
newDiv.className= 'hello';
//add id
newDiv.id= 'hello1';
//add attr
newDiv.setAttribute('title','hello div');
//create text node
var newDivText = document.createTextNode('hello world');

//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header  .container');
var h1 = document.querySelector('header  h1');


container.insertBefore(newDiv, h1);
newDiv.style.fontSize='30px';

























