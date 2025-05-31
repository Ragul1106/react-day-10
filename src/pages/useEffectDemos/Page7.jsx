import React, { useEffect } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { useState } from 'react';

const Page7 = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('Fetching Data...');
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <Card className="p-4 shadow-lg animate__animated animate__zoomIn">
        <h2 className="mb-3 text-primary">🌐 API Data Fetching Simulation</h2>
        <p className="lead">Simulating data fetch on component mount.</p>
        {loading ? (
          <div className="d-flex align-items-center">
            <Spinner animation="border" variant="primary" />
            <span className="ms-3">Fetching Data...</span>
          </div>
        ) : (
          <p>Data fetched successfully!</p>
        )}
      </Card>
    </div>
  );
};

export default Page7;