    const circle = document.getElementById('circle');
    //const step1 = document.getElementById('step1');
        //const square1 = document.getElementById('square1');
        //const square2 = document.getElementById('square2');
        //const square3 = document.getElementById('square3');

        let circleClicked = false;
    
        // Circle click event
        circle.addEventListener('click', () => {
          if (!circleClicked) {
            // Move the circle down to the bottom of the page
            circle.style.top = '180%';
            circle.style.left = '50%';
            circle.style.transform = 'translatey(200%)';
            circle.style.transform = 'translatey(180%)';
            circleClicked = true;

          }
        });

