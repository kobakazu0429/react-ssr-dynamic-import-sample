# react-ssr-dynamic-import-sample

## How to dev

### Setup

```bash
# ... Setup node and yarn
$ git clone git@github.com:kobakazu0429/react-ssr-dynamic-import-sample.git
$ cd react-ssr-dynamic-import-sample
$ yarn install
```

## Commands

```bash
# written in package.json
$ yarn build:client
$ yarn dev:client
$ yarn build:server
$ yarn dev:server
$ yarn start:ssr          # run express server with SSR
$ yarn lint               # Check type and syntax
$ yarn clean              # rm -rf ./dist
```

### development

run below commands in parallel
`yarn dev:client` `yarn dev:server` `yarn start:ssr`

### production

run below commands in parallel
`yarn build:client` `yarn build:server` `yarn start:ssr`
