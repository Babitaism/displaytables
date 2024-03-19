import React from 'react';
import ReactDOM from 'react-dom';

function Babita(props) {
  console.log(props.children,"propschildren")
  return props.children;
}

export default function InterviewTest() {
  return (
    <Babita>
      <div>We</div>
      <div>have</div>
      <div>own</div>
      <div>Fragments</div>
      <div>!!!</div>
      <p>Hi</p>
    </Babita>
  )
}

ReactDOM.render(<InterviewTest />, document.getElementById('root'));
