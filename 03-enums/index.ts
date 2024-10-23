/* enum Colors {
  Red,
  Green,
  Blue,
}

// Podemos percorrer o enum usando o for
for (const key in Colors) {
  console.log(key);
}

function showColor(color) {
  console.log(key);
}

showColor(Colors.Blue);

enum UserResponse {
  No = 0,
  Yes = 1,
}

function respondedEmail(recipient: string, UserResponse: UserResponse): void {
  // ...salvar no banco se o usuário respondeu ou não
}

respondedEmail("Caroline", UserResponse.Yes); */

/* enum TradeType {
  ACAO = 9281,
  TESOURO_DIRETO = 3221, 
  TESOURO_SELIC = 6554,
}

function saveTrade(type) {
  console.log(key)
} */

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
}

StatusCodes.OK;

const ok = StatusCodes.OK; // 200
const badRequest = StatusCodes.BadRequest; // 400
const indexOk = StatusCodes["OK"]; // 200
const stringBadRequest = StatusCodes[400]; // BadRequest
