import Sidebar from "../../../components/sidebar/Sidebar";
import "./single.css";
import SinglePost from "../../../components/singlepost/SinglePost";


export default function Single() {
  return (
    <div className=" single"> 
    <SinglePost />
    <Sidebar />

    </div>
  )
}
