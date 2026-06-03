import { useState, useEffect, useRef } from 'react'
import { irisService } from '@renderer/services/Iris-voice-ai'

const Sphere = () => {
  const [volume, setVolume] = useState(0)
  const frameRef = useRef<number>(0)
  const dataArray = useRef(new Uint8Array(128))

  useEffect(() => {
    const updateVolume = () => {
      if (irisService.analyser) {
        irisService.analyser.getByteFrequencyData(dataArray.current)
        let sum = 0
        for (let i = 0; i < dataArray.current.length; i++) {
          sum += dataArray.current[i]
        }
        const vol = sum / dataArray.current.length / 128
        setVolume(vol)
      }
      frameRef.current = requestAnimationFrame(updateVolume)
    }

    frameRef.current = requestAnimationFrame(updateVolume)
    return () => cancelAnimationFrame(frameRef.current)
  }, [])

  const scale = 1 + volume * 0.4
  const glowSize = 60 + volume * 40
  const opacity = 0.6 + volume * 0.4

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className="relative"
        style={{
          width: '150px',
          height: '150px',
          transform: `scale(${scale})`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Main Sphere */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle at 35% 35%, 
              #33db12 0%, 
              #00F0FF 40%, 
              #0066FF 70%, 
              #001133 100%)`,
            opacity,
            animation: 'spin 8s linear infinite'
          }}
        />

        {/* Glow Effect */}
        <div
          className="absolute rounded-full"
          style={{
            inset: `-${glowSize / 2}px`,
            background: `radial-gradient(circle, 
              rgba(0, 240, 255, ${volume * 0.3}) 0%, 
              rgba(51, 219, 18, ${volume * 0.15}) 40%, 
              transparent 70%)`,
            animation: 'pulse 2s ease-in-out infinite'
          }}
        />

        {/* Inner Highlight */}
        <div
          className="absolute rounded-full"
          style={{
            top: '15%',
            left: '20%',
            width: '35%',
            height: '35%',
            background: `radial-gradient(circle, 
              rgba(255, 255, 255, ${0.4 + volume * 0.4}) 0%, 
              transparent 70%)`,
            filter: 'blur(8px)'
          }}
        />

        {/* Ring 1 */}
        <div
          className="absolute inset-[-10px] rounded-full"
          style={{
            border: `1px solid rgba(0, 240, 255, ${0.2 + volume * 0.3})`,
            animation: 'spin 6s linear infinite'
          }}
        />

        {/* Ring 2 */}
        <div
          className="absolute inset-[-20px] rounded-full"
          style={{
            border: `1px solid rgba(51, 219, 18, ${0.1 + volume * 0.2})`,
            animation: 'spin 10s linear infinite reverse'
          }}
        />
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default Sphere