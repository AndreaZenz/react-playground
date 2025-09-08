import { Button as BsButton } from 'react-bootstrap';

type ButtonProps = {
  label: string;
  variant?: string;
  onClick?: () => void;
};

export default function Button({ label, variant = "primary", onClick }: ButtonProps) {
  return (
    <BsButton variant={variant} onClick={onClick}>
      {label}
    </BsButton>
  );
}
