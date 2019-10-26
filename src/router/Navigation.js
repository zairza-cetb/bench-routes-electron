import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import Monitoring from "../components/monitoring/Monitoring";
import Ping from "../components/benchmarks/Ping";
import FloodPing from "../components/benchmarks/FloodPing";
import Jitter from "../components/benchmarks/Jitter";
import Settings from "../components/settings/Settings";

const Navigator = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/monitoring" component={Monitoring} />
            <Route path="/ping" component={Ping} />
            <Route path="/floodping" component={FloodPing} />
            <Route path="/jitter" component={Jitter} />
            <Route path="/settings" component={Settings} />
        </Switch>
    </Router>
);

export default Navigator;
