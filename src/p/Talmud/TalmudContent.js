import React, { Component } from 'react';

import DafTable from '../../pure/DafTable';

class TalmudContent extends Component {
  render(){
    return (
      <div>
        <p>Choose which Daf</p>
        <DafTable lang='en' hrefPrefix={window.location.hash}/>
      </div>
    );
  }
}

export default TalmudContent;
