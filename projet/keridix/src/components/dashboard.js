import React, { Component } from 'react';
import axios from 'axios';
import GenListe from './GenListe';
import {Link} from 'react-router-dom';
// import axios from 'axios';

export default class dashboard extends Component {
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
        };
        
    }
    /*componentDidMount() {
        
        
    }*/

    componentDidMount(){

        const user = localStorage.getItem('user')
        const nom = localStorage.getItem('nom')
        const id = localStorage.getItem('_id')
        this.setState({
            _id: id,
            user: user,
            nom : nom

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
        return <GenListe utilisateur={utilCourant} deleteUtil={this.deleteUtil}  key={utilCourant._id}/>;
        })
        }



    render() {
        return (
            <div >
                <div className="col-md-6 m-auto">
                    <div className="card card-body">
                        <h1 className="text-center mb-3"> Profil </h1>
              
                        <br />
                        <h1 className="lead mb-3">Bienvenue <span>    </span><strong>{this.state.user}</strong>
                        </h1>
                        <br />
                        <br />
                        
                  <br/>
                             <a className="btn btn-danger btn-block"  href="/login1">Se déconnecter </a>
             
                    </div>
                </div>
                
            </div>
        )
    }
}
