/**
 * Created by simonthome on 25/01/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as movieAction from '../../../actions/myMoviesAction';
import UpdateMovieScene from '../scenes/updateMovieScene';
import moment from 'moment';

class UpdateMovieContainer extends Component {

  constructor(props) {
    super(props);
    this.state= {
      movieId: this.props.movie._id,
      movieTitle: this.props.movie.movieTitle,
      actorsDisplay: this.props.movie.actors.join(','),
      actors : [],
      format: this.props.movie.format,
      category: this.props.movie.category,
      downloadLink: this.props.movie.downloadLink,
      subLink: this.props.movie.subLink,
      productionDate: '',
      startDate: moment(this.props.movie.productionDate),
      formatOptions: [{
        value:'DVD', text:'DVD'
      }, {
        value:'BlueRay', text:'BlueRay'
      }],
      categoryOptions: [{
        value:'Romantique', text:'Romantique'
      }, {
        value:'Comedie', text:'Comédie'
      }, {
        value:'Action', text:'Action'
      }],
      modalOpen: false,
      movieIndex: this.props.movieIndex
    }
  }



  handleOpen() {this.setState({modalOpen: true});
  console.log(this.state.movieIndex)}

  handleClose() {
    this.setState({modalOpen: false, movieTitle: '',
      actors : [],
      format: '',
      category: '',
      downloadLink: '',
      subLink: '',
      productionDate: '',
      startDate: moment()});
  }

  updateMovieTitle(title) {this.setState({movieTitle: title.target.value});}

  updateActors(title) {
    let actorsArray = title.target.value.split(',');
    this.setState({actors: actorsArray});
  }

  updateFormat(e, {value}) {this.setState({format: value});}

  updateCategory(e, {value}) {this.setState({category: value});}

  updateDownloadLink(link) {this.setState({downloadLink: link.target.value}); console.log(this.state.downloadLink)};

  updateSubLink(link) {this.setState({subLink: link.target.value});}

  updateProdDate(date) {this.setState({productionDate: date.format(), startDate: date});}

  updateMovie() {
    console.log(this.state.movieTitle);
    console.log(this.state.actors);
    console.log(this.state.format);
    console.log(this.state.category);
    console.log(this.state.downloadLink);
    console.log(this.state.subLink);
    console.log(this.state.productionDate);

    const movieData = {
      id: this.state.movieId,
      movieTitle: this.state.movieTitle,
      actors: this.state.actors,
      format: this.state.format,
      category: this.state.category,
      downloadLink: this.state.downloadLink,
      subLink: this.state.subLink,
      productionDate: this.state.productionDate,
    };

    this.props.updateMovie(movieData, this.state.movieIndex)
      .then(() => {
        this.handleClose();
        console.log(this.props.movies);
      })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <UpdateMovieScene
        modalOpen={this.state.modalOpen}
        startDate={this.state.startDate}
        formatOptions={this.state.formatOptions}
        categoryOptions={this.state.categoryOptions}
        format={this.state.format}
        category={this.state.category}
        movieTitle={this.state.movieTitle}
        actorsDisplay={this.state.actorsDisplay}
        downloadLink={this.state.downloadLink}
        subLink={this.state.subLink}
        productionDate={this.productionDate}
        handleOpen={this.handleOpen.bind(this)}
        handleClose={this.handleClose.bind(this)}
        updateMovieTitle={this.updateMovieTitle.bind(this)}
        updateActors={this.updateActors.bind(this)}
        updateFormat={this.updateFormat.bind(this)}
        updateCategory={this.updateCategory.bind(this)}
        updateDownloadLink={this.updateDownloadLink.bind(this)}
        updateSubLink={this.updateSubLink.bind(this)}
        updateProdDate={this.updateProdDate.bind(this)}
        updateMovie={this.updateMovie.bind(this)}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.movies,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMovie: (movie, id) => dispatch(movieAction.updateMovie(movie, id)),

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateMovieContainer);

