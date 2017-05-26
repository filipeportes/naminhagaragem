import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Questions } from '/imports/core/models/questions.js';

import './questions.html';

Template.questions.onCreated(function () {
    Meteor.subscribe("questions");
});

Template.questions.helpers({
    questions () {
        return Questions.findAll();
    }
});