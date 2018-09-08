Name: 
Email: 
Time to complete: 

Notes:

- I moved away from using snapshot testing for components because I consider it to be brittle and difficult to reason about.
- I split the App component out into separate components to better adhere to the single responsibility principle, and to make redux easier to implement and scale in the future.
- I had trouble getting enzyme tests to behave exactly as I wanted.

### User Stories
```
As a developer,
So that I can build new features and functionality more easily,
I would like to be able to have multiple components within the application.
```
```
As a user,
So that I can create a product bundle for clients,
I would like to be able to add items to a bundle. 
```
```
As a user,
So that I can modify a product bundle I'm working on,
I would like to be able to remove items from the bundle.
```
```
As a user,
So that I can evaluate the cost of a bundle,
I would like to be able to see a total in the bundle's summary.
```
```
As a user,
So that I can evaluate what is in the bundle at a glance,
I would like to be able to see a category breakdown in the bundle's summary.
```