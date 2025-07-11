import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const ScrollButterfly = () => {
  const butterflyRef = useRef(null)
  const containerRef = useRef(null)
  const trailRef = useRef([])
  const [mousePos, setMousePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const [trail, setTrail] = useState([])
  const floatingAnimationRef = useRef(null)
  const moveAnimationRef = useRef(null)
  const mouseTimeoutRef = useRef(null)

  useEffect(() => {
    const butterfly = butterflyRef.current
    if (!butterfly) return

    const trailLength = 20
    const trailPoints = []
    let previousPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

    const startFloatingAnimation = () => {
      if (floatingAnimationRef.current) {
        floatingAnimationRef.current.kill()
      }
      floatingAnimationRef.current = gsap.to(butterfly, {
        y: "+=10",
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      })
    }

    const stopFloatingAnimation = () => {
      if (floatingAnimationRef.current) {
        floatingAnimationRef.current.kill()
        floatingAnimationRef.current = null
      }
    }

    const handleMouseMove = (e) => {
      const newPos = { x: e.clientX, y: e.clientY }
      setMousePos(newPos)

      // Stop floating animation when mouse is moving
      stopFloatingAnimation()

      // Kill any existing move animation
      if (moveAnimationRef.current) {
        moveAnimationRef.current.kill()
      }

      // Clear existing timeout
      if (mouseTimeoutRef.current) {
        clearTimeout(mouseTimeoutRef.current)
      }

      // Get current butterfly position
      const currentX = gsap.getProperty(butterfly, "x") || previousPos.x
      const currentY = gsap.getProperty(butterfly, "y") || previousPos.y

      // Calculate direction of movement (from current position to target)
      const deltaX = newPos.x - currentX
      const deltaY = newPos.y - currentY
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      
      // Only move if distance is significant (prevents twitching)
      if (distance < 2) return
      
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
      
      // Calculate target position with offset (stop before cursor)
      const offset = 30 // Distance to stop before cursor
      const normalizedX = deltaX / distance
      const normalizedY = deltaY / distance
      const targetX = newPos.x - (normalizedX * offset)
      const targetY = newPos.y - (normalizedY * offset)
      
      // Add current butterfly position to trail
      trailPoints.push({ x: currentX, y: currentY, id: Date.now() })
      
      // Keep trail length manageable
      if (trailPoints.length > trailLength) {
        trailPoints.shift()
      }
      
      setTrail([...trailPoints])
      
      // Animate butterfly to offset position with rotation
      moveAnimationRef.current = gsap.to(butterfly, {
        x: targetX,
        y: targetY,
        rotation: angle,
        duration: 0.4,
        ease: "power2.out",
        onUpdate: function() {
          // Update trail during animation
          const animatedX = gsap.getProperty(butterfly, "x")
          const animatedY = gsap.getProperty(butterfly, "y")
          
          previousPos = { x: animatedX, y: animatedY }
        },
        onComplete: function() {
          moveAnimationRef.current = null
        }
      })

      // Set timeout to start floating animation after mouse stops moving
      mouseTimeoutRef.current = setTimeout(() => {
        startFloatingAnimation()
      }, 1000) // Start floating after 1 second of no mouse movement
    }

    // Initialize butterfly position to center of screen
    gsap.set(butterfly, {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    })

    // Start with floating animation
    startFloatingAnimation()

    // Add mouse move listener
    window.addEventListener('mousemove', handleMouseMove)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      stopFloatingAnimation()
      if (moveAnimationRef.current) {
        moveAnimationRef.current.kill()
      }
      if (mouseTimeoutRef.current) {
        clearTimeout(mouseTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
    >
      {/* Trail */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 49 }}
      >
        {/* Trail line */}
        {trail.length > 1 && (
          <path
            d={`M ${trail[0]?.x || 0} ${trail[0]?.y || 0} ${trail.slice(1).map(point => `L ${point.x} ${point.y}`).join(' ')}`}
            stroke="url(#trailGradient)"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
          />
        )}
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.7" />
          </linearGradient>
        </defs>
      </svg>

      {/* Butterfly */}
      <div 
        ref={butterflyRef}
        className="absolute transform -translate-x-1/2 -translate-y-1/2"
        style={{ left: '0px', top: '0px' }}
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 100 100"
          className="butterfly-svg"
          style={{ transform: 'rotate(90deg)' }}
        >
          {/* Butterfly body */}
          <ellipse
            cx="50"
            cy="50"
            rx="2"
            ry="25"
            fill="#0284c7"
            className="butterfly-body"
          />
          
          {/* Top wings */}
          <path
            d="M 50,35 Q 35,20 25,25 Q 20,30 25,40 Q 35,45 50,40 Z"
            fill="#0ea5e9"
            className="butterfly-wing top-left"
          />
          <path
            d="M 50,35 Q 65,20 75,25 Q 80,30 75,40 Q 65,45 50,40 Z"
            fill="#38bdf8"
            className="butterfly-wing top-right"
          />
          
          {/* Bottom wings */}
          <path
            d="M 50,55 Q 35,50 28,55 Q 25,60 30,65 Q 40,70 50,65 Z"
            fill="#7dd3fc"
            className="butterfly-wing bottom-left"
          />
          <path
            d="M 50,55 Q 65,50 72,55 Q 75,60 70,65 Q 60,70 50,65 Z"
            fill="#bae6fd"
            className="butterfly-wing bottom-right"
          />
          
          {/* Wing patterns */}
          <circle cx="35" cy="32" r="3" fill="#f0f9ff" opacity="0.9" />
          <circle cx="65" cy="32" r="3" fill="#f0f9ff" opacity="0.9" />
          <circle cx="38" cy="58" r="2" fill="#e0f2fe" opacity="0.8" />
          <circle cx="62" cy="58" r="2" fill="#e0f2fe" opacity="0.8" />
          
          {/* Antennae */}
          <path
            d="M 48,30 Q 45,25 42,28"
            stroke="#0284c7"
            strokeWidth="1"
            fill="none"
            className="antenna"
          />
          <path
            d="M 52,30 Q 55,25 58,28"
            stroke="#0284c7"
            strokeWidth="1"
            fill="none"
            className="antenna"
          />
          <circle cx="42" cy="28" r="1" fill="#0284c7" />
          <circle cx="58" cy="28" r="1" fill="#0284c7" />
        </svg>
      </div>
    </div>
  )
}

export default ScrollButterfly
