var React = require('react');
var Job_msd = require('./Job_msd');
var Job_out_and_about_dogs = require('./Job_out_and_about_dogs');

var Work_experience = React.createClass({
  render: function(){
    return (
      <div className="work_experience_container">
        <Job_msd />
        <Job_out_and_about_dogs />
      </div>
    );
  }
});

module.exports = Work_experience;
