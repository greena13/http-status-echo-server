# HTTP Status Echo Server

[![GitHub license](https://img.shields.io/github/license/greena13/react-hotkeys.svg)](https://github.com/greena13/http-status-echo-server/blob/master/LICENSE)

A simple node server that generates responses with the specified http status code.

## What's it for?

There are many different JavaScript and node.js HTTP libraries out there and they are not necessarily consistent in how they treat different HTTP status codes. A response in one HTTP library may be routed via your success handler, where that same response is expected to be dealt with in your error handling code in another library.

To make matters worse, many libraries do not clearly document their behaviour - and it can vary across versions. Rather than trying to read through the source code of each HTTP package - of which there can be several in a single project, depending on which dependencies you use - this HTTP status echo server lets you add a short snippet of code to your app to test every possible HTTP status code in seconds.

## Installation

```
# Clone the repo
git clone https://github.com/greena13/http-status-echo-server.git

# Enter the directory
cd http-status-echo-server
```

### Usage

Start the node server

```
# Start on the default port: 8080
npm start

# or on a custom port
npm start 8081
```

Add something like the following to your application code to test your http libraries handling of each http status code. In this case, we are testing jQuery.

```js
/**
 * Fetch all of the available status codes from a special JSON endpoint that returns
 * them as a hash (the status codes are the keys, the values are descriptions)
 */

$.get('http://localhost:8080/status-codes', (response) => {
  Object.keys(response).forEach((statusCode) => {
    /**
     * Iterate over each of the status codes and make a request to the HTTP status
     * echo server
     */
    $.get('http://localhost:8080?status=' + statusCode, () => {
      /**
       * Log the statuses that are NOT treated as errors to the console
       */
      console.log(statusCode + ' (' + response[statusCode] + '): SUCCESS')
    }).fail(function() {
      /**
        * Log the statuses that ARE treated as errors to the console
        */
      console.warn(statusCode + ' (' + response[statusCode] + '): ERROR' );
    });
  });
})
```
