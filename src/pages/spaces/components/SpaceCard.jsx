import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import image from "../../../assets/images/house.jpg";
import * as Icon from "lucide-react";

export const SpaceCard = (props) => {
  return (
    <div className="text-white w-90%">
      <Card className="cursor-pointer">
        <CardHeader className="py-5">
          <div className="flex space-x-2">
            <Icon.HomeIcon />
            <p className=" font-bold">{props.data.num_units} units available</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* <img
              src={props.data.imgurl}
              width={"200px"}
              height={"250px"}
              className="rounded-md"
            /> */}

          <div
            style={{
              backgroundImage: `url(${props.data.imgurl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "grayscale(100%)",
            }}

            className="h-[200px] w-full rounded-md"
          >
          </div>
          <div className="flex flex-col space-y-1 mt-1">
            <p className="w-full mx-1 font-bold">{props.data.name}</p>
            <p className="w-full mx-1 text-xs font-italic flex items-center gap-2">
              <Icon.MapPin className="w-[18px]" /> {props.data.location}
            </p>

            <div className="flex space-x-1">
              <p className="text-base">₦</p>
              <p className="">{props.data.price_per_unit} / unit</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
