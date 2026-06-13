"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

export function HeroOrb() {
  return (
    <div className="h-56 w-full">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.6} />
        <Float speed={1.4} rotationIntensity={1} floatIntensity={1.2}>
          <Sphere args={[1.1, 64, 64]}>
            <MeshDistortMaterial
              color="#4fd1ff"
              roughness={0.2}
              distort={0.35}
              speed={1.8}
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
}
