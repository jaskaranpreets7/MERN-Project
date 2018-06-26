import React, {Component} from 'react'
import { FormGroup, FormControl, Button,  Form, InputGroup} from 'react-bootstrap'

class SearchBar extends Component{
    render(){  
        // console.log("props in  SearchBar" , this.props.content)
        return(
           
        <form>
            <FormGroup>
                <InputGroup>
                <InputGroup.Button>
                    <Button>Search Here</Button>
                </InputGroup.Button>
                <FormControl type="text"  onChange={this.props.handler}/>
                </InputGroup>
            </FormGroup>
        </form>
    )}
  
}

export default SearchBar;