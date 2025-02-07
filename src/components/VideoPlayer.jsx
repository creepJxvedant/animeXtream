import React from 'react'

const VideoPlayer = ({url,title}) => {
  return (
    <div className="relative bg-black mt-6">
    <iframe
        src={url}
        title={`${title} Trailer`}
        allowFullScreen
        className="w-full h-64 sm:h-96"
    ></iframe>
</div>
  )
}

export default VideoPlayer;