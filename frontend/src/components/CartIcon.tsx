import { useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

type CartIconProps = {
  itemCount: number;
};

export default function CartIcon({ itemCount }: CartIconProps) {
  const location = useLocation();
  const [animate, setAnimate] = useState(false);

  // Mostra l’icona solo se siamo nello shop
  if (!location.pathname.startsWith("/shop")) return null;

  // Effetto “pop” quando cambia il numero
  useEffect(() => {
    if (itemCount > 0) {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [itemCount]);

  return (
    <div style={{ position: "fixed", bottom: "1rem", right: "1rem" }}>
  <Link to="/cart" style={{ position: "relative", display: "inline-block" }}>
    <FaShoppingCart size={40} />
    {itemCount > 0 && (
      <span
        style={{
          position: "absolute",
          top: "-8px",
          right: "-8px",
          backgroundColor: "red",
          color: "white",
          fontWeight: "bold",
          borderRadius: "50%",
          height: "24px",
          width: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.8rem",
        }}
      >
        {itemCount}
      </span>
    )}
  </Link>
</div>

  );
}
