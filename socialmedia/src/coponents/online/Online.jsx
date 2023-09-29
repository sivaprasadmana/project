import "./Online.css"
let Online = ({User}) => {
    return(
        <div>
         <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
             <img className="rightbarProfileImg" src={User.profilePicture} alt="" />
              <span className="rightbarOnline"></span>
            </div>
              <span className="rightbarUserName">{User.username}</span>
        </li>
        </div>
    )
}
export default Online;