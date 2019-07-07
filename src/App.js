import React from 'react';
import './App.css';
import Header from './components/header';
import Inicio from './sections/inicio';
import SubirMeme from './sections/subirMeme';
import Favoritos from './sections/favoritos'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seccion: 1,
      favoritos: ['no hay'],
      memes: [{
        id: 1,
        user: 'Usuario 1',
        fecha: '05/07',
        meme: 'memes/meme-1.jpg'
      },
      { id: 2,
        user: 'Usuario 2',
        fecha: '06/07',
        meme: 'memes/meme-2.jpg'
      }]
    };
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
      return <Inicio memes={this.state.memes}/>;
    }
    if (this.state.seccion === 2) {
      return <SubirMeme />;
    }
    if (this.state.seccion === 3) {
      return <Favoritos memes={this.state.memes}/>;
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
