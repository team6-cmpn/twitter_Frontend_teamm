import React, { PureComponent, useState, useEffect } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { GetDashBoard, GetAgesRange } from "../../MockRegistrationAdmin";
import "./userchart.css";

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
            fill="#10BF"
            label
          />

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
