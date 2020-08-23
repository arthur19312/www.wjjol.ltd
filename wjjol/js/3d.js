var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;


function animate() {
	requestAnimationFrame(animate);

	camera.rotation.y += 0.007;

	camera.position.x = 200 * Math.sin(camera.rotation.y * 1);
	camera.position.z = 200 * Math.cos(camera.rotation.y * 1);

	renderer.render(scene, camera);
}



console.log("init");

var container = document.getElementById("canvasContainer");


var renderer = new THREE.WebGLRenderer({
	antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio);

if (window.innerWidth > 1350) {
	renderer.setSize(800, 640);
} else if (window.innerWidth < 1350) {
	renderer.setSize(600, 480);
} else if (window.innerWidth < 1200) {
	renderer.setSize(500, 400);
}


container.appendChild(renderer.domElement);



var camera = new THREE.PerspectiveCamera(50, 1.25, 0.01, 1000);
camera.position.z = 200;

var scene = new THREE.Scene();

var loader = new THREE.ObjectLoader();

loader.load(
	// resource URL
	"../static/scene/scene1.json",

	// onLoad callback
	// Here the loaded data is assumed to be an object
	function(obj) {
		// Add the loaded object to the scene
		scene.add(obj);
	},

	// onProgress callback
	function(xhr) {
		console.log((xhr.loaded / xhr.total * 100) + '% loaded');
	},

	// onError callback
	function(err) {
		console.error('An error happened');
	}
);

animate();


window.onresize = function() {

	if (window.innerWidth > 1350) {
		renderer.setSize(800, 640);
	} else if (window.innerWidth < 1350) {
		renderer.setSize(600, 480);
	} else if (window.innerWidth < 1200) {
		renderer.setSize(500, 400);
	}

};



if (model) {
	scene.remove(model);
}
renderer.setClearColor(bgColor);
render();
var loader = new THREE.JSONLoader();
loader.load("models-json/" + file, modelLoadedCallback);
