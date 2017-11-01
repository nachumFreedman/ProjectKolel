import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';

const domain = 'https://daf-stream.herokuapp.com';
//const domain = 'http://localhost:3000';

const urlFromPathName = (pathname) => {  
  const [ ,,mesechta,contentType,dafNumber ] = pathname.split('/')
  //pathParams[0] = empty string
  //pathParams[1] = route-book-series (talmud/mishna)

  const url = (`${domain}/dafs/raw/${mesechta}/${contentType}/${dafNumber}`);
  
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
