import { Meteor } from 'meteor/meteor';
import { Questions, QuestionsSchema } from '/imports/core/models/questions.js';

Meteor.methods({
    newQuestion(question) {
        QuestionsSchema.clean(question);

        question.userId = this.userId;
        question.userName = this.userId;

        check(question, QuestionsSchema);

        // Make sure the user is logged in before inserting a task
        if (!this.userId) {
            throw new Meteor.Error(403, 'not-authorized');
        }

        Questions.insert(question);
    }
});