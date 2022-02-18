import React from 'react';

import { Container, Form } from './styles';

export function Filter() {
  return (
    <Container>
      <Form>
        <input placeholder="Search for a country..." />
      </Form>

      <div>
        <select name="select">
          <option value="value1">Brasil</option>
          <option value="value2">Argentina</option>
          <option value="value3">Inglaterra</option>
          <option value="value4">Dinamarca</option>
        </select>
      </div>
    </Container>
  );
}
