import React, { Component } from 'react';
import { STAFFS } from '../shared/staffs';
import './StaffListComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import dateFormat from 'dateformat';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS,
            isOpen: false,
            idSelect: null
        }
    }

    toggle = (id) => this.setState({
        isOpen: !this.isOpen,
        idSelect: id
    });

    


    render() {
        console.log(this.state)
        return (
            <div className="container">
                <div className="row">
                    {this.state.staffs.map(item =>
                        <div key={item?.id} className="col-sm-12 col-md-6 col-lg-4">
                            <div ><button color="primary" onClick={() => this.toggle(item.id)} style={{ marginBottom: '1rem' }} type="button" className="collapsible"> {item?.name}</button></div>
                            <div className="content">
                                <Collapse isOpen={this.state.isOpen && (item.id === this.state.idSelect)}>
                                    <Card>
                                        <CardBody>
                                            <p>{dateFormat(item?.doB, "dd/mm/yyyy")}</p>
                                            <p>{item?.salaryScale}</p>
                                            <p>{dateFormat(item?.startDate, "dd/mm/yyyy")}</p>
                                            {item?.department?.name}
                                            <p>{item?.annualLeave}</p>
                                            <p>{item?.overTime}</p>
                                            <img src={item?.image} />
                                        </CardBody>
                                    </Card>
                                </Collapse>
                            </div>
                        </div>
                    )}
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Menu;
