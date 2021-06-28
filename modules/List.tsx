import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import React from "react";
import { BaseItem } from "./store";

export type Item = BaseItem & {
  title: string;
};

type ListItemsProps = {
  items: Item[]
  onRemove: (item: Item) => void
}

export function ListItems({items, onRemove}: ListItemsProps) {
  return <List>
    {items.map(item => 
      <ListItem key={item.id}>
        <ListItemText
          primary={item.title}
        />
        <ListItemSecondaryAction>
          <IconButton onClick={() => onRemove(item)} edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )}
  </List>

}
