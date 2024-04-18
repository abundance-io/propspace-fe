import { SpaceCard } from "./components/SpaceCardPersonal";

const spaces = [
  {
    name: "High Rise Apartment Building ",
    location: "Lekki Freedom Way",
    num_units: 800,
    price_per_unit: "15k",
    imgurl:
      "https://images.nigeriapropertycentre.com/properties/images/820700/05ff3e52ef3781-luxury-2-bedroom-flats-in-high-rise-building-block-of-flats-for-sale-lekki-phase-1-lekki-lagos.jpeg",
  },
  {
    name: "High Rise Apartment Building",
    num_units: 179,
    location: "Lekki Freedom Way",
    price_per_unit: "10k",
    imgurl:
      "https://cdn.punchng.com/wp-content/uploads/2022/02/27232405/housing-estate-Octo5-Holdings.jpg ",
  },
  {
    name: "High Rise Apartment Building",
    num_units: 11,
    location: "Lekki Freedom Way",
    price_per_unit: "8k",
    imgurl:
      "https://i.pinimg.com/736x/aa/05/9c/aa059c230652d65ddb853a87d13a13da.jpg",
  },

  {
    name: "High Rise Apartment Building",
    num_units: 11,
    location: "Lekki Freedom Way",
    price_per_unit: "8k",
    imgurl:
      "https://i.pinimg.com/736x/aa/05/9c/aa059c230652d65ddb853a87d13a13da.jpg",
  },
];

export const SpacesPersonal = () => {
  return (
    <section className="overflow-y-scroll text-foreground m-5 w-full">
      <div className="flex flex-col items-start gap-2 mb-3">
        <h1 className="text-3xl font-bold">Your Spaces</h1>
        <p className="text-muted-foreground text-base">Browse your spaces</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 w-full gap-5">
        {spaces.map((space, index) => {
          return <SpaceCard key={index} data={space} />;
        })}
      </div>
    </section>
  );
};
