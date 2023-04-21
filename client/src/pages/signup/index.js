import React from 'react'
import './index.css'
import logo from "../../assets/icon.jpg"
import '../../styles/animations.css'

const Signup = () => {
  return (
    <>
      <div className="formulaire fadeIn">
        <div>
          <img className="logoAv fadeInDown" src={logo} alt="" srcset="" />
        </div>
        <div id="message"></div>
        <div className="inscbox">
          <h1>Inscription</h1>
          <form action="" id="formulaire fadeIn second" method="post">
            <div className="col-6">
              <h2>Identité</h2>
              <h3>Prenom</h3>
              <input type="text" name="prenom" />
              <h3>Nom</h3>
              <input type="text" name="nom" id="" />
              <h3>Post-nom</h3>
              <input type="text" name="postnom" />
              <h3>Sexe</h3>
              <div>
                <label for="sexe">Masculin</label>
                <input type="radio" value="h" name="sexe" />
                <label for="sexe">Feminin</label>
                <input type="radio" value="f" name="sexe" />
              </div><br></br>
              <h3>Telephone</h3>
              <div>+7</div>
              <input type="text" name="numero" />
            </div>
            <div className="col-6">
              <h2>Coordonnées</h2>
              <h3>Faculté</h3>
              <div>
                <select name="faculte" id="faculte">
                  <option value="agronomie">Agronomie</option>
                  <option value="droit">Droit</option>
                  <option value="economie">Economie</option>
                  <option value="lettres">Lettres</option>
                  <option value="medecine">Medecine</option>
                  <option value="pharmacie">Pharmacie</option>
                  <option value="sciences">Sciences</option>
                </select>
              </div>
              <h3>Département</h3>
              <div>
                <select name="departement" id="departement">
                  <option value="PM">Physique-Math</option>
                  <option value="MI">Math-Info</option>
                  <option value="Biomed">Bio-Med</option>
                  <option value="AIA">Anglais Informatique des Affaires</option>
                  <option value=" "> </option>
                  <option value=" "> </option>
                  <option value=" "> </option>
                </select>
              </div>
              <h3>Auditoire</h3>
              <div>
                <select name="auditoire" id="auditoire">
                  <option value="g1">G1</option>
                  <option value="g2">G2</option>
                  <option value="g3">G3</option>
                  <option value="l1">L2</option>
                  <option value="l2">L3</option>
                </select>
              </div>
              <h3>Adresse mail</h3>
              <div>
                <input type="email" name="email" value="" />
              </div>
              <h3>Mot de passe Choisi</h3>
              <div>
                <input type="password" name="mdp1" value="" />
              </div>
              <h3>Réecrire le mot de passe</h3>
              <div>
                <input type="password" name="mdp2" value="" />
              </div>
            </div>
            <p className="save">
              <input id="submit" name="submit" type="submit" value="Enregistrer" /><br></br>
              <p><input type="radio" name="sexe" />J'accepte les conditions établies par Pop'Uk <br></br>
                En acceptant les conditions du site, vous jurez de ne pas vous servir de ses ressources à des fin malhonnetes, mesquines et répugnates.
                que vous naviguerez dans le site aisement en vue d'obtenir les informations de votre promotion et mettrez à jour
                mon statut en cas de passation de classe ou de demission à ma faculté</p>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup