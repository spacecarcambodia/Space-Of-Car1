const data = [
  { Number:"PV5XWER67SLC02208", name:"FORD EVEREST TIRANIUM X 2025", year:"2025", cc:2000, hp:207, seats:7, weight:2269, Kg:70, Fualoil:"DSL", length:4.91, width:1.92, height:1.84 },
  { Number:"PV5XWSR99SLG02151", name:"FORD EVEREST SPORT 2025", year:"2025", cc:2000, hp:168, seats:7, weight:2455, Kg:70, Fualoil:"DSL", length:4.91, width:1.92, height:1.84 },
  { Number:"PV4CU2ZX9TL101282", name:"FORD TERRITORY", year:"2026", cc:1490, hp:160, seats:5, weight:1750, Kg:50, Fualoil:"E/A", length:4.7, width:1.9, height:1.7 },
  { Number:"PV3UKFF60SL004971", name:"FORD RANGER XLT ", year:"2025", cc:2000, hp:207, seats:5, weight:2152, Kg:600, Fualoil:"DSL", length:5.35, width:2, height:1.87 },
  { Number:"PV4CU2ZX8SL000748", name:"FORD TERRITORY", year:"2025", cc:1490, hp:160, seats:5, weight:1750, Kg:50, Fualoil:"E/A", length:4.58, width:1.86, height:1.67},
  { Number:"PV3AKFF60SL0044467", name:"FORD RANGER WD", year:"2025", cc:2000, hp:207, seats:5, weight:2340, Kg:600, Fualoil:"DSL", length:5.37, width:2, height:1.88 },
  { Number:"PV3UKFF90SL004991", name:"FORD RANGER XL", year:"2025", cc:2000, hp:168, seats:5, weight:2084, Kg:600, Fualoil:"DSL", length:5.37, width:2.2, height:1.88 },
  { Number:"LKLSAAS45KA740819", name:"HIGER", year:"2019", cc:2498, hp:116, seats:12, weight:2400, Kg:240, Fualoil:"DSL", length:4.8, width:1.85, height:1.85 },
  { Number:"SALG2VF0FA232420", name:"LAND ROVER RANGER ROVER", year:"2015", cc:3000, hp:365, seats:5, weight:2500, Kg:50, Fualoil:"E/A", length:4.8, width:1.85, height:1.85 },
  { Number:"LMGAT1L8XS1377252", name:"GAC GS4", year:"2025", cc:1497, hp:174, seats:5, weight:1600, Kg:50, Fualoil:"E/A", length:4.5, width:1.8, height:1.65 },
  { Number:"JTJPD7CX5S4001688", name:"LEXUS LX700H", year:"2025", cc:3500, hp:409, seats:7, weight:2855, Kg:70, Fualoil:"E/A", length:5, width:2, height:1.9 },
  { Number:"WBS3R9C57FK331601", name:"BMW M4", year:"2015", cc:3000, hp:425, seats:4,  Kg:40, Fualoil:"E/A", length:4.68, width:1.87, height:1.38 },
  { Number:"JTJBARBZBF2032047", name:"LEXUS NX200T", year:"2015", cc:2000, hp:235, seats:5,  Kg:50, Fualoil:"E/A", length:4.63, width:1.87, height:1.63 },
  { Number:"JTFBR73J8SB006672", name:"TOYOTA LANDCRUISER", year:"2025", cc:2800, hp:204, seats:5, weight:2130, Kg:300, Fualoil:"DSL", length:5.24, width:1.8, height:1.96 },
  { Number:"PV4CU2ZX4SL000438", name:"FORD TERRITORY TITANIUM", year:"2025", cc:1490, hp:160, seats:5, weight:1750, Kg:50, Fualoil:"DSL",  length:4.58, width:1.86, height:1.67 },
  { Number:"7G2CEHED1RA011624", name:"TESLA CYBERTRUCK", year:"2024", cc:"N/A", hp:605, seats:5, weight:3025, Kg:300, Fualoil:"E/A", length:5.68, width:2.41, height:1.79 },
  { Number:"WDCYC6BJXKX311331", name:"MERCEDES BANZ G550", year:"2019", cc:4000, hp:416, seats:5,  Kg:50, Fualoil:"E/A", length:4.81, width:1.93, height:1.96 },
  { Number:"W1K6X7GBXSA329233", name:"MERCEDES BANZ Maybach S580", year:"2025", cc:4000, hp:416, seats:4, weight:2518, Kg:40, Fualoil:"E/A", length:5.82, width:1.93, height:1.96 },
  { Number:"BNR34001621", name:"NISSAN SKYLINE", year:"2001", cc:2600, hp:280, seats:4,  Kg:40, Fualoil:"E/A", length:4.6, width:1.78, height:1.36 },
  { Number:"LS6C3E2T0SF035767", name:"CHANGAN DEEPAL S07", year:"2025", cc:1497, hp:238, seats:5, weight:2073, Kg:50, Fualoil:"E/A", length:4.75, width:1.93, height:162 },
  { Number:"LDP45B961TG421060", name:"GTV KESSOR", year:"2026", cc:"N/A", hp:161, seats:5, weight:1365, Kg:50, Fualoil:"E/A", length:4.16, width:1.87, height:1.61 },
  { Number:"WDBGA51E6SA282126", name:"MERCEDES BANZS500", year:"1995", cc:5000, hp:315, seats:5, weight:2200, Kg:50, Fualoil:"E/A", length:5.21, width:1.88, height:1.47 },
  { Number:"LEFYEDG36SHN46951", name:"JMC", year:"2025", cc:2771, hp:92, seats:3, weight:2030, Kg:500, Fualoil:"DSL", length:6, width:2, height:2.43 },
  { Number:"JTMAB7BJ0S4198023", name:"TOYOTA Landcruiser VXR", year:"2025", cc:3500, hp:409, seats:7, weight:2150, Kg:70, Fualoil:"E/A", length:5.14, width:1.98, height:1.9 },
  { Number:"W1K6X6BB9RA251670", name:"MERCEDES BANZ MayBach S480", year:"2024", cc:2999, hp:362, seats:5, weight:2375, Kg:50, Fualoil:"E/A", length:5.46, width:2.1, height:1.5 },
  { Number:"JTMAA7BJ4S4114692", name:"TOYOTA Landcruiser VXR", year:"2025", cc:3300, hp:302, seats:7, weight:2450, Kg:70, Fualoil:"DSL", length:5.14, width:1.98, height:1.9 },
  { Number:"LURMCWBT2RA151367", name:"AIQAR EQ3", year:"2024", cc:"N/A", hp:255, seats:5, weight:1892, Kg:50, Fualoil:"E/A", length:4.4, width:1.9, height:1.7 },
  { Number:"W1K6X6BB9RA251670", name:"MERCEDES BANZ MayBach S480", year:"2024", cc:2999, hp:362, seats:5, weight:2375, Kg:50, Fualoil:"E/A", length:5.46, width:2.1, height:1.5 },
  { Number:"WDD3G4EB5KW028005", name:"MERCEDES BANZ A220", year:"2019", cc:2000, hp:188, seats:5, weight:1800, Kg:50, Fualoil:"E/A", length:4.42, width:1.8, height:1.44 },
  { Number:"W1NFFB8RB114514", name:"MERCEDES BANZ MayBach GLS600", year:"2024", cc:3982, hp:550, seats:4, weight:2825, Kg:40, Fualoil:"E/A", length:5.2, width:2.15, height:1.83 },
  { Number:"55SWF4KB3FU061219", name:"MERCEDES BANZ  C300", year:"2015", cc:2000, hp:241, seats:5,  Kg:50, Fualoil:"E/A", length:4.68, width:1.81, height:1.44 },
  { Number:"4JGFF5KE9LA119318", name:"MERCEDES BANZ GL450", year:"2020", cc:3000, hp:362, seats:7, Kg:50, Fualoil:"E/A", length:5.2, width:1.9, height:1.8 },
  { Number:"WDDUG6HB2FA170133", name:"MERCEDES BANZ S400L", year:"2015", cc:3000, hp:333, seats:5,  Kg:50, Fualoil:"E/A", length:5.36, width:1.91, height:1.5 },
  { Number:"LB1WG3E67S8249046", name:"MERCEDES BANZ Vito", year:"2025", cc:1999, hp:231, seats:7, weight:2370, Kg:70, Fualoil:"E/A", length:5.14, width:1.92, height:1.99 },
  { Number:"4JGFF5KEBLA206059", name:"MERCEDES BANZ GLE450", year:"2020", cc:3000, hp:362, seats:4, Kg:40, Fualoil:"E/A", length:5.21, width:1.82, height:1.82 },
  { Number:"LE4G1DB5SL001499", name:"MERCEDES BANZ", year:"2025", cc:"N/A", hp:268, seats:5,  Kg:50, Fualoil:"E/A", length:4.76, width:1.83, height:1.47 },
  { Number:"KMJHG17HPBC009847", name:"HYUNDAI COUNTRY", year:"2011", cc:3933, hp:160, seats:25,  Kg:500, Fualoil:"DSL", length:7, width:2, height:2.75 },
  { Number:"JTMA87BJ9S4186985", name:"TOYOTA LAND CRUISER LC300", year:"2025", cc:3500, hp:409, seats:7, weight:2570, Kg:70, Fualoil:"E/A", length:5.14, width:1.98, height:1.94 },
  { Number:"WDDSJ4EB3EN045327", name:"MERCEDES BANZ CLA250", year:"2014", cc:2000, hp:208, seats:5,  Kg:50, Fualoil:"E/A", length:4.68, width:1.78, height:1.43 },
  { Number:"JTHADAADB05006680", name:"LEXUS LM350H", year:"2025", cc:2500, hp:188, seats:4, weight:2870, Kg:40, Fualoil:"E/A", length:5.12, width:1.89, height:1.94 },
  { Number:"WDDSJ5CB4FN245062", name:"MERCEDES BANZ CLA45AMG", year:"2015", cc:2000, hp:355, seats:5,  Kg:50, Fualoil:"E/A", length:4.7, width:1.77, height:1.41 },
  { Number:"4JGFF5KE2LA205151", name:"MERCEDES BANZ GLS450", year:"2015", cc:3000, hp:362, seats:5,  Kg:50, Fualoil:"E/A", length:5.21, width:2, height:1.82 },
  { Number:"1FTFW1RG5JFD74357", name:"FORD F-150 RAPTOR", year:"2018", cc:3500, hp:450, seats:5,  Kg:600, Fualoil:"E/A", length:5.59, width:1.19, height:1.92 },
  { Number:"4JGFD6BB9SB342193", name:"MERCEDES BENZ GLE53", year:"2025", cc:3000, hp:429, seats:5, weight:2375, Kg:50, Fualoil:"E/A", length:4.937, width:2.018, height:1.782 },
  { Number:"JTJCMBHA402009862", name:"LEXUS RX500H", year:"2025", cc:2400, hp:271, seats:5, kg:50, Fualoil:"E/A", length:4.89, width:1.92, height:1.68 },
  { Number:"FE71CBA664810", name:"FUSO", year:"2024", cc:4214, hp:120, seats:3,  Kg:1000, Fualoil:"DSL", length:5, width:1.9, height:2.7 },
  { Number:"ZCFA51ED102740936", name:"IVECO", year:"2023", cc:2700, hp:182, seats:3,  kg:1850, Fualoil:"DSL", length:8.8, width:3.05, height:3 },
  { Number:"LZZ8BYVF3MC411664", name:"SINO", year:"2021", cc:2499, hp:130, seats:3,  Kg:1, Fualoil:"DSL", length:12.20, width:2.5, height:4.00 },
  { Number:"WDAKHCAA0K0325425", name:"MERCEDES BENZ", year:"2019", cc:11946, hp:410, seats:3,  Kg:1, Fualoil:"DSL", length:10.5, width:2.5, height:4 },
  { Number:"LXWGUTCB7SHF86812", name:"FORD EQUATOR", year:"2025", cc:1498, hp:315, seats:7, weight:2100, Kg:70, Fualoil:"E/A", length:4.92, width:1.93, height:1.76 },
  { Number:"HJ4ABBDH2PN022087", name:"BAW", year:"2023", cc:1962, hp:142, seats:7,  Kg:70, Fualoil:"E/A", length:5.24, width:1.87, height:1.95 },
  { Number:"JTJCMCHAB0202220921", name:"LEXUS RX500H", year:"2023", cc:2393, hp:366, seats:5,   Kg:50, Fualoil:"E/A", length:4.89, width:1.92, height:1.69 },
  { Number:"WDDUG6DBBFA104143", name:"MERCEDES BENZ S550", year:"2015", cc:3000, hp:436, seats:7,  Kg:50, Fualoil:"E/A", length:5.24, width:1.9, height:1.5 },
  { Number:"KMFLA18AP5C050099", name:"HYUNDAI TRUCK", year:"2005", cc:6606, hp:225, seats:3,  Kg:500, Fualoil:"DSL", length:8.7, width:2.4, height:3 },
  { Number:"LVVDB21B7TDD09672", name:"CHERY TIGGO7", year:"2026", cc:1498, hp:154, seats:5, weight:1500,  Kg:50, Fualoil:"E/A", length:4.5, width:1.84, height:1.7 },
  { Number:"7G2CEHED0RA019570", name:"TESLA CYBERTRUCK", year:"2024",  hp:603, seats:5,  Kg:300, Fualoil:"អគ្គីសនី", length:5.6668, width:2.03, height:1.74},
  { Number:"KMFGA17HPBC170183", name:"HYUNDAI MIGHTY", year:"2011", cc:3933, hp:160, seats:3,  Kg:3500, Fualoil:"DSL", length:6.7, width:2.2, height:2.6 },
  { Number:"LEFEDDE18STP411423", name:"JMC VIGUS", year:"2025", cc:2498, hp:158, seats:5,  Kg:600, Fualoil:"DSL", length:5.3, width:1.88, height:1.78 },
  { Number:"WP0ZZZ998RS268119", name:"PORSCHE 911", year:"2024", cc:3996, hp:518, seats:2,  Kg:20, Fualoil:"E/A", length:4.57, width:1.85, height:1.28 },  
  { Number:"LC0FD4C49S7175495", name:"BYD FANGCHENG BAO LEQPARD7", year:"2025", cc:1498, hp:483, seats:5, weight:2400, Kg:50, Fualoil:"អគ្គីសនីចម្បង", length:5, width:1.99, height:1.86 },  
  { Number:"L6T79BAZ2SV364697", name:"GEELY GALAXY M9", year:"2025", cc:1499, hp:163, seats:6,weight:2100,  Kg:60, Fualoil:"Hybrid", length:5.2, width:2, height:1.8 }, 
  { Number:"LJ166A259T4011420", name:"JAC JS8", year:"2026", cc:1499, hp:182, seats:7, weight:1600, Kg:70, Fualoil:"E/A", length:4.82, width:1.87, height:1.76 }, 
  { Number:"LJ11PABEXTC018826", name:"JAC T9", year:"2026", cc:1999, hp:168, seats:5, weight:2000, Kg:300, Fualoil:"DSL", length:5.33, width:1.96, height:1.92 }, 
  { Number:"WBA3A5C56DF354779", name:"BMW 328I", year:"2013", cc:2000, hp:240, seats:5, Kg:50, Fualoil:"E/A", length:4.63, width:1.81, height:1.43 },
  { Number:"JTJCMCHA702021123", name:"TOYOTA VELOZ", year:"2026", cc:2393, hp:271, seats:5, weight:2100, Kg:50, Fualoil:"E/A", length:4.89, width:1.92, height:1.71 },
  { Number:"JTGHN9CP7S6028589", name:"TOYOTA HIACE", year:"2025", cc:3500, hp:277, seats:13, weight:2500, Kg:260, Fualoil:"E/A", },
  { Number:"KMJUG17RPFC000073", name:"HYUNDAI SOLATI", year:"2015", cc:2497, hp:168, seats:15, Kg:300, Fualoil:"DSL", length:6, width:2, height:2.9 },
  { Number:"W1K6X7GB2TA350949", name:"MERCEDES-BENZ S580", year:"2026", cc:4000, hp:496, seats:5, weight:2300, Kg:50, Fualoil:"E/A", length:5.47, width:2, height:1.51, }, 
  { Number:"WDC0G4JB5GF070534", name:"MERCEDES BENZ GLC300", year:"2016", cc:2000, hp:241, seats:5, Kg:50, Fualoil:"E/A", length:4.65, width:1.89, height:1.63 }, 
  { Number:"WDB140051-1A382499", name:"MERCEDES BENZ 300E", year:"1997", cc:5000, hp:315, seats:5, Kg:50, Fualoil:"E/A", length:5.21, width:1.88, height:1.47 }, 
  { Number:"W1K6X7GB2TA350949", name:"MERCEDES-BENZ S580", year:"2026", cc:4000, hp:496, seats:5, weight:2300, Kg:50, Fualoil:"E/A", length:5.47, width:2, height:1.51 }, 
  { Number:"LDP95C962SE162892", name:"VOYAH DREAMER", year:"2025",  hp:429, seats:7, weight:2300, Kg:70, Fualoil:"E/A", length:5.31, width:1.99, height:1.82 }, 
  { Number:"KMFGA17HP8C094531", name:"HYUNDAI MIGHTY", year:"2008", cc:3933, hp:150, seats:3, Kg:2500, Fualoil:"DSL", length:6.3, width:2, height:3 }, 
  { Number:"LC0DD4C40S0535592", name:"DENZA D9", year:"2025", cc:1498, hp:483, seats:7, weight:2665, Kg:70, Fualoil:"អាគុយ+E/A", length:5.25, width:1.96, height:1.92 }, 
  { Number:"LE4FG1DB5SL000501", name:"MERCEDES BENZ GLA 300L", year:"2025",  hp:268, seats:5, weight:2000, Kg:50, Fualoil:"E/A", length:4.76, width:1.83, height:1.47 }, 
  { Number:"JHDSS1EK561S31197", name:"HINO", year:"2006", cc:12520, hp:460, seats:3, Kg:15750, Fualoil:"DSL", length:6.9, width:2.5, height:3 }, 
  { Number:"PNAUSHNL0TG712033", name:"PEUGEOT 2008", year:"2026", cc:1199, hp:130, seats:5, weight:1200, Kg:50, Fualoil:"E/A", length:4.3, width:1.77, height:1.55 }, 
  { Number:"KMFGA17LPYC138214", name:"HYUNDAI", year:"2000", cc:3907, hp:140, seats:3, Kg:2500, Fualoil:"DSL", length:7, width:2.2, height:2.6 }, 
  { Number:"JTMAC7BJ4T4002986", name:"TOYOTA LANDCRUISER 3.5 VXR HEV HYBIRD", year:"2026", cc:3500, hp:409, seats:7, weight:2400, Kg:70, Fualoil:"Hybrid", length:5.1, width:1.98, height:1.94 }, 
  { Number:"WDB4632601X298163  ", name:"MERCEDES-BENZ S500", year:"2019", cc:3982, hp:416, seats:5,  Kg:50, Fualoil:"E/A", length:4.66, width:1.93, height:1.96 },
  { Number:"W1KMK6CB0TF091225", name:"MERCEDES-BENZ CLE53 AMG", year:"2026", cc:3000, hp:443, seats:4, weight:2000, Kg:40, Fualoil:"E/A", length:4.85, width:2, height:1.43 },
  { Number:"LJNDZUCR1TN373476", name:"GTV KOUPREY ZNA", year:"2026", cc:4000, hp:496, seats:5, weight:2100, Kg:300, Fualoil:"Hybrid", length:5.6, width:2, height:1.9 },
];

// Wait until page fully loads
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("searchForm");
  const clearBtn = document.getElementById("clearBtn");

  // ENTER KEY + BUTTON CLICK
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    searchData();
  });

  clearBtn.addEventListener("click", function () {
    clearSearch();
  });

  // Show all on load          
  displayData(data);

});


function searchData() {
  const nameKey = document.getElementById("searchName").value.toLowerCase().trim();
  const numberKey = document.getElementById("searchNumber").value.toLowerCase().trim();

  const filtered = data.filter(item => {
    const nameMatch = item.name.toLowerCase().includes(nameKey);
    const numberMatch = item.Number.toLowerCase().includes(numberKey);
    return nameMatch && numberMatch;
  });

  displayData(filtered);
}


function displayData(array) {

  if(array.length === 0){
    document.getElementById("result").innerHTML = "<p>No data found</p>";
    return;
  }

  let table = `
  <table border="1" width="100%">
    <tr>
      <th>Number</th>
      <th>Name</th>
      <th>Year</th>
      <th>CC</th>
      <th>HP</th>
      <th>Seats</th> 
      <th>Weight</th>
      <th>Kg</th>
      <th>Fualoil</th>
      <th>Length</th>
      <th>Width</th>
      <th>Height</th>
    </tr>
  `;

  array.forEach(item => {
    table += `
      <tr>
        <td>${item.Number}</td>
        <td>${item.name}</td>
        <td>${item.year}</td>
        <td>${item.cc}</td>
        <td>${item.hp}</td>
        <td>${item.seats}</td>
        <td>${item.weight}</td>
        <td>${item.Kg}</td>
        <td>${item.Fualoil}</td>
        <td>${item.length}</td>
        <td>${item.width}</td>
        <td>${item.height}</td>
      </tr>
    `;
  });

  table += `</table>`;

  document.getElementById("result").innerHTML = table;
}


function clearSearch() {
  document.getElementById("searchName").value = "";
  document.getElementById("searchNumber").value = "";
  displayData(data);
}
