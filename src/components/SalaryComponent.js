import React, {Component}from 'react';
import { Breadcrumb, BreadcrumbItem, CardTitle, Card} from 'reactstrap';
import { Link } from 'react-router-dom';
import Fade from 'reactstrap/lib/Fade';
import { DEPARTMENTS, STAFFS } from '../share/staffs';

class Salary extends Component{
    constructor(props){
        super(props);

        this.state={
            staffs: STAFFS,
        }
    }
    render(){
        const salary = this.state.staffs.map((salary)=>{
            return (
                <Fade in className="col-12 col-md-6 col-lg-4">
                  <Card className="text-light bg-info border border-light">
                    <CardTitle className="text-center pt-2">{salary.name}</CardTitle>
                    <div className="pl-2">
                      <p>Mã nhân viên: {salary.id}</p>
                      <p>Hệ số lương: {salary.salaryScale}</p>
                      <p>Số giờ làm thêm: {salary.overTime}</p>
                    </div>
                    <p className="btn btn-dark text-center ">Lương: {salary.salary}</p>
                  </Card>
                </Fade>
              );
        });
        return(
            <div className="container">
              <div className="row mt-5">
                <Breadcrumb>
                  <BreadcrumbItem>
                    <Link to="/home">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Salary</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                  <h3>Bảng Lương nhân viên</h3>
                  <hr />
                </div>
                <div className="row mb-5">
                    {salary}
                </div>
            </div>
            </div>
        )
    }}
    export default Salary;
