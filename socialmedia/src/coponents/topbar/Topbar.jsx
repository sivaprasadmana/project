import {faBell, faComment, faEnvelope, faMessage, faPerson, faSearch, faUser} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Topbar.css"
let Topbar = () => {
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">sivasocial</span>
            </div>
            <div className="topbarCenter">
                <div className='searchbar'>
                <FontAwesomeIcon icon={faSearch} className='searchIcon'></FontAwesomeIcon>
                    <input placeholder='search for friends post or vedio' className='searchInput'/>
                </div>
            </div>
            <div className="topbarRight">
                <div className='topbarLinks'>
                <span className='topbarLink'>Homepage</span>
                <span className='topbarLink'>Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItems">
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        <span className='topbarIconBadge'>1</span>
                    </div>
                </div>
                <div className='topbarIcons'>
                    <div className='topbarIconItems'>
                    <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
                    <span className="topbarIconBadge">2</span>
                    </div>
                </div>
                <div className='topbarIcons'>
                    <div className='topbarIconItems'>
                    <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                    <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/persons/1.jpeg" alt="" className="topbarImg" />
            </div>
        </div>
    )
} 
export default Topbar;