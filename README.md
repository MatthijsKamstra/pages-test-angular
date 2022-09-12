# pages test angular

test ci/cd

- gitlab
- ci/cd
- angular

## setup

my "default" project init

```bash
ng new 98_pages --routing true --style scss
cd 98_pages
ng serve --open
```

But if you need to generate directly into the root

```bash
ng new 98_pages  --routing true --style scss --directory ./
```

## GITHUB!!! (HUB)

### **(github)** build project

build project with correct "base-href" and in correct output folder

```bash
# build project
ng build --output-path docs --base-href /[projectname]/

# create a production build
ng build --prod  --output-path docs --base-href /[projectname]/

# the literal version
ng build --output-path docs --base-href /pages-test-angular/
```

### **(github)** build project (optional)

change `package.json`

```json
{
  "name": "pages-test-angular",
  "version": "0.0.0",
  "scripts": {
    "deploy": "ng build --output-path docs --base-href /pages-test-angular/ && cp docs/index.html docs/404.html && npm run git:deploy",
    "git:deploy": "npm run git:commit && npm run git:push",
    "git:commit": "git add -A . && git commit -a -m 'update docs'",
    "git:push": "git push",

...
```

Run next command, to generate and automaticly deploy to github

```bash
npm run deploy
```

## resource

- (github) https://angular.io/guide/deployment
- (github) https://medium.com/swlh/how-to-deploy-an-angular-app-to-github-pages-without-using-any-libraries-step-by-step-guide-cfe96fb0c879
