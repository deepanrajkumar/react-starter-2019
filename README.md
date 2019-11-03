#### Getting Started

1.Clone React starter Repository

```
git clone
```

2.Use npm or yarn to install dependency

```
npm install
```

3.Create a file called .env in your root folder with the following contents

```
API_URL="http://localhost:3000"
```

4.Run dev server

```
npm start
```

#### Server options

Run dev server with lint options

```
npm run start:dev
```

Build app

```
npm run build
```

Serve build

```
npm run serve:build
```

#### Best practices

Best practices uses custom script to deliver unified experience on all platform. Formatting, eslint, scss lint, scan and Test runs with same fixed configuration.

##### Code Commit

Auto code commit and pre commit check(format, lint, security and test)

```
git add .
npm run commit
```

Manually check code quality(format, lint, security and test) before push

```
npm run commit:check
npm run fix
```

##### Format, Lint, Scan and Test

Auto format code

```
npm run format
```

Check and fix js error using eslint

```
npm run eslint
npm run eslint:fix
```

Check and fix scss error using sass lint

```
npm run sass:lint
npm run sass:fix
```

Check for vulnerability

```
npm run scan
```

Run test and with options

```
npm run test
npm run test:watch
npm run test:coverage
npm run test:prod
```

##### Clean project untracked files

Remove directory and files

```
npm run clean:dist
npm run clean:all
```
