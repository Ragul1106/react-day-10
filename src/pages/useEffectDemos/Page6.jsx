import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';

const Page6 = () => {
  useEffect(() => {
    console.log('Component Mounted');

    return () => {
      console.log('Component Unmounted');
    };
  }, []);

  return (
    <div className="container">
      <Card className="p-4 shadow-lg animate__animated animate__fadeInUp">
        <h2 className="mb-3 text-danger">🧹 Cleanup Function</h2>
        <p className="lead">
          Open the console. "Component Mounted" logs on mount, and "Component Unmounted" logs when this component unmounts.
        </p>
      </Card>
    </div>
  );
};

export default Page6;