# Cerebrar

![cerebro](https://i.pinimg.com/564x/e5/a7/1a/e5a71afcb14da48618f4d869c2119807.jpg)



## Description

This is an app to track and evaluate negative automatic thoughts . The main objetive is to contrast these negative thoughts with alternative ideas and concrete tasks to downplay them.

## User Stories

- **Signup:** As an anon I can sign up in order to create an account and start using the app.

- **Login:** As a registered user I can login to the platform and get full access to the content of the different sections.

- **Logout:** As a user I can logout from the platform to keep my account safe and private.

- **Profile** - After login, I can access to my profile and see the list of my thoughts 

- **Edit Profile** As a user I can edit my personal information

- **New Thoughts** As a user I can add negative automatic thoughts.

- **Edit Thoguths** - As a user I can edit negative automatic thoughts.

- **Delete Thoguhts** - Any user can erase thoughts form my personal list.

- **View  Thoughts List** As a user I can see other user´s thoughts.

- **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault

  

## Backlog

- Frequently asked question section

- User can save favorites thoughts from other users

- Users can communicate or interact through a chat

  



# Client / Frontend

## React Router Routes (React App)

| Path                      | Component       | Permissions                | Behavior                                                     |
| ------------------------- | --------------- | -------------------------- | ------------------------------------------------------------ |
| /                         | Home            | anon only `<AnonRoute>`    | Navigate to Sign up and Login                                |
| `/signup`                 | Signup          | anon only `<AnonRoute>`    | Signup form, link to login, navigate to Profile after signup |
| `/login`                  | Login           | anon only `<AnonRoute>`    | Login form, link to signup, navigate to Profile after login  |
| `/profile`                | Profile         | user only `<PrivateRoute>` | Shows Profile details                                        |
| `/thoughts`               | ThoughtsList    | user only `<PrivateRoute>` | Shows Thoughts List page                                     |
| `/thoughts/:id`           | ThoughtsDetails | user only `<PrivateRoute>` | Shows Thoughts Details page                                  |
| `/mythoughts/new-thought` | NewThought      | user only `<PrivateRoute>` | renders a new thought form                                   |
| `/faq`                    | FAQ             | user only `<PrivateRoute>` | Provides information about Automatic Thoughts                |



## Components

- Home Page
- Login
- Sign Up 
- Profile Page 
- New Thoughts Page
- Edit Thoughts 
- Thoughts List
- Thoughts Details Page
- FAQ Page
- Navbar
- Search bar

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
- Profile
  - Profile.detail(id)
  - Profile.edit(user)

- Thoughts Service

  - thoughts.list()
  - thoughts.add(thought)
  - thoughts.detail(id)
  - thoughts.update(id, thought)
  - thoughts.delete(id)

  

  

# Server / Backend

## Models

User model

```javascript
{
  	nickname: String,
    password: String,
    description: String,
    image: { type: String ,default: ""},
    myThoughts: [{type: mongoose.Types.ObjectId, ref:"Thoughts"}],
    favourites:[{type: mongoose.Types.ObjectId, ref:"Thoughts"}],
}
```

Thought model

```
 {
  	nickname: String,
 	 	password: String,
  	description: String,
  	image: { type: String ,default: "https://ibalz.com/wp-content/uploads/2019/10/default-			profile.png"},
  	myThoughts: [{type: mongoose.Types.ObjectId, ref:"thought"}],
  	favourites:[{type: mongoose.Types.ObjectId, ref:"thought"}],
 }
```

otherUserAT model

```
 {
  	authorId: {type: mongoose.Types.ObjectId, ref:"User"},
    otherUserAT: { type: String , required: true},
    thoughtId: {type: mongoose.Types.ObjectId, ref:"Thought"},
    suggestedAlternativeThought: [{type: mongoose.Types.ObjectId, ref:"Thought"}]
 }
```



## API Endpoints (backend routes)

| HTTP Method | URL                  | Request Body                                                 | Success status | Error Status | Description                                                  |
| ----------- | -------------------- | ------------------------------------------------------------ | -------------- | ------------ | ------------------------------------------------------------ |
| POST        | `/auth/signup`       | {nickname, password}                                         | 201            | 404          | Checks if fields not empty and user does not exists, then create user with encrypted password, and store user in session |
| POST        | `/auth/login`        | {nickname, password}                                         | 200            | 401          | Checks if fields not empty, if user exists, and if password matches, then stores user in session |
| GET         | `/auth/profile`      | Saved session                                                | 200            | 404          | Check if user is logged in and return user info              |
| POST        | `/auth/logout`       | (empty)                                                      | 204            | 400          | Logs out the user                                            |
| GET         | `/thoughts`          |                                                              |                | 400          | Show list of thoughts from all users                         |
| GET         | `/thoughts/:id`      | {id}                                                         |                |              | Show specific thought details                                |
| PUT         | `/thoughts/edit/:id` | {automaticThoughts,    alternativeThoughts,    intensity, tasks, category} | 200            | 400          | edit thought                                                 |
| POST        | `/thoughts/add`      | {automaticThoughts,    alternativeThoughts,    intensity, tasks, category} | 201            | 400          | Create and save a new thought                                |
| DELETE      | `/thoughts/:id`      | {id}                                                         | 201            | 400          | delete thought                                               |



## Links

### Trello

[Link to trello board](https://trello.com/b/PxdNXeQM/cerebrar) 



### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com/)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com/)