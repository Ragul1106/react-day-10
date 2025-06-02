import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';

const Page3 = () => {
  useEffect(() => {
    console.log('This runs only once on mount');
  }, []);

  return (
    <div className="container">
      <Card className="p-4 shadow-lg animate__animated animate__fadeIn">
        <h2 className="mb-3 text-info"> Effect with Empty Dependency Array</h2>
        <p className="lead">Open the console to see a message logged once on component mount.</p>
      </Card>
    </div>
  );
};

export default Page3;