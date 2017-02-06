var React = require('react');
var Education_general_assembly = require('./Education_general_assembly.js');
var Education_guelph = require('./Education_guelph');


var Education = React.createClass({
  render: function(){
    return (
      <div className="education_container">
      <h3>Education</h3>
        <Education_general_assembly />
        <Education_guelph />
      </div>
    );
  }
});




module.exports = Education;
