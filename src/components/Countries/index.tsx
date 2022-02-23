import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { Container, CountryCard, CountryImage, CountryInfo } from './styles';
interface Country {
  name: string;
  capital: string;
  population: number;
  region: string;
  numericCode: string;
  flags: {
    png: string;
  };
}

export function Countries() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    api.get('/all').then((response) => setCountries(response.data));
  }, []);
  return (
    <Container>
      {countries.map((country) => (
        <CountryCard key={country.name}>
          <Link to={`/countries/${country.name}`}>
            <CountryImage>
              <img src={country.flags.png} alt={country.name} />
            </CountryImage>
            <CountryInfo>
              <h4>{country.name}</h4>
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
          </Link>
        </CountryCard>
      ))}
    </Container>
  );
}
