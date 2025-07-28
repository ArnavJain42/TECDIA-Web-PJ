import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const CherryBlossomTree = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const animationIdRef = useRef(null);
  const petalsRef = useRef([]);
  const clockRef = useRef(new THREE.Clock());

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8f0f0);
    sceneRef.current = scene;

    // Camera setup - use mount dimensions instead of window
    const camera = new THREE.PerspectiveCamera(
      75, 
      mount.clientWidth / mount.clientHeight, 
      0.1, 
      1000
    );
    camera.position.set(0, 0, 5);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Create falling petals system
    const createFallingPetal = () => {
      const petalGeometry = new THREE.SphereGeometry(0.04, 6, 4);
      const colors = [
        new THREE.Color().setHSL(0.92, 0.6, 0.8),
        new THREE.Color().setHSL(0.95, 0.5, 0.85),
        new THREE.Color().setHSL(0.88, 0.7, 0.75),
        new THREE.Color().setHSL(0.97, 0.4, 0.9),
        new THREE.Color().setHSL(0.90, 0.8, 0.7)
      ];
      const petalMaterial = new THREE.MeshLambertMaterial({ 
        color: colors[Math.floor(Math.random() * colors.length)],
        transparent: true,
        opacity: 0.8
      });
      
      const petal = new THREE.Mesh(petalGeometry, petalMaterial);
      
      // Start position across the entire top of screen
      petal.position.set(
        -4 + Math.random() * 8,
        3 + Math.random() * 2,
        (Math.random() - 0.5) * 4
      );
      
      petal.scale.set(1.5, 0.8, 0.3);
      
      // Physics properties
      petal.velocity = {
        x: (Math.random() - 0.5) * 0.01,
        y: -(0.005 + Math.random() * 0.01),
        z: (Math.random() - 0.5) * 0.005
      };
      
      petal.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      petal.rotationSpeed = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02
      };
      
      petal.swayPhase = Math.random() * Math.PI * 2;
      petal.swayAmplitude = 0.001 + Math.random() * 0.002;
      
      return petal;
    };

    // Initialize petals
    const petals = [];
    for (let i = 0; i < 120; i++) {
      const petal = createFallingPetal();
      petals.push(petal);
      scene.add(petal);
    }
    petalsRef.current = petals;

    // Animation loop
    const animate = () => {
      if (!sceneRef.current || !rendererRef.current || !cameraRef.current) {
        return;
      }

      const elapsedTime = clockRef.current.getElapsedTime();
      
      // Update petals
      petalsRef.current.forEach((petal) => {
        // Apply gravity and wind
        petal.position.x += petal.velocity.x + Math.sin(elapsedTime + petal.swayPhase) * petal.swayAmplitude;
        petal.position.y += petal.velocity.y;
        petal.position.z += petal.velocity.z;
        
        // Rotate petal
        petal.rotation.x += petal.rotationSpeed.x;
        petal.rotation.y += petal.rotationSpeed.y;
        petal.rotation.z += petal.rotationSpeed.z;
        
        // Reset petal if it falls too low
        if (petal.position.y < -4) {
          petal.position.set(
            -4 + Math.random() * 8,
            3 + Math.random() * 2,
            (Math.random() - 0.5) * 4
          );
          petal.velocity.y = -(0.005 + Math.random() * 0.01);
        }
        
        // Add some random drift
        if (Math.random() < 0.01) {
          petal.velocity.x += (Math.random() - 0.5) * 0.001;
          petal.velocity.z += (Math.random() - 0.5) * 0.001;
        }
        
        // Limit horizontal velocity
        petal.velocity.x = Math.max(-0.02, Math.min(0.02, petal.velocity.x));
        petal.velocity.z = Math.max(-0.01, Math.min(0.01, petal.velocity.z));
      });

      // Occasionally add new petals for continuous effect
      if (Math.random() < 0.05 && petalsRef.current.length < 150) {
        const newPetal = createFallingPetal();
        petalsRef.current.push(newPetal);
        scene.add(newPetal);
      }

      rendererRef.current.render(sceneRef.current, cameraRef.current);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!mount || !cameraRef.current || !rendererRef.current) return;
      
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      // Clean up petals
      if (petalsRef.current && sceneRef.current) {
        petalsRef.current.forEach(petal => {
          sceneRef.current.remove(petal);
          if (petal.geometry) petal.geometry.dispose();
          if (petal.material) petal.material.dispose();
        });
        petalsRef.current = [];
      }
      
      // Clean up scene
      if (sceneRef.current) {
        sceneRef.current.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      }
      
      // Clean up renderer
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (mount && rendererRef.current.domElement && mount.contains(rendererRef.current.domElement)) {
          mount.removeChild(rendererRef.current.domElement);
        }
      }
      
      // Clear refs
      sceneRef.current = null;
      rendererRef.current = null;
      cameraRef.current = null;
    };
  }, []);

  return (
    <div className=" w-full h-full bg-transparent">
      {/* This div is used to mount the Three.js scene */}
      <div ref={mountRef} className=''/>
    </div>
  );
};

export default CherryBlossomTree;