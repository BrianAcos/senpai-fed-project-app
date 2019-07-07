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
                            {this.props.memes.map(item => <TarjetaFavoritos memes={item} key={item.id} />)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Favoritos;