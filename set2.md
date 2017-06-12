# Problem 1
Write a function that takes a text file as input and removes all duplicate words.  Assume the delimiter for words is being separated by a space

Use this function to dedupe the text in [The Iliad](http://classics.mit.edu/Homer/iliad.mb.txt).  
How many unique words are there?

```
    dedupe iliad.txt
```

# Problem 2
Design a data structure which has the following operations (you can assume the data is a string for this problem):
- add(string str);
    - Adds string to the end of the saved list
- remove(int index);
    - Removes the item at the specified index
- get(int index);
    - Returns the item stored at the specified index
- getRecent();
    - Returns the 5 most recenty accessed (add/get) items

```  
var dataStructure = new DataStructure();
dataStructure.add("hello");
dataStructre.add("world");
dataStructure.add("blah");
dataStructure.getRecent(); ---> ['blah', 'world', 'hello']
dataStructure.remove(2);
dataStructure.getRecent(); ---> ['blah', 'world']
```