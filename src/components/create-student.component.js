import React, { Component } from 'react'
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default class CreateStudent extends Component {
    constructor(props){
        super(props);
        this.inChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       
        this.state = { 
            /**Esto son los equivalentes a los populares setters de java */
            name: "",
            email: "",
            rollno: "",
        };
/**Creamos los métodos */

    }
onChangeStudentName(e){
    this.setState({name: e.target.value});

}
onChangeStudentEmail(e){
this.setState({email: e.target.value});
}
onChangeStudentRollno(e){
this.setState({rollno: e.target.value});
}

onSubmit(e){
    /**El  siguiente  metodo me permite cancelar el envío a la bd */
   e. preventDefault();
/**Las ctes no son mutables , las cts o vars se definen con minuscula
 * 
 */

const   studentObject = {
    name: this.state.name,
    email: this.state.email,
    rollno: this.state.rollno,
};
axios
.post("http://localhost:4000/students/create-student", studentObject)
.then((res) => console.log(res.data));
this.setState({ name: "", email: "", rollno: "" });


}



  render() {
    return (
      <div class ="form-wrapper">
      <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
               type ="text"
               value ={this.state.name}
               onChange={this.onChangeStudentName}
                />
          </Form.Group>
          <Form.Group controlId ="Email">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="Email" 
              value ={this.state.email}
              onChange={this.onChangeStudentEmail}
              />
              </Form.Group>
             
              <Form.Group controlId="Name">
                  <Form.Label>Código</Form.Label>
                  <Form.Control type="text" 
                  value={this.onChangeStudentRollno}
                  />
              </Form.Group>

              <Form.Group controlId="Name">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="text" />
              </Form.Group>
              <br></br>
              <button type="button" class="btn btn-success">
                  Crear Estudiante..
                  </button>
      </Form>
   
  </div>
  );
  }
}
