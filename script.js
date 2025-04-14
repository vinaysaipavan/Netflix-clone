document.getElementById("lang").addEventListener("click", function () {
    this.parentElement.classList.toggle("active");
});
/*
.card-container::-webkit-scrollbar {
    display: none;
    flex-shrink: 0;
    width: 185px;
    height: 250px;
    margin: 5px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

}
    */
   /*
   .main1{
    display: flex;
    min-height: 100vh;
    position: relative;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    background: #000;
    color: white;
    align-content: center;
    justify-content: center;

}

.trending-section h2{
    position: absolute;
    font-size: 25px;
    left: 20vh;
    top: 7px;
    font-family: Arial;
    width: 100%;
    height: 32px;
}
.slider{
    display: flex;
    position: relative;
    overflow-x: auto;
    white-space: nowrap;
    top:34px;
    border-radius: 7px;
    scrollbar-width: thin;
    width: 80vw;
    background: #000;
    scroll-behavior: smooth;
    height: 330px;
}

.card-container{
    display: flex;
    gap: 30px;
    padding: 5px;
    margin: 15px;
    overflow-x: auto;
    scrollbar-width: none;
    scrollbar-color: #f5f5f5 #000;
    width: 100%;
    justify-content: flex-start;

}

.card{
    display: flex;
    flex-direction: column;
    width: 185px;
    height: 250px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

}
.card img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s;
}
.card:hover {
    transform: scale(1.07); /* Smooth hover effect
}
     */




/*

<div class="main1">
        <div class="trending-section"><h2> Trending Now </h2></div>
        <div class="slider">
            <div class="card-container">
                <div class="card"><img src="Posters/Pushpa-2-Poster.jpg_large" alt=""></div>
                <div class="card"><img src="Posters/Daku maharaj-Poster.jpg" alt=""></div>
                <div class="card"><img src="Posters/Squid_Game2-poster.png" alt=""></div>
                <div class="card"><img src="Posters/Dhoom dham-poster.jpg" alt=""></div>
                <div class="card"><img src="Posters/Lucky basker-poster.jpg" alt=""></div>
                <div class="card"><img src="Posters/stranger-things.jpg" alt=""></div>
                <div class="card"><img src="Posters/venom-poster.jpg" alt=""></div>
                <div class="card"><img src="Posters/wednesday-poster.jpg" alt=""></div>
                <div class="card"><img src="Posters/Bhool bhulaya-poster.jpg" alt=""></div>
                <div class="card"><img src="Posters/Black warrant-poster.jpg" alt=""></div>
            </div>
        </div>
    </div>

 */

    /*


    .main1{
    display: flex;
    min-height: 100vh;
    position: relative;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    background: #000;
    color: white;
    align-content: center;
    justify-content: center;
   /* flex-direction: column; 
}

/*
.trending-section h2{
    
    font-size: 24px;
    font-weight: 500;
    color:  rgb(255, 255, 255);
    font-style: normal;
    line-height: normal;
    left: 20vh;
    top: 4px;
    font-family: 'Segoe UI';
    height: 32px;
    width: 100%;
}
.slider{
    display: flex;
    position: relative;
    overflow-x: auto;
    white-space: nowrap;
    left: 22vh;
    right: 22vh;
    top:20px;
    border-radius: 7px;
    width: 80vw;
    background: #000;
    scroll-behavior: smooth;
    height: 330px;
    align-items: center;
}

.card-container{
    display: flex;
    gap: 30px;
    padding: 15px;
    overflow-x: auto;
    scrollbar-width: none;
    width: 100%;
    justify-content: flex-start;

}
.card{
    flex-shrink: 0;
    display: flex;
    width: 185px;
    height: 250px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    cursor: pointer;
    transition: transform 0.1s ease-in-out;

}
.card img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s;
}
.card:hover {
    transform: scale(1.07); /* Smooth hover effect
}

    
 */
     



import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 5);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5);
scene.add(light);

// Load Model
const loader = new GLTFLoader();
loader.load(
    'models/model.glb',  // Adjust the path if needed
    function (gltf) {
        scene.add(gltf.scene);
    },
    undefined,
    function (error) {
        console.error('Error loading GLB model:', error);
    }
);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();


