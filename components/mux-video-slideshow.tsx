"use client"

const VIDEOS = [
  {
    playbackId: "LFZoTXRUDQZyjenS4ElPsltfd9Dde02V45lAZE4kcYf00",
  },
]

export function MuxVideoSlideshow() {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      <iframe
        src={`https://player.mux.com/${VIDEOS[0].playbackId}?autoplay=true&muted=true&loop=true`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          border: 'none',
        }}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
      />
    </div>
  )
}
