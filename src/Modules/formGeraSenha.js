
import geraSenha from "./geradores";

const campoSenhaGerada = document.getElementById('campo-senha-gerada');
const qtdCaracteres = document.getElementById('qnt-caracteres');
const chkMai = document.getElementById('let-maisc');
const chkMin = document.getElementById('let-min');
const chkNum = document.getElementById('add-num');
const chkSimbol = document.getElementById('simbol');
const btnGeraSenha = document.getElementById('btn-gera');

export default () => {
    btnGeraSenha.addEventListener('click', (e) => {
        e.preventDefault();
        let senha = geraSenha(qtdCaracteres.value, chkMai.checked, chkMin.checked, chkNum.checked, chkSimbol.checked);
        campoSenhaGerada.innerHTML = String(senha);
    });
};
