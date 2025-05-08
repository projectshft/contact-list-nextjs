// components/ActionButton.tsx
import React from "react";
import Link from "next/link";

type Props = {
  label: string;
  onClick?: () => void;
  href?: string;
  width?: string;
};

export default function Button({
  label,
  onClick,
  href,
  width = "w-[200px]",
}: Props) {
  const baseStyles = `${width} py-2 bg-gray-300 text-[#444] rounded-xl hover:bg-gray-500 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-200`;

  if (href) {
    return (
      <Link href={href}>
        <button className={baseStyles}>{label}</button>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {label}
    </button>
  );
}
