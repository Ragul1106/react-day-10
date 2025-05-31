import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';

const Page8 = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Counter: ${counter}`;
  }, [counter]);

  return (
    <div className="container">
      <Card className="p-4 shadow-lg animate__animated animate__fadeInRight">
        <h2 className="mb-3 text-success">📝 Dynamic Title Update</h2>
        <p className="lead">Click below to increment counter. Document title updates accordingly.</p>
        <Button variant="success" onClick={() => setCounter(counter + 1)}>
          Increment Counter ({counter})
        </Button>
      </Card>
    </div>
  );
};

export default Page8;