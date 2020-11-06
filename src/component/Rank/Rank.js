import React from 'react';
import styled from 'styled-components';

const Rank = () => {
  return (
    <S.block>
      Your current rank is 1!
    </S.block>
  )
};

const S = {
  block: styled.div`
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%, 0);
    font:600 30px/1 'segoe ui', sans-serif;
    color: #2d2d2d;
  `,
};

export default Rank;