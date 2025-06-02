import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';

const Page2 = () => {
  useEffect(() => {
    console.log('Component Mounted');
  }, []);

  return (
    <div className="container">
      <Card className="p-4 shadow-lg animate__animated animate__zoomIn">
        <h2 className="mb-3 text-success"> Basic useEffect Example</h2>
        <p className="lead">Check your browser console — it logs "Component Mounted" when this component loads.</p>
      </Card>
    </div>
  );
};

export default Page2;