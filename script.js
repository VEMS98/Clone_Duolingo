let perguntas = [
{
    titulo :'Gato',
    alternativas:['Gat', 'Cat','Gate', 'Dog'],
    correta: 1
},
{
    titulo : 'Fire',
    alternativas: ['Fogo', 'Água','Ar', 'Terra'],
    correta: 0
},
{
    titulo : 'Bird',
    alternativas: ['Gato', 'Urubu','Pombo', 'Pássaro'],
    correta: 3
},
{
    titulo : 'Book',
    alternativas: ['Revista', 'Caderno','Livro', 'Jornal'],
    correta: 2
},
{
    titulo : 'Caneta',
    alternativas: ['Ruler', 'Pen','Pencil', 'Eraser'],
    correta: 1
},
{
    titulo : 'Borracha',
    alternativas: ['Ruler', 'Book','Eraser', 'Brush'],
    correta: 2
},
{
    titulo : 'Water',
    alternativas: ['Alho', 'Café','Rio', 'Água'],
    correta: 3
},
{
    titulo : 'Morango',
    alternativas: ['Strawberry', 'Banana','Apple', 'Grape'],
    correta: 0
},
{
    titulo : 'Red',
    alternativas: ['Azul', 'Verde','Vermelho', 'Amarelo'],
    correta: 2
},
{
    titulo : 'Cão',
    alternativas: ['Horse', 'Dog','Bird', 'Cat'],
    correta: 1
},
]

let app = {
start : function(){

this.Atualpos = 0;
this.Totalpontos = 0;

    let alts = document.querySelectorAll('.alternativa');
    alts.forEach((element,index)=>{
        element.addEventListener('click', ()=>{
      this.checaResposta(index);
        })
    })
this.atualizaPontos();
    app.mostraquestao(perguntas[this.Atualpos]);
},

mostraquestao: function(q){
    this.qatual =q;
    // mostrando o titulo
    let titleDiv = document.getElementById('titulo');
    titleDiv.textContent = q.titulo;
// mostrando as alternativas
    let alts = document.querySelectorAll('.alternativa');
    alts.forEach(function(element,index){
        element.textContent = q.alternativas[index];
        
    })

},

Proximaperg:function(){
this.Atualpos++;
if(this.Atualpos ==perguntas.length){
    this.Atualpos = 0;
}
},

checaResposta: function(user){
if(this.qatual.correta == user){
    console.log("Correta")
    this.Totalpontos++;
    this.mostraresposta();
}
else{
    console.log("Errada")
    this.mostraresposta();
}
this.atualizaPontos();

this.Proximaperg();
this.mostraquestao(perguntas[this.Atualpos]);
},

atualizaPontos: function(){
    let scoreDiv = document.getElementById('pontos');
    scoreDiv.textContent = `Sua pontuação : ${this.Totalpontos}`;
},

mostraresposta: function (correto){
    let resultDiv = document.getElementById('result');
    let result = ''
    //formatar como a mensagem será exibida
    if(correto == true){
        result = 'Resposta Correta';
    }
    else{
        // obtendo a questão ay=tual
        let pergunta = perguntas[this.Atualpos];
        // obtenha o indice da resposta correta da questão atual
        let cindice = pergunta.correta;
        // obtenha o texto da resposta correta da questão  atual
        let ctexto = pergunta.alternativas[cindice];
        result =  `Resposta Correta: ${ctexto}`;
    }
    resultDiv.textContent = result;
}


}

app.start ();