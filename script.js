// Pedra - papael - tesoura

let pontUser = 0;
let pontMaquina = 0;

const RandomIntFromOneToThree = () => {
  let min = 1;
  let max = 3;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const CreatHtmlImg = (valeuImg) =>{
  let divPai = document.getElementById('result');
  let img = document.createElement('img');

  if(valeuImg === 'Papel' ){
    img.src = 'img/paper.png';
  }else if(valeuImg === 'Pedra'){
    img.src = 'img/rock.png';
  }else{
    img.src = 'img/scisor.png';
  }
  img.style.width= '200px';

  divPai.innerHTML = '';
  divPai.appendChild(img);
}

const associarValores = () =>{
  let valueRandom = RandomIntFromOneToThree();
  let retornoValue = '';
  switch (valueRandom){
    case 1:
      retornoValue = 'Pedra';
      break;
    case 2:
      retornoValue = 'Papel';
      break;
    case 3:
      retornoValue = 'Tesoura';
      break;
    default:
      break;
  };
  return retornoValue;
}

const pontosMaquina = (ponto) =>{
  let pai = document.getElementById('pontoMaquina');
  let valor = document.createTextNode(ponto);
  pai.innerHTML = '';
  pai.appendChild(valor);
}

const pontosUser = (ponto) =>{
  let pai = document.getElementById('pontoUser');
  let valor = document.createTextNode(ponto);
  pai.innerHTML = '';
  pai.appendChild(valor);
}

const LoserOrWiner = (content) =>{
  let pai = document.getElementById('Reposta');
  let filho1 = document.createElement('h2');
  let valor = document.createTextNode(content);

  if(content === 'Loser'){
    filho1.style.color = 'red';
  }else if(content === 'Winer'){
    filho1.style.color = 'blue';
  }else{
    filho1.style.color = 'green';
  }

  pai.innerHTML = '';
  filho1.appendChild(valor);
  pai.appendChild(filho1);
}

const VerificaResultado = (resultBtn, resultMaquina) =>{

  if(resultBtn === resultMaquina){
    pontosMaquina(pontMaquina += 1);
    pontosUser(pontUser += 1);
    LoserOrWiner('Empate');
    return 
  }
  
  if(resultBtn === 'Pedra'){
    if(resultMaquina === 'Papel'){
      pontosMaquina(pontMaquina += 1);
      LoserOrWiner('Loser');
    }else if(resultMaquina === 'Tesoura'){
      pontosUser(pontUser += 1);
      LoserOrWiner('Winer');
    }
  }else if(resultBtn == 'Papel'){
    if(resultMaquina === 'Tesoura'){
      pontosMaquina(pontMaquina += 1);
      LoserOrWiner('Loser');
    }else if(resultMaquina === 'Pedra'){
      pontosUser(pontUser += 1);
      LoserOrWiner('Winer');
    }
  }else{
    if(resultMaquina === 'Pedra'){
      pontosMaquina(pontMaquina += 1);
      LoserOrWiner('Loser');
    }else if(resultMaquina === 'Papel'){
      pontosUser(pontUser += 1);
      LoserOrWiner('Winer');
    }
  }
}

const btnPedra = document.getElementById('btnPedra');
btnPedra.addEventListener('click', function(){
  let btnValor = 'Pedra';
  let valorMaquina = associarValores();

  CreatHtmlImg(valorMaquina);
  VerificaResultado(btnValor,valorMaquina);

});

const btnPapel = document.getElementById('btnPapel');
btnPapel.addEventListener('click', function(){
  let btnValor = 'Papel';
  let valorMaquina = associarValores();
  CreatHtmlImg(valorMaquina);
  VerificaResultado(btnValor,valorMaquina);
});

const btnTesoura = document.getElementById('btnTesoura');
btnTesoura.addEventListener('click', function(){
  let btnValor = 'Tesoura';
  let valorMaquina = associarValores();
  CreatHtmlImg(valorMaquina);
  VerificaResultado(btnValor,valorMaquina);
});