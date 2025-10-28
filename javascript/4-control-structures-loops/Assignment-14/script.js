
const namePattern = [
  ["L", "      U", "   U", "   CCCC", "  K", "   K", "  Y", "   Y"],
  ["L", "      U", "   U", "  C", "      K", "  K", "    Y", " Y"],
  ["L", "      U", "   U", "  C", "      KK", "       Y"],
  ["L", "      U", "   U", "  C", "      K", "  K", "     Y"],
  ["LLLLL", "    UUU", "    CCCC", "  K", "   K", "     Y"]
];

console.log("Printing Name Pattern (LUCKY):\n");
for (const row of namePattern) {
  let line = "";
  for (const col of row) {
    line += col + " ";
  }
  console.log(line);
}
