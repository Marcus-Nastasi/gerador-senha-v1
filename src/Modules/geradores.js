
const criaNumero = () => String.fromCharCode(Math.round(Math.random() * (57 - 48) + 48));
const criaMaiuscula = () => String.fromCharCode(Math.round(Math.random() * (90 - 65) + 65));
const criaMinuscula = () => String.fromCharCode(Math.round(Math.random() * (122 - 97) + 97));
const criaSimbolo = () => { 
    let simbolos = ',.;~*&%$#@+=-!^'; 
    return simbolos[Math.round(Math.random() * (simbolos.length))];
};

export default function geraSenha(qtd, mai, min, num, simbol) {
    // flags
    let senhaArray = [];
    qtd = Number(qtd);

    for(let i = 0; i < qtd; i++) {
        mai && senhaArray.push(criaMaiuscula());
        min && senhaArray.push(criaMinuscula());
        num && senhaArray.push(criaNumero());
        simbol && senhaArray.push(criaSimbolo());
    }

    senhaArray = senhaArray.join('').slice(0, qtd);
    return senhaArray || 'Nada selecionado';
}
