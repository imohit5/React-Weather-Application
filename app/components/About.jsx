var React = require('react');


var About = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This Weather application is build on React. Developed this for Web Developement Course</p>
      <p>
        Tools used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react/">React</a> - Front End JavaScript Framework
        </li>
        <li>
          <a href="http://www.openweathermap.org">Open Weather Maps</a> - API services
        </li>
      </ul>
    </div>
  );
}

module.exports = About;
