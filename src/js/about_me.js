var React = require('react');
var Superhero = require('./Superhero');
var Personal_statement = require('./Personal_statement');


var About_me = React.createClass({
  render: function(){
    return (
      <div className="about_me_container">
        <Superhero />
        <Personal_statement />
      </div>
    );
  }
});

module.exports = About_me;