import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './search.css';


export default class Search extends Component{
    render(){
        return(
            <div className='search' >
                <div id='parent'>
                    <div id='child'>
                        IN THE MOOD TO CATCH A FLICK? SEE WHAT MOVIS ARE PLAYING NOW!<br/>
                        <Button variant="warning" onClick = {this.props.handleClick}>Show me a list of Movies!</Button>
                    </div>
                </div>
            </div>
        )
    }
}