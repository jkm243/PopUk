import React from 'react'
import './index.css'
import logo from "../../assets/icon.jpg"
import '../../styles/animations.css'

const Login = () => {
    return (
        <div>
            <div>
                <div className="loginbox fadeIn">
                    <img className="logoInAvatar fadeInDown" src={logo} alt="icon"/>
                        <h1>Connexion</h1>
                    <form action="" id="formulaire fadeIn second">
                            <p>Nom d'utilisateur</p>
                            <input type="text" name="" id="username" placeholder="Entrer votre nom d'utilisateur"/>
                            <p>Mot de Passe</p>
                            <input type="password" name="" id="password" placeholder="Entrer votre mot de passe"/>
                            <input type="submit" value="Login" id="login"/><br></br>
                            <a href="forgottenpassword.php">Mot de passe oublié?</a><br></br>
                            <a href="inscription.php">S'inscrire?</a>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default Login