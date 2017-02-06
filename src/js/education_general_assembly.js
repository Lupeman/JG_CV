var React = require('react');

var Education_general_assembly = React.createClass({
  render: function(){
    return (
      <div className="general_assembly_container">
        <table>
          <tr>
            <td className="education_stats">
              <h4>Web Development Immersive Course</h4>
              <p>General Assembly</p>
              <p>Nov 2016 - Feb 2017</p>
            </td>
          </tr>
          <tr>
            <td className="education_blurb">
              <p>
                HTML5,CSS3/SASS, JavaScript,Ruby, Ruby on Rails, React/Redux, jQuery, Backbone.js, Node.js/Express.js,Sinatra, PostgreSQL, Git, Heroku, NPM, Gulp, Browserify, Bootstrap, Wordpress and Magento.
              </p>
            </td>
          </tr>
        </table>
      </div>
    );
  }
});

module.exports= Education_general_assembly;
