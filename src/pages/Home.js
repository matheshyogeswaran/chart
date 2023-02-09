import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import { UserData } from "../Data/Data";
import { useState } from "react";
import PieChart from "../components/PieChart";

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
    <div style={{ backgroundColor: "lightblue" }}>
      <div className="container">
        <h1 className="text-center mb-5">Charts</h1>
        <h2 className="text-center mb-5">Bar Chart</h2>

        <div className="col-md-12 mt-5">
          <BarChart chartData={userData} />
        </div>
        <div className="row">
          <div className="col-md-8 mt-5">
            <h2 className="text-center mb-5">Line Chart</h2>{" "}
            <LineChart chartData={userData} />
          </div>
          <div className="col-md-4 mt-5">
            <h2 className="text-center mb-5">Pie Chart</h2>

            <PieChart chartData={userData} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
