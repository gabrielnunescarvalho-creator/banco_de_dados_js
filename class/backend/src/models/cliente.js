class cliente{
    id; 
    nome;
    email;
    ativo; 

    constructor(id, nome, email){
        this.id = id; 
        this.nome = nome; 
        this.email = email; 
        this.ativo = true; 
    }
}

const c =new cliente(1, "Gabriel Nunes", "gabriel.nues@gmail.com");
console.log (c); 