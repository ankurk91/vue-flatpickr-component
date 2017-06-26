<template>
  <section class="container">
    <h1 class="page-header">Vue.js flatPicker examples</h1>
    <div class="row">
      <div class="col-md-8">

        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <button type="button" class="btn btn-default" @click.prevent="setNewDate()">
                Set new date programmatically
              </button>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <button type="button" class="btn btn-default" @click.prevent="updateConfig()">
                Reactive configs (Change mode)
              </button>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <button type="button" class="btn btn-default" @click.prevent="changeTheme()">
                Change theme
              </button>
            </div>
          </div>
        </div>

        <form method="post" action="/" @submit.prevent="submit()">

          <div class="form-group">
            <label>Select date (basic)</label>
            <flat-pickr v-model="form.dateBasic" :config="configs.basic"></flat-pickr>
          </div>

          <div class="form-group">
            <label>Select date (wrap)</label>
            <div class="input-group">
              <flat-pickr v-model="form.date"
                          placeholder="Select date"
                          :config="configs.wrap"
                          :required="true"
                          input-class="date-input-class"
                          name="date-name"
              >
              </flat-pickr>
              <div class="input-group-btn">
                <button class="btn btn-default" type="button" title="Toggle" data-toggle>
                  <i class="glyphicon glyphicon-calendar"><span aria-hidden="true" class="sr-only">Toggle</span></i>
                </button>
                <button class="btn btn-default" type="button" title="Clear" data-clear>
                  <i class="glyphicon glyphicon-remove"><span aria-hidden="true" class="sr-only">Clear</span></i>
                </button>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>Select datetime</label>
            <flat-pickr :config="configs.dateTimePicker" v-model="form.dateTime" placeholder="Date Time"></flat-pickr>
          </div>

          <div class="form-group">
            <label>Select time</label>
            <div class="input-group">
              <flat-pickr :config="configs.timePicker" v-model="form.time" placeholder="Time"></flat-pickr>
              <div class="input-group-btn">
                <button class="btn btn-default" type="button" title="Toggle" data-toggle>
                  <i class="glyphicon glyphicon-time"><span aria-hidden="true" class="sr-only">Toggle</span></i>
                </button>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>Select date (localization)</label>
            <flat-pickr :config="configs.locale" v-model="form.dateLocale"></flat-pickr>
          </div>

          <div class="form-group">
            <label>Works in modals as well </label>
            <button type="button" class="btn btn-info" data-toggle="modal" data-target="#date-modal">Open in
              modal
            </button>
          </div>

          <div class="form-group">
            <label>Select date (inline)</label>
            <flat-pickr :config="configs.inline" v-model="form.dateInline"></flat-pickr>
          </div>

          <div class="form-group" :class="{'has-error' : errors.has('date-of-birth')}">
            <label>Select date (vee-validate)</label>
            <flat-pickr v-model="form.dateValidate"
                        name="date-of-birth"
                        v-validate="{required:true}"
                        placeholder="Date of birth"
            ></flat-pickr>
            <span v-show="errors.has('date-of-birth')" class="help-block">{{ errors.first('date-of-birth') }}</span>
          </div>

          <hr>
          <button class="btn btn-primary" type="submit">Validate form</button>

        </form>
      </div>
      <aside class="col-md-4">
        <div class="panel panel-info">
          <div class="panel-heading">
            Links
          </div>
          <div class="panel-body">
            <ul>
              <li><a href="https://github.com/ankurk91/vue-flatpickr-component" target="_blank">Github</a></li>
              <li><a href="https://www.npmjs.com/package/vue-flatpickr-component" target="_blank">npm</a></li>
              <li><a href="https://chmln.github.io/flatpickr" rel="noreferrer" target="_blank">Flatpickr</a></li>
              <li><a
                href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en"
                rel="noreferrer" target="_blank">Vue.js Dev tools</a></li>
              <li><a href="https://github.com/logaretm/vee-validate" target="_blank">vee-validate</a></li>
            </ul>
          </div>
        </div>
      </aside>
    </div>

    <!-- bs modal -->
    <div class="modal fade" tabindex="-1" role="dialog" id="date-modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
              aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Modal example</h4>
          </div>
          <div class="modal-body">
            <form method="post" action="/" onsubmit="return false">
              <div class="form-group">
                <label>Select a date</label>
                <flat-pickr v-model="form.dateModal"></flat-pickr>
              </div>
              <pre>{{form.dateModal}}</pre>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">Save</button>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script type="text/javascript">
  import flatPickr from '../src/index';

  // l10n is optional
  const Hindi = require("flatpickr/dist/l10n/hi.js").hi;

  export default {
    name: 'app',
    data (){
      return {
        form: {
          dateBasic: new Date(),
          dateTime: null,
          time: null,
          date: '2017-01-01',
          dateLocale: null,
          dateInline: null,
          dateModal: '',
          dateValidate: null,
        },
        configs: {
          basic: {},
          wrap: {
            wrap: true,
            altFormat: 'M	j, Y',
            altInput: true,
            dateFormat: "Y-m-d",
          },
          timePicker: {
            wrap: true,
            enableTime: true,
            enableSeconds: true,
            noCalendar: true
          },
          dateTimePicker: {
            enableTime: true,
            dateFormat: 'd-m-Y H:i'
          },
          locale: {
            // https://chmln.github.io/flatpickr/localization/
            locale: Hindi,
            // https://chmln.github.io/flatpickr/events/
            onChange: this.onChange
          },
          inline: {
            inline: true
          }
        },
      }
    },
    components: {
      flatPickr
    },
    methods: {
      setNewDate(){
        console.log('Set new date');
        this.form.dateBasic = '2018-12-01';
      },
      updateConfig(){
        console.log('Update config');
        this.configs.basic = {
          mode: 'range',
        };
      },
      changeTheme(){
        require('flatpickr/dist/themes/material_blue.css');
      },
      onChange (selectedDates, dateStr, instance) {
        console.log('Date change hook was called');
      },
      submit () {
        console.log('Form submit event');
        console.log(this.form);
        // http://vee-validate.logaretm.com/examples.html#component-example
        this.$validator.validateAll().then(result => {
          // eslint-disable-next-line
          alert(`Form validation result: ${result}`);
        });
      }
    }
  }
</script>
