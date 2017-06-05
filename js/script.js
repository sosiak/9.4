var h = prompt("Podaj wysokość choinki: ");

function drawTree() {
  var star = '';
  for ( var k = 0 ; k < h; k++) {
    for ( var i = k; i <= k; i++ ) {
      star += "*";
      console.log(star);
    }
  }
}
drawTree();