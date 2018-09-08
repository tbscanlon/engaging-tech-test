Name: 
Email: 
Time to complete: 

Notes:

- I moved away from using snapshot testing for components because I consider it to be brittle and difficult to reason about.
- I split the App component out into separate components to better adhere to the single responsibility principle, and to make redux easier to implement and scale in the future.
- I had trouble getting enzyme tests to behave exactly as I wanted.
- I added redux for state management, as I consider it to be an excellent scalable solution. Considerations such as fetching data from or posting data to APIs can be implemented easily on top of a redux architecture.
- There are bugs when working with multiple instances of the same item within a bundle. This is happening because I'm using the id as a key across the various items, which isn't actually unique. I would fix this by creating and inserting unique ID numbers specific to the front-end at some point in the user journey - probably when adding products to a bundle.

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