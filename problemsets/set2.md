# Problem 1
Write a function that takes a text file as input and removes all duplicate words.  
Assume the delimiter for words is being separated by a space and case does not matter

Use this function to dedupe the text in [The Iliad](http://classics.mit.edu/Homer/iliad.mb.txt).  
How many unique words are there?

```
test.txt
"One banana, two banana, three banana...four"

dedupe test.txt ---> ["one", "banana", "two", "three", "four"]
```

# <a name="problem2"><a>Problem 2 (Revised)
Design a data structure which has the following operations (the data is assumed to be a string for this problem):
- add(string str) => int
    - Adds the passed in string to the internal structure
    - Returns the updated number of items in the data structure
- remove(string str) => bool
    - Removes the first instance of the passed in string
    - Return true if a data entry with the passed in string was removed, false otherwise
- removeAll(string str) => void
    - Removes all instances of the passed in string
    - If no string is passed in, clear the internal structure of all data
- has(string str) => bool
    - Returns true if the passed in string exists in the structure, false otherwise
- getNumEntriesOf(string str) => int
    - Return the number of times the passed in string appears in the structure
- getRecent() => List(string)
    - Returns a list of up to the 5 most recenty accessed items
    - Access = added, called has(...) on, or called getNumEntriesOf(...) on
    - Should not contain strings which were completely removed

```  
var dataStructure = new DataStructure()
dataStructure.add("hello") --> 1
dataStructre.add("world") --> 2
dataStructure.has('world') --> true
dataStructure.getRecent() --> ['world', 'hello']
dataStructure.add('hello') --> 3
dataStructure.getRecent() --> ['hello', 'hello', 'world']
dataStructure.remove('blah') --> false
dataStructure.getNumEntriesOf('hello') --> 2
```