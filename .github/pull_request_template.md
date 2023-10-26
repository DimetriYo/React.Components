1. [Module01](https://github.com/rolling-scopes-school/tasks/tree/master/react/modules/module01)

2. Screenshot:

3. [Deploy]()

4. 26.10.2023 / 30.10.2023.

5. Self assessment: 100
   - Eslint is set up, when lint command is run it doesn't produce any errors (_15 points_)
   - Prettier is set up, format:fix command fixes issues (_15 points_)
   - Husky is set up, linting is run on pre-commit (_10 points_)
   - Page is split into 2 sections, top one has Search input and "Search" button, main section displays the list of results from the selected api when page is opened for the first time (loader should be shown while app makes a call to the api) (_20 points_)
   - When user types something to the Search input and clicks "Search" button, a loader is displayed and the list is changed according to the response results for a provided search term - (_15 points_)
   - The search term typed into the Search input is saved in the local storage when user clicks on "Search" button (check it by closing the tab and open the app in the new one - the initial call should contain previously entered search term) - (_15 points_)
   - Application is wrapped with ErrorBoundary, which logs error to a console and shows a fallback UI. There should be a button to throw an error - (_10 points_)
   ### Penalties:
   - TypeScript isn't used: **no**
   - Usage of any: **no**
   - Usage of ts-ignore: **no**
   - Direct DOM manipulations inside the React components: **no**
   - React hooks are used to get access to either state, or to the component lifecycle: **no**
   - Presence of code-smells (God-object, chunks of duplicate code), commented code sections: **no**
   - Usage of Redux or other state management libraries: **no**
   - Usage of component libraries, e.g. Material UI, Ant Design: **no**
