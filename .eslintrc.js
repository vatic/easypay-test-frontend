module.exports = {
  "extends": "airbnb-base",
  // "extends": "react-app",
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jasmine": true
  },
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "parserOptions": {
    "ecmaFeatures": {
        "jsx": true,
        "modules": true
    }
  },
  "rules": {
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "function-paren-newline": "off",
    "class-methods-use-this": "off",
    "react/jsx-uses-vars": "error"
  },
};
