var React = require('react');

var Job_msd = React.createClass({
  render: function(){
    return (
      <div className="job_msd_container">
        <table>
          <tr>
            <td>
              <h4>MSD</h4>
              <p className="job_stats">Sales Representative</p>
              <p className="job_stats">April 2010 - November 2016</p>
            </td>
            <td>
              <p>
                Independently managed a large territory of approximately 300 clients to ensure they were provided with accurate and up-to-date product information. I successfully launched two new products to market, worked with territory teammates to promote, organise and run Webinars, evening meetings and events on various topics within the industry.
              </p>
            </td>
          </tr>
        </table>
      </div>
    );
  }
});

module.exports = Job_msd;
