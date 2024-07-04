
import VideoPopup from '../elements/VideoPopup'

export default function Video() {
    return (
        <>
            <div className="widget-tf-video">
                <div className="themesflat-container">
                    <div className="tf-video video-wrap">
                        <VideoPopup style={1}/>
                        <div className="title-video">Watch <span className="text-red">Video</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}
