const axios = require('axios');

const products = [
  {
    brand_id: '60d5ec4af10a5a3c3a26a2e5',
    name: 'Stylish Jacket',
    description: 'A trendy jacket for all seasons',
    price: 99.99,
    color: 'Black',
    image_url: 'https://example.com/images/stylish-jacket.jpg',
    size: [
      { size: 'S', quantity: 10 },
      { size: 'M', quantity: 15 },
      { size: 'L', quantity: 5 },
    ],
  },
  {
    brand_id: '60d5ec4af10a5a3c3a26a2e5',
    name: 'Elegant Coat',
    description: 'An elegant coat perfect for winter',
    price: 149.99,
    color: 'Gray',
    image_url: 'https://example.com/images/elegant-coat.jpg',
    size: [
      { size: 'S', quantity: 8 },
      { size: 'M', quantity: 10 },
      { size: 'L', quantity: 6 },
    ],
  },
  {
    brand_id: '60d5ec4af10a5a3c3a26a2e5',
    name: 'Casual Hoodie',
    description: 'Comfortable hoodie for daily wear',
    price: 59.99,
    color: 'Blue',
    image_url: 'https://example.com/images/casual-hoodie.jpg',
    size: [
      { size: 'S', quantity: 20 },
      { size: 'M', quantity: 25 },
      { size: 'L', quantity: 15 },
    ],
  },
  {
    brand_id: '60d5ec4af10a5a3c3a26a2e5',
    name: 'Leather Jacket',
    description: 'Stylish leather jacket for a bold look',
    price: 199.99,
    color: 'Brown',
    image_url: 'https://example.com/images/leather-jacket.jpg',
    size: [
      { size: 'S', quantity: 5 },
      { size: 'M', quantity: 10 },
      { size: 'L', quantity: 4 },
    ],
  },
  {
    brand_id: '60d5ec4af10a5a3c3a26a2e5',
    name: 'Classic Blazer',
    description: 'A classic blazer for formal occasions',
    price: 129.99,
    color: 'Navy',
    image_url: 'https://example.com/images/classic-blazer.jpg',
    size: [
      { size: 'S', quantity: 7 },
      { size: 'M', quantity: 12 },
      { size: 'L', quantity: 5 },
    ],
  },
  {
    brand_id: '60d5ec4af10a5a3c3a26a2e5',
    name: 'Denim Jacket',
    description: 'Trendy denim jacket for casual wear',
    price: 89.99,
    color: 'Denim Blue',
    image_url: 'https://example.com/images/denim-jacket.jpg',
    size: [
      { size: 'S', quantity: 10 },
      { size: 'M', quantity: 15 },
      { size: 'L', quantity: 7 },
    ],
  },
  {
    brand_id: '60d5ec4af10a5a3c3a26a2e5',
    name: 'Puffer Jacket',
    description: 'Warm puffer jacket for cold weather',
    price: 119.99,
    color: 'Red',
    image_url: 'https://example.com/images/puffer-jacket.jpg',
    size: [
      { size: 'S', quantity: 12 },
      { size: 'M', quantity: 18 },
      { size: 'L', quantity: 6 },
    ],
  },
  {
    brand_id: '60d5ec4af10a5a3c3a26a2e5',
    name: 'Windbreaker',
    description: 'Lightweight windbreaker for outdoor activities',
    price: 79.99,
    color: 'Green',
    image_url: 'https://example.com/images/windbreaker.jpg',
    size: [
      { size: 'S', quantity: 14 },
      { size: 'M', quantity: 20 },
      { size: 'L', quantity: 8 },
    ],
  },
  {
    brand_id: '60d5ec4af10a5a3c3a26a2e5',
    name: 'Sport Jacket',
    description: 'Sporty jacket for active lifestyle',
    price: 109.99,
    color: 'White',
    image_url: 'https://example.com/images/sport-jacket.jpg',
    size: [
      { size: 'S', quantity: 11 },
      { size: 'M', quantity: 16 },
      { size: 'L', quantity: 9 },
    ],
  },
  {
    brand_id: '60d5ec4af10a5a3c3a26a2e5',
    name: 'Utility Jacket',
    description: 'Functional utility jacket for adventure',
    price: 139.99,
    color: 'Olive',
    image_url: 'https://example.com/images/utility-jacket.jpg',
    size: [
      { size: 'S', quantity: 9 },
      { size: 'M', quantity: 13 },
      { size: 'L', quantity: 6 },
    ],
  },
];

async function addProducts() {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/products/addProduct',
      products,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error(
      'Error adding products:',
      error.response ? error.response.data : error.message
    );
  }
}

addProducts();
