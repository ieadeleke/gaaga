import ProductionsHero from "@/features/productions/components/Hero";
import FeaturedProduction from "@/features/productions/components/FeaturedProduction";
import ProductionGrid from "@/features/productions/components/ProductionGrid";
import ProductionCTA from "@/features/productions/components/ProductionCTA";

const ProductionsPage = () => {
  return (
    <div className="bg-[#111111]">
      <ProductionsHero />
      <FeaturedProduction />
      <ProductionGrid />
      <ProductionCTA />
    </div>
  );
};

export default ProductionsPage;
