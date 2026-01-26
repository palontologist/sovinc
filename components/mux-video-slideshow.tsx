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
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      <MuxPlayer
        ref={playerRef}
        playbackId={VIDEOS[0].playbackId}
        autoPlay
        muted
        loop={true}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        className="w-full h-full"
        metadata={{
          video_id: "background-video",
        }}
      />
    </div>
  )
}
