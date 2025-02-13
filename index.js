//let xp = 0;
//let nivelHeroi = 0;

function mostraNivelHeroi() {
  const inputName = document.getElementById("inputName").value;
  const inputXp = Number(document.getElementById("inputXp").value);

  let nivel;

  if (inputXp < 1000) {
    nivel = "Ferro";
  } else if (inputXp >= 1001 && inputXp <= 2000) {
    nivel = "Bronze";
  } else if (inputXp >= 2001 && inputXp <= 5000) {
    nivel = "Prata";
  } else if (inputXp >= 5001 && inputXp <= 7000) {
    nivel = "Ouro";
  } else if (inputXp >= 7001 && inputXp <= 8000) {
    nivel = "Platina";
  } else if (inputXp >= 8001 && inputXp <= 9000) {
    nivel = "Ascendente";
  } else if (inputXp >= 9001 && inputXp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  const nivelDoHeroi = `O herói ${inputName} com ${inputXp} de XP está no nível ${nivel}!`;
  document.getElementById("nivelDoHeroi").value = nivelDoHeroi;
}
