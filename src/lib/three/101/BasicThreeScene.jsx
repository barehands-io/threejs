import React, {useEffect} from "react";
import PropTypes from "prop-types";

import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";


const BasicThreeScene = () => {

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
            const geometry = new THREE.TorusGeometry(.7, .2, 16, 100);

            // Materials
            const material = new THREE.MeshBasicMaterial()
            material.color = new THREE.Color(0xff0000)

            // Mesh
            const sphere = new THREE.Mesh(geometry, material)
            scene.add(sphere)


            // Lights
            // Create a point light and add it to the scene
            const pointLight = new THREE.PointLight(0xffffff, 0.1)
            pointLight.position.x = 2
            pointLight.position.y = 3
            pointLight.position.z = 4
            scene.add(pointLight)

            // Object to store the sizes of the window
            /**
             * Sizes
             */
            const sizes = {
                width: window.innerWidth,
                height: window.innerHeight
            }

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


            // Create the Three.js camera and add it to the scene
            const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
            camera.position.x = 0
            camera.position.y = 0
            camera.position.z = 2
            scene.add(camera)
            /* ===   // GUI CONTROLS  ==============================  ============================== */


            const folder = gui.addFolder("Camera");
            folder.add(camera.position, 'z', 1, 10, 0.1).name("Z position")

            folder.open();

            /* ===   // GUI CONTROLS  ==============================  ============================== */


            /* ===   // ORBITAL CONTROLS  ==============================  ============================== */

            const controls = new OrbitControls(camera, canvas)

            controls.enableDamping = true



            /* ===   // ORBITAL CONTROLS  ==============================  ============================== */


            const renderer = new THREE.WebGLRenderer({
                    canvas: canvas
                }
            );

            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

            const clock = new THREE.Clock()



            const tick = () => {

                const elapsedTime = clock.getElapsedTime()

                // Update objects
                sphere.rotation.y = 4.8 * elapsedTime


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
            <canvas  id="myThreeJsCanvas"></canvas>
        </div>
    );
};

export default BasicThreeScene;
