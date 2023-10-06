import styled, { css } from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CountryDetails from "./CoutryDetails";

const Country = ({ day }) => {
  const { countryName } = useParams();
  const [countryInformation, setCountryInformation] = useState()

  const getCountry = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all')
      const data = response.data

      if(data.length !== 0) {
        const filter = data.filter((border) => {
          return border.cca3 === countryName
        })
        setCountryInformation(filter[0])
      }   
    } catch(error) {
    }
  }

useEffect(() => {
  getCountry()
},[countryName])

  return (
    <div className="country-home">
      <div className="result">
        {/* Back Button  */}
      <Link to='/Home'>
      <div
        className="back"
        style={{ backgroundColor: day ? "#FFF" : "#2B3844" }}
      >
        <svg
          style={{ fill: day ? "#111517" : "#FFF" }}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.81802 3.6967L6.87868 4.75736L3.3785 8.25754H16.7428L16.7428 9.74246H3.3785L6.87868 13.2426L5.81802 14.3033L0.514719 9L5.81802 3.6967Z"
          />
        </svg>
        <p style={{ color: day ? "#111517" : "#FFF" }}>Back</p>
      </div>
      </Link>

      {/* Flag  */}
      <img
        className="country-flag"
        src={countryInformation? countryInformation.flags.png: null}
        alt="flag"
      />

        {/* Country Name  */}
      <p className="country-name" style={{ color: day ? "#111517" : "#FFF" }}>
        {countryInformation? countryInformation.name.common: null}
      </p>

        {/* Country Information  */}
      <div className="country-header">
        <CountryInfoDiv>
          <CountryInfoTitle day={day}>Native Name:</CountryInfoTitle>
          {countryInformation &&
           <CountryDetails target={countryInformation.name.nativeName} value='official' countryInformation={countryInformation} day={day}/>}
        </CountryInfoDiv>

        <CountryInfoDiv>
          <CountryInfoTitle day={day}>Population:</CountryInfoTitle>
          <CountryInfo day={day}>{countryInformation? countryInformation.population : null}</CountryInfo>
        </CountryInfoDiv>

        <CountryInfoDiv>
          <CountryInfoTitle day={day}>Region:</CountryInfoTitle>
          <CountryInfo day={day}>{countryInformation? countryInformation.region : null}</CountryInfo>
        </CountryInfoDiv>

        <CountryInfoDiv>
          <CountryInfoTitle day={day}>Sub Region:</CountryInfoTitle>
          <CountryInfo day={day}>{countryInformation? countryInformation.subregion : null}</CountryInfo>
        </CountryInfoDiv>

        <CountryInfoDiv>
          <CountryInfoTitle day={day}>Capital:</CountryInfoTitle>
          <CountryInfo day={day}>{countryInformation? countryInformation.capital[0] : null}</CountryInfo>
        </CountryInfoDiv>
      </div>

      <div className="country-main">
        <CountryInfoDiv>
          <CountryInfoTitle day={day}>Top Level Domain:</CountryInfoTitle>
          <CountryInfo day={day}>{countryInformation? countryInformation.tld[0] : null}</CountryInfo>
        </CountryInfoDiv>
        
        <CountryInfoDiv>
          <CountryInfoTitle day={day}>Currencies:</CountryInfoTitle>
          {countryInformation &&
           <CountryDetails target={countryInformation.currencies} value='name' countryInformation={countryInformation} day={day}/>}
        </CountryInfoDiv>

        <CountryInfoDiv>
          <CountryInfoTitle day={day}>Languages:</CountryInfoTitle>
          {countryInformation &&
           <CountryDetails target={countryInformation.languages} value='' countryInformation={countryInformation} day={day}/>}
        </CountryInfoDiv>
      </div>

      <div className="country-footer">
        <h1
          className="border-countries-title"
          style={{ color: day ? "#111517" : "#FFF" }}
        >
          Border Countries: 
        </h1>

        <div className="border-countries-container">
        {countryInformation &&
        countryInformation.hasOwnProperty('borders')?
        countryInformation.borders.map(country => {
          return (
            <Link to={'/Country/' + country} key={Math.random()}>
            <div
              className="border-countries"
              style={{ backgroundColor: day ? "#FFF" : "#2B3844" }}
            >
              <p style={{ color: day ? "#111517" : "#FFF" }}>{country}</p>
            </div>
            </Link>
            )
        }): <p className="null">0</p>
        }
        </div>
        </div>
      </div>
    </div>
  );
};

export default Country;

const CountryInfoDiv = styled.div(
  (props) => css`
    @media (min-width: 375px) {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  `
);
const CountryInfoTitle = styled.p(
  (props) => css`
    font-family: "Nunito Sans";
    font-weight: 600;
    line-height: 32px;
    color: ${props.day ? "#111517" : "#FFF"};
  `
);
const CountryInfo = styled(CountryInfoTitle)`
  font-weight: 400;
`;

