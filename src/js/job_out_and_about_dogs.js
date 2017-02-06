var React = require('react');

var Job_out_and_about_dogs = React.createClass({
  render: function(){
    return (
      <div id="job_out_and_about_dogs_container" className="job_container">
        <table>
          <tr>
            <td>
              <h4>Out & About Dogs</h4>
              <p className="job_stats">Owner</p>
              <p className="job_stats">June 2007 - April 2010</p>
            </td>
            <td>
              <p>
              Upon my arrival to Australia, I decided to create my own opportunity and started a dog walking and pet minding service. Using my previous experience working with animals and attempting to leverage my creativity and people skills to promote it, over the course of 3 years was able to build a sizeable client base of approximately 120.
              </p>
            </td>
          </tr>
        </table>
      </div>
    );
  }
});

module.exports = Job_out_and_about_dogs;
