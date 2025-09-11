export type FormState = {
  basic: {
    nome: string;
    categoria: string;
    fotoUrl: string;
  };
  details: {
    telefone: string;
    whatsapp: string;
    instagram: string;
    endereco: string;
    bairro: string;
    cep: string;
    entrega: string;
    horarioAbertura: string;
    horarioFechamento: string;
  };
  account: {
    email: string;
    senha: string;
    confirmarSenha: string;
    termosUso: boolean;
  };
}