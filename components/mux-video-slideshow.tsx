"use client"

import { useState, useRef } from "react"
import MuxPlayer from "@mux/mux-player-react"

const VIDEOS = [
  {
    playbackId: "LFZoTXRUDQZyjenS4ElPsltfd9Dde02V45lAZE4kcYf00",
  },
  {
    playbackId: "Rl3cITDw5x00594FQge4Chy7faXedmHmGjbfkp01K59uk",
  },
]

export function MuxVideoSlideshow() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const playerRef = useRef(null)

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % VIDEOS.length)
  }

  return (
    <div 
      className="fixed inset-0 w-full h-full overflow-hidden"
      style={{ 
        width: '100vw', 
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      <MuxPlayer
        ref={playerRef}
        playbackId={VIDEOS[currentVideoIndex].playbackId}
        autoPlay
        muted
        loop={false}
        onEnded={handleVideoEnded}
        metadata={{
          video_id: `video-${currentVideoIndex}`,
        }}
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </div>
  )
}
