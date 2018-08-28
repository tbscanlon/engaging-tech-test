#  First Challenge (1-2hrs)

Please read this whole document before starting the challenge.

This app contains a static mock of an internal tool used to build bundles from a supplier's items.
Users should be able to select items from the left-hand sidebar, and have them appear in the Bundle preview.

For this First challenge, we would like you to:

- Populate items in the left-hand sidebar with data from `items.js`.
- Allow users to select items in the left-hand sidebar, and have them appear in the Bundle Preview on the right hand side.
- Be able to remove items from the menu by clicking the (x)
- Show the total number of selected items in the header
- Show the total number of each category type selected in the header

If you feel comfortable, try allowing the user to drag and drop items (instead of select) from the sidebar into Bundle
Preview. (react-dnd is really useful, but sensible alternatives are fine).

Please complete `NOTES.md` with your details and any additional notes outlining your thought process.
Enter as many notes as you like (or none at all!). These will be used to create talking points during your interview.

We do not want you to:

- Overstyle the application. Feel free to add niceties if you'd like, but please don't spend too much time on this.
- Change the build configuration of the project
- Worry too much about browser compatibility or responsiveness (it will be tested in Chrome on a Mac).
    - This is an internal tool used only on desktops. We will discuss these topics further in your interview.

Using internal component state is fine, but you're welcome to use redux/context (or any other state library) if you wish.
Please justify your choice to (or not to) use a library in `NOTES.md`.

We are looking for clean code, with sensible component structure and data propagation.


#  Second Challenge (1-2hrs)

For this challenge, we would like you to:

- Design a REST API and database schema using Nodejs and Mongodb which allow the application to :
    - connect the application to a mongodb database ( you can use https://mlab.com/ for free ), feel free to use the notes or a mock data, if you think this will take too much time.
    - Provide a list of products ordered by specific key ( id,name,category, etc...) passed as parameter on the get request.
    - Provide a single product found by id (passed as parameter)
    - create tests using a your favourite library/framework
    
We are looking for clean code, with a look for a future extension with a solid tests cases.


If you have any issues please email stefano@engaging.tech

Good luck!