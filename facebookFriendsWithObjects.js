/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: "max",
    friends: 3,
    messages: ["Hi Their!", "Greetings!", "Good Night!"],
    postMessage: function(message) {
        return facebookProfile.messages.push(message);
    },
    deleteMessage: function(index) {
        return facebookProfile.messages.splice(index,1);
    },
    addFriend: function() {
        return facebookProfile.friends++;
    },
    removeFriend: function() {
        return facebookProfile.friends--;
    }
};
