import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat'; 
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">CoffeeBook</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <SearchIcon classname="SearchIcon" />
            <input placeholder="Search for brewers, recipes, photos, videos ..." className="searchInput" />

          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarlinks">
            <span className="topbarLink"> Homepage</span>
            <span className="topbarLink"> Profile</span>

          </div>
          <div className="topbarIcons">
            <div className="topBarIconItem">
              <PersonIcon/>
              <span className="topBarIconBadge">1</span>

            </div>
            <div className="topBarIconItem">
              <ChatIcon/>
              <span className="topBarIconBadge">2</span>

            </div>
            <div className="topBarIconItem">
              <NotificationsIcon/>
              <span className="topBarIconBadge">1</span>

            </div>
          </div>
        </div>
        <img src="/assets/person/steve.jpeg" alt="" className="topbarImg" />
        </div>  
  )
}
