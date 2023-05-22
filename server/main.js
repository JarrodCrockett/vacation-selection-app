import { Meteor } from "meteor/meteor";
import migrate from "./migrations";

Meteor.startup(async () => {
  migrate();
});
