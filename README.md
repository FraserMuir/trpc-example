```sh
$ npm i
$ npx eslint . # no errors
$ npx tsc -b
$ npx eslint . # no-unnecessary-condition reports an error
$ rm -rf out
$ npx eslint . # no errors
# enable EXPERIMENTAL_useSourceOfProjectReferenceRedirect in .eslintrc.yml
$ npx eslint . # no-unnecessary-condition reports an error
```
