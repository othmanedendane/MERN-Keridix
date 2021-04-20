import React from 'react';
import axios from 'axios';

class Edit extends React.Component{

  constructor(props){
    super(props);

    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangeProfession = this.onChangeProfession.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeTelephone = this.onChangeTelephone.bind(this);
    this.onChangeVille = this.onChangeVille.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    /* 
    nom
  profession 
  email
  telephone
  ville
  user
  code
    */
  
    this.state={
      nom:'', profession:'', email:'', telephone:'', ville:'', user:'', code:''
    }
  }

componentDidMount() {

  console.log(this.props.match.params.id)
  axios.get('http://10.30.40.121:3510/selectuser/'+this.props.match.params.id)
    .then(response => {

      this.setState({
        nom: response.data.nom,
        profession: response.data.profession,
        email: response.data.email,
        telephone: response.data.telephone,
        ville: response.data.ville,
        user: response.data.user,
        code: response.data.code,
        id:this.props.match.params.id
      })   })
    .catch((error)=> {
      console.log(error);
    })



  /*axios.get('http://localhost:3510/selectdep/')
    .then(response => {
      if(response.data.length > 0){
      this.setState({
        depp: response.data.map(Dep => Dep.dep), 
        
      })  
    }
   })
    .catch((error)=> {
      console.log(error);
    })*/

    console.log(this.state.nom)
}

onChangeNom(e){ this.setState({
  nom:e.target.value
})
}

onChangeProfession(e){ this.setState({
    profession:e.target.value
  })
}
onChangeEmail(e){ this.setState({
    email:e.target.value
  })
}
onChangeTelephone(e){  this.setState({
    telephone:e.target.value
  })
}

onChangeVille(e){ this.setState({
    ville:e.target.value
  })
  }
  
  onChangeUser(e){ this.setState({
      user:e.target.value
    })
  }
  onChangeCode(e){ this.setState({
      code:e.target.value
    })
  }

onSubmit(e){
     e.preventDefault();
  const util={

        nom: this.state.nom,
        profession: this.state.profession,
        email: this.state.email,
        telephone: this.state.telephone,
        ville: this.state.ville,
        user: this.state.user,
        code: this.state.code,

  }

  console.log(util);

  axios.post('http://10.30.40.121:3510/Update/'+ this.props.match.params.id, util)
  .then(res => console.log(res.data));
  window.location = '/admin';
}




  render() {
  return (
    <div className="container">
   <h3>Modifier les informations</h3>
   <form onSubmit={this.onSubmit}>
<div className="form-group">


  <label>Nom :</label>
  <input type="text"
  required
  className="form-control"value={this.state.nom}onChange={this.onChangeNom}/>

<label>Profession :</label>
  <input type="text"
  required
  className="form-control"value={this.state.profession}onChange={this.onChangeProfession}/>

  <label>Email :</label>
  <input type="text"
  required
  className="form-control" value={this.state.email} onChange={this.onChangeEmail}/>

<label>Telephone :</label>
  <input type="text"
  required
  className="form-control"value={this.state.telephone}onChange={this.onChangeTelephone}/>

<label>Ville :</label>
  <input type="text"
  required
  className="form-control"value={this.state.ville}onChange={this.onChangeVille}/>

  <label>Nom d'utilisateur:</label>
  <input type="text"
  required
  className="form-control" value={this.state.user} onChange={this.onChangeUser}/>

<label>Code :</label>
  <input type="text"
  required
  className="form-control"value={this.state.code}onChange={this.onChangeCode}/>

</div>
<div className="form-group">
  <input type="submit" value="Modifier" className="btn btn-primary"/>
</div>
   </form>
    </div>
  );
}
}
export default Edit;