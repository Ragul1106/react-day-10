import React, { useState, useEffect } from 'react';
import { Button, Card, Alert } from 'react-bootstrap';

const Page10 = () => {
  const [counter, setCounter] = useState(0);
  const [isEven, setIsEven] = useState(true);

  useEffect(() => {
    const even = counter % 2 === 0;
    if (even) {
      console.log('Counter is Even');
    }
    setIsEven(even);
  }, [counter]);

  return (
    <div className="container">
      <Card className="p-4 shadow-lg animate__animated animate__fadeInDown">
        <h2 className="mb-3 text-info">🎯 Condition-Based Side Effects</h2>
        <p className="lead">Increment the counter and watch the console for even numbers.</p>
        <Button variant="info" onClick={() => setCounter(counter + 1)}>
          Increment Counter ({counter})
        </Button>
        {isEven && (
          <Alert variant="success" className="mt-3">
            Counter is Even!
          </Alert>
        )}
      </Card>
    </div>
  );
};

export default Page10;