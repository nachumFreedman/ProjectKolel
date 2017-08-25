import React, {Component} from 'react';
import './BookTray.css'


class BookTray extends Component{
  render(){
    const series = this.props.series || [];
    const onClick = this.props.onClick || (()=>0);
    
    return (
      <div className='BookTray'>
        <ul className='BookTray-Series'>
          {
            series.map(({title, id}) => (
              <li key={id}>{title}</li>
            ))
          }
        </ul>
        {
          series.map(({ title, books, id: sid }) => (
            <ul key={sid} className='BookTray-Books'>
              {
                books.map(({ title, id: bid }) => (
                  <li key={bid}
                      className='BookTray-Book'
                      onClick={()=> onClick(sid, bid)}>
                    {title}
                  </li>
                ))
              }
            </ul>
          )) 
        }
      </div>
    );
  }
};
export default BookTray;
