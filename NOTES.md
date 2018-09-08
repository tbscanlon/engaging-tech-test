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