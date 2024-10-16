const step5 = document.getElementById('step5');
const step6 = document.getElementById('step6');
let circleClicked1 = false;

circle.addEventListener('click', () => {
  if (!circleClicked1) {
    // Circle click event
    circle.style.transition = 'all 3s ease';
    circle.style.top = '50%';
    circle.style.left = '50%';
    step2.style.display = 'block';
    step3.style.display = 'block';
    }
      
});
