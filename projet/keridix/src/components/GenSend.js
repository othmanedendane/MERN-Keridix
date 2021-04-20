import React from 'react';
import {Link} from 'react-router-dom';

//this.props.updateUtil= this.props.utilisateur._id;


class GenSend extends React.Component{
    
 
        
        
    
    render() {
        return (
            <tr>
            <td>{this.props.utilisateur.nom}</td>
            <td>{this.props.utilisateur.profession}</td>
            <td>{this.props.utilisateur.email}</td>
            <td>{this.props.utilisateur.telephone}</td>
            <td>{this.props.utilisateur.ville}</td>
            
            <td>
            <Link to={"/edit/"+this.props.utilisateur._id}>Modifier</Link>  | <Link to={"/mail/"+this.props.utilisateur._id} onClick={()=> {this.props.deleteUtil(this.props.utilisateur._id)}}>BANNIR</Link>
    </td>
        </tr>
        );
      }
      


    }
export default GenSend;