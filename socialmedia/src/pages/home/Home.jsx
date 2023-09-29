import Topbar from "../../coponents/topbar/Topbar";
import Sidebar from "../../coponents/sidebar/Sidebar";
import Rightbar from "../../coponents/rightbar/Rightbar";
import Feed from "../../coponents/feed/Feed";
import "./Home.css"
let Home = () => {
    return(
        <div>
            {/* <h>homee</h> */}
            <Topbar/>
            <div className="homeContainer">
            <Sidebar/>
            <Feed/>
            <Rightbar/>
            
            </div>
            
                
        
        </div>
        

    )
}
export default Home;