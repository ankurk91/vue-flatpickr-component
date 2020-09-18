<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark shadow-sm mb-3">
      <span class="navbar-brand mb-0">Vue-flatPickr Demo</span>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/ankurk91/vue-flatpickr-component"
             target="_blank">GitHub</a></li>
      </ul>
    </nav>

    <main class="container">
      <div class="row">
        <div class="col-md-8">
          <section class="card mb-3">
            <div class="card-body">
              <form class="form-inline">
                <button type="button" class="btn btn-secondary mr-2" @click.prevent="setNewDate">
                  Set new date
                </button>
                <button type="button" class="btn btn-secondary mx-2" @click.prevent="updateConfig">
                  Reactive configs
                </button>
                <button type="button" class="btn btn-secondary mx-2" @click.prevent="changeLocale">
                  Change locale
                </button>
              </form>
            </div>
          </section>

          <form class="card card-body mb-3" method="post" action="/" @submit.prevent="submit()" novalidate>

            <div class="form-group">
              <label>Select date (basic)</label>
              <flat-pickr v-model="form.dateBasic"
                          class="form-control"
                          :config="configs.basic">
              </flat-pickr>
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
                            :disabled="inputDisabled"
                            ref="datePickerWrap">
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
              <label>Select datetime</label>
              <flat-pickr :config="configs.dateTimePicker"
                          id="datetime-input"
                          class="form-control"
                          v-model="form.dateTime"
                          placeholder="Date Time">
              </flat-pickr>
            </div>

            <div class="form-group">
              <label>Select time</label>
              <div class="input-group">
                <flat-pickr :config="configs.timePicker"
                            class="form-control"
                            v-model="form.time"
                            placeholder="Time">
                </flat-pickr>
                <div class="input-group-append">
                  <button class="btn btn-secondary" type="button" title="Toggle" data-toggle>
                    Clock
                  </button>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label>Select date (localization)</label>
              <flat-pickr
                class="form-control"
                :config="configs.locale"
                v-model="form.dateLocale">
              </flat-pickr>
            </div>

            <div class="form-group">
              <label>Select date (inline)</label>
              <flat-pickr class="form-control"
                          :config="configs.inline"
                          v-model="form.dateInline">
              </flat-pickr>
            </div>

            <div class="form-group">
              <label>Select date (confirm plugin)</label>
              <flat-pickr class="form-control"
                          :config="configs.confirmPlugin"
                          v-model="form.dateConfirm">
              </flat-pickr>
            </div>

            <div class="form-group">
              <label>Select date (allow input <code>{{ configs.allowInput.dateFormat }}</code>)</label>
              <flat-pickr class="form-control"
                          :config="configs.allowInput"
                          v-model="form.allowInput">
              </flat-pickr>
            </div>

            <div class="form-group">
              <label>Month picker plugin</label>
              <flat-pickr class="form-control"
                          :config="configs.monthSelect"
                          v-model="form.monthSelect">
              </flat-pickr>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Start date </label>
                  <flat-pickr class="form-control"
                              :config="configs.start"
                              v-model="form.dateStart"
                              @on-change="onStartChange">
                  </flat-pickr>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>End date </label>
                  <flat-pickr class="form-control"
                              :config="configs.end"
                              v-model="form.dateEnd"
                              @on-change="onEndChange">
                  </flat-pickr>
                </div>
              </div>
            </div>

            <hr>

            <div class="form-group">
              <button class="btn btn-primary" type="submit">Submit form</button>
            </div>

          </form>
        </div>

        <aside class="col-md-4 mb-3">
          <div class="card">
            <div class="card-header">
              Links
            </div>
            <div class="card-body">
              <ul>
                <li><a href="https://github.com/ankurk91/vue-flatpickr-component" target="_blank">Github</a></li>
                <li><a href="https://www.npmjs.com/package/vue-flatpickr-component" target="_blank">npm</a></li>
                <li><a href="https://flatpickr.js.org/" rel="noreferrer" target="_blank">Flatpickr docs</a></li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </main>
    <footer class="text-center text-muted small mb-3">
      Created by <a href="https://twitter.com/ankurk91" target="_blank" rel="noopener">@ankurk91</a>
    </footer>
  </div>
</template>

<script>
import flatpickr from "flatpickr";
// Init component
import flatPickrComponent from '../src/index.js';
// Need to add base css for flatpickr
import 'flatpickr/dist/flatpickr.min.css';
// l10n is optional
import {Hindi as HindiLocale} from 'flatpickr/dist/l10n/hi.js';
import {english as EnglishLocale} from 'flatpickr/dist/l10n/default.js'
// Plugins are optional
// https://chmln.github.io/flatpickr/plugins/
import ConfirmDatePlugin from 'flatpickr/dist/plugins/confirmDate/confirmDate.js';
import 'flatpickr/dist/plugins/confirmDate/confirmDate.css';
import monthSelectPlugin from 'flatpickr/dist/plugins/monthSelect/index.js'
import 'flatpickr/dist/plugins/monthSelect/style.css'

// Override Global settings
flatpickr.setDefaults({
  disableMobile: true,
  onClose: () => {
    console.log("close event from global config")
  }
});

export default {
  name: 'app',
  data() {
    return {
      inputDisabled: false,
      form: {
        dateBasic: null,
        dateTime: null,
        time: null,
        date: '2017-01-01',
        dateLocale: null,
        dateInline: +new Date(),
        dateConfirm: null,
        allowInput: null,
        dateStart: null,
        dateEnd: null,
        monthSelect: null,
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
          locale: HindiLocale,
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
        },
        monthSelect: {
          plugins: [
            new monthSelectPlugin({
              shorthand: true,
              dateFormat: "m/Y",
            })
          ]
        }
      },
    }
  },
  components: {
    flatPickr: flatPickrComponent
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
      this.configs.basic.mode = 'range';
    },
    changeLocale() {
      console.log('Changing locale to english');
      this.configs.locale.locale = EnglishLocale
    },
    onChange(selectedDates, dateStr, instance) {
      console.log('Date change hook was called', dateStr);
    },
    listenToOnChangeEvent(selectedDates, dateStr, instance) {
      console.log('listen To OnChange Event', dateStr);
    },
    submit() {
      console.log('Form submit event', this.form);
    },
    onStartChange(selectedDates, dateStr, instance) {
      this.configs.end.minDate = dateStr
    },
    onEndChange(selectedDates, dateStr, instance) {
      this.configs.start.maxDate = dateStr
    }
  },
  mounted() {
    //
  }
}
</script>
