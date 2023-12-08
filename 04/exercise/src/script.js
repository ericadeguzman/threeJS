import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
);
cube2.position.set(-2, 1, 0);
cube2.rotation.y = Math.PI * 2;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
);
cube3.position.set(2, -1, 0);
group.add(cube3);

// Axes helper
const axesHelper = new THREE.AxesHelper(1);
scene.add(axesHelper);

// mesh.position.normalize();
// console.log(mesh.position.length());

// the length of the vector is the distance from the origin to the object
// console.log(mesh.position.length());

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);
// camera.lookAt(mesh.position);
// the distance from the camera
// console.log(mesh.position.distanceTo(new THREE.Vector3(1, 1, 1)));

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
