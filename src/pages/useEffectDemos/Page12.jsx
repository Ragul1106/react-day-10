import React, { useState, useEffect } from 'react';
import { Card, ListGroup, Spinner } from 'react-bootstrap';

const Page12 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <Card className="p-4 shadow-lg animate__animated animate__fadeInUp">
        <h2 className="mb-3 text-secondary"> Delayed API Fetching</h2>
        {loading ? (
          <div className="d-flex align-items-center">
            <Spinner animation="border" variant="secondary" />
            <span className="ms-3">Fetching data after delay...</span>
          </div>
        ) : (
          <ListGroup>
            {users.map((user) => (
              <ListGroup.Item key={user.id}>
                {user.name} ({user.email})
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Card>
    </div>
  );
};

export default Page12;