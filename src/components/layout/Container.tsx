// src/components/layout/Container.tsx
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string; // ← 여기 id 타입 추가!
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  id,
}) => (
  <div
    id={id}
    className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}
  >
    {children}
  </div>
);

export default Container;
