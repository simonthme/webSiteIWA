/**
 * Created by simonthome on 23/01/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as movieAction from '../../../actions/myMoviesAction';
import NewMovieScene from '../scenes/newMovieScene';
import moment from 'moment';

  class NewMovieContainer extends Component {

    constructor(props) {
      super(props);
      this.state= {
        movieTitle: '',
        actors : [],
        format: '',
        category: '',
        downloadLink: '',
        subLink: '',
        productionDate: '',
        startDate: moment(),
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
        }, {
          value:'Horreur', text:'Horreur'
        },{
          value:'Anime', text:'Animé'
        },{
          value:'Drame', text:'Drame'
        }, {
            value:'Dessin', text:'Dessins animés'
        }, {
          value:'Documentaire', text:'Documentaire'
        }
        ],
        modalOpen: false,
      }
    }

    handleOpen() {this.setState({modalOpen: true});}

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

    addMovie() {
      console.log(this.state.movieTitle);
      console.log(this.state.actors);
      console.log(this.state.format);
      console.log(this.state.category);
      console.log(this.state.downloadLink);
      console.log(this.state.subLink);
      console.log(this.state.productionDate);

      const movieData = {
        movieTitle: this.state.movieTitle,
        actors: this.state.actors,
        format: this.state.format,
        category: this.state.category,
        downloadLink: this.state.downloadLink,
        subLink: this.state.subLink,
        productionDate: this.state.productionDate,
      };
      this.props.createMovie(movieData)
        .then(() => {
          this.handleClose();
        })
        .catch(err => console.log(err));
    };


    render() {
      return (
        <NewMovieScene
          modalOpen={this.state.modalOpen}
          startDate={this.state.startDate}
          formatOptions={this.state.formatOptions}
          categoryOptions={this.state.categoryOptions}
          format={this.state.format}
          category={this.state.category}
          handleOpen={this.handleOpen.bind(this)}
          handleClose={this.handleClose.bind(this)}
          updateMovieTitle={this.updateMovieTitle.bind(this)}
          updateActors={this.updateActors.bind(this)}
          updateFormat={this.updateFormat.bind(this)}
          updateCategory={this.updateCategory.bind(this)}
          updateDownloadLink={this.updateDownloadLink.bind(this)}
          updateSubLink={this.updateSubLink.bind(this)}
          updateProdDate={this.updateProdDate.bind(this)}
          addMovie={this.addMovie.bind(this)}
        />
      )
    }
  }



const mapStateToProps = (state, ownProps) => {
  return {
    myMovies: state.myMovies,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createMovie: movie => dispatch(movieAction.createMovie(movie)),

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMovieContainer);