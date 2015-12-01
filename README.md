# ZenStore

ZenStore is an object that stores data on the client. 

## How to use a Store

A ZenStore is a tool for creating a reactive store on the client to either hold 
some complex state / data to submit to the server.

Here's an example of how you use it:

## The API

The ZenStore has utilities for grabbing data. Stores CANNOT update themselves. So there are no functions for direct updates to the store. Please refrain from that, as it would be considered an anti pattern.

 * `getStoreValue`: Stores are comprised of one document. They can either hold data of a mongo collection or othercomplex document state you want to render UI components. 
 * `clearStore`: Use if you want to remove the document from the store.
 * `getCollection`: Use this when you want to pass the collection instance to child components for use by action creators.
 * `hydate`: Repopulate the store with data. Removes previous document and adds new one.
  
## TODO

tests, documentation
