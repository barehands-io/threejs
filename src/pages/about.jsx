import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Stats from "three/examples/jsm/libs/stats.module";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

let gui = null;

let loadedWindow = null;

const About = () => {
  //   const renderer = new THREE.WebGLRenderer();

  // const guiDebug = new dat.GUI();

  useEffect(() => {
    if (typeof window !== "undefined") {
      loadedWindow = window;

      const dat = require("dat.gui");

      gui = new dat.GUI();

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

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      ambientLight.castShadow = true;
      scene.add(ambientLight);

      const spotLight = new THREE.SpotLight(0xffffff, 0.1);

      spotLight.castShadow = true;

      spotLight.position.set(0, 64, 32);

      scene.add(spotLight);

      // add geometry

      const geometry = new THREE.BoxGeometry(32, 32, 32);

      const folder = gui.addFolder("BoxGeometry");
      folder
        .add(geometry.parameters, "height", 0.001, 0.1, 0.001)
        .name("Height");
      folder.open();

      // gui.add(geometry, ).min(0.001).max(0.1).step(0.001).name("size");

      const boxMaterial = new THREE.MeshNormalMaterial({});

      // gui.add(boxMaterial, "size").min(0.001).max(0.1).step(0.001).name("size");

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
    }
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas"></canvas>
      ABout us
    </div>
  );
};

export default About;
