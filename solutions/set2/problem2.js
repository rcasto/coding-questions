function MostRecentList() {
    this.list = {};
    this.recent = new Set();
}
MostRecentList.prototype.add = function (str) {
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
            this.recent.delete(str);
            delete this.list[str];
        }
        return true;
    }
    return false;
};
MostRecentList.prototype.removeAll = function (str) {
    if (str) {
        this.recent.delete(str);
        delete this.list[str];
    } else {
        this.list = {};
        this.recent.clear();
    }
};
MostRecentList.prototype.has = function (str) {
    return !!this.list[str];
};
MostRecentList.prototype.getNumEntriesOf = function (str) {
    this.recent.
    this.recent.add(str);
    return this.list[str] || 0;
};
MostRecentList.prototype.getRecent = function () {
};
MostRecentList.prototype.logState = function () {
};
MostRecentList.prototype.toString = function () {
};

function updateRecent(recentSet, str) {
    if (!recentSet.has(str)) {
        recentSet.add(str);
    }
}

modules.exports = MostRecentList;