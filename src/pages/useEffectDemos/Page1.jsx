import React from 'react';
import { Card } from 'react-bootstrap';
import 'animate.css';

const Page1 = () => {
  return (
    <div className="container">
      <Card className="p-4 shadow-lg animate__animated animate__fadeInUp">
        <h2 className="mb-3 text-primary">🔍 Introduction to useEffect</h2>
        <p className="lead">
          The <code>useEffect</code> hook lets you perform side effects in functional components.
          It's similar to <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code> in class-based components.
        </p>
        <ul>
          <li>Used for data fetching, event listeners, timers, etc.</li>
          <li>Runs after the component is rendered.</li>
          <li>Can be controlled with a dependency array.</li>
        </ul>
      </Card>
    </div>
  );
};

export default Page1;