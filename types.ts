enum TextType {
  CENTER = 'center',
  RIGHT = 'right',
  LEFT = 'left'
}

export interface ModuleExports {
  align: (string: string, type: TextType, indent: number) => string | Error;
}