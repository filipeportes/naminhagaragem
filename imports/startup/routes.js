import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplates } from 'meteor/useraccounts:core';

import '/imports/ui/home.html';
import '/imports/ui/question/questions.html';
import '/imports/ui/question/question.html';

AccountsTemplates.configure({
    defaultLayout: 'layout',
    defaultContentRegion: 'main'
});

AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');

FlowRouter.route('/logout', {
    action: () => {
        Meteor.logout();
        FlowRouter.go('/');
    }
});

FlowRouter.route('/', {
    action: () => {
        BlazeLayout.render("layout", {main: "home"});
    }
});

let questionRoutes = FlowRouter.group({
    prefix: '/questions',
    name: 'question'
});

questionRoutes.route('/', {
    action: () => {
        BlazeLayout.render("layout", {main: "home"});
    }
});

questionRoutes.route('/ask', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: () => {
        BlazeLayout.render("layout", {main: "ask"});
    }
});

questionRoutes.route('/id/:questionId', {
    action: function(params) {
        BlazeLayout.render("layout", {main: "question"});
    }
});
