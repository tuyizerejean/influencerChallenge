import UserImage from "./UserImage"
import "./UserInfos.css"

function UserInfos(props)
{  
   return (
     <div className="user-infos"> 
   <UserImage />
     <div className="user-details">
        <h2>{props.userName}</h2>
        <button className="follow-user">Follow</button>
        </div>
     </div>   
   ) 
}
export default UserInfos