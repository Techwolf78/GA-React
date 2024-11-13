import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { CycleRaycast, BakeShadows, useCursor } from '@react-three/drei';

const ThreeFiberComponent = () => {
  // State for storing raycast results and the current object in focus
  const [{ objects, cycle }, set] = useState({ objects: [], cycle: 0 });

  return (
    <div className="relative w-full h-screen bg-[#f5f5f5]">
      {/* Status indicators for raycast intersections */}
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        {objects.map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full"
            style={{ background: i === cycle ? '#70ffd0' : '#ccc' }}
          />
        ))}
        {objects.length ? (
          <div className="ml-2 text-sm" style={{ left: cycle * 14 }}>
            {objects[cycle].object.name}
          </div>
        ) : null}
      </div>

      {/* Three.js Canvas */}
      <Canvas
        shadows="soft"
        dpr={1.5}
        camera={{ position: [-10, 10, 5], fov: 50 }}
        className="w-full h-full"
      >
        <Stage />
        {Array.from({ length: 12 }, (_, i) => (
          <Stair
            key={i}
            name={'stair-' + (i + 1)}
            rotation={[-Math.PI / 2, 0, i / Math.PI / 2]}
            position={[2 - Math.sin(i / 5) * 5, i * 0.5, 2 - Math.cos(i / 5) * 5]}
          />
        ))}
        {/* Raycast interaction */}
        <CycleRaycast onChanged={(objects, cycle) => set({ objects, cycle })} />
      </Canvas>

      {/* Decorative elements */}
      <div className="absolute top-6 left-6 text-4xl md:text-6xl font-serif">
        <i>Design</i>
        <br />
        Type
      </div>
      <div className="absolute bottom-6 left-6 text-8xl md:text-9xl font-serif font-black">
        B
      </div>
      <div className="absolute bottom-6 right-6 text-xs space-y-1 text-right">
        <div>2024</div>
        <div>poimandres</div>
        <div>dev collective</div>
      </div>
      <div className="absolute top-1/2 right-6 text-xs -rotate-90 origin-right transform translate-y-1/2">
        A flight of stairs
      </div>
      <div className="absolute top-6 right-6 space-y-1.5">
        <div className="w-6 h-0.5 bg-gray-800" />
        <div className="w-6 h-0.5 bg-gray-800" />
        <div className="w-6 h-0.5 bg-gray-800" />
      </div>
      <div className="absolute top-1/2 left-0 w-36 h-0.5 bg-gray-800" />
      <div className="absolute top-0 left-1/2 w-0.5 h-36 bg-gray-800" />
    </div>
  );
};

// Stair component that responds to user interactions
const Stair = (props) => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Update scale based on hover state
  useFrame((state) => {
    if (ref.current) {
      ref.current.scale.setScalar(hovered ? 1 + Math.sin(state.clock.elapsedTime * 10) / 50 : 1);
    }
  });

  // Manage cursor style when hovering over the stair
  useCursor(hovered);

  return (
    <mesh
      {...props}
      ref={ref}
      receiveShadow
      castShadow
      onClick={(e) => {
        e.stopPropagation();
        setClicked(!clicked);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[2, 6, 0.075]} />
      <meshStandardMaterial
        roughness={1}
        transparent
        opacity={0.6}
        color={clicked ? 'lightblue' : hovered ? 'aquamarine' : '#fff'}
      />
    </mesh>
  );
};

// Stage component that adds lighting and ground plane
const Stage = () => {
  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={0.5} />
      {/* Directional light with shadow */}
      <directionalLight
        position={[1, 10, -2]}
        intensity={1}
        shadow-camera-far={70}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-mapSize={[512, 512]}
        castShadow
      />
      <directionalLight position={[-10, -10, 2]} intensity={3} />
      {/* Ground plane */}
      <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, -0.75, 0]}>
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.2} />
      </mesh>
      {/* Bake the shadows for optimization */}
      <BakeShadows />
    </>
  );
};

export default ThreeFiberComponent;
