import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import Stats from "three/examples/jsm/libs/stats.module";
import { Scene } from "three";

export class SceneInit {




        const test  = new SceneInit('myThreeJsCanvas');
    
    
        const scene = new THREE.Scene();
    
        const camera = new THREE.PerspectiveCamera(
          50,
          window.innerWidth / window.innerHeight,
          1,
          1000
        );
    
        camera.position.z = 96;
    
        const canvas = document.getElementById("myThreeJsCanvas");
    
        const renderer = new THREE.WebGLRenderer({
          canvas: canvas,
          antialias: true,
        });
    
        renderer.setSize(window.innerWidth, window.innerHeight);
    
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
        // document.body.appendChild(renderer.domElement);
    
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        ambientLight.castShadow = true;
        scene.add(ambientLight);
    
        const spotLight = new THREE.SpotLight(0xffffff, 0.1);
    
        spotLight.castShadow = true;
    
        spotLight.position.set(0, 64, 32);
    
        scene.add(spotLight);
    
        // add geometry
    
        const geometry = new THREE.BoxGeometry(32, 32, 32);
    
        const boxMaterial = new THREE.MeshNormalMaterial();
    
        const boxMesh = new THREE.Mesh(geometry, boxMaterial);
    
        scene.add(boxMesh);
    
        const clock = new THREE.Clock();
    
        // ADD ORBIT CONTROLS
    
        const controls = new OrbitControls(camera, renderer.domElement);
    
        const stats = Stats();
    
        document.body.appendChild(stats.dom);
    
        controls.enableDamping = true;
    
        const animate = () => {
    
          // boxMesh.rotation.x += 0.01;
          // boxMesh.rotation.y += 0.01;
    
          stats.update();
          controls.update();
    
          renderer.render(scene, camera);
    
    
    
    
          window.requestAnimationFrame(animate);
        };
    
        animate();
      }, []);



}