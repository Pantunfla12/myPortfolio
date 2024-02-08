import React from "react";
import YouTube from "react-youtube";

export default function Home() {
  const opts = {
    height: "100%",
    width: "1200px",
    playerVars: {
      autoplay: 1,
      controls: 1,
      loop: 1,
      mute: 1,
      showinfo: 0,
      playlist: "gN5hj3vXMX8",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
      }}
    >
      <YouTube videoId="gN5hj3vXMX8" opts={opts} />
    </div>
  );
}
