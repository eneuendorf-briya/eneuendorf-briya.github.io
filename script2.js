const step5 = document.getElementById('step5');
const step6 = document.getElementById('step6');
let circleClicked1 = false;
    
// Circle click event
circle.addEventListener('click', () => {
  if (!circleClicked1) {
  	step5.style.display = 'none';
    circle.style.transition = 'all 2s ease';
    circle.style.top = '0%';
    circle.style.left = '20%';
    circle.style.width = '0px';
    circle.style.height = '0px';
    
    window.open('https://eneuendorf-briya.github.io/page2.html', '_blank');
  }
  
});
