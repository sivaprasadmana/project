import "./Feed.css"
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../dummyData";
let Feed = () => {
    return(
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {Posts.map((p) =>(
                <Post key={p.id} Post={p}/>
                ))}
              
                
                
            </div>
        </div>
    )
}
export default Feed;