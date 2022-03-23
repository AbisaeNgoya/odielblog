import Sidebar from "../../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
      
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
            <span className="settingUpdate">Update Account</span>
            <span className="settingDelete">Delete account</span>
            </div>
        
        <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsProfilePic">
            <img  className="settingsProfilePicImg"src="https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /> 
            
            
            <label htmlFor="fileinput">
            <i className="settingProfilePicIcon fa-solid fa-user"></i>

            </label>
            <input type="file" id="fileinput" style={{display:"none"}}/>
            
            </div>
            <label>Username</label>
            <input type="text" placeholder="username"/>
            <label>email</label>
            <input type="email" placeholder="abisaengoya@gmail.com"/>
            <label>Password</label>
            <input type="password"/>
            <button className="settingSubmit">Update</button>
            </form>
        </div>
        
        
        <Sidebar/>
     </div>
     
    
  )
}
