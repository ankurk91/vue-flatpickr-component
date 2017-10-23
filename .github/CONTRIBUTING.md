# Contributing

### Issue reporting
* If the issue is related to flatPickr then report that issue on [flatpickr](https://github.com/chmln/flatpickr/issues) repo instead
    - Issues those are related to flatPickr may be closed without any reason
* Follow ISSUE_TEMPLATE  


### Pull requests guidelines
* Checkout a topic branch from the relevant branch, and merge back against that branch.
* It's OK to have multiple small commits as you work on the PR - we will let GitHub automatically squash it before merging.
* Work in ``src`` folder never touch or commit in ``dist`` folder


### Development setup
* You will need [node-js](http://nodejs.org/) v6.10+ and [yarn](https://yarnpkg.com/en/docs/install) v1.x
* After cloning the repo, run:
```
yarn install
```
* Make changes in ``src`` folder
* Write/update test case for the feature/fix you made 
* You can check if everything is working fine by running tests
```
yarn test
```
