import React from 'react';
import './tarjeta.css'

class TarjetaFavoritos extends React.Component {
  render() {
    return (
      <div className="col col-12 col-sm-6 col-md-4 col-xl-3 ">
        <div className="tarjeta">
          <div className="row usuario">
            <img src="assets/user.png" alt="user" />
            <ul>
              <li>{this.props.memes.user}</li>
              <li>{this.props.memes.fecha}</li>
            </ul>
          </div>
          <div className="row meme">
            <img src={this.props.memes.meme} alt="meme" />
          </div>
          <div className="row botones">
            <a href="#???"><img src={(this.state.like ? "assets/like.png" : "assets/no-like.png")} alt="like" /></a>
            <a href="#???"><img src="assets/no-dislike.png" alt="dislike" /></a>
            <a href="#???"><img src="assets/no-fav.png" alt="fav" /></a>
            <a href="#???"><img src="assets/compartir.png" alt="share" /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default TarjetaFavoritos;