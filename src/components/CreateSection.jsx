import { useState } from "react";
// mui
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// utils
import { getCurrentDateAndTime, convertToTimestamp } from "../utils";

export default function CreateSection() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [options, setOptions] = useState([]);
  const [endTime, setEndTime] = useState(getCurrentDateAndTime());

  const handleCreate = (pTitle, pDescription, pOptions, pEndTime) => {
    console.log(pTitle, pDescription, pOptions, pEndTime);
  };

  const renderOptions = (
    <>
      <Typography>Options</Typography>
      <Stack spacing={1} pl={2}>
        {options.map((option, index) => (
          <TextField
            key={index}
            label={`Option${index + 1}`}
            fullWidth
            value={option}
            onChange={(e) =>
              setOptions((prev) => [
                ...prev.slice(0, index),
                e.target.value,
                ...prev.slice(index + 1),
              ])
            }
          />
        ))}
        <Stack direction="row" justifyContent="flex-end" spacing={1}>
          <Button onClick={() => setOptions((prev) => [...prev, ""])}>
            Add option
          </Button>
          <Button onClick={() => setOptions([])}>Clear all</Button>
        </Stack>
      </Stack>
    </>
  );

  return (
    <Stack>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <Typography>Create a prediction</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            {renderOptions}
            <TextField
              label="End Time"
              variant="outlined"
              fullWidth
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              helperText={convertToTimestamp(endTime)}
            />
            <Button
              variant="outlined"
              disabled={
                !title ||
                !desc ||
                options.length < 2 ||
                !options.every((item) => item.length > 0) ||
                convertToTimestamp(endTime) < Date.now()
              }
              onClick={() =>
                handleCreate(
                  title,
                  desc,
                  options,
                  Math.floor(convertToTimestamp(endTime) / 1000)
                )
              }
            >
              Create
            </Button>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}
