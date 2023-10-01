import { useRef } from 'react'
import { OrbitControls } from "@react-three/drei";
import { Points } from 'three'
import { Canvas } from '@react-three/fiber'
import { useSpring, useTransform, motionValue, MotionValue } from 'framer-motion';
import { motion } from 'framer-motion-3d'

type SphereProps = {
  progress: MotionValue,
  sphereColor: string
}

const Cards = ({ progress, sphereColor }: SphereProps) => {

  return (
    <div className='w-full h-full'>
      <Canvas camera={{ position: [1.5, 0, 1.5] }}>
        <ambientLight intensity={0.1} />
        <motion.pointLight position={[0,0,3]} intensity={500} color={"red"} initial={{y:-4, x: -3}} animate={{y:4, x: 3}} transition={{duration: 2, repeatType: 'reverse', repeat: Infinity}} />
        <motion.pointLight position={[3,0,-3]} intensity={100} color={"white"} initial={{y:4, x: 3}} animate={{y:-4, x: -3}} transition={{duration: 2, repeatType: 'reverse', repeat: Infinity}} />
        <Sphere progress={progress} sphereColor={sphereColor} />
        <CustomGeometryParticles />
        <OrbitControls autoRotate enableZoom={false} enablePan={false} enableRotate={false} autoRotateSpeed={1} />
      </Canvas>
    </div>
  )
}

const Sphere = ({progress, sphereColor}: SphereProps) => {

  // const points = useRef<Points>(null!)

  const motionProgress = useTransform(progress, [0, 1], [0, 1])
  const smoothProgress = useSpring(motionProgress, { damping: 20 })

  return (
    <motion.points rotation-y={smoothProgress} rotation-x={smoothProgress} rotation-z={smoothProgress}>
      <sphereGeometry attach="geometry" args={[1.2, 64, 64]} />
      <pointsMaterial attach="material" color={sphereColor} size={0.008} sizeAttenuation />
    </motion.points>
  )
}

const CustomGeometryParticles = () => {

  const points = useRef<Points>(null!)
  const particlesCnt = 2000

  const particlesPosition = new Float32Array(particlesCnt * 3)

  for (let i = 0; i < particlesCnt; i++) {
    let x = (Math.random() - 0.5) * 6;
    let y = (Math.random() - 0.5) * 0.5;
    let z = (Math.random() - 0.5) * 6;

    particlesPosition.set([x, y, z], i * 3);
  }

  return (
    <motion.points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.005}
        color="#f5f5f5"
        sizeAttenuation
        depthWrite={false}
      />
    </motion.points>
  );
};


export default Cards