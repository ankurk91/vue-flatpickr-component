# Changelog

## [2.4.0](https://github.com/ankurk91/vue-flatpickr-component/compare/2.3.0...2.4.0)
- Fix UglifyJS issue

## [2.3.0](https://github.com/ankurk91/vue-flatpickr-component/compare/2.2.0...2.3.0)
- New way to use as plugin, old one is deprecated, see new [example](https://github.com/ankurk91/vue-flatpickr-component#as-plugin)
    - You should NOT import plugin like this
    - `import {flatPickrPlugin} from 'vue-flatpickr-component';`
- Add `id` prop

## [2.2.0](https://github.com/ankurk91/vue-flatpickr-component/compare/2.1.0...2.2.0)   
- Rollback importing css, component is no longer importing any css
    - This also applies when using this package as plugin `Vue.use()` 
              
## [2.1.0](https://github.com/ankurk91/vue-flatpickr-component/compare/2.0.0...2.1.0)  
- Expose ``install`` method, so that now you can use this package as a [plugin](https://vuejs.org/v2/guide/plugins.html)

## [2.0.0](https://github.com/ankurk91/vue-flatpickr-component/compare/1.2.4...2.0.0) (breaking)
- Rename `input-name` prop to `name`
- No longer support flatpickr v2.x, always pull v3.x
- No longer importing flatpickr css, you need to import css by yourself, see examples

## 1.2.4
- Improve value prop validation

## 1.2.3
- Add value prop validation

## 1.2.0
- Allow flatPickr v3.x stable
- Rename ``instance`` to ``fp``, if you were accessing it through ``$refs`` this may be a breaking change for you

## 1.1.3
- Regenerate build files

## 1.1.2
- Allow array of objects and date object as default value

## 1.1.0
- Make ``wrap`` optional
- From now, you need to wrap by your-self and pass ``config.wrap`` as true
- No longer force bootstrap, you are free to use any of CSS framework
 
## 1.0.0
- Initial release
