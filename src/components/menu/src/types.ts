export interface MenuItem {
  name: string,
  index: number,
  icon?: any,
  // JSX中处理后的icon
  iicon?: any,
  // 导航子菜单
  children?: MenuItem[]
}