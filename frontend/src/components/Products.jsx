import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts } from '../../redux/Product/productSlice';

const productsData = [
  {
    id: 1,
    image: '/hood.jpg',
    title: 'Milk Hoodie',
    price: '€122.50',
    color: 'white',
    size: 'large',
  },
  {
    id: 2,
    image: '/hood.jpg',
    title: 'White Hoodie',
    price: '€49.50',
  },
  // Add more products as needed
];

const categories = ['Hoodies', 'Jackets', 'Shirts', 'Pants'];

function Products() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <div className='bg-gray-100 min-h-screen p-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex justify-between items-center mb-8'>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className='p-2 rounded border'>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {allProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.name}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Products;
