import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';

const Page4 = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`Counter changed: ${counter}`);
  }, [counter]);

  return (
    <div className="container">
      <Card className="p-4 shadow-lg animate__animated animate__fadeInRight">
        <h2 className="mb-3 text-warning"> Effect with Dependency Array</h2>
        <p className="lead">Click the button to update the counter and trigger useEffect.</p>
        <Button variant="primary" onClick={() => setCounter(counter + 1)}>
          Increment Counter ({counter})
        </Button>
      </Card>
    </div>
  );
};

export default Page4;