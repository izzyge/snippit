# snippit
ADAHacks Project 2018
Snipp-It is a website which allows users to save working code snippets onto a personal account.

## Audience
Anyone coders who want to easily accesss working code.

## Experience
A user opens the web app and a dashboard of all their code is shown.

# Technical

## Models
- Users
- Folders
  - Snippets
    - Name
    - Description
    - Code

## Views
- Home
- Login
- New User
- New Post
- All Posts

## Routes
Home
- GET `/`

All Posts
- GET `/users/:user-id`

New Post
- GET `/users/:user-id/new`
- POST `/users/:user-id/:post-id`

Users
- GET `/login`
- POST `/login`
- GET `/logout`
- POST `/users/new`

## Other
- mongodb
- express
- bootstrap

## Extra
- delete function
- share function
- edit function
