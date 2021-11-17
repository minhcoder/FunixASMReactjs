import React, { Component } from 'react';
import Menu from './StaffListComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Department from './DepartmentComponent';
import StaffDetail from './StaffDetailComponent';
import Salary from './SalaryComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import dateFormat from 'dateformat';
import { STAFFS } from '../share/staffs';
import {Route,Switch,Redirect} from 'react-router-dom';



class Main extends Component{
  constructor(props){
    super(props);

    this.state={
      staffs: STAFFS,
    }
  }
   
  render(){
    const StaffWithId=({match})=>{
      console.log(match.params.staffid)
      
      return(
        <StaffDetail item={this.state.staffs.filter((item)=> item.id=== parseInt(match.params.staffid,10))[0]}
        
      />
      )
    }
    return(
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/menu" component={()=><Menu staffs={this.state.staffs}/>}/>
          <Route exact path="/staff/:staffid" component={StaffWithId}/>
          <Route exact path="/department" component={Department}/>
          <Route exact path="/salary" component={Salary}/> 
          <Redirect to='/home'/>
          <Redirect to='/staff'/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default Main;
