"use client"

const VIDEOS = [
  {
    playbackId: "LFZoTXRUDQZyjenS4ElPsltfd9Dde02V45lAZE4kcYf00",
  },
]

export function MuxVideoSlideshow() {
  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) and (orientation: portrait) {
          .mobile-portrait-video {
            width: 100vw !important;
            height: 177.78vw !important; /* 9:16 aspect ratio (100 * 16/9 = 177.78) */
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
          }
        }
        @media (max-width: 1024px) and (orientation: portrait) {
          .mobile-portrait-video {
            width: 100vw !important;
            height: 177.78vw !important; /* 9:16 aspect ratio */
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
          }
        }
      `}</style>
      <div className="fixed inset-0 w-screen h-screen overflow-hidden">
        <iframe
          src={`https://player.mux.com/${VIDEOS[0].playbackId}?autoplay=true&muted=true&loop=true`}
          className="absolute inset-0 w-full h-full mobile-portrait-video"
          style={{
            border: 'none',
            objectFit: 'cover',
          }}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
        />
      </div>
    </>
  )
}
