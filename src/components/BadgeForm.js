import React from 'react'

class BadgeForm extends React.Component{


    handleClick = (e) =>{
        console.log(this.state)
        
    }
    

    render(){
        
        
        return(
            
            <div>
                <h1>New Attendant</h1>
                <form>
                    <div className="form-group">
                        <label >Firts Name</label>
                        <input 
                        
                         className="form-control"
                          type="text"
                          name="firstname"
                          onChange = {this.props.onChange}
                          value = {this.props.formValues.firstName}
                          
                         />
                            
                    </div>
                    <div className="form-group">
                        <label >Last Name</label>
                        <input 
                        
                          className="form-control"
                          type="text" 
                          name="lastname"
                          onChange={this.props.onChange}
                          value={this.props.formValues.lastname}
                           />
                            
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input
                        
                        className="form-control"
                         type="email"
                          name="email"
                         onChange={this.props.onChange}
                         value={this.props.formValues.email}
                           />
                            
                    </div>
                    <div className="form-group">
                        <label >Job Tittle</label>
                        <input
                         
                          className="form-control"
                           type="text"
                            name="jobtittle"
                         onChange={this.props.onChange}
                         value={this.props.formValues.jobtittle}
                             />
                            
                    </div>
                    <div className="form-group">
                        <label >Twiiter</label>
                        <input 
                       
                         className="form-control"
                          type="text" 
                          name="twiiter" 
                          onChange={this.props.onChange}
                          value={this.props.formValues.twiiter}
                          />
                            
                    </div>
                    <button
                     type="button"
                     onClick={this.handleClick}
                      className="btn btn-primary"
                      >Guardar</button>
                </form>
            </div>
        )
    }

}

export default BadgeForm