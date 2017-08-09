var pictures = ["assets/img/a1.jpg",
"assets/img/a2.jpg", 
"assets/img/a3.jpg", 
"assets/img/a4.jpg"];

var indexRef=["#one!","#two!","#three!","#four!"]

function create(){
	var carousel = document.getElementById('pics');
	for(var i in indexRef){
		var a = document.createElement("a");
		a.setAttribute("class","carousel-item");
		a.setAttribute("href",i);
		
		for(var j in pictures){
			var img = document.createElement("img");
			img.setAttribute("src",pictures[i]);
			a.appendChild(img);
		}
		carousel.appendChild(img);
	}
}

create();
