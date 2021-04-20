import React from 'react';
import {Link} from 'react-router-dom';

//this.props.updateUtil= this.props.utilisateur._id;


class GenAdmin extends React.Component{
    
 
        
        
    
    render() {
        return (
            <tr>
            <td>{this.props.utilisateur.nom}</td>
            <td>{this.props.utilisateur.profession}</td>
            <td>{this.props.utilisateur.email}</td>
            <td>{this.props.utilisateur.telephone}</td>
            <td>{this.props.utilisateur.ville}</td>
            
            <td>
        <a href="#" onClick={()=> {this.props.deleteUtil(this.props.utilisateur._id)}}>DELETE</a> 
    </td>
        </tr>
        );
      }
      


    }
export default GenAdmin;