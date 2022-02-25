import React from 'react';

import { Container, Form } from './styles';
interface InputProps {
  value: string;
  setInputText: (event: string) => void; //disabled eslint no-unused-vars
}
export function Filter({ value, setInputText }: InputProps) {
  return (
    <Container>
      <Form>
        <input
          type="text"
          placeholder="Search for a country..."
          value={value}
          onChange={(event) => setInputText(event.target.value)}
        />
      </Form>

      <div>
        <select>
          <option value="Filter by Region" disabled selected>
            Filter by Region
          </option>
        </select>
      </div>
    </Container>
  );
}
