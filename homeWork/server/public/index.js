
var index = true;
window.addEventListener('scroll',function(){
	if(window.pageYOffset>600){
		if(index ==true){
			document.querySelector('.top').style.opacity=1;
			index = false;
		}
	}else{
		document.querySelector('.top').style.opacity=0;
		index=true;
	}
})
// var text = document.querySelector('.header-content');
// document.getElementById('btn').addEventListener('touchstart',function() {
// 	text.classList.add('d-flex');
// })