import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../../pages/home";
import Animators from "../../pages/animators";
import LivingStatues from "../../pages/living-statues";
import Mims from "../../pages/mims";
import PapperShow from "../../pages/papper-show";
import StiltWalkers from "../../pages/stilt-walkers";
import Table from "../../pages/table";

const MyRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/animators" component={Animators} />
      <Route exact path="/living-statues" component={LivingStatues} />
      <Route exact path="/mims" component={Mims} />
      <Route exact path="/papper-show" component={PapperShow} />
      <Route exact path="/stilt-walkers" component={StiltWalkers} />
      <Route exact path="/living-table" component={Table} />
    </Switch>
  );
};

export default MyRouter;
