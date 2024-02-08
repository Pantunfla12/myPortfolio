import React, { useState, useEffect } from "react";

export default function Home() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 800,
    height: typeof window !== "undefined" ? window.innerHeight : 600,
  });

  // Efecto para manejar el redimensionamiento de la ventana
  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  // Efecto para cargar la API de YouTube
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.YT === "undefined") {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        new window.YT.Player("youtube-player", {
          height: windowDimensions.height.toString(),
          width: windowDimensions.width.toString(),
          videoId: "gN5hj3vXMX8",
          playerVars: {
            autoplay: 1,
            controls: 1,
            loop: 1,
            mute: 1,
            playlist: "gN5hj3vXMX8",
          },
        });
      };
    }
  }, [windowDimensions.height, windowDimensions.width]);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
      }}
    >
      <div id="youtube-player"></div>
    </div>
  );
}
