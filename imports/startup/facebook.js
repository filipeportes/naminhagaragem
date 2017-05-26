import {ServiceConfiguration} from "meteor/service-configuration";

ServiceConfiguration.configurations.upsert({service: "facebook"},
    {
        $set: {
            appId: Meteor.settings.facebook.appId,
            loginStyle: "popup",
            secret: Meteor.settings.facebook.secret
        }
    }
);