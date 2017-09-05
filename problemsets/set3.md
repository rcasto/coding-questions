# Problem 1<a name="problem1"></a>
Stand up a web route/service that when called with an HTTP GET request returns the text 'Hello World'

If called with any other HTTP request type it should return a 404 if hit

```
GET http://someendpoint/api/hello
Response -> 'Hello World'

POST http://someendpoint/api/hello
Response -> 404
```

# Problem 2<a name="problem2"></a>
Build a simple web front end page that has one element on it: A button

This can either be a static page or a web page served by the same server you used for [Problem 1](#problem1)

When this button is clicked it should send an HTTP GET request to the endpoint created in [Problem 1](#problem1)

# Problem 3<a name="problem3"></a>
Add another element to the web page developed in [Problem 2](#problem2): a text input

Adjust the button already on the page from [Problem2](#problem2) to instead send a POST request to the endpoint developed in [Problem 1](#problem1) with the text of the newly added text input element as the body of the request

You should now open up the endpoint from [Problem 1](#problem1) to accept POST requests:
- On receiving a POST request it should respond with 'Hello' + whatever text was in the text input element

You can choose any format you want for the body of the request, as long as it contains the text in the text input element

```
Type 'blah' into text input element
Click button
POST http://someendpoint/api/hello Body { text: 'blah' }
Response 'Hello blah'
```

# Problem 4
Add 1 more button to the web page developed in [Problem 3](#problem3)
When this button is clicked it will send a HTTP GET request to your endpoint

Your endpoint service from [Problem 3](#problem3) must be updated to do the following:
- On receiving a GET request it should return the 5 most recently sent queries via POST requests

Hint:  The data structure from the [previous problem set](set2.md) may be helpful

```
POST http://someendpoint/api/hello Body { text: 'blah' }
Response 'Hello blah'

POST http://someendpoint/api/hello Body { text: 'stuff' }
Response 'Hello stuff'

GET http://someendpoint/api/hello
Response ['stuff', 'blah']
```