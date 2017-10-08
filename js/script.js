window.onscroll = () => {scrollFunction()};

function scrollFunction() {
	if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		document.getElementById('myBtn').style.display = 'block';
	}
	else{
		document.getElementById('myBtn').style.display = 'none';
	}
}

function topFunction() {
	window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}


function myFunction() {
	let x = document.getElementById('navbar');

	if(x.className === "topnav") {
		x.className += " responsive";
	}
	else{
		x.className = "topnav";
	}
}

