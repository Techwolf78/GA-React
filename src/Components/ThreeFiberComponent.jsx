import { useState, useRef, useEffect } from "react"; // useState, useRef, useEffect for dynamic resizing
import { Canvas, useFrame } from "@react-three/fiber";
import { CycleRaycast, BakeShadows, useCursor } from "@react-three/drei";

// The ThreeFiberComponent which handles all 3D rendering
const ThreeFiberComponent = ({ handleScrollClick }) => {
  const [{ objects, cycle }, set] = useState({ objects: [], cycle: 0 });

  // Get the window size for dynamic resizing
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stairNames = [
    "Marketing",
    "Digital",
    "Ads",
    "Branding",
    "Creative",
    "Design",
    "Content",
    "Innovation",
    "Growth",
    "Strategy",
    "Agency",
    "Solutions",
  ];

  return (
    <div className="relative w-full h-screen md:h-[90vh] bg-gradient-to-l from-[#003073] to-[#F0F8FF] mt-1">
      {/* Status indicators for raycast intersections */}
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        {objects.map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full"
            style={{ background: i === cycle ? "#70ffd0" : "#ccc" }}
          />
        ))}
        {objects.length ? (
          <div
            className="ml-2 text-sm md:text-base"
            style={{ left: cycle * 14 }}
          >
            {objects[cycle].object.name}
          </div>
        ) : null}
      </div>
      {/* Three.js Canvas */}
      <Canvas
        shadows="soft"
        dpr={1.5}
        camera={{
          position: [
            windowSize.width < 768 ? -5 : -10,
            windowSize.height < 500 ? 7 : 10,
            windowSize.width < 768 ? 3 : 5,
          ],
          fov: windowSize.width < 768 ? 60 : 50,
        }}
        className="w-full h-full"
      >
        <Stage windowSize={windowSize} />
        {Array.from({ length: 12 }, (_, i) => (
          <Stair
            key={i}
            name={stairNames[i]}
            rotation={[-Math.PI / 2, 0, i / Math.PI / 2]}
            position={[
              2 - Math.sin(i / 5) * 5,
              i * 0.5,
              2 - Math.cos(i / 5) * 5,
            ]}
          />
        ))}
        <CycleRaycast onChanged={(objects, cycle) => set({ objects, cycle })} />
      </Canvas>
      {/* Scroll Image Below */}
      <div
        className="absolute bottom-0 left-4 w-0.5 h-24 md:h-24 bg-gray-800 cursor-pointer"
        onClick={handleScrollClick}
      />{" "}
      {/* Trigger scroll here */}
      <div
        className="absolute bottom-40 left-2 transform -translate-x-1/2 rotate-90 text-black text-xs md:text-sm ml-2 cursor-pointer"
        onClick={handleScrollClick}
      >
        SCROLL DOWN
      </div>
      {/* UI Overlay Text */}
      <div className="absolute left-4 top-1/4 transform -translate-y-1/2 text-3xl md:text-5xl lg:text-6xl font-serif text-black">
        <i>Take Your Brand</i>
        <br />
        to New Heights
      </div>
      {/* Bottom-left corner branding */}
      <div className="absolute bottom-6 left-6 text-4xl md:text-6xl lg:text-7xl font-serif font-black text-black">
        Cross Brand Positioning
      </div>
      <div className="absolute top-1/2 right-6 text-xs md:text-sm -rotate-90 origin-right transform translate-y-1/2 text-white">
        The path to the pinnacle
      </div>
      <div className="absolute bottom-6 right-6 text-xs space-y-1 text-right font-serif text-gray-700">
  <div className="text-sm font-semibold text-yellow-400">2025</div>
  <div className="text-lg font-bold text-yellow-400">Viral Velocity</div>
  <div className="text-xs text-yellow-400">Accelerating Your Digital Reach</div>
</div>

      <div className="absolute top-1/2 left-0 w-24 md:w-36 h-0.5 bg-gray-800" />
      <div className="absolute top-0 left-1/2 w-0.5 h-24 md:h-40 bg-gray-800" />
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 rotate-90 text-white text-xs md:text-sm ml-2">
        HOVER THE STAIRS
      </div>
    </div>
  );
};

// Stair component
const Stair = (props) => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (ref.current) {
      ref.current.scale.setScalar(
        hovered ? 1 + Math.sin(state.clock.elapsedTime * 10) / 50 : 1
      );
    }
  });

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
        color={clicked ? "lightblue" : hovered ? "aquamarine" : "aquamarine"}
      />
    </mesh>
  );
};

// Stage component: Lighting and ground elements
const Stage = ({ windowSize }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[1, windowSize.height < 500 ? 5 : 10, -2]}
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
      <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, -0.75, 0]}>
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.2} />
      </mesh>
      <BakeShadows />
    </>
  );
};

export default ThreeFiberComponent;
