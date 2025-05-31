import React, { useState, useEffect } from 'react';
import { Card, ListGroup, Spinner } from 'react-bootstrap';

const Page11 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      <Card className="p-4 shadow-lg animate__animated animate__fadeIn">
        <h2 className="mb-3 text-primary">👥 Fetching Data with Fake API</h2>
        {loading ? (
          <div className="d-flex align-items-center">
            <Spinner animation="border" variant="primary" />
            <span className="ms-3">Loading users...</span>
          </div>
        ) : (
          <ListGroup>
            {users.map((user) => (
              <ListGroup.Item key={user.id} className="fw-bold">
                {user.name} ({user.email})
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Card>
    </div>
  );
};

export default Page11;