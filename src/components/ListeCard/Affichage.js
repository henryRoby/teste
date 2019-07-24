import React, { Component } from 'react';
import axios from 'axios';
import "./Affichage.css"
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default class Affichage extends Component {

    constructor(props) {
        super(props);
        this.state = { produit: [] };

    }
    componentDidMount() {
        axios.get('http://localhost:8080/user/produit/')
            .then(response => {
                console.log('i am a response', response)
                this.setState({ produit: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    liste() {
        return <div className='container'>
            <div className="cart">
                {(this.state.produit.length > 0) ? (this.state.produit.map((obj) => {
                    return <div >
                        <div className="" key={obj._id}>
                            <div className="">
                                <img id="imagiko" src={'http://localhost:8080/user/produitImage/' + obj.image} alt="pdp" />
                            </div>
                            <div className="row">
                                <div className="col-md-1">
                                    <label>Titre</label>:<br />
                                    <h4>{obj.nom}</h4>
                                </div>
                                <div className="col-md-3">
                                    <label>Prix</label> <p>{obj.prix} Ar</p>
                                    <label>l’horaire de début</label> <p>{obj.debut}</p>
                                </div>
                                <div className="col-md-3">
                                    <label>la durée</label><p>{obj.durer}</p>
                                    <label>une date</label><p>{obj.date}</p>
                                </div>
                                <div className="col-md-4">
                                    <label>le nombre de places disponible</label> <p>{obj.nombrePlaceDispo}</p>
                                    <label>le nombre de places réservées</label><p>{obj.nombrePlaceReserver}</p>
                                </div>

                                <div className="col-md-1">
                                    <label>Description :</label>
                                    <br />{obj.description}
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-xs-10">
                                        <button id="detay" type="button" class="btn btn-outline" onClick={() => {
                                            confirmAlert({
                                                customUI: ({ onClose }) => {
                                                    return (
                                                        <div className='custom-ui'>

                                                            <FormGroup controlId="nom" bsSize="large">
                                                                <label>Nom</label>
                                                                <FormControl autoFocus type="text" value={this.state.nom} onChange={this.handleChange} />
                                                            </FormGroup>
                                                            <FormGroup controlId="prenom" bsSize="large">
                                                                <label>Prenom</label>
                                                                <FormControl autoFocus type="text" value={this.state.prenom} onChange={this.handleChange} />
                                                            </FormGroup>
                                                            <FormGroup controlId="email" bsSize="large">
                                                                <label>Email</label>
                                                                <FormControl value={this.state.email} onChange={this.handleChange} type="email" />
                                                            </FormGroup>
                                                            <FormGroup controlId="telephone" bsSize="large">
                                                                <label>Telephone</label>
                                                                <FormControl autoFocus type="text" value={this.state.tel} onChange={this.handleChange} />
                                                            </FormGroup>
                                                            <h1>Are you sure</h1>
                                                            <button type="button" class="btn btn-info" onClick={onClose}>Annuler</button>
                                                            <Button
                                                                onClick={() => {
                                                                        confirmAlert({
                                                                            customUI: ({ onClose }) => {
                                                                                return (
                                                                                    <div className='custom-ui'>
                                                                                        <h>Votre place est réservées</h>
                                                                                        <button type="button" class="btn btn-info" onClick={onClose}>  ok  </button>
                                                                                    </div>
                                                                                );
                                                                            }
                                                                        });
                                                                    }
                                                               
                                                                }
                                                                type="submit">
                                                                Envoyer <i class="fab fa-telegram-plane"></i>
                                                                </Button>
                                                        </div>
                                                    );
                                                }
                                            });
                                        }}>intéresser</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                })) : ('')
                }
            </div>
        </div>
    }
    render() {
        return (
            <div>
                {this.liste()}
            </div>
        );
    }
}