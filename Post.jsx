import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post() {
  return (
       <div className="post"> 
         <div className="postWrapper">
          <div className="postTop"> 
           <div className="postTopLeft">
            <img className="postProfilePic" src="assets/person/steve.jpeg" alt=""/>
            <span className="postUsername">Dhruv Kaul</span>
            <span className="postDate"> 15 mins ago</span>
           </div>
           <div className="postTopRight">
            <MoreVertIcon/>
           </div>
         </div>
         <div className="postCenter">
           <span className="postText">This is my new oatmilk latte!</span>
           <img className="postImg" src="assets/posts/oat-latte.jpeg" alt=""/>
         </div>
         <div className="postBottom">
            <div className="postBottomLeft">
              <img className="likeIcon" src="assets/like.png" alt=""/>
              <img className="likeIcon" src="assets/heart.png" alt=""/>
              <span className="postlikeCounter"> 50 people like this</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">10 comments </span>
            </div>
         </div>
         </div>
       </div>
  )
}
