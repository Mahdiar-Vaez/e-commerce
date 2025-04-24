import { useState } from "react";
import { toast } from "sonner"; // Import the toast function from sonner
import ProductGrid from "./Productgrid";

const selectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "This is a stylish Jacket perfect for any occasion",
  brand: "FashionBrand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "fashion",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "fashion",
    },
  ],
};
const similarProducts = [
  {
    _id: 1,
    name: "Product 3",
    price: 1250,
    images: [{ url: "https://picsum.photos/500/500?random=1" }],
  },
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=2" }],
  },
  {
    _id: 2,
    name: "Product 1",
    price: 120,
    images: [{ url: "https://picsum.photos/500/500?random=3" }],
  },
  {
    _id: 1,
    name: "Product 5",
    price: 500,
    images: [{ url: "https://picsum.photos/500/500?random=5" }],
  },
];
const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(selectedProduct.images[0].url);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  function AddQuantity() {
    setQuantity((prev) => prev + 1);
  }

  function RemoveQuantity() {
    setQuantity((prev) => (prev > 0 ? prev - 1 : prev));
  }

  function handleMainImage(e) {
    setMainImage(e);
  }

  function handleSizeSelection(size) {
    setSelectedSize(size);
  }

  function handleColorSelection(color) {
    setSelectedColor(color);
  }

  function handleAddToCart() {
    if (!selectedSize) {
      toast.error("Please select a size before adding to cart.");
      return;
    }
    if (!selectedColor) {
      toast.error("Please select a color before adding to cart.");
      return;
    }
    if (quantity <= 0) {
      toast.error("Please select a quantity greater than 0.");
      return;
    }

    // If all validations pass
    setIsAdding(true);
    setTimeout(() => {
      toast.success("Product added to cart successfully!");
      setIsAdding(false);
    }, 1000);
  }

  return (
    <div className="md:p-6 p-0 ">
      <div className="max-w-6xl mx-auto bg-white p-4 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct?.images?.map((image, index) => (
              <img
                onClick={() => handleMainImage(image.url)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${
                  image.url === mainImage && "border"
                }`}
                src={image.url}
                key={index}
                alt={image.altText || `thumbnail ${index}`}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                className="w-full h-auto object-cover rounded-lg"
                src={mainImage}
                alt="main image"
              />
            </div>
          </div>
          {/* Mobile Thumbnail */}
          <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
            {selectedProduct?.images?.map((image, index) => (
              <img
                onClick={() => handleMainImage(image.url)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${
                  image.url === mainImage && "border"
                }`}
                src={image.url}
                key={index}
                alt={image.altText || `thumbnail ${index}`}
              />
            ))}
          </div>
          {/* Right Side */}
          <div className="md-w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectedProduct.originalPrice &&
                `${selectedProduct.originalPrice}`}
            </p>
            <p className="text-xl text-gray-500 mb-2">
              $ {selectedProduct.price}
            </p>
            <p className="text-gray-400 mb-4">{selectedProduct.description}</p>
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => handleColorSelection(color)}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color && "ring-2 ring-black"
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
              {selectedColor && (
                <p className="text-sm text-gray-500 mt-2">
                  Selected Color: {selectedColor}
                </p>
              )}
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeSelection(size)}
                    className={`px-4 py-2 rounded-lg border-gray-700 border ${
                      selectedSize === size && "bg-black text-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {selectedSize && (
                <p className="text-sm text-gray-500 mt-2">
                  Selected Size: {selectedSize}
                </p>
              )}
            </div>
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={RemoveQuantity}
                  disabled={quantity <= 0}
                  className={`px-2 py-1 bg-gray-200 rounded text-lg ${
                    quantity <= 0 && "text-gray-400 cursor-not-allowed"
                  }`}
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={AddQuantity}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`bg-black text-white py-2 rounded w-full mb-4 ${
                isAdding && "bg-gray-400"
              }`}
            >
              {isAdding ? "Adding to Cart " : "Add to Cart"}
            </button>
            <div>
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1 font-bold">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1 font-bold">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl font-medium mb-4">You May Also Like</h2>
          <ProductGrid products={similarProducts} />
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
