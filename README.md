# React. Components

Task made in terms of RSSchool React course.  
[Link to the task](https://github.com/rolling-scopes-school/tasks/tree/master/react/modules/module01#what-should-be-done)

## Technology stack

- React
- TypeScript
- Vite
- ESLint
- Prettier
- Husky
- Sass

## Challenges

### Class components only

According to the task only *class components* are allowed.

### No 'any' allowed

Both explicit and implicit 'any' are prohibited.

### Search by part of the name

The backend server is [pokeapi](https://pokeapi.co/) implementing RESTful API with pagination options.  
The server doesn't support search using part of the pokemon name. For example, if you print in the search field 'pika', it won't return data of all the pokemons, whose name includes the string. The one can find only pokemon only by typing full name of the pokemon (e.g. 'pikachu', 'charmander' etc.).  
For this reason search functionality was implemented on the client side of the app.
