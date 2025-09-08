import { useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartIconProps = {
  itemCount: number;
};

export default function CartIcon({ itemCount }: CartIconProps) {
  const location = useLocation();

  // Mostra l’icona solo se siamo nello shop
  if (!location.pathname.startsWith("/shop")) {
    return null;
  }

   return (
    <div className="fixed bottom-4 right-4">
      <Link to="/cart" className="relative">
        <FaShoppingCart size={40} />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </Link>
    </div>
  );
}
