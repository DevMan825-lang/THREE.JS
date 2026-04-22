// Object 3D
// Rotation, Position and Scaling comes under the object-3D. 
// There are 3 properties to transform object in our scene : 
// 1. Position() = To change the position of the object. 
// 2. Scaling() = To resize the object.
// 3. Rotation() = To rotate the object. 

const scene = new THREE.Scene(); 
const geometry = new THREE.BoxGeometry(2,2,2); 
const material = new THREE.MeshBasicMaterial({color : "red"}); 
const mesh = new THREE.Mesh(geometry, material); 

// Change the position of the mesh....... 
// mesh.position.x = .7; 
// mesh.position.y = -.6; 
// mesh.position.z = 1; 
// console.log(mesh.position.length()); 
// mesh.position.normalize(); 
// console.log(mesh.position.normalize()); 
// mesh.position.set(.3,-.2,1); 

// Resize the mesh
// mesh.scale.set(2, .25); 

// Rotate the mesh 
// mesh.rotation.x = Math.PI * .25;
// mesh.rotation.y = Math.PI * .25;
// scene.add(mesh); 
const size = {
    width : 1000, 
    height: 500,
}; 
const camera = new THREE.PerspectiveCamera(75, size.width / size.height); 
scene.add(camera); 
camera.position.z = 4; 
// Total Distance between scene center to Object
console.log(mesh.position.distanceTo(camera.position));

camera.lookAt(new THREE.Vector3(1,-1,0));  
camera.lookAt(mesh.position);

// Intialize x, y and z axis 
// const axisHelper = new THREE.AxesHelper(); 
// axisHelper.position.x = -2;
// axisHelper.position.y = 2;
// scene.add(axisHelper); 


// Using group property to assign one property into multiple objects 
const group = new THREE.Group(); 
scene.add(group); 
// Creating Multiple boxes : 
const box_1 = new THREE.Mesh(new THREE.BoxGeometry(2,2,2),
                            new THREE.MeshBasicMaterial({color:"red"}));
group.add(box_1); 
const box_2 = new THREE.Mesh(new THREE.BoxGeometry(2,2,2),
                            new THREE.MeshBasicMaterial({color:"green"}));
group.add(box_2); 
const box_3 = new THREE.Mesh(new THREE.BoxGeometry(2,2,2),
                            new THREE.MeshBasicMaterial({color:"blue"}));
group.add(box_3); 
box_1.position.x = 3; 
box_2.position.x = -3;
box_1.position.y = 1; 
box_2.position.y = 1; 
box_3.position.y = 1; 
const target = document.querySelector(".webGL"); 
const renderer = new THREE.WebGLRenderer({canvas : target}); 
renderer.setSize(size.width,size.height); 
renderer.render(scene, camera); 