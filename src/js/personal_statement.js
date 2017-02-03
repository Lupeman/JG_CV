var React = require('react');

var Personal_statement = React.createClass({
  render: function(){
    return(
      <div className="personal_statement_container">
        <p>
          <span>“I'm</span> curious. I love a challenge. I'm great with change and adapt easily. Always learning something new. I really love to code!
        </p>
        <p>
          Honestly there's a lot more to me than that! But it's the combination of those attributes that I think will help me grow as a junior dev. Capable in backend technology, I have a definite passison for the front end. I enjoy being able to use my analytical and technical sensibilities to bring to life a visual and creative idea.
        </p>
        <p>
          Alongside my technical skills, I think my many and diverse life experiences have contributed to my being a fun and respected member of the varied teams I have been a part of. Importantly, I have learned the skills needed for working as part of a cohesive and productive environment, including empathy, humility, supportiveness and a willingness to accept and learn from mistakes. Particularly important as a junior dev!”
        </p>
      </div>
    );
  }
});

module.exports = Personal_statement;
