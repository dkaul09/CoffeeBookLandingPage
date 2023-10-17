import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'; 

import CoffeeIcon from '@mui/icons-material/Coffee';


export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper"> 
        <div className="shareTop">
            <img className="shareProfilePic" src="/assets/person/steve.jpeg" alt=""/>
            <input placeholder="What's brewing?" className="shareInput" />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText"> Photo or Video</span>
                </div>
                <div className="shareOption">
                    <LabelIcon htmlColor="gold" className="shareIcon"/>
                    <span className="shareOptionText"> Tag</span>
                </div>
                <div className="shareOption">
                    <CoffeeIcon htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText"> Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotionsIcon htmlColor="brown" className="shareIcon"/>
                    <span className="shareOptionText"> Reactions </span>
                </div>
            </div>
            <button className="shareButton"> Share </button>
        </div>

        </div>
    </div>
  )
}
