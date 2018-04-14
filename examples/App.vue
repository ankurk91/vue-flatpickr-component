<template>

  <section class="container">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <span class="navbar-brand mb-0">Vue-flatPickr Demo</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mobile-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="https://www.npmjs.com/package/vue-flatpickr-component"
               target="_blank"> npm</a></li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/ankurk91/vue-flatpickr-component"
               target="_blank"> Github</a></li>
        </ul>
      </div>
    </nav>
    <p class="mb-2"></p>
    <div class="row">
      <div class="col-md-8">

        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <button type="button" class="btn btn-secondary" @click.prevent="setNewDate()">
                Set new date
              </button>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <button type="button" class="btn btn-secondary" @click.prevent="updateConfig()">
                Reactive configs
              </button>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <button type="button" class="btn btn-secondary" @click.prevent="changeTheme()">
                Change theme
              </button>
            </div>
          </div>
        </div>

        <form class="card card-body" method="post" action="/" @submit.prevent="submit()">

          <div class="form-group">
            <label>Select date (basic)</label>
            <flat-pickr v-model="form.dateBasic" class="form-control" :config="configs.basic"></flat-pickr>
          </div>

          <div class="form-group">
            <label>Select date (wrap)</label>
            <div class="input-group">
              <flat-pickr v-model="form.date"
                          placeholder="Select date"
                          :config="configs.wrap"
                          :required="true"
                          @on-change="listenToOnChangeEvent"
                          class="form-control"
                          name="date-name"
                          ref="datePickerWrap"
              >
              </flat-pickr>
              <div class="input-group-append">
                <button class="btn btn-success" type="button" title="Toggle" data-toggle>
                  Toggle
                </button>
                <button class="btn btn-danger" type="button" title="Clear" data-clear>
                  Clear
                </button>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="datetime-input">Select datetime</label>
            <flat-pickr :config="configs.dateTimePicker" id="datetime-input" class="form-control"
                        v-model="form.dateTime"
                        placeholder="Date Time"></flat-pickr>
          </div>

          <div class="form-group">
            <label>Select time</label>
            <div class="input-group">
              <flat-pickr :config="configs.timePicker" class="form-control" v-model="form.time"
                          placeholder="Time"></flat-pickr>
              <div class="input-group-append">
                <button class="btn btn-secondary" type="button" title="Toggle" data-toggle>
                  Clock
                </button>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>Select date (localization)</label>
            <flat-pickr class="form-control" :config="configs.locale" v-model="form.dateLocale"></flat-pickr>
          </div>

          <div class="form-group">
            <label>Works in modals as well </label>
            <button type="button" class="btn btn-info" data-toggle="modal" data-target="#date-modal">Open in
              modal
            </button>
          </div>

          <div class="form-group">
            <label>Select date (inline)</label>
            <flat-pickr class="form-control" :config="configs.inline" v-model="form.dateInline"></flat-pickr>
          </div>

          <div class="form-group">
            <label>Select date (vee-validate)</label>
            <flat-pickr v-model="form.dateValidate"
                        name="date-of-birth"
                        v-validate="{required:true}"
                        placeholder="Date of birth"
                        class="form-control"
                        :class="{'is-invalid' : errors.has('date-of-birth')}"
            ></flat-pickr>
            <span v-show="errors.has('date-of-birth')" class="invalid-feedback">{{ errors.first('date-of-birth')
              }}</span>
          </div>

          <div class="form-group">
            <label>Select date (confirm plugin)</label>
            <flat-pickr class="form-control" :config="configs.confirmPlugin" v-model="form.dateConfirm"></flat-pickr>
          </div>

          <div class="form-group">
            <label>Select date (allow input <code>{{ configs.allowInput.dateFormat }}</code>)</label>
            <flat-pickr class="form-control" :config="configs.allowInput" v-model="form.allowInput"></flat-pickr>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Start date </label>
                <flat-pickr class="form-control" :config="configs.start" v-model="form.dateStart"
                            @on-change="onStartChange"></flat-pickr>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>End date </label>
                <flat-pickr class="form-control" :config="configs.end" v-model="form.dateEnd"
                            @on-change="onEndChange"></flat-pickr>
              </div>
            </div>
          </div>

          <hr>

          <div class="form-group">
            <button class="btn btn-primary" type="submit">Validate form</button>
          </div>

        </form>
      </div>

      <aside class="col-md-4">
        <div class="card">
          <div class="card-header">
            Links
          </div>
          <div class="card-body">
            <ul>
              <li><a href="https://github.com/ankurk91/vue-flatpickr-component" target="_blank">Github</a></li>
              <li><a href="https://www.npmjs.com/package/vue-flatpickr-component" target="_blank">npm</a></li>
              <li><a href="https://chmln.github.io/flatpickr" rel="noreferrer" target="_blank">Flatpickr docs</a></li>
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
    <div class="modal fade" id="date-modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal example</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form method="post" action="/" onsubmit="return false">
              <div class="form-group">
                <label>Select a date</label>
                <flat-pickr class="form-control" v-model="form.dateModal"></flat-pickr>
              </div>
              <pre>{{form.dateModal}}</pre>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Save</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  import Vue from 'vue';

  import flatPickr from '../src/index';
  // Need to add base css for flatpickr
  import 'flatpickr/dist/flatpickr.css';
  // l10n is optional
  import {Hindi} from 'flatpickr/dist/l10n/hi';

  // Plugins are optional
  // https://chmln.github.io/flatpickr/plugins/
  import ConfirmDatePlugin from 'flatpickr/dist/plugins/confirmDate/confirmDate';
  import 'flatpickr/dist/plugins/confirmDate/confirmDate.css';

  export default {
    name: 'app',
    data() {
      return {
        form: {
          dateBasic: null,
          dateTime: null,
          time: null,
          date: '2017-01-01',
          dateLocale: null,
          dateInline: +new Date(),
          dateModal: '',
          dateValidate: null,
          dateConfirm: null,
          allowInput: null,
          dateStart: null,
          dateEnd: null,
        },
        configs: {
          basic: {},
          wrap: {
            wrap: true,
            altFormat: 'M	j, Y',
            altInput: true,
            dateFormat: "Y-m-d",
            minDate: new Date()
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
          },
          confirmPlugin: {
            enableTime: true,
            // https://chmln.github.io/flatpickr/plugins/
            plugins: [new ConfirmDatePlugin()]
          },
          allowInput: {
            allowInput: true,
            dateFormat: 'Y-m-d'
          },
          start: {
            minDate: new Date(),
            maxDate: null
          },
          end: {
            minDate: null
          }
        },
      }
    },
    components: {
      flatPickr
    },
    methods: {
      setNewDate() {
        console.log('Set new date');
        this.form.dateBasic = new Date();
      },
      updateConfig() {
        console.log('Update config');
        // Right way to modify config runtime
        // https://vuejs.org/v2/api/#Vue-set
        this.$set(this.configs.basic, 'mode', 'range');
      },
      changeTheme() {
        require('flatpickr/dist/themes/material_red.css');
      },
      onChange(selectedDates, dateStr, instance) {
        console.log('Date change hook was called', dateStr);
      },
      listenToOnChangeEvent(selectedDates, dateStr, instance) {
        console.log('listen To OnChange Event', dateStr);
      },
      submit() {
        console.log('Form submit event', this.form);
        // http://vee-validate.logaretm.com/examples.html#component-example
        this.$validator.validateAll().then(result => {
          // eslint-disable-next-line
          alert(`Form validation result: ${result}`);
        });
      },
      onStartChange(selectedDates, dateStr, instance) {
        this.$set(this.configs.end, 'minDate', dateStr);
      },
      onEndChange(selectedDates, dateStr, instance) {
        this.$set(this.configs.start, 'maxDate', dateStr);
      }
    },
    mounted() {
      let flatPickrInstance = this.$refs.datePickerWrap.fp;
      // Do something with instance
      // https://chmln.github.io/flatpickr/instance-methods-properties-elements/
      console.log('instance', flatPickrInstance)
    }
  }
</script>
