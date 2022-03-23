import "./write.css";

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg"src="https://images.pexels.com/photos/1144687/pexels-photo-1144687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        <div className="writeFormGroup">
            <form className="formGroup">
                <label htmlFor="file input">
                <i className="addButton fa-solid fa-plus"></i>
                </label>
                <input type="file" id="file input" style={{display:"none"}}/>
                <input type="text"  placeholder ="Title" className="writeInput" autoFocus={true}/>
                
            </form>
            <div className="formGroup">
                    <textarea placeholder="tell your story" className="writeInput writeText"></textarea>
                </div>
            <button className="submit">publish</button>
        </div>
        </div>
  )
}
