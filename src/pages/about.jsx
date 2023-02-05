import React, {useEffect} from "react";
import PropTypes from "prop-types";
import Stats from "three/examples/jsm/libs/stats.module";
import SpaceParticles from "@/lib/three/101/SpaceParticles";


const About = () => {
    //   const renderer = new THREE.WebGLRenderer();
    // const guiDebug = new dat.GUI();
    return (
        <div>


            <div className={`h-40 bg-amber-300`}>

               <SpaceParticles/>


            </div>
            <div className={`h-40 bg-blue-300`}>

              BLUE BG

            </div>
        </div>
    );
};

export default About;
