import bForm from './form'
import bFormRow from './form-row'
import bFormText from './form-text'
import bFormInvalidFeedback from './form-invalid-feedback'
import bFormValidFeedback from './form-valid-feedback'
import { registerComponents, vueUse } from '../../utils'

/* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */

const components = {
  bForm,
  bFormRow,
  bFormText,
  bFormInvalidFeedback,
  bFormFeedback: bFormInvalidFeedback,
  bFormValidFeedback
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
