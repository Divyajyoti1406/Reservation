import React, { Component } from 'react'  
import DatePicker from "react-datepicker"; 
import * as ReactBootStrap from "react-bootstrap"; 
export class Timepicker extends Component {  
        constructor(props) {  
                super(props)  
  
                this.state = {  
                        date: ''  
                }  
        }  
        Changedate = (e) => {  
                this.setState({  
                        date: e  
                });  
        };  
        render() {  
  
                return (  
                        <div>  
                                <div className="container">  
                                        <div class="row" className="hdr">  
                                                <div class="col-sm-12 btn btn-warning">  
                                                        TimePicker in ReactJS  
          </div>  
                                        </div>  
                                        <div class="row" style={{ marginTop: "10px" }}>  
  
                                                <div class="col-sm-4">  
  
                                                        <DatePicker className="form-control"  
                                                                showTimeSelect  
                                                                showTimeSelectOnly  
                                                                timeCaption="Time"  
                                                                dateFormat="h:mm aa"  
                                                                selected={this.state.date} placeholderText="Select Time" showPopperArrow={false}  
                                                                onChange={this.Changedate}  
                                                        />  
                                                </div>  
  
                                        </div>  
                                </div>  
                        </div>  
                )  
        }  
}  
  
export default Timepicker;