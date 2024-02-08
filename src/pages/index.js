import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        // position: "relative",
        overflow: "hidden",
      }}
    >
      <iframe
        sx={{
          width: "900px",
          height: "506px",
          position: "absolute",
          top: 0,
          left: 0,
          border: 0,
        }}
        src="https://www.youtube.com/embed/gN5hj3vXMX8?autoplay=1&loop=1&playlist=gN5hj3vXMX8"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Box>
  );
}
