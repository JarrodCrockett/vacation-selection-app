import { Mongo } from "meteor/mongo";

export const Links = new Mongo.Collection("links");

if (Meteor.isServer) {
  Meteor.publish("links", function publishLinks() {
    // auth stuff
    return Links.find();
  });
} else {
  Meteor.subscribe("links");
}

Links.deny({
  insert() {
    return true;
  },
  update() {
    return true;
  },
  remove() {
    return true;
  },
});

// Accessor methods, defined on both client and server so that stubs
// will be generated.
Meteor.methods({
  insertLink: function insertLinkMethod(doc) {
    //Auth.failIfNotLoggedIn();
    // doc.createdBy = Meteor.userId();
    Links.insert(doc);
  },
  updateLink: function updateLinkMethod(id, doc) {
    //Auth.failIfNotLoggedIn();
    check(id, String);
    Links.update(id, { $set: doc });
  },
  deleteLink: function deleteLinkMethod(id) {
    //Auth.failIfNotLoggedIn();
    check(id, String);
    Links.remove(id);
  },
});

export default Links;
