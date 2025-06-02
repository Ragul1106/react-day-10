import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const MiniProject3 = () => {
  const [seconds, setSeconds] = useState(0);
  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    if (!showTimer) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [showTimer]);

  return (
    <div className="container">
      <Card className="p-4 shadow-lg animate__animated animate__fadeInLeft">
        <h2 className="mb-3 text-warning"> Mini Project 3: Show/Hide Timer</h2>
        {showTimer && <h3>Timer: {seconds} seconds</h3>}
        <Button variant={showTimer ? 'danger' : 'success'} onClick={() => setShowTimer(!showTimer)}>
          {showTimer ? 'Stop Timer' : 'Start Timer'}
        </Button>
      </Card>
    </div>
  );
};

export default MiniProject3;