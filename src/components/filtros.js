import React from 'react';
import './filtros.css'

class Filtros extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          filtros: false
        }
    }

    changeState = () => {
        this.setState({
            filtros: !this.state.filtros
        });
        console.log(this.state.filtros);
        
    }
    
    render() {
        return (
            <div className={"col-auto filtros " + (this.state.filtros ? "show" : "hidden")}>
                <div className="form-group">
                <button className="buttonFiltros" onClick={this.changeState}>F<br></br>I<br></br>L<br></br>T<br></br>R<br></br>O<br></br>S<br></br>></button>
                    <select className="custom-select custom-select-sm">
                      <option defaultValue="all">Categorias</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">mayor de 10</option>
                    </select>
                  </div>
                <ul className="otrosFiltros">
                    <a href="#???"><li>TOP MEMES</li></a>
                    <a href="#???"><li>Recientes</li></a>
                    <a href="#???"><li>Aleatorios</li></a>
                    <a href="#???"><li>Favoritos</li></a>
                </ul>
            </div>
        );
    }
}

export default Filtros;