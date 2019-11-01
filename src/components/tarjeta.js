import React from 'react';
import './tarjeta.css'

class Tarjeta extends React.Component {

  changeFav = () => {
    this.props.setFav(this.props.meme.id, this.props.meme.fav, this.props.meme);
    console.log(this.props.meme.fav);
  }

  render() {
    return (
      <div className="col col-12 col-md-6">
        <div className="tarjeta">
          <div className="row usuario">
            <img src="assets/user.png" alt="user" />
            <ul>
              <li><p>{this.props.meme.titulo}</p></li>
              <li>{this.props.meme.fecha}</li>
            </ul>
          </div>
          <div className="row meme">
            <img src={this.props.meme.foto} alt="meme" />
          </div>
          <div className="row botones">
            <form id="puntuacion">
              <p className="puntuacion">
                <input id="radio1" type="radio" name="estrellas" value="5"></input><label for="radio1">★</label><input id="radio2" type="radio" name="estrellas" value="4"></input><label for="radio2">★</label><input id="radio3" type="radio" name="estrellas" value="3"></input><label for="radio3">★</label><input id="radio4" type="radio" name="estrellas" value="2"></input><label for="radio4">★</label><input id="radio5" type="radio" name="estrellas" value="1"></input><label for="radio5">★</label>
              </p>
            </form>
            <a href="#???" onClick={this.changeFav}><img src={(this.props.meme.fav ? "assets/fav.png" : "assets/no-fav.png")} alt="fav" /></a>
            <a href="#???"><img src="assets/compartir.png" alt="share" /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Tarjeta;