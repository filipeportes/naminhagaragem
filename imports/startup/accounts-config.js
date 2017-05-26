import { Accounts } from 'meteor/accounts-base';

T9n.setLanguage("pt-BR");

Accounts.ui.config({
    requestPermissions: {
        facebook: ['user_likes', 'user_location']
    }
});
