import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import '/imports/ui/home.html';
import '/imports/ui/question/questions.js';

Template.registerHelper('and',function(a,b){
    return a && b;
});
Template.registerHelper('or',function(a,b){
    return a || b;
});
Template.registerHelper('not',function(a){
    return !a;
});