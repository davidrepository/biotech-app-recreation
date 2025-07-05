"use client";

import Image from "next/image";
import { useHeaderData } from "@/hooks";

export const Header = () => {
  const { data, error, loading } = useHeaderData();

  if (loading) return <header>Loading header...</header>;
  if (error || !data) return <header>Error loading header</header>;

  return (
    <header>
      <div>
        <Image
          src={data.company.logo.src}
          alt={data.company.logo.alt}
          width={120}
          height={40}
          priority
        />
      </div>

      <nav>
        <ul>
          {data.navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
