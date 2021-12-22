import React from "react";
import classes from "./CartCard.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ClearIcon from "@mui/icons-material/Clear";
import { commerce } from "../../lib/commerce";
import { dataActions } from "../../store/data-slice";
import { UIActions } from "../../store/ui-slice";

interface CartCardProps {
  id?: string;
  name?: string;
  image?: string;
  quantity?: number;
  total_price?: string;
}

const CartCard: React.FC<CartCardProps> = ({
  image,
  name,
  id,
  quantity,
  total_price,
}) => {
  //Add loading spinnder
  const dispatch = useAppDispatch();
  const updateQuantityHandler = async (productID: string, quantity: number) => {
    dispatch(UIActions.setIsLoading(true))
    const response = await commerce.cart.update(productID, { quantity });
    dispatch(dataActions.setCart(response.cart));
    dispatch(UIActions.setIsLoading(false))
  };

  const removeFromCartHandler = async (productID: string) => {
    dispatch(UIActions.setIsLoading(true))
    const response = await commerce.cart.remove(productID);
    dispatch(dataActions.setCart(response.cart));
    dispatch(UIActions.setIsLoading(false))
  };

  return (
    <section className={classes.cart_item}>
      <header>
        <img src={image} alt="product_image" className={classes.img} />
      </header>
      <main className={classes.main}>
        <div className={classes.name}>
          <h1>{name}</h1>
        </div>
        <div className={classes.quantity}>
          <RemoveIcon
            sx={{ color: "gray", cursor: "pointer" }}
            onClick={() => updateQuantityHandler(id!, quantity! - 1)}
          />
          <p>{quantity}</p>
          <AddIcon
            sx={{ color: "gray", cursor: "pointer" }}
            onClick={() => updateQuantityHandler(id!, quantity! + 1)}
          />
        </div>
        <div className={classes.total_price}>
          <p>${total_price}</p>
        </div>
      </main>
      <footer>
        <div
          className={classes.remove}
          onClick={() => removeFromCartHandler(id!)}
        >
          <ClearIcon />
        </div>
      </footer>
    </section>
  );
};

export default CartCard;
