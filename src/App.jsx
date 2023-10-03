import { useState } from "react";
import styled, { css } from "styled-components";
import Country from "./Country";

function App() {
  const [day, setDay] = useState(true);
  const [region, setRegion] = useState("Filter by Region");
  const [list, setList] = useState(false);

  return (
    <div
      className="App"
      style={{ backgroundColor: day ? "#FAFAFA" : "#202C36" }}
    >
      {/* Header  */}
      <div
        className="header"
        style={{ backgroundColor: day ? "#FFF" : "#2B3844" }}
      >
        <p className="title" style={{ color: day ? "#111517" : "#FFF" }}>
          Where in the world?
        </p>
        <div className="day-night-div" onClick={() => setDay(!day)}>
          <svg
            className="moon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              style={{ stroke: day ? "#111517" : "none" }}
              d="M10.8426 11.052C7.73486 11.052 5.21543 8.74226 5.21543 5.89457C5.21543 4.82024 5.57343 3.82526 6.18514 3C3.75229 3.75612 2 5.86498 2 8.35045C2 11.4708 4.75943 14 8.16286 14C10.8743 14 13.1757 12.3945 14 10.1636C13.1 10.7238 12.0129 11.052 10.8426 11.052Z"
            />
          </svg>
          <p className="daynight" style={{ color: day ? "#111517" : "#FFF" }}>
            Dark Mode
          </p>
        </div>
      </div>

      {/* Main  */}
      <div className="main">
        {/* Search  */}
        <div
          className="input-div"
          style={{ backgroundColor: day ? "#FFF" : "#2B3844" }}
        >
          <div className="search-div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                style={{ fill: day ? "#B2B2B2" : "#FFF" }}
                d="M11.1111 9.77778H10.4L10.1333 9.51111C11.0222 8.53333 11.5556 7.2 11.5556 5.77778C11.5556 2.57778 8.97778 0 5.77778 0C2.57778 0 0 2.57778 0 5.77778C0 8.97778 2.57778 11.5556 5.77778 11.5556C7.2 11.5556 8.53333 11.0222 9.51111 10.1333L9.77778 10.4V11.1111L14.2222 15.5556L15.5556 14.2222L11.1111 9.77778ZM5.77778 9.77778C3.55556 9.77778 1.77778 8 1.77778 5.77778C1.77778 3.55556 3.55556 1.77778 5.77778 1.77778C8 1.77778 9.77778 3.55556 9.77778 5.77778C9.77778 8 8 9.77778 5.77778 9.77778Z"
              />
            </svg>
          </div>
          <Input day={day} type="text" placeholder="Search for a country…"/>
    </div>

        {/* Filter  */}
        <div className="filter-div">
          <div className="filter-container">
            <div
              className="filter"
              style={{ backgroundColor: day ? "#FFF" : "#2B3844" }}
            >
              <p className="region" style={{ color: day ? "#111517" : "#FFF" }}>
                {region}
              </p>
              <svg
                onClick={() => setList(!list)}
                style={{ fill: day ? "black" : "white" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 10"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.875 2.875L5 5.75L2.125 2.875L1.25 3.75L5 7.5L8.75 3.75L7.875 2.875Z"
                />
              </svg>
            </div>

            {/* Region List  */}
            <RegionList day={day} list={list}>
              <p
                className="region-list-item"
                style={{ color: day ? "#111517" : "#FFF" }}
                onClick={() => {
                  setRegion("Africa"), setList(false);
                }}
              >
                Africa
              </p>
              <p
                className="region-list-item"
                style={{ color: day ? "#111517" : "#FFF" }}
                onClick={() => {
                  setRegion("America"), setList(false);
                }}
              >
                America
              </p>
              <p
                className="region-list-item"
                style={{ color: day ? "#111517" : "#FFF" }}
                onClick={() => {
                  setRegion("Asia"), setList(false);
                }}
              >
                Asia
              </p>
              <p
                className="region-list-item"
                style={{ color: day ? "#111517" : "#FFF" }}
                onClick={() => {
                  setRegion("Europe"), setList(false);
                }}
              >
                Europe
              </p>
              <p
                className="region-list-item"
                style={{ color: day ? "#111517" : "#FFF" }}
                onClick={() => {
                  setRegion("Oceania"), setList(false);
                }}
              >
                Oceania
              </p>
              </RegionList>
          </div>
          </div>

        {/* Countries */}
        <div className="countries-container">
          <div
            className="country"
            style={{ backgroundColor: day ? "#FFF" : "#2B3844" }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/dfb7/6a9f/4829ccead8b50a47638ac3648f0aec0c?Expires=1697414400&Signature=WBx849ebsKTHmeo66~V3lWXhJ5FTPy14anRNU~Aw47Q6MJhkriYm6qLUop3c85VcJGzwiMjrD-ml8vZuCYjrOrc~3YtNvrEWtNp10~Y3FFgEi7m5XEStmgfVr3ebljeUQZR-LeOVnU6jP~YD2WCbfqKd6K2addTvGQAKhz6sIvYq9dJlkbVV1Cy16W9gwEtC3XD97zm6O8KNlCzmMzfQKzwfMadHS4cqqLw7kZCZyulAd1hvKP8cOu~ZX3fXfAmcrXNJii9pzwbdAO0X0GSDRrJJQVwRe1YDymSzHQCNYLxOgW0EcEpjbLY9g1oqL3qHb3l2S-ngMQimhsUYGtCI0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="flag"
            />

            {/* Country Information  */}
            <div className="about-div">             
              <div className="about">
                <h1 style={{ color: day ? "#111517" : "#FFF" }}>
                  United States Of America
                </h1>
                <CountryInfoDiv>
                  <CountryInfoTitle day={day}>Population:</CountryInfoTitle>
                  <CountryInfo day={day}>cs</CountryInfo>
                </CountryInfoDiv>
                
                <CountryInfoDiv>
                  <CountryInfoTitle day={day}>Region:</CountryInfoTitle>
                  <CountryInfo day={day}>acas</CountryInfo>
                </CountryInfoDiv>
                
                <CountryInfoDiv>
                  <CountryInfoTitle day={day}>Capital:</CountryInfoTitle>
                  <CountryInfo day={day}>casacs</CountryInfo>
                </CountryInfoDiv>
              </div>
            </div>
          </div>
        </div>
      </div>


    {/* <Country day={day}/> */}
    </div>
  );
}

export default App;

// Styled Components
const Input = styled.input(
  (props) => css`
    @media (min-width: 375px) {
      border: none;
      outline: none;
      width: 100%;
      background: ${props.day ? "#FFF" : "#2B3844"};
      color: ${props.day ? "#111517" : "#FFF"};
      font-family: "Nunito Sans";
      font-weight: 600;
      font-size: 12px;
      line-height: 20px;
      &::placeholder {
        color: ${props.day ? "#C4C4C4" : "#FFF"};
        font-weight: 400;
      }
    }
  `
);
const RegionList = styled.div(
  (props) => css`
    @media (min-width: 375px) {
      width: 100%;
      height: 144px;
      padding: 16px 24px;
      border-radius: 5px;
      background: ${props.day ? "#FFF" : "#2B3844"};
      box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
      display: ${props.list ? "flex" : "none"};
      flex-direction: column;
      gap: 8px;
      justify-content: space-between;
    }
  `
);
const CountryInfoDiv = styled.div(
  (props) => css`
    @media (min-width: 375px) {
      width: 100%;
      display: flex;
      gap: 4px;
      align-items: center;
    }
  `
);
const CountryInfoTitle = styled.p(
  (props) => css`
    font-family: 'Nunito Sans';
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    color: ${props.day ? "#111517" : "#FFF"};
  `
);
const CountryInfo = styled(CountryInfoTitle)`
  font-weight: 400;
`;
