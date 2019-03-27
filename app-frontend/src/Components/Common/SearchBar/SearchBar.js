import React, {Component} from 'react'

class SearchBar extends Component {

    render(){  
        return(
            <div className="ui search-bar segment">
                <form className="ui form">
                    <div className="ui field ">
                        <input type="text" placeholder="Search Here" onChange={(event) => this.props.searchHandler(event.target.value)}/>
                    </div>
                </form>
            </div>
    )}
  
}

export default SearchBar;