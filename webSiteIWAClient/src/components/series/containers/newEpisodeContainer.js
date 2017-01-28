/**
 * Created by simonthome on 27/01/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as myEpisodeAction from '../../../actions/myEpisodesAction';
import NewEpisodeScene from '../scenes/newEpisodeScene';
import moment from 'moment';

class NewEpisodeContainer extends Component {

  constructor(props) {
    super(props);
    this.state= {
      episodeTitle: '',
      format: '',
      downloadLink: '',
      subLink: '',
      season: '',
      formatOptions: [{
        value:'DVD', text:'DVD'
      }, {
        value:'BlueRay', text:'BlueRay'
      }],
      seasonOptions: [
        { value: 'season1', text: 'Saison 1',  },
        { text: 'Saison 2', value: 'season2' },
        { text: "Saison 3", value: 'season3' },
      ],
      modalOpen: false,
    }
  }

  handleOpen() {this.setState({modalOpen: true});}

  handleClose() {
    this.setState({
      modalOpen: false, episodeTitle: '',
      format: '',
      downloadLink: '',
      subLink: '',
    });
  }

  updateSeason(e, {value}) {
    this.setState({season: value});
    console.log(this.state.season);
  }

  updateEpisodeTitle(title) {this.setState({episodeTitle: title.target.value});}

  updateFormat(e, {value}) {this.setState({format: value});}

  updateDownloadLink(link) {this.setState({downloadLink: link.target.value}); console.log(this.state.downloadLink)};

  updateSubLink(link) {this.setState({subLink: link.target.value});}

  addEpisode() {
    console.log(this.state.episodeTitle);
    console.log(this.state.format);
    console.log(this.state.downloadLink);
    console.log(this.state.subLink);
    console.log(this.props.tvShowId);
    console.log(this.state.season);

    const episodeData = {
      tvShowId : this.props.tvShowId,
      episodeTitle: this.state.episodeTitle,
      actors: this.state.actors,
      season: this.state.season,
      format: this.state.format,
      category: this.state.category,
      downloadLink: this.state.downloadLink,
      subLink: this.state.subLink,
      productionDate: this.state.productionDate,
    };
    this.props.createEpisode(episodeData)
      .then(() => {
        this.handleClose();
      })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <NewEpisodeScene
        modalOpen={this.state.modalOpen}
        formatOptions={this.state.formatOptions}
        seasonOptions={this.state.seasonOptions}
        format={this.state.format}
        handleOpen={this.handleOpen.bind(this)}
        handleClose={this.handleClose.bind(this)}
        updateEpisodeTitle={this.updateEpisodeTitle.bind(this)}
        updateFormat={this.updateFormat.bind(this)}
        updateDownloadLink={this.updateDownloadLink.bind(this)}
        updateSubLink={this.updateSubLink.bind(this)}
        updateSeason={this.updateSeason.bind(this)}
        addEpisode={this.addEpisode.bind(this)}
      />
    )
  }
}



const mapStateToProps = (state, ownProps) => {
  return {
    myEpisodes: state.myEpisodes,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createEpisode: episode => dispatch(myEpisodeAction.createEpisode(episode)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewEpisodeContainer);