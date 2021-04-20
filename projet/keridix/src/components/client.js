import React from 'react';
import GenListe from './GenListe';
import axios from 'axios';
import SearchField from "react-search-field";

class Client extends React.Component{
 
    constructor(props){
        super(props);
        this.deleteUtil = this.deleteUtil.bind(this)
        this.state={
         utilisateurs:[]
        };
        
    }

    componentDidMount(){
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



      updateSearch(event){
        this.setState({search: event.target.value.substr(0,20)});
      }

      onChange(event){
        this.setState({search: event.target.value.substr(0,20)});
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
          </div>
        );
      }
    }
export default Client;