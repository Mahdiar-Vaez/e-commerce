import React from "react";

export default function ProductForm({ form, onChange, onSubmit, editId, onCancel, onImageChange }) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white  rounded-lg shadow p-2 md:p-6 mb-8 flex flex-col gap-4"
    >
      <div>
        <label className="block mb-1 font-semibold">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={onChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={onChange}
          className="w-full resize-none border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Brand</label>
        <input
          type="text"
          name="brand"
          value={form.brand}
          onChange={onChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Size</label>
        <input
          type="text"
          name="size"
          value={form.size}
          onChange={onChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Images</label>
        <input
          type="file"
          name="images"
          multiple
          accept="image/*"
          onChange={onImageChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {/* Show selected image previews */}
        {form.images && form.images.length > 0 && (
          <div className="flex gap-2 mt-2 flex-wrap">
            {Array.from(form.images).map((img, idx) => (
              <img
                key={idx}
                src={URL.createObjectURL(img)}
                alt={`preview-${idx}`}
                className="w-16 h-16 object-cover rounded"
              />
            ))}
          </div>
        )}
      </div>
      <div>
        <label className="block mb-1 font-semibold">Price (تومان)</label>
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={onChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
          min="0"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Stock</label>
        <input
          type="number"
          name="stock"
          value={form.stock}
          onChange={onChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
          min="0"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Category</label>
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={onChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Discount (%)</label>
        <input
          type="number"
          name="discount"
          value={form.discount}
          onChange={onChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          min="0"
          max="100"
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        {editId ? "Update Product" : "Add Product"}
      </button>
      {editId && (
        <button
          type="button"
          onClick={onCancel}
          className="mt-2 text-gray-500 underline"
        >
          Cancel Edit
        </button>
      )}
    </form>
  );
}