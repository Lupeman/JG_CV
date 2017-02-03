var React = require('react');
var Job_msd = require('./Job_msd');

var Work_experience = React.createClass({
  render: function(){
    return (
      <div className="work_experience_container">
        <Job_msd />
      </div>
    );
  }
});

module.exports = Work_experience;
