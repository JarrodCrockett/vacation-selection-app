import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Links } from "../collections/links";

const SampleDb = () => {
  const links = useTracker(() => {
    return Links.find().fetch();
  });

  return (
    <div>
      <h2>Learn Meteor!</h2>
      <ul>
        {links.map((link) => (
          <li key={link._id}>
            <a href={link.url} target="_blank">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SampleDb;
