document.addEventListener('mousemove', function(e) {

  let body = document.querySelector('body');
  let particles = document.createElement('span');
  let x = e.offsetX;
  let y = e.offsetY;

  body.appendChild(particles);

  setTimeout(function() {
    particles.remove()
  }, 2000)

})