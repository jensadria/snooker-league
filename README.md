This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Snooker League App

[Snooker League App](https://nextjs.org/)

## The App

This app is a portal for all members of a snooker league. Players can view their teams's current league standings and see their individual statistics. Because it is a handicapped tournament, players need to see what their current handicap is so they can adjust their points accordingly for their next match. This app makes it easy for all players to look up any relevant information.

When all the matches on any given matchday have been played, the league coordinator can sign in and enter in the results, and the scores will then be immediately updated.

## The Technologies

### Languages

- HTML
- CSS
- Javascript
- Typescript
- SQL

### Frameworks/Libraries

- ReactJS
- NextJS
- NextAuth
- PostgreSQL
- Tailwind
- Jest

### Packages

- Axios
- PG (for Postgres)
- Bcrypt
- Date-FNS

## The Approach

This is a data-heavy app so the main hurdle was organising the database in such a way that makes sense and is easier to query. After a few revamps of the schemas I nailed down the structure of the data and the relations.
After initially trying to query the data in such a way that I can directly display it as is, I pivoted to an approach that allowed the front-end to process the data instead(despite being a data app, the dataset was still very small).

I have decided to use the NextJS framework to build the app. This sped up development because it comes with a router out of the box and additionally, I could build my backend on the same server. For now I have chosen to use client-side data fetching as opposed to the built-in server-side rendering.
Tailwind was my choice for styling the front-end, it is ideal for quick prototyping and building simple UIs efficiently.

## Installation Instructions

1. Clone the Project
2. Install all necessary dependencies - `npm install` or `yarn install`
3. Start a Postgres server and create a database called 'snooker_league' then add mock data by running- `npm run db`
4. Run the app by running - `npm run start`
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
6. To run tests, use the command `npm run test` while the server is still running.

## Hurdles

The main hurdle for this project was time. Initially I had set out to do an array of features but ultimately I had to cut down by about 80% to meet the deadline. This is, however, only the beginning of the project and I set out to to implement those forgotten features.

## Features To Do
