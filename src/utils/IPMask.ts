export default function IPMask(value: String) {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d{3})(\d{3})(\d{3})+$/, "$1.$2.$3.$4"); // separa os N° em 4 grupos de 3 digitos e coloca um "." entre eles
}

/*
 como a string que vem ad api está retornando um valor com vários números, 
 letras, e outros caracteres, troquei tudo pelos primeiros 4 grupos de 
 números, igual no design do figma, se têm algum código escondido não consegui
 descobrir ;-
 */