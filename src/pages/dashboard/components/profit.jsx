import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ProfitsData as data } from "@/src/data/dashboard";

export const Profit = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart width={150} height={40} data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-foreground"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
