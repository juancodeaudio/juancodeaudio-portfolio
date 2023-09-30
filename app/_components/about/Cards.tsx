import { useRef } from 'react'
import { OrbitControls } from "@react-three/drei";
import { Mesh, Points } from 'three'
import { Canvas, useFrame } from '@react-three/fiber'

const Cards = () => {

  

  return (
    <div className='w-full h-full'>
      <Canvas camera={{ position: [1.5, 1.5, 1.5] }}>
        <ambientLight intensity={0.5} />
        <Sphere />
        <OrbitControls autoRotate enableZoom={false} />
      </Canvas>
    </div>
  )
}

const Sphere = () => {

  const points = useRef<Points>(null!)

  return (
    <points ref={points}>
      <sphereGeometry args={[1.5, 48, 48]} />
      <pointsMaterial color="#5786F5" size={0.015} sizeAttenuation />
    </points>
  )
}


export default Cards