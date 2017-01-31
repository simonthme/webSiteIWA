/**
 * Created by simonthome on 27/01/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as myTvshowAction from '../../../actions/myTvshowAction';
import NewTvshowScene from '../scenes/newTvshowScene';
import moment from 'moment';

class NewTvshowContainer extends Component {

  constructor(props) {
    super(props);
    this.state= {
      tvshowTitle: '',
      actors : [],
      category: '',
      productionDate: '',
      startDate: moment(),
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
      messageVisible: true,
      errorMessage: ''
    }
  }

  dismissMessage(e, data) {
    this.setState({messageVisible:true});
  }

  handleOpen() {this.setState({modalOpen: true});}

  handleClose() {
    this.setState({modalOpen: false, tvshowTitle: '',
      actors : [],
      format: '',
      category: '',
      downloadLink: '',
      subLink: '',
      productionDate: '',
      startDate: moment()});
  }

  updateTvshowTitle(title) {
    this.setState({tvshowTitle: title.target.value});
    console.log(this.state.tvshowTitle);
  }

  updateActors(title) {
    let actorsArray = title.target.value.split(',');
    this.setState({actors: actorsArray});
  }


  updateFormat(e, {value}) {this.setState({format: value});}

  updateCategory(e, {value}) {this.setState({category: value});}

  updateDownloadLink(link) {this.setState({downloadLink: link.target.value}); console.log(this.state.downloadLink)};

  updateSubLink(link) {this.setState({subLink: link.target.value});}

  updateProdDate(date) {this.setState({productionDate: date.format(), startDate: date});}

  addTvshow() {
    console.log(this.state.tvshowTitle);
    console.log(this.state.actors);
    console.log(this.state.category);
    console.log(this.state.productionDate);

    if (this.state.tvshowTitle === '' || this.state.actors.length === 0 || this.state.category === '') {
      this.setState({messageVisible: false, errorMessage: 'Veuillez remplir tous les champs.'});
    } else {
      const tvshowData = {
        tvshowTitle: this.state.tvshowTitle,
        actors: this.state.actors,
        category: this.state.category,
        productionDate: this.state.productionDate,
      };
      this.props.createTvshow(tvshowData)
        .then(() => {
          this.handleClose();
          console.log(this.props.myTvshows);
        })
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <NewTvshowScene
        modalOpen={this.state.modalOpen}
        startDate={this.state.startDate}
        categoryOptions={this.state.categoryOptions}
        category={this.state.category}
        messageVisible={this.state.messageVisible}
        errorMessage={this.state.errorMessage}
        dismissMessage={this.dismissMessage.bind(this)}
        handleOpen={this.handleOpen.bind(this)}
        handleClose={this.handleClose.bind(this)}
        updateTvshowTitle={this.updateTvshowTitle.bind(this)}
        updateActors={this.updateActors.bind(this)}
        updateCategory={this.updateCategory.bind(this)}
        updateProdDate={this.updateProdDate.bind(this)}
        addTvshow={this.addTvshow.bind(this)}
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
    createTvshow: tvshow => dispatch(myTvshowAction.createTvshow(tvshow)),

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTvshowContainer);