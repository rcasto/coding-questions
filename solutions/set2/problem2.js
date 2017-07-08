function MostRecentList(maxRecent) {
    this.list = {};
    this.recent = [];
    this.maxRecent = maxRecent || 5;
}
MostRecentList.prototype.add = function (str) {
    updateRecent(this.recent, str, this.maxRecent);
    if (this.list[str]) {
        this.list[str]++;
    } else {
        this.list[str] = 1;
    }
};
MostRecentList.prototype.remove = function (str) {
    if (this.list[str]) {
        this.list[str]--;
        if (!list[str]) {
            removeRecent(this.recent, str);
            delete this.list[str];
        }
        return true;
    }
    return false;
};
MostRecentList.prototype.removeAll = function (str) {
    if (str) {
        removeRecent(this.recent, str);
        delete this.list[str];
    } else {
        this.list = {};
        this.recent = [];
    }
};
MostRecentList.prototype.has = function (str) {
    updateRecent(this.recent, str, this.maxRecent);
    return !!this.list[str];
};
MostRecentList.prototype.getNumEntriesOf = function (str) {
    updateRecent(this.recent, str, this.maxRecent);
    return this.list[str] || 0;
};
MostRecentList.prototype.getRecent = function () {
    return this.recent;
};
MostRecentList.prototype.logState = function () {
    console.log(this.stringify());
};
MostRecentList.prototype.stringify = function () {
    return `List: ${JSON.stringify(this.list)}, Recent: ${JSON.stringify(this.recent)}`;
};

function removeRecent(recentList, str) {
    var index = recentList.indexOf(str);
    if (index >= 0) {
        recentList.splice(index, 1);
    }
}

function updateRecent(recentList, str, maxRecent) {
    removeRecent(recentList, str);
    recentList.unshift(str);
    if (recentList.length > maxRecent) {
        recentList.pop();
    }
}

// Test usage
var dataStructure = new MostRecentList();
dataStructure.add("hello");
dataStructure.add("world");
console.log(dataStructure.has('world'));
console.log(dataStructure.getRecent());
dataStructure.add('hello');
console.log(dataStructure.getRecent());
dataStructure.remove('blah');
console.log(dataStructure.getNumEntriesOf('hello'));
dataStructure.logState();
dataStructure.removeAll('hello');
dataStructure.logState();
dataStructure.add('bob');
dataStructure.add('bill');
dataStructure.add('dog');
dataStructure.add('weed');
dataStructure.add('tree');
dataStructure.logState();

module.exports = MostRecentList;