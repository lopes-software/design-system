# design-system

### Run all tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Storybook
```
npm run storybook:serve
```

### Installation

`Design System` is a private repository, so it is required to authenticate on npm with you github token to access and download the package.

For the authentication and install, follow these steps:

1. Generate a personal access token with access to read `design-system` repository. More info on this (article)[https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens].

2. Run the following command on your terminal. This command will ask for some info, for username enter `lopes-software`, for password enter you github access token and for email your personal email.

```bash
npm login --scope=@lopes-software --registry=https://npm.pkg.github.com
```

After this, you will be able to download the package with:
```bash
npm install @lopes-software/design-system
```

### Releases

We have a github action to test, build and publish a new version from the package. This action is triggered when a new release is created on github. More info about github releases can be found on this [article](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository).

Before create a new release, bump the package version on `package.json` file. For example:

```diff
{
  "name": "@lopes-software/design-system",
- "version": "0.0.16",
+ "version": "0.0.17",
  "main": "dist/design-system.common.js",
  "module": "dist/design-system.umd.min.js",
}
```

After start a release, follow the publish execution to make sure that the new version was published with success. All actions from this project can be found [here](https://github.com/lopes-software/design-system/actions).
