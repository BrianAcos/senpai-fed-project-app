import React from 'react';
import './subirMeme.css';

class SubirMeme extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col mr-auto ml-auto">
                        <form onSubmit={this.handleSubmit} className="newMeme" action="url.php" method="post">
                            <h1>Subí un MEME:</h1>
                            <label htmlFor="user"><span>Nick:</span></label>
                            <input name="user" onChange={this.handleInput} required type="text" id="nick" placeholder="Nombre de usuario"></input>
                            <br></br>
                            <label htmlFor="imagen"><span>Sube una imagen:</span></label>
                            <input name="imagen" onChange={this.handleInput} required type="file" id="imagen"></input>
                            <br></br>
                            <label htmlFor="categoria"><span>Categoria:</span></label>
                            <select name="categoria" onChange={this.handleInput} required id="categoria">
                                <option value="">Categorias</option>
                                <option value="perro">Perro</option>
                                <option value="gato">Gato</option>
                                <option value="ave">Ave</option>
                                <option value="otro">Otro</option>
                            </select>
                            <br></br>
                            <label htmlFor="edad"><span>Fecha actual</span></label>
                            <input name="edad" onChange={this.handleInput} required type="date" id="edad"></input>
                            <br></br>
                            <button className="subir" type="submit">Subir Meme</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubirMeme;