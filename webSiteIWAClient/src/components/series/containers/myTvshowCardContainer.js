/**
 * Created by simonthome on 27/01/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as myEpisodesAction from '../../../actions/myEpisodesAction';
import * as myTvshowsAction from '../../../actions/myTvshowAction';
import MyTvshowCardScene from '../scenes/myTvshowCardScene';
import moment from 'moment';


class MyTvshowCardContainer extends Component {
  constructor(props) {
    super(props);
    this.state= {
      seasonOptions: [
        { value: 'season1', text: 'Saison 1',  },
        { text: 'Saison 2', value: 'season2' },
        { text: "Saison 3", value: 'season3' },
      ]
    };
    console.log(this.props.myTvshows);
  }

  componentDidMount() {
    this.props.fetchTvshowByUser()
      .then(() => {
        console.log('TV SHOW SUCCESS');
        console.log(this.props.myTvshows);
      })
      .catch(err => console.log(err));

  }


  updateSeason(e,value, id) {
    console.log(value);
    console.log(id);
    this.props.fetchEpisodes({tvShowId: id, season: value})
      .then(() => {
        console.log(this.props.myEpisodes)
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <MyTvshowCardScene
          myTvshows={this.props.myTvshows}
          deleteTvshow={this.props.deleteTvshow}
          myEpisodes={this.props.myEpisodes}
          updateSeason={this.updateSeason.bind(this)}
          seasonOptions={this.state.seasonOptions}
        />
      </div>
    )
  }


}

const mapStateToProps = (state, ownProps) => {
  return {
    myEpisodes: state.myEpisodes,
    myTvshows: state.myTvshows,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTvshowByUser: () => dispatch(myTvshowsAction.fetchTvshowByUser()),
    fetchEpisodes: (id) => dispatch(myEpisodesAction.fetchEpisodeByTvshow(id)),
    deleteEpisode: (episodeId, idx) => dispatch(myEpisodesAction.deleteEpisode(episodeId, idx))

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTvshowCardContainer);