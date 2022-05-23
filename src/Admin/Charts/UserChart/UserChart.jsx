import React, { PureComponent, useState, useEffect } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { GetDashBoard, GetAgesRange } from "../../MockRegistrationAdmin";
import "./userchart.css";
/**
 * 
 * this function returns a chart that shows
 * pie chart that shows percentages for ages ranges for users in twitter clone
 * @returns 
 */

export default function UserChart() {
  // var agesrange = GetAgesRange();
  const [agesrange, setAgesRange] = useState(undefined);
  
  useEffect(() => {
    (async () => {
      const resp = await GetDashBoard();
      let tempagesrange = [...resp.data[8].users_Ages];
      tempagesrange.forEach((element, index) => {
        tempagesrange[index].value = element.persons;
        tempagesrange[index].name = element.age;
      });
      setAgesRange(tempagesrange);
    })();
  }, []);
  


  return (
    <div className="userchart">
      <ResponsiveContainer aspect={4 / 3}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={agesrange}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#264836"
            label
          />

        <Tooltip contentStyle={{backgroundColor:'#1DA1F2'}} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
