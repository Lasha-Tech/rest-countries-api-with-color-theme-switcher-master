import { useEffect, useState } from "react"
import styled, { css } from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = ({day}) => {
    const [inputValue, setInputValue] = useState('')
    const [region, setRegion] = useState("Filter by Region")
    const [list, setList] = useState(false)
    const [allRender, setAllRender] = useState(true)
    const [africaRender, setAfricaRender] = useState(false)
    const [americaRender, setAmericaRender] = useState(false)
    const [asiaRender, setAsiaRender] = useState(false)
    const [europeRender, setEuropeRender] = useState(false)
    const [oceaniaRender, setOceaniaRender] = useState(false)
    const [all, setAll] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    const [result, setResult] = useState(true)
    const [error, setError] = useState(false)

  const getData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all')
        const data = response.data
        setAll(data);

        if(response.status !== 404) {
          setResult(true)
          setError(false)
        }
      } catch (error) {
        setResult(false)
        setError(true)
      }
    }

// Filter Click Events 
const africaRenderClick = () => {
setAllRender(false)
setAfricaRender(true)
setAmericaRender(false)
setAsiaRender(false)
setEuropeRender(false)
setOceaniaRender(false)
}
const americaRenderClick = () => {
setAllRender(false)
setAfricaRender(false)
setAmericaRender(true)
setAsiaRender(false)
setEuropeRender(false)
setOceaniaRender(false)
} 
const asiaRenderClick = () => {
setAllRender(false)
setAfricaRender(false)
setAmericaRender(false)
setAsiaRender(true)
setEuropeRender(false)
setOceaniaRender(false)
} 
const europeRenderClick = () => {
setAllRender(false)
setAfricaRender(false)
setAmericaRender(false)
setAsiaRender(false)
setEuropeRender(true)
setOceaniaRender(false)
} 
const oceaniaRenderClick = () => {
setAllRender(false)
setAfricaRender(false)
setAmericaRender(false)
setAsiaRender(false)
setEuropeRender(false)
setOceaniaRender(true)
}

useEffect(() => {
    getData();
  }, [])

useEffect(() => {
  if(inputValue !== '') {
    // Africa 
    if (africaRender) {
      const filtered = all.filter(country => country.region === 'Africa');
      const filterInput = filtered.filter(country => country.name.common.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1)
      setFilteredCountries(filterInput);
    } 
    // America 
    else if (americaRender) {
      const filtered = all.filter(country => country.region === 'Americas');
      const filterInput = filtered.filter(country => country.name.common.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1)
      setFilteredCountries(filterInput);
      } 
      // Asia 
      else if (asiaRender) {
        const filtered = all.filter(country => country.region === 'Asia');
        const filterInput = filtered.filter(country => country.name.common.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1)
        setFilteredCountries(filterInput);
        }
        // Europe 
        else if (europeRender) {
          const filtered = all.filter(country => country.region === 'Europe');
          const filterInput = filtered.filter(country => country.name.common.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1)
          setFilteredCountries(filterInput);
          }
          // Oceania 
          else if (oceaniaRender) {
            const filtered = all.filter(country => country.region === 'Oceania');
            const filterInput = filtered.filter(country => country.name.common.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1)
            setFilteredCountries(filterInput);
            }
            // All 
            else if (allRender) {
              const filterInput = all.filter(country => country.name.common.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1)
              setFilteredCountries(filterInput);
              } 
  } else {
    // Africa 
  if (africaRender) {
    const filtered = all.filter((country) => country.region === 'Africa');
    setFilteredCountries(filtered);
  } 
    // America 
  else if (americaRender) {
    const filtered = all.filter((country) => country.region === 'Americas');
    setFilteredCountries(filtered);
  }
    // Asia 
  else if (asiaRender) {
    const filtered = all.filter((country) => country.region === 'Asia');
    setFilteredCountries(filtered);
  }
    // Europe 
  else if (europeRender) {
    const filtered = all.filter((country) => country.region === 'Europe');
    setFilteredCountries(filtered);
  }
    // Oceania 
  else if (oceaniaRender) {
    const filtered = all.filter((country) => country.region === 'Oceania');
    setFilteredCountries(filtered);
  } 
    // All 
  else {
    setFilteredCountries(all)
  }}
}, [africaRender, americaRender, asiaRender, europeRender, oceaniaRender, all]);
 
  return (
      <div className="main">
      {result &&
      <div className="result">
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
        <Input value={inputValue} onChange={(e) => {setInputValue(e.target.value), getData()}}
          day={day} type="text" placeholder="Search for a country…"/>
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
            {/* Africa  */}
            <RegionListItem day={day}
              onClick={() => {setRegion("Africa"), africaRenderClick(), setList(false)}}>
                Africa
            </RegionListItem>
            {/* America  */}
            <RegionListItem day={day}
              onClick={() => {setRegion("America"), americaRenderClick(), setList(false)}}>
                America
            </RegionListItem>
            {/* Asia  */}
            <RegionListItem day={day}
              onClick={() => {setRegion("Asia"), asiaRenderClick(), setList(false)}}>
                Asia
            </RegionListItem>
            {/* Europe  */}
            <RegionListItem day={day}
              onClick={() => {setRegion("Europe"), europeRenderClick(), setList(false)}}>
                Europe
            </RegionListItem>
            {/* Oceania  */}
            <RegionListItem day={day}
              onClick={() => {setRegion("Oceania"), oceaniaRenderClick(), setList(false)}}>
                Oceania
            </RegionListItem>
            </RegionList>
        </div>
        </div>

      {/* Countries */}
      <div className="countries-container">
      {filteredCountries.map((country) => {
        return (
          <Link to={'/Country/' + country.cca3} key={Math.random()}>
        <div
          className="country"
          style={{ backgroundColor: day ? "#FFF" : "#2B3844" }}
        >
          <img
            src={country.flags.png}
            alt="flag"
          />

          {/* Country Information  */}
          <div className="about-div">             
            <div className="about">
              <h1 style={{ color: day ? "#111517" : "#FFF" }}>
                {country.name.common}
              </h1>
              <CountryInfoDiv>
                <CountryInfoTitle day={day}>Population:</CountryInfoTitle>
                <CountryInfo day={day}>{country.population}</CountryInfo>
              </CountryInfoDiv>
              
              <CountryInfoDiv>
                <CountryInfoTitle day={day}>Region:</CountryInfoTitle>
                <CountryInfo day={day}>{country.region}</CountryInfo>
              </CountryInfoDiv>
              
              <CountryInfoDiv>
                <CountryInfoTitle day={day}>Capital:</CountryInfoTitle>
                <CountryInfo day={day}>{country.capital}</CountryInfo>
              </CountryInfoDiv>
            </div>
          </div>
        </div>
        </Link>
        )})} 
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
}
 
export default Home;

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
const RegionListItem = styled.p(
  (props) => css`
    @media (min-width: 375px) {
      font-family: 'Nunito Sans';
      font-size: 12px;
      line-height: 16px;
      font-weight: 600;
      color: ${props.day ? "#111517" : "#FFF"};
    }
  `
)
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
@media (min-width: 375px) {
  font-family: 'Nunito Sans';
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  color: ${props.day ? "#111517" : "#FFF"};
}
`
);
const CountryInfo = styled(CountryInfoTitle)`
font-weight: 400;`