import React from "react";
import Tilt from "react-tilt";
import styled from "styled-components";

const ImageLinkForm = ({onInputChange, text, onBtnClick}) => {
  return (
    <S.div>
      <Tilt
        className="Tilt"
        options={{
          max: 25,
          speed: 3000,
          reset: false,
        }}
      >
        <S.block className="Tilt-inner">
          <h1>Check your image</h1>
          <div className='input-wrapper' >
            <input type='text' value={text} onChange={onInputChange}/>
            <button onClick={onBtnClick}>ok</button>
          </div>
        </S.block>
      </Tilt>
    </S.div>
  );
};

const S = {
  div: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    & > * {
      background: #fff;
      max-width: 500px;
      max-height: 500px;
      width: 50%;
      height: 50%;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
    }
  `,
  block: styled.div`
    & > h1 {
      text-align: center;
      
      padding: 20px 0;
      font: 42px/1 "segoe ui", sans-serif;
      background:linear-gradient(#7FFFD4,#002D62);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 900;
    }

    & > .input-wrapper {
      padding: 30px 20%;
      text-align:center;

      & input {
        border: none;
        border-bottom: 2px solid #002D62;
        outline: none;
        color: #002D62;
        font: 30px/1 'segoe ui', sans-serif;
        display: block;
        width: 100%;
      }

      & button {  
        border: 1px solid  #436FA3;
        background: #002D62;
        margin-top: 80px;
        color: #fff;
        padding: 10px 20px;
        border-radius: 6px;
        font: 25px/1 'segoe ui', sans-serif;
        cursor: pointer;
        transition: all 0.3s ease;
        text-transform: uppercase;
        outline: none;

       

        &:hover {
          background: #436FA3;
        }

        &:active {
          background: #fff;
          color:  #436FA3;
        }
      } 
    }
  `,
};

export default ImageLinkForm;
