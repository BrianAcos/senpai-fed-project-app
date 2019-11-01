import React from 'react';
import './login-registro.css';

class Login extends React.Component {
    render() {
        return (
            <div class="modal fade" id="sesion" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">Iniciar seccion</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body mr-auto ml-auto">
                            <form className="login" action="http://localhost:3001/api/login" method="post" enctype="application/x-www-form-urlencoded">
                                <label htmlFor="username"><span>Nombre de usuario:</span></label>
                                <input required id="username" name="username"></input><br></br>
                                <label htmlFor="password"><span>Contraseña:</span></label>
                                <input required id="password" name="password"></input><br></br>
                                <button type="submit" class="btn btn-primary">Ingresar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;