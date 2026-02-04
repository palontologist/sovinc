"use client"

import { useEffect, useRef, useState } from "react"

export function VideoHero() {
  const [currentVideo, setCurrentVideo] = useState(0)
  const [nextVideo, setNextVideo] = useState(1)
  const [activeLayer, setActiveLayer] = useState<'front' | 'back'>('front')
  const [isClient, setIsClient] = useState(false)
  
  // 5 video clips, 5 seconds each, slow-motion: road, run, villas, build, car
  const desktopVideos = ["/road.mp4", "/run.mp4", "/villas.mp4", "/build.mp4", "/car.mp4"] 
  const mobileVideos = ["/road.mp4", "/run.mp4", "/villas.mp4", "/build.mp4", "/car.mp4"]
  
  const frontDesktopRef = useRef<HTMLVideoElement>(null)
  const backDesktopRef = useRef<HTMLVideoElement>(null)
  const frontMobileRef = useRef<HTMLVideoElement>(null)
  const backMobileRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return
    
    // Set playback rate for all videos
    const videos = [frontDesktopRef.current, backDesktopRef.current, frontMobileRef.current, backMobileRef.current]
    videos.forEach(video => {
      if (video) video.playbackRate = 0.75
    })

    // Start crossfade after 4 seconds (before video ends)
    const timer = setTimeout(() => {
      // Toggle active layer - this triggers CSS fade
      setActiveLayer(prev => prev === 'front' ? 'back' : 'front')
      
      // After fade completes (1s), update video indices for next cycle
      setTimeout(() => {
        setCurrentVideo(nextVideo)
        setNextVideo((nextVideo + 1) % 5)
      }, 1000)
    }, 4000) // Start fade at 4s, so it completes by 5s

    return () => clearTimeout(timer)
  }, [isClient, currentVideo, nextVideo])

  return (
    <>
      <style jsx>{`
        .video-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          z-index: 0;
        }
        
        .video-desktop {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100vw;
          height: 56.25vw;
          min-height: 100vh;
          min-width: 177.78vh;
          transform: translate(-50%, -50%);
          object-fit: cover;
        }
        
        .video-mobile {
          display: none;
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100vw;
          height: 177.78vw;
          transform: translate(-50%, -50%);
          object-fit: cover;
        }
        
        @media (max-width: 768px) and (orientation: portrait) {
          .video-desktop {
            display: none;
          }
          .video-mobile {
            display: block;
          }
        }
        
        @media (max-width: 1024px) and (orientation: portrait) {
          .video-desktop {
            display: none;
          }
          .video-mobile {
            display: block;
          }
        }
      `}</style>
      
      <div className="video-container">
        {/* Desktop Videos - Front and Back layers for crossfade */}
        <video
          ref={frontDesktopRef}
          className="video-desktop"
          style={{
            opacity: activeLayer === 'front' ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: activeLayer === 'front' ? 2 : 1
          }}
          autoPlay
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          key={`desktop-front-${desktopVideos[activeLayer === 'front' ? currentVideo : nextVideo]}`}
          src={desktopVideos[activeLayer === 'front' ? currentVideo : nextVideo]}
          onError={(e) => {
            console.log('Video loading interrupted (normal during transitions)')
          }}
        />
        <video
          ref={backDesktopRef}
          className="video-desktop"
          style={{
            opacity: activeLayer === 'back' ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: activeLayer === 'back' ? 2 : 1
          }}
          autoPlay
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          key={`desktop-back-${desktopVideos[activeLayer === 'back' ? currentVideo : nextVideo]}`}
          src={desktopVideos[activeLayer === 'back' ? currentVideo : nextVideo]}
          onError={(e) => {
            console.log('Video loading interrupted (normal during transitions)')
          }}
        />
        
        {/* Mobile Videos - Front and Back layers for crossfade */}
        <video
          ref={frontMobileRef}
          className="video-mobile"
          style={{
            opacity: activeLayer === 'front' ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: activeLayer === 'front' ? 2 : 1
          }}
          autoPlay
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          key={`mobile-front-${mobileVideos[activeLayer === 'front' ? currentVideo : nextVideo]}`}
          src={mobileVideos[activeLayer === 'front' ? currentVideo : nextVideo]}
          onError={(e) => {
            console.log('Video loading interrupted (normal during transitions)')
          }}
        />
        <video
          ref={backMobileRef}
          className="video-mobile"
          style={{
            opacity: activeLayer === 'back' ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: activeLayer === 'back' ? 2 : 1
          }}
          autoPlay
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          key={`mobile-back-${mobileVideos[activeLayer === 'back' ? currentVideo : nextVideo]}`}
          src={mobileVideos[activeLayer === 'back' ? currentVideo : nextVideo]}
          onError={(e) => {
            console.log('Video loading interrupted (normal during transitions)')
          }}
        />
      </div>
    </>
  )
}