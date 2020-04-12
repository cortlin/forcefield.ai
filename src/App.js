import React from 'react';
import Background from './background';
import Form from './form';

export default class App extends React.Component {
  render() {
    return (
      <div className="page">
        <Background />
        <Form />
      </div>
    );
  };
}
