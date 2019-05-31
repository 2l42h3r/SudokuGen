const grid = [];
let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let filled = false;

/**
 * Initializes an empty (filled with 0s) 9x9 grid
 * Tworzy pustą (wypełnioną zerami) tablicę 9x9
 */
function initGrid() {
  for (i = 0; i < 9; i++) {
    grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }
}
/**
 * Checks if the grid is filled
 * Sprawdza czy tablica została wypełniona
 * @return {boolean} Is the grid filled?
 * @return {boolean} Czy została wypełniona?
 */
function checkGrid() {
  // For every row
  // Dla każdego wiersza
  for (let row = 0; row < 9; row++) {
    // For every column
    // Dla każdej kolumny
    for (let col = 0; col < 9; col++) {
      // Are any cells empty (0'ed)?
      // Czy są jakieś puste komórki?
      if (grid[row][col] == 0) {
        return false;
      }
    }
  }
  filled = true;
  return true;
}

/**
 * (Fisher-Yates shuffle algorithm)
 * Shuffles array in place
 * Miesza wartości w tabeli
 * @param {Array} a An array containing the items \
 * Tablica z elementami do pomieszania
 * @return {Array} Shuffled array
 * @return {Array} Tablica z pomieszanymi elementami
 */
function shuffle(a) {
  let j; let x; let i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

/**
 * Fills the grid recursevily
 * Rekursywnie wypełnia tablicę
 * @return {boolean}
 */
function fillGrid() {
  // Find next empty cell
  // Znajduje następną pustą komórkę
  let row;
  let col;
  for (let i = 0; i < 81; i++) {
    // Integer division
    // Dzielenie całkowite
    row = Math.floor(i / 9);
    col = i % 9;
    if (grid[row][col] == 0) {
      numberList = shuffle(numberList);
      numberList.forEach(function(value) {
        // Check that this value has not already been used in this row
        // Sprawdza czy wartość nie została jeszcze wykorzystana w wierszu
        if (!grid[row].includes(value)) {
          // Check that this value has not already be used on this column
          // Sprawdza czy wartość nie została jeszcze wykorzystana w kolumnie
          // eslint-disable-next-line max-len
          if (![grid[0][col], grid[1][col], grid[2][col], grid[3][col], grid[4][col], grid[5][col], grid[6][col], grid[7][col], grid[8][col]].includes(value)) {
            const squareRow = Math.floor(row / 3) * 3;
            const squareCol = Math.floor(col / 3) * 3;
            // Check if the value has not appeared in this square
            // Sprawdza czy wartość nie została jeszcze wykorzystana w kwadracie
            let isSquareOK = true;
            for (let r = 0; r < 3; r++) {
              for (let c = 0; c < 3; c++) {
                if (grid[squareRow + r][squareCol + c] == value) {
                  isSquareOK = false;
                }
              }
            }
            if (isSquareOK) {
              grid[row][col] = value;
              if (checkGrid()) {
                return true;
              } else {
                // Recursion
                // Rekurencja
                if (fillGrid()) {
                  return true;
                }
              }
            }
          }
        }
      });
      break;
    }
  }
  if (filled) {
    return true;
  }
  // If recursion brings us back to this spot,
  // last value must have been incorrect, so reset it
  // Jeżeli przez rekurencję znajdziemy się w tym miejscu,
  // ostatnia wartość musiała być niewłaściwa, więc czyścimy komórkę
  grid[row][col] = 0;
}

initGrid();
fillGrid();
console.log(grid);
