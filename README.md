# barebone-typescript

[![release](https://img.shields.io/github/release/alvis/barebone-typescript.svg)](https://github.com/alvis/barebone-typescript/releases)
[![build](https://img.shields.io/circleci/project/github/RedSparr0w/node-csgo-parser/master.svg)]()
[![codacy grade](https://img.shields.io/codacy/grade/3cd200e2ab5d4be487fb350be04fb498/master.svg)](https://www.codacy.com/app/alvis/barebone-typescript)
[![codacy coverage](https://img.shields.io/codacy/coverage/3cd200e2ab5d4be487fb350be04fb498.svg)](https://www.codacy.com/app/alvis/barebone-typescript)
[![security](https://snyk.io/test/github/alvis/barebone-typescript/badge.svg)](https://snyk.io/test/github/alvis/barebone-typescript)
[![dependencies](https://img.shields.io/david/dev/alvis/barebone-typescript.svg)](https://david-dm.org/alvis/barebone-typescript?type=dev)
[![license](https://img.shields.io/github/license/alvis/barebone-typescript.svg)](https://github.com/alvis/barebone-typescript/blob/master/LICENSE)

> An opinionated foundation for a typescript project

Coding should always be the core of all projects, not configurations for project maintenance nor the format of a README. In a nut shell, this project is a foundation for any typescript project, so that you can start coding straight without being distracted by all the setups.

/This foundation/ is:
1. *Essential*: It contains all common configurations required for a typescript project.
2. *Fully Featured*: Badges, building, releasing, styling, testing, and git hooks, they are all included.
2. *Updated*: All configurations are updated to be compatible with their latest versions.

<details>
<summary><strong>Table of Contents</strong></summary>

* [Usage](#usage)
* [The Barebone](#the-barebone)
* [Known Issues & Limitations](#known-issues--limitations)
* [About](#about)
  + [Background](#background)
  + [Related Projects](#related-projects)
  + [License](#license)

</details>

## Usage

Only two steps. Clone this project and change the origin to start a new project.

```sh
$ git clone https://github.com/alvis/barebone-typescript.git $NEW_PROJECT_PATH
$ git remote set-url origin $YOUR_GIT_REPO
```

### Git Hooks for Local Testing
Optionally, you can setup the opinionated git hooks to ensure new commits are fully tested and complied with the style guide before being pushed. To install, run

```sh
$ .hooks/setup
```

## The Barebone

This repository provides a number of configurations to help kick starting a project:
* .ignore files for [git](https://github.com/alvis/barebone-typescript/blob/master/.gitignore) and [npm](https://github.com/alvis/barebone-typescript/blob/master/.npmignore)
* configuration for [typescript](https://github.com/alvis/barebone-typescript/blob/master/tsconfig.json)
* handy [npm scripts](https://github.com/alvis/barebone-typescript/blob/master/package.json#L10) to be used during the life-cycle of the project
* code styles ([prettier](https://github.com/alvis/barebone-typescript/blob/master/.prettierrc.yaml) and [tslint](https://github.com/alvis/barebone-typescript/blob/master/tslint.json))
* testing with [jest](https://github.com/alvis/barebone-typescript/blob/master/package.json#L18)
* releasing with [standard-version](https://github.com/alvis/barebone-typescript/blob/master/package.json#L15)
* integration with [circleci](https://github.com/alvis/barebone-typescript/tree/master/.circleci) for style checking and testing
* local-testing [hooks](https://github.com/alvis/barebone-typescript/tree/master/.hooks) for code review before pushing to git

For each of the configurations, please refer to the corresponding documentation.

## Known Issues & Limitations
* If multiple commits are pushed together, the workflow defined on the circleci's config will only be triggered for the last commit. An API will be available soon, but we have to be patient.

Got an idea for workarounds for these issues? [Let the community know.](https://github.com/alvis/barebone-typescript/issues/new)

## About
This foundation is an opinionated foundation for a typescript project. It aims to eliminate potential hiccups during configurations and the time-consuming setup for a high-quality project. It is self-contained and fully-tested.

Having said that, while it fits my workflow and project requirement, it may not fit yours. Change whatever you think necessary to tailor-made your own foundation.

### Background

Coding is fun and enjoyable, ... until you start dealing with code quality. Here is a little background of this barebone project.

I'm a perfectionist. I love to pursuit quality over quick hack. For a high quality project, ideally you have automated unit testing, code review, updated dependencies and vulnerability check, etc. So,
during my coding journey, I have them set up one by one across many different projects. From time to time, I also played around different new things for a comparison with my existing setup. There were many hiccups on setting these things up, but they are fine as I am experienced.

But as my experience grow, so does the complexity of the setups. I have configurations setup in different repositories. Every time when I start a new project, I copy and paste these configurations from several old projects. I have to remember which configuration is the latest, and to make sure they are compatible and don't overlap with each other. So, often I hit the wall for not having these configuration in one central place. That's the reason why this project is born.

### Related Projects
* [TypeScript-Node-Starter](https://github.com/Microsoft/TypeScript-Node-Starter): A starter template for TypeScript and Node with a detailed README describing how to use the two together.
* [node-typescript-boilerplate](https://github.com/jsynowiec/node-typescript-boilerplate): A minimalistic project template to jump start a Node.js back-end application in TypeScript.

### License
Copyright © 2017, [Alvis Tang](https://github.com/alvis). Released under the [MIT License](LICENSE).
