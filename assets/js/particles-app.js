/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js', {
  "particles": {
      "number": { "value": 200, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": ["#ff00c8", "#00ffd5", "#ffffff"] },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.8, "random": false },
      "size": { "value": 2, "random": true },
      "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
      "move": { "enable": true, "speed": 5, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
  },
  "interactivity": {
      "detect_on": "window",
      "events": {
          "onhover": { "enable": true, "mode": "bubble" },
          "onclick": { "enable": true, "mode": "push" },
          "resize": true
      },
      "modes": {
          "bubble": { "distance": 200, "size": 5, "opacity": 1 },
          "push": { "particles_nb": 4 }
      }
  },
  "retina_detect": true
});

var count_particles, stats, update; 
stats = new Stats; stats.setMode(0); 
stats.domElement.style.position = 'absolute'; 
stats.domElement.style.left = '0px'; 
stats.domElement.style.top = '0px'; 
document.body.appendChild(stats.domElement); 
count_particles = document.querySelector('.js-count-particles'); 
update = function() { 
	stats.begin(); 
	stats.end(); 
	if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { 
		count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; 
	} 
	requestAnimationFrame(update); 
}; 
requestAnimationFrame(update);;