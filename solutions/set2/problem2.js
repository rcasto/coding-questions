var linkedListNode = require('./linkedlist');

function MostRecentList() {
    this.recent = new linkedListNode();
    this.list = {};
    this.counter = 0;
}
// Need a doubly linked list with references to both the head and the tail
MostRecentList.prototype.add = function (str) {
    var recentNode;
    if (this.recent.data) {
        recentNode = 
    }
    this.list[this.counter] = {

    };
};
MostRecentList.prototype.remove = function (index) {
    if (!this.list[index]) {
        return false;
    }

};
MostRecentList.prototype.get = function (index) {
    return this.list[index];
};
MostRecentList.prototype.getRecent = function () {

};
MostRecentList.prototype.logState = function () {

};
MostRecentList.prototype.toString = function () {

};

modules.exports = MostRecentList;