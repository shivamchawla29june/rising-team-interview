# Welcome to Rising Team Take Home Project!

1. React is used as the Frontend framework for this application.
2. The app uses Node server for database.

# File Structure

The structure of the application is as follows:

1. Assets: contains any images/ other assets required for the applications
2. Components: Contains reusable components such as AddButton and DeleteButton
3. SCSS: Contains all the CSS Files
4. Service: Contains all the API calls
5. StateMgmt: Contains all the reducer functions

## Running the application

1.  Clone this repository onto your local machine.
2.  Install the necessary dependencies mentioned in the package.json,
3.  Run the DB server by using `npm start server`
4.  Start the development server by running `npm start` in your terminal.

## Application

The application itself is divided into 3 main parts

1. Time Interval Input: This section deals with the user entering the input for the time Interval
2. Toolbar Component: If the timer is not enabled you get the option to ask a random question or start the timer to ask the question. If the timer is enabled you get to stop the timer. You can't ask a random question when you the timer is enabled
3. Question Component: Presents the question that is asked.
4. All these containers are stored in the Magic Hat Container HOC

### Project Timeline

I spend roughly 3.5 hours on the project.

20-30 mins - Planning the components and deciding on the DB(DB was taken based on convenience Node server)
30-40 mins - Working on the Toolbar Container
15-20 mins - Working on the Questions Container
50 mins - Working on Magic Hat Container
30-35 mins - Working on CSS of all the components and containers
30 mins - Working on Buttons Functionality.
15-20 mins - Fixing bugs and starting with unit tests.

### Notes and Further Additions

Following are the items that needs to be added in the project

1. Testing of the components using jest and react-testing-framework. Will be adding test cases in the future.
2. Use useRef to reduce the rendering of the component. Currently the component re-renders every time the question is updated. This is not required. We can improve the performance of the system by using useRef.
3. Currently all the questions are being fetched. We could fetch 50 questions(for example) from the backend and not all questions.
4. CSS changes the project.
5. Add debouncing for the inputs.

### Sample images of the project

![Initial Entry](./magic-hat/src/assets/Initial.png)
![Question Being Asked](./magic-hat/src/assets/Normal.png)
![Timer Being Enabled](./magic-hat/src/assets/WithTimer.png)
