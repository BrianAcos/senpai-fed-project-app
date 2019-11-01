import React from 'react';
import './header.css';
import store from '../store'
import { access } from 'fs';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand">
        <a className="navbar-brand" href="#Inicio" onClick={this.props.goToInicio}><img src="assets/ico.png" alt="ico" className="ico" /></a>
        <ul className="navbar-nav mr-auto ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#Inicio" onClick={this.props.goToInicio}>Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Subir-Meme" onClick={this.props.goToSubirMeme}>Subir MEME</a>
            {/* <a className="nav-link" href="#Subir-Meme" onClick={this.cambiarSeccion(seccion)}>Subir MEME</a> */}
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Favoritos" onClick={this.props.goToFavoritos}>Favoritos</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#registro" data-toggle="modal" data-target="#registro">REGISTRARSE</a><br></br>
            <a href="#sesion" data-toggle="modal" data-target="#sesion">INICIAR SESION</a><br></br>
            <a href="#contacto" data-toggle="modal" data-target="#contacto">CONTACTO(FOOTER)</a>
          </li>
        </ul>
      </nav>
    );
  }

  cambiarSeccion(seccion) {
    store.dispatch({
      type: "cambiar_seccion",
      seccion: access
    });
  }
}

export default Header;