// Решение через цикл
function towerLoop(towerHeight) {
    var n = 0;
    for (var i = 0; i < towerHeight; i++) {
        n = 2 * n + 1;
    }
    console.log(n);
};


// Решение через рекурсию
function towerRecr(n, towerHeight, t) {
  if (n > towerHeight) return t;
  if ( n != 1) {
    t = 2 * t + 1;
    return towerRecr(n + 1, towerHeight, t);
  }
  t += 2 * (n - 1) + 1
  return towerRecr(n + 1, towerHeight, t);
}

// Решение из задачника
function towerDegree(n) {
  return Math.pow(2, n) - 1;
}
