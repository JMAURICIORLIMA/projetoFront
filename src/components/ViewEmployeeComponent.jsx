import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }
    cancel(){
        this.props.history.push('/employees');
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Detalhes do Colaborador</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Nome do Colaborador: </label>
                            <div> { this.state.employee.nome }</div>
                        </div>
                        <div className = "row">
                            <label> Café da manhã: </label>
                            <div> { this.state.employee.cafe }</div>
                        </div>
                        <div className = "row">
                            <label> CPF: </label>
                            <div> { this.state.employee.cpf }</div>
                        </div>
                    </div>
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px", backgroundColor:"#17a2b8"}}>Voltar</button>
                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
