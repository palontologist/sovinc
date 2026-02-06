"use client"

import MuxPlayer from "@mux/mux-player-react"

export function VideoHero() {
  return (
    <div className="video-hero-container">
      <MuxPlayer
        playbackId="300vTAyOM00JDqY00Hqkk4zXvnLLqk2hLMRy4L00tROTIkQ"
        autoPlay="muted"
        loop
        muted
        playsInline
        nohotkeys
        thumbnailTime={0}
        startTime={0}
        style={{
          position: 'absolute',
          inset: '0',
          width: '100%',
          height: '100%',
          '--media-object-fit': 'cover',
          '--media-object-position': 'center',
          '--controls': 'none',
          '--dialog': 'none',
          '--loading-indicator': 'none',
          '--play-button': 'none',
          '--live-button': 'none',
          '--seek-backward-button': 'none',
          '--seek-forward-button': 'none',
          '--mute-button': 'none',
          '--captions-button': 'none',
          '--airplay-button': 'none',
          '--pip-button': 'none',
          '--fullscreen-button': 'none',
          '--cast-button': 'none',
          '--playback-rate-button': 'none',
          '--volume-range': 'none',
          '--time-range': 'none',
          '--time-display': 'none',
          '--duration-display': 'none',
          '--bottom-play-button': 'none',
          '--top-bar': 'none',
          '--center-controls': 'none',
          '--bottom-bar': 'none',
        }}
      />
    </div>
  )
}