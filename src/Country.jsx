import styled, { css } from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Country = ({ day, name }) => {
  const [result, setResult] = useState(true)
  const [error, setError] = useState(false)
  // const {name} = useParams();


console.log(name)
  return (
    <div className="country-home">
      {/* Result  */}
      {result && 
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
        src="https://s3-alpha-sig.figma.com/img/dfb7/6a9f/4829ccead8b50a47638ac3648f0aec0c?Expires=1697414400&Signature=WBx849ebsKTHmeo66~V3lWXhJ5FTPy14anRNU~Aw47Q6MJhkriYm6qLUop3c85VcJGzwiMjrD-ml8vZuCYjrOrc~3YtNvrEWtNp10~Y3FFgEi7m5XEStmgfVr3ebljeUQZR-LeOVnU6jP~YD2WCbfqKd6K2addTvGQAKhz6sIvYq9dJlkbVV1Cy16W9gwEtC3XD97zm6O8KNlCzmMzfQKzwfMadHS4cqqLw7kZCZyulAd1hvKP8cOu~ZX3fXfAmcrXNJii9pzwbdAO0X0GSDRrJJQVwRe1YDymSzHQCNYLxOgW0EcEpjbLY9g1oqL3qHb3l2S-ngMQimhsUYGtCI0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="flag"
      />
        {/* Country Name  */}
      <p className="country-name" style={{ color: day ? "#111517" : "#FFF" }}>
        {name}
      </p>
        {/* Country Information  */}
      <div className="country-header">
        <CountryInfoDiv>
          <CountryInfoTitle day={day}>Native Name:</CountryInfoTitle>
          <CountryInfo></CountryInfo>
        </CountryInfoDiv>

        <CountryInfoDiv>
          <CountryInfoTitle day={day}>Population:</CountryInfoTitle>
          <CountryInfo></CountryInfo>
        </CountryInfoDiv>

        <CountryInfoDiv>
          <CountryInfoTitle day={day}>Region:</CountryInfoTitle>
          <CountryInfo></CountryInfo>
        </CountryInfoDiv>

        <CountryInfoDiv>
          <CountryInfoTitle day={day}>Sub Region:</CountryInfoTitle>
          <CountryInfo></CountryInfo>
        </CountryInfoDiv>

        <CountryInfoDiv>
          <CountryInfoTitle day={day}>Capital:</CountryInfoTitle>
          <CountryInfo></CountryInfo>
        </CountryInfoDiv>
      </div>

      <div className="country-main">
        <CountryInfoDiv>
          <CountryInfoTitle day={day}>Top Level Domain:</CountryInfoTitle>
          <CountryInfo></CountryInfo>
        </CountryInfoDiv>

        <CountryInfoDiv>
          <CountryInfoTitle day={day}>Currencies:</CountryInfoTitle>
          <CountryInfo></CountryInfo>
        </CountryInfoDiv>

        <CountryInfoDiv>
          <CountryInfoTitle day={day}>Languages:</CountryInfoTitle>
          <CountryInfo></CountryInfo>
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
          <div
            className="border-countries"
            style={{ backgroundColor: day ? "#FFF" : "#2B3844" }}
          >
            <p style={{ color: day ? "#111517" : "#FFF" }}>Georgia</p>
          </div>
        </div>
        </div>
      </div>}

      {/* Error  */}
      {error &&
      <p className='error-message' style={{color: day? "#111517" : "#FFF"}}>
      Countries Not Found
      </p>
      }
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
