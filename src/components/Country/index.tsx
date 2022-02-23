import React, { useEffect, useState } from 'react';
import { IoArrowBackSharp } from 'react-icons/io5';
import { Link, useParams } from 'react-router-dom';

import api from '../../services/api';
import { Container, Content, CountryInfo } from './styles';
interface CountryProps {
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string;
  currencies: [
    {
      name: string;
    },
  ];
  languages: [
    {
      name: string;
    },
  ];
  flag: string;
  borders: string[];
}

export function Country() {
  const [country, setCountry] = useState<CountryProps | null>(null);

  const { name } = useParams();

  useEffect(() => {
    async function getData() {
      const { data } = await api.get(`name/${name}`);
      setCountry(() => data[0]);
    }
    getData();
  }, []);

  useEffect(() => {
    console.log(country);
  }, [country]);

  return (
    <Container>
      <Link to="/">
        <div className="iconDiv">
          <IoArrowBackSharp />
          <p>Back Home</p>
        </div>
      </Link>
      <Content>
        <div className="image-content">
          <img src={country?.flag} alt={country?.nativeName} />
        </div>
        <CountryInfo>
          <div>
            <h3>{country?.name}</h3>
            <p>
              <span>Native Name:</span> {country?.nativeName}
            </p>
            <p>
              <span>Population: </span> {country?.population}
            </p>
            <p>
              <span>Region:</span> {country?.region}
            </p>
            <p>
              <span>Sub Region: </span> {country?.subregion}
            </p>
          </div>
          <div className="right-col">
            <p>
              <span>Top Level Domain: </span> {country?.topLevelDomain}
            </p>
            <p>
              {country && country.currencies && (
                <>
                  <span>Currencies: </span> {country?.currencies[0].name}
                </>
              )}
            </p>
            <p>
              <span>Languages: </span>
              {country &&
                country.languages &&
                country?.languages.map((language) => `${language.name} `)}
            </p>
          </div>
        </CountryInfo>
      </Content>
      <div className="border-content">
        <h4>Border Countries: </h4>

        <div className="borders">
          {country && country.borders && (
            <p>
              {country?.borders.map((border) => {
                return <span key={`${border}`}>{border}</span>;
              })}
            </p>
          )}
        </div>
      </div>
    </Container>
  );
}
