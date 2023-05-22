import { Links } from "../imports/collections/links.js";

function insertLink({ title, url }) {
  Meteor.call("insertLink", { title, url, createdAt: new Date() });
}

export default async function migrate() {
  // If the Links collection is empty, add some data.
  if ((await Links.find().countAsync()) === 0) {
    insertLink({
      title: "Do the Tutorial",
      url: "https://www.meteor.com/tutorials/react/creating-an-app",
    });

    insertLink({
      title: "Follow the Guide",
      url: "https://guide.meteor.com",
    });

    insertLink({
      title: "Read the Docs",
      url: "https://docs.meteor.com",
    });

    insertLink({
      title: "Discussions",
      url: "https://forums.meteor.com",
    });
  }
}
