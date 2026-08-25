import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const PARTICLE_COUNT = 900;

// Generated once at module load time — outside any component's render —
// so it's not flagged as an impure call happening during render.
function generatePositions() {
  const arr = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    arr[i * 3] = (Math.random() - 0.5) * 12;
    arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
    arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
  }
  return arr;
}

const particlePositions = generatePositions();

function Particles() {
  const pointsRef = useRef(null);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();

    pointsRef.current.rotation.y = t * 0.02;

    const targetX = state.pointer.y * 0.08;
    const targetY = state.pointer.x * 0.08;
    pointsRef.current.rotation.x +=
      (targetX - pointsRef.current.rotation.x) * 0.02;
    pointsRef.current.rotation.y +=
      (targetY - pointsRef.current.rotation.y) * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#ff8a3d"
        transparent
        opacity={0.3}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function ParticleField() {
  return <Particles />;
}
