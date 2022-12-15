# Configuration de typescript

### Principaux modules

`npm i -D concurrently @types/debug @types/node @types/express @types/pg @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint typescript debug`

`npm i dotenv express pg helmet express-session ajv bcrypt jsonwebtoken`

**Creer un dossier `src` , un fichier `tsconfig.json` et un fichier `eslintrc.cjs`**

---

### Les tests

`npm i --save-dev jest @types/jest ts-jest`

_Creer un fichier `jest.config.js`_

```javascript
module.exports = {
  transform: { '^.+\\.ts$': 'ts-jest' },
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['**/test/**/*.test.(ts|js)'],
  testEnvironment: 'node',
};
```

---

## Fichier tsconfig.json

```javascript
{
  "compilerOptions": {
    "module": "ES6",
    "esModuleInterop": true,
    "outDir": "dist",
    "target": "es6",
    "strict": true,
    // ajouter apres cette erreur TypeScript error in C:/proj/node_modules/@types/babel__core/index.ts
    "moduleResolution": "node"
  },
  "include": [
    "src/**/*"
  ],
  "exclude": ["node_modules"],
  "lib": ["es2015"],
  "compileOnSave": true
}
```

## Scripts

```javascript
  "scripts": {
    "dev": "concurrently -k -n \"Typescript,Node\" -p \"[{name}]\" -c \"blue,green\" \"tsc --watch\" \"nodemon dist/index.js\"",
    "start": "tsc && node dist/index.js",
    "test": "jest --verbose",
    "test-watch": "jest --verbose --watchAll",
  }
```
