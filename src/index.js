/*
 * (C) Copyright 2017 Bombardier Transportation.
 *
 * All rights reserved. This program and the accompanying materials are
 * made available under the terms of the MIT and is available at
 * https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Developer: Karl Linden (klinden)
 */

import component from './vue-flatpickr.vue';

const flatPickrPlugin = {
  install: function (Vue, options) {
    Vue.component('flat-pickr', component);
  }
};

component.install = flatPickrPlugin.install;

export default component;
export {component, flatPickrPlugin};
