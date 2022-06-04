const Member = function (name) {
  this.name = name;
  this.chatroom = null;
};

Member.prototype = {
  send: function (message, toMember) {
    this.chatroom.send(message, this, toMember);
  },
  receive: function (message, fromMember) {
    console.log(`${fromMember.name} to ${this.name}: ${message}`);
  },
};

const ChatRoom = function () {
  this.members = {};
};

ChatRoom.prototype = {
  addMember: function (member) {
    this.members[member.name] = member;
    member.chatroom = this;
  },
  send: function (message, fromMember, toMember) {
    toMember.receive(message, fromMember);
  },
};

const chatroom = new ChatRoom();

const bob = new Member("Bob");
const john = new Member("John");
const jane = new Member("Jane");
chatroom.addMember(bob);
chatroom.addMember(john);
chatroom.addMember(jane);
bob.send("Hi John", john);
