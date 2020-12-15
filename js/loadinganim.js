import * as THREE from "../js/three.module.js";
import { EffectComposer } from '../examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from '../examples/jsm/postprocessing/RenderPass.js';
import { GlitchPass } from '../examples/jsm/postprocessing/GlitchPass.js';



function main() {
    let resized;
    window.addEventListener('resize', function() {
        resized = true
    })

    const canvas = document.querySelector('#c');
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
    const camera = new THREE.PerspectiveCamera(
        75, //fov
        window.innerWidth / window.innerHeight, //aspect
        0.1, //near
        100, //far
    );
    camera.position.z = 6;
    renderer.setClearColor("#000000");
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.TorusBufferGeometry(2, 0.4, 20, 100);
    //const material = new THREE.MeshPhongMaterial({color: 0x8dd6e3});
    const material = new THREE.MeshToonMaterial({
        color: 'rgb(144, 214, 227)',
        emissive: "rgb(144, 214, 227)",
        emissiveIntensity: 0.2,
    })

    const obj = new THREE.Mesh(geometry, material);
    scene.add(obj);

    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(5, 5, 0);
    scene.add(light);
    
    function render(time) {
        time *= 0.001;  // convert time to seconds
        if (resized) resize()
        obj.rotation.x = Math.sin(time);
        obj.rotation.y = Math.sin(-time);
        obj.position.x = Math.sin(time);
       
        renderer.render(scene, camera);
       
        requestAnimationFrame(render);
      }
    requestAnimationFrame(render);
    
    function resize() {
        resized = false;
        renderer.setSize(window.innerWidth, window.innerHeight);
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth/canvas.clientHeight;
        camera.updateProjectionMatrix();
    }
}
main()
