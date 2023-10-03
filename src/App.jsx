import { useState } from 'react'
import styled, { css } from 'styled-components'

function App() {
  const [day, setDay] = useState(true)
  const [region, setRegion] = useState('Filter by Region')
  const [list, setList] = useState(false)

  return (
    <Home day={day}>
      {/* Header  */}
      <Header day={day}>
        <p className='title'>Where in the world?</p>
        <div className="day-night-div" onClick={() => setDay(!day)}>
          <svg className='moon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.8426 11.052C7.73486 11.052 5.21543 8.74226 5.21543 5.89457C5.21543 4.82024 5.57343 3.82526 6.18514 3C3.75229 3.75612 2 5.86498 2 8.35045C2 11.4708 4.75943 14 8.16286 14C10.8743 14 13.1757 12.3945 14 10.1636C13.1 10.7238 12.0129 11.052 10.8426 11.052Z"/>
          </svg>
          <p className='daynight'>Dark Mode</p>
        </div>
      </Header>

    {/* Main  */}
    <Main day={day} list={list}>
      {/* Search  */}
      <div className="input-div">
          <div className="search-div">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.1111 9.77778H10.4L10.1333 9.51111C11.0222 8.53333 11.5556 7.2 11.5556 5.77778C11.5556 2.57778 8.97778 0 5.77778 0C2.57778 0 0 2.57778 0 5.77778C0 8.97778 2.57778 11.5556 5.77778 11.5556C7.2 11.5556 8.53333 11.0222 9.51111 10.1333L9.77778 10.4V11.1111L14.2222 15.5556L15.5556 14.2222L11.1111 9.77778ZM5.77778 9.77778C3.55556 9.77778 1.77778 8 1.77778 5.77778C1.77778 3.55556 3.55556 1.77778 5.77778 1.77778C8 1.77778 9.77778 3.55556 9.77778 5.77778C9.77778 8 8 9.77778 5.77778 9.77778Z"/>
            </svg>
          </div>
          <input type="text" placeholder='Search for a country…'/>
      </div>

      {/* Filter  */}
      <div className="filter-div">
        <div className="filter-container">
          <div className="filter">
            <p className='region'>{region}</p>
            <svg onClick={() => setList(!list)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.875 2.875L5 5.75L2.125 2.875L1.25 3.75L5 7.5L8.75 3.75L7.875 2.875Z"/>
            </svg>
          </div>

          {/* Region List  */}
          <div className="region-list">
            <p onClick={() => {setRegion('Africa'), setList(false)}}>Africa</p>
            <p onClick={() => {setRegion('America'), setList(false)}}>America</p>
            <p onClick={() => {setRegion('Asia'), setList(false)}}>Asia</p>
            <p onClick={() => {setRegion('Europe'), setList(false)}}>Europe</p>
            <p onClick={() => {setRegion('Oceania'), setList(false)}}>Oceania</p>
          </div>
        </div>
      </div>

      {/* Countries  */}
      <div className="countries-container">
        <div className="country">
          <img src="https://s3-alpha-sig.figma.com/img/dfb7/6a9f/4829ccead8b50a47638ac3648f0aec0c?Expires=1697414400&Signature=WBx849ebsKTHmeo66~V3lWXhJ5FTPy14anRNU~Aw47Q6MJhkriYm6qLUop3c85VcJGzwiMjrD-ml8vZuCYjrOrc~3YtNvrEWtNp10~Y3FFgEi7m5XEStmgfVr3ebljeUQZR-LeOVnU6jP~YD2WCbfqKd6K2addTvGQAKhz6sIvYq9dJlkbVV1Cy16W9gwEtC3XD97zm6O8KNlCzmMzfQKzwfMadHS4cqqLw7kZCZyulAd1hvKP8cOu~ZX3fXfAmcrXNJii9pzwbdAO0X0GSDRrJJQVwRe1YDymSzHQCNYLxOgW0EcEpjbLY9g1oqL3qHb3l2S-ngMQimhsUYGtCI0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="flag"/>
          <div className="about-div">
            {/* Country Information  */}
            <div className='about'>
              <h1>United States Of America</h1>
              <div>
                <p className='about-title'>Population:</p>
                <p className='about-information'>323,947,000</p>
              </div>
              <div>
                <p className='about-title'>Region:</p>
                <p className='about-information'>Americas</p>
              </div>
              <div>
                <p className='about-title'>Capital:</p>
                <p className='about-information'>Washington, D.C.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </Main>
    </Home>
  )
}

export default App

const Home = styled.div(
  (props) => css`
  @media (min-width: 375px) {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props.day? '#FAFAFA': '#202C36'};
    overflow: hidden;
  }   
  `
)
const Header = styled.div(
  (props) => css`
    @media (min-width: 375px) {
      width: 100%;
      height: 80px;
      background: ${props.day? '#FFF': '#2B3844'};
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;

      .title {
        color: ${props.day? '#111517': '#FFF'};
        font-family: 'Nunito Sans';
        font-size: 14px;
        font-weight: 800;
        line-height: 20px;
      }

      .day-night-div {
        display: flex;
        align-items: center;
        gap: 8px;
        &:hover {
          cursor: pointer;
        }
      }

      .moon path {
        fill: #FFF;
        stroke: ${props.day? '#111517': 'none'};
      }

      .daynight {
        color: ${props.day? '#111517': '#FFF'};
        font-family: 'Nunito Sans';
        font-size: 12px;
        font-weight: 600;
      }
    }
  `
)
const Main = styled.div(
  (props) => css`
  @media (min-width: 375px) {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 16px 65px;

  .input-div {
    width: 100%;
    height: 48px;
    padding: 16px 32px;
    display: flex;
    gap: 26px;
    border-radius: 5px;
    background: ${props.day? '#FFF': '#2B3844'};
    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  }

  .search-div svg {
    width: 16px;
    height: 16px;
  }

  .search-div > svg > path {
    fill: ${props.day? '#B2B2B2': '#FFF'};
  }

  .input-div input {
    border: none;
    outline: none;
    width: 100%;
    background: ${props.day? '#FFF': '#2B3844'};
    color: ${props.day? '#111517': '#FFF'};
    font-family: 'Nunito Sans';
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    &::placeholder {
      color: ${props.day? '#C4C4C4': '#FFF'};
      font-weight: 400;
    }
  }

  .filter-div {
    width: 100%;
    display: flex;
    align-items: flex-start;
  }

  .filter-container {
    margin-top: 40px;
    width: 65%;
    height: max-content;
    position: relative;
    z-index: 2;
  }

  .filter {
    width: 100%;
    height: 48px;
    border-radius: 5px;
    background: ${props.day? '#FFF': '#2B3844'};
    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 19px 14px 24px;
    margin-bottom: 4px;
  }

  .region {
    color: ${props.day? '#111517': '#FFF'};
    font-family: 'Nunito Sans';
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
  }

  .filter svg {
    width: 10px;
    height: 10px;
    fill: ${props.day? 'black': 'white'};
  }

  .region-list {
    width: 100%;
    height: 144px;
    padding: 16px 24px;
    border-radius: 5px;
    background: ${props.day? '#FFF': '#2B3844'};
    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
    display: ${props.list? 'flex': 'none'};
    flex-direction: column;
    gap: 8px;
    justify-content: space-between;
  }

  .region-list p {
    color: ${props.day? '#111517': '#FFF'};
    font-family: 'Nunito Sans';
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
  }

  .countries-container {
    width: 90%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    position: absolute;
    z-index: 0;
    top: 285px;
  }

  .country {
    width: 80%;
    height: 325px;
    border-radius: 5px;
    background: ${props.day? '#FFF': '#2B3844'};
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
    overflow: hidden;
  }

  .country img {
    width: 100%;
    height: 140px;
    border-radius: 5px 5px 0 0;
  }

  .about-div {
    width: 100%;
    height: 57%;
  }

  .about {
    margin-top: 24px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    padding: 0 24px;
  } 

  .about h1 {
    text-align: left;
    color: ${props.day? '#111517': '#FFF'};
    font-family: 'Nunito Sans';
    font-size: 18px;
    font-weight: 800;
    line-height: 26px;
    margin-bottom: 8px;
  }

  .about div {
    width: 100%;
    display: flex;
    gap: 4px;
    align-items: center;
  }

  .about-title {
    color: ${props.day? '#111517': '#FFF'};
    font-family: 'Nunito Sans';
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
  }

  .about-information {
    color: ${props.day? '#111517': '#FFF'};
    font-family: 'Nunito Sans';
    font-size: 14px;
    line-height: 16px;
  }
}
`
)
