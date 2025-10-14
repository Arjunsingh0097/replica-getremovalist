"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
}

export default function Logo({ className = "", size = "md", href = "/" }: LogoProps) {
  const imageSizes = {
    sm: { width: 120, height: 120 },
    md: { width: 120, height: 120 },
    lg: { width: 120, height: 120 }
  };

  const logoContent = (
    <div className={`flex items-center ${className}`}>
      {/* Logo Image */}
      <Image
        src="/images/Logo.png"
        alt="getremovalist logo"
        width={imageSizes[size].width}
        height={imageSizes[size].height}
        className="object-contain"
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="hover:opacity-80 transition-opacity duration-200">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
