import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { GetAgesRanges } from "../../MockRegistrationAdmin";
import "./userchart.css";




export default function UserChart() {
  var agesrange=GetAgesRanges();

  return (
    <div className="userchart">
      <ResponsiveContainer aspect={4/3}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={agesrange}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#10BFCC"
            label
          />
          
          <Tooltip/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
