const canvas = new fabric.Canvas('myCanvas')

let tamanhoBloco = 30;

let steveX = 10;
let steveY = 10;

const larguraSteve = 100;

let steveObj, blocoObj;

addEventListener("keydown", teclaPressionada);

function steve() {
   fabric.Image.fromURL("player.png", (img) => {
      steveObj = img;
      steveObj.set({
        top : steveY ,
        left : steveX
      })
      steveObj.scaleToWidth(larguraSteve)
      canvas.add(steveObj);
   });
}

function criaBloco(bloco) {
    fabric.Image.fromURL(bloco, (img) => {
       blocoObj = img;
       blocoObj.set({
         top : steveY ,
         left : steveX
       })
       blocoObj.scaleToWidth(tamanhoBloco)
       canvas.add(blocoObj);
    });
 }

 steve();
// criaBloco("dirt.png");
// criaBloco("wood.jpg");

function teclaPressionada(e) {
   const tecla = e.code;
   console.log(tecla);

   const p = 10;

   if (e.shiftKey) {
      if(tecla === "Equal") {
         tamanhoBloco += p;
      } else if (tecla === "Minus" && tamanhoBloco > 10) {
         tamanhoBloco -= p;
      }
      mudaTamanho();
   }

   if(tecla === "KeyB"){
      criaBloco("./bricks.jpg")
   }else if(tecla === "KeyY") {
      criaBloco("./yellowBricks.png");
   }else if(tecla === "KeyD") {
      criaBloco("./dirt.png");
   }else if(tecla === "KeyK") {
      criaBloco("./darkGrass.png");
   }else if(tecla === "KeyL") {
      criaBloco("./lightGrass.png");
   }else if(tecla === "KeyG") {
      criaBloco("./glowstone.png");
   }else if(tecla === "KeyN") {
      criaBloco("./netherrack.jpg");
   }else if(tecla === "KeyS") {
      criaBloco("./stone.jpg");
   }else if(tecla === "KeyW") {
      criaBloco("./wood.jpg");
   }

  if (tecla === "ArrowUp" && steveY > 0) {
   anda(0, -p);
  } else if(tecla === "ArrowDown" && steveY < canvas.height - tamanhoBloco) {
   anda(0, p);
  } else if (tecla === "ArrowLeft" && steveX > 0) {
   anda(-p, 0);
} else if (tecla === "ArrowRight" && steveX < canvas.width - tamanhoBloco) {
     anda(p, 0);
  }
}

mudaTamanho()
function mudaTamanho() {
document.getElementById("larguraAtual").textContent = tamanhoBloco;
document.getElementById("alturaAtual").textContent = tamanhoBloco;
}

function anda(dx,dy) {
   steveX += dx; 
   steveY += dy;
   canvas.remove(steveObj);
   steve();
}