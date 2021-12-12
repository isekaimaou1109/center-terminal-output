import { ModuleExports } from './types'

const func: ModuleExports = {
  align(string: string, type: string | null = null, indent: number = 0) {
    var width: number = process.stdout.columns
    var newText: string;
  
    if(indent > 0 && type == 'center') {
      return new Error('Do not use type \"type\" is \"center\" when set \"indent\" parameter is higher than 0')
    }
  
    if(type == 'center') {
      newText = ' '.repeat(Math.floor((width - string.length) / 2)) + string + ' '.repeat(Math.floor((width - string.length) / 2))
      return newText
    }
  
    if(type == 'right') {
      newText = ' '.repeat(width - string.length - indent) + string + ' '.repeat(indent)
      return newText
    }
  
    if(type == 'left') {
      newText = ' '.repeat(indent) + string
      return newText
    }
  }
}

module.exports = func;