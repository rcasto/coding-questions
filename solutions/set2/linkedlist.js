function LinkedListNode(data) {
    this.data = data || null;
    this.prev = null;
    this.next = null;
}
LinkedListNode.prototype.add = function (data) {
    this.next = new LinkedListNode(data);
    this.next.prev = this;
    return this.next;
};
LinkedListNode.prototype.remove = function (offset = 0) {
    var node = this;
    while (offset > 0 && node) {
        node = node.next;
        offset--;
    }
    // could not remove that index (out of bounds)
    if (offset > 0) {
        return false;
    }
    if (node.prev) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        return true;
    }
    if (node.next) {
        // copy next to this node if there is no previous node
        node.data = node.next.data;
        if (node.next.next) {
            node.next.next.prev = node;
        }
        node.next = node.next.next;
    }
    node.data = null;
    return true;
};
LinkedListNode.prototype.logState = function () {
    var node = this;
    var index = 0;
    while (node) {
        console.log(`Node at index ${index} holds ${node.data}`);
        node = node.next;
        index++;
    }
};

module.exports = LinkedListNode;