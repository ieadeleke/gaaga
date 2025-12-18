import Image from "next/image";
import GaageMain from "@/assets/images/gaaga-huge.svg";
import MaskImg from "@/assets/images/mask.png";

const HomeHero = () => {
  return (
    <header className="pt-40">
      <div>
        <Image
          src={GaageMain}
          alt="Gaaga stylish design"
          width={1000}
          height={1000}
          className="w-[550px] mx-auto h-full"
        />
        <div className="w-[50%] mx-auto">
          <div className="stepped-mas">
            {/* <Image
            src={MaskImg}
            alt="Gaaga stylish design"
            width={1000}
            height={1000}
            className="w-full mx-auto h-full"
          /> */}
            <div className="w-full h-[30rem]"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHero;
