import React, { useState } from 'react';
import { Card, ListGroup, Spinner, Button } from 'react-bootstrap';

const Page13 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <div className="container">
      <Card className="p-4 shadow-lg animate__animated animate__fadeInRight">
        <h2 className="mb-3 text-success">👆 Button Click API Fetching</h2>
        <Button variant="success" onClick={fetchUsers} disabled={loading}>
          {loading ? 'Fetching...' : 'Fetch Users'}
        </Button>
        <ListGroup className="mt-3">
          {users.map((user) => (
            <ListGroup.Item key={user.id}>
              {user.name} ({user.email})
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default Page13;