import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            nome: '',
            cafe: '',
            cpf: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeCafeHandler = this.changeCafeHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({nome: employee.nome,
                    cafe: employee.cafe,
                    cpf : employee.cpf
                });
            });
        }        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {nome: this.state.nome, cafe: this.state.cafe, cpf: this.state.cpf};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/employees');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Adicionar Colaborador</h3>
        }else{
            return <h3 className="text-center">Alterar Colaborador</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Nome: </label>
                                            <input placeholder="Nome do Colaborador" name="nome" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Café da Manhã: </label>
                                            <input placeholder="Digite seu café" name="cafe" className="form-control" 
                                                value={this.state.cafe} onChange={this.changeCafeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Cpf: </label>
                                            <input placeholder="Digite seu CPF" name="cpf" className="form-control" 
                                                value={this.state.cpf} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Salvar</button>
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

export default CreateEmployeeComponent
