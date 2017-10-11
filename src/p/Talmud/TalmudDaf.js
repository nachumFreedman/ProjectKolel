import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';

const domain = 'https://daf-stream.herokuapp.com';
//const domain = 'http://localhost:3000';

const urlFromPathName = (pathname) => {  
  const pathParams = pathname.split('/');
  const url = domain + '/dafs/raw/' + pathParams[2] + '/' + pathParams[3] + '/' + pathParams[4];
  
  return url;
} 

class TalmudDaf extends Component {
  state = {
    md: ''
  }
  
  componentDidMount(){
    console.log('mm');
    fetch(urlFromPathName(this.props.location.pathname))
           .then(pon => pon.text())
           .then(pon => console.log(pon)||this.setState({ md: pon }) )
    .catch(e => console.log(e) );
  }
  
  render(){
    return (
      <ReactMarkdown source={this.state.md}/>
    );
  }
}

export default TalmudDaf;
