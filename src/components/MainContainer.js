import UserInfos from "./UserInfos"
import "./MainContainer.css"

function MainContainer(props){

    return(
        <div class="main-container">
        <UserInfos
        userName={props.items[0].userName} 
       
        > </UserInfos>
        <UserInfos 
        userName={props.items[1].userName}
        
        > </UserInfos>
        <UserInfos
        userName={props.items[2].userName}
        
        > </UserInfos>
         <UserInfos
        userName={props.items[3].userName}
        
        > </UserInfos>
            <UserInfos
        userName={props.items[3].userName}
        
        > </UserInfos>
        </div>
         
    )
}
export default MainContainer;