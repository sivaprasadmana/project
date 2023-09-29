import { faFaceSmile, faLocation, faPhotoFilm, faTag } from "@fortawesome/free-solid-svg-icons";
import "./Share.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
let Share = () => {
    return(
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/persons/1.jpeg" alt="" />
                    <input placeholder="what's in your mind safak?" className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareButton">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <FontAwesomeIcon  className="shareIcon" color="orange" icon={faPhotoFilm}></FontAwesomeIcon>
                            
                            <span className="shareOptionText">photo/Video</span>
                        </div>
                        <div className="shareOption">
                            <FontAwesomeIcon  className="shareIcon" color="red" icon={faTag}></FontAwesomeIcon>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <FontAwesomeIcon className="shareIcon" color="green" icon={faLocation}></FontAwesomeIcon>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <FontAwesomeIcon className="shareIcon" color="gold" icon={faFaceSmile}></FontAwesomeIcon>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                   <button className="shareButtons">Share</button>
                </div>
            </div>
        </div>
    )
}
export default Share;