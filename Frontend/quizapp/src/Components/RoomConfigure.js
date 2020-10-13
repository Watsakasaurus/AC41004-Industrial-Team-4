import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Button, Form, Dropdown } from 'react-bootstrap'


export class RoomConfigure extends Component {

    constructor(props) {
        super(props)
        this.state = {
            roomName: '',
            roomPass: '',
            playerCount: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log(data)
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
           [ event.target.name]: event.target.value
        })
        }

    render(){
            const {roomName} = this.state
        return(
            <form onSubmit = {this.handleSubmit}>

            <div class="container-fluid">

            <div class="row">
        
                <div class="col-md-4">
                </div>
        
              <div class="col-md-4">
                <h1>
                  Configure Room
                </h1>
              </div>
              
                <div class="col-md-4">
                </div>
            </div>
        
        
            <div class="row">
        
                <div class="col-md-4">
                </div>
        
                <div class="col-md-4">
                    


                        <div class="form-group">
                            <label for="Room">
                                Room Name
                            </label>
                              <input type="text" name="roomName" class="form-control"
                               placeholder="Room 1" onChange={this.handleInputChange} />
                        </div>
        
        
        
        
                        <div class="form-group">
                            <label for="RoomPass">
                                Room Password
                            </label>
                            <input type="text" name="roomPass" class="form-control" 
                            placeholder="Qwerty" onChange={this.handleInputChange}/>
                        </div>
        
        
                <div class="form-group">
                            <label for="Player Count">
                                Player Count
                            </label>
                  <input type="range" name="playerCount" class="custom-range" 
                  min="0" max="5" id="customRange2" onChange={this.handleInputChange}/>
                    </div>
                    <div class="row">
                <div class="col-md-3">
                </div>
                <div class="col-md-6">
                </div>
                <div class="col-md-3">
                     
                    <button type="submit" class="btn btn-success">
                        Next
                    </button>

                </div>
                </div>
                    
                   
        
                </div>
        
            
        
                <div class="col-md-4">
                </div>
        
            </div>
        
        
         
        
        
            
            </div>
            </form>
        
        )
    }
}