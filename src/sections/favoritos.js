import React from 'react';
import TarjetaFavoritos from '../components/tarjetaFavoritos';

class Favoritos extends React.Component {
    render() {
        var memesFiltrados = this.props.memes
        .filter(item => item.fav);
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col contenido">
                        <div className="row">
                            {memesFiltrados.map(item => <TarjetaFavoritos meme={item} key={item.id} setFav={this.props.setFav} setLike={this.props.setLike} setDislike={this.props.setDislike} />)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Favoritos;