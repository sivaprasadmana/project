import Topbar from "../../coponents/topbar/Topbar";
import Sidebar from "../../coponents/sidebar/Sidebar";
import Rightbar from "../../coponents/rightbar/Rightbar";
import Feed from "../../coponents/feed/Feed";
import "./Profile.css"
let Profile = () => {
    return(
        <div>
         <Topbar/>
            <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                    <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
                    <img className="profileUserImg" src="assets/persons/7.jpeg" alt="" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Safak Kocaoglu</h4>
                        <span className="profileInfoDesc">Hello my friends!</span>
                     </div>
                 </div>
                <div className="profileRightBottom">
                     <Feed/>
                    <Rightbar Profile/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;