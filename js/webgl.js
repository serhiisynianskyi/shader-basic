"use strict"

let initWebGL = function() {
	let vsText, fsText;
	loadTextResource('/shaders/vertex-shader.glsl')
	.then(function(result) {
		vsText = results;
		return loadTextResource('/shaders/fragment-shader.glsl');
	})
	.then(function(result) {
		fsText = results;
		return startWebGL(vsText,fsText);
	})
	.catch(function(error){
		console.error('Error: '+ error);
	})
};

let startWebGL = function(vertexShader, fragmentShader) {
	let canvas = document.getElementById('main-wrapper'),
	gl = canvas.getContext('webgl'); // (context, params)

	if(!gl) {
		console.error("No WEBGL support");
		return
	}
	console.log(gl);
};

document.addEventListener('DOMContentLoaded', function() {
	console.log(1);
	initWebGL();
});