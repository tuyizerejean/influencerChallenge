
import { useEffect } from "react";
import { connect } from "react-redux";
import './App.css';
import Influencer from './components/influencer/Influencer';
import {getInfluencers} from './redux/actions/influencer.actions'


function App(props) {
  useEffect(() => {
    props.getInfluencers();
  })
  useEffect(() => {
  }, [props.influencers])
  return (
    <div className="container">
      {
        props.influencers.length === 0 ? 
          <p>Loading ...</p> : 
          props.influencers.map((influencer) => (
            <Influencer influencer={influencer} key={influencer.userId}/>
          )
        )
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
    getInfluencers: () => dispatch(getInfluencers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)