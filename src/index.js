import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
var br = 0;
var e = ["ana", "milovana", "banana", "ivana"];
for (var i = 0; i < e.length; i++) {
  for (var j = 0; j < e[i].length - 2; j++) {
    var t = e[i][j] + e[i][j + 1] + e[i][j + 2];

    if (t.toLowerCase() === "ana") br++;
  }
}
console.log(br);
//Opet koristim imperativnu jer mi je tako najlakse pisat (dosad u zivotu vise manje uvijek imperativna, iako to tada nisam znao), a smatram da si od ova 4 "zadacica" mogu priustit da 2 budu u imperativnoj, iako smatram da su rjesenja imperativnom "bezvezna" i "vec videna"
