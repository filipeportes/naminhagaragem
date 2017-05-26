import { Meteor } from 'meteor/meteor';
import { Questions } from '/imports/core/models/questions.js';

Meteor.publish("questions", () => {
    return Questions.findAll();
})
Meteor.publish("question", (questionId) => {
    return Questions.findById(questionId);
})