import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import * as THREE from "three";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
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

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

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

    const clock = new THREE.Clock()

    const animate = () => {

    const elapsedTime = clock.getElapsedTime()

    boxMesh.rotation.x += 0.01 * elapsedTime;


      // boxMesh.rotation.x += 0.01 * elapsedTime;
      // boxMesh.rotation.y += 0.01;

      renderer.render(scene, camera);

      // requestAnimationFrame(animate);


      window.requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative">
        <div>
          <div className="bg-red-500 absolute top-40 left-40">How are u</div>
          <canvas id="myThreeJsCanvas"></canvas>
        </div>
      </main>
    </>
  );
}