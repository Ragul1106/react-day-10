import React, { useState, useEffect } from 'react';
import { Form, Card } from 'react-bootstrap';

const Page9 = () => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log(`Input value changed: ${inputValue}`);
  }, [inputValue]);

  return (
    <div className="container">
      <Card className="p-4 shadow-lg animate__animated animate__fadeInLeft">
        <h2 className="mb-3 text-warning">🖊️ Form Input Logging</h2>
        <Form>
          <Form.Group>
            <Form.Label>Type something:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Start typing..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </Form.Group>
        </Form>
        <p className="mt-3">Open console to see input changes logged.</p>
      </Card>
    </div>
  );
};

export default Page9;