/**
 * Created by simonthome on 27/01/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as tvshowAction from '../../../actions/myTvshowAction';
import UpdateTvshowScene from '../scenes/updatetvshowScene';
import moment from 'moment';

class UpdateTvshowContainer extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.tvshow);
    this.state= {
      tvshowId: this.props.tvshow._id,
      tvshowTitle: this.props.tvshow.tvShowTitle,
      actors : this.props.tvshow.actors,
      totalSeasons: this.props.tvshow.totalSeason.toString(),
      category: this.props.tvshow.category,
      productionDate: '',
      startDate: moment(this.props.tvshow.productionDate),
      categoryOptions: [{
        value:'Romantique', text:'Romantique'
      }, {
        value:'Comedie', text:'Comédie'
      }, {
        value:'Action', text:'Action'
      }],
      modalOpen: false,
      tvshowIndex: this.props.tvshowIndex
    };
    console.log(this.state.startDate);
  }



  handleOpen() {this.setState({modalOpen: true});}

  handleClose() {
    this.setState({modalOpen: false});
  }

  updateTvshowTitle(title) {this.setState({tvshowTitle: title.target.value});}

  updateActors(title) {
    let actorsArray = title.target.value.split(',');
    this.setState({actors: actorsArray});
  }

  updateTotalSeasons(total) {
    let totalSeasons = parseInt(total);
    this.setState({totalSeasons: totalSeasons});
  }

  updateCategory(e, {value}) {this.setState({category: value});}


  updateProdDate(date) {this.setState({productionDate: date.format(), startDate: date});}

  updateTvshow() {
    console.log(this.state.tvshowTitle);
    console.log(this.state.actors);
    console.log(this.state.category);
    console.log(this.state.productionDate);

    const tvshowData = {
      id: this.state.tvshowId,
      totalSeason: this.state.totalSeasons,
      tvShowTitle: this.state.tvshowTitle,
      actors: this.state.actors,
      category: this.state.category,
      productionDate: this.state.productionDate,
    };

    this.props.updateTvshow(tvshowData, this.state.tvshowIndex)
      .then(() => {
        this.handleClose();
        console.log(this.props.myTvshows);
      })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <UpdateTvshowScene
        modalOpen={this.state.modalOpen}
        startDate={this.state.startDate}
        categoryOptions={this.state.categoryOptions}
        category={this.state.category}
        tvshowTitle={this.state.tvshowTitle}
        actors={this.state.actors}
        totalSeasons={this.state.totalSeasons}
        productionDate={this.productionDate}
        handleOpen={this.handleOpen.bind(this)}
        handleClose={this.handleClose.bind(this)}
        updateTvshowTitle={this.updateTvshowTitle.bind(this)}
        updateActors={this.updateActors.bind(this)}
        updateTotalSeasons={this.updateTotalSeasons.bind(this)}
        updateCategory={this.updateCategory.bind(this)}
        updateProdDate={this.updateProdDate.bind(this)}
        updateTvshow={this.updateTvshow.bind(this)}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    myTvshows: state.myTvshows,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTvshow: (tvshow, id) => dispatch(tvshowAction.updateTvshow(tvshow, id)),

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTvshowContainer);