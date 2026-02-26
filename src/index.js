import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Loader } from '@react-three/drei'
import Scene from './Scene'
import Overlay from './Overlay/Overlay'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <Scene />
    <Overlay />
    <Loader />
  </StrictMode>
)
