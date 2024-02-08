import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "300px",
          height: "533px",
          // position: "relative",
          overflow: "hidden",
          border: 0,
        }}
      >
        <iframe
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            border: 0,
          }}
          src="https://www.youtube.com/embed/gN5hj3vXMX8?autoplay=1&loop=1&controls=0&showinfo=0&playlist=gN5hj3vXMX8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Box>
    </Box>
  );
}
