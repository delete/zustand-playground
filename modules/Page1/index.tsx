import { Box } from "@material-ui/core";
import React from "react";
import { Input } from "../Input";
import { ListItems } from "../List";
import { usePageOneListStore } from "./store";

export function PageOne() {
  const {state: {items}, actions: {add, remove}} = usePageOneListStore()

  return (
    <Box m={2}>
      <h1>List one</h1>

      <Input onAdd={add} />

      <ListItems items={items} onRemove={remove} />
    </Box>
  )
}
