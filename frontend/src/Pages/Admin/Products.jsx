import React, { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import ProductForm from './ProductForm'

export default function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Stylish Jacket",
      brand: "Zara",
      size: "M",
      image: "https://picsum.photos/80/80?random=1",
      price: 120000,
      stock: 10,
      category: "Clothing",
      discount: 10,
      description:"dassdklsadljkdaslkjasdlkasdlasdljasdlsdlkj"
    },
    {
      id: 2,
      name: "Classic Shirt",
      brand: "H&M",
      size: "L",
      image: "https://picsum.photos/80/80?random=2",
      price: 80000,
      stock: 25,
      category: "Clothing",
      discount: 0,
    },
    {
      id: 3,
      name: "Sneakers",
      brand: "Nike",
      size: "42",
      image: "https://picsum.photos/80/80?random=3",
      price: 200000,
      stock: 15,
      category: "Shoes",
      discount: 5,
    },
  ])

  const [form, setForm] = useState({
    name: "",
    brand: "",
    size: "",
    image: "",
    price: "",
    stock: "",
    category: "",
    description:"",
    discount: "",
  })
  

  const [editId, setEditId] = useState(null)
  const handleImageChange = (e) => {
    setForm({ ...form, images: e.target.files });
  };
  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Handle form submit (add or edit)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.price || !form.stock || !form.category) return

    if (editId) {
      setProducts(products.map(p =>
        p.id === editId
          ? {
              ...p,
              ...form,
              price: Number(form.price),
              stock: Number(form.stock),
              discount: Number(form.discount) || 0,
            }
          : p
      ))
      setEditId(null)
    } else {
      setProducts([
        ...products,
        {
          id: products.length + 1,
          ...form,
          price: Number(form.price),
          stock: Number(form.stock),
          discount: Number(form.discount) || 0,
        }
      ])
    }
    setForm({
      name: "",
      brand: "",
      size: "",
      image: "",
      price: "",
      description:"",
      stock: "",
      category: "",
      discount: "",
    })
  }

  // Handle edit
  const handleEdit = (product) => {
    setEditId(product.id)
    setForm({
      name: product.name,
      description:product.description,
      brand: product.brand,
      size: product.size,
      image: product.image,
      price: product.price,
      stock: product.stock,
      category: product.category,
      discount: product.discount,
    })
  }

  // Handle delete
  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id))
    if (editId === id) {
      setEditId(null)
      setForm({
        name: "",
        description:"",
        brand: "",
        size: "",
        image: "",
        price: "",
        stock: "",
        category: "",
        discount: "",
      })
    }
  }

  return (
    <div className="w-full overflow-x-auto mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700">
        {editId ? "Edit Product" : "Add New Product"}
      </h2>
      <ProductForm
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onImageChange={handleImageChange}
        editId={editId}
        onCancel={() => {
          setEditId(null)
          setForm({
            name: "",
            description:"",
            brand: "",
            size: "",
            image: "",
            price: "",
            stock: "",
            category: "",
            discount: "",
          })
        }}
      />

      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Products List</h2>
      <div className="bg-white rounded-lg overflow-x-scroll   shadow p-6 max-md:p-2 ">
        <table className="w-full text-sm ">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 ">ID</th>
              <th className="px-4 py-2 ">Image</th>
              <th className="px-4 py-2 ">Name</th>
              <th className="px-4 py-2 ">Brand</th>
              <th className="px-4 py-2 ">Size</th>
              <th className="px-4 py-2 ">Price</th>
              <th className="px-4 py-2 ">Stock</th>
              <th className="px-4 py-2 ">Category</th>
              <th className="px-4 py-2 ">Discount</th>
              <th className="px-4 py-2 ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="px-4 py-2">{product.id}</td>
                <td className="px-4 py-2">
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  )}
                </td>
                <td className="px-4 text-center py-2">{product.name}</td>
                <td className="px-4 text-center py-2">{product.brand}</td>
                <td className="px-4 text-center py-2">{product.size}</td>
                <td className="px-4 text-center py-2">{product.price?.toLocaleString()} تومان</td>
                <td className="px-4 text-center py-2">{product.stock}</td>
                <td className="px-4 text-center py-2">{product.category}</td>
                <td className="px-4 text-center py-2">{product.discount ? `${product.discount}%` : "-"}</td>
                <td className=" py-2  gap-2">
                    <div className='flex items-center gap-2 justify-center   '>  <button
                    className="text-indigo-600 hover:text-indigo-900"
                    onClick={() => handleEdit(product)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(product.id)}
                  >
                    <FaTrash />
                  </button></div>
                
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan={10} className="text-center py-4 text-gray-400">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}