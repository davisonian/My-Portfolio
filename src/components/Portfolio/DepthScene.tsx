"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DepthScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const root = new THREE.Group();
    scene.add(root);

    const ambient = new THREE.AmbientLight(0xdfeeff, 2.4);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0x7dd3fc, 3.2);
    keyLight.position.set(4, 5, 7);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x93c5fd, 18, 40, 2);
    fillLight.position.set(-4, -2, 5);
    scene.add(fillLight);

    const palette = [0x93c5fd, 0xcbd5e1, 0x60a5fa, 0xe2e8f0];
    const cards: THREE.Mesh[] = [];

    for (let i = 0; i < 4; i += 1) {
      const geometry = new THREE.BoxGeometry(2.2, 3.2, 0.7 + i * 0.3);
      const material = new THREE.MeshStandardMaterial({
        color: palette[i % palette.length],
        emissive: palette[i % palette.length],
        emissiveIntensity: 0.15,
        metalness: 0.48,
        roughness: 0.34,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set((i - 1.5) * 1.2, (i % 2 === 0 ? 0.35 : -0.55) * i, -i * 1.6);
      mesh.rotation.set(0.5 + i * 0.18, 0.7 + i * 0.24, i * 0.12);
      root.add(mesh);
      cards.push(mesh);
    }

    const screenPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(7.5, 4.8),
      new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        transparent: true,
        opacity: 0.35,
        metalness: 0.25,
        roughness: 0.8,
      }),
    );
    screenPlane.position.set(0, 0, -4.8);
    screenPlane.rotation.y = -0.2;
    root.add(screenPlane);

    const orb = new THREE.Mesh(
      new THREE.SphereGeometry(0.6, 32, 32),
      new THREE.MeshStandardMaterial({
        color: 0x7dd3fc,
        emissive: 0x7dd3fc,
        emissiveIntensity: 0.8,
        roughness: 0.2,
        metalness: 0.5,
      }),
    );
    orb.position.set(1.7, -0.8, 1.3);
    root.add(orb);

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: mount.parentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    scrollTimeline
      .to(camera.position, { z: 7.3, x: 0.8, y: 0.8, ease: "sine.inOut" }, 0)
      .to(root.rotation, { y: Math.PI * 1.1, x: -0.4, ease: "sine.inOut" }, 0)
      .to(orb.position, { x: -1.2, y: 1.2, z: 2.2, ease: "sine.inOut" }, 0)
      .to(
        cards.map((card) => card.position),
        { x: "+=0.5", y: "+=0.4", z: "+=0.8", stagger: 0.08, ease: "sine.inOut" },
        0,
      );

    const handleResize = () => {
      const { clientWidth, clientHeight } = mount;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    renderer.setAnimationLoop(() => {
      root.rotation.z += 0.0012;
      orb.rotation.x += 0.01;
      orb.rotation.y += 0.016;
      renderer.render(scene, camera);
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      renderer.setAnimationLoop(null);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((mat) => mat.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    };
  }, []);

  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.35),_transparent_52%),linear-gradient(135deg,_rgba(15,23,42,0.96),_rgba(15,23,42,0.7))] shadow-[0_30px_80px_rgba(14,116,144,0.22)] md:h-[500px]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(148,163,184,0.08),_transparent_35%,_rgba(96,165,250,0.1))]" />
      <div ref={mountRef} className="absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-6 bottom-4 flex items-center justify-between rounded-full border border-white/10 bg-slate-900/30 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-sky-100/80 backdrop-blur-sm md:inset-x-8 md:text-[11px]">
        <span>Depth view</span>
        <span>software systems</span>
      </div>
    </div>
  );
}
