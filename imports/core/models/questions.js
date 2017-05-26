import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const QuestionsSchema = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    text: {
        type: String,
        label: "Text",
        max: 5000
    },
    createdAt: {
        type: Date,
        label: "Created At",
        defaultValue: new Date()
    },
    userId: {
        label: "UserId",
        type: String
    },
    userName: {
        type: String
    }
});

class QuestionsCollection extends Mongo.Collection {

    fetchById(questionId) {
        return this.findOne({"_id": questionId});
    }

    findById(questionId) {
        return this.find({"_id": questionId});
    }

    findAll() {
        return this.find({}, {sort: {creationDate: 1}});
    }
}

export const Questions = new QuestionsCollection("questions");
Questions.attachSchema(QuestionsSchema);