import "./Rightbar.css"
import { Users } from "../dummyData";
import Online from "../online/Online";
let Rightbar = ({profile}) => {
    const HomeRidgtbar = () => {
        return(
            <>
            <div className="birtdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>pola Foster</b> and <b>three Others friends</b> have a birthday today
                    </span>
                </div>
                <img className="rightbarAd" src="assets/ad.png" alt="" />
                <h4 className="rightbarTitle"> Online Friend</h4>
                <ul className="rightbarFriendList">
                 {Users.map(u=>(
                    <Online key={u.id} User={u}/>
                 ))}
                </ul></>
        )
    }
    const ProfileRightbar = () => {
        return(
           <> 
           <h4 className="rightbatTitle">User Information</h4>
           <div className="rightbarInfo">
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">New York</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="rightbarInfoValue">Madrid</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship:</span>
                <span className="rightbarInfoValue">Single</span>
            </div>
             </div>
             <h4 className="rightbatTitle">User Friends</h4>
             <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/persons/1.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/persons/2.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/persons/3.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/persons/4.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/persons/5.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/persons/6.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
             </div>
           </>
        )
    }
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile? <ProfileRightbar/> : <HomeRidgtbar/>}
            </div>
        </div>
    )
}
export default Rightbar;