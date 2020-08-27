const str = `<ul>
  <li data-time="5:17">Flexbox Video</li>
  <li data-time="8:22">Flexbox Video</li>
  <li data-time="3:34">Redux Video</li>
  <li data-time="5:23">Flexbox Video</li>
  <li data-time="7:12">Flexbox Video</li>
  <li data-time="7:24">Redux Video</li>
  <li data-time="6:46">Flexbox Video</li>
  <li data-time="4:45">Flexbox Video</li>
  <li data-time="4:40">Flexbox Video</li>
  <li data-time="7:58">Redux Video</li>
  <li data-time="11:51">Flexbox Video</li>
  <li data-time="9:13">Flexbox Video</li>
  <li data-time="5:50">Flexbox Video</li>
  <li data-time="5:52">Redux Video</li>
  <li data-time="5:49">Flexbox Video</li>
  <li data-time="8:57">Flexbox Video</li>
  <li data-time="11:29">Flexbox Video</li>
  <li data-time="3:07">Flexbox Video</li>
  <li data-time="5:59">Redux Video</li>
  <li data-time="3:31">Flexbox Video</li>
</ul>`;

console.log('Comienzo el procesamiento del texto..')
const arrayOfElements = str.split('\n');
const reduxElementsArray = arrayOfElements.filter(x => x.includes('Redux Video'));
const searchValue = "data-time";

let minutes = 0;
let seconds = 0;
reduxElementsArray.forEach(x => {
  console.log('Elemento', x);
  let dataTimeString = x.substring(x.indexOf(searchValue) + searchValue.length + 2, x.lastIndexOf("\""))
  console.log('Tiempo del elemento:' ,dataTimeString);
  let dataTime = dataTimeString.split(':');
  console.log('Minutos:', dataTime[0]);
  console.log('Segundos:', dataTime[1]);

  minutes += Number.parseInt(dataTime[0]);
  seconds += Number.parseInt(dataTime[1]);
})
console.log('Finalizo el procesamiento del texto..')
console.log('RESULTADO:', seconds + (minutes * 60))

// obtener el total de segundos de todos los videos del tipo 'Redux Video'
// pistas: convertirlo en objetos
// Vale por el primer parcial
// Fecha de entrega: Domingo 30 AGO 23:59
// Fecha de solucio: Miercoles 2 de SEP

// Modalidad de entrega. Pull Request.
