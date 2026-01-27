// src/components/common/Logo.tsx
import { Link } from "react-router-dom";

const Logo = ({ size = 32 }: { size?: number }) => (
  <Link
    to="/"
    className="flex items-center gap-2 font-display text-lg font-bold text-primary-500"
  >
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary-500"
    >
      {/* 꽃잎 */}
      <circle cx="32" cy="16" r="8" />
      <circle cx="48" cy="32" r="8" />
      <circle cx="32" cy="48" r="8" />
      <circle cx="16" cy="32" r="8" />
      {/* 꽃 중심 */}
      <circle cx="32" cy="32" r="6" fill="currentColor" />
    </svg>
    <span className="hidden lg:inline">Suhyun Kim</span>
  </Link>
);

export default Logo;
