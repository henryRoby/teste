import React, { Component } from 'react';


import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";

export default class Menu extends Component {
    state = { modal1: false, modal2: false, modal3: false, modal4: false, modal5: false, collapseID: "", redirect: false }
    toggleCollapse = collapseID => () => this.setState(prevState => ({ collapseID: prevState.collapseID !== collapseID ? collapseID : "" }));

toggle = nr => () => { let modalNumber = "modal" + nr; this.setState({ [modalNumber]: !this.state[modalNumber] }); }
    render() {
        return (
            <div>
                <MDBNavbar color="orange" dark expand="md" style={{ marginTop: "5px" }} id="navbar">
                    <MDBNavbarBrand></MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                        <MDBNavbarNav left> 
                            <MDBNavItem > <MDBNavLink to="#!" className="nav-header"> <img id="imagy"  src="../images/logo.png" alt="img"/></MDBNavLink> </MDBNavItem>
                            <MDBNavItem> <MDBNavLink id="prod" to="/produits" className="nav-header">Products</MDBNavLink></MDBNavItem> 
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBNavLink to="/dashboard" className="nav-header" rounded onClick={this.toggle(1)}>List</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/login" className="nav-header" rounded onClick={this.toggle(1)}>Connexion</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </div>
        );
    }
}