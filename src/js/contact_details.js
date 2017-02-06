var React = require('react');

var Contact_details = React.createClass({
  render: function(){
    return (
      <div className="contact_details_container">
        <div className="website">
          <ul>
            <li>
              <img id="website" src="images/browser.png" alt="portfolio_site_icon" /></li>
            <li>
              <p><a href="http://www.jaimegunther.com">www.jaimegunther.com</a></p>
            </li>
          </ul>
        </div>
        <div className="mobile">
          <ul>
            <li>
              <img id="mobile" src="images/mobile.png" alt="mobile_contact_icon" />
            </li>
            <li>
              <p>0406 052 463</p>
            </li>
          </ul>
        </div>
        <div className="email">
          <ul>
            <li>
              <img id="email" src="images/email.png" alt="email icon" />
            </li>
            <li>
            <p><a href="mailto:jaimegunther@hotmail.com">jaimegunther@hotmail.com</a></p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Contact_details;
