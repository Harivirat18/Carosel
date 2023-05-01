let position=0;
let slides=document.querySelectorAll(".slide");
let total=slides.length;
/* console.log(total); */
let left=document.querySelector("#left");
let right=document.querySelector("#right");

left.addEventListener('click', function(){
	leftslide();
	
});

right.addEventListener('click',function(){
	rightslide();
	
});


function update(){
	slides.forEach(function(slide){
		slide.classList.remove('active'); 
		slide.classList.add('hide');
	});
	
	slides[position].classList.add('active');
}

function leftslide(){
	if(position==0){
	position=total-1;;
	}else{
		position--;
	}
	update();
	
}


function rightslide(){
	if(position==total-1){
		position=0;
	}else{
		position++;
}
	update();
}



