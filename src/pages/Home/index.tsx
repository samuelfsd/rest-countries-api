import { Countries } from 'components/Countries';
import { Filter } from 'components/Filter';
import React from 'react';

export function Home() {
  return (
    <>
      <Filter />
      <Countries />
    </>
  );
}
