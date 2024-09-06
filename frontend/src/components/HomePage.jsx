import React from 'react';
import Header from './Header';
import HeroBanner from './HeroBanner';
import ProductSection from './ProductSection';
import FeatureSection from './FeatureSection';
import NewsletterSignup from './NewsletterSignup';
import Footer from './Footer';

const HomePage = () => {
  const newProducts = [
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9dc8f32790e581c1f2e4a6d6242895fe0d7712e32bf80180e26436ae8012897f?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba", status: "Sale", name: "Product Name", salePrice: "99", originalPrice: "99", comparePrice: "99" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9dc8f32790e581c1f2e4a6d6242895fe0d7712e32bf80180e26436ae8012897f?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba", status: "Sale", name: "Product Name", salePrice: "99", originalPrice: "99", comparePrice: "99" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9dc8f32790e581c1f2e4a6d6242895fe0d7712e32bf80180e26436ae8012897f?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba", status: "Sale", name: "Product Name", salePrice: "99", originalPrice: "99", comparePrice: "99" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9dc8f32790e581c1f2e4a6d6242895fe0d7712e32bf80180e26436ae8012897f?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba", status: "Sale", name: "Product Name", salePrice: "99", originalPrice: "99", comparePrice: "99" }
  ];

  const trendingProducts = [
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9dc8f32790e581c1f2e4a6d6242895fe0d7712e32bf80180e26436ae8012897f?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba", status: "Sale", name: "Product Name", salePrice: "99", originalPrice: "99", comparePrice: "99" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9dc8f32790e581c1f2e4a6d6242895fe0d7712e32bf80180e26436ae8012897f?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba", status: "Sale", name: "Product Name", salePrice: "99", originalPrice: "99", comparePrice: "99" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9dc8f32790e581c1f2e4a6d6242895fe0d7712e32bf80180e26436ae8012897f?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba", status: "Sale", name: "Product Name", salePrice: "99", originalPrice: "99", comparePrice: "99" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9dc8f32790e581c1f2e4a6d6242895fe0d7712e32bf80180e26436ae8012897f?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba", status: "Sale", name: "Product Name", salePrice: "99", originalPrice: "99", comparePrice: "99" }
  ];

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Header />
      <main>
        <HeroBanner />
        <ProductSection
          title="New in: Daily selection from the worlds best brands."
          products={newProducts}
        />
        <FeatureSection
          title="Streetwear for anywhere"
          description="The world's greatest designers - Now on sale! T&C apply"
          buttonText="Shop now"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/27ea2a498441aad79bc1f49dd6372beb3fa2823073c9c23871be7b211087df66?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba"
          imageAlt="Streetwear collection"
        />
        <FeatureSection
          title="Sale Update: Now upto 60% off on select items"
          description="The world's greatest designers - Now on sale! T&C apply"
          buttonText="Shop now"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/257009a17ef1733b5ee3c518fb6f9771c820cd7d675cb52a6fc78d6e9de0bd45?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba"
          imageAlt="Sale items"
          reverse={true}
        />
        <ProductSection
          title="Trending now"
          products={trendingProducts}
        />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;