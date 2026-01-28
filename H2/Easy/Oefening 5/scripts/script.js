let dag = "maandag";

switch (dag) {
  case "maandag":
    console.log("Vandaag is het maandag.");
    break;
  case "vrijdag":
    console.log("Laatste werkdag!");
    break;
  case "zaterdag":
  case "zondag":
    console.log("Weekend!");
    break;
  default:
    console.log("Gewone dag.");
}
