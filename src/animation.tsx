import { Canvas } from "@react-three/fiber";
<<<<<<< HEAD


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

=======


export const Animation = (props: JSX.IntrinsicElements) => {
  <Canvas>
    <pointLight position={[10, 10, 10]} />
  <mesh>
    <sphereGeometry />
    <meshStandardMaterial color="hotpink" />
  </mesh>
  </Canvas>
}

>>>>>>> 48577f3ba4f0f959fbc93205802a030ecb099c8c


/*function iAnimation() {


  return
}*/