import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const newArrivals = [
  {
    _id: "1",
    name: "Stylish Jacket",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Stylish Jacket",
      },
    ],
  },
  {
    _id: "2",
    name: "Casual Sneakers",
    price: 80,
    images: [
      {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Casual Sneakers",
      },
    ],
  },
  {
    _id: "3",
    name: "Elegant Watch",
    price: 250,
    images: [
      {
        url: "https://picsum.photos/500/500?random=3",
        altText: "Elegant Watch",
      },
    ],
  },
  {
    _id: "4",
    name: "Classic Hat",
    price: 40,
    images: [
      {
        url: "https://picsum.photos/500/500?random=4",
        altText: "Classic Hat",
      },
    ],
  },
  {
    _id: "5",
    name: "Leather Wallet",
    price: 60,
    images: [
      {
        url: "https://picsum.photos/500/500?random=5",
        altText: "Leather Wallet",
      },
    ],
  },
  {
    _id: "6",
    name: "Sunglasses",
    price: 90,
    images: [
      {
        url: "https://picsum.photos/500/500?random=6",
        altText: "Sunglasses",
      },
    ],
  },
  {
    _id: "7",
    name: "Denim Jeans",
    price: 110,
    images: [
      {
        url: "https://picsum.photos/500/500?random=7",
        altText: "Denim Jeans",
      },
    ],
  },
  {
    _id: "8",
    name: "Sports Watch",
    price: 200,
    images: [
      {
        url: "https://picsum.photos/500/500?random=8",
        altText: "Sports Watch",
      },
    ],
  },
  {
    _id: "9",
    name: "Backpack",
    price: 150,
    images: [
      {
        url: "https://picsum.photos/500/500?random=9",
        altText: "Backpack",
      },
    ],
  },
  {
    _id: "10",
    name: "Running Shoes",
    price: 130,
    images: [
      {
        url: "https://picsum.photos/500/500?random=10",
        altText: "Running Shoes",
      },
    ],
  },
];

export default function NewArrival() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft + container.clientWidth < container.scrollWidth
      );
    }
  };

  const scrollLeft = () => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount =
        window.innerWidth < 768
          ? container.clientWidth+25 // Full screen width for small screens
          : container.clientWidth / 3; // One image width for larger screens
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount =
        window.innerWidth < 768
          ? container.clientWidth+25 // Full screen width for small screens
          : container.clientWidth / 3; // One image width for larger screens
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, []);

  return (
    <section>
      <div className="container mx-auto text-center mb-16 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>
        {/* Scroll Buttons */}
        <div className="absolute right-0 bottom-[-50px] flex space-x-2">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`p-2 rounded-lg border bg-white text-black ${
              !canScrollLeft ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FiChevronLeft className="text-2xl mx-auto" />
          </button>
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`p-2 rounded-lg border bg-white text-black ${
              !canScrollRight ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FiChevronRight className="text-2xl mx-auto" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="container mx-auto overflow-x-scroll flex gap-x-6 relative"
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="flex-shrink-0 w-full sm:w-[50%] lg:w-[30%] relative"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div
              className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white
p-4 rounded-b-lg"
            >
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}