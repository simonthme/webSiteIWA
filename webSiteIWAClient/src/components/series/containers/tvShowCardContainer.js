/**
 * Created by simonthome on 28/01/2017.
 */
/**
 * Created by simonthome on 27/01/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as myEpisodesAction from '../../../actions/myEpisodesAction';
import * as newTvshowsAction from '../../../actions/newTvshowsAction';
import TvShowCardScene from '../scenes/tvShowCardScene';
import moment from 'moment';


class TvshowCardContainer extends Component {
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
    this.props.fetchNewTvshows()
      .then(() => {
        console.log('TV SHOW SUCCESS');
        console.log(this.props.tvShows);
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
        <TvShowCardScene
          tvShows={this.props.newTvshows}
          myEpisodes={this.props.myEpisodes}
          seasonOptions={this.state.seasonOptions}
          updateSeason={this.updateSeason.bind(this)}
        />
      </div>
    )
  }


}

const mapStateToProps = (state, ownProps) => {
  return {
    myEpisodes: state.myEpisodes,
    newTvshows: state.newTvshows,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNewTvshows: () => dispatch(newTvshowsAction.fetchNewTvshows()),
    fetchEpisodes: (id) => dispatch(myEpisodesAction.fetchEpisodeByTvshow(id)),

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TvshowCardContainer);