function contar() {
    let ini = document.getElementById('txtinicio');
    let fim = document.getElementById('txtfim');
    let passo = document.getElementById('txtpulo');
    let res = document.getElementById('resultado');
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar...';
        window.alert('[ERRO] Faltam dados!');
    } else {
        res.innerHTML = 'Contando: <br>';
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p <= 0) {
            window.alert('Passo invalido! Considerando PASSO 1');
            p = 1;
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`;
            }
        } else {
                // Contagem descrescente
            for (let c = i; c >= f; c-= p) {
                res.innerHTML += `${c} \u{1F449}`;
            }
        }
        res.innerHTML += (`\u{1F3C1}`)

    }
}