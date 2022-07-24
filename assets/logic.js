document.addEventListener('mousemove', function(e) {

  let body = document.querySelector('body');
  let particles = document.createElement('span');
  let x = e.offsetX;
  let y = e.offsetY;

  particles.style.left = x + 'px';
  particles.style.top = y + 'px';

  body.appendChild(particles);

  setTimeout(function() {
    particles.remove()
  }, 2000)

});