import React from 'react';

import { Container, Form } from './styles';
interface InputProps {
  value: string;
  // eslint-disable-next-line no-unused-vars
  search: (event: string) => void;
}
export function Filter({ value, search }: InputProps) {
  return (
    <Container>
      <Form>
        <input
          type="text"
          placeholder="Search for a country..."
          value={value}
          onChange={(event) => search(event.target.value)}
        />
      </Form>

      <div>
        <select onBlur={(event) => search(event.target.value)}>
          <option value="Filter by Region" disabled selected>
            Filter by search
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europa</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </Container>
  );
}
