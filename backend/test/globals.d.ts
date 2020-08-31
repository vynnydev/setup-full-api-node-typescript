//Sobrescrevendo e adicionando uma variavel global de tipos
declare namespace NodeJS {
  interface Global {
    testRequest: import('supertest').SuperTest<import('supertest').Test>
  }
}