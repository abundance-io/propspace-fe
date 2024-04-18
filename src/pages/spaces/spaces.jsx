import { SpaceCard } from "./components/SpaceCard";

const spaces = [
  {
    name: "High Rise Apartment Building Lekki Freedom Way",
    num_units: 800,
    price_per_unit: "15k",
    imgurl:
      "https://images.nigeriapropertycentre.com/properties/images/820700/05ff3e52ef3781-luxury-2-bedroom-flats-in-high-rise-building-block-of-flats-for-sale-lekki-phase-1-lekki-lagos.jpeg",
  },
  {
    name: "High Rise Apartment Building Lekki Freedom Way",
    num_units: 179,
    price_per_unit: "10k",
    imgurl:
      "https://cdn.punchng.com/wp-content/uploads/2022/02/27232405/housing-estate-Octo5-Holdings.jpg ",
  },
  {
    name: "High Rise Apartment Building Lekki Freedom Way",
    num_units: 11,
    price_per_unit: "8k",
    imgurl:
      "https://i.pinimg.com/736x/aa/05/9c/aa059c230652d65ddb853a87d13a13da.jpg",
  },
  {
    name: "High Rise Apartment Building Lekki Freedom Way",
    num_units: 10,
    price_per_unit: "14k",
    imgurl:
      "https://images.ctfassets.net/abyiu1tn7a0f/3vTBvQw6GEDHsymU7JL0HB/db64167a9e8e62d3c3577632a99eb394/fully-detached-apartments-for-sale-vgc.jpg",
  },
  {
    name: "High Rise Apartment Building Lekki Freedom Way",
    num_units: 1,
    price_per_unit: "12k",
    imgurl:
      "https://cdn.punchng.com/wp-content/uploads/2016/08/15111830/Estate.jpg",
  },
  {
    name: "High Rise Apartment Building Lekki Freedom Way",
    num_units: 8,
    price_per_unit: "11k",
    imgurl:
      "https://landsofnigeria.com/wp-content/uploads/2021/02/livingold7-estate.jpg",
  },
  {
    name: "High Rise Apartment Building Lekki Freedom Way",
    num_units: 100,
    price_per_unit: "13k",
    imgurl:
      "https://ikejarecord.com/wp-content/uploads/2023/12/Photo-Template-743-%C3%97-495-px-24.jpg",
  },
  {
    name: "High Rise Apartment Building Lekki Freedom Way",
    num_units: 10,
    price_per_unit: "9k",
    imgurl:
      "https://amenestate.com/wp-content/uploads/2021/09/1_RaZjSu5ut0m9o2DgVDZTAw.jpeg",
  },
  {
    name: "High Rise Apartment Building Lekki Freedom Way",
    num_units: 15,
    price_per_unit: "16k",
    imgurl:
      "https://cdn.vanguardngr.com/wp-content/uploads/2018/08/housing-089.jpg",
  },
  {
    name: "High Rise Apartment Building Lekki Freedom Way",
    num_units: 2,
    price_per_unit: "17k",
    imgurl:
      "https://amenestate.com/wp-content/uploads/2021/09/1_RaZjSu5ut0m9o2DgVDZTAw.jpeg",
  },
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
          return <SpaceCard key={index} data={space} />;
        })}
      </div>
    </section>
  );
};
