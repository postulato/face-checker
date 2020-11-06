import { useState } from "react";
import Navigation from "./component/Navigation/Navigation";
import ImageLinkForm from "./component/ImageLinkForm/ImageLinkFrom";
import Rank from "./component/Rank/Rank";
import Particles from "react-particles-js";
import styled from "styled-components";

// const particleOptions = {
//   particles: {
//     number: {
//       value: 30,
//       density: {
//         enable: true,
//         value_area: 800,
//       },
//     },
//   },
// };

const particleOptions = {
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 340,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: true,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 1200,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: false,
      value: 5,
    },
  },
  detectRetina: true,
};

function App() {
  const [inputText, setInputText] = useState("");

  const onInputChange = ({ target }) => {
    setInputText(target.value);
  };

  const onSubmit = () => {
    console.log("as");
  };

  return (
    <S.main className="App">
      <S.particles params={particleOptions} />
      <Navigation />
      <Rank />
      <ImageLinkForm
        onBtnClick={onSubmit}
        onInputChange={onInputChange}
        text={inputText}
      />
      {/* 
      <FaceRecognition/> */}
    </S.main>
  );
}

const S = {
  main: styled.div``,
  particles: styled(Particles)`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  `,
};

export default App;
