import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const MiniProject1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="container">
      <Card className="p-4 shadow-lg animate__animated animate__pulse">
        <h2 className="mb-3 text-primary">🎯 Mini Project 1: Counter with Title Update</h2>
        <p className="lead">Counter updates page title with current count.</p>
        <Button variant="primary" onClick={() => setCount(count + 1)}>
          Increment ({count})
        </Button>
      </Card>
    </div>
  );
};

export default MiniProject1;