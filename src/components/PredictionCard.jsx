/* eslint-disable react/prop-types */
import { useState } from "react";
// mui
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
// components
import BettingDialog from "./BettingDialog";

export default function PredictionCard({ data, role }) {
  const [open, setOpen] = useState(false);
  const [prediction, setPrediction] = useState({});

  return (
    <>
      <Card variant="outlined">
        <Stack p={2} spacing={1.5}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={1}
          >
            <Typography variant="h6">{data.title}</Typography>
            <Button
              variant="outlined"
              onClick={() => {
                setPrediction(data);
                setOpen(true);
              }}
              disabled={
                !data.isActive || role === 3
                  ? Date.now() > data.endTime * 1000
                  : Date.now() < data.endTime * 1000
              }
            >
              {role === 3 ? "Bet" : "Close"}
            </Button>
          </Stack>
          <Divider />
          <Typography>{data.desc}</Typography>
        </Stack>
      </Card>

      <BettingDialog
        open={open}
        setOpen={setOpen}
        role={role}
        prediction={prediction}
      />
    </>
  );
}
