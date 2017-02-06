var React = require('react');

var Education_guelph = React.createClass({
  render: function(){
    return (
      <div className="guelph_container">
        <table>
          <tr>
            <td className="education_stats">
              <h4>HBSc Zoology</h4>
              <p>University of Guelph - CANADA</p>
              <p>Sep 1999 - April 2003</p>
            </td>
          </tr>
        </table>
      </div>
    );
  }
});

module.exports= Education_guelph;
