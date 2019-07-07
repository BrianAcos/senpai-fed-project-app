import React from 'react';
import './tarjeta.css'

class Tarjeta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fav: false,
      dislike: false,
      like: false
    }
}

changeFav = () => {
  this.setState({
      fav: !this.state.fav
  });
  console.log(this.state.fav);
  
}

changeDislike = () => {
  this.setState({
      dislike: !this.state.dislike
  });
  console.log(this.state.dislike);
  
}

changeLike = () => {
    this.setState({
        like: !this.state.like
    });
    console.log(this.state.like);
    
}

  render() {
    return (
      <div className="col col-12 col-md-6">
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
            <a href="#???" onClick={this.changeLike}><img src={(this.state.like ? "assets/like.png" : "assets/no-like.png")} alt="like" /></a>
            <a href="#???" onClick={this.changeDislike}><img src={(this.state.dislike ? "assets/dislike.png" : "assets/no-dislike.png")} alt="dislike" /></a>
            <a href="#???" onClick={this.changeFav}><img src={(this.state.fav ? "assets/fav.png" : "assets/no-fav.png")} alt="fav" /></a>
            <a href="#???"><img src="assets/compartir.png" alt="share" /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Tarjeta;