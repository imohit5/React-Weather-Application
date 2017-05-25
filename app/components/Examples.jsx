var React = require('react');
var {Link} = require('react-router')

var Examples = (props) => {
  return(
    <div>
      <h1 className='text-center'>Examples</h1>
      <p> How this Weather application works</p>
      <ol>
        <li>
          <Link to='/?location=Atlanta'>Atlanta, GA</Link>
        </li>
        <li>
          <Link to='/?location=Vijayawada'>Vijayawada, India</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
