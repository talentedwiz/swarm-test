/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
// mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
// components
import PredictionCard from "./PredictionCard";

export default function Predictions({ role }) {
  const [predictions, setPredictions] = useState([]);

  const loadPredictions = () => {
    setPredictions([
      {
        id: 0,
        title: "P1",
        desc: "this is a temp data",
        options: ["11", "12", "13"],
        endTime: 1728139740,
        isActive: true,
        winner: "",
      },
      {
        id: 1,
        title: "P1",
        desc: "this is a temp data",
        options: ["11", "12", "13"],
        endTime: 1728139740,
        isActive: true,
        winner: "",
      },
      {
        id: 2,
        title: "P1",
        desc: "this is a temp data",
        options: ["11", "12", "13"],
        endTime: 1728139740,
        isActive: true,
        winner: "",
      },
      {
        id: 3,
        title: "P1",
        desc: "this is a temp data",
        options: ["11", "12", "13"],
        endTime: 17899000,
        isActive: false,
        winner: "",
      },
      {
        id: 4,
        title: "P1",
        desc: "this is a temp data",
        options: ["11", "12", "13"],
        endTime: 1828139740,
        isActive: true,
        winner: "",
      },
    ]);
  };

  useEffect(() => {
    loadPredictions();
  }, []);

  return (
    <Box>
      {predictions.length > 0 ? (
        <Grid container spacing={1.5}>
          {predictions.map((prediction, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <PredictionCard data={prediction} role={role} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>No predictions</Typography>
      )}
    </Box>
  );
}
