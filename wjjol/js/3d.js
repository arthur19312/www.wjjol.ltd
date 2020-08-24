var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;



var container = document.getElementById("canvasContainer");


var renderer = new THREE.WebGLRenderer({
	antialias: true,
	logarithmicDepthBuffer: true
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

var scene,	model, camera;
var loader = new THREE.ObjectLoader();
var aniId;
var light1, light2, light3;
var deg = Math.PI / 2;
display1();

function display1() {
clearModel();
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(50, 1.25, 0.01, 1000);
	camera.position.z = 200;

	loader.load(
		// resource URL
		"static/scene/scene1.json",
		// onLoad callback
		// Here the loaded data is assumed to be an object
		function(obj) {
			// Add the loaded object to the scene
			model = obj;
			scene.add(obj);
		},
		// onProgress callback
		function(xhr) {
			console.log((xhr.loaded / xhr.total * 100) + '% loaded');
		},
		// onError callback
		function(err) {
			console.error('An error happened' + err);
		}
	);

	animate1();



}


function animate1() {
	aniId = requestAnimationFrame(animate1);

	camera.rotation.y += 0.007;

	camera.position.x = 200 * Math.sin(camera.rotation.y * 1);
	camera.position.z = 200 * Math.cos(camera.rotation.y * 1);

	renderer.render(scene, camera);
}






function display2() {

clearModel();
scene = new THREE.Scene();
	scene.fog = new THREE.Fog("rgb(225,255,254)", 500, 3000);
	scene.cache = false;

	camera = new THREE.PerspectiveCamera(30, 1.25, 0.1, 4000);
	camera.position.set(10, 10, 1200);

	light1 = new THREE.PointLight("rgb(95,250,255)", 1.8, 0, 0);
	light1.position.set(0, 0, 0);
	scene.add(light1);

	light2 = new THREE.PointLight("rgb(255,30,120)", 3, 0, 0);
	light2.position.set(0, 0, 0);
	scene.add(light2);

	light3 = new THREE.PointLight("rgb(255,180,90)", 2, 0, 0);
	light3.position.set(0, 0, 0);
	scene.add(light3);


	loader.load(
		// resource URL
		"static/scene/scene2.json",
		// onLoad callback
		// Here the loaded data is assumed to be an object
		function(obj) {
			// Add the loaded object to the scene
			model = obj;

			obj.scale.multiplyScalar(20);
			scene.add(obj);
		},
		// onProgress callback
		function(xhr) {
			console.log((xhr.loaded / xhr.total * 100) + '% loaded');
		},
		// onError callback
		function(err) {
			console.error('An error happened' + err);
		}
	);

	animate2();





}

function animate2() {
	aniId = requestAnimationFrame(animate2);

	model.rotation.x += 0.005;
	model.rotation.y += 0.005;

	function lightAnim() {

		deg += 1.2 * Math.PI / 180;
		deg = deg % 360;

		light1.position.x = Math.sin(deg) * 100;
		light1.position.z = Math.cos(deg) * 100;

		light2.position.x = -Math.sin(deg) * 100;
		light2.position.y = -Math.cos(deg) * 100;

		light3.position.y = -Math.sin(deg) * 100;
		light3.position.z = Math.cos(deg) * 100;

	};


	lightAnim();
	renderer.render(scene, camera);
}

function clearModel() {

	if (model) {
		scene.remove(model);
	}
	window.cancelAnimationFrame(aniId);
	renderer.dispose();

	scene = null
	camera = null
}



window.onresize = function() {

	if (window.innerWidth > 1350) {
		renderer.setSize(800, 640);
	} else if (window.innerWidth < 1350) {
		renderer.setSize(600, 480);
	} else if (window.innerWidth < 1200) {
		renderer.setSize(500, 400);
	}

};
