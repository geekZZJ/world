import { defineComponent } from 'vue'
import classes from './App.module.less'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'App',
  setup() {
    return () => {
      return <RouterView></RouterView>
    }
  },
})
