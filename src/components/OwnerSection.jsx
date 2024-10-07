/* eslint-disable react/prop-types */
import { useState } from "react";
// mui
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function OwnerSection({ admins }) {
  const [addressToAdd, setAddressToAdd] = useState("");

  const handleRemove = (address) => {
    console.log(address);
  };

  const handleAdd = (address) => {
    console.log(address);
  };

  const handleWithdraw = () => {
    console.log("WITHDRAW!");
  };

  return (
    <Stack>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <Typography>Add admin</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="row" spacing={1}>
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              value={addressToAdd}
              onChange={(e) => setAddressToAdd(e.target.value)}
            />
            <Button
              variant="outlined"
              disabled={!addressToAdd}
              onClick={() => handleAdd(addressToAdd)}
            >
              Add
            </Button>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <Typography>Admins</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1}>
            {admins.map((adminAddress, index) => (
              <Chip
                key={index}
                label={adminAddress}
                onDelete={() => handleRemove(adminAddress)}
                sx={{ justifyContent: "space-between" }}
              />
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Button variant="outlined" onClick={handleWithdraw} sx={{ my: 1 }}>
        Withdraw
      </Button>
    </Stack>
  );
}
