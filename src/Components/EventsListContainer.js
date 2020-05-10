import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showAllEvents } from "../Actions/eventActions";
import Grid from "@material-ui/core/Grid";
import Layout from "./Layout";

const EventListContainer = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(showAllEvents());
  }, [dispatch]);

  const eventCard = (eventsObject) => {
    return (
      <Grid item xs={12} sm={12} md={4}>
        <Layout {...eventsObject} />
      </Grid>
    );
  };
  console.log("list", events);
  return (
    <div>
      <Grid container spacing={4}>
        {events.map((eventsObject) => eventCard(eventsObject))}
      </Grid>
      <br />
    </div>
  );
};

export default EventListContainer;
