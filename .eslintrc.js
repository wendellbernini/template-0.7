module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb-base', // Regras do Airbnb
    'plugin:prettier/recommended', // Integração com Prettier
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'], // Adiciona Prettier como plugin
  rules: {
    'prettier/prettier': 'error', // Marca como erro qualquer desvio das regras do Prettier
  },
};
