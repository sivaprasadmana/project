import { faBookBookmark, faBookmark, faCalendar, faCartPlus, faFeed, faMessage, faPlay, faQuestionCircle, faSave, faSuitcase, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CloseFriend from "../closeFriend/CloseFriend";
import { Users } from "../dummyData";
let Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
               <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <FontAwesomeIcon icon={faFeed} className="sidebarIcon"></FontAwesomeIcon>
                        <span className="sidebarListItemText">Feed</span>
                     </li>
                     <li className="sidebarListItem">
                        <FontAwesomeIcon icon={faMessage} className="sidebarIcon"></FontAwesomeIcon>
                        <span className="sidebarListItemText">Chats</span>
                     </li>
                     <li className="sidebarListItem">
                        <FontAwesomeIcon icon={faPlay} className="sidebarIcon"></FontAwesomeIcon>
                        <span className="sidebarListItemText">Videos</span>
                     </li>
                     <li className="sidebarListItem">
                        <FontAwesomeIcon icon={faUserGroup} className="sidebarIcon"></FontAwesomeIcon>
                        <span className="sidebarListItemText">Groups</span>
                     </li>
                     <li className="sidebarListItem">
                        <FontAwesomeIcon icon={faBookmark} className="sidebarIcon"></FontAwesomeIcon>
                        <span className="sidebarListItemText">Bookmark</span>
                     </li>
                     <li className="sidebarListItem">
                        <FontAwesomeIcon icon={faQuestionCircle} className="sidebarIcon"></FontAwesomeIcon>
                        <span className="sidebarListItemText">Question</span>
                     </li>
                     <li className="sidebarListItem">
                        <FontAwesomeIcon icon={faSuitcase} className="sidebarIcon"></FontAwesomeIcon>
                        <span className="sidebarListItemText">Jobs</span>
                     </li>
                     <li className="sidebarListItem">
                        <FontAwesomeIcon icon={faCalendar} className="sidebarIcon"></FontAwesomeIcon>
                        <span className="sidebarListItemText">Event</span>
                     </li> 
                     <li className="sidebarListItem">
                        <FontAwesomeIcon icon={faCartPlus} className="sidebarIcon"></FontAwesomeIcon>
                        <span className="sidebarListItemText">Courses</span>
                     </li>
               </ul>
               <button className="sidebarButton">Show More</button>
               <hr className="sidebarHr"/>
               <ul className="sidebarFriendList">
              {Users.map(u =>(
                <CloseFriend user={u}/>
              ))}
              </ul>
            </div>
        </div>
    )
}
export default Sidebar;