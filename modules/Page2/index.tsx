import { Box } from "@material-ui/core";
import React from "react";
import { Input } from "../Input";
import { ListItems } from "../List";
import { usePageTwoListStore } from "./store";

export function PageTwo() {
  const {state: {items}, actions: {add, remove}} = usePageTwoListStore()

  return (
    <Box m={2}>
      <h1>List two</h1>

      <Input onAdd={add} />

      <ListItems items={items} onRemove={remove} />
    </Box>
  )
}
