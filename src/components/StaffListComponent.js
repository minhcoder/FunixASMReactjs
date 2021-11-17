import React from 'react';
import { Card,CardImg, CardImgOverlay,CardText,CardBody, CardTitle, Breadcrumb,BreadcrumbItem} from 'reactstrap';
import dateFormat from 'dateformat';
import StaffDetail from './StaffDetailComponent';
import {Link} from 'react-router-dom';


function RenderStaff({item}){
    return(
        <Card>
                <Link to={`/staff/${item.id}`}>
                <CardImg width="100%" src={item.image} alt={item.name}/>
                <CardTitle className="text-center text-dark">{item.name}</CardTitle>
                </Link>
            </Card>
    )
}
function Menu(props){
    const menu = props.staffs.map((item)=>{
        return (
            <div key={item.id} className="col-lg-2 col-md-4 col-sm-2">
                <RenderStaff item={item}/>   
            </div>
        )
    });
    return( 
        <div className="container">
            <div className="row">
                <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Staffs</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="col-12">
                <h3>Nhân viên</h3>
                <hr/>
            </div>
            <div className="row">
                    {menu}
            </div>
            <div className="row">
            <StaffDetail />
            </div>
        </div>
    );
}



export default Menu;







