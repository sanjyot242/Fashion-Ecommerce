import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

import { fetchProductSummaries, queryClient } from '../utils/http';
import { useQuery } from '@tanstack/react-query';

const categories = ['Hoodies', 'Jackets', 'Shirts', 'Pants'];

function Products() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['productSummaries'],
    queryFn: fetchProductSummaries,
    staleTime: 600000,
  });

  if (data) {
    console.log(data);
  }

  if (isError) {
    console.log('THere is an error');
  }

  // const dispatch = useDispatch();
  // const allProducts = useSelector((state) => state.products.summaries);

  // useEffect(() => {
  //   dispatch(getAllProductsSummaries());
  // }, [dispatch]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  if (isLoading) {
    //add skelton in future
    return <div>Loading</div>;
  }

  if (isError) {
    <div>There is a an Error</div>;
  }

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
            {data.map((product) => (
              <ProductCard key={product._id} item={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Products;
