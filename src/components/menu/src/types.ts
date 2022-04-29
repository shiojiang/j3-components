export interface MenuItem {
  name: string,
  index: number,
  icon?: string,
  // 导航子菜单
  children?: MenuItem[]
}