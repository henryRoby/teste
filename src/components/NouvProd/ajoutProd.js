import React from 'react';
import "./ajoutProd.css"

class NewProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nom: '',
      prix: '',
      debut: '',
      date: '',
      nombrePlaceDispo: '',
      nombrePlaceReserver: '',
      durer: '',
      description: '',
      image: ''

    };
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('image', this.uploadInput.files[0]);
    data.append('nom', this.state.nom);
    data.append('prix', this.state.prix);
    data.append('debut', this.state.debut);
    data.append('date', this.state.date);
    data.append('nombrePlaceDispo', this.state.nombrePlaceDispo);
    data.append('nombrePlaceReserver', this.state.nombrePlaceReserver);
    data.append('durer', this.state.durer);
    data.append('description', this.state.description);


    fetch('http://localhost:8080/user/produit', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ image: `http://localhost:8080/user/produit/${body.image}` });
        console.log('ity ilay body.image', body.image);

      });
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleUploadImage} className="md-form">
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
        </form>
      </div>

    );
  }
}

export default NewProduct;
