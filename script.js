const circle = document.getElementById('circle');
const buffer = document.getElementById('buffer');
const step1 = document.getElementById('step1');
const step2= document.getElementById('step2');
const step3 = document.getElementById('step3');
const step4 = document.getElementById('step4');
let circleClicked1 = false;
let circleClicked2 = false;
    
// Circle click event
circle.addEventListener('click', () => {
  if (!circleClicked1) {
		//Shift the circle to the right
		circle.style.left = '75%';
    circle.style.top = '20%';
    step1.style.display = 'none';
    step2.style.display = 'block';
      
    circleClicked1 = true;
  } else if (!circleClicked2) {
    // Move the circle down to the bottom of the page
    circle.style.top = '180%';
    circle.style.left = '50%';
    buffer.style.top = '220%';
    step2.style.display = 'none';
    step3.style.display = 'block';
    step4.style.display = 'block';
    
    circleClicked2 = true;
  } else {
  	circle.style.top = '50%';
    circle.style.left = '50%';
    step3.style.display = 'none';
    step4.style.display = 'none';
  }
});
