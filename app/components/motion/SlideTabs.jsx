"use client";

import React, { useRef, useState, useEffect } from "react";

const defaultItems = [
  { label: "Home", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Features", href: "#" },
  { label: "Docs", href: "#" },
  { label: "Blog", href: "#" },
];

export default function SlideTabs({
  items = defaultItems,
  className = "",
  active,
}) {
  return (
    <div className={`bg-surface py-20 ${className}`}>
      <SlideTabsInner items={items} active={active} />
    </div>
  );
}

const SlideTabsInner = ({ items, active }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [hovering, setHovering] = useState(false);
  const itemRefs = useRef([]);

  const setPositionFromIndex = (index) => {
    const ref = itemRefs.current[index];
    if (!ref) return;
    const { width } = ref.getBoundingClientRect();
    setPosition({
      left: ref.offsetLeft,
      width,
      opacity: 1,
    });
  };

  useEffect(() => {
    if (active && !hovering) {
      const index = items.findIndex((i) => i.label === active);
      if (index !== -1) setPositionFromIndex(index);
    }
  }, [active, items, hovering]);

  return (
    <ul
      onMouseLeave={() => {
        setHovering(false);
        const index = active ? items.findIndex((i) => i.label === active) : -1;
        if (index !== -1) setPositionFromIndex(index);
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-border bg-surface-elevated p-1"
    >
      {items.map((item, i) => (
        <Tab
          key={item.label}
          item={item}
          setPosition={setPosition}
          setHovering={setHovering}
          setRef={(el) => (itemRefs.current[i] = el)}
        >
          {item.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ item, children, setPosition, setHovering, setRef }) => {
  const ref = useRef(null);

  return (
    <li
      ref={(el) => {
        ref.current = el;
        setRef(el);
      }}
      onMouseEnter={() => {
        setHovering(true);
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={() => {
        const target = item.href?.replace(/^#/, "");
        if (target) {
          document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <li
      style={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
        transition: "all 0.2s ease",
      }}
      className="absolute z-0 h-7 rounded-full bg-primary md:h-12"
    />
  );
};
