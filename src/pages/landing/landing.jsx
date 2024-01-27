import heroImg from "../../assets/images/hero.svg";
import downIcon from "../../assets/icons/down.svg";
import { Button } from "../../components/global/button";
import { TextHighlighter } from "../../components/global/textHighlighter";
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

      <section className="" id="about">
        <div className="flex flex-col items-center space-y-5">
          <span className="bg-mustard rounded-[12px] px-5 py-3 text-sm font-bold text-black">
            what we do
          </span>
          <h2 className="text-center text-6xl font-medium">
            Revolutionizing Real Estate <br /> Investment for Africans
          </h2>
        </div>
      </section>
    </>
  );
};
