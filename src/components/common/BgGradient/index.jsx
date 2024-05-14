'useClient';

import { Sparkles } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useScroll, useTransform } from 'framer-motion';
import { Depth, LayerMaterial, Noise } from 'lamina';
import { Suspense, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

function Bg({ transformColor = ['#000'], targetElement = 'null' }) {
  const mesh = useRef(null);
  const LayerMaterialRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetElement,
    layoutEffect: false,
  });

  const transformColorRange = Array.from(
    Array(transformColor.length).keys(),
  ).map((v) => v / (transformColor.length - 1));

  const transformColors = useTransform(
    scrollYProgress,
    transformColorRange,
    transformColor,
  );

  /* 計測 */
  // useMotionValueEvent(scrollYProgress, 'change', (scrollRange) => {
  //   console.log('refのスクロール量: ', scrollRange);
  //   console.log(transformColors);
  // });

  useFrame((state, delta) => {
    mesh.current.rotation.x = mesh.current.rotation.y +=
      // mesh.current.rotation.z +=
      delta * 0.4;

    LayerMaterialRef.current.color = transformColors.current;
    // console.log(scrollYProgress);
    // console.log(scrollProps);
  });

  // const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // useEffect(() => {
  //   const resize = () => {
  //     setWindowHeight(window.innerHeight);
  //   };

  //   window.addEventListener('resize', resize);
  //   return () => window.removeEventListener('resize', resize);
  // }, []);

  return (
    <mesh ref={mesh} scale={100}>
      <sphereGeometry args={[1, 64, 64]} />
      <LayerMaterial
        color='#000dff'
        attach='material'
        side={THREE.BackSide}
        ref={LayerMaterialRef}
      >
        <Depth
          colorA='#ffffff'
          colorB='#000000'
          alpha={0.8}
          mode='multiply'
          near={10}
          far={250}
          origin={[100, 100, 100]}
        />
        <Depth
          colorA='#bfff00'
          colorB='#ab1bff'
          alpha={0.5}
          mode='subtract'
          near={10}
          far={250}
          origin={[50, 50, 0]}
        />

        <Noise
          mapping='world'
          type='simplex'
          scale={1000}
          colorA='white'
          colorB='#a0a0a0'
          mode='softlight'
          alpha={0.2}
        />
      </LayerMaterial>
    </mesh>
  );
}

function Rig({ v = new THREE.Vector3() }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMoveListener = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // マウント時：マウスイベントリスナを追加
    window.addEventListener('mousemove', mouseMoveListener);

    // アンマウント時：マウスイベントリスナを削除
    return () => {
      window.removeEventListener('mousemove', mouseMoveListener);
    };
  }, []);

  return useFrame((state) => {
    // console.log(state);
    state.camera.position.lerp(
      v.set(
        (mousePosition.x / 1000) * 0.6,
        (mousePosition.y / -1000) * 0.6,
        10,
      ),
      0.05,
    );
  });
}

export const BgGradient = ({ transformColor, targetElement }) => {
  /* こっちのコンポーネントで計測する場合 */
  // const { scrollYProgress } = useScroll({
  //   target: targetElement,
  //   layoutEffect: false,
  // });

  // useMotionValueEvent(scrollYProgress, 'change', (scrollRange) => {
  //   console.log('refのスクロール量: ', scrollRange);
  // });

  return (
    <div className='fixed left-0 top-0 -z-10 h-screen w-screen bg-gradient-white-yellow'>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 30 }}>
        <Suspense fallback={null}>
          <Bg transformColor={transformColor} targetElement={targetElement} />
          <Rig />
          <mesh>
            <Sparkles
              color='#ffffe0'
              count={300}
              scale={11}
              size={3}
              speed={0.4}
              opacity={0.8}
            />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
};
