import React, { useState, useEffect } from 'react';
import { Form, Card } from 'react-bootstrap';

const Page5 = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    if (name) console.log(`Name changed to: ${name}`);
  }, [name]);

  useEffect(() => {
    if (age) console.log(`Age changed to: ${age}`);
  }, [age]);

  return (
    <div className="container">
      <Card className="p-4 shadow-lg animate__animated animate__fadeInLeft">
        <h2 className="mb-3 text-danger"> Multiple useEffect Hooks</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </Form.Group>
        </Form>
        <p className="mt-3">Open the console to see separate logs for each input change.</p>
      </Card>
    </div>
  );
};

export default Page5;