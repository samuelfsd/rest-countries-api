import React from 'react';
import { IoArrowBackSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { Container, Content, CountryInfo } from './styles';

export function Country() {
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
          <img src="https://flagcdn.com/w320/de.png" alt="Germany" />
        </div>
        <CountryInfo>
          <div>
            <h3>Alemanha</h3>
            <p>
              <span>Native Name:</span> dasfdasf
            </p>
            <p>
              <span>Population: </span> dasfdasf
            </p>
            <p>
              <span>Region:</span> dasfdasf
            </p>
            <p>
              <span>Sub Region</span> dasfdasf
            </p>
          </div>
          <div className="right-col">
            <p>
              <span>Top Level Domanin: </span> dasfdasf
            </p>
            <p>
              <span>Currencies: </span> dasfdasf
            </p>
            <p>
              <span>Lenguages: </span> dasfdasf
            </p>
          </div>
        </CountryInfo>
      </Content>
      <div className="border-content">
        <h4>Border Countries: </h4>
        <div className="borders">
          <p>
            <span>France</span>
            <span>Germany</span>
            <span>Netherlands</span>
          </p>
        </div>
      </div>
    </Container>
  );
}
