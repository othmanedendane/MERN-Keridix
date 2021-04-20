import  React,{ Component } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import GenListe from './GenListe';
import { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom';

export default class login1 extends Component {

  state = {
    isLoggedin: false,
    worker: '',
    persons: [],
    email: '',
    nom:''
  }

  constructor(props){
    super(props);
    this.state={
     utilisateurs:[]
    };
    
}

userList(){
  return this.state.utilisateurs.map(utilCourant => {
  return <GenListe utilisateur={utilCourant} deleteUtil={this.deleteUtil}  key={utilCourant._id}/>;
  })
  }
  
onSubmit = event => {
  event.preventDefault();
        const email = this.refs.email.value;
        const code = this.refs.code.value;
        axios.post('http://10.30.40.121:3510/login1',{email,code})
          .then(res => {
            if (res.data.worker) {                
              this.setState({
                isLoggedin: true,
                worker: email
              });
            }
            if (res.data.error || res.error) {
                alert(res.data.error,res.error)
              }
          })
          .catch (error => {
          alert(error.response);
          });
  }
  
  componentWillMount() {
    axios.get('http://10.30.40.121:3510/')
      .then(res => {
        if (this.state.isLoggedin) {
          console.log(res.data);
          let persons = res.data;
          console.log(persons);
          this.setState({ persons });
        } 
        })
  }

  render() {
    if (this.state.isLoggedin) {
      console.log(this.state.user);
      alert("Connecté");
      localStorage.setItem('user',this.state.worker)
      return <Redirect to='/dashboard'/>      
    }

    return (
      <div className="row mt-5">
  <div className="col-md-6 m-auto">
    <div className="card card-body">
      <h1 className="text-center mb-3"><i className="fas fa-sign-in-alt"></i> se connecter</h1>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label >Email</label>
          <input
            typeof="email"
                  id="email"
                  ref="email"
                  required
            className="form-control"
            placeholder="Entrer votre Email"
          />
              </div>
              <div className="form-group">
          <label >Mot de passe</label>
          <input
            type="password"
                  id="code"
                  ref="code"
                  required
            className="form-control"
            placeholder="Entrer votre mot de passe"
          />
        </div>
        <button typeof="submit" className="btn btn-primary btn-block" >Connexion</button>
      </form>
      <br/>
      <Form.Group controlId="formBasicCheckbox">
  <Form.Text className="text-muted">
      Vous n'avez pas de compte ? <Link to="/subscribe" id="lien1">S'inscrire</Link>
    </Form.Text>
  </Form.Group>
    </div>
  </div>
</div>
    )
  }
}
