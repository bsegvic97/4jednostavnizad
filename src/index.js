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
