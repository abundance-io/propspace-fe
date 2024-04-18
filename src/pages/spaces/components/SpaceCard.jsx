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
        <CardContent>
          <div className="">
            <img
              src={props.data.imgurl}
              width={"200px"}
              height={"250px"}
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-1 mt-1">
            <p className="w-full  mx-1 font-bold">{props.data.name}</p>
            <p className="w-full mx-1 text-xs font-bold">
              {props.data.location}
            </p>

            <div className="flex space-x-1">
              <p className="text-xs text-muted-foreground">₦</p>
              <p className="">{props.data.price_per_unit} per unit</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
