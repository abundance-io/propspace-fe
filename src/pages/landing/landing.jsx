import heroImg from "../../assets/images/hero.svg";
import { Button } from "../../components/global/button";
import { TextHighlighter } from "../../components/global/textHighlighter";
export const Landing = () => {
  return (
    <>
      <section className="font-body flex h-screen w-full flex-col items-center bg-black pt-[64px] text-white lg:flex-row">
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
        <img src={heroImg} className="h-full" />
      </section>
    </>
  );
};
