import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import ProductCard from "../Product/ProductCard";

interface ReviewProps {
  checkoutToken: any;
}

const Review: React.FC<ReviewProps> = ({ checkoutToken }) => {
  return (
    <>
      <h1>Order Summary</h1>
      <List disablePadding>
        {checkoutToken.live.line_items.map((product: any) => (
          <ListItem style={{ padding: "10px 0" }} key={product.name}>
            <ListItemText
              primary={product.name}
              secondary={`Quantity: ${product.quantity}`}
            />
            <p>{product.line_total.formatted_with_symbol}</p>
          </ListItem>
        ))}
        <ListItem style={{ padding: "10px 0" }}>
          <ListItemText primary="Total" />
          <h2>{checkoutToken.live.subtotal.formatted_with_symbol}</h2>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
