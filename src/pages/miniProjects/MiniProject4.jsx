import React, { useEffect, useState } from 'react';
import { Card, ListGroup, Form, Spinner } from 'react-bootstrap';

const MiniProject4 = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    const lowerFilter = filter.toLowerCase();
    setFilteredUsers(users.filter((user) => user.name.toLowerCase().includes(lowerFilter)));
  }, [filter, users]);

  return (
    <div className="container my-4">
      <Card className="p-4 shadow-lg animate__animated animate__fadeInRight">
        <h2 className="mb-3 text-primary">🔍 Mini Project 4: Search Filter</h2>
        <Form.Group className="mb-3">
          <Form.Label>Search users by name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type to filter users..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </Form.Group>

        {loading ? (
          <div className="d-flex align-items-center">
            <Spinner animation="border" variant="primary" />
            <span className="ms-3">Loading users...</span>
          </div>
        ) : filteredUsers.length > 0 ? (
          <ListGroup>
            {filteredUsers.map((user) => (
              <ListGroup.Item key={user.id} className="fw-bold">
                {user.name} <small className="text-muted">({user.email})</small>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <p className="text-danger">No users match your search.</p>
        )}
      </Card>
    </div>
  );
};

export default MiniProject4;
