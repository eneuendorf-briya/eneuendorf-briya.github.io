const circle = document.getElementById('circle');
const buffer = document.getElementById('buffer');
let circleClicked = false;
    
// Circle click event
circle.addEventListener('click', () => {
  if (!circleClicked) {
    // Move the circle down to the bottom of the page
    circle.style.top = '180%';
    circle.style.left = '50%';
    //circle.style.transform = 'translatey(20%)';
    circleClicked = true;

  }
});

buffer.addEventListener('click', () => {
          if (!circleClicked) {
            // Move the circle down to the bottom of the page
            circle.style.top = '180%';
            //circle.style.transform = 'translatey(20%)';
            circleClicked = true;

          }
        });

