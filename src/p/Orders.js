import React, { Component } from 'react';

import './Orders.css';

class Orders extends Component {
  state = {
  }

  
  render() {
    return (
      <div className="OrdersPage">
        <strong>
          Become a <a href="../members">member</a> this year through a $72 donation <br/>
          to Kollel Iyun Hadaf and enjoy <a href="../member-benefits.htm">discounts on our publications</a>.
        </strong>

        
        <ul>
  	  <li>
            <h3>Free Gifts</h3>
	    <a href="gifts.htm"><font color="000080">Yearly Dafyomi Bookmark</font></a>
	    <a href="gifts.htm"><font color="000080">Siyum Card</font></a>
          </li>
	  
	  <li>
            <h3>Assorted Material</h3>
            <p>
	      <a href="http://dafyomi.shemayisrael.co.il/parsha/torahfrominet.htm">Torah from the Internet</a>
              - Rabbi Kornfeld's Insights to the Weekly Parasha & Holidays
            </p>

            <p>
	      <a href="order-12cycl-calendar.htm" target="_parent">
                Pocket Sized Leatherbound Dafyomi Calendar
              </a>
            </p>
            
            <p>
	      <a href="order-blaze-book.htm">
                Blaze in the Darkening Gloom
              </a>
              - the life of Rav Meir Shapiro zt'l
            </p>

            <p>
	      <a href="order-wakeup-bk.htm">
                Wake Up!
              </a>
              - words of inspiration to help wake Up for Davening on time.
            </p>
          </li>
          
	  <li>
            <h3>11th Cycle Siyum in Jerusalem</h3>
            <p>
	      <a href="order-siyum-cd.htm" target="_parent">30 min. Video CD</a>
            </p>

            <p>
	      <a href="order-siyum-cd.htm#prices" target="_parent">Audio CD set</a>
            </p>

            <p>
	      <a href="order-siyum-cd.htm#prices" target="_parent">Cassette tape set</a>
            </p>
          </li>
          
	  <li>
            <h3>English Study Guides</h3>
            <p>
	      <a href="kih-pricing.htm">Insights to the Daf</a>
            </p>

            <p>
	      <a href="kih-pricing.htm">Background to the Daf</a>
            </p>

            <p>
	      <a href="kih-pricing.htm">Review Questions and Review Summaries</a>
            </p>

            <p>
	      <a href="kih-pricing.htm">Point by Point Summary of the Daf</a>
              (in outline form)
            </p>
          </li>
          
	  <li>
            <h3>Hardcover Study Guides (in English)</h3>

            <p>
              <a href="order-insights-bk-yeva.htm">Insights to the Daf</a>
            </p>
            
            <p>
	      <a href="order-outlines-book.htm">The Daf Outline</a>
            </p>
          </li>
          
          <li>
            <h3>Hebrew Study Guides</h3>

            <p>  
              <a href="ydpricing.htm" target="_parent">Yosef Da'as</a>
            </p>

            <p>
	      <a href="sikumgafat-book-order.htm">Galei Masechta and Sikumei Gafat</a>
            </p>

            <p>
	      <a href="kih-pricing.htm">Charts for Gemara, Rashi and Tosfos</a>
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
export default Orders;
