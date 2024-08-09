# Codebase Contents
## Project Structure
```
.
├── abis
│   └── GaslessAnonAadhaarCrud.json
├── build
│   ├── GaslessAnonAadhaarCrud
│   │   ├── GaslessAnonAadhaarCrud.json
│   │   └── GaslessAnonAadhaarCrud.wasm
│   ├── schema.graphql
│   └── subgraph.yaml
├── codebase.md
├── codebase.sh
├── docker-compose.yml
├── generated
│   ├── GaslessAnonAadhaarCrud
│   │   └── GaslessAnonAadhaarCrud.ts
│   └── schema.ts
├── networks.json
├── package.json
├── schema.graphql
├── src
│   └── gasless-anon-aadhaar-crud.ts
├── subgraph.yaml
├── tests
│   ├── gasless-anon-aadhaar-crud-utils.ts
│   └── gasless-anon-aadhaar-crud.test.ts
├── tsconfig.json
└── yarn.lock

8 directories, 19 files
```

## File: ./package.json
```
{
  "name": "gasless-anon-aadhaar-crud",
  "license": "UNLICENSED",
  "scripts": {
    "codegen": "graph codegen",
    "build": "graph build",
    "deploy": "graph deploy --node https://api.studio.thegraph.com/deploy/ gasless-anon-aadhaar-crud",
    "create-local": "graph create --node http://localhost:8020/ gasless-anon-aadhaar-crud",
    "remove-local": "graph remove --node http://localhost:8020/ gasless-anon-aadhaar-crud",
    "deploy-local": "graph deploy --node http://localhost:8020/ --ipfs http://localhost:5001 gasless-anon-aadhaar-crud",
    "test": "graph test"
  },
  "dependencies": {
    "@graphprotocol/graph-cli": "0.80.0",
    "@graphprotocol/graph-ts": "0.32.0"
  },
  "devDependencies": { "matchstick-as": "0.5.0" }
}
```

## File: ./tsconfig.json
```
{
  "extends": "@graphprotocol/graph-ts/types/tsconfig.base.json",
  "include": ["src", "tests"]
}
```

