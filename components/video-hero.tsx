"use client"

import { useEffect, useRef, useState } from "react"

export function VideoHero() {
  const [currentVideo, setCurrentVideo] = useState(0)
  const [isClient, setIsClient] = useState(false)
  
  // Replace these with your actual 3 videos
  const desktopVideos = ["/bank.mp4", "/scroll.mp4", "/open.mp4"] 
  const mobileVideos = ["/bank.mp4", "/scroll.mp4", "/open.mp4"]
  
  const videoRef = useRef<HTMLVideoElement>(null)
  const mobileVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return
    
    const setupVideo = (video: HTMLVideoElement | null) => {
      if (!video) return
      
      const handleVideoEnd = () => {
        setCurrentVideo((prev) => (prev + 1) % 3)
      }

      video.addEventListener('ended', handleVideoEnd)
      video.playbackRate = 0.75 // Slow motion effect
      
      return () => {
        video.removeEventListener('ended', handleVideoEnd)
      }
    }

    const desktopCleanup = setupVideo(videoRef.current)
    const mobileCleanup = setupVideo(mobileVideoRef.current)
    
    return () => {
      desktopCleanup?.()
      mobileCleanup?.()
    }
  }, [isClient, currentVideo])

  useEffect(() => {
    if (!isClient) return
    
    videoRef.current?.play()
    mobileVideoRef.current?.play()
  }, [currentVideo, isClient])

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
        <video
          ref={videoRef}
          className="video-desktop"
          autoPlay
          muted
          playsInline
          key={desktopVideos[currentVideo]}
          src={desktopVideos[currentVideo]}
        />
        <video
          ref={mobileVideoRef}
          className="video-mobile"
          autoPlay
          muted
          playsInline
          key={mobileVideos[currentVideo]}
          src={mobileVideos[currentVideo]}
        />
      </div>
    </>
  )
}