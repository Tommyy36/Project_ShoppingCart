import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../Context/ShoppingCartContext";
import StoreItems from "../data/items.json";
import { formatCurrency } from "../utilites/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = StoreItems.find((i) => i.id === id);
  if (item === null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item?.imgUrl}
        style={{ height: "80px", width: "100px", objectFit: "contain" }}
      />
      <div className="me-auto">
        <div>
          {item?.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item?.price)}
        </div>
      </div>

      <div>{formatCurrency(item?.price) || 0 * (quantity)}</div>

      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item?.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
