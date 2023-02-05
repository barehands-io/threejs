import React, {useEffect} from "react";
import PropTypes from "prop-types";

import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {TWEEN} from 'three/examples/jsm/libs/tween.module.min'


const SpaceParticles = () => {

    useEffect(() => {
        if (typeof window !== "undefined") {

            // Import dat.GUI library for creating UI controls

            const dat = require("dat.gui");

            let gui = new dat.GUI();

            // LOAD THE CANVAS
            // Get the canvas element for the Three.js scene
            const canvas = document.getElementById("myThreeJsCanvas");

            // CREATE THE SCENE
            const scene = new THREE.Scene();
            // Objects
            // Create a torus mesh and add it to the scene
            const sphereGeometry = new THREE.TorusGeometry(.7, .2, 16, 100);

            sphereGeometry.rotateX(THREE.MathUtils.degToRad(90));

            const particlesGeometry = new THREE.BufferGeometry();

            const particlesCnt = 5000;

            const posArray = new Float32Array(particlesCnt * 3);

            for (let i = 0; i < particlesCnt * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 5;
            }

            particlesGeometry.setAttribute(
                "position",
                new THREE.BufferAttribute(posArray, 3)
            );
            const particlesMaterial = new THREE.PointsMaterial({
                transparent: true,
                size: 0.005,
                color: "white",
                // map: loader.load("texture/height.png"),
            });

            const sphereMaterial = new THREE.PointsMaterial({
                transparent: true,
                size: 0.009,
                color: "white",
                // map: loader.load("texture/height.png"),
            });


            const sphere = new THREE.Points(sphereGeometry, sphereMaterial);



            // Initially hide the sphere

            scene.add(sphere);


            // const particlesMesh = new THREE.Points(particlesGeometry, material);
            const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);

            // load scene after 5 seconds

          // TWEEN ANIMATION

            setTimeout(function() {
                var tween = new TWEEN.Tween({ opacity: 1 })
                    .to({ opacity: 0 }, 1000)
                    .onUpdate(function() {
                        sphereMaterial.opacity = this.opacity;

                    })
                    .start();
            }, 3000);





            //


            // Materials
            const material = new THREE.MeshBasicMaterial()
            material.color = new THREE.Color(0xff0000)

            // Mesh


            // Lights
            // Create a point light and add it to the scene
            const pointLight = new THREE.PointLight(0xffffff, 0.1)
            pointLight.position.x = 2
            pointLight.position.y = 3
            pointLight.position.z = 4
            scene.add(pointLight, particlesMesh)

            // Object to store the sizes of the window
            /**
             * Sizes
             */
            const sizes = {
                width: window.innerWidth,
                height: window.innerHeight
            }

            // Create the Three.js camera and add it to the scene
            const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
            camera.position.x = 0
            camera.position.y = 0
            camera.position.z = 2
            scene.add(camera)

            /* ===   // RESIZE THE SCENCE AND ASSETS  with BROWSER resize ==============================  ============================== */

            // Event listener for resizing the scene and assets with the browser window
            window.addEventListener('resize', () => {
                // Update the sizes object
                sizes.width = window.innerWidth
                sizes.height = window.innerHeight

                // Update the camera aspect ratio
                camera.aspect = sizes.width / sizes.height
                camera.updateProjectionMatrix()

                // Update the renderer size and pixel ratio
                renderer.setSize(sizes.width, sizes.height)
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            })

            /* ===   // RESIZE THE SCENE AND ASSETS  with BROWSER resize =========== */


            /* ===   // GUI CONTROLS  ==============================  ============================== */


            const folder = gui.addFolder("Camera");
            folder.add(camera.position, 'z', 1, 10, 0.1).name("Z position")

            folder.open();

            /* ===   // GUI CONTROLS  ==============================  ============================== */


            const renderer = new THREE.WebGLRenderer({
                    canvas: canvas
                }
            );

            // Set the renderer size and pixel ratio
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

            // set the background color
            renderer.setClearColor(new THREE.Color("grey"), 1);

            const clock = new THREE.Clock()

            const tick = () => {

                const elapsedTime = clock.getElapsedTime()

                // Update objects
                sphere.rotation.y = 0.2 * elapsedTime

                particlesMesh.rotation.y = -0.1 * elapsedTime;

                // Render
                renderer.render(scene, camera)

                // Call tick again on the next frame
                window.requestAnimationFrame(tick)
            }

            tick()


        }
    }, []);

    return (
        <div className="bg-slate-300">
            <canvas className={`h-40`} id="myThreeJsCanvas"></canvas>
        </div>
    );
};

export default SpaceParticles;
