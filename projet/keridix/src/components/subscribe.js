import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';



class Subscribe extends React.Component{
    constructor(props){
        super(props);
            this.state={
                nom:'',
                profession:'',
                email:'',
                telephone:'',
                ville:'',
                user:'',
                code:''
                
            }
            this.onChangeNom = this.onChangeNom.bind(this);
            this.onChangeProfession = this.onChangeProfession.bind(this);
            this.onChangeEmail = this.onChangeEmail.bind(this);
            this.onChangeTelephone = this.onChangeTelephone.bind(this);
            this.onChangeVille = this.onChangeVille.bind(this);
            this.onChangeUser = this.onChangeUser.bind(this);
            this.onChangeCode = this.onChangeCode.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeNom(e){
        this.setState({
          nom:e.target.value
        })
      }

      onChangeProfession(e){
        this.setState({
          profession:e.target.value
        })
      }

      onChangeEmail(e){
        this.setState({
          email:e.target.value
        })
      }

      onChangeTelephone(e){
        this.setState({
          telephone:e.target.value
        })
      }

      onChangeVille(e){
        this.setState({
          ville:e.target.value
        })
      }

      onChangeUser(e){
        this.setState({
          user:e.target.value
        })
      }

    onChangeCode(e){
        this.setState({
          code:e.target.value
        })
      }
      
      
      onSubmit(e){
        e.preventDefault();
        const util={

          nom:this.state.nom,
          profession:this.state.profession,
          email:this.state.email,
          telephone:this.state.telephone,
          ville:this.state.ville,
          user:this.state.user,
          code:this.state.code,
        }
      
      
      
        console.log(util);

        axios.post('http://10.30.40.121:3510/newuser', util)
        .then(res => console.log(res.data));
      
       /* this.setState({
            nom:'',
            profession:'',
            email:'',
            telephone:'',
            ville:'',
            user:'',
            code:''})*/
      
      
          window.location = '/login1';
      }


    render() {
        return (
            <div className="container">
            <Form onSubmit={this.onSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Nom</Form.Label>
                <Form.Control value={this.state.nom}onChange={this.onChangeNom} placeholder="Nom et prénom" />
              </Form.Group>
          
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Profession</Form.Label>
                <Form.Control value={this.state.profession}onChange={this.onChangeProfession} placeholder="Profession ou service offert" />
              </Form.Group>
            </Form.Row>
          
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Email</Form.Label>
              <Form.Control value={this.state.email}onChange={this.onChangeEmail} type="email" placeholder="example123@gmail.com" />
            </Form.Group>
          
            <Form.Group controlId="formGridAddress2">
              <Form.Label>telephone</Form.Label>
              <Form.Control value={this.state.telephone}onChange={this.onChangeTelephone} placeholder="123 456-XXXX" />
            </Form.Group>
          
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Ville</Form.Label>
                <Form.Control value={this.state.ville}onChange={this.onChangeVille} />
              </Form.Group>
          
              <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Nom d'utilisateur</Form.Label>
                <Form.Control value={this.state.user}onChange={this.onChangeUser} />
              </Form.Group>
          
              <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Mot de passe</Form.Label>
                <Form.Control value={this.state.code}onChange={this.onChangeCode} type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>
          
           
          
            <Button variant="primary" type="submit">
              S'inscrire
            </Button>
          </Form>
          </div>
        );
      }
    }
export default Subscribe;