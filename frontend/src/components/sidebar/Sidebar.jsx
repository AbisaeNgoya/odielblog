import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
         <div className="sideBarItem">
             <span className="sideBarTitle">ABOUT ME</span>
             <img className="image"src="https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
             <p className="paragraph">
             Cognitive load" relates to the amount of information that working memory can hold at one time
         </p>
         </div>
         <div className="sideBarItem">
             <span className="sideBarTitle">CATEGORIES</span>
             <ul className="sideBarListItems">
                 
                 
                     <li className="listItems">MUSIC</li>
                     <li className="listItems">SPORT</li>
                     <li className="listItems">YOUTUBE</li>
                     <li className="listItems">CAREER</li>
             </ul>
         </div>
         <div className="sidebarSocial">
             <div className="sidebarIcons">
                 <span className="sideSocialTitle">FOLLOW US</span>
             <i class="topIcon fa-brands fa-facebook"></i>
             <i class="topIcon fa-brands fa-twitter"></i>
             <i class="topIcon fa-brands fa-whatsapp"></i>
             </div>
            

         </div>
         
    </div>
  )
}
