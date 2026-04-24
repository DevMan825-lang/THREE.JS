import gsap from "https://cdn.skypack.dev/gsap";
const scene = new THREE.Scene(); 
const geometry = new THREE.BoxGeometry(2,2,2); 
const material = new THREE.MeshBasicMaterial({color : "red"}); 
const box = new THREE.Mesh(geometry, material); 
scene.add(box); 

const size = {
    width:1000, 
    height:500,
}; 
const camera = new THREE.PerspectiveCamera(75, size.width / size.height); 
camera.position.z = 4; 

// requestAnimationFrame calls the 60 frames per second in high-end laptop it called 120 frames per second
// const tick = () =>{
//     window.requestAnimationFrame(tick);
//     console.log("Hello"); 
// }
// tick(); 


const target = document.querySelector(".webGL"); 
const render = new THREE.WebGLRenderer({canvas : target}); 
render.setSize(size.width, size.height); 



// Method 1 : 
// Now we can add this requestAnimationFrame() propery into our render
// render is a like a director in our scene now with this property it can 
// take photos of our object  
// const tick = () => {
// render.render(scene, camera); 
// window.requestAnimationFrame(tick);
// box.position.x += 0.01; // change the position of the box in x-axis  

// box.position.y += 0.01; // change the position of the box in y-axis

// box.position.x -= 0.01;

// box.position.y -= 0.01;

// box.position.x += 0.01; 
// box.position.y += 0.01; 

// box.rotation.x += 0.01; // rotate the box in x axis

// box.rotation.y += 0.01; // rotate the box in x axis

// box.rotation.x += 0.01; 
// box.rotation.y += 0.01; 
// }
// tick(); 


// Method 2 
// Creating Standard format for animation : 
// Frame-rate difference : 

// Calculate the frame-rate difference to animate our object 
// let time = Date.now(); 
// const tick = () =>{
//     let currentTime = Date.now(); 
//     let deltaTime = currentTime - time; // The Difference between currentTime - Time is : 1
//     time = currentTime; 
//     // box.position.x += 0.01 * deltaTime;
    
//     box.rotation.x += 0.1 * deltaTime;

//     render.render(scene, camera); 
//     window.requestAnimationFrame(tick); 
// }
// tick(); 




// Method 3 
// Using clock method to animate : 
// Clock() is a built in method in THREE.JS 
// Automatically counting and animating our objects
// let clock = new THREE.Clock(); 
// const tick = () =>{
//     let elapsedTime = clock.getElapsedTime(); 
//     console.log(elapsedTime); 
//     // box.position.x = 0.01; 

//         box.rotation.y = 0.01; 

//         render.render(scene, camera); 
//     window.requestAnimationFrame(tick); 
// }
// tick(); 



// Method 4
// let clock = new THREE.Clock(); 
// const tick = () =>{
//     let elapsedTime = clock.getElapsedTime(); 
    // box.position.x = Math.sin(elapsedTime); 
    // box.position.y = Math.sin(elapsedTime); 

    // box.position.x = Math.cos(elapsedTime); 
    // box.position.y = Math.cos(elapsedTime); 

    // box.rotation.x = Math.sin(elapsedTime); 
    // box.rotation.y = Math.sin(elapsedTime); 

    // box.rotation.x = Math.cos(elapsedTime); 
    // box.rotation.y = Math.cos(elapsedTime); 

    // Change the position of the box but one face always shown
    // for that we can use camera.lookAt() method in here : 
//     box.position.x = Math.cos(elapsedTime); 
//     box.position.y = Math.cos(elapsedTime); 
//     camera.lookAt(box.position);
//     render.render(scene, camera); 
//     window.requestAnimationFrame(tick); 
// }
// tick(); 


// Method 5 : Using the 3rd party GSAP Library to animate our objects in Three.JS : 
const tick = () =>{
    gsap.to(box.position, {duration:1, delay:1, x:2});
    render.render(scene,camera); 
    window.requestAnimationFrame(tick);
} 
tick();

