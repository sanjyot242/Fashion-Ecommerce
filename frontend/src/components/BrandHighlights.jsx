const brands = [
  { id: 1, name: 'Brand 1', image: '/images/prada.svg' },
  { id: 2, name: 'Brand 2', image: '/images/zara-logo-11.svg' },
  { id: 3, name: 'Brand 3', image: '/images/ck.svg' },
];

function BrandHighlights() {
  return (
    <section className='py-12 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>Top Brands</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {brands.map((brand) => (
            <div key={brand.id} className=' p-4 rounded shadow bg-black'>
              <img
                src={brand.image}
                alt={brand.name}
                className='w-full h-full object-contain rounded object-center'
              />
              <h3 className='mt-4 text-xl font-bold text-center'>
                {brand.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandHighlights;
