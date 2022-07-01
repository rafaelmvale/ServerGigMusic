interface ICreateUserDTO {
  name: string;
  email: string;
  whatsapp: string;
  password: string;
  id?: string;
  avatar?: string;

}

export { ICreateUserDTO }