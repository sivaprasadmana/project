import "./Post.css"
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Users} from "../dummyData";
import { useState } from "react";
let Post = ({Post}) => {
 
    // const user = Users.filter(u=>u.id==1)
    // console.log(user[0].username)
    const [like,setLike] = useState(Post.like)
    const [isLiked,setIsLiked] = useState(false)

    let likeHandler = () =>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
    return(
        <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img  className="postProfileImg" src={Users.filter((u) => u.id == Post?.userId)[0].profilePicture} alt="" />
                    <span className="postUsername">
                        {Users.filter((u) => u.id === Post?.userId)[0].username}
                    </span>
                    <span className="postDate">{Post.date}</span>
                </div>
                <div className="postTopRight">
                    <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{Post?.desc}</span>
                <img className="postImg" src={Post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postButtoLeft">
                    <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
                    <img className="heartIcon" src="assets/heart.png" onClick={likeHandler}  alt="" />
                    <span className="postLikeCounter">{like} people liked it</span>
                </div>
                <div className="postButtonRight">
                  <span className="postCommentText">{Post.comment} comments</span>  
                </div>
            </div>
        </div>
        </div>
    )
}
export default Post;