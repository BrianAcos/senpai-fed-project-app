import React from 'react';
import Tarjeta from '../components/tarjeta';
import Filtros from '../components/filtros';

class Inicio extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Filtros />
                    <div className="col contenido">
                        <div className="row">
                            {this.props.memes.map(item => <Tarjeta memes={item} key={item.id} />)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Inicio;