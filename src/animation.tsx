import { Canvas } from "@react-three/fiber";


export function Animation() {
  return(
    <div className="h-screen w-screen -z-50 opacity-50 pointer-events-none absolute">
  <Canvas>
    <pointLight position={[10, 10, 10]} />
  <mesh>
    <sphereGeometry />
    <meshStandardMaterial color="red" />
  </mesh>
  </Canvas>
  </div>
  )
}



/*function iAnimation() {


  return
}*/