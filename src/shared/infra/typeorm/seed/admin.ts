import { hash } from "bcrypt";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";


async function create() {
  const connection  = await createConnection("localhost");

  const id = uuidV4();
  const password = await hash("admin",8);

  await connection.query(
      `INSERT INTO USERS (id, name, email, whatsapp, password, created_at)
        values('${id}', 'Rodrigo Bighetti', 'robighetti@gmail.com', '19999828057', '${password}', 'now()')
    `
  );
  await connection.close();
}

create().then(() => console.log("User admin created"));