[toc]

[[_TOC_]]

---

# mygo 面試題
職位: WEB資深全端工程師

## (1) Node.js 試題
https://pastebin.com/2DfQQtuX

內容我複製如下:
```js
/**
 * Please use TypeScript/JS to answer question
 * Welcome to answer with unit testing code if you can
 *
 * After you finish coding, please push to your GitHub account and share the link with us.
 */
 
// Please write a function to reverse the following nested input value into output value
 
// Input:
let inputValue = {
  hired: {
    be: {
      to: {
      	deserve: 'I'
      }
    }
  }
};
 
// Output:
let outputValue = {
  I: {
    deserve: {
      to: {
         be: 'hired'
      }
    }
  }
};
```

最終我寫了兩個版本，第一版是recursive，第二版是iterative。最終採用第二版

## (2) 請針對您回覆試題的部份，撰寫單元測試 (Unit Test)，測試涵蓋率 (Test Coverage) 大於 90 %

預計使用`jest`

# 展示方式
- `npm start`: 執行程式
- `npm test`: 執行單元測試
- `npm run coverage`: 顯示測試覆蓋率