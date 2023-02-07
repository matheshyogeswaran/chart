import BarChart from "../components/BarChart";
import { UserData } from "../Data/Data";
import { useState } from "react";

const Home = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#2a71d0",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div>
      <h1>Charts</h1>
      <div style={{ width: 600 }}>
        <BarChart chartData={userData} />
      </div>
    </div>
  );
};
export default Home;
