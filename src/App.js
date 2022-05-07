import React, { useState, useEffect } from "react";
import { DATA } from "./components/Data";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./App.css";

function App() {
  const [url, setUrl] = useState(null);

  const changeUrl = (url) => {
    setUrl(url);
  };

  return (
    <div>
      <div class="header">
        <a href="#default" class="logo">
          Pocket Radio Player
        </a>
        <div class="header-right">
          <a
            id="desktop-app"
            href="https://download1502.mediafire.com/vp5am4obhyhg/9iot2h3okoh21da/Pocket+Radio+Player+Setup.exe"
            download
          >
            Masaüstü Uygulamasını İndir
          </a>
        </div>
      </div>
      <div className="App">
        {DATA.map((item) => {
          return (
            <a onClick={() => setUrl(item.url)} className="radio-station">
              <img src={item.image} alt={item.name} />
            </a>
          );
        })}
      </div>
      <div className="player">
        {DATA.map((item) => {
          if (item.url === url) {
            return (
              <div className="station-name">
                {/* <h3>Şu an çalan Radyo:</h3>
                <h1>{item.name}</h1> */}
                <marquee>Şu an çalan Radyo: {item.name}</marquee>
              </div>
            );
          }
        })}
        <AudioPlayer
          autoPlay
          preload={"none"}
          showSkipControls={false}
          showJumpControls={false}
          volume={0.3}
          src={url}
          onPlay={(e) => console.log("onPlay")}
          // other props here
        />
      </div>
    </div>
  );
}

export default App;
