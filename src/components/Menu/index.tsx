import { defineComponent, Fragment } from 'vue'
import { Document, Location } from '@element-plus/icons-vue'
import classes from './index.module.less'

const openedArr = ['1', '2']

interface SubMenuItem {
  id: string
  name: string
}

interface MenuItem {
  icon: JSX.Element
  name: string
  id: string
  subMenus: Array<SubMenuItem>
}

function returnTitleSlot(item: MenuItem) {
  return {
    title: () => {
      return (
        <Fragment>
          <el-icon>{item.icon}</el-icon>
          <span>{item.name}</span>
        </Fragment>
      )
    }
  }
}

const menus = [
  {
    id: '1',
    name: '长颈鹿',
    icon: <Location></Location>,
    subMenus: [
      {
        id: '1-1',
        name: '子菜单1'
      },
      {
        id: '1-2',
        name: '子菜单2'
      }
    ]
  },
  {
    id: '2',
    name: '短吻鳄',
    icon: <Document></Document>,
    subMenus: [
      {
        id: '2-1',
        name: '子菜单1'
      },
      {
        id: '2-2',
        name: '子菜单2'
      }
    ]
  }
]

export default defineComponent({
  name: 'IMenu',
  setup() {
    return () => (
      <el-menu default-openeds={openedArr} class={classes.menu}>
        {menus.map((item) => {
          return (
            <el-sub-menu index={item.id} v-slots={returnTitleSlot(item)}>
              {item.subMenus.map((sub) => {
                return <el-menu-item index={sub.id}>{sub.name}</el-menu-item>
              })}
            </el-sub-menu>
          )
        })}
      </el-menu>
    )
  }
})
