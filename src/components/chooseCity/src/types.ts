export interface ICity {
  id: number,
  // 拼音
  spell: string,
  name: string
}

export interface IProvince {
  name: string,
  data: string[],
  id: string
}