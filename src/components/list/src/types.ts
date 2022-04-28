// 约束列表每一项
export interface ListItem {
  avatar?: string,
  title?: string,
  desc?: string,
  time?: string,
  tag?: string,
  tagType?: '' | 'success' | 'info' | 'warning' | 'danger'
}

// 约束列表选项
export interface ListOptions {
  // tab栏title
  title: string,
  // 列表每一项
  content: ListItem[]
}

// 约束底部的操作选项
export interface ActionOptions {
  text: string,
  icon: string
}