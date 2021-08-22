import React, {Component} from 'react'
import { render } from 'react-dom'

class Home extends Component {
    constructor() {
        super();
        this.state = {
        };
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
      }
    
      onInputchange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
      onSubmitForm() {
        console.log(this.state)
      }

    render()
    {   
    return (
        <div>
            <header className="cabecalho">
                <h1 className="cabecalho__titulo">Cafel do <span>ABÉ</span></h1>
            </header>
            <form className="formulario">
                <label className="formulario__titulo">Conta pra gente</label>
                <input onChange={this.onInputchange} placeholder='Quem é você' type="text" name="nome" id="formulario_nome"/>
                <input onChange={this.onInputchange} placeholder='Qual o seu melhor e-mail' type="text" name="email" id="formulario_email"/>
                <input onClick={this.onSubmitForm} type="button" value="Enviar"/>
            </form>
        </div>
        );
    }
}
export default Home;