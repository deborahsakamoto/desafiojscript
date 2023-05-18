tabelaHTML = "<table><tr><tr><td>1";

for (dividendo = 2; dividendo <= 300; dividendo++) {
  var primo = true;
  for (divisor = 2; divisor < dividendo ; divisor++) {
    if (dividendo % divisor == 0) {
      primo = false;
      tabelaHTML += "<td>" + dividendo;
      break;
    };
  };
  if (Boolean(primo)) { 
    tabelaHTML += "<td bgcolor='#0BB61D'>" + dividendo;
  }
  dividendo % 25 == 0 ? tabelaHTML += "<tr>" : false;
};
tabelaHTML += "</table>";
document.write(tabelaHTML)