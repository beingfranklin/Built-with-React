import React, {Component} from 'react';
import Viewlist from '../components/ViewList';
import Detail from '../components/Detail';
import CreateRecordDoc from '../components/CreateRecordDoc';

import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

export default class Content extends Component {
    render(){
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Hey, Doctor!!</h3>
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <p className="text-center">
                                                <strong>Doctor Data !!</strong>
                                                
                                                   <Route exact path="/doctor" component={Viewlist}/>
                                                   <Route path="/doctor/:patientid/:doctorid/:recordid" component={Detail}/> 
                                                   <Route path="/doctor/create" component={CreateRecordDoc}/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-footer">
                                    <div className="row">
                                        <div className="col-sm-3 col-xs-6">
                                            <div className="description-block border-right">
                                                <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 17%</span>
                                                <h5 className="description-header">$35,210.43</h5>
                                                <span className="description-text">TOTAL REVENUE</span>
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}