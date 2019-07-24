import React, { Component } from 'react';
import axios from 'axios';


class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      produit: {}
    };
  }

  componentDidMount() {
    axios.get('/produit/produitId/'+this.props.match.params.produitId)
      .then(res => {
        this.setState({ produit: res.data });
        console.log(this.state.produit);
      });
  }

  onChange = (e) => {
    const state = this.state.produit
    state[e.target.name] = e.target.value;
    this.setState({produit:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { nom,prix, debut, description, date,nombrePlaceDispo,nombrePlaceReserver,durer,image } = this.state.produit;

    axios.put('/api/produit/'+this.props.match.params.id, { nom, prix, debut, description, date, nombrePlaceDispo,nombrePlaceReserver,durer,image })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
        <div className="form-group mx-sm-3 mb-2">

        <div className="row">

          <div className="col-md-6">

            <div className="col-xs-8">
              <input className="form-control" type="text"
                value={this.state.value}
                onChange={this.onChange}
                name="nom" placeholder="titre" />
            </div>

            <div className="col-xs-8">
              <input className="form-control" type="text"
                value={this.state.value}
                onChange={this.onChange}
                name="prix" placeholder="Prix" />
            </div>


            <div className="col-xs-8">
              <input className="form-control" type="time"
                value={this.state.value}
                onChange={this.onChange}
                name="debut" placeholder="debut" />
            </div>


            <div className="col-xs-8">
              <input className="form-control" type="date"
                value={this.state.value}
                onChange={this.onChange}
                name="date" placeholder="date" />
            </div>

          </div>

          <div className="col-md-6">

            <div className="col-xs-8">
              <input className="form-control" type="number"
                value={this.state.value}
                onChange={this.onChange}
                name="nombrePlaceDispo" placeholder="Place disponible" />
            </div>

            <div className="col-xs-8">
              <input className="form-control" type="number"
                value={this.state.value}
                onChange={this.onChange}
                name="nombrePlaceReserver" placeholder="Place reservé" />
            </div>

            <div className="col-xs-8">
              <input className="form-control" type="time"
                value={this.state.value}
                onChange={this.onChange}
                name="durer" placeholder="durer" />
            </div>


            <div className="col-xs-8">
              <input className="form-control" type="text"
                value={this.state.value}
                onChange={this.onChange}
                name="description" placeholder="Description" />
            </div>
          </div>

        </div>

        <br />
        <div className="row">
          <div className="col-md-4">
            <label id="file">Image
            <input ref={(ref) => { this.uploadInput = ref; }} type="file" name="image" />
            </label>
          </div>
          <div className="col-md-8">
            <button id="validate" className="btn btn-info">Publier</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;