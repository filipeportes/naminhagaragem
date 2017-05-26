import { Meteor } from 'meteor/meteor';

import '/imports/api/publications/questions';
import '/imports/api/methods/questions';
import '/imports/core/models/questions';

import  '/imports/startup/facebook';

Meteor.startup(() => {
  // code to run on server at startup
});
