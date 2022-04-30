export function convertReais(value){
    var formato = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }
    return value.toLocaleString('pt-BR', formato);
}