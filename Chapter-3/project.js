const scene = new THREE.Scene(); 
const group = new THREE.Group(); 
scene.add(group); 
const box_1 = new THREE.Mesh(
    new THREE.BoxGeometry(2,2,2),
    new THREE.MeshBasicMaterial({color: "red"})
)
group.add(box_1); 

const box_2 = new THREE.Mesh(
    new THREE.BoxGeometry(2,2,2),
    new THREE.MeshBasicMaterial({color: "green"})
)
group.add(box_2); 

const box_3 = new THREE.Mesh(
    new THREE.BoxGeometry(2,2,2),
    new THREE.MeshBasicMaterial({color: "blue"})
)
group.add(box_3);

box_2.position.x = 3.5;
box_3.position.x = -3.5;
// box_2.position.x = 3;
// box_3.position.x = -3;

const size = {
    width:1000, 
    height:500,
}; 
const camera = new THREE.PerspectiveCamera(75, size.width / size.height); 
camera.position.z = 4; 

const target = document.querySelector(".webGL"); 
const render = new THREE.WebGLRenderer({canvas : target}); 
render.setSize(size.width, size.height); 

let time = Date.now(); 
const tick = () =>{
    let currentTime = Date.now(); 
    let deltaTime = currentTime - time; 
    time = currentTime; 
    box_1.rotation.y += 0.001 * deltaTime;
    box_2.rotation.y -= 0.001 * deltaTime;
    box_3.rotation.y -= 0.001 * deltaTime;
    render.render(scene, camera); 
    window.requestAnimationFrame(tick);
}
tick();

