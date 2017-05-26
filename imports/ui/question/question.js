import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Questions } from '/imports/core/models/questions.js';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './question.html';

let questionId;

Template.question.onCreated(function () {
    questionId = FlowRouter.getParam("questionId");
    Meteor.subscribe("question", questionId);
});

Template.question.helpers({
    question () {
        return Questions.fetchById(questionId);
    }
});