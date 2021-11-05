**Xin vui lòng đọc hướng dẫn trước khi sử dụng**

> Đây chỉ là library dùng để căn chỉnh đầu ra trên terminal.

```
  npm install center-terminal-output
```

> **Sau đây là cách dùng:**

```javascript
  var { align } = require('center-terminal-output')

  console.log(align('Hello world', 'left')) // đoạn text này dc căn lề trái
  console.log(align('Hello world', 'left', 12)) // đoạn text này dc căn lề trái với 12 lần nhấn space
  console.log(align('Hello world', 'left', 36)) // đoạn text này dc căn lề trái với 36 lần nhấn space

  console.log('\n')
  console.log("=".repeat(60))
  console.log('\n')

  console.log(align('Hello world', 'right')) // đoạn text này dc căn lề phải
  console.log(align('Hello world', 'right', 12)) // đoạn text này dc căn lề phải với 12 lần nhấn space
  console.log(align('Hello world', 'right', 36)) // đoạn text này dc căn lề phải với 36 lần nhấn space

  console.log('\n')
  console.log("=".repeat(60))
  console.log('\n')

  console.log(align('Text in justified mode', 'center')) // đoạn text này dc căn chính giữa

  console.log('\n')
  console.log("=".repeat(60))
  console.log('\n')

  // đoạn text này sẽ bị lỗi vì kết hợp kiểu center và indent lại sẽ cause error
  console.log(align('Hello world', 'center', 1)) 
```

> Nếu có sai sót gì xin vui lòng post issue lên để mình còn kịp fix lại. thanks

