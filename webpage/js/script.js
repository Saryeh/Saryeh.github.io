var leftarrow = document.getElementById('leftarrow');
var leftarrow = document.getElementById('rightarrow');
var tag = document.getElementById('tag');

leftarrow.addEventListener('click', doSomething);
rightarrow.addEventListener('click', doSomething);

function doSomething(){
	tag.style.top = 350 + 'px';
	tag.style.opacity = 1;
}


//var arrow = document.getElementById('arrow');
//var circle2 = document.getElementById('circle2');

//arrow.addEventListener('click', doSomething);

//function doSomething(){
//	circle2.style.top = 150 + 'px';
//	circle2.style.opacity = 1;
//} 