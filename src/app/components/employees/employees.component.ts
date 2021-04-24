import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {EmployeeService} from "../../services/employee.service";
import {Employee} from "../../models/employee";

declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employeeService: any;
  private res: any;


  constructor( employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  resetForm(form?: NgForm) {
    if(form){
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }

  }

  addEmployee(form: NgForm) {
    this.employeeService.postEmployee(form.value)
      .subscribe(() =>{
        this.resetForm(form);
        M.toast({html: 'Save Successfuly'});
      })
  }

  getEmployees(){
    this.employeeService.getEmployees()
      .subscribe((res: any) =>{
        this.employeeService.employees = this.res as Employee[];
        console.log(res);
      })
  }

  editEmployee(employee: Employee){
    this.employeeService.selectedEmployee = employee;

  }

  deleteEmployee(){

  }
}
