import "./MainContainer.css"
import UserImage from "./UserImage";

function MainContainer(props){
    const {items}=props;
    return(
        <div class="main-container">
        { 
        items.map((userdata) => (
            <div className="user-infos"> 
            <UserImage />
              <div className="user-details">
                 <h2>{userdata.userName}</h2>
                 <button className="follow-user">Follow</button>
                 </div>
              </div>  
        ))
            }
        </div>
         
    )
}
export default MainContainer;