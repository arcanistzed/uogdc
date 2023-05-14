import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

import fragmentShader from "../../glsl/fragment.glsl";
import vertexShader from "../../glsl/vertex.glsl";

const Background = () => {
	const ref = useRef<THREE.Mesh>(null);
	const uniforms = useRef({
		uTime: { value: 0 },
	});

	useEffect(() => {
		const timer = setInterval(() => {
			uniforms.current.uTime.value += 0.01;
		}, 1000 / 60);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="absolute inset-0 -z-10 invert">
			<Canvas>
				<mesh ref={ref} rotation={[-Math.PI / 4, 0, 0]} position={[0, -2.5, 0]}>
          <sphereGeometry args={[4, 100, 100]} />
					<shaderMaterial
						fragmentShader={fragmentShader}
						vertexShader={vertexShader}
            uniforms={uniforms.current}
            wireframe
					/>
				</mesh>
			</Canvas>
		</div>
	);
};

export default Background;

/*
import * as THREE from "three";
import vertexShader from "./glsl/vertex.glsl";
import fragmentShader from "./glsl/fragment.glsl";

class Gl {
  constructor() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );

    this.camera.position.z = 1;
    this.renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#app"),
      antialias: true
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0xffffff, 1);

    this.clock = new THREE.Clock();

    this.onResize();
  }

  init() {
    this.createMesh();
    this.addEvents();
  }

  createMesh() {
    this.geometry = new THREE.PlaneGeometry(5, 5, 100, 100);
    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: {
          value: 0.0
        }
      }
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.rotateX((-45 * Math.PI) / 180);
    this.scene.add(this.mesh);
  }

  addEvents() {
    window.requestAnimationFrame(this.run.bind(this));
    window.addEventListener("resize", this.onResize.bind(this), false);
  }

  run() {
    requestAnimationFrame(this.run.bind(this));
    this.render();
  }

  render() {
    this.material.uniforms.uTime.value = this.clock.getElapsedTime();
    this.renderer.render(this.scene, this.camera);
  }

  onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;

    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(w, h);
  }
}

export default Gl;
*/
