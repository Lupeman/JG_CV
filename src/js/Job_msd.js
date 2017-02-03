var React = require('react');

var Job_msd = React.createClass({
  render: function(){
    return (
      <div className="job_msd_container">
        <div>
          <h4>MSD</h4>
          <p className="job_stats">Sales Representative</p>
          <p className="job_stats">April 2010 - November 2016</p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Job_msd;
