import React from 'react';

class Formulario extends React.Component{

    render(){
     
         return(
        
            <div>
             
                <form onSubmit={this.props.funcaoBotao} >

                    <input type="text" value={this.props.campoNome} placeholder='informe seu nome' className= 'form-control' name='nome' onChange={this.props.funcaoCampo} />
                    <input type="text" value={this.props.campoIdade} placeholder='informe sua idade' className='form-control' name='idade' onChange={this.props.funcaoCampo} />
                    <input type="submit" value= 'Cadastrar' className= 'btn btn-success' />

                </form>


            </div>


         );
  

    }
}

export default Formulario;