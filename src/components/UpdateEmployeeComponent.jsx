import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nome: '',
            cafe: '',
            cpf: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeCafeHandler = this.changeCafeHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({nome: employee.nome,
                cafe: employee.cafe,
                cpf: employee.cpf
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {nome: this.state.nome, cafe: this.state.cafe, cpf: this.state.cpf};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employees');
        });
    }
    
    changeNameHandler= (event) => {
        this.setState({nome: event.target.value});
    }

    changeCafeHandler= (event) => {
        this.setState({cafe: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({cpf: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Alterar Colaborador</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>Nome do Colaborador: </label>
                                            <input placeholder="Digite seu nome" name="nome" className="form-control" 
                                                value={this.state.nome} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Café da Manhã: </label>
                                            <input placeholder="Café da manhã" name="cafe" className="form-control" 
                                                value={this.state.cafe} onChange={this.changeCafeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> CPF: </label>
                                            <input placeholder="Digite seu CPF" name="cpf" className="form-control" 
                                                value={this.state.cpf} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateEmployee}>Salvar</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent
