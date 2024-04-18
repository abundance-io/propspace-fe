import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Profit } from "./components/profit";
import { Spaces } from "./components/spaces";
import * as Icon from "lucide-react";
import profit from "../../assets/images/profit.svg";
import investment from "../../assets/images/investment.svg";

export const Dashboard = () => {
  return (
    <section className="bg-background text-foreground flex h-full w-full flex-col gap-5 px-10 py-6 overflow-y-scroll">
      <div className="flex flex-col items-start gap-2">
        <p className="text-muted-foreground text-base">
          Hi, here are your daily stats
        </p>
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Profit />
          </CardContent>
        </Card>
        <div className="col-span-4 md:col-span-3 grid grid-cols-2 gap-5">
          <Card>
            <CardHeader>
              <CardTitle>Total Investment</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-10">
              <div className="flex space-x-1">
                <p className="text-xl text-muted-foreground">₦</p>
                <p className="text-3xl">110k</p>
              </div>
              <div>
                <img src={investment} className="w-full" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Profit</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-10">
              <div className="flex space-x-1">
                <p className="text-xl text-muted-foreground">₦</p>
                <p className="text-3xl">49k</p>
              </div>
              <div>
                <img src={profit} className="w-full" />
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="col-span-3 lg:col-span-2">
          <CardHeader>
            <CardTitle>Spaces</CardTitle>
            <CardContent className="space-y-4 overflow-y-scroll p-0 pt-6">
              <Spaces />
            </CardContent>
          </CardHeader>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Payments</CardTitle>
            <CardDescription>A brief overview of recent investment payments from your spaces.</CardDescription>
          </CardHeader>
          <CardContent className="text-center flex flex-col items-center gap-3 justify-center w-full h-2/3">
            <Icon.Receipt className="text-muted-foreground w-[40px]" />
            <p className="w-[50%] text-muted-foreground">You've recieved no payments this month</p>
          </CardContent>
        </Card>
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Pending Actions</CardTitle>
            <CardDescription>A brief overview of actions in your spaces.</CardDescription>
          </CardHeader>
          <CardContent className="text-center flex flex-col items-center gap-3 justify-center w-full h-2/3">
            <Icon.AlertCircle className="text-muted-foreground w-[40px]" />
            <p className="w-[50%] text-muted-foreground">You've no current actions</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
