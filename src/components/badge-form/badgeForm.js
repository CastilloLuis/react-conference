import React, { Component } from 'react';

export default class BadgeForm extends Component {
    render() {
        return (
            <div>
                <form type="POST" onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            className="form-control"
                            type="text" 
                            maxLength={10}
                            placeholder="John"
                            value={this.props.formValues.firstName}
                            name="firstName"
                            onChange={this.props.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            className="form-control"
                            type="text"
                            maxLength={10}                            
                            placeholder="Doe"
                            value={this.props.formValues.lastName}
                            name="lastName"
                            onChange={this.props.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>E-mail</label>
                        <input 
                            className="form-control"
                            type="email"
                            placeholder="johndoe@me.com"
                            value={this.props.formValues.email}
                            name="email" 
                            onChange={this.props.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input 
                            className="form-control"
                            type="text" 
                            maxLength={18}                            
                            placeholder="Engineer"
                            value={this.props.formValues.jobTitle}
                            name="jobTitle"
                            onChange={this.props.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input 
                            className="form-control"
                            type="text" 
                            maxLength={20}                            
                            placeholder="@johndoe"
                            value={this.props.formValues.twitter}
                            name="twitter" 
                            onChange={this.props.onChange}/>
                    </div>                                                                                

                    <button className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
} 