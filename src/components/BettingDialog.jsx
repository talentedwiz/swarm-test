/* eslint-disable react/prop-types */
import { useState } from "react";
// mui
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export default function BettingDialog({ open, setOpen, role, prediction }) {
  const [winner, setWinner] = useState("");
  const [option, setOption] = useState("");
  const [amount, setAmount] = useState(0);

  const handleClose = () => setOpen(false);

  const handleBet = (id, betOption, betAmount) => {
    console.log(id, betOption, betAmount);
  };

  const handleFinish = (id, winOption) => {
    console.log(id, winOption);
  };

  const renderClose = (
    <Stack spacing={5} p={3}>
      <Stack spacing={1.5}>
        <TextField
          label="Id"
          variant="outlined"
          value={prediction.id}
          disabled
        />
        <TextField
          label="Win Option"
          variant="outlined"
          value={winner}
          onChange={(e) => setWinner(e.target.value)}
        />
      </Stack>

      <Stack direction="row" spacing={1}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => handleFinish(prediction.id, winner)}
          disabled={!winner || !prediction.options.includes(winner)}
        >
          Close
        </Button>
        <Button
          variant="contained"
          fullWidth
          color="warning"
          onClick={handleClose}
        >
          Cancel
        </Button>
      </Stack>
    </Stack>
  );

  const renderBet = (
    <Stack spacing={5} p={3}>
      <Stack spacing={1.5}>
        <TextField
          label="Id"
          variant="outlined"
          value={prediction.id}
          disabled
        />
        <TextField
          label="Option"
          variant="outlined"
          value={option}
          onChange={(e) => setOption(e.target.value)}
        />
        <TextField
          type="number"
          label="Bet Amount"
          variant="outlined"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Stack>

      <Stack direction="row" spacing={1}>
        <Button
          variant="contained"
          fullWidth
          disabled={
            !option || amount <= 0 || !prediction.options.includes(option)
          }
          onClick={() => handleBet(prediction.id, option, parseFloat(amount))}
        >
          Bet
        </Button>
        <Button
          variant="contained"
          fullWidth
          color="warning"
          onClick={handleClose}
        >
          Cancel
        </Button>
      </Stack>
    </Stack>
  );

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      {role === 3 ? renderBet : renderClose}
    </Dialog>
  );
}
