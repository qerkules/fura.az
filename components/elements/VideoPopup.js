'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css"

export default function VideoPopup({ style }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            {style == 1 &&
                <a onClick={() => setOpen(true)} className="popup-youtube icon-video">
                    <i className="icon-Polygon-6" />
                </a>
            }
            {style == 2 &&
                <a onClick={() => setOpen(true)} className="popup-youtube btn-video ml-28">
                    <i className="icon-Polygon-6" />
                </a>
            }
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />


        </>
    )
}