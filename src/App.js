import React from 'react';
import './App.css';
import Header from './components/header';
import Inicio from './sections/inicio';
import SubirMeme from './sections/subirMeme';
import Favoritos from './sections/favoritos'
import {memes} from './memes.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seccion: 1,
      favoritos: [],
      memes
    };
  }

  setFav = (id, fav, meme) => {
    this.setState({
      memes: this.state.memes.map(item => item.id !== id ? item : {
        ...item,
        fav: fav,
      })
    });
    this.setState ({
      favoritos: [meme]
    })
    console.log(this.state.favoritos);
  }

  setLike = (id, like) => {
    this.setState({
      memes: this.state.memes.map(item => item.id !== id ? item : {
        ...item,
        like: like
      })
    });
  }

  setDislike = (id, dislike) => {
    this.setState({
      memes: this.state.memes.map(item => item.id !== id ? item : {
        ...item,
        dislike: dislike
      })
    });
  }

  goToInicio = () => {
    this.setState({
      seccion: 1
    });
  }

  goToSubirMeme = () => {
    this.setState({
      seccion: 2
    });
  }

  goToFavoritos = () => {
    this.setState({
      seccion: 3
    });
  }

  currentSection() {
    if (this.state.seccion === 1) {
      return <Inicio memes={this.state.memes} setFav={this.setFav} setLike={this.setLike} setDislike={this.setDislike} />;
    }
    if (this.state.seccion === 2) {
      return <SubirMeme />;
    }
    if (this.state.seccion === 3) {
      return <Favoritos favoritos={this.state.favoritos} setFav={this.setFav} setLike={this.setLike} setDislike={this.setDislike}/>;
    }
  }

  render() {
    return (
      <div>
        <Header
          goToInicio={this.goToInicio}
          goToSubirMeme={this.goToSubirMeme}
          goToFavoritos={this.goToFavoritos} />
        {this.currentSection()}
      </div >
    );
  }
}

export default App;
