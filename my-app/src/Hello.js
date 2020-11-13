import React, { Component } from 'react'; 
import App from './App';

export default class Hello extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div>
                <p>Hello {this.props.name} </p>
            </div>
        )
    }
}