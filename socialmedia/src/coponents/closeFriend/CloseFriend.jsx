import "./CloseFriend.css"
let CloseFriend = ({user}) => {
    return(
        <div>
            <li className="sidebarFriend">
                    <img className="sidebarFriendimg" src={user.profilePicture} alt="" />
                    <span className="sidebarFriendName">{user.username}</span>
                </li>
        </div>
    )
}
export default CloseFriend;