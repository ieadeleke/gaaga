import ContactUsPage from "@/components/Contact";
import { ScaleIn } from "@/components/Motion";

const ProductionCTA = () => {
  return (
    <ScaleIn className="py-14 md:py-28">
      <ContactUsPage hidePattern={true} />
    </ScaleIn>
  );
};

export default ProductionCTA;
