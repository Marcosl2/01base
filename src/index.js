import React from 'react';
import ReactDOM from 'react-dom';
import Formulario from './Fomulario';
import './estilos.css';
import Tabela from './Tabela';

class Principal extends React.Component{
    
     constructor(props){
       super(props);
       this.state ={
       nome : '',
       idade:'',
       vetor : []
      }

    }
      aoDigitar = (campo) =>{
        this.setState({[campo.target.name] : campo.target.value});

      }
     
     aoClicar = (botao) =>{
     botao.preventDefault();
     var copiaVetor = [...this.state.vetor];
     copiaVetor.push({
     'nome' : this.state.nome,
     'idade': this.state.idade
     });

     this.setState({vetor : copiaVetor});

     this.setState({
       nome : '',
       idade : ''
     });

     }
       
    render(){

        return(
            <div>
             <Formulario campoNome={this.state.nome} campoIdade={this.state.idade} funcaoBotao={this.aoClicar} funcaoCampo= {this.aoDigitar}/>
             <Tabela dados={this.state.vetor}/>
            </div>

        );

    }

}

ReactDOM.render(<Principal />, document.getElementById('root'));