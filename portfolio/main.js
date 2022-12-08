import './style.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();
const FOV = 75;
const ASPECT_RATIO = window.innerWidth/window.innerHeight
const camera = new THREE.PerspectiveCamera(FOV, ASPECT_RATIO, 0.1, 1000)
camera.position.setZ(30);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera)

// Torus
const R = 10, N = 3, M = 16, dTheta = 17;
const geometry = new THREE.TorusGeometry(R, N, M, 360/dTheta);
const white_material = new THREE.MeshStandardMaterial({color: 'white', wireframe: false});
const torus = new THREE.Mesh(geometry, white_material);

const r1 = 5, r2 = 2, H = 10 ;
const cilinderGeometry = new THREE.CylinderGeometry(r1, r2, H);
const red_material = new THREE.MeshStandardMaterial({color: 'red', wireframe: false});
const cilinder = new THREE.Mesh(cilinderGeometry, red_material);



// Light
const pointLight = new THREE.PointLight('blue');
pointLight.intensity = 0.3
pointLight.position.set(20,0,10);
const lightHelper = new THREE.PointLightHelper(pointLight) 
const ambientLight = new THREE.AmbientLight('white')
ambientLight.intensity = 0.1

// Grid
const gridHelper = new THREE.GridHelper(60,60)

scene.add(torus, cilinder, pointLight, lightHelper, ambientLight, gridHelper);

// Controls
const controls = new OrbitControls(camera, renderer.domElement)

// Background
const backgroundTexture = new THREE.TextureLoader().load('./images/background.jpg')
scene.background = backgroundTexture

// Animation loop
function animate(){
  requestAnimationFrame(animate); // requesting the browser to animate
  torus.rotation.x += 0.03;
  torus.rotation.y += 0.01;
  torus.translateX(0.1)
  
  renderer.render(scene, camera);

}

animate()