"use client"

export function VideoHero() {
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
          className="video-desktop"
          autoPlay
          muted
          loop
          playsInline
          src="/open.mp4"
        />
        <video
          className="video-mobile"
          autoPlay
          muted
          loop
          playsInline
          src="/bank.mp4"
        />
      </div>
    </>
  )
}