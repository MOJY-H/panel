"use client";

import { CoverflowCarousel } from "@/components/ui/coverflow-carousel";

const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=640&h=640&fit=crop&q=70&auto=format`;

// Product slides to match the shopping cart. Swap for your own catalogue.
const SLIDES = [
  {
    src: UNSPLASH("1542291026-7eec264c27ff"),
    alt: "Red running sneaker on a plain background",
    title: "Court Runner Sneakers",
    subtitle: "Footwear",
    meta: [
      { label: "Price", value: "$89.00" },
      { label: "Colour", value: "Red" },
      { label: "Stock", value: "In stock" },
    ],
  },
  {
    src: UNSPLASH("1523275335684-37898b6baf30"),
    alt: "Silver analog wristwatch",
    title: "Classic Analog Watch",
    subtitle: "Accessories",
    meta: [
      { label: "Price", value: "$149.00" },
      { label: "Size", value: "40mm" },
      { label: "Stock", value: "In stock" },
    ],
  },
  {
    src: UNSPLASH("1505740420928-5e560c06d30e"),
    alt: "Black over-ear studio headphones",
    title: "Studio Headphones",
    subtitle: "Audio",
    meta: [
      { label: "Price", value: "$119.00" },
      { label: "Type", value: "Wireless" },
      { label: "Stock", value: "Ships in 2 weeks" },
    ],
  },
  {
    src: UNSPLASH("1491553895911-0055eca6402d"),
    alt: "Pair of white and coloured trainers",
    title: "Street Trainers",
    subtitle: "Footwear",
    meta: [
      { label: "Price", value: "$99.00" },
      { label: "Colour", value: "White" },
      { label: "Stock", value: "In stock" },
    ],
  },
  {
    src: UNSPLASH("1572635196237-14b3f281503f"),
    alt: "Sunglasses resting on a coloured surface",
    title: "Summer Sunglasses",
    subtitle: "Accessories",
    meta: [
      { label: "Price", value: "$59.00" },
      { label: "Lens", value: "Polarised" },
      { label: "Stock", value: "In stock" },
    ],
  },
  {
    src: UNSPLASH("1526170375885-4d8ecf77b99f"),
    alt: "Compact film camera",
    title: "Retro Film Camera",
    subtitle: "Electronics",
    meta: [
      { label: "Price", value: "$179.00" },
      { label: "Format", value: "35mm" },
      { label: "Stock", value: "In stock" },
    ],
  },
];

// ONLY DEFAULT EXPORT WILL BE TREATED AS A DEMO
export default function DemoOne() {
  return (
    <div className="w-full overflow-hidden bg-background py-6">
      <CoverflowCarousel
        slides={SLIDES}
        label="Featured products"
        showCaption
        showNavigation
        showPagination
      />
    </div>
  );
}