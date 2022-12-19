import { cva } from 'class-variance-authority';

const button = cva('text-white py-3 mt-5', {
  variants: {
    variant: {
      primary: 'bg-[#14519A]',
      secondary: 'border-[#14519A] border text-[#14519A]',
    },
    size: {
      sm: ' w-[120px] text-center',
      xr: 'w-[180px] text-center'
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

const Button = ({ children, variant, size }) => {
  return <div className={button({ variant, size })}>{children}</div>;
};

export default Button;