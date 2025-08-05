import { clsx } from "clsx";

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={clsx(
      "rounded-lg border border-gray-100 bg-white p-5 shadow-sm transition",
      "hover:shadow-md dark:border-gray-800 dark:bg-gray-900",
      className
    )}
  >
    {children}
  </div>
);

export default Card;
