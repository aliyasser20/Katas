const blocksAway = function(directions) {
  const calulcatedBlocksAway = {
    east: 0,
    north: 0
  };
  let numberOfRepetitions = 0;

  for (let i = 0; i < directions.length; i += 2) {
    if (directions[i] !== directions[i - 2]) {
      numberOfRepetitions = 0;
    } else {
      numberOfRepetitions += 1;
    }
    switch (directions[i]) {
      case "right":
        if (numberOfRepetitions === 0) {
          calulcatedBlocksAway.east += Number(directions[i + 1]);
        } else {
          switch (numberOfRepetitions) {
            case 1:
              calulcatedBlocksAway.north -= Number(directions[i + 1]);
              break;
            case 2:
              calulcatedBlocksAway.east -= Number(directions[i + 1]);
              break;
            case 3:
              calulcatedBlocksAway.north += Number(directions[i + 1]);
              numberOfRepetitions = 0;
              break;
            default:
              break;
          }
        }
        break;
      case "left":
        if (numberOfRepetitions === 0) {
          calulcatedBlocksAway.north += Number(directions[i + 1]);
        } else {
          switch (numberOfRepetitions) {
            case 1:
              calulcatedBlocksAway.east -= Number(directions[i + 1]);
              break;
            case 2:
              calulcatedBlocksAway.north += Number(directions[i + 1]);
              break;
            case 3:
              calulcatedBlocksAway.east += Number(directions[i + 1]);
              break;
            case 4:
              calulcatedBlocksAway.north -= Number(directions[i + 1]);
              numberOfRepetitions = 0;
              break;
            default:
              break;
          }
        }
        break;
      default:
        break;
    }
  }
  return calulcatedBlocksAway;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1
  ])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
