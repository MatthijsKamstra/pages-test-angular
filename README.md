# pages test angular

test ci/cd

- gitlab
- ci/cd
- angular

## setup

```bash
ng new pages-test-angular --routing true --style scss
cd pages-test-angular
ng serve --open
```

## ng build

we are going to show a basic setup so...

build the project:

```bash
ng build
```

you will get

`dist/pages-test-angular`
`dist/98_pages`
`dist/[projectname]`

## .gitlab-ci.yml

`.gitlab-ci.yml`

```yml
image: node:8.12.0

pages:
  cache:
    paths:
      - node_modules/

  stage: deploy
  script:
    - npm install -g @angular/cli@6.2.1
    - npm install
    - ng build
    - mkdir -p public
    - mv dist/[projectname]/* public/
  artifacts:
    paths:
      - public
  only:
    - master
    - pages
```

# change base href

```
<base href>

This guide works with a CLI-generated Angular application. If you are working manually, make sure that you have <base href="/"> in the <head> of your index.html file. This assumes that the app folder is the application root, and uses "/".
```

# resource

https://medium.com/@atiaxi/publishing-a-standalone-angular-app-on-gitlab-pages-b58458d2c94
