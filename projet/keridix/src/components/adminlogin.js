import React,{ Component } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import "./newStyle2.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';

export default class adminlogin extends Component {

  state = {
    isLoggedin: false,
    admin: '',
    person: [],
    name: '',
   _id: ''
    
  }

  constructor(props){
    super(props);
    this.state={
     util:[]
    };
    
}



  onSubmit = event => {
    event.preventDefault();
          const name = this.refs.name.value;
          const password = this.refs.password.value;
          axios.post('http://10.30.40.121:3510/adminlogin',{name,password})
            .then(res => {
              if (res.data.admin) {                
                this.setState({
                  isLoggedin: true,
                  admin: name
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
            let person = res.data;
            console.log(person);
            this.setState({ person });
          } 
          })
    }
  
    render() {
      if (this.state.isLoggedin) {
        console.log(this.state.user);
        alert("Bienvenue admin");
        localStorage.setItem('user',this.state.admin)
        return <Redirect to='/admin'/>      
      }

        return (
          <div>
          <video
      src="/videos/office2.mp4"
      autoPlay
      loop
      muted
      style={{ width: "87%", height: "auto" }}
    />

            <div className="container">
            <br/>
            <h1 style={{ 'text-align': "center", 'text-decoration':"underline"}}>Administration: </h1>
            <br/>
            <br/>
            <br/>
            <Form onSubmit={this.onSubmit} style={{ width: "40%", "margin-left": "350px" }}>
<Form.Group controlId="formBasicEmail">
  <Form.Label>Nom d'utilisateur</Form.Label>
  <input
            typeof="email"
                  id="name"
                  ref="name"
                  required
            className="form-control"
            placeholder="Entrer le nom fourni"
          />
  
</Form.Group>

<Form.Group controlId="formBasicPassword">
  <Form.Label>Mot de passe</Form.Label>
  <input
            type="password"
                  id="password"
                  ref="password"
                  required
            className="form-control"
            placeholder="Entrer votre mot de passe"
          />
</Form.Group>
<br/>
<button typeof="submit" style={{ width: "40%", "margin-left": "120px", "background-color": "green" }} className="btn btn-primary btn-block" >Connexion</button>
</Form>

        </div>
        </div>
      );
    }
  }
