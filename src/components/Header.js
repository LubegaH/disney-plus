import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <NavBar>
      <Logo src="/images/logo.svg"></Logo>
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="home-icon"></img>
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="home-icon"></img>
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="home-icon"></img>
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/originals-icon.svg" alt="home-icon"></img>
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movies-icon.svg" alt="home-icon"></img>
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="home-icon"></img>
          <span>SERIES</span>
        </a>
      </NavMenu>
      <ProfileImg src="/images/profile_img.jpeg"></ProfileImg>
    </NavBar>
  );
}

export default Header;

const NavBar = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0px 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
    }
  }
`;

const ProfileImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
