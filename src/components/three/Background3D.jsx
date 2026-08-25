import { Canvas } from "@react-three/fiber";
import ParticleField from "./ParticleField";

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.5]}>
        <ParticleField />
      </Canvas>
    </div>
  );
}
