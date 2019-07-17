import React from 'react'
import Navbar from "../components/Navbar"
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import logo from '../images/badge-header.svg'
import "../styles/BadgeNew.css"
class BadgeNew extends React.Component{
    state = { form : {    
    firstname:"",
    lastname:"",
    email:"",
    jobTittle:"",
    twiiter:""} }

    handleChange = e =>{
        this.setState({
            form : {
               ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
    }
    render(){
        return(
            <div>

                <Navbar />
                <div className="BadgeNew__hero">
                <img className="img-fluid" src={logo} alt="Logo" />
                </div>
                <div className="container">

                    <div className="row">
                        
                            <div className="col-6">
                                
                                <Badge
                                 firtsname = { this.state.form.firstname }
                                 lastname = { this.state.form.lastname }
                                  email = { this.state.form.email }
                                jobtittle = { this.state.form.jobtittle }
                                twiiter = { this.state.form.twiiter } 
                                />

                            </div>
                            <div className="col-6">
                                <BadgeForm
                                 onChange= {this.handleChange}
                                 formValues={this.state.form}
                                 />

                            </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default BadgeNew