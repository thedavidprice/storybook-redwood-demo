# Design-driven Full-stack:
## Redwood Design Workflow using Storybook and Tailwind
This demo repo was created using the following workflow:
1. Create a new Redwood project `yarn create redwood-app <project>`
2. Set up Tailwindcss `yarn redwood setup ui tailwindcss`
3. Start Storybook `yarn redwood storybook`
4. Build React Components (including Page and Cell for data fetching)
5. Once components are complete, create DB model in `prisma.schema`
6. Scaffold CRUD UI `yarn redwood generate scaffold <model>`
### Setup

Install Packages:
```terminal
yarn install
```

Init local SQLite DB:
```terminal
yarn redwood prisma migrate dev
```

### Fire it up

Run Storybook:
```terminal
yarn redwood storybook
```

Run Redwood Dev Server:
```terminal
yarn redwood dev
```
