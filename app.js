// recuperer les div pour draggble, je ne sais pas comment l'optimiser
dragElement(document.getElementById("mouvement_un"));
dragElement(document.getElementById("mouvement_deux"));
dragElement(document.getElementById("mouvement_trois"));
dragElement(document.getElementById("mouvement_quattre"));
dragElement(document.getElementById("mouvement_cinq"));
dragElement(document.getElementById("mouvement_six"));
dragElement(document.getElementById("mouvement_sept"));
dragElement(document.getElementById("mouvement_huit"));
dragElement(document.getElementById("mouvement_neuf"));
dragElement(document.getElementById("mouvement_dix"));
// je ne sais pas comment plus l'optimiser,
function up(
  zIndex1,
  zIndex2,
  zIndex3,
  zIndex4,
  zIndex5,
  zIndex6,
  zIndex7,
  zIndex8,
  zIndex9,
  zIndex10
) {
  document.getElementById("mouvement_un").style.zIndex = zIndex1;
  document.getElementById("mouvement_deux").style.zIndex = zIndex2;
  document.getElementById("mouvement_trois").style.zIndex = zIndex3;
  document.getElementById("mouvement_quattre").style.zIndex = zIndex4;
  document.getElementById("mouvement_cinq").style.zIndex = zIndex5;
  document.getElementById("mouvement_six").style.zIndex = zIndex6;
  document.getElementById("mouvement_sept").style.zIndex = zIndex7;
  document.getElementById("mouvement_huit").style.zIndex = zIndex8;
  document.getElementById("mouvement_neuf").style.zIndex = zIndex9;
  document.getElementById("mouvement_dix").style.zIndex = zIndex10;
}

// inspiration de youtube et internet pour le dragabble
function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;

    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
// e ; étant l'élément courant, les informations disponible sur la page, sa position , le temps écoulter, les éléments cliquer etc.
