const circle = document.getElementById('circle');
const buffer = document.getElementById('buffer');
let circleClicked1 = false;
let circleClicked2 = false;
    
// Circle click event
circle.addEventListener('click', () => {
  if (!circleClicked1) {
    circle.style.left = '75%';
    circle.style.top = '20%';
      
    circleClicked1 = true;
  } else {
    // Move the circle down to the bottom of the page
    circle.style.top = '180%';
    circle.style.left = '50%';
    //circle.style.transform = 'translatey(20%)';
    //buffer.style.transform = 'translatey(200%)';
    buffer.style.top = '220%';
    
    circleClicked1 = true;
  }
});
