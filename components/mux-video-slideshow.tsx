"use client"

import { useState, useRef } from "react"
import MuxPlayer from "@mux/mux-player-react"

const VIDEOS = [
  {
    playbackId: "LFZoTXRUDQZyjenS4ElPsltfd9Dde02V45lAZE4kcYf00",
  },
]

export function MuxVideoSlideshow() {
  const playerRef = useRef(null)

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <MuxPlayer
        ref={playerRef}
        playbackId={VIDEOS[0].playbackId}
        autoPlay
        muted
        loop={true}
        style={{
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
        }}
        className="w-full h-full object-cover"
        metadata={{
          video_id: "background-video",
        }}
      />
    </div>
  )
}
