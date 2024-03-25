import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Profit } from "./components/profit";
import { Spaces } from "./components/spaces";

export const Dashboard = () => {
  return (
    <section className="bg-background text-foreground flex h-full w-full flex-col gap-5 px-10 py-6">
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
        <div className="col-span-3 grid gap-5">
          <Card>
            <CardHeader>
              <CardTitle>Total Income</CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Income</CardTitle>
            </CardHeader>
            <CardContent></CardContent>
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
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Pending Actions</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
    </section>
  );
};
