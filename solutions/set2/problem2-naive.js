var recentListLength = 5;

function MostRecentList() {
    this.recent = [];
    this.list = [];
}
MostRecentList.prototype.add = function (str) {
    updateRecent(this, str, this.list.length);
    this.list.push(str);
};
// return boolean
// removes first instance of str
MostRecentList.prototype.remove = function (str) {
    this.recent = this.recent.filter((recentEntry) => {
        return recentEntry.id !== index;
    });
    this.list.splice(index, 1);
};
// removeAll(str);
MostRecentList.prototype.get = function (index) {
    updateRecent(this, this.list[index], index);
    return this.list[index];
};
MostRecentList.prototype.getRecent = function () {
    return this.recent;
};
MostRecentList.prototype.printState = function () {
    console.log(`Recent: ${JSON.stringify(this.recent)}`);
    console.log(`Data: ${JSON.stringify(this.list)}`);
};

function updateRecent(recentList, str, listIndex) {
    if (recentList.recent.length === recentListLength) {
        recentList.recent.pop();
    }
    recentList.recent.unshift({
        data: str,
        id: listIndex
    });
}

var recentList = new MostRecentList();
recentList.add("hello");
recentList.add("world");
recentList.add("blah");
recentList.printState();
recentList.add("hello");
recentList.remove(2);
recentList.printState();

module.exports = MostRecentList;