import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useRef } from 'react'

export default function CameraRig({ children }) {
  const groupRef = useRef()

  useFrame((state, delta) => {
    if (!groupRef.current) return
    easing.damp3(
      groupRef.current.rotation,
      [
        (-state.pointer.y * state.viewport.height) / 16,
        (state.pointer.x * state.viewport.width) / 16,
        0
      ],
      0.5,
      delta
    )
  })

  return <group ref={groupRef}>{children}</group>
}
