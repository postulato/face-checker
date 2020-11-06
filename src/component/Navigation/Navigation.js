import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';

const Navigation = () => {
  return (
    <S.nav> 
      <S.logo>
        <img src={logo} alt='logo' />
      </S.logo>
      <S.p>Sign out</S.p>
    </S.nav>
  );
};


const S = {
  nav: styled.nav`
    background: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.4);
  `,
  p: styled.p`
    margin: 10px;
    padding: 10px;
    font-family: 'segoe ui', sans-serif;
    font-weight: 500;
    cursor: pointer; 

    &:hover {
      color: lightcoral;
    }
  `,
  logo: styled.div`
    width: 40px;
    height: 40px;
    margin: 20px auto 20px 20px;
    

    & > img {
      width: 100%;
      height: 100%;
    }
  `,
};

export default Navigation;