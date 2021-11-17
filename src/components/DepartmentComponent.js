import React, {Component}from 'react';
import { Breadcrumb, BreadcrumbItem, CardText, Card} from 'reactstrap';
import { Link } from 'react-router-dom';
import Fade from 'reactstrap/lib/Fade';
import { DEPARTMENTS, STAFFS } from '../share/staffs';

class Department extends Component{
    constructor(props){
        super(props);

        this.state={
            departments: DEPARTMENTS,
            staffs: STAFFS,
        }
    }
    render(){
        const departments=this.state.departments.map((department)=>{
            return(
                <Fade in className="col-12 col-md-6 col-lg-4" key={department.id}>
                    <Card className="ml-2 mb-4 text-center bg-dark text-light border-light">
                        <Link to={`/departments/${department.id}`}>
                            <CardText className="m-3 text-warning">
                                {department.name}
                                <br/>
                                Số lượng nhân viên: {department.numberOfStaff}
                            </CardText>
                        </Link>
                    </Card>
                </Fade>
            )
        });
        return(
            <div className="container">
                <div className="row mt-5">
                <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Department</BreadcrumbItem>
                    </Breadcrumb>              
                </div>
                <div>
                    <h3>Các phòng ban</h3>
                    <br/>
                </div>
                <div className="row mb-5">
                    {departments}
                </div>
            </div>
        )
    }
}
export default Department;