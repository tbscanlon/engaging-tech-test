Name: Tom Scanlon
Email: thomas.scanlon@outlook.com
Time to complete: 6hrs

Notes:

### General Notes
- I took longer than I anticipated because of the front-end refactoring I decided to do before implementing the requested features.
- Building a back-end was harder than I thought. It's only something I've done for learning and side-projects so far, and a lack of hard professional experience slowed me down a bit.

### Front-end Notes
- I moved away from using snapshot testing for components because I consider it to be brittle and difficult to reason about.
- I split the App component out into separate components to better adhere to the single responsibility principle, and to make redux easier to implement and scale in the future.
- I had trouble getting enzyme tests to behave exactly as I wanted.
- I added redux for state management, as I consider it to be an excellent scalable solution. Considerations such as fetching data from or posting data to APIs can be implemented easily on top of a redux architecture.
- There are bugs when working with multiple instances of the same item within a bundle. This is happening because I'm using the id as a key across the various items, which isn't actually unique if multiple instances of the same item are added into the bundle. I would fix this by creating and inserting unique ID numbers specific to the front-end at some point in the user journey - probably when adding products to a bundle.
- CSS isn't my strong suit. I've followed the BEM naming convention as well as I could to scope the CSS a bit better, but it's resulted in some duplication. My preferred solution would be to use SASS or PostCSS and re-structure the CSS to use variables and mixins, but I feel that's probably a bit too large of a change to be feasible in this tech test.
- Working without a linter is hard. I debated adding one in, but decided against it as I feel that it would intrude on the 'no modifying build configuration' instruction given. There might be a bit of messiness in some parts of the code (missing semicolons or trailing whitespaces) because I've become very used to lint-on-save functionality.

### Back-end Notes
I used the following tech stack:
- Typescript
- Express
- Mongoose
- Jest + supertest

I chose to use a Typescript-based stack so I could take advantage of async/await, es6 imports and strong typing within my codebase. Node didn't like es6 imports by default, and I could've used Babel to work around that, but I'm more comfortable setting up Typescript than babel/webpack.

- I didn't set up seperate test/prod DB's. It's bad practice, I know, but my focus was on putting something together within the allotted time. Considering I had spent more time than I anticipated on the front-end, I wanted to move quickly getting a back-end together. I chose to accept the limitation of using one DB, rather than spend extra time setting up mongo on my personal PC in order to be able to spin up test DB's.
- My implementation is very simple, using GET requests against a pre-populated database. This could be expanded in the future with POSTs for adding new items or bundle orders.
- I tried to architect my back-end following the MVC pattern. I have separate controller files for each route, and separate database schema files for each route as well. I think this approach is more scalable than throwing everything in one file.
- I think my `index.ts` is a bit messy, but I was wary of over-engineering. I've built some APIs in the past on the same stack that have ended up needlessly complex. One of my core goals here was to maintain simplicity.
- The controllers could be a bit tidier. I'm not fond of the callback nesting. Given time, I would try and refactor out some of the shared logic (error messaging), and perhaps try and use async/await to make the code more declarative.
- Given more time, I would research how to link between documents/collections within mongodb (something like foreign keys perhaps?) and link the data between products and orders.

### User Stories
Below are the user stories I wrote to help build the required functionality:

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