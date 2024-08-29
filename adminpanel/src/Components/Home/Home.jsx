import React from "react";
import "./home.css";
import FeatureData from "../Featured/Featureddata";
import Chart from "../Charts/Chart";
import { ChartData } from "../Charts/chartData";
import WidgetSmall from "../Widgets/WidgetSmall";
import WidgetLarge from "../Widgets/WidgetLarge";

function Home() {
  return (
    <div className="home">
      <FeatureData />
      <Chart
        data={ChartData}
        title="User Analytics"
        grid
        datakey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}

export default Home;
