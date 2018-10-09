const txt = document.querySelector('div.info')

function changeText() {	
	const sizeScroll = window.scrollY;
	
	const heightSection1 = document.querySelector('.section1').offsetHeight;
	const heightSection2 = document.querySelector('.section2').clientHeight;
	const heightSection3 = document.querySelector('.section3').clientHeight;
	const heightSection4 = document.querySelector('.section4').clientHeight;
	
	const initialDistanceOfSection1 = document.querySelector('.section1').offsetTop;
	const initialDistanceOfSection2 = document.querySelector('.section2').offsetTop;
	const initialDistanceOfSection3 = document.querySelector('.section3').offsetTop;
	const initialDistanceOfSection4 = document.querySelector('.section4').offsetTop;

	if(sizeScroll < heightSection1) {
		txt.textContent = 'section 1'
	} 
	else if(sizeScroll < heightSection2 + initialDistanceOfSection2) {
		txt.textContent = 'section 2'
	}
	else if(sizeScroll < heightSection3 + initialDistanceOfSection3) {
		txt.textContent = 'section 3'
	}
	else {
		txt.textContent = 'section 4'
	}
}

window.addEventListener('scroll', changeText)  