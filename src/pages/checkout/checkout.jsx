import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export const CheckOut = () => {
  let images = [
    "https://images.nigeriapropertycentre.com/properties/images/2093677/0661c0b0a06c4f-luxury-2-bedrooms-maisonette-apartment-for-sale-lekki-phase-1-lekki-lagos.jpg",
    "https://images.nigeriapropertycentre.com/properties/images/2179371/06602cfc81e30d-newly-built-two-bedrooms-for-sale-lekki-phase-1-lekki-lagos.jpg",
    "https://images.nigeriapropertycentre.com/properties/images/2179371/06602cfbe40fa5-newly-built-two-bedrooms-for-sale-lekki-phase-1-lekki-lagos.jpg",
    "https://images.nigeriapropertycentre.com/properties/images/2179371/06602cfc21af3d-newly-built-two-bedrooms-for-sale-lekki-phase-1-lekki-lagos.jpg",
  ];

  return (
    <section className="bg-background text-foreground flex h-full w-full flex-col gap-5 px-10 py-6 overflow-y-scroll">
      <div className="flex flex-col items-start gap-2 mb-3">
        <h1 className="text-3xl font-bold ">High Rise Aparment Building</h1>
        <p className="text-muted-foreground text-base">Freedom way Lekki</p>
        <div>
          {/* <div className="grid grid-cols-2 gap-2 cursor-pointer w-[60%]"> */}
          {/* <Carousel>
            <CarouselContent>
              <CarouselItem>
                <img
                  key={index}
                  src={image}
                  width={"400px"}
                  className="rounded-md"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel> */}
          {/* </div> */}
          <div>
            <div className="my-10 flex flex-col space-y-5">
              <p className="font-bold">Property Price</p>
              <p>20k per unit</p>
            </div>
            <p>
              This lovely luxury 2 Bedroom apartment in a High-rise building is
              the last available unit situated in an excellent serene location.
              This iconic development has a state of the art recreational center
              which comprises a fully equipped gym, pool and children's
              playground all within the highly secured estate.Also comes with
              with imported finishing, lift, 24hrs light, dedicated transformer
              and inverter, adequate parking space, easy accessibility to Lekki
              Phase 1 Price Content from Nigeria Property Centre Read more
            </p>

            <div className="my-10">
              <p className="font-bold">Property Value Points</p>
              <p>24 hour security</p>
              <p>24 hour power supply</p>
              <p>Easy Access to Lekki-Ekpe Road Network</p>
            </div>

            <div className="my-10 flex flex-col space-y-5">
              <p className="font-bold">Return Estimates</p>
              <p>30% returns per annum</p>
            </div>
          </div>

          <Input
            placeholder="Enter Number of Units"
            className="bg-prop-black ring-offset-prop-mustard focus:border-prop-mustard w-[300px]"
          />

          <Button variant="default" className="w-[300px]">
            Buy Units
          </Button>
        </div>
      </div>
    </section>
  );
};
