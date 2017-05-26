import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './ask.html';

Template.ask.onRendered(function () {
    tinymce.init({
        selector:'textarea',
        height: 250,
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table contextmenu paste imagetools"
        ],
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify " +
        "| bullist numlist outdent indent | link image",
    });
});

Template.ask.events({
    'submit .js-ask-form'(event) {
        event.preventDefault();

        console.log("salvando");

        const target = event.target;
        let question = {
            title:target.title.value,
            text:target.text.value
        }

        Meteor.call("newQuestion", question);
        FlowRouter.go("/questions");
    },
});