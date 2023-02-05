import React, {useEffect} from "react";
import PropTypes from "prop-types";
import Stats from "three/examples/jsm/libs/stats.module";

import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";


const Contact = () => {

    useEffect(() => {
        if (typeof window !== "undefined") {

            const dat = require("dat.gui");

            let gui = new dat.GUI();

            // LOAD THE CANVAS
            const canvas = document.getElementById("myThreeJsCanvas");

            // CREATE THE SCENE
            const scene = new THREE.Scene();
            // Objects
            const geometry = new THREE.TorusGeometry(.7, .2, 16, 100);
            // Materials
            const material = new THREE.MeshBasicMaterial()
            material.color = new THREE.Color(0xff0000)

            // Mesh
            const sphere = new THREE.Mesh(geometry, material)
            scene.add(sphere)


            // Lights
            const pointLight = new THREE.PointLight(0xffffff, 0.1)
            pointLight.position.x = 2
            pointLight.position.y = 3
            pointLight.position.z = 4
            scene.add(pointLight)


            /**
             * Sizes
             */
            const sizes = {
                width: window.innerWidth,
                height: window.innerHeight
            }

            /* ===   // RESIZE THE SCENCE AND ASSETS  with BROWSER resize ==============================  ============================== */


            window.addEventListener('resize', () => {
                // Update sizes
                sizes.width = window.innerWidth
                sizes.height = window.innerHeight

                // Update camera
                camera.aspect = sizes.width / sizes.height
                camera.updateProjectionMatrix()

                // Update renderer
                renderer.setSize(sizes.width, sizes.height)
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            })

            // Camera

            const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
            camera.position.x = 0
            camera.position.y = 0
            camera.position.z = 2
            scene.add(camera)


            /* ===   // GUI CONTROLS  ==============================  ============================== */


            const folder = gui.addFolder("Camera");
            folder.add(camera.position, 'z', 10, 600, 10).name("Z position").listen();
            folder.open();

            /* ===   // GUI CONTROLS  ==============================  ============================== */


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
        <div className="bg-slate-800">
            <canvas id="myThreeJsCanvas"></canvas>
            Contact US
        </div>
    );
};

export default Contact;
