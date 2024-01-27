import heroImg from "../../assets/images/hero.svg";
import houseImg from "../../assets/images/house.jpg";
import downIcon from "../../assets/icons/down.svg";
import grid from "../../assets/images/grid.png";
import { Button } from "../../components/global/button";
import { TextHighlighter } from "../../components/global/textHighlighter";
import { FeaturesData } from "../../data/feature";

export const Landing = () => {
  return (
    <>
      <section
        id="home"
        className="font-body flex h-screen w-full flex-col items-center pt-[64px] lg:flex-row"
      >
        <div className="space-y-10 px-24">
          <h1 className="text-9xl font-medium">
            Secure <br /> Lifelong <br /> Earnings
          </h1>
          <p className="w-[70%]">
            A groundbreaking Real Estate Investment Platform built on the
            <TextHighlighter> Internet Computer Protocol (ICP)</TextHighlighter>
            , offering <TextHighlighter>revolutionary </TextHighlighter>
            opportunities for investors in the dynamic world of real estate.
          </p>

          <div className="flex items-center gap-6">
            <Button text="Get Started" />
            <a href="#features" className="hover:underline">
              Our Features ↘
            </a>
          </div>
        </div>
        <img src={heroImg} className="h-full animate-pulse" />
      </section>

      <a
        className="item-center flex w-full animate-bounce justify-center"
        href="#about"
      >
        <img src={downIcon} />
      </a>

      <section className="flex flex-col gap-10 p-20" id="about">
        <div className="flex flex-col items-center space-y-5">
          <span className="bg-mustard rounded-[12px] px-5 py-3 text-sm font-bold text-black">
            what we do
          </span>
          <h2 className="text-center text-6xl font-medium">
            Revolutionizing Real Estate <br /> Investment for Africans
          </h2>
        </div>
        <div className="flex flex-col items-center gap-10 lg:mt-[100px] lg:flex-row">
          <div
            style={{
              backgroundImage: `url(${houseImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(100%)",
            }}
            className="h-[200px] w-full rounded-[40px] lg:h-[500px] lg:w-1/2"
          ></div>
          <p className="text-xl lg:w-1/2">
            <span className="text-mustard text-6xl">*</span>
            Discover the
            <TextHighlighter>
              future of real estate on Propspace
            </TextHighlighter>
            , where blockchain turns properties into tradable NFTs. Co-own
            properties, share profits, and participate in transparent governance
            through our ICP blockchain DAO.
            <span className="flex flex-col gap-4 pt-[100px] lg:flex-row lg:items-center">
              <p className="lg:w-3/5">
                Join us in reshaping real estate investment for a more inclusive
                and prosperous future.
              </p>
              <Button text="Get Started" />
            </span>
          </p>
        </div>
      </section>

      <section
        className="mt-[200px] h-fit w-full space-y-10 px-20 pt-[0px]"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="place-self-center text-center text-7xl font-medium">
          The Power <br /> of Propspace
        </h2>
        <div className="grid grid-cols-2 gap-10">
          {FeaturesData.map((feature) => (
            <div
              className={`${feature.primary ? "bg-mustard" : "bg-white"} flex items-center gap-10 rounded-[25px] p-10 text-black`}
              key={feature.id}
            >
              <span className="h-fit w-fit rounded-full bg-black p-4 text-4xl font-bold text-white">
                {feature.id}
              </span>
              <div className="space-y-2">
                <h2 className="text-4xl font-bold">{feature.title}</h2>
                <p className="pr-12">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
