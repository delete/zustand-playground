import { Box, Button, TextField } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import { Item } from "./List";

type InputProps = {
  onAdd: (item: Item) => void
}

export function Input({onAdd}: InputProps) {

  const [title, setTitle] = useState<string>('')
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setTitle(value)
  }

  return (
    <Box display='flex' alignItems='center'>
      <TextField value={title} onChange={handleChange} id="outlined-basic" label="Outlined" variant="outlined" />
      <Button onClick={() => onAdd({title})}>Add</Button>
    </Box>
  )
}
