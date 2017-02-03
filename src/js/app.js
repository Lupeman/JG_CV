var React = require('react');
var Contact_details = require('./Contact_details');
var Name_header = require('./Name_header');
var About_me = require('./About_me');
var Work_experience = require('./Work_experience');

var App = React.createClass({
  render: function(){
    return (
      <div className="main_container">
        <Name_header />
        <Contact_details />
        <About_me />
        <Work_experience />
      </div>
    );
  }
});


module.exports = App;
