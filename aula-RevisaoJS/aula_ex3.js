

const pessoa = {
    nomeUsuario: 'layomendes',
    idade: 19,
    email: 'layomendes@unipam.edu.br',
    usuario: 'aluno',
    saudar: function(nomeUsuario, usuario){
        return 'Oi, meu nome é ' + this.nomeUsuario + ' e eu sou um ' + this.usuario + '.';
    }

}

console.log(pessoa.nomeUsuario);
console.log(pessoa.saudar("layo"));