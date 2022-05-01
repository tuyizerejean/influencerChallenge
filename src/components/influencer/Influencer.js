import follow from './icon-follow.svg';
import styles from "./Influencer.module.css";
import { connect } from "react-redux";
import {followInfluencer, unFollowInfluencer} from './../../redux/actions/influencer.actions'
const Influencer = (props) => {
    const {influencer} = props;
    return ( 
        <div className={styles.influencer}>
            <div className={styles.bio}>
                <img className={styles.profile} src={influencer.profilePicture} alt={influencer.profilePicture}/>
                <div>
                    <strong><p>@{influencer.username}</p></strong>
                    <p className={styles.title}>{influencer.name}</p>
                </div>
            </div>
            {influencer?.followed ? 
                <button className={styles.followingButton} onClick={() => props.unFollowInfluencer(influencer.userId)} >Following</button>
            : 
                <button className={styles.followButton} onClick={() => props.followInfluencer(influencer.userId)} ><img className={styles.followIcon} src ={follow} alt={ 'follow-icon' }/>Follow</button>
            }
        </div>
     );
}

const mapStateToProps = state => {
    return {
      influencers: state.influencers,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      followInfluencer: (id) => dispatch(followInfluencer(id)),
      unFollowInfluencer: (id) => dispatch(unFollowInfluencer(id)),
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Influencer)