// import React from 'react';
//
// // const SearchBar = () => {
// //   return <input />;
// // }
//
// class SearchBar extends React.Component{
//   render(){
//     return <input />;
//   }
// }

import React , { Component } from 'react';

class SearchBar extends Component{

  constructor(props){
      super(props);
      this.state ={ term : ' '};
  }
  render(){
    //return <input onChange={this.onInputChange}/>;
    //return <input onChange={event =>console.log(event.target.value) }/>
    return (
      <div>
      <input
        value = {this.state.term}
        onChange = {event => this.setState({term : event.target.value})}
      />
      <br />
      //value of input is : {this.state.term}
      </div>
    );
  }

  onInputChange(event){
    //console.log(event.target.value);
    console.log(event);
  }
}

export default SearchBar;
