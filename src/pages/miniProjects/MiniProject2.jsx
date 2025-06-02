import React, { useEffect, useState } from 'react';
import { Card, ListGroup, Spinner } from 'react-bootstrap';

const MiniProject2 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <Card className="p-4 shadow-lg animate__animated animate__fadeInDown">
        <h2 className="mb-3 text-success"> Mini Project 2: User List</h2>
        {loading ? (
          <Spinner animation="border" />
        ) : (
          <ListGroup>
            {users.map((user) => (
              <ListGroup.Item key={user.id} className="fw-bold">
                {user.name} — <small>{user.email}</small>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Card>
    </div>
  );
};

export default MiniProject2;