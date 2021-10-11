import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "https://mv-teste.herokuapp.com/employee";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL +'/list/');
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL+'/cafe', employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, id){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + id, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService()