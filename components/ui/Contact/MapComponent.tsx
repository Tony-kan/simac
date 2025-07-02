import React from 'react'

const MapComponent = () => {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123905.83726415233!2d33.7101637671925!3d-13.955187081815415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1921d31ffc299805%3A0x4b7eb9f20a03ff9!2sLilongwe!5e0!3m2!1sen!2smw!4v1751145307232!5m2!1sen!2smw"
                width="100%"
                height="700" 
                style={{border:0}}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">

                </iframe>
            </div>
    )
    }

export default MapComponent