import React, {useEffect} from "react";
import PropTypes from "prop-types";
import Stats from "three/examples/jsm/libs/stats.module";

import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import BasicThreeScene from "@/lib/three/101/BasicThreeScene";


const Contact = () => {


    return (
        <div className="bg-slate-800">

            <div className={`bg-red-500 absolute`}>Loadded</div>

            <BasicThreeScene/>


            Contact US
        </div>

    );
};

export default Contact;
