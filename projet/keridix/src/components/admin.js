import React, { Component } from 'react';
import GenSend from './GenSend';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Image2 from "../images/logo2.gif";

export default class Admin extends Component{

  state = {
    _id:"",
    user: "",
    nom: "",
    
}




    constructor(props){
        super(props);
        this.deleteUtil = this.deleteUtil.bind(this)
        this.state={
         utilisateurs:[]
        }
    }

    componentDidMount(){

      const user = localStorage.getItem('user')
        const name = localStorage.getItem('name')
        const id = localStorage.getItem('_id')
        this.setState({
            _id: id,
            user: user,
            name : name

        })
        //this.setState ({utilisateurs: utils})

        //console.log(this.props.match.params.id)
        axios.get('http://10.30.40.121:3510/selectuser/')
        .then(response => {
            if(response.data.length > 0){
               this.setState ({
                   utilisateurs : response.data})
               }
               })
               .catch((error)=>{
                   console.log(error);
        })
    }

    deleteUtil(id) {
        axios.delete('http://10.30.40.121:3510/Delete/'+id)
          .then(response => { console.log(response.data)});
       
        this.setState({
          utilisateurs: this.state.utilisateurs.filter(el => el._id !== id)
        })
      }
       
      userList(){
      return this.state.utilisateurs.map(utilCourant => {
      return <GenSend utilisateur={utilCourant} deleteUtil={this.deleteUtil}  key={utilCourant._id}/>;
      })
      }



    render() {
        return (
           <div className="container">
              <h3>Liste des travailleurs!</h3>
              <table className="table">
                  <thead className="thead-light">
                      <tr>
                          <th>Nom</th>
                          <th>Profession</th>
                          <th>Email</th>
                          <th>Telephone</th>
                          <th>Ville</th>
                          
                      </tr>
                  </thead>
                  <tbody>
                      {this.userList()}
                      <td class="d-flex flex-row">
                      
                                
                                
                    </td> 
                  </tbody>
              </table>
              <img class="card-img-top" id="pic1" style={{'height':"400px"}}src={Image2} alt="Card image cap"/>
          </div>
        );
      }
    }
