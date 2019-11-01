import React from 'react';
import './login-registro.css';

class Registro extends React.Component {
    render() {
        return (
            <div class="modal fade" id="registro" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">Registro de usuario</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body mr-auto ml-auto">
                            <form className="registro" action="http://localhost:3001/api/users" method="post" enctype="application/x-www-form-urlencoded">
                                <label  htmlFor="username"><span>Nombre de usuario:</span></label>
                                <input required id="username" name="username"></input><br></br>
                                <label htmlFor="password"><span>Contraseña:</span></label>
                                <input required id="password" name="password"></input><br></br>
                                <label htmlFor="email"><span>Email:</span></label>
                                <input required id="email" name="email" type="email"></input><br></br>
                                <label htmlFor="nombre"><span>Nombre:</span></label>
                                <input required id="nombre" name="nombre"></input><br></br>
                                <input required type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                                <label class="form-check-label" for="exampleCheck1">Acepto la <a href="#politica">Politica de la pagina</a></label>
                                <button type="submit" class="btn btn-primary">Registrarse</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registro;