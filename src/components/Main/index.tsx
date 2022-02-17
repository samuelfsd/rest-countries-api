import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { CardContent, Container, ContainerInput, CountriesCards } from './styles';
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

export function Main() {
  const [countries, setCountries] = useState<Countrie[]>([]);

  useEffect(() => {
    api.get('/all').then((response) => setCountries(response.data));
  }, []);
  return (
    <Container>
      <ContainerInput>
        <input type="text" placeholder="Search for a country..." />

        <select name="select">
          <option value="value1">Brasil</option>
          <option value="value2">Argentina</option>
          <option value="value3">Inglaterra</option>
          <option value="value4">Dinamarca</option>
        </select>
      </ContainerInput>

      {countries.map((country) => (
        <CountriesCards key={country.name.official}>
          <CardContent>
            <div className="image-container">
              <img src={country.flags.png} alt={country.name.official} />
            </div>
            <div className="card-content">
              <h4>{country.name.official}</h4>
              <ul>
                <li>Population: {country.population}</li>
                <li>Region: {country.region}</li>
                <li>Capital: {country.capital}</li>
              </ul>
            </div>
          </CardContent>
        </CountriesCards>
      ))}
    </Container>
  );
}
