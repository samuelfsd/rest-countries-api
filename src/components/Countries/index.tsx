import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { Container, CountryCard, CountryImage, CountryInfo } from './styles';
interface Countrie {
  name: {
    official: string;
  };
  population: number;
  region: string;
  capital: {
    0: string;
  };
  flags: {
    png: string;
    svg: string;
  };
}

export function Countries() {
  const [countries, setCountries] = useState<Countrie[]>([]);

  useEffect(() => {
    api.get('/all').then((response) => setCountries(response.data));
  }, []);
  return (
    <Container>
      {countries.map((country) => (
        <CountryCard key={country.name.official}>
          <CountryImage>
            <img src={country.flags.png} alt={country.name.official} />
          </CountryImage>
          <CountryInfo>
            <h4>{country.name.official}</h4>
            <p>
              <strong>Population: </strong> {country.population}
            </p>
            <p>
              <strong>Region: </strong>
              {country.region}
            </p>
            <p>
              <strong>Capital:</strong> {country.capital}
            </p>
          </CountryInfo>
        </CountryCard>
      ))}
    </Container>
  );
}
