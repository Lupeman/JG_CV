var React = require('react');

var Contact_details = React.createClass({
  render: function(){
    return (
      <div class="col-md-5">
        <div class="row">
          <div class="col-md-12">
            <p class="forHire">Available for hire</p>
          </div>
        </div>
        <div class="row website">
          <div class="col-md-2">
            <img id="website" src="images/browser.png" alt="browser icon" />
          </div>
          <div class="col-md-10">
            <h4>Website</h4>
            <p><a href="http://www.jaimegunther.com">www.jaimegunther.com</a></p>
          </div>
        </div>
        <div class="row mobile">
          <div class="col-md-2">
            <img id="mobile" src="images/mobile.png" alt="mobile icon" />
          </div>
          <div class="col-md-10">
            <h4>Mobile Number</h4>
            <p>0406 052 463</p>
          </div>
        </div>
        <div class="row email">
          <div class="col-md-2">
            <img id="email" src="images/email.png" alt="email icon" />
          </div>
          <div class="col-md-10">
            <h4>Email Address</h4>
            <p><a href="mailto:jaimegunther@hotmail.com">jaimegunther@hotmail.com</a></p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Contact_details;
