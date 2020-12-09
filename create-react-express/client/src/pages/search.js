import React, {Component} from "react";
import Axios from "axios";

class Search extends Component {
  state={
    searchTerm: "",
    books: []
  }  

  componentDidMount(){
    this.getBooks()
  }

  handleChange= (event)=> {
    const {value,name}=event.target
    this.setState({[name]:value})
  }
  handleSearch= ()=> {

  }
  getBooks= ()=> {
    Axios.get("/api/books").then(function(data){
      console.log(data)
    })
  }

  render() {
    return (
      <div>
        <input name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
        <button onClick={this.handleSearch}>Search</button>
      </div>

    )
  }
  
}


export default Search;
