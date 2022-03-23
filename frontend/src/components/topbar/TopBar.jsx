import "./topbar.css";

export default function TopBar() {
  return (
    <div className="top"> 
    <div className="topleft">
    <i class="topIcon fa-brands fa-facebook"></i>
    <i class="topIcon fa-brands fa-twitter"></i>
    <i class="topIcon fa-brands fa-whatsapp"></i>
    </div>
    <div className="topcenter">
        <ul className="topList">
            <li className="topListItem">
              <a href="#about">HOME

            </a>
            
            </li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">PROGRAM</li>
            <li className="topListItem">EVENTS</li>
            <li className="topListItem">GALLERY</li>
            <li className="topListItem">SUPPORT US</li>
            <li className="topListItem">LOGOUT</li>

        </ul>

    </div>
    <div className="topright">
        <img className="topImage"
        src="https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        <i class="fa-solid fa-magnifying-glass"></i>

    </div>


    </div>
  )
}
