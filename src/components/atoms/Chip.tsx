// src/components/Chip.tsx
import Typography from "@/components/atoms/Typography";
import React from "react";

type ChipProps = {
  label: string;
  className?: string;
};

const Chip: React.FC<ChipProps> = ({ label, className = "" }) => (
  <div
    className={`inline-block rounded-md bg-gray-100 py-1 px-3 shadow-sm ${className}`}
  >
    <Typography.P3 className="font-medium">{label}</Typography.P3>
  </div>
);

export default Chip;
