import React from "react";
import { Card,CardBody,CardImg,CardTitle,Breadcrumb,BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import dateFormat from 'dateformat'; 
import {Fade, Stagger} from "reactstrap/lib/Fade";


function RenderId({item}){
    console.log(item);
    return(
        <div className="row row-content">
            <div className="col-12 col-md-6"><CardImg width="200px" height="350px" className="text-right" src={item?.image} alt={item?.name}/></div>
            <CardBody className="col-12 col-md-5">
                <CardTitle>{item?.name}</CardTitle>
                <p>Hệ số lương: {item?.name}</p>
                <p>Ngày sinh: {dateFormat(item?.doB, "dd/mm/yyyy")}</p>
                <p>Hệ số lương: {item?.salaryScale}</p>
                <p>Ngày vào công ty {dateFormat(item?.startDate, "dd/mm/yyyy")}</p>
                <p>Bộ phận: {item?.department.name}</p>
                <p>Số ngày nghỉ còn lại: {item?.annualLeave}</p>
                <p>Số ngày làm thêm: {item?.overTime}</p> 
            </CardBody>
        </div>
    )
}
function StaffDetail(props){
    if(props.item!=null){
        return(
         <div className="container">
         <div className="row">
         <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/staff">Staffs</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.item.name}</BreadcrumbItem>
                    </Breadcrumb>
         </div>
         <div className="col-12">
             <h3>{props.item.name}</h3>
             <hr/>
         </div>
         < div className="row">
             <RenderId item={props.item}/>
         </div>
         </div>
        )
    }else{
        return(
            <div></div>
        )
    }
}
export default StaffDetail;