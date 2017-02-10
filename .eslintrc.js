/**
 * Created by gaoletian on 17/2/11.
 */
module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  "extends": "airbnb-base",
  "globals": {
    "Promise": true
  },
  "rules": {
    "semi": ["error", "always"], // 必须使用 ';' 号结尾
    "one-var": ["error", "never"],
    "comma-dangle": ["error", { // 结尾逗号 ','
      "arrays": "never",
      "objects": "always",
      "imports": "never",
      "exports": "never",
      "functions": "never",
    }]
  }
}
