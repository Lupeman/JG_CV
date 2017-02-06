var React = require('react');

var Job_complete_communications = React.createClass({
  render: function(){
    return (
      <div className="job_complete_communications_container">
        <table>
          <tr>
            <td className="job_stats">
              <h4>MSD</h4>
              <p>Sales Representative</p>
              <p>April 2010 - November 2016</p>
            </td>
          </tr>
          <tr>
            <td className="job_blurb">
              <p>
                Independently managed a large territory of approximately 300 clients to ensure they were provided with accurate and up-to-date product information. I successfully launched two new products to market, worked with territory teammates to promote, organise and run Webinars, evening meetings and events on various topics within the industry. I am able to engage in technical product discussions and maintain ongoing professional relationships with clients.
              </p>
            </td>
          </tr>
        </table>
      </div>
    );
  }
});

module.exports = Job_msd;
