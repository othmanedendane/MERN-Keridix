import React from 'react';
import emailjs from 'emailjs-com';


class Mail extends React.Component{
  

    render() {
            function sendEmail(e) {
                e.preventDefault();
                emailjs.sendForm('service_ivn7ebo', 'template_gyb1irf', e.target, 'user_5DewyRSTr6zMFsFhlpcOH')
                  .then((result) => {
                      console.log(result.text);
                      alert("mail envoyé et compte supprimé!");
                  }, (error) => {
                      console.log(error.text);
                  });
                  e.target.reset()
              }

            
              return (
                  <div>
                      <h3 style={{'text-decoration':"underline",'font-style':'oblique','font-weight':'bold','text-align':'center'}}>Envoi de mail à l'utilisateur et confirmation de suppression !</h3>
                  <div className="container">
                <form className="contact-form" onSubmit={sendEmail}>

                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name" />
                    </div>    

                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email Adress" name="email" />
                    </div> 

                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" />
                    </div> 

                  <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Bonjour,

                    Vous avez un nouveau message de Keridix:

                    Notre équipe a supprimé votre compte aprés l'enfreintement d'un règlement. On vous invite à bien vous réinscrire chez nous en bien suivrant les règles.

                    Meilleures salutations,
                    Othmane Dendane,Keridix" name="message" />
                    </div> 

                    <div className="col-8 pt-3 mx-auto">
                        <input type="submit" className="btn btn-info" value="Envoie de mail d'explication"></input>
                    </div> 
                  </div>
                </form>
                <br/>
                </div>
                <br/>
                </div>
                
                
              );
      }
    }
export default Mail;