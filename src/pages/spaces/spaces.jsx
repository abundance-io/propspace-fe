import { SpaceCard } from "./components/SpaceCard";

const spaces = [
  {
    name: "High Rise Apartment Builiding Lekki Freedom Way",
    num_units: 80,
  },

  {
    name: "High Rise Apartment Builiding Lekki Freedom Way",
    num_units: 80,
  },

  {
    name: "High Rise Apartment Builiding Lekki Freedom Way",
    num_units: 80,
  },
  {
    name: "High Rise Apartment Builiding Lekki Freedom Way",
    num_units: 80,
  },
  {
    name: "High Rise Apartment Builiding Lekki Freedom Way",
    num_units: 80,
  },
  {
    name: "High Rise Apartment Builiding Lekki Freedom Way",
    num_units: 80,
  },
  {
    name: "High Rise Apartment Builiding Lekki Freedom Way",
    num_units: 80,
  },
  {
    name: "High Rise Apartment Builiding Lekki Freedom Way",
    num_units: 80,
  },
  {
    name: "High Rise Apartment Builiding Lekki Freedom Way",
    num_units: 80,
  },
  {
    name: "High Rise Apartment Builiding Lekki Freedom Way",
    num_units: 80,
  },
  {
    name: "High Rise Apartment Builiding Lekki Freedom Way",
    num_units: 80,
  },
  {
    name: "High Rise Apartment Builiding Lekki Freedom Way",
    num_units: 80,
  },

  //add 20 more spaces here
];

export const Spaces = () => {
  return (
    <section className="overflow-y-scroll text-foreground m-5 w-full">
      <div className="flex flex-col items-start gap-2 mb-3">
        <h1 className="text-3xl font-bold">Spaces</h1>
        <p className="text-muted-foreground text-base">Browse spaces</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 w-full gap-5">
        {spaces.map((space, index) => {
          return <SpaceCard key={index} />;
        })}
      </div>
    </section>
  );
};
