import React from 'react';
import TarjetaFavoritos from '../components/tarjetaFavoritos';
import Filtros from '../components/filtros';

class Favoritos extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Filtros />
                    <div className="col contenido">
                        <div className="row">
                            {this.props.favoritos.map(item => <TarjetaFavoritos meme={item} key={item.id} setFav={this.props.setFav} setLike={this.props.setLike} setDislike={this.props.setDislike} />)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Favoritos;