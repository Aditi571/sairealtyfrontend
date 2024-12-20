import React from 'react'

export const MapComponent = ({srcvalue}) => {
  return (
    <div className="map-container" >
        <iframe
        title="Google Map"
        src={srcvalue.location}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}
