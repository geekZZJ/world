import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import './style/index.css'
import classes from './App.module.less'
import Menu from './components/Menu'

export default defineComponent({
  name: 'App',
  setup() {
    return () => {
      return (
        <el-container class={classes.container}>
          <el-header class={classes.header}>
            <img src="/vite.svg" alt="logo" class={classes.logo} />
            <span class={classes.title}>zzj的小站</span>
          </el-header>
          <el-container>
            <el-aside class={classes.aside}>
              <Menu></Menu>
            </el-aside>
            <el-main>
              <RouterView></RouterView>
            </el-main>
          </el-container>
        </el-container>
      )
    }
  },
})
