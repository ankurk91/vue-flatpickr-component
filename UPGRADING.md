# Upgrade guide

## From v9.x to v10.x

* If you have been using the plugin, you need to define the component manually now

```diff
import flatPickr from 'vue-flatpickr-component';
- app.use(flatPickr);
+ app.component('flat-pickr', flatPickr);
```

* If you have been consuming this component in web browser directly via CDN

```diff
- app.component('flat-pickr', VueFlatpickr);
+ app.component('flat-pickr', VueFlatpickr.default);
```
