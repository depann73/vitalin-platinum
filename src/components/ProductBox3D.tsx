import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import { TextureLoader, MeshStandardMaterial, Group, Vector2 } from "three";
import frontTexUrl from "@/assets/box-front-new.png";
import backTexUrl from "@/assets/box-back-new.png";
import leftTexUrl from "@/assets/box-left-new.png";
import rightTexUrl from "@/assets/box-right-new.png";
import topTexUrl from "@/assets/box-top-new.png";
import bottomTexUrl from "@/assets/box-bottom-new.png";

// 3D Box with per-face materials and drag/scroll controls
function BoxModel() {
  const groupRef = useRef<Group>(null);
  const [dragging, setDragging] = useState(false);
  const [lastPos, setLastPos] = useState(new Vector2(0, 0));
  const [autoRotate, setAutoRotate] = useState(true);

  // Load textures
  const frontTex = useLoader(TextureLoader, frontTexUrl);
  const backTex = useLoader(TextureLoader, backTexUrl);
  const leftTex = useLoader(TextureLoader, leftTexUrl);
  const rightTex = useLoader(TextureLoader, rightTexUrl);
  const topTex = useLoader(TextureLoader, topTexUrl);
  const bottomTex = useLoader(TextureLoader, bottomTexUrl);

  const materials = useMemo(() => {
    const opts = { metalness: 0.15, roughness: 0.5 } as const;
    const front = new MeshStandardMaterial({ map: frontTex, ...opts });
    const back = new MeshStandardMaterial({ map: backTex, ...opts });
    const right = new MeshStandardMaterial({ map: rightTex, ...opts });
    const left = new MeshStandardMaterial({ map: leftTex, ...opts });
    const top = new MeshStandardMaterial({ map: topTex, ...opts });
    const bottom = new MeshStandardMaterial({ map: bottomTex, ...opts });
    // Order: right, left, top, bottom, front, back
    return [right, left, top, bottom, front, back];
  }, [frontTex, backTex, leftTex, rightTex, topTex, bottomTex]);

  useFrame((_state, delta) => {
    if (!groupRef.current) return;
    if (autoRotate && !dragging) {
      groupRef.current.rotation.y += delta * 0.4; // gentle auto-rotate
    }
  });

  const onPointerDown = (e: any) => {
    setDragging(true);
    setAutoRotate(false);
    setLastPos(new Vector2(e.clientX, e.clientY));
  };
  const onPointerUp = () => setDragging(false);
  const onPointerMove = (e: any) => {
    if (!dragging || !groupRef.current) return;
    const pos = new Vector2(e.clientX, e.clientY);
    const delta = pos.clone().sub(lastPos);
    groupRef.current.rotation.y += delta.x * 0.01;
    groupRef.current.rotation.x += delta.y * 0.01;
    setLastPos(pos);
  };

  const onWheel = (e: any) => {
    const cam = e.camera;
    cam.position.z = Math.min(8, Math.max(3, cam.position.z + e.deltaY * 0.002));
  };

  return (
    <group ref={groupRef} onPointerDown={onPointerDown} onPointerUp={onPointerUp} onPointerMove={onPointerMove}>
      {/* The milk box: width, height, depth - scaled up */}
      <mesh castShadow receiveShadow onWheel={onWheel}>
        <boxGeometry args={[3, 4.5, 1.5]} />
        {materials.map((m, i) => (
          // @ts-ignore three types for materials array via attachArray
          <primitive key={i} attach="material" object={m} />
        ))}
      </mesh>
    </group>
  );
}

export const ProductBox3D = () => {
  return (
    <div className="relative w-full max-w-2xl aspect-[3/4]">
      <Canvas shadows camera={{ position: [0, 0, 7], fov: 50 }}>
        {/* Lights */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 5, 2]} intensity={1.2} castShadow />
        <directionalLight position={[-3, -2, -2]} intensity={0.4} />

        

        <BoxModel />
      </Canvas>

      {/* Hint */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs bg-card/80 backdrop-blur px-3 py-1 rounded-full border border-gold/30">
        Seret untuk memutar • Scroll untuk zoom
      </div>
    </div>
  );
};
