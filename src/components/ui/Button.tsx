// src/components/ui/Button.tsx
import React, {
  forwardRef,
  ElementType,
  ComponentPropsWithRef,
  ReactNode,
} from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

// 1) 가능한 옵션 타입
type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

// 2) as 허용, 공통 props
interface PolymorphicProps<E extends ElementType> {
  as?: E;
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

// 3) 실제 props: as 요소의 props + motion props, 공통 제외
type ButtonProps<E extends ElementType> = PolymorphicProps<E> &
  Omit<ComponentPropsWithRef<E>, keyof PolymorphicProps<E>>;

// 4) 기본 요소
const defaultElement = "button";

// 5) 스타일 매핑
const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-primary-500 hover:bg-primary-600 text-white",
  secondary: "bg-secondary-500 hover:bg-secondary-600 text-white",
  outline:
    "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white",
  ghost:
    "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
  danger: "bg-red-500 hover:bg-red-600 text-white",
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

// 6) 모듈 구현
const Button = forwardRef(
  <E extends ElementType = "button">(
    {
      as,
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      disabled,
      ...rest
    }: ButtonProps<E>,
    ref: React.Ref<any>
  ) => {
    const Component = motion(as || defaultElement) as React.ElementType;
    const isDisabled = disabled || isLoading;

    return (
      <Component
        ref={ref}
        whileHover={!isDisabled ? { scale: 1.02 } : undefined}
        whileTap={!isDisabled ? { scale: 0.98 } : undefined}
        className={clsx(
          "inline-flex items-center justify-center font-medium rounded transition duration-200",
          VARIANT_CLASSES[variant],
          SIZE_CLASSES[size],
          fullWidth && "w-full",
          isDisabled && "opacity-50 cursor-not-allowed",
          className
        )}
        disabled={isDisabled}
        {...(rest as Record<string, unknown>)}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"
            />
          </svg>
        ) : (
          <>
            {leftIcon && <span className="mr-2 flex-shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && (
              <span className="ml-2 flex-shrink-0">{rightIcon}</span>
            )}
          </>
        )}
      </Component>
    );
  }
);

Button.displayName = "Button";
export default Button;
