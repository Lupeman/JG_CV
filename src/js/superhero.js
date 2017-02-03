var React = require('react');

var Superhero = React.createClass({
  render: function(){
    return (
      <div className="superhero_container">
        <img className="cape" src="images/cape.png" alt="superhero cape" />
        <img className="superhero" src="images/superhero.png" alt="superhero image" />
      </div>
    );
  }
});

module.exports = Superhero;
