# Snippit
ADAHacks Project 2018
Snippit is a website which allows users to save working code snippets onto a personal account.

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

All Folders
- GET `/folders`

New Folder
- GET `/folders/:folder-id/files/new`
- POST `/folders/:folder-id/files/`

New Post
- GET `/folders/new`
- POST `/folders`

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
