// 复制文本
import { ElMessage } from "element-plus"
export const useCopy = (text: string) => {
  // 创建input标签 赋值 追加到body 选择输入框 复制操作 删除输入框
  const input = document.createElement('input')
  input.value = text
  document.body.appendChild(input)
  input.select()
  document.execCommand('Copy')
  document.body.removeChild(input)
  ElMessage.success('复制成功')
}