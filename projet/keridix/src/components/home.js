import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import "../styles/home.css";
import "../styles/jquey";
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom'



import Image1 from "../images/logo1.gif";

import Image4 from "../images/craft.jpg";
import Image5 from "../images/craf.jpg";

class Home extends React.Component{
    render() {
        return (
          <div>
            <Jumbotron fluid>
  <Container>
    <h1><span style={{'text-shadow': '1px 1px 1px blue,2px 2px 1px white','text-decoration':"underline",'font-style':'italic'}}>Keridix🔌:</span> Plus de travail, plus de productivité!🦺👷🏻🔨💻🔧</h1>
    <br/>
    
    <p>
    <img class= "card-img-top" class="col-sm-8 col-md-8 col-lg-8 d-none d-sm-block" src={Image1} id="album" alt="work" style={{'width':"28rem", flex: '1','margin-right':'25px','float':'right'}}/>
      Vous préférez rester autonome et vous cherchez un travail ? Vous avez eu une fuite<br/>
      quelque part ou vous avez besoin d'un service? <span style={{'text-decoration':"underline",'font-style':'oblique','font-weight':'bold'}}>Et bien ce site est pour vous tous !</span><br/>
      Vous pouvez-vous inscrire <span style={{'text-decoration':"underline",'font-style':'italic'}}>gratuitement</span> sur le site en mentionnant votre<br/>
      domaine pour les afficher et vous faire contacter pour des offres du travail.<br/>
      Ainsi que pour les clients vous pouvez facilement récupérer les informations<br/>
      sur les domaines qui vous intéréssent et ne vous stresser plus pour avoir des  <br/>
      contacts pour toute main d'oeuvre !
    </p>
    <br/>
    <br/>
  </Container>
</Jumbotron>
          
          
          <span style={{display: 'flex', flexDirection: 'row'}} >
            
          <div id="card1" class="card" style={{'width':"18rem", flex: '1'}}>
          <img class="card-img-top" id="pic1" src={Image4} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title" style={{'text-decoration':"underline"}}>Client</h5>
            <p class="card-text">Accédez à l'interface du client si vous cherchez un service.
            <br/>
            Cherchez, Contactez, Résolu .. Si facile que ça!</p>
            
            <Link to="/client" id="btn1"className="btn btn-primary">Accueil</Link>
          </div>
          </div>





        <div id="card2" class="card" style={{'width':"18rem", flex: '1'}}>
        <img class="card-img-top" id="pic2" src={Image5} alt="Card image cap"/>
        <div class="card-body">
            <h5 class="card-title" style={{'text-decoration':"underline"}}>Travailleur</h5>
            <p class="card-text">Connectez ou inscrivez-vous pour que vos informations seront ajoutées à la liste ou pour modifier les anciennes informations.</p>
            <Link to="/login1" className="btn btn-primary">Connexion</Link>
        </div>
        </div>


    
    </span>

<br/>


          </div>
 
        );
      }
    }
export default Home;