var React = require('react');

var Contact_details = React.createClass({
  render: function(){
    return (
      <div className="contact_details_container">
        <div>
          <p className="forHire">Available for hire</p>
        </div>
        <div className="contact_details">
          <div className="website">
            <ul>
              <li>
                <img id="website" src="images/browser.png" alt="browser icon" /></li>
              <li>
                <h4>Website</h4>
                <p><a href="http://www.jaimegunther.com">www.jaimegunther.com</a></p>
              </li>
            </ul>
          </div>
          <div className="mobile">
            <ul>
              <li>
                <img id="mobile" src="images/mobile.png" alt="mobile icon" />
              </li>
              <li>
                <h4>Mobile Number</h4>
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
                <h4>Email Address</h4>
                <p><a href="mailto:jaimegunther@hotmail.com">jaimegunther@hotmail.com</a></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Contact_details;
