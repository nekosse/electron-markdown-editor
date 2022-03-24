export interface SidebarItem {
  title: string
  path: string
  section: string
  icon: any
  selected: boolean
  iconOpened?: any
  iconClosed?: any
  subnav?: SidebarItem[]
}
