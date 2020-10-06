const CityArea = require('./models/CityAreaModel');
let data = [
  {
    "zip": "601",
    "city": "Adjuntas"
  },
  {
    "zip": "602",
    "city": "Aguada"
  },
  {
    "zip": "603",
    "city": "Aguadilla"
  },
  {
    "zip": "606",
    "city": "Maricao"
  },
  {
    "zip": "610",
    "city": "Anasco"
  },
  {
    "zip": "612",
    "city": "Arecibo"
  },
  {
    "zip": "616",
    "city": "Bajadero"
  },
  {
    "zip": "617",
    "city": "Barceloneta"
  },
  {
    "zip": "622",
    "city": "Boqueron"
  },
  {
    "zip": "623",
    "city": "Cabo Rojo"
  },
  {
    "zip": "624",
    "city": "Penuelas"
  },
  {
    "zip": "627",
    "city": "Camuy"
  },
  {
    "zip": "637",
    "city": "Sabana Grande"
  },
  {
    "zip": "638",
    "city": "Ciales"
  },
  {
    "zip": "641",
    "city": "Utuado"
  },
  {
    "zip": "646",
    "city": "Dorado"
  },
  {
    "zip": "647",
    "city": "Ensenada"
  },
  {
    "zip": "650",
    "city": "Florida"
  },
  {
    "zip": "652",
    "city": "Garrochales"
  },
  {
    "zip": "653",
    "city": "Guanica"
  },
  {
    "zip": "656",
    "city": "Guayanilla"
  },
  {
    "zip": "659",
    "city": "Hatillo"
  },
  {
    "zip": "660",
    "city": "Hormigueros"
  },
  {
    "zip": "662",
    "city": "Isabela"
  },
  {
    "zip": "664",
    "city": "Jayuya"
  },
  {
    "zip": "667",
    "city": "Lajas"
  },
  {
    "zip": "669",
    "city": "Lares"
  },
  {
    "zip": "670",
    "city": "Las Marias"
  },
  {
    "zip": "674",
    "city": "Manati"
  },
  {
    "zip": "676",
    "city": "Moca"
  },
  {
    "zip": "677",
    "city": "Rincon"
  },
  {
    "zip": "678",
    "city": "Quebradillas"
  },
  {
    "zip": "680",
    "city": "Mayaguez"
  },
  {
    "zip": "683",
    "city": "San German"
  },
  {
    "zip": "685",
    "city": "San Sebastian"
  },
  {
    "zip": "687",
    "city": "Morovis"
  },
  {
    "zip": "688",
    "city": "Sabana Hoyos"
  },
  {
    "zip": "690",
    "city": "San Antonio"
  },
  {
    "zip": "692",
    "city": "Vega Alta"
  },
  {
    "zip": "693",
    "city": "Vega Baja"
  },
  {
    "zip": "698",
    "city": "Yauco"
  },
  {
    "zip": "703",
    "city": "Aguas Buenas"
  },
  {
    "zip": "704",
    "city": "Aguirre"
  },
  {
    "zip": "705",
    "city": "Aibonito"
  },
  {
    "zip": "707",
    "city": "Maunabo"
  },
  {
    "zip": "714",
    "city": "Arroyo"
  },
  {
    "zip": "715",
    "city": "Mercedita"
  },
  {
    "zip": "716",
    "city": "Ponce"
  },
  {
    "zip": "718",
    "city": "Naguabo"
  },
  {
    "zip": "719",
    "city": "Naranjito"
  },
  {
    "zip": "720",
    "city": "Orocovis"
  },
  {
    "zip": "723",
    "city": "Patillas"
  },
  {
    "zip": "725",
    "city": "Caguas"
  },
  {
    "zip": "729",
    "city": "Canovanas"
  },
  {
    "zip": "735",
    "city": "Ceiba"
  },
  {
    "zip": "736",
    "city": "Cayey"
  },
  {
    "zip": "738",
    "city": "Fajardo"
  },
  {
    "zip": "739",
    "city": "Cidra"
  },
  {
    "zip": "740",
    "city": "Puerto Real"
  },
  {
    "zip": "741",
    "city": "Punta Santiago"
  },
  {
    "zip": "745",
    "city": "Rio Grande"
  },
  {
    "zip": "751",
    "city": "Salinas"
  },
  {
    "zip": "754",
    "city": "San Lorenzo"
  },
  {
    "zip": "757",
    "city": "Santa Isabel"
  },
  {
    "zip": "765",
    "city": "Vieques"
  },
  {
    "zip": "766",
    "city": "Villalba"
  },
  {
    "zip": "767",
    "city": "Yabucoa"
  },
  {
    "zip": "769",
    "city": "Coamo"
  },
  {
    "zip": "771",
    "city": "Las Piedras"
  },
  {
    "zip": "772",
    "city": "Loiza"
  },
  {
    "zip": "773",
    "city": "Luquillo"
  },
  {
    "zip": "777",
    "city": "Juncos"
  },
  {
    "zip": "778",
    "city": "Gurabo"
  },
  {
    "zip": "780",
    "city": "Coto Laurel"
  },
  {
    "zip": "782",
    "city": "Comerio"
  },
  {
    "zip": "783",
    "city": "Corozal"
  },
  {
    "zip": "784",
    "city": "Guayama"
  },
  {
    "zip": "791",
    "city": "Humacao"
  },
  {
    "zip": "794",
    "city": "Barranquitas"
  },
  {
    "zip": "795",
    "city": "Juana Diaz"
  },
  {
    "zip": "802",
    "city": "St Thomas"
  },
  {
    "zip": "820",
    "city": "Christiansted"
  },
  {
    "zip": "830",
    "city": "St John"
  },
  {
    "zip": "840",
    "city": "Frederiksted"
  },
  {
    "zip": "850",
    "city": "Kingshill"
  },
  {
    "zip": "901",
    "city": "San Juan"
  },
  {
    "zip": "934",
    "city": "Fort Buchanan"
  },
  {
    "zip": "949",
    "city": "Toa Baja"
  },
  {
    "zip": "952",
    "city": "Sabana Seca"
  },
  {
    "zip": "953",
    "city": "Toa Alta"
  },
  {
    "zip": "956",
    "city": "Bayamon"
  },
  {
    "zip": "962",
    "city": "Catano"
  },
  {
    "zip": "965",
    "city": "Guaynabo"
  },
  {
    "zip": "976",
    "city": "Trujillo Alto"
  },
  {
    "zip": "979",
    "city": "Carolina"
  },
  {
    "zip": "1001",
    "city": "Agawam"
  },
  {
    "zip": "1002",
    "city": "Amherst"
  },
  {
    "zip": "1005",
    "city": "Barre"
  },
  {
    "zip": "1007",
    "city": "Belchertown"
  },
  {
    "zip": "1008",
    "city": "Blandford"
  },
  {
    "zip": "1010",
    "city": "Brimfield"
  },
  {
    "zip": "1011",
    "city": "Chester"
  },
  {
    "zip": "1012",
    "city": "Chesterfield"
  },
  {
    "zip": "1013",
    "city": "Chicopee"
  },
  {
    "zip": "1026",
    "city": "Cummington"
  },
  {
    "zip": "1027",
    "city": "Easthampton"
  },
  {
    "zip": "1028",
    "city": "East Longmeadow"
  },
  {
    "zip": "1030",
    "city": "Feeding Hills"
  },
  {
    "zip": "1031",
    "city": "Gilbertville"
  },
  {
    "zip": "1032",
    "city": "Goshen"
  },
  {
    "zip": "1033",
    "city": "Granby"
  },
  {
    "zip": "1034",
    "city": "Granville"
  },
  {
    "zip": "1035",
    "city": "Hadley"
  },
  {
    "zip": "1036",
    "city": "Hampden"
  },
  {
    "zip": "1038",
    "city": "Hatfield"
  },
  {
    "zip": "1039",
    "city": "Haydenville"
  },
  {
    "zip": "1040",
    "city": "Holyoke"
  },
  {
    "zip": "1050",
    "city": "Huntington"
  },
  {
    "zip": "1053",
    "city": "Leeds"
  },
  {
    "zip": "1054",
    "city": "Leverett"
  },
  {
    "zip": "1056",
    "city": "Ludlow"
  },
  {
    "zip": "1057",
    "city": "Monson"
  },
  {
    "zip": "1060",
    "city": "Northampton"
  },
  {
    "zip": "1062",
    "city": "Florence"
  },
  {
    "zip": "1068",
    "city": "Oakham"
  },
  {
    "zip": "1069",
    "city": "Palmer"
  },
  {
    "zip": "1070",
    "city": "Plainfield"
  },
  {
    "zip": "1071",
    "city": "Russell"
  },
  {
    "zip": "1072",
    "city": "Shutesbury"
  },
  {
    "zip": "1073",
    "city": "Southampton"
  },
  {
    "zip": "1075",
    "city": "South Hadley"
  },
  {
    "zip": "1077",
    "city": "Southwick"
  },
  {
    "zip": "1080",
    "city": "Three Rivers"
  },
  {
    "zip": "1081",
    "city": "Wales"
  },
  {
    "zip": "1082",
    "city": "Ware"
  },
  {
    "zip": "1084",
    "city": "West Chesterfield"
  },
  {
    "zip": "1085",
    "city": "Westfield"
  },
  {
    "zip": "1088",
    "city": "West Hatfield"
  },
  {
    "zip": "1089",
    "city": "West Springfield"
  },
  {
    "zip": "1095",
    "city": "Wilbraham"
  },
  {
    "zip": "1096",
    "city": "Williamsburg"
  },
  {
    "zip": "1098",
    "city": "Worthington"
  },
  {
    "zip": "1103",
    "city": "Springfield"
  },
  {
    "zip": "1106",
    "city": "Longmeadow"
  },
  {
    "zip": "1151",
    "city": "Indian Orchard"
  },
  {
    "zip": "1201",
    "city": "Pittsfield"
  },
  {
    "zip": "1220",
    "city": "Adams"
  },
  {
    "zip": "1222",
    "city": "Ashley Falls"
  },
  {
    "zip": "1223",
    "city": "Becket"
  },
  {
    "zip": "1224",
    "city": "Berkshire"
  },
  {
    "zip": "1225",
    "city": "Cheshire"
  },
  {
    "zip": "1226",
    "city": "Dalton"
  },
  {
    "zip": "1230",
    "city": "Great Barrington"
  },
  {
    "zip": "1235",
    "city": "Hinsdale"
  },
  {
    "zip": "1236",
    "city": "Housatonic"
  },
  {
    "zip": "1237",
    "city": "Lanesboro"
  },
  {
    "zip": "1238",
    "city": "Lee"
  },
  {
    "zip": "1240",
    "city": "Lenox"
  },
  {
    "zip": "1245",
    "city": "Monterey"
  },
  {
    "zip": "1247",
    "city": "North Adams"
  },
  {
    "zip": "1253",
    "city": "Otis"
  },
  {
    "zip": "1254",
    "city": "Richmond"
  },
  {
    "zip": "1255",
    "city": "Sandisfield"
  },
  {
    "zip": "1256",
    "city": "Savoy"
  },
  {
    "zip": "1257",
    "city": "Sheffield"
  },
  {
    "zip": "1258",
    "city": "South Egremont"
  },
  {
    "zip": "1259",
    "city": "Southfield"
  },
  {
    "zip": "1266",
    "city": "West Stockbridge"
  },
  {
    "zip": "1267",
    "city": "Williamstown"
  },
  {
    "zip": "1270",
    "city": "Windsor"
  },
  {
    "zip": "1301",
    "city": "Greenfield"
  },
  {
    "zip": "1330",
    "city": "Ashfield"
  },
  {
    "zip": "1331",
    "city": "Athol"
  },
  {
    "zip": "1337",
    "city": "Bernardston"
  },
  {
    "zip": "1338",
    "city": "Buckland"
  },
  {
    "zip": "1339",
    "city": "Charlemont"
  },
  {
    "zip": "1340",
    "city": "Colrain"
  },
  {
    "zip": "1341",
    "city": "Conway"
  },
  {
    "zip": "1342",
    "city": "Deerfield"
  },
  {
    "zip": "1343",
    "city": "Drury"
  },
  {
    "zip": "1344",
    "city": "Erving"
  },
  {
    "zip": "1346",
    "city": "Heath"
  },
  {
    "zip": "1349",
    "city": "Millers Falls"
  },
  {
    "zip": "1351",
    "city": "Montague"
  },
  {
    "zip": "1354",
    "city": "Gill"
  },
  {
    "zip": "1355",
    "city": "New Salem"
  },
  {
    "zip": "1360",
    "city": "Northfield"
  },
  {
    "zip": "1364",
    "city": "Orange"
  },
  {
    "zip": "1366",
    "city": "Petersham"
  },
  {
    "zip": "1367",
    "city": "Rowe"
  },
  {
    "zip": "1368",
    "city": "Royalston"
  },
  {
    "zip": "1370",
    "city": "Shelburne Falls"
  },
  {
    "zip": "1373",
    "city": "South Deerfield"
  },
  {
    "zip": "1375",
    "city": "Sunderland"
  },
  {
    "zip": "1376",
    "city": "Turners Falls"
  },
  {
    "zip": "1378",
    "city": "Warwick"
  },
  {
    "zip": "1379",
    "city": "Wendell"
  },
  {
    "zip": "1380",
    "city": "Wendell Depot"
  },
  {
    "zip": "1420",
    "city": "Fitchburg"
  },
  {
    "zip": "1430",
    "city": "Ashburnham"
  },
  {
    "zip": "1431",
    "city": "Ashby"
  },
  {
    "zip": "1432",
    "city": "Ayer"
  },
  {
    "zip": "1434",
    "city": "Devens"
  },
  {
    "zip": "1436",
    "city": "Baldwinville"
  },
  {
    "zip": "1440",
    "city": "Gardner"
  },
  {
    "zip": "1450",
    "city": "Groton"
  },
  {
    "zip": "1451",
    "city": "Harvard"
  },
  {
    "zip": "1452",
    "city": "Hubbardston"
  },
  {
    "zip": "1453",
    "city": "Leominster"
  },
  {
    "zip": "1460",
    "city": "Littleton"
  },
  {
    "zip": "1462",
    "city": "Lunenburg"
  },
  {
    "zip": "1463",
    "city": "Pepperell"
  },
  {
    "zip": "1464",
    "city": "Shirley"
  },
  {
    "zip": "1468",
    "city": "Templeton"
  },
  {
    "zip": "1469",
    "city": "Townsend"
  },
  {
    "zip": "1473",
    "city": "Westminster"
  },
  {
    "zip": "1474",
    "city": "West Townsend"
  },
  {
    "zip": "1475",
    "city": "Winchendon"
  },
  {
    "zip": "1501",
    "city": "Auburn"
  },
  {
    "zip": "1503",
    "city": "Berlin"
  },
  {
    "zip": "1504",
    "city": "Blackstone"
  },
  {
    "zip": "1505",
    "city": "Boylston"
  },
  {
    "zip": "1506",
    "city": "Brookfield"
  },
  {
    "zip": "1507",
    "city": "Charlton"
  },
  {
    "zip": "1510",
    "city": "Clinton"
  },
  {
    "zip": "1515",
    "city": "East Brookfield"
  },
  {
    "zip": "1516",
    "city": "Douglas"
  },
  {
    "zip": "1518",
    "city": "Fiskdale"
  },
  {
    "zip": "1519",
    "city": "Grafton"
  },
  {
    "zip": "1520",
    "city": "Holden"
  },
  {
    "zip": "1521",
    "city": "Holland"
  },
  {
    "zip": "1522",
    "city": "Jefferson"
  },
  {
    "zip": "1523",
    "city": "Lancaster"
  },
  {
    "zip": "1524",
    "city": "Leicester"
  },
  {
    "zip": "1527",
    "city": "Millbury"
  },
  {
    "zip": "1529",
    "city": "Millville"
  },
  {
    "zip": "1531",
    "city": "New Braintree"
  },
  {
    "zip": "1532",
    "city": "Northborough"
  },
  {
    "zip": "1534",
    "city": "Northbridge"
  },
  {
    "zip": "1535",
    "city": "North Brookfield"
  },
  {
    "zip": "1536",
    "city": "North Grafton"
  },
  {
    "zip": "1537",
    "city": "North Oxford"
  },
  {
    "zip": "1540",
    "city": "Oxford"
  },
  {
    "zip": "1541",
    "city": "Princeton"
  },
  {
    "zip": "1542",
    "city": "Rochdale"
  },
  {
    "zip": "1543",
    "city": "Rutland"
  },
  {
    "zip": "1545",
    "city": "Shrewsbury"
  },
  {
    "zip": "1550",
    "city": "Southbridge"
  },
  {
    "zip": "1560",
    "city": "South Grafton"
  },
  {
    "zip": "1562",
    "city": "Spencer"
  },
  {
    "zip": "1564",
    "city": "Sterling"
  },
  {
    "zip": "1566",
    "city": "Sturbridge"
  },
  {
    "zip": "1568",
    "city": "Upton"
  },
  {
    "zip": "1569",
    "city": "Uxbridge"
  },
  {
    "zip": "1570",
    "city": "Webster"
  },
  {
    "zip": "1571",
    "city": "Dudley"
  },
  {
    "zip": "1581",
    "city": "Westborough"
  },
  {
    "zip": "1583",
    "city": "West Boylston"
  },
  {
    "zip": "1585",
    "city": "West Brookfield"
  },
  {
    "zip": "1588",
    "city": "Whitinsville"
  },
  {
    "zip": "1590",
    "city": "Sutton"
  },
  {
    "zip": "1602",
    "city": "Worcester"
  },
  {
    "zip": "1611",
    "city": "Cherry Valley"
  },
  {
    "zip": "1612",
    "city": "Paxton"
  },
  {
    "zip": "1701",
    "city": "Framingham"
  },
  {
    "zip": "1718",
    "city": "Village Of Nagog Woods"
  },
  {
    "zip": "1719",
    "city": "Boxborough"
  },
  {
    "zip": "1720",
    "city": "Acton"
  },
  {
    "zip": "1721",
    "city": "Ashland"
  },
  {
    "zip": "1730",
    "city": "Bedford"
  },
  {
    "zip": "1731",
    "city": "Hanscom Afb"
  },
  {
    "zip": "1740",
    "city": "Bolton"
  },
  {
    "zip": "1741",
    "city": "Carlisle"
  },
  {
    "zip": "1742",
    "city": "Concord"
  },
  {
    "zip": "1745",
    "city": "Fayville"
  },
  {
    "zip": "1746",
    "city": "Holliston"
  },
  {
    "zip": "1747",
    "city": "Hopedale"
  },
  {
    "zip": "1748",
    "city": "Hopkinton"
  },
  {
    "zip": "1749",
    "city": "Hudson"
  },
  {
    "zip": "1752",
    "city": "Marlborough"
  },
  {
    "zip": "1754",
    "city": "Maynard"
  },
  {
    "zip": "1756",
    "city": "Mendon"
  },
  {
    "zip": "1757",
    "city": "Milford"
  },
  {
    "zip": "1760",
    "city": "Natick"
  },
  {
    "zip": "1770",
    "city": "Sherborn"
  },
  {
    "zip": "1772",
    "city": "Southborough"
  },
  {
    "zip": "1773",
    "city": "Lincoln"
  },
  {
    "zip": "1775",
    "city": "Stow"
  },
  {
    "zip": "1776",
    "city": "Sudbury"
  },
  {
    "zip": "1778",
    "city": "Wayland"
  },
  {
    "zip": "1801",
    "city": "Woburn"
  },
  {
    "zip": "1803",
    "city": "Burlington"
  },
  {
    "zip": "1810",
    "city": "Andover"
  },
  {
    "zip": "1821",
    "city": "Billerica"
  },
  {
    "zip": "1824",
    "city": "Chelmsford"
  },
  {
    "zip": "1826",
    "city": "Dracut"
  },
  {
    "zip": "1827",
    "city": "Dunstable"
  },
  {
    "zip": "1830",
    "city": "Haverhill"
  },
  {
    "zip": "1833",
    "city": "Georgetown"
  },
  {
    "zip": "1834",
    "city": "Groveland"
  },
  {
    "zip": "1840",
    "city": "Lawrence"
  },
  {
    "zip": "1844",
    "city": "Methuen"
  },
  {
    "zip": "1845",
    "city": "North Andover"
  },
  {
    "zip": "1850",
    "city": "Lowell"
  },
  {
    "zip": "1860",
    "city": "Merrimac"
  },
  {
    "zip": "1862",
    "city": "North Billerica"
  },
  {
    "zip": "1863",
    "city": "North Chelmsford"
  },
  {
    "zip": "1864",
    "city": "North Reading"
  },
  {
    "zip": "1867",
    "city": "Reading"
  },
  {
    "zip": "1876",
    "city": "Tewksbury"
  },
  {
    "zip": "1879",
    "city": "Tyngsboro"
  },
  {
    "zip": "1880",
    "city": "Wakefield"
  },
  {
    "zip": "1886",
    "city": "Westford"
  },
  {
    "zip": "1887",
    "city": "Wilmington"
  },
  {
    "zip": "1890",
    "city": "Winchester"
  },
  {
    "zip": "1901",
    "city": "Lynn"
  },
  {
    "zip": "1906",
    "city": "Saugus"
  },
  {
    "zip": "1907",
    "city": "Swampscott"
  },
  {
    "zip": "1908",
    "city": "Nahant"
  },
  {
    "zip": "1913",
    "city": "Amesbury"
  },
  {
    "zip": "1915",
    "city": "Beverly"
  },
  {
    "zip": "1921",
    "city": "Boxford"
  },
  {
    "zip": "1922",
    "city": "Byfield"
  },
  {
    "zip": "1923",
    "city": "Danvers"
  },
  {
    "zip": "1929",
    "city": "Essex"
  },
  {
    "zip": "1930",
    "city": "Gloucester"
  },
  {
    "zip": "1938",
    "city": "Ipswich"
  },
  {
    "zip": "1940",
    "city": "Lynnfield"
  },
  {
    "zip": "1944",
    "city": "Manchester"
  },
  {
    "zip": "1945",
    "city": "Marblehead"
  },
  {
    "zip": "1949",
    "city": "Middleton"
  },
  {
    "zip": "1950",
    "city": "Newburyport"
  },
  {
    "zip": "1951",
    "city": "Newbury"
  },
  {
    "zip": "1952",
    "city": "Salisbury"
  },
  {
    "zip": "1960",
    "city": "Peabody"
  },
  {
    "zip": "1966",
    "city": "Rockport"
  },
  {
    "zip": "1969",
    "city": "Rowley"
  },
  {
    "zip": "1970",
    "city": "Salem"
  },
  {
    "zip": "1982",
    "city": "South Hamilton"
  },
  {
    "zip": "1983",
    "city": "Topsfield"
  },
  {
    "zip": "1984",
    "city": "Wenham"
  },
  {
    "zip": "1985",
    "city": "West Newbury"
  },
  {
    "zip": "2019",
    "city": "Bellingham"
  },
  {
    "zip": "2021",
    "city": "Canton"
  },
  {
    "zip": "2025",
    "city": "Cohasset"
  },
  {
    "zip": "2026",
    "city": "Dedham"
  },
  {
    "zip": "2030",
    "city": "Dover"
  },
  {
    "zip": "2031",
    "city": "East Mansfield"
  },
  {
    "zip": "2032",
    "city": "East Walpole"
  },
  {
    "zip": "2035",
    "city": "Foxboro"
  },
  {
    "zip": "2038",
    "city": "Franklin"
  },
  {
    "zip": "2043",
    "city": "Hingham"
  },
  {
    "zip": "2045",
    "city": "Hull"
  },
  {
    "zip": "2048",
    "city": "Mansfield"
  },
  {
    "zip": "2050",
    "city": "Marshfield"
  },
  {
    "zip": "2052",
    "city": "Medfield"
  },
  {
    "zip": "2053",
    "city": "Medway"
  },
  {
    "zip": "2054",
    "city": "Millis"
  },
  {
    "zip": "2056",
    "city": "Norfolk"
  },
  {
    "zip": "2061",
    "city": "Norwell"
  },
  {
    "zip": "2062",
    "city": "Norwood"
  },
  {
    "zip": "2066",
    "city": "Scituate"
  },
  {
    "zip": "2067",
    "city": "Sharon"
  },
  {
    "zip": "2071",
    "city": "South Walpole"
  },
  {
    "zip": "2072",
    "city": "Stoughton"
  },
  {
    "zip": "2081",
    "city": "Walpole"
  },
  {
    "zip": "2090",
    "city": "Westwood"
  },
  {
    "zip": "2093",
    "city": "Wrentham"
  },
  {
    "zip": "2108",
    "city": "Boston"
  },
  {
    "zip": "2119",
    "city": "Roxbury"
  },
  {
    "zip": "2120",
    "city": "Roxbury Crossing"
  },
  {
    "zip": "2121",
    "city": "Dorchester"
  },
  {
    "zip": "2124",
    "city": "Dorchester Center"
  },
  {
    "zip": "2126",
    "city": "Mattapan"
  },
  {
    "zip": "2129",
    "city": "Charlestown"
  },
  {
    "zip": "2130",
    "city": "Jamaica Plain"
  },
  {
    "zip": "2131",
    "city": "Roslindale"
  },
  {
    "zip": "2132",
    "city": "West Roxbury"
  },
  {
    "zip": "2134",
    "city": "Allston"
  },
  {
    "zip": "2135",
    "city": "Brighton"
  },
  {
    "zip": "2136",
    "city": "Hyde Park"
  },
  {
    "zip": "2138",
    "city": "Cambridge"
  },
  {
    "zip": "2143",
    "city": "Somerville"
  },
  {
    "zip": "2148",
    "city": "Malden"
  },
  {
    "zip": "2149",
    "city": "Everett"
  },
  {
    "zip": "2150",
    "city": "Chelsea"
  },
  {
    "zip": "2151",
    "city": "Revere"
  },
  {
    "zip": "2152",
    "city": "Winthrop"
  },
  {
    "zip": "2155",
    "city": "Medford"
  },
  {
    "zip": "2169",
    "city": "Quincy"
  },
  {
    "zip": "2176",
    "city": "Melrose"
  },
  {
    "zip": "2180",
    "city": "Stoneham"
  },
  {
    "zip": "2184",
    "city": "Braintree"
  },
  {
    "zip": "2186",
    "city": "Milton"
  },
  {
    "zip": "2188",
    "city": "Weymouth"
  },
  {
    "zip": "2189",
    "city": "East Weymouth"
  },
  {
    "zip": "2190",
    "city": "South Weymouth"
  },
  {
    "zip": "2191",
    "city": "North Weymouth"
  },
  {
    "zip": "2301",
    "city": "Brockton"
  },
  {
    "zip": "2322",
    "city": "Avon"
  },
  {
    "zip": "2324",
    "city": "Bridgewater"
  },
  {
    "zip": "2330",
    "city": "Carver"
  },
  {
    "zip": "2332",
    "city": "Duxbury"
  },
  {
    "zip": "2333",
    "city": "East Bridgewater"
  },
  {
    "zip": "2338",
    "city": "Halifax"
  },
  {
    "zip": "2339",
    "city": "Hanover"
  },
  {
    "zip": "2341",
    "city": "Hanson"
  },
  {
    "zip": "2343",
    "city": "Holbrook"
  },
  {
    "zip": "2346",
    "city": "Middleboro"
  },
  {
    "zip": "2347",
    "city": "Lakeville"
  },
  {
    "zip": "2351",
    "city": "Abington"
  },
  {
    "zip": "2356",
    "city": "North Easton"
  },
  {
    "zip": "2359",
    "city": "Pembroke"
  },
  {
    "zip": "2360",
    "city": "Plymouth"
  },
  {
    "zip": "2364",
    "city": "Kingston"
  },
  {
    "zip": "2367",
    "city": "Plympton"
  },
  {
    "zip": "2368",
    "city": "Randolph"
  },
  {
    "zip": "2370",
    "city": "Rockland"
  },
  {
    "zip": "2375",
    "city": "South Easton"
  },
  {
    "zip": "2379",
    "city": "West Bridgewater"
  },
  {
    "zip": "2382",
    "city": "Whitman"
  },
  {
    "zip": "2420",
    "city": "Lexington"
  },
  {
    "zip": "2445",
    "city": "Brookline"
  },
  {
    "zip": "2451",
    "city": "Waltham"
  },
  {
    "zip": "2458",
    "city": "Newton"
  },
  {
    "zip": "2459",
    "city": "Newton Center"
  },
  {
    "zip": "2460",
    "city": "Newtonville"
  },
  {
    "zip": "2461",
    "city": "Newton Highlands"
  },
  {
    "zip": "2462",
    "city": "Newton Lower Falls"
  },
  {
    "zip": "2464",
    "city": "Newton Upper Falls"
  },
  {
    "zip": "2465",
    "city": "West Newton"
  },
  {
    "zip": "2466",
    "city": "Auburndale"
  },
  {
    "zip": "2467",
    "city": "Chestnut Hill"
  },
  {
    "zip": "2468",
    "city": "Waban"
  },
  {
    "zip": "2472",
    "city": "Watertown"
  },
  {
    "zip": "2474",
    "city": "Arlington"
  },
  {
    "zip": "2478",
    "city": "Belmont"
  },
  {
    "zip": "2481",
    "city": "Wellesley Hills"
  },
  {
    "zip": "2482",
    "city": "Wellesley"
  },
  {
    "zip": "2492",
    "city": "Needham"
  },
  {
    "zip": "2493",
    "city": "Weston"
  },
  {
    "zip": "2494",
    "city": "Needham Heights"
  },
  {
    "zip": "2532",
    "city": "Buzzards Bay"
  },
  {
    "zip": "2535",
    "city": "Chilmark"
  },
  {
    "zip": "2536",
    "city": "East Falmouth"
  },
  {
    "zip": "2537",
    "city": "East Sandwich"
  },
  {
    "zip": "2538",
    "city": "East Wareham"
  },
  {
    "zip": "2539",
    "city": "Edgartown"
  },
  {
    "zip": "2540",
    "city": "Falmouth"
  },
  {
    "zip": "2543",
    "city": "Woods Hole"
  },
  {
    "zip": "2554",
    "city": "Nantucket"
  },
  {
    "zip": "2556",
    "city": "North Falmouth"
  },
  {
    "zip": "2557",
    "city": "Oak Bluffs"
  },
  {
    "zip": "2559",
    "city": "Pocasset"
  },
  {
    "zip": "2562",
    "city": "Sagamore Beach"
  },
  {
    "zip": "2563",
    "city": "Sandwich"
  },
  {
    "zip": "2568",
    "city": "Vineyard Haven"
  },
  {
    "zip": "2571",
    "city": "Wareham"
  },
  {
    "zip": "2576",
    "city": "West Wareham"
  },
  {
    "zip": "2601",
    "city": "Hyannis"
  },
  {
    "zip": "2630",
    "city": "Barnstable"
  },
  {
    "zip": "2631",
    "city": "Brewster"
  },
  {
    "zip": "2632",
    "city": "Centerville"
  },
  {
    "zip": "2633",
    "city": "Chatham"
  },
  {
    "zip": "2635",
    "city": "Cotuit"
  },
  {
    "zip": "2638",
    "city": "Dennis"
  },
  {
    "zip": "2639",
    "city": "Dennis Port"
  },
  {
    "zip": "2642",
    "city": "Eastham"
  },
  {
    "zip": "2644",
    "city": "Forestdale"
  },
  {
    "zip": "2645",
    "city": "Harwich"
  },
  {
    "zip": "2646",
    "city": "Harwich Port"
  },
  {
    "zip": "2648",
    "city": "Marstons Mills"
  },
  {
    "zip": "2649",
    "city": "Mashpee"
  },
  {
    "zip": "2650",
    "city": "North Chatham"
  },
  {
    "zip": "2653",
    "city": "Orleans"
  },
  {
    "zip": "2655",
    "city": "Osterville"
  },
  {
    "zip": "2657",
    "city": "Provincetown"
  },
  {
    "zip": "2659",
    "city": "South Chatham"
  },
  {
    "zip": "2660",
    "city": "South Dennis"
  },
  {
    "zip": "2664",
    "city": "South Yarmouth"
  },
  {
    "zip": "2667",
    "city": "Wellfleet"
  },
  {
    "zip": "2668",
    "city": "West Barnstable"
  },
  {
    "zip": "2670",
    "city": "West Dennis"
  },
  {
    "zip": "2671",
    "city": "West Harwich"
  },
  {
    "zip": "2673",
    "city": "West Yarmouth"
  },
  {
    "zip": "2675",
    "city": "Yarmouth Port"
  },
  {
    "zip": "2702",
    "city": "Assonet"
  },
  {
    "zip": "2703",
    "city": "Attleboro"
  },
  {
    "zip": "2715",
    "city": "Dighton"
  },
  {
    "zip": "2717",
    "city": "East Freetown"
  },
  {
    "zip": "2718",
    "city": "East Taunton"
  },
  {
    "zip": "2719",
    "city": "Fairhaven"
  },
  {
    "zip": "2720",
    "city": "Fall River"
  },
  {
    "zip": "2725",
    "city": "Somerset"
  },
  {
    "zip": "2738",
    "city": "Marion"
  },
  {
    "zip": "2739",
    "city": "Mattapoisett"
  },
  {
    "zip": "2740",
    "city": "New Bedford"
  },
  {
    "zip": "2743",
    "city": "Acushnet"
  },
  {
    "zip": "2747",
    "city": "North Dartmouth"
  },
  {
    "zip": "2748",
    "city": "South Dartmouth"
  },
  {
    "zip": "2760",
    "city": "North Attleboro"
  },
  {
    "zip": "2762",
    "city": "Plainville"
  },
  {
    "zip": "2763",
    "city": "Attleboro Falls"
  },
  {
    "zip": "2764",
    "city": "North Dighton"
  },
  {
    "zip": "2766",
    "city": "Norton"
  },
  {
    "zip": "2767",
    "city": "Raynham"
  },
  {
    "zip": "2769",
    "city": "Rehoboth"
  },
  {
    "zip": "2770",
    "city": "Rochester"
  },
  {
    "zip": "2771",
    "city": "Seekonk"
  },
  {
    "zip": "2777",
    "city": "Swansea"
  },
  {
    "zip": "2779",
    "city": "Berkley"
  },
  {
    "zip": "2780",
    "city": "Taunton"
  },
  {
    "zip": "2790",
    "city": "Westport"
  },
  {
    "zip": "2804",
    "city": "Ashaway"
  },
  {
    "zip": "2806",
    "city": "Barrington"
  },
  {
    "zip": "2808",
    "city": "Bradford"
  },
  {
    "zip": "2809",
    "city": "Bristol"
  },
  {
    "zip": "2814",
    "city": "Chepachet"
  },
  {
    "zip": "2815",
    "city": "Clayville"
  },
  {
    "zip": "2816",
    "city": "Coventry"
  },
  {
    "zip": "2817",
    "city": "West Greenwich"
  },
  {
    "zip": "2818",
    "city": "East Greenwich"
  },
  {
    "zip": "2822",
    "city": "Exeter"
  },
  {
    "zip": "2825",
    "city": "Foster"
  },
  {
    "zip": "2827",
    "city": "Greene"
  },
  {
    "zip": "2828",
    "city": "Greenville"
  },
  {
    "zip": "2830",
    "city": "Harrisville"
  },
  {
    "zip": "2831",
    "city": "Hope"
  },
  {
    "zip": "2832",
    "city": "Hope Valley"
  },
  {
    "zip": "2835",
    "city": "Jamestown"
  },
  {
    "zip": "2836",
    "city": "Kenyon"
  },
  {
    "zip": "2837",
    "city": "Little Compton"
  },
  {
    "zip": "2838",
    "city": "Manville"
  },
  {
    "zip": "2839",
    "city": "Mapleville"
  },
  {
    "zip": "2840",
    "city": "Newport"
  },
  {
    "zip": "2842",
    "city": "Middletown"
  },
  {
    "zip": "2852",
    "city": "North Kingstown"
  },
  {
    "zip": "2857",
    "city": "North Scituate"
  },
  {
    "zip": "2858",
    "city": "Oakland"
  },
  {
    "zip": "2859",
    "city": "Pascoag"
  },
  {
    "zip": "2860",
    "city": "Pawtucket"
  },
  {
    "zip": "2863",
    "city": "Central Falls"
  },
  {
    "zip": "2864",
    "city": "Cumberland"
  },
  {
    "zip": "2871",
    "city": "Portsmouth"
  },
  {
    "zip": "2874",
    "city": "Saunderstown"
  },
  {
    "zip": "2875",
    "city": "Shannock"
  },
  {
    "zip": "2876",
    "city": "Slatersville"
  },
  {
    "zip": "2877",
    "city": "Slocum"
  },
  {
    "zip": "2878",
    "city": "Tiverton"
  },
  {
    "zip": "2882",
    "city": "Narragansett"
  },
  {
    "zip": "2885",
    "city": "Warren"
  },
  {
    "zip": "2891",
    "city": "Westerly"
  },
  {
    "zip": "2892",
    "city": "West Kingston"
  },
  {
    "zip": "2893",
    "city": "West Warwick"
  },
  {
    "zip": "2894",
    "city": "Wood River Junction"
  },
  {
    "zip": "2895",
    "city": "Woonsocket"
  },
  {
    "zip": "2896",
    "city": "North Smithfield"
  },
  {
    "zip": "2898",
    "city": "Wyoming"
  },
  {
    "zip": "2903",
    "city": "Providence"
  },
  {
    "zip": "2910",
    "city": "Cranston"
  },
  {
    "zip": "2911",
    "city": "North Providence"
  },
  {
    "zip": "2914",
    "city": "East Providence"
  },
  {
    "zip": "2915",
    "city": "Riverside"
  },
  {
    "zip": "2916",
    "city": "Rumford"
  },
  {
    "zip": "2917",
    "city": "Smithfield"
  },
  {
    "zip": "2919",
    "city": "Johnston"
  },
  {
    "zip": "3034",
    "city": "Candia"
  },
  {
    "zip": "3038",
    "city": "Derry"
  },
  {
    "zip": "3042",
    "city": "Epping"
  },
  {
    "zip": "3043",
    "city": "Francestown"
  },
  {
    "zip": "3044",
    "city": "Fremont"
  },
  {
    "zip": "3045",
    "city": "Goffstown"
  },
  {
    "zip": "3046",
    "city": "Dunbarton"
  },
  {
    "zip": "3049",
    "city": "Hollis"
  },
  {
    "zip": "3052",
    "city": "Litchfield"
  },
  {
    "zip": "3053",
    "city": "Londonderry"
  },
  {
    "zip": "3054",
    "city": "Merrimack"
  },
  {
    "zip": "3057",
    "city": "Mont Vernon"
  },
  {
    "zip": "3060",
    "city": "Nashua"
  },
  {
    "zip": "3070",
    "city": "New Boston"
  },
  {
    "zip": "3071",
    "city": "New Ipswich"
  },
  {
    "zip": "3076",
    "city": "Pelham"
  },
  {
    "zip": "3077",
    "city": "Raymond"
  },
  {
    "zip": "3082",
    "city": "Lyndeborough"
  },
  {
    "zip": "3084",
    "city": "Temple"
  },
  {
    "zip": "3086",
    "city": "Wilton"
  },
  {
    "zip": "3087",
    "city": "Windham"
  },
  {
    "zip": "3106",
    "city": "Hooksett"
  },
  {
    "zip": "3218",
    "city": "Barnstead"
  },
  {
    "zip": "3223",
    "city": "Campton"
  },
  {
    "zip": "3224",
    "city": "Canterbury"
  },
  {
    "zip": "3225",
    "city": "Center Barnstead"
  },
  {
    "zip": "3226",
    "city": "Center Harbor"
  },
  {
    "zip": "3227",
    "city": "Center Sandwich"
  },
  {
    "zip": "3229",
    "city": "Contoocook"
  },
  {
    "zip": "3230",
    "city": "Danbury"
  },
  {
    "zip": "3233",
    "city": "Elkins"
  },
  {
    "zip": "3234",
    "city": "Epsom"
  },
  {
    "zip": "3237",
    "city": "Gilmanton"
  },
  {
    "zip": "3241",
    "city": "Hebron"
  },
  {
    "zip": "3242",
    "city": "Henniker"
  },
  {
    "zip": "3243",
    "city": "Hill"
  },
  {
    "zip": "3244",
    "city": "Hillsborough"
  },
  {
    "zip": "3245",
    "city": "Holderness"
  },
  {
    "zip": "3246",
    "city": "Laconia"
  },
  {
    "zip": "3249",
    "city": "Gilford"
  },
  {
    "zip": "3253",
    "city": "Meredith"
  },
  {
    "zip": "3254",
    "city": "Moultonborough"
  },
  {
    "zip": "3256",
    "city": "New Hampton"
  },
  {
    "zip": "3257",
    "city": "New London"
  },
  {
    "zip": "3258",
    "city": "Chichester"
  },
  {
    "zip": "3259",
    "city": "North Sandwich"
  },
  {
    "zip": "3261",
    "city": "Northwood"
  },
  {
    "zip": "3262",
    "city": "North Woodstock"
  },
  {
    "zip": "3266",
    "city": "Rumney"
  },
  {
    "zip": "3269",
    "city": "Sanbornton"
  },
  {
    "zip": "3275",
    "city": "Suncook"
  },
  {
    "zip": "3276",
    "city": "Tilton"
  },
  {
    "zip": "3278",
    "city": "Warner"
  },
  {
    "zip": "3280",
    "city": "Washington"
  },
  {
    "zip": "3281",
    "city": "Weare"
  },
  {
    "zip": "3282",
    "city": "Wentworth"
  },
  {
    "zip": "3285",
    "city": "Thornton"
  },
  {
    "zip": "3287",
    "city": "Wilmot"
  },
  {
    "zip": "3290",
    "city": "Nottingham"
  },
  {
    "zip": "3291",
    "city": "West Nottingham"
  },
  {
    "zip": "3304",
    "city": "Bow"
  },
  {
    "zip": "3307",
    "city": "Loudon"
  },
  {
    "zip": "3431",
    "city": "Keene"
  },
  {
    "zip": "3440",
    "city": "Antrim"
  },
  {
    "zip": "3441",
    "city": "Ashuelot"
  },
  {
    "zip": "3442",
    "city": "Bennington"
  },
  {
    "zip": "3444",
    "city": "Dublin"
  },
  {
    "zip": "3445",
    "city": "Sullivan"
  },
  {
    "zip": "3446",
    "city": "Swanzey"
  },
  {
    "zip": "3447",
    "city": "Fitzwilliam"
  },
  {
    "zip": "3448",
    "city": "Gilsum"
  },
  {
    "zip": "3449",
    "city": "Hancock"
  },
  {
    "zip": "3452",
    "city": "Jaffrey"
  },
  {
    "zip": "3456",
    "city": "Marlow"
  },
  {
    "zip": "3457",
    "city": "Nelson"
  },
  {
    "zip": "3458",
    "city": "Peterborough"
  },
  {
    "zip": "3461",
    "city": "Rindge"
  },
  {
    "zip": "3462",
    "city": "Spofford"
  },
  {
    "zip": "3464",
    "city": "Stoddard"
  },
  {
    "zip": "3465",
    "city": "Troy"
  },
  {
    "zip": "3467",
    "city": "Westmoreland"
  },
  {
    "zip": "3574",
    "city": "Bethlehem"
  },
  {
    "zip": "3576",
    "city": "Colebrook"
  },
  {
    "zip": "3579",
    "city": "Errol"
  },
  {
    "zip": "3580",
    "city": "Franconia"
  },
  {
    "zip": "3581",
    "city": "Gorham"
  },
  {
    "zip": "3582",
    "city": "Groveton"
  },
  {
    "zip": "3585",
    "city": "Lisbon"
  },
  {
    "zip": "3586",
    "city": "Sugar Hill"
  },
  {
    "zip": "3588",
    "city": "Milan"
  },
  {
    "zip": "3590",
    "city": "North Stratford"
  },
  {
    "zip": "3592",
    "city": "Pittsburg"
  },
  {
    "zip": "3598",
    "city": "Whitefield"
  },
  {
    "zip": "3601",
    "city": "Acworth"
  },
  {
    "zip": "3602",
    "city": "Alstead"
  },
  {
    "zip": "3605",
    "city": "Lempster"
  },
  {
    "zip": "3607",
    "city": "South Acworth"
  },
  {
    "zip": "3609",
    "city": "North Walpole"
  },
  {
    "zip": "3740",
    "city": "Bath"
  },
  {
    "zip": "3741",
    "city": "Canaan"
  },
  {
    "zip": "3743",
    "city": "Claremont"
  },
  {
    "zip": "3745",
    "city": "Cornish"
  },
  {
    "zip": "3748",
    "city": "Enfield"
  },
  {
    "zip": "3750",
    "city": "Etna"
  },
  {
    "zip": "3753",
    "city": "Grantham"
  },
  {
    "zip": "3766",
    "city": "Lebanon"
  },
  {
    "zip": "3768",
    "city": "Lyme"
  },
  {
    "zip": "3770",
    "city": "Meriden"
  },
  {
    "zip": "3771",
    "city": "Monroe"
  },
  {
    "zip": "3774",
    "city": "North Haverhill"
  },
  {
    "zip": "3777",
    "city": "Orford"
  },
  {
    "zip": "3779",
    "city": "Piermont"
  },
  {
    "zip": "3780",
    "city": "Pike"
  },
  {
    "zip": "3782",
    "city": "Sunapee"
  },
  {
    "zip": "3784",
    "city": "West Lebanon"
  },
  {
    "zip": "3785",
    "city": "Woodsville"
  },
  {
    "zip": "3805",
    "city": "Newington"
  },
  {
    "zip": "3809",
    "city": "Alton"
  },
  {
    "zip": "3810",
    "city": "Alton Bay"
  },
  {
    "zip": "3811",
    "city": "Atkinson"
  },
  {
    "zip": "3812",
    "city": "Bartlett"
  },
  {
    "zip": "3813",
    "city": "Center Conway"
  },
  {
    "zip": "3814",
    "city": "Center Ossipee"
  },
  {
    "zip": "3815",
    "city": "Center Strafford"
  },
  {
    "zip": "3816",
    "city": "Center Tuftonboro"
  },
  {
    "zip": "3817",
    "city": "Chocorua"
  },
  {
    "zip": "3819",
    "city": "Danville"
  },
  {
    "zip": "3823",
    "city": "Madbury"
  },
  {
    "zip": "3824",
    "city": "Durham"
  },
  {
    "zip": "3826",
    "city": "East Hampstead"
  },
  {
    "zip": "3827",
    "city": "East Kingston"
  },
  {
    "zip": "3830",
    "city": "East Wakefield"
  },
  {
    "zip": "3835",
    "city": "Farmington"
  },
  {
    "zip": "3836",
    "city": "Freedom"
  },
  {
    "zip": "3837",
    "city": "Gilmanton Iron Works"
  },
  {
    "zip": "3838",
    "city": "Glen"
  },
  {
    "zip": "3840",
    "city": "Greenland"
  },
  {
    "zip": "3841",
    "city": "Hampstead"
  },
  {
    "zip": "3842",
    "city": "Hampton"
  },
  {
    "zip": "3844",
    "city": "Hampton Falls"
  },
  {
    "zip": "3845",
    "city": "Intervale"
  },
  {
    "zip": "3846",
    "city": "Jackson"
  },
  {
    "zip": "3849",
    "city": "Madison"
  },
  {
    "zip": "3852",
    "city": "Milton Mills"
  },
  {
    "zip": "3853",
    "city": "Mirror Lake"
  },
  {
    "zip": "3855",
    "city": "New Durham"
  },
  {
    "zip": "3856",
    "city": "Newfields"
  },
  {
    "zip": "3857",
    "city": "Newmarket"
  },
  {
    "zip": "3860",
    "city": "North Conway"
  },
  {
    "zip": "3862",
    "city": "North Hampton"
  },
  {
    "zip": "3864",
    "city": "Ossipee"
  },
  {
    "zip": "3865",
    "city": "Plaistow"
  },
  {
    "zip": "3869",
    "city": "Rollinsford"
  },
  {
    "zip": "3870",
    "city": "Rye"
  },
  {
    "zip": "3872",
    "city": "Sanbornville"
  },
  {
    "zip": "3873",
    "city": "Sandown"
  },
  {
    "zip": "3874",
    "city": "Seabrook"
  },
  {
    "zip": "3875",
    "city": "Silver Lake"
  },
  {
    "zip": "3878",
    "city": "Somersworth"
  },
  {
    "zip": "3882",
    "city": "Effingham"
  },
  {
    "zip": "3883",
    "city": "South Tamworth"
  },
  {
    "zip": "3884",
    "city": "Strafford"
  },
  {
    "zip": "3885",
    "city": "Stratham"
  },
  {
    "zip": "3886",
    "city": "Tamworth"
  },
  {
    "zip": "3887",
    "city": "Union"
  },
  {
    "zip": "3890",
    "city": "West Ossipee"
  },
  {
    "zip": "3894",
    "city": "Wolfeboro"
  },
  {
    "zip": "3897",
    "city": "Wonalancet"
  },
  {
    "zip": "3901",
    "city": "Berwick"
  },
  {
    "zip": "3902",
    "city": "Cape Neddick"
  },
  {
    "zip": "3903",
    "city": "Eliot"
  },
  {
    "zip": "3904",
    "city": "Kittery"
  },
  {
    "zip": "3905",
    "city": "Kittery Point"
  },
  {
    "zip": "3906",
    "city": "North Berwick"
  },
  {
    "zip": "3907",
    "city": "Ogunquit"
  },
  {
    "zip": "3908",
    "city": "South Berwick"
  },
  {
    "zip": "3909",
    "city": "York"
  },
  {
    "zip": "4002",
    "city": "Alfred"
  },
  {
    "zip": "4003",
    "city": "Bailey Island"
  },
  {
    "zip": "4005",
    "city": "Biddeford"
  },
  {
    "zip": "4008",
    "city": "Bowdoinham"
  },
  {
    "zip": "4009",
    "city": "Bridgton"
  },
  {
    "zip": "4010",
    "city": "Brownfield"
  },
  {
    "zip": "4011",
    "city": "Brunswick"
  },
  {
    "zip": "4013",
    "city": "Bustins Island"
  },
  {
    "zip": "4015",
    "city": "Casco"
  },
  {
    "zip": "4017",
    "city": "Chebeague Island"
  },
  {
    "zip": "4021",
    "city": "Cumberland Center"
  },
  {
    "zip": "4022",
    "city": "Denmark"
  },
  {
    "zip": "4024",
    "city": "East Baldwin"
  },
  {
    "zip": "4029",
    "city": "Sebago"
  },
  {
    "zip": "4030",
    "city": "East Waterboro"
  },
  {
    "zip": "4032",
    "city": "Freeport"
  },
  {
    "zip": "4037",
    "city": "Fryeburg"
  },
  {
    "zip": "4039",
    "city": "Gray"
  },
  {
    "zip": "4040",
    "city": "Harrison"
  },
  {
    "zip": "4041",
    "city": "Hiram"
  },
  {
    "zip": "4042",
    "city": "Hollis Center"
  },
  {
    "zip": "4043",
    "city": "Kennebunk"
  },
  {
    "zip": "4046",
    "city": "Kennebunkport"
  },
  {
    "zip": "4047",
    "city": "Parsonsfield"
  },
  {
    "zip": "4048",
    "city": "Limerick"
  },
  {
    "zip": "4049",
    "city": "Limington"
  },
  {
    "zip": "4050",
    "city": "Long Island"
  },
  {
    "zip": "4051",
    "city": "Lovell"
  },
  {
    "zip": "4055",
    "city": "Naples"
  },
  {
    "zip": "4061",
    "city": "North Waterboro"
  },
  {
    "zip": "4064",
    "city": "Old Orchard Beach"
  },
  {
    "zip": "4066",
    "city": "Orrs Island"
  },
  {
    "zip": "4068",
    "city": "Porter"
  },
  {
    "zip": "4069",
    "city": "Pownal"
  },
  {
    "zip": "4072",
    "city": "Saco"
  },
  {
    "zip": "4073",
    "city": "Sanford"
  },
  {
    "zip": "4074",
    "city": "Scarborough"
  },
  {
    "zip": "4075",
    "city": "Sebago Lake"
  },
  {
    "zip": "4076",
    "city": "Shapleigh"
  },
  {
    "zip": "4079",
    "city": "Harpswell"
  },
  {
    "zip": "4083",
    "city": "Springvale"
  },
  {
    "zip": "4084",
    "city": "Standish"
  },
  {
    "zip": "4085",
    "city": "Steep Falls"
  },
  {
    "zip": "4086",
    "city": "Topsham"
  },
  {
    "zip": "4087",
    "city": "Waterboro"
  },
  {
    "zip": "4088",
    "city": "Waterford"
  },
  {
    "zip": "4090",
    "city": "Wells"
  },
  {
    "zip": "4091",
    "city": "West Baldwin"
  },
  {
    "zip": "4092",
    "city": "Westbrook"
  },
  {
    "zip": "4093",
    "city": "Buxton"
  },
  {
    "zip": "4095",
    "city": "West Newfield"
  },
  {
    "zip": "4096",
    "city": "Yarmouth"
  },
  {
    "zip": "4097",
    "city": "North Yarmouth"
  },
  {
    "zip": "4101",
    "city": "Portland"
  },
  {
    "zip": "4106",
    "city": "South Portland"
  },
  {
    "zip": "4107",
    "city": "Cape Elizabeth"
  },
  {
    "zip": "4108",
    "city": "Peaks Island"
  },
  {
    "zip": "4110",
    "city": "Cumberland Foreside"
  },
  {
    "zip": "4217",
    "city": "Bethel"
  },
  {
    "zip": "4219",
    "city": "Bryant Pond"
  },
  {
    "zip": "4220",
    "city": "Buckfield"
  },
  {
    "zip": "4224",
    "city": "Dixfield"
  },
  {
    "zip": "4225",
    "city": "Dryden"
  },
  {
    "zip": "4226",
    "city": "East Andover"
  },
  {
    "zip": "4228",
    "city": "East Livermore"
  },
  {
    "zip": "4239",
    "city": "Jay"
  },
  {
    "zip": "4240",
    "city": "Lewiston"
  },
  {
    "zip": "4252",
    "city": "Lisbon Falls"
  },
  {
    "zip": "4253",
    "city": "Livermore"
  },
  {
    "zip": "4254",
    "city": "Livermore Falls"
  },
  {
    "zip": "4255",
    "city": "Greenwood"
  },
  {
    "zip": "4256",
    "city": "Mechanic Falls"
  },
  {
    "zip": "4257",
    "city": "Mexico"
  },
  {
    "zip": "4258",
    "city": "Minot"
  },
  {
    "zip": "4259",
    "city": "Monmouth"
  },
  {
    "zip": "4260",
    "city": "New Gloucester"
  },
  {
    "zip": "4261",
    "city": "Newry"
  },
  {
    "zip": "4265",
    "city": "North Monmouth"
  },
  {
    "zip": "4268",
    "city": "Norway"
  },
  {
    "zip": "4274",
    "city": "Poland"
  },
  {
    "zip": "4280",
    "city": "Sabattus"
  },
  {
    "zip": "4281",
    "city": "South Paris"
  },
  {
    "zip": "4282",
    "city": "Turner"
  },
  {
    "zip": "4284",
    "city": "Wayne"
  },
  {
    "zip": "4285",
    "city": "Weld"
  },
  {
    "zip": "4287",
    "city": "Bowdoin"
  },
  {
    "zip": "4289",
    "city": "West Paris"
  },
  {
    "zip": "4290",
    "city": "Peru"
  },
  {
    "zip": "4292",
    "city": "Sumner"
  },
  {
    "zip": "4330",
    "city": "Augusta"
  },
  {
    "zip": "4342",
    "city": "Dresden"
  },
  {
    "zip": "4344",
    "city": "Farmingdale"
  },
  {
    "zip": "4345",
    "city": "Gardiner"
  },
  {
    "zip": "4347",
    "city": "Hallowell"
  },
  {
    "zip": "4349",
    "city": "Kents Hill"
  },
  {
    "zip": "4352",
    "city": "Mount Vernon"
  },
  {
    "zip": "4354",
    "city": "Palermo"
  },
  {
    "zip": "4355",
    "city": "Readfield"
  },
  {
    "zip": "4358",
    "city": "South China"
  },
  {
    "zip": "4360",
    "city": "Vienna"
  },
  {
    "zip": "4401",
    "city": "Bangor"
  },
  {
    "zip": "4406",
    "city": "Abbot"
  },
  {
    "zip": "4408",
    "city": "Aurora"
  },
  {
    "zip": "4411",
    "city": "Bradley"
  },
  {
    "zip": "4412",
    "city": "Brewer"
  },
  {
    "zip": "4413",
    "city": "Brookton"
  },
  {
    "zip": "4414",
    "city": "Brownville"
  },
  {
    "zip": "4416",
    "city": "Bucksport"
  },
  {
    "zip": "4418",
    "city": "Greenbush"
  },
  {
    "zip": "4419",
    "city": "Carmel"
  },
  {
    "zip": "4421",
    "city": "Castine"
  },
  {
    "zip": "4422",
    "city": "Charleston"
  },
  {
    "zip": "4424",
    "city": "Danforth"
  },
  {
    "zip": "4426",
    "city": "Dover Foxcroft"
  },
  {
    "zip": "4427",
    "city": "Corinth"
  },
  {
    "zip": "4428",
    "city": "Eddington"
  },
  {
    "zip": "4430",
    "city": "East Millinocket"
  },
  {
    "zip": "4438",
    "city": "Frankfort"
  },
  {
    "zip": "4442",
    "city": "Greenville Junction"
  },
  {
    "zip": "4443",
    "city": "Guilford"
  },
  {
    "zip": "4448",
    "city": "Howland"
  },
  {
    "zip": "4450",
    "city": "Kenduskeag"
  },
  {
    "zip": "4451",
    "city": "Kingman"
  },
  {
    "zip": "4453",
    "city": "Lagrange"
  },
  {
    "zip": "4456",
    "city": "Levant"
  },
  {
    "zip": "4459",
    "city": "Mattawamkeag"
  },
  {
    "zip": "4462",
    "city": "Millinocket"
  },
  {
    "zip": "4463",
    "city": "Milo"
  },
  {
    "zip": "4468",
    "city": "Old Town"
  },
  {
    "zip": "4471",
    "city": "Orient"
  },
  {
    "zip": "4472",
    "city": "Orland"
  },
  {
    "zip": "4473",
    "city": "Orono"
  },
  {
    "zip": "4474",
    "city": "Orrington"
  },
  {
    "zip": "4475",
    "city": "Passadumkeag"
  },
  {
    "zip": "4476",
    "city": "Penobscot"
  },
  {
    "zip": "4478",
    "city": "Rockwood"
  },
  {
    "zip": "4479",
    "city": "Sangerville"
  },
  {
    "zip": "4488",
    "city": "Stetson"
  },
  {
    "zip": "4492",
    "city": "Waite"
  },
  {
    "zip": "4493",
    "city": "West Enfield"
  },
  {
    "zip": "4495",
    "city": "Winn"
  },
  {
    "zip": "4496",
    "city": "Winterport"
  },
  {
    "zip": "4497",
    "city": "Wytopitlock"
  },
  {
    "zip": "4535",
    "city": "Alna"
  },
  {
    "zip": "4537",
    "city": "Boothbay"
  },
  {
    "zip": "4538",
    "city": "Boothbay Harbor"
  },
  {
    "zip": "4541",
    "city": "Chamberlain"
  },
  {
    "zip": "4543",
    "city": "Damariscotta"
  },
  {
    "zip": "4544",
    "city": "East Boothbay"
  },
  {
    "zip": "4547",
    "city": "Friendship"
  },
  {
    "zip": "4549",
    "city": "Isle Of Springs"
  },
  {
    "zip": "4551",
    "city": "Bremen"
  },
  {
    "zip": "4553",
    "city": "Newcastle"
  },
  {
    "zip": "4554",
    "city": "New Harbor"
  },
  {
    "zip": "4555",
    "city": "Nobleboro"
  },
  {
    "zip": "4556",
    "city": "Edgecomb"
  },
  {
    "zip": "4558",
    "city": "Pemaquid"
  },
  {
    "zip": "4562",
    "city": "Phippsburg"
  },
  {
    "zip": "4563",
    "city": "Cushing"
  },
  {
    "zip": "4564",
    "city": "Round Pond"
  },
  {
    "zip": "4568",
    "city": "South Bristol"
  },
  {
    "zip": "4571",
    "city": "Trevett"
  },
  {
    "zip": "4572",
    "city": "Waldoboro"
  },
  {
    "zip": "4576",
    "city": "Southport"
  },
  {
    "zip": "4578",
    "city": "Wiscasset"
  },
  {
    "zip": "4579",
    "city": "Woolwich"
  },
  {
    "zip": "4605",
    "city": "Ellsworth"
  },
  {
    "zip": "4606",
    "city": "Addison"
  },
  {
    "zip": "4607",
    "city": "Gouldsboro"
  },
  {
    "zip": "4609",
    "city": "Bar Harbor"
  },
  {
    "zip": "4612",
    "city": "Bernard"
  },
  {
    "zip": "4613",
    "city": "Birch Harbor"
  },
  {
    "zip": "4614",
    "city": "Blue Hill"
  },
  {
    "zip": "4616",
    "city": "Brooklin"
  },
  {
    "zip": "4617",
    "city": "Brooksville"
  },
  {
    "zip": "4619",
    "city": "Calais"
  },
  {
    "zip": "4622",
    "city": "Cherryfield"
  },
  {
    "zip": "4623",
    "city": "Columbia Falls"
  },
  {
    "zip": "4624",
    "city": "Corea"
  },
  {
    "zip": "4626",
    "city": "Cutler"
  },
  {
    "zip": "4627",
    "city": "Deer Isle"
  },
  {
    "zip": "4628",
    "city": "Dennysville"
  },
  {
    "zip": "4630",
    "city": "East Machias"
  },
  {
    "zip": "4631",
    "city": "Eastport"
  },
  {
    "zip": "4642",
    "city": "Harborside"
  },
  {
    "zip": "4643",
    "city": "Harrington"
  },
  {
    "zip": "4648",
    "city": "Jonesboro"
  },
  {
    "zip": "4649",
    "city": "Jonesport"
  },
  {
    "zip": "4650",
    "city": "Little Deer Isle"
  },
  {
    "zip": "4652",
    "city": "Lubec"
  },
  {
    "zip": "4653",
    "city": "Bass Harbor"
  },
  {
    "zip": "4654",
    "city": "Machias"
  },
  {
    "zip": "4655",
    "city": "Machiasport"
  },
  {
    "zip": "4657",
    "city": "Meddybemps"
  },
  {
    "zip": "4658",
    "city": "Milbridge"
  },
  {
    "zip": "4660",
    "city": "Mount Desert"
  },
  {
    "zip": "4667",
    "city": "Perry"
  },
  {
    "zip": "4669",
    "city": "Prospect Harbor"
  },
  {
    "zip": "4671",
    "city": "Robbinston"
  },
  {
    "zip": "4673",
    "city": "Sargentville"
  },
  {
    "zip": "4674",
    "city": "Seal Cove"
  },
  {
    "zip": "4676",
    "city": "Sedgwick"
  },
  {
    "zip": "4677",
    "city": "Sorrento"
  },
  {
    "zip": "4679",
    "city": "Southwest Harbor"
  },
  {
    "zip": "4680",
    "city": "Steuben"
  },
  {
    "zip": "4681",
    "city": "Stonington"
  },
  {
    "zip": "4683",
    "city": "Sunset"
  },
  {
    "zip": "4684",
    "city": "Surry"
  },
  {
    "zip": "4685",
    "city": "Swans Island"
  },
  {
    "zip": "4686",
    "city": "Wesley"
  },
  {
    "zip": "4691",
    "city": "Whiting"
  },
  {
    "zip": "4693",
    "city": "Winter Harbor"
  },
  {
    "zip": "4694",
    "city": "Baileyville"
  },
  {
    "zip": "4730",
    "city": "Houlton"
  },
  {
    "zip": "4733",
    "city": "Benedicta"
  },
  {
    "zip": "4736",
    "city": "Caribou"
  },
  {
    "zip": "4737",
    "city": "Clayton Lake"
  },
  {
    "zip": "4739",
    "city": "Eagle Lake"
  },
  {
    "zip": "4740",
    "city": "Easton"
  },
  {
    "zip": "4742",
    "city": "Fort Fairfield"
  },
  {
    "zip": "4743",
    "city": "Fort Kent"
  },
  {
    "zip": "4745",
    "city": "Frenchville"
  },
  {
    "zip": "4746",
    "city": "Grand Isle"
  },
  {
    "zip": "4747",
    "city": "Island Falls"
  },
  {
    "zip": "4750",
    "city": "Limestone"
  },
  {
    "zip": "4756",
    "city": "Madawaska"
  },
  {
    "zip": "4757",
    "city": "Mapleton"
  },
  {
    "zip": "4758",
    "city": "Mars Hill"
  },
  {
    "zip": "4760",
    "city": "Monticello"
  },
  {
    "zip": "4762",
    "city": "New Sweden"
  },
  {
    "zip": "4763",
    "city": "Oakfield"
  },
  {
    "zip": "4764",
    "city": "Oxbow"
  },
  {
    "zip": "4765",
    "city": "Patten"
  },
  {
    "zip": "4766",
    "city": "Perham"
  },
  {
    "zip": "4768",
    "city": "Portage"
  },
  {
    "zip": "4769",
    "city": "Presque Isle"
  },
  {
    "zip": "4772",
    "city": "Saint Agatha"
  },
  {
    "zip": "4773",
    "city": "Saint David"
  },
  {
    "zip": "4774",
    "city": "Saint Francis"
  },
  {
    "zip": "4776",
    "city": "Sherman"
  },
  {
    "zip": "4777",
    "city": "Stacyville"
  },
  {
    "zip": "4779",
    "city": "Sinclair"
  },
  {
    "zip": "4780",
    "city": "Smyrna Mills"
  },
  {
    "zip": "4781",
    "city": "Wallagrass"
  },
  {
    "zip": "4783",
    "city": "Stockholm"
  },
  {
    "zip": "4785",
    "city": "Van Buren"
  },
  {
    "zip": "4786",
    "city": "Washburn"
  },
  {
    "zip": "4843",
    "city": "Camden"
  },
  {
    "zip": "4848",
    "city": "Islesboro"
  },
  {
    "zip": "4849",
    "city": "Lincolnville"
  },
  {
    "zip": "4853",
    "city": "North Haven"
  },
  {
    "zip": "4854",
    "city": "Owls Head"
  },
  {
    "zip": "4858",
    "city": "South Thomaston"
  },
  {
    "zip": "4859",
    "city": "Spruce Head"
  },
  {
    "zip": "4860",
    "city": "Tenants Harbor"
  },
  {
    "zip": "4861",
    "city": "Thomaston"
  },
  {
    "zip": "4863",
    "city": "Vinalhaven"
  },
  {
    "zip": "4901",
    "city": "Waterville"
  },
  {
    "zip": "4910",
    "city": "Albion"
  },
  {
    "zip": "4911",
    "city": "Anson"
  },
  {
    "zip": "4912",
    "city": "Athens"
  },
  {
    "zip": "4915",
    "city": "Belfast"
  },
  {
    "zip": "4917",
    "city": "Belgrade"
  },
  {
    "zip": "4918",
    "city": "Belgrade Lakes"
  },
  {
    "zip": "4920",
    "city": "Bingham"
  },
  {
    "zip": "4921",
    "city": "Brooks"
  },
  {
    "zip": "4922",
    "city": "Burnham"
  },
  {
    "zip": "4925",
    "city": "Caratunk"
  },
  {
    "zip": "4928",
    "city": "Corinna"
  },
  {
    "zip": "4929",
    "city": "Detroit"
  },
  {
    "zip": "4930",
    "city": "Dexter"
  },
  {
    "zip": "4932",
    "city": "Dixmont"
  },
  {
    "zip": "4936",
    "city": "Eustis"
  },
  {
    "zip": "4937",
    "city": "Fairfield"
  },
  {
    "zip": "4939",
    "city": "Garland"
  },
  {
    "zip": "4942",
    "city": "Harmony"
  },
  {
    "zip": "4943",
    "city": "Hartland"
  },
  {
    "zip": "4945",
    "city": "Jackman"
  },
  {
    "zip": "4947",
    "city": "Kingfield"
  },
  {
    "zip": "4949",
    "city": "Liberty"
  },
  {
    "zip": "4952",
    "city": "Morrill"
  },
  {
    "zip": "4955",
    "city": "New Sharon"
  },
  {
    "zip": "4956",
    "city": "New Vineyard"
  },
  {
    "zip": "4957",
    "city": "Norridgewock"
  },
  {
    "zip": "4958",
    "city": "North Anson"
  },
  {
    "zip": "4961",
    "city": "New Portland"
  },
  {
    "zip": "4962",
    "city": "North Vassalboro"
  },
  {
    "zip": "4965",
    "city": "Palmyra"
  },
  {
    "zip": "4966",
    "city": "Phillips"
  },
  {
    "zip": "4970",
    "city": "Rangeley"
  },
  {
    "zip": "4971",
    "city": "Saint Albans"
  },
  {
    "zip": "4973",
    "city": "Searsmont"
  },
  {
    "zip": "4974",
    "city": "Searsport"
  },
  {
    "zip": "4976",
    "city": "Skowhegan"
  },
  {
    "zip": "4979",
    "city": "Solon"
  },
  {
    "zip": "4981",
    "city": "Stockton Springs"
  },
  {
    "zip": "4982",
    "city": "Stratton"
  },
  {
    "zip": "4983",
    "city": "Strong"
  },
  {
    "zip": "4985",
    "city": "West Forks"
  },
  {
    "zip": "4986",
    "city": "Thorndike"
  },
  {
    "zip": "4988",
    "city": "Unity"
  },
  {
    "zip": "4989",
    "city": "Vassalboro"
  },
  {
    "zip": "5001",
    "city": "White River Junction"
  },
  {
    "zip": "5035",
    "city": "Bridgewater Corners"
  },
  {
    "zip": "5037",
    "city": "Brownsville"
  },
  {
    "zip": "5040",
    "city": "East Corinth"
  },
  {
    "zip": "5041",
    "city": "East Randolph"
  },
  {
    "zip": "5042",
    "city": "East Ryegate"
  },
  {
    "zip": "5043",
    "city": "East Thetford"
  },
  {
    "zip": "5045",
    "city": "Fairlee"
  },
  {
    "zip": "5052",
    "city": "North Hartland"
  },
  {
    "zip": "5053",
    "city": "North Pomfret"
  },
  {
    "zip": "5055",
    "city": "Norwich"
  },
  {
    "zip": "5058",
    "city": "Post Mills"
  },
  {
    "zip": "5061",
    "city": "Randolph Center"
  },
  {
    "zip": "5067",
    "city": "South Pomfret"
  },
  {
    "zip": "5068",
    "city": "South Royalton"
  },
  {
    "zip": "5069",
    "city": "South Ryegate"
  },
  {
    "zip": "5070",
    "city": "South Strafford"
  },
  {
    "zip": "5071",
    "city": "South Woodstock"
  },
  {
    "zip": "5073",
    "city": "Taftsville"
  },
  {
    "zip": "5075",
    "city": "Thetford Center"
  },
  {
    "zip": "5077",
    "city": "Tunbridge"
  },
  {
    "zip": "5079",
    "city": "Vershire"
  },
  {
    "zip": "5081",
    "city": "Wells River"
  },
  {
    "zip": "5083",
    "city": "West Fairlee"
  },
  {
    "zip": "5084",
    "city": "West Hartford"
  },
  {
    "zip": "5086",
    "city": "West Topsham"
  },
  {
    "zip": "5091",
    "city": "Woodstock"
  },
  {
    "zip": "5101",
    "city": "Bellows Falls"
  },
  {
    "zip": "5141",
    "city": "Cambridgeport"
  },
  {
    "zip": "5142",
    "city": "Cavendish"
  },
  {
    "zip": "5150",
    "city": "North Springfield"
  },
  {
    "zip": "5151",
    "city": "Perkinsville"
  },
  {
    "zip": "5153",
    "city": "Proctorsville"
  },
  {
    "zip": "5154",
    "city": "Saxtons River"
  },
  {
    "zip": "5155",
    "city": "South Londonderry"
  },
  {
    "zip": "5251",
    "city": "Dorset"
  },
  {
    "zip": "5252",
    "city": "East Arlington"
  },
  {
    "zip": "5253",
    "city": "East Dorset"
  },
  {
    "zip": "5255",
    "city": "Manchester Center"
  },
  {
    "zip": "5257",
    "city": "North Bennington"
  },
  {
    "zip": "5260",
    "city": "North Pownal"
  },
  {
    "zip": "5262",
    "city": "Shaftsbury"
  },
  {
    "zip": "5301",
    "city": "Brattleboro"
  },
  {
    "zip": "5340",
    "city": "Bondville"
  },
  {
    "zip": "5341",
    "city": "East Dover"
  },
  {
    "zip": "5342",
    "city": "Jacksonville"
  },
  {
    "zip": "5343",
    "city": "Jamaica"
  },
  {
    "zip": "5345",
    "city": "Newfane"
  },
  {
    "zip": "5346",
    "city": "Putney"
  },
  {
    "zip": "5350",
    "city": "Readsboro"
  },
  {
    "zip": "5351",
    "city": "South Newfane"
  },
  {
    "zip": "5352",
    "city": "Stamford"
  },
  {
    "zip": "5353",
    "city": "Townshend"
  },
  {
    "zip": "5354",
    "city": "Vernon"
  },
  {
    "zip": "5355",
    "city": "Wardsboro"
  },
  {
    "zip": "5356",
    "city": "West Dover"
  },
  {
    "zip": "5358",
    "city": "West Halifax"
  },
  {
    "zip": "5359",
    "city": "West Townshend"
  },
  {
    "zip": "5360",
    "city": "West Wardsboro"
  },
  {
    "zip": "5361",
    "city": "Whitingham"
  },
  {
    "zip": "5362",
    "city": "Williamsville"
  },
  {
    "zip": "5403",
    "city": "South Burlington"
  },
  {
    "zip": "5404",
    "city": "Winooski"
  },
  {
    "zip": "5440",
    "city": "Alburgh"
  },
  {
    "zip": "5441",
    "city": "Bakersfield"
  },
  {
    "zip": "5442",
    "city": "Belvidere Center"
  },
  {
    "zip": "5445",
    "city": "Charlotte"
  },
  {
    "zip": "5446",
    "city": "Colchester"
  },
  {
    "zip": "5447",
    "city": "East Berkshire"
  },
  {
    "zip": "5448",
    "city": "East Fairfield"
  },
  {
    "zip": "5450",
    "city": "Enosburg Falls"
  },
  {
    "zip": "5452",
    "city": "Essex Junction"
  },
  {
    "zip": "5454",
    "city": "Fairfax"
  },
  {
    "zip": "5456",
    "city": "Ferrisburgh"
  },
  {
    "zip": "5459",
    "city": "Highgate Center"
  },
  {
    "zip": "5461",
    "city": "Hinesburg"
  },
  {
    "zip": "5463",
    "city": "Isle La Motte"
  },
  {
    "zip": "5464",
    "city": "Jeffersonville"
  },
  {
    "zip": "5465",
    "city": "Jericho"
  },
  {
    "zip": "5471",
    "city": "Montgomery Center"
  },
  {
    "zip": "5472",
    "city": "New Haven"
  },
  {
    "zip": "5473",
    "city": "North Ferrisburgh"
  },
  {
    "zip": "5474",
    "city": "North Hero"
  },
  {
    "zip": "5476",
    "city": "Richford"
  },
  {
    "zip": "5482",
    "city": "Shelburne"
  },
  {
    "zip": "5483",
    "city": "Sheldon"
  },
  {
    "zip": "5486",
    "city": "South Hero"
  },
  {
    "zip": "5487",
    "city": "Starksboro"
  },
  {
    "zip": "5488",
    "city": "Swanton"
  },
  {
    "zip": "5489",
    "city": "Underhill"
  },
  {
    "zip": "5491",
    "city": "Vergennes"
  },
  {
    "zip": "5495",
    "city": "Williston"
  },
  {
    "zip": "5602",
    "city": "Montpelier"
  },
  {
    "zip": "5640",
    "city": "Adamant"
  },
  {
    "zip": "5647",
    "city": "Cabot"
  },
  {
    "zip": "5649",
    "city": "East Barre"
  },
  {
    "zip": "5650",
    "city": "East Calais"
  },
  {
    "zip": "5651",
    "city": "East Montpelier"
  },
  {
    "zip": "5652",
    "city": "Eden"
  },
  {
    "zip": "5653",
    "city": "Eden Mills"
  },
  {
    "zip": "5654",
    "city": "Graniteville"
  },
  {
    "zip": "5656",
    "city": "Johnson"
  },
  {
    "zip": "5660",
    "city": "Moretown"
  },
  {
    "zip": "5661",
    "city": "Morrisville"
  },
  {
    "zip": "5666",
    "city": "North Montpelier"
  },
  {
    "zip": "5672",
    "city": "Stowe"
  },
  {
    "zip": "5673",
    "city": "Waitsfield"
  },
  {
    "zip": "5676",
    "city": "Waterbury"
  },
  {
    "zip": "5677",
    "city": "Waterbury Center"
  },
  {
    "zip": "5680",
    "city": "Wolcott"
  },
  {
    "zip": "5681",
    "city": "Woodbury"
  },
  {
    "zip": "5732",
    "city": "Bomoseen"
  },
  {
    "zip": "5733",
    "city": "Brandon"
  },
  {
    "zip": "5734",
    "city": "Bridport"
  },
  {
    "zip": "5735",
    "city": "Castleton"
  },
  {
    "zip": "5736",
    "city": "Center Rutland"
  },
  {
    "zip": "5737",
    "city": "Chittenden"
  },
  {
    "zip": "5738",
    "city": "Cuttingsville"
  },
  {
    "zip": "5739",
    "city": "Danby"
  },
  {
    "zip": "5742",
    "city": "East Wallingford"
  },
  {
    "zip": "5743",
    "city": "Fair Haven"
  },
  {
    "zip": "5751",
    "city": "Killington"
  },
  {
    "zip": "5753",
    "city": "Middlebury"
  },
  {
    "zip": "5757",
    "city": "Middletown Springs"
  },
  {
    "zip": "5758",
    "city": "Mount Holly"
  },
  {
    "zip": "5759",
    "city": "North Clarendon"
  },
  {
    "zip": "5760",
    "city": "Orwell"
  },
  {
    "zip": "5761",
    "city": "Pawlet"
  },
  {
    "zip": "5763",
    "city": "Pittsford"
  },
  {
    "zip": "5764",
    "city": "Poultney"
  },
  {
    "zip": "5765",
    "city": "Proctor"
  },
  {
    "zip": "5766",
    "city": "Ripton"
  },
  {
    "zip": "5770",
    "city": "Shoreham"
  },
  {
    "zip": "5772",
    "city": "Stockbridge"
  },
  {
    "zip": "5773",
    "city": "Wallingford"
  },
  {
    "zip": "5775",
    "city": "West Pawlet"
  },
  {
    "zip": "5776",
    "city": "West Rupert"
  },
  {
    "zip": "5777",
    "city": "West Rutland"
  },
  {
    "zip": "5819",
    "city": "Saint Johnsbury"
  },
  {
    "zip": "5820",
    "city": "Albany"
  },
  {
    "zip": "5821",
    "city": "Barnet"
  },
  {
    "zip": "5822",
    "city": "Barton"
  },
  {
    "zip": "5826",
    "city": "Craftsbury"
  },
  {
    "zip": "5827",
    "city": "Craftsbury Common"
  },
  {
    "zip": "5829",
    "city": "Derby"
  },
  {
    "zip": "5830",
    "city": "Derby Line"
  },
  {
    "zip": "5832",
    "city": "East Burke"
  },
  {
    "zip": "5833",
    "city": "East Charleston"
  },
  {
    "zip": "5836",
    "city": "East Hardwick"
  },
  {
    "zip": "5837",
    "city": "East Haven"
  },
  {
    "zip": "5839",
    "city": "Glover"
  },
  {
    "zip": "5841",
    "city": "Greensboro"
  },
  {
    "zip": "5842",
    "city": "Greensboro Bend"
  },
  {
    "zip": "5843",
    "city": "Hardwick"
  },
  {
    "zip": "5845",
    "city": "Irasburg"
  },
  {
    "zip": "5846",
    "city": "Island Pond"
  },
  {
    "zip": "5850",
    "city": "Lyndon Center"
  },
  {
    "zip": "5851",
    "city": "Lyndonville"
  },
  {
    "zip": "5853",
    "city": "Morgan"
  },
  {
    "zip": "5857",
    "city": "Newport Center"
  },
  {
    "zip": "5858",
    "city": "North Concord"
  },
  {
    "zip": "5859",
    "city": "North Troy"
  },
  {
    "zip": "5862",
    "city": "Peacham"
  },
  {
    "zip": "5871",
    "city": "West Burke"
  },
  {
    "zip": "5872",
    "city": "West Charleston"
  },
  {
    "zip": "5873",
    "city": "West Danville"
  },
  {
    "zip": "5875",
    "city": "West Glover"
  },
  {
    "zip": "5902",
    "city": "Beecher Falls"
  },
  {
    "zip": "5904",
    "city": "Gilman"
  },
  {
    "zip": "5905",
    "city": "Guildhall"
  },
  {
    "zip": "6002",
    "city": "Bloomfield"
  },
  {
    "zip": "6016",
    "city": "Broad Brook"
  },
  {
    "zip": "6020",
    "city": "Canton Center"
  },
  {
    "zip": "6022",
    "city": "Collinsville"
  },
  {
    "zip": "6023",
    "city": "East Berlin"
  },
  {
    "zip": "6024",
    "city": "East Canaan"
  },
  {
    "zip": "6026",
    "city": "East Granby"
  },
  {
    "zip": "6027",
    "city": "East Hartland"
  },
  {
    "zip": "6029",
    "city": "Ellington"
  },
  {
    "zip": "6031",
    "city": "Falls Village"
  },
  {
    "zip": "6033",
    "city": "Glastonbury"
  },
  {
    "zip": "6051",
    "city": "New Britain"
  },
  {
    "zip": "6057",
    "city": "New Hartford"
  },
  {
    "zip": "6059",
    "city": "North Canton"
  },
  {
    "zip": "6060",
    "city": "North Granby"
  },
  {
    "zip": "6063",
    "city": "Barkhamsted"
  },
  {
    "zip": "6065",
    "city": "Riverton"
  },
  {
    "zip": "6066",
    "city": "Vernon Rockville"
  },
  {
    "zip": "6067",
    "city": "Rocky Hill"
  },
  {
    "zip": "6070",
    "city": "Simsbury"
  },
  {
    "zip": "6071",
    "city": "Somers"
  },
  {
    "zip": "6073",
    "city": "South Glastonbury"
  },
  {
    "zip": "6074",
    "city": "South Windsor"
  },
  {
    "zip": "6076",
    "city": "Stafford Springs"
  },
  {
    "zip": "6078",
    "city": "Suffield"
  },
  {
    "zip": "6081",
    "city": "Tariffville"
  },
  {
    "zip": "6084",
    "city": "Tolland"
  },
  {
    "zip": "6085",
    "city": "Unionville"
  },
  {
    "zip": "6088",
    "city": "East Windsor"
  },
  {
    "zip": "6089",
    "city": "Weatogue"
  },
  {
    "zip": "6090",
    "city": "West Granby"
  },
  {
    "zip": "6091",
    "city": "West Hartland"
  },
  {
    "zip": "6092",
    "city": "West Simsbury"
  },
  {
    "zip": "6093",
    "city": "West Suffield"
  },
  {
    "zip": "6096",
    "city": "Windsor Locks"
  },
  {
    "zip": "6098",
    "city": "Winsted"
  },
  {
    "zip": "6101",
    "city": "Hartford"
  },
  {
    "zip": "6108",
    "city": "East Hartford"
  },
  {
    "zip": "6109",
    "city": "Wethersfield"
  },
  {
    "zip": "6226",
    "city": "Willimantic"
  },
  {
    "zip": "6231",
    "city": "Amston"
  },
  {
    "zip": "6234",
    "city": "Brooklyn"
  },
  {
    "zip": "6235",
    "city": "Chaplin"
  },
  {
    "zip": "6237",
    "city": "Columbia"
  },
  {
    "zip": "6239",
    "city": "Danielson"
  },
  {
    "zip": "6241",
    "city": "Dayville"
  },
  {
    "zip": "6242",
    "city": "Eastford"
  },
  {
    "zip": "6243",
    "city": "East Killingly"
  },
  {
    "zip": "6250",
    "city": "Mansfield Center"
  },
  {
    "zip": "6254",
    "city": "North Franklin"
  },
  {
    "zip": "6255",
    "city": "North Grosvenordale"
  },
  {
    "zip": "6256",
    "city": "North Windham"
  },
  {
    "zip": "6259",
    "city": "Pomfret Center"
  },
  {
    "zip": "6260",
    "city": "Putnam"
  },
  {
    "zip": "6262",
    "city": "Quinebaug"
  },
  {
    "zip": "6264",
    "city": "Scotland"
  },
  {
    "zip": "6266",
    "city": "South Windham"
  },
  {
    "zip": "6268",
    "city": "Storrs Mansfield"
  },
  {
    "zip": "6277",
    "city": "Thompson"
  },
  {
    "zip": "6278",
    "city": "Ashford"
  },
  {
    "zip": "6279",
    "city": "Willington"
  },
  {
    "zip": "6282",
    "city": "Woodstock Valley"
  },
  {
    "zip": "6330",
    "city": "Baltic"
  },
  {
    "zip": "6333",
    "city": "East Lyme"
  },
  {
    "zip": "6335",
    "city": "Gales Ferry"
  },
  {
    "zip": "6339",
    "city": "Ledyard"
  },
  {
    "zip": "6351",
    "city": "Jewett City"
  },
  {
    "zip": "6353",
    "city": "Montville"
  },
  {
    "zip": "6354",
    "city": "Moosup"
  },
  {
    "zip": "6355",
    "city": "Mystic"
  },
  {
    "zip": "6357",
    "city": "Niantic"
  },
  {
    "zip": "6359",
    "city": "North Stonington"
  },
  {
    "zip": "6365",
    "city": "Preston"
  },
  {
    "zip": "6370",
    "city": "Oakdale"
  },
  {
    "zip": "6371",
    "city": "Old Lyme"
  },
  {
    "zip": "6375",
    "city": "Quaker Hill"
  },
  {
    "zip": "6379",
    "city": "Pawcatuck"
  },
  {
    "zip": "6380",
    "city": "Taftville"
  },
  {
    "zip": "6382",
    "city": "Uncasville"
  },
  {
    "zip": "6384",
    "city": "Voluntown"
  },
  {
    "zip": "6401",
    "city": "Ansonia"
  },
  {
    "zip": "6403",
    "city": "Beacon Falls"
  },
  {
    "zip": "6405",
    "city": "Branford"
  },
  {
    "zip": "6409",
    "city": "Centerbrook"
  },
  {
    "zip": "6416",
    "city": "Cromwell"
  },
  {
    "zip": "6417",
    "city": "Deep River"
  },
  {
    "zip": "6419",
    "city": "Killingworth"
  },
  {
    "zip": "6423",
    "city": "East Haddam"
  },
  {
    "zip": "6424",
    "city": "East Hampton"
  },
  {
    "zip": "6438",
    "city": "Haddam"
  },
  {
    "zip": "6441",
    "city": "Higganum"
  },
  {
    "zip": "6442",
    "city": "Ivoryton"
  },
  {
    "zip": "6455",
    "city": "Middlefield"
  },
  {
    "zip": "6469",
    "city": "Moodus"
  },
  {
    "zip": "6470",
    "city": "Newtown"
  },
  {
    "zip": "6471",
    "city": "North Branford"
  },
  {
    "zip": "6472",
    "city": "Northford"
  },
  {
    "zip": "6475",
    "city": "Old Saybrook"
  },
  {
    "zip": "6479",
    "city": "Plantsville"
  },
  {
    "zip": "6481",
    "city": "Rockfall"
  },
  {
    "zip": "6482",
    "city": "Sandy Hook"
  },
  {
    "zip": "6483",
    "city": "Seymour"
  },
  {
    "zip": "6484",
    "city": "Shelton"
  },
  {
    "zip": "6488",
    "city": "Southbury"
  },
  {
    "zip": "6489",
    "city": "Southington"
  },
  {
    "zip": "6497",
    "city": "Stratford"
  },
  {
    "zip": "6514",
    "city": "Hamden"
  },
  {
    "zip": "6516",
    "city": "West Haven"
  },
  {
    "zip": "6524",
    "city": "Bethany"
  },
  {
    "zip": "6525",
    "city": "Woodbridge"
  },
  {
    "zip": "6604",
    "city": "Bridgeport"
  },
  {
    "zip": "6611",
    "city": "Trumbull"
  },
  {
    "zip": "6712",
    "city": "Prospect"
  },
  {
    "zip": "6750",
    "city": "Bantam"
  },
  {
    "zip": "6754",
    "city": "Cornwall Bridge"
  },
  {
    "zip": "6755",
    "city": "Gaylordsville"
  },
  {
    "zip": "6757",
    "city": "Kent"
  },
  {
    "zip": "6758",
    "city": "Lakeside"
  },
  {
    "zip": "6763",
    "city": "Morris"
  },
  {
    "zip": "6770",
    "city": "Naugatuck"
  },
  {
    "zip": "6776",
    "city": "New Milford"
  },
  {
    "zip": "6777",
    "city": "New Preston Marble Dale"
  },
  {
    "zip": "6779",
    "city": "Oakville"
  },
  {
    "zip": "6785",
    "city": "South Kent"
  },
  {
    "zip": "6786",
    "city": "Terryville"
  },
  {
    "zip": "6790",
    "city": "Torrington"
  },
  {
    "zip": "6791",
    "city": "Harwinton"
  },
  {
    "zip": "6794",
    "city": "Washington Depot"
  },
  {
    "zip": "6796",
    "city": "West Cornwall"
  },
  {
    "zip": "6807",
    "city": "Cos Cob"
  },
  {
    "zip": "6812",
    "city": "New Fairfield"
  },
  {
    "zip": "6820",
    "city": "Darien"
  },
  {
    "zip": "6830",
    "city": "Greenwich"
  },
  {
    "zip": "6840",
    "city": "New Canaan"
  },
  {
    "zip": "6850",
    "city": "Norwalk"
  },
  {
    "zip": "6870",
    "city": "Old Greenwich"
  },
  {
    "zip": "6877",
    "city": "Ridgefield"
  },
  {
    "zip": "6896",
    "city": "Redding"
  },
  {
    "zip": "7001",
    "city": "Avenel"
  },
  {
    "zip": "7002",
    "city": "Bayonne"
  },
  {
    "zip": "7005",
    "city": "Boonton"
  },
  {
    "zip": "7006",
    "city": "Caldwell"
  },
  {
    "zip": "7008",
    "city": "Carteret"
  },
  {
    "zip": "7009",
    "city": "Cedar Grove"
  },
  {
    "zip": "7010",
    "city": "Cliffside Park"
  },
  {
    "zip": "7011",
    "city": "Clifton"
  },
  {
    "zip": "7016",
    "city": "Cranford"
  },
  {
    "zip": "7017",
    "city": "East Orange"
  },
  {
    "zip": "7020",
    "city": "Edgewater"
  },
  {
    "zip": "7021",
    "city": "Essex Fells"
  },
  {
    "zip": "7022",
    "city": "Fairview"
  },
  {
    "zip": "7023",
    "city": "Fanwood"
  },
  {
    "zip": "7024",
    "city": "Fort Lee"
  },
  {
    "zip": "7026",
    "city": "Garfield"
  },
  {
    "zip": "7027",
    "city": "Garwood"
  },
  {
    "zip": "7028",
    "city": "Glen Ridge"
  },
  {
    "zip": "7030",
    "city": "Hoboken"
  },
  {
    "zip": "7031",
    "city": "North Arlington"
  },
  {
    "zip": "7032",
    "city": "Kearny"
  },
  {
    "zip": "7033",
    "city": "Kenilworth"
  },
  {
    "zip": "7034",
    "city": "Lake Hiawatha"
  },
  {
    "zip": "7035",
    "city": "Lincoln Park"
  },
  {
    "zip": "7036",
    "city": "Linden"
  },
  {
    "zip": "7039",
    "city": "Livingston"
  },
  {
    "zip": "7040",
    "city": "Maplewood"
  },
  {
    "zip": "7041",
    "city": "Millburn"
  },
  {
    "zip": "7042",
    "city": "Montclair"
  },
  {
    "zip": "7044",
    "city": "Verona"
  },
  {
    "zip": "7046",
    "city": "Mountain Lakes"
  },
  {
    "zip": "7047",
    "city": "North Bergen"
  },
  {
    "zip": "7052",
    "city": "West Orange"
  },
  {
    "zip": "7054",
    "city": "Parsippany"
  },
  {
    "zip": "7055",
    "city": "Passaic"
  },
  {
    "zip": "7057",
    "city": "Wallington"
  },
  {
    "zip": "7058",
    "city": "Pine Brook"
  },
  {
    "zip": "7064",
    "city": "Port Reading"
  },
  {
    "zip": "7065",
    "city": "Rahway"
  },
  {
    "zip": "7066",
    "city": "Clark"
  },
  {
    "zip": "7067",
    "city": "Colonia"
  },
  {
    "zip": "7068",
    "city": "Roseland"
  },
  {
    "zip": "7069",
    "city": "Watchung"
  },
  {
    "zip": "7070",
    "city": "Rutherford"
  },
  {
    "zip": "7071",
    "city": "Lyndhurst"
  },
  {
    "zip": "7072",
    "city": "Carlstadt"
  },
  {
    "zip": "7073",
    "city": "East Rutherford"
  },
  {
    "zip": "7074",
    "city": "Moonachie"
  },
  {
    "zip": "7075",
    "city": "Wood Ridge"
  },
  {
    "zip": "7076",
    "city": "Scotch Plains"
  },
  {
    "zip": "7077",
    "city": "Sewaren"
  },
  {
    "zip": "7078",
    "city": "Short Hills"
  },
  {
    "zip": "7079",
    "city": "South Orange"
  },
  {
    "zip": "7080",
    "city": "South Plainfield"
  },
  {
    "zip": "7082",
    "city": "Towaco"
  },
  {
    "zip": "7086",
    "city": "Weehawken"
  },
  {
    "zip": "7087",
    "city": "Union City"
  },
  {
    "zip": "7088",
    "city": "Vauxhall"
  },
  {
    "zip": "7092",
    "city": "Mountainside"
  },
  {
    "zip": "7093",
    "city": "West New York"
  },
  {
    "zip": "7094",
    "city": "Secaucus"
  },
  {
    "zip": "7102",
    "city": "Newark"
  },
  {
    "zip": "7109",
    "city": "Belleville"
  },
  {
    "zip": "7110",
    "city": "Nutley"
  },
  {
    "zip": "7111",
    "city": "Irvington"
  },
  {
    "zip": "7201",
    "city": "Elizabeth"
  },
  {
    "zip": "7203",
    "city": "Roselle"
  },
  {
    "zip": "7204",
    "city": "Roselle Park"
  },
  {
    "zip": "7205",
    "city": "Hillside"
  },
  {
    "zip": "7206",
    "city": "Elizabethport"
  },
  {
    "zip": "7302",
    "city": "Jersey City"
  },
  {
    "zip": "7401",
    "city": "Allendale"
  },
  {
    "zip": "7403",
    "city": "Bloomingdale"
  },
  {
    "zip": "7405",
    "city": "Butler"
  },
  {
    "zip": "7407",
    "city": "Elmwood Park"
  },
  {
    "zip": "7410",
    "city": "Fair Lawn"
  },
  {
    "zip": "7417",
    "city": "Franklin Lakes"
  },
  {
    "zip": "7418",
    "city": "Glenwood"
  },
  {
    "zip": "7419",
    "city": "Hamburg"
  },
  {
    "zip": "7420",
    "city": "Haskell"
  },
  {
    "zip": "7421",
    "city": "Hewitt"
  },
  {
    "zip": "7422",
    "city": "Highland Lakes"
  },
  {
    "zip": "7423",
    "city": "Ho Ho Kus"
  },
  {
    "zip": "7424",
    "city": "Little Falls"
  },
  {
    "zip": "7430",
    "city": "Mahwah"
  },
  {
    "zip": "7432",
    "city": "Midland Park"
  },
  {
    "zip": "7435",
    "city": "Newfoundland"
  },
  {
    "zip": "7438",
    "city": "Oak Ridge"
  },
  {
    "zip": "7439",
    "city": "Ogdensburg"
  },
  {
    "zip": "7440",
    "city": "Pequannock"
  },
  {
    "zip": "7442",
    "city": "Pompton Lakes"
  },
  {
    "zip": "7444",
    "city": "Pompton Plains"
  },
  {
    "zip": "7446",
    "city": "Ramsey"
  },
  {
    "zip": "7450",
    "city": "Ridgewood"
  },
  {
    "zip": "7452",
    "city": "Glen Rock"
  },
  {
    "zip": "7456",
    "city": "Ringwood"
  },
  {
    "zip": "7457",
    "city": "Riverdale"
  },
  {
    "zip": "7458",
    "city": "Saddle River"
  },
  {
    "zip": "7461",
    "city": "Sussex"
  },
  {
    "zip": "7463",
    "city": "Waldwick"
  },
  {
    "zip": "7465",
    "city": "Wanaque"
  },
  {
    "zip": "7480",
    "city": "West Milford"
  },
  {
    "zip": "7481",
    "city": "Wyckoff"
  },
  {
    "zip": "7501",
    "city": "Paterson"
  },
  {
    "zip": "7506",
    "city": "Hawthorne"
  },
  {
    "zip": "7508",
    "city": "Haledon"
  },
  {
    "zip": "7512",
    "city": "Totowa"
  },
  {
    "zip": "7601",
    "city": "Hackensack"
  },
  {
    "zip": "7603",
    "city": "Bogota"
  },
  {
    "zip": "7604",
    "city": "Hasbrouck Heights"
  },
  {
    "zip": "7605",
    "city": "Leonia"
  },
  {
    "zip": "7606",
    "city": "South Hackensack"
  },
  {
    "zip": "7607",
    "city": "Maywood"
  },
  {
    "zip": "7608",
    "city": "Teterboro"
  },
  {
    "zip": "7621",
    "city": "Bergenfield"
  },
  {
    "zip": "7624",
    "city": "Closter"
  },
  {
    "zip": "7626",
    "city": "Cresskill"
  },
  {
    "zip": "7627",
    "city": "Demarest"
  },
  {
    "zip": "7628",
    "city": "Dumont"
  },
  {
    "zip": "7630",
    "city": "Emerson"
  },
  {
    "zip": "7631",
    "city": "Englewood"
  },
  {
    "zip": "7632",
    "city": "Englewood Cliffs"
  },
  {
    "zip": "7640",
    "city": "Harrington Park"
  },
  {
    "zip": "7641",
    "city": "Haworth"
  },
  {
    "zip": "7642",
    "city": "Hillsdale"
  },
  {
    "zip": "7643",
    "city": "Little Ferry"
  },
  {
    "zip": "7644",
    "city": "Lodi"
  },
  {
    "zip": "7645",
    "city": "Montvale"
  },
  {
    "zip": "7647",
    "city": "Northvale"
  },
  {
    "zip": "7649",
    "city": "Oradell"
  },
  {
    "zip": "7650",
    "city": "Palisades Park"
  },
  {
    "zip": "7652",
    "city": "Paramus"
  },
  {
    "zip": "7656",
    "city": "Park Ridge"
  },
  {
    "zip": "7660",
    "city": "Ridgefield Park"
  },
  {
    "zip": "7661",
    "city": "River Edge"
  },
  {
    "zip": "7662",
    "city": "Rochelle Park"
  },
  {
    "zip": "7663",
    "city": "Saddle Brook"
  },
  {
    "zip": "7666",
    "city": "Teaneck"
  },
  {
    "zip": "7670",
    "city": "Tenafly"
  },
  {
    "zip": "7676",
    "city": "Township Of Washington"
  },
  {
    "zip": "7677",
    "city": "Woodcliff Lake"
  },
  {
    "zip": "7701",
    "city": "Red Bank"
  },
  {
    "zip": "7703",
    "city": "Fort Monmouth"
  },
  {
    "zip": "7711",
    "city": "Allenhurst"
  },
  {
    "zip": "7712",
    "city": "Asbury Park"
  },
  {
    "zip": "7716",
    "city": "Atlantic Highlands"
  },
  {
    "zip": "7717",
    "city": "Avon By The Sea"
  },
  {
    "zip": "7718",
    "city": "Belford"
  },
  {
    "zip": "7719",
    "city": "Belmar"
  },
  {
    "zip": "7720",
    "city": "Bradley Beach"
  },
  {
    "zip": "7721",
    "city": "Cliffwood"
  },
  {
    "zip": "7722",
    "city": "Colts Neck"
  },
  {
    "zip": "7723",
    "city": "Deal"
  },
  {
    "zip": "7724",
    "city": "Eatontown"
  },
  {
    "zip": "7726",
    "city": "Englishtown"
  },
  {
    "zip": "7728",
    "city": "Freehold"
  },
  {
    "zip": "7730",
    "city": "Hazlet"
  },
  {
    "zip": "7731",
    "city": "Howell"
  },
  {
    "zip": "7732",
    "city": "Highlands"
  },
  {
    "zip": "7733",
    "city": "Holmdel"
  },
  {
    "zip": "7734",
    "city": "Keansburg"
  },
  {
    "zip": "7735",
    "city": "Keyport"
  },
  {
    "zip": "7737",
    "city": "Leonardo"
  },
  {
    "zip": "7738",
    "city": "Lincroft"
  },
  {
    "zip": "7739",
    "city": "Little Silver"
  },
  {
    "zip": "7740",
    "city": "Long Branch"
  },
  {
    "zip": "7746",
    "city": "Marlboro"
  },
  {
    "zip": "7747",
    "city": "Matawan"
  },
  {
    "zip": "7750",
    "city": "Monmouth Beach"
  },
  {
    "zip": "7751",
    "city": "Morganville"
  },
  {
    "zip": "7753",
    "city": "Neptune"
  },
  {
    "zip": "7755",
    "city": "Oakhurst"
  },
  {
    "zip": "7756",
    "city": "Ocean Grove"
  },
  {
    "zip": "7757",
    "city": "Oceanport"
  },
  {
    "zip": "7758",
    "city": "Port Monmouth"
  },
  {
    "zip": "7760",
    "city": "Rumson"
  },
  {
    "zip": "7762",
    "city": "Spring Lake"
  },
  {
    "zip": "7764",
    "city": "West Long Branch"
  },
  {
    "zip": "7803",
    "city": "Mine Hill"
  },
  {
    "zip": "7806",
    "city": "Picatinny Arsenal"
  },
  {
    "zip": "7823",
    "city": "Belvidere"
  },
  {
    "zip": "7825",
    "city": "Blairstown"
  },
  {
    "zip": "7826",
    "city": "Branchville"
  },
  {
    "zip": "7828",
    "city": "Budd Lake"
  },
  {
    "zip": "7830",
    "city": "Califon"
  },
  {
    "zip": "7834",
    "city": "Denville"
  },
  {
    "zip": "7836",
    "city": "Flanders"
  },
  {
    "zip": "7838",
    "city": "Great Meadows"
  },
  {
    "zip": "7840",
    "city": "Hackettstown"
  },
  {
    "zip": "7843",
    "city": "Hopatcong"
  },
  {
    "zip": "7847",
    "city": "Kenvil"
  },
  {
    "zip": "7848",
    "city": "Lafayette"
  },
  {
    "zip": "7849",
    "city": "Lake Hopatcong"
  },
  {
    "zip": "7850",
    "city": "Landing"
  },
  {
    "zip": "7851",
    "city": "Layton"
  },
  {
    "zip": "7852",
    "city": "Ledgewood"
  },
  {
    "zip": "7853",
    "city": "Long Valley"
  },
  {
    "zip": "7856",
    "city": "Mount Arlington"
  },
  {
    "zip": "7857",
    "city": "Netcong"
  },
  {
    "zip": "7865",
    "city": "Port Murray"
  },
  {
    "zip": "7866",
    "city": "Rockaway"
  },
  {
    "zip": "7871",
    "city": "Sparta"
  },
  {
    "zip": "7874",
    "city": "Stanhope"
  },
  {
    "zip": "7876",
    "city": "Succasunna"
  },
  {
    "zip": "7881",
    "city": "Wallpack Center"
  },
  {
    "zip": "7885",
    "city": "Wharton"
  },
  {
    "zip": "7901",
    "city": "Summit"
  },
  {
    "zip": "7920",
    "city": "Basking Ridge"
  },
  {
    "zip": "7921",
    "city": "Bedminster"
  },
  {
    "zip": "7922",
    "city": "Berkeley Heights"
  },
  {
    "zip": "7924",
    "city": "Bernardsville"
  },
  {
    "zip": "7927",
    "city": "Cedar Knolls"
  },
  {
    "zip": "7931",
    "city": "Far Hills"
  },
  {
    "zip": "7932",
    "city": "Florham Park"
  },
  {
    "zip": "7933",
    "city": "Gillette"
  },
  {
    "zip": "7934",
    "city": "Gladstone"
  },
  {
    "zip": "7935",
    "city": "Green Village"
  },
  {
    "zip": "7936",
    "city": "East Hanover"
  },
  {
    "zip": "7939",
    "city": "Lyons"
  },
  {
    "zip": "7945",
    "city": "Mendham"
  },
  {
    "zip": "7946",
    "city": "Millington"
  },
  {
    "zip": "7950",
    "city": "Morris Plains"
  },
  {
    "zip": "7960",
    "city": "Morristown"
  },
  {
    "zip": "7974",
    "city": "New Providence"
  },
  {
    "zip": "7976",
    "city": "New Vernon"
  },
  {
    "zip": "7980",
    "city": "Stirling"
  },
  {
    "zip": "7981",
    "city": "Whippany"
  },
  {
    "zip": "8002",
    "city": "Cherry Hill"
  },
  {
    "zip": "8004",
    "city": "Atco"
  },
  {
    "zip": "8005",
    "city": "Barnegat"
  },
  {
    "zip": "8008",
    "city": "Beach Haven"
  },
  {
    "zip": "8012",
    "city": "Blackwood"
  },
  {
    "zip": "8015",
    "city": "Browns Mills"
  },
  {
    "zip": "8019",
    "city": "Chatsworth"
  },
  {
    "zip": "8020",
    "city": "Clarksboro"
  },
  {
    "zip": "8021",
    "city": "Clementon"
  },
  {
    "zip": "8022",
    "city": "Columbus"
  },
  {
    "zip": "8026",
    "city": "Gibbsboro"
  },
  {
    "zip": "8027",
    "city": "Gibbstown"
  },
  {
    "zip": "8028",
    "city": "Glassboro"
  },
  {
    "zip": "8029",
    "city": "Glendora"
  },
  {
    "zip": "8030",
    "city": "Gloucester City"
  },
  {
    "zip": "8031",
    "city": "Bellmawr"
  },
  {
    "zip": "8032",
    "city": "Grenloch"
  },
  {
    "zip": "8033",
    "city": "Haddonfield"
  },
  {
    "zip": "8035",
    "city": "Haddon Heights"
  },
  {
    "zip": "8036",
    "city": "Hainesport"
  },
  {
    "zip": "8037",
    "city": "Hammonton"
  },
  {
    "zip": "8041",
    "city": "Jobstown"
  },
  {
    "zip": "8043",
    "city": "Voorhees"
  },
  {
    "zip": "8045",
    "city": "Lawnside"
  },
  {
    "zip": "8046",
    "city": "Willingboro"
  },
  {
    "zip": "8048",
    "city": "Lumberton"
  },
  {
    "zip": "8049",
    "city": "Magnolia"
  },
  {
    "zip": "8050",
    "city": "Manahawkin"
  },
  {
    "zip": "8051",
    "city": "Mantua"
  },
  {
    "zip": "8052",
    "city": "Maple Shade"
  },
  {
    "zip": "8053",
    "city": "Marlton"
  },
  {
    "zip": "8054",
    "city": "Mount Laurel"
  },
  {
    "zip": "8056",
    "city": "Mickleton"
  },
  {
    "zip": "8057",
    "city": "Moorestown"
  },
  {
    "zip": "8059",
    "city": "Mount Ephraim"
  },
  {
    "zip": "8061",
    "city": "Mount Royal"
  },
  {
    "zip": "8062",
    "city": "Mullica Hill"
  },
  {
    "zip": "8063",
    "city": "National Park"
  },
  {
    "zip": "8066",
    "city": "Paulsboro"
  },
  {
    "zip": "8067",
    "city": "Pedricktown"
  },
  {
    "zip": "8068",
    "city": "Pemberton"
  },
  {
    "zip": "8069",
    "city": "Penns Grove"
  },
  {
    "zip": "8070",
    "city": "Pennsville"
  },
  {
    "zip": "8071",
    "city": "Pitman"
  },
  {
    "zip": "8078",
    "city": "Runnemede"
  },
  {
    "zip": "8080",
    "city": "Sewell"
  },
  {
    "zip": "8081",
    "city": "Sicklerville"
  },
  {
    "zip": "8083",
    "city": "Somerdale"
  },
  {
    "zip": "8085",
    "city": "Swedesboro"
  },
  {
    "zip": "8086",
    "city": "Thorofare"
  },
  {
    "zip": "8087",
    "city": "Tuckerton"
  },
  {
    "zip": "8088",
    "city": "Vincentown"
  },
  {
    "zip": "8089",
    "city": "Waterford Works"
  },
  {
    "zip": "8090",
    "city": "Wenonah"
  },
  {
    "zip": "8091",
    "city": "West Berlin"
  },
  {
    "zip": "8092",
    "city": "West Creek"
  },
  {
    "zip": "8093",
    "city": "Westville"
  },
  {
    "zip": "8096",
    "city": "West Deptford"
  },
  {
    "zip": "8097",
    "city": "Woodbury Heights"
  },
  {
    "zip": "8098",
    "city": "Woodstown"
  },
  {
    "zip": "8106",
    "city": "Audubon"
  },
  {
    "zip": "8107",
    "city": "Oaklyn"
  },
  {
    "zip": "8108",
    "city": "Collingswood"
  },
  {
    "zip": "8109",
    "city": "Merchantville"
  },
  {
    "zip": "8110",
    "city": "Pennsauken"
  },
  {
    "zip": "8201",
    "city": "Absecon"
  },
  {
    "zip": "8202",
    "city": "Avalon"
  },
  {
    "zip": "8203",
    "city": "Brigantine"
  },
  {
    "zip": "8204",
    "city": "Cape May"
  },
  {
    "zip": "8210",
    "city": "Cape May Court House"
  },
  {
    "zip": "8215",
    "city": "Egg Harbor City"
  },
  {
    "zip": "8221",
    "city": "Linwood"
  },
  {
    "zip": "8223",
    "city": "Marmora"
  },
  {
    "zip": "8226",
    "city": "Ocean City"
  },
  {
    "zip": "8230",
    "city": "Ocean View"
  },
  {
    "zip": "8232",
    "city": "Pleasantville"
  },
  {
    "zip": "8234",
    "city": "Egg Harbor Township"
  },
  {
    "zip": "8241",
    "city": "Port Republic"
  },
  {
    "zip": "8243",
    "city": "Sea Isle City"
  },
  {
    "zip": "8244",
    "city": "Somers Point"
  },
  {
    "zip": "8247",
    "city": "Stone Harbor"
  },
  {
    "zip": "8251",
    "city": "Villas"
  },
  {
    "zip": "8260",
    "city": "Wildwood"
  },
  {
    "zip": "8270",
    "city": "Woodbine"
  },
  {
    "zip": "8302",
    "city": "Bridgeton"
  },
  {
    "zip": "8310",
    "city": "Buena"
  },
  {
    "zip": "8311",
    "city": "Cedarville"
  },
  {
    "zip": "8312",
    "city": "Clayton"
  },
  {
    "zip": "8314",
    "city": "Delmont"
  },
  {
    "zip": "8317",
    "city": "Dorothy"
  },
  {
    "zip": "8318",
    "city": "Elmer"
  },
  {
    "zip": "8319",
    "city": "Estell Manor"
  },
  {
    "zip": "8322",
    "city": "Franklinville"
  },
  {
    "zip": "8324",
    "city": "Heislerville"
  },
  {
    "zip": "8326",
    "city": "Landisville"
  },
  {
    "zip": "8327",
    "city": "Leesburg"
  },
  {
    "zip": "8328",
    "city": "Malaga"
  },
  {
    "zip": "8330",
    "city": "Mays Landing"
  },
  {
    "zip": "8340",
    "city": "Milmay"
  },
  {
    "zip": "8341",
    "city": "Minotola"
  },
  {
    "zip": "8343",
    "city": "Monroeville"
  },
  {
    "zip": "8344",
    "city": "Newfield"
  },
  {
    "zip": "8348",
    "city": "Port Elizabeth"
  },
  {
    "zip": "8349",
    "city": "Port Norris"
  },
  {
    "zip": "8350",
    "city": "Richland"
  },
  {
    "zip": "8360",
    "city": "Vineland"
  },
  {
    "zip": "8401",
    "city": "Atlantic City"
  },
  {
    "zip": "8402",
    "city": "Margate City"
  },
  {
    "zip": "8403",
    "city": "Longport"
  },
  {
    "zip": "8406",
    "city": "Ventnor City"
  },
  {
    "zip": "8501",
    "city": "Allentown"
  },
  {
    "zip": "8502",
    "city": "Belle Mead"
  },
  {
    "zip": "8505",
    "city": "Bordentown"
  },
  {
    "zip": "8510",
    "city": "Millstone Township"
  },
  {
    "zip": "8511",
    "city": "Cookstown"
  },
  {
    "zip": "8512",
    "city": "Cranbury"
  },
  {
    "zip": "8514",
    "city": "Cream Ridge"
  },
  {
    "zip": "8520",
    "city": "Hightstown"
  },
  {
    "zip": "8525",
    "city": "Hopewell"
  },
  {
    "zip": "8530",
    "city": "Lambertville"
  },
  {
    "zip": "8533",
    "city": "New Egypt"
  },
  {
    "zip": "8534",
    "city": "Pennington"
  },
  {
    "zip": "8536",
    "city": "Plainsboro"
  },
  {
    "zip": "8550",
    "city": "Princeton Junction"
  },
  {
    "zip": "8551",
    "city": "Ringoes"
  },
  {
    "zip": "8554",
    "city": "Roebling"
  },
  {
    "zip": "8556",
    "city": "Rosemont"
  },
  {
    "zip": "8558",
    "city": "Skillman"
  },
  {
    "zip": "8559",
    "city": "Stockton"
  },
  {
    "zip": "8560",
    "city": "Titusville"
  },
  {
    "zip": "8562",
    "city": "Wrightstown"
  },
  {
    "zip": "8608",
    "city": "Trenton"
  },
  {
    "zip": "8640",
    "city": "Fort Dix"
  },
  {
    "zip": "8648",
    "city": "Lawrence Township"
  },
  {
    "zip": "8701",
    "city": "Lakewood"
  },
  {
    "zip": "8721",
    "city": "Bayville"
  },
  {
    "zip": "8722",
    "city": "Beachwood"
  },
  {
    "zip": "8723",
    "city": "Brick"
  },
  {
    "zip": "8730",
    "city": "Brielle"
  },
  {
    "zip": "8731",
    "city": "Forked River"
  },
  {
    "zip": "8733",
    "city": "Lakehurst"
  },
  {
    "zip": "8734",
    "city": "Lanoka Harbor"
  },
  {
    "zip": "8735",
    "city": "Lavallette"
  },
  {
    "zip": "8736",
    "city": "Manasquan"
  },
  {
    "zip": "8738",
    "city": "Mantoloking"
  },
  {
    "zip": "8741",
    "city": "Pine Beach"
  },
  {
    "zip": "8742",
    "city": "Point Pleasant Beach"
  },
  {
    "zip": "8750",
    "city": "Sea Girt"
  },
  {
    "zip": "8751",
    "city": "Seaside Heights"
  },
  {
    "zip": "8752",
    "city": "Seaside Park"
  },
  {
    "zip": "8753",
    "city": "Toms River"
  },
  {
    "zip": "8758",
    "city": "Waretown"
  },
  {
    "zip": "8759",
    "city": "Manchester Township"
  },
  {
    "zip": "8801",
    "city": "Annandale"
  },
  {
    "zip": "8802",
    "city": "Asbury"
  },
  {
    "zip": "8804",
    "city": "Bloomsbury"
  },
  {
    "zip": "8805",
    "city": "Bound Brook"
  },
  {
    "zip": "8810",
    "city": "Dayton"
  },
  {
    "zip": "8812",
    "city": "Dunellen"
  },
  {
    "zip": "8816",
    "city": "East Brunswick"
  },
  {
    "zip": "8817",
    "city": "Edison"
  },
  {
    "zip": "8822",
    "city": "Flemington"
  },
  {
    "zip": "8823",
    "city": "Franklin Park"
  },
  {
    "zip": "8824",
    "city": "Kendall Park"
  },
  {
    "zip": "8825",
    "city": "Frenchtown"
  },
  {
    "zip": "8826",
    "city": "Glen Gardner"
  },
  {
    "zip": "8828",
    "city": "Helmetta"
  },
  {
    "zip": "8829",
    "city": "High Bridge"
  },
  {
    "zip": "8830",
    "city": "Iselin"
  },
  {
    "zip": "8831",
    "city": "Monroe Township"
  },
  {
    "zip": "8832",
    "city": "Keasbey"
  },
  {
    "zip": "8836",
    "city": "Martinsville"
  },
  {
    "zip": "8840",
    "city": "Metuchen"
  },
  {
    "zip": "8846",
    "city": "Middlesex"
  },
  {
    "zip": "8850",
    "city": "Milltown"
  },
  {
    "zip": "8852",
    "city": "Monmouth Junction"
  },
  {
    "zip": "8853",
    "city": "Neshanic Station"
  },
  {
    "zip": "8854",
    "city": "Piscataway"
  },
  {
    "zip": "8857",
    "city": "Old Bridge"
  },
  {
    "zip": "8859",
    "city": "Parlin"
  },
  {
    "zip": "8861",
    "city": "Perth Amboy"
  },
  {
    "zip": "8863",
    "city": "Fords"
  },
  {
    "zip": "8865",
    "city": "Phillipsburg"
  },
  {
    "zip": "8867",
    "city": "Pittstown"
  },
  {
    "zip": "8869",
    "city": "Raritan"
  },
  {
    "zip": "8872",
    "city": "Sayreville"
  },
  {
    "zip": "8879",
    "city": "South Amboy"
  },
  {
    "zip": "8880",
    "city": "South Bound Brook"
  },
  {
    "zip": "8882",
    "city": "South River"
  },
  {
    "zip": "8884",
    "city": "Spotswood"
  },
  {
    "zip": "8886",
    "city": "Stewartsville"
  },
  {
    "zip": "8887",
    "city": "Three Bridges"
  },
  {
    "zip": "8889",
    "city": "Whitehouse Station"
  },
  {
    "zip": "8901",
    "city": "New Brunswick"
  },
  {
    "zip": "8902",
    "city": "North Brunswick"
  },
  {
    "zip": "8904",
    "city": "Highland Park"
  },
  {
    "zip": "9001",
    "city": "Apo"
  },
  {
    "zip": "9213",
    "city": "Dpo"
  },
  {
    "zip": "9363",
    "city": "Fpo"
  },
  {
    "zip": "10001",
    "city": "New York"
  },
  {
    "zip": "10301",
    "city": "Staten Island"
  },
  {
    "zip": "10451",
    "city": "Bronx"
  },
  {
    "zip": "10501",
    "city": "Amawalk"
  },
  {
    "zip": "10502",
    "city": "Ardsley"
  },
  {
    "zip": "10504",
    "city": "Armonk"
  },
  {
    "zip": "10505",
    "city": "Baldwin Place"
  },
  {
    "zip": "10507",
    "city": "Bedford Hills"
  },
  {
    "zip": "10510",
    "city": "Briarcliff Manor"
  },
  {
    "zip": "10511",
    "city": "Buchanan"
  },
  {
    "zip": "10514",
    "city": "Chappaqua"
  },
  {
    "zip": "10516",
    "city": "Cold Spring"
  },
  {
    "zip": "10518",
    "city": "Cross River"
  },
  {
    "zip": "10520",
    "city": "Croton On Hudson"
  },
  {
    "zip": "10522",
    "city": "Dobbs Ferry"
  },
  {
    "zip": "10523",
    "city": "Elmsford"
  },
  {
    "zip": "10524",
    "city": "Garrison"
  },
  {
    "zip": "10526",
    "city": "Goldens Bridge"
  },
  {
    "zip": "10527",
    "city": "Granite Springs"
  },
  {
    "zip": "10530",
    "city": "Hartsdale"
  },
  {
    "zip": "10535",
    "city": "Jefferson Valley"
  },
  {
    "zip": "10536",
    "city": "Katonah"
  },
  {
    "zip": "10537",
    "city": "Lake Peekskill"
  },
  {
    "zip": "10538",
    "city": "Larchmont"
  },
  {
    "zip": "10541",
    "city": "Mahopac"
  },
  {
    "zip": "10543",
    "city": "Mamaroneck"
  },
  {
    "zip": "10546",
    "city": "Millwood"
  },
  {
    "zip": "10547",
    "city": "Mohegan Lake"
  },
  {
    "zip": "10548",
    "city": "Montrose"
  },
  {
    "zip": "10549",
    "city": "Mount Kisco"
  },
  {
    "zip": "10560",
    "city": "North Salem"
  },
  {
    "zip": "10562",
    "city": "Ossining"
  },
  {
    "zip": "10566",
    "city": "Peekskill"
  },
  {
    "zip": "10567",
    "city": "Cortlandt Manor"
  },
  {
    "zip": "10573",
    "city": "Port Chester"
  },
  {
    "zip": "10576",
    "city": "Pound Ridge"
  },
  {
    "zip": "10577",
    "city": "Purchase"
  },
  {
    "zip": "10578",
    "city": "Purdys"
  },
  {
    "zip": "10579",
    "city": "Putnam Valley"
  },
  {
    "zip": "10583",
    "city": "Scarsdale"
  },
  {
    "zip": "10588",
    "city": "Shrub Oak"
  },
  {
    "zip": "10590",
    "city": "South Salem"
  },
  {
    "zip": "10591",
    "city": "Tarrytown"
  },
  {
    "zip": "10594",
    "city": "Thornwood"
  },
  {
    "zip": "10595",
    "city": "Valhalla"
  },
  {
    "zip": "10597",
    "city": "Waccabuc"
  },
  {
    "zip": "10598",
    "city": "Yorktown Heights"
  },
  {
    "zip": "10601",
    "city": "White Plains"
  },
  {
    "zip": "10604",
    "city": "West Harrison"
  },
  {
    "zip": "10701",
    "city": "Yonkers"
  },
  {
    "zip": "10706",
    "city": "Hastings On Hudson"
  },
  {
    "zip": "10707",
    "city": "Tuckahoe"
  },
  {
    "zip": "10708",
    "city": "Bronxville"
  },
  {
    "zip": "10709",
    "city": "Eastchester"
  },
  {
    "zip": "10801",
    "city": "New Rochelle"
  },
  {
    "zip": "10901",
    "city": "Suffern"
  },
  {
    "zip": "10911",
    "city": "Bear Mountain"
  },
  {
    "zip": "10913",
    "city": "Blauvelt"
  },
  {
    "zip": "10916",
    "city": "Campbell Hall"
  },
  {
    "zip": "10917",
    "city": "Central Valley"
  },
  {
    "zip": "10919",
    "city": "Circleville"
  },
  {
    "zip": "10920",
    "city": "Congers"
  },
  {
    "zip": "10923",
    "city": "Garnerville"
  },
  {
    "zip": "10925",
    "city": "Greenwood Lake"
  },
  {
    "zip": "10926",
    "city": "Harriman"
  },
  {
    "zip": "10927",
    "city": "Haverstraw"
  },
  {
    "zip": "10928",
    "city": "Highland Falls"
  },
  {
    "zip": "10930",
    "city": "Highland Mills"
  },
  {
    "zip": "10931",
    "city": "Hillburn"
  },
  {
    "zip": "10952",
    "city": "Monsey"
  },
  {
    "zip": "10954",
    "city": "Nanuet"
  },
  {
    "zip": "10956",
    "city": "New City"
  },
  {
    "zip": "10960",
    "city": "Nyack"
  },
  {
    "zip": "10962",
    "city": "Orangeburg"
  },
  {
    "zip": "10963",
    "city": "Otisville"
  },
  {
    "zip": "10964",
    "city": "Palisades"
  },
  {
    "zip": "10965",
    "city": "Pearl River"
  },
  {
    "zip": "10969",
    "city": "Pine Island"
  },
  {
    "zip": "10970",
    "city": "Pomona"
  },
  {
    "zip": "10973",
    "city": "Slate Hill"
  },
  {
    "zip": "10974",
    "city": "Sloatsburg"
  },
  {
    "zip": "10975",
    "city": "Southfields"
  },
  {
    "zip": "10976",
    "city": "Sparkill"
  },
  {
    "zip": "10977",
    "city": "Spring Valley"
  },
  {
    "zip": "10980",
    "city": "Stony Point"
  },
  {
    "zip": "10983",
    "city": "Tappan"
  },
  {
    "zip": "10984",
    "city": "Thiells"
  },
  {
    "zip": "10985",
    "city": "Thompson Ridge"
  },
  {
    "zip": "10986",
    "city": "Tomkins Cove"
  },
  {
    "zip": "10987",
    "city": "Tuxedo Park"
  },
  {
    "zip": "10989",
    "city": "Valley Cottage"
  },
  {
    "zip": "10992",
    "city": "Washingtonville"
  },
  {
    "zip": "10993",
    "city": "West Haverstraw"
  },
  {
    "zip": "10994",
    "city": "West Nyack"
  },
  {
    "zip": "10996",
    "city": "West Point"
  },
  {
    "zip": "10998",
    "city": "Westtown"
  },
  {
    "zip": "11001",
    "city": "Floral Park"
  },
  {
    "zip": "11003",
    "city": "Elmont"
  },
  {
    "zip": "11004",
    "city": "Glen Oaks"
  },
  {
    "zip": "11010",
    "city": "Franklin Square"
  },
  {
    "zip": "11020",
    "city": "Great Neck"
  },
  {
    "zip": "11030",
    "city": "Manhasset"
  },
  {
    "zip": "11040",
    "city": "New Hyde Park"
  },
  {
    "zip": "11050",
    "city": "Port Washington"
  },
  {
    "zip": "11096",
    "city": "Inwood"
  },
  {
    "zip": "11101",
    "city": "Long Island City"
  },
  {
    "zip": "11102",
    "city": "Astoria"
  },
  {
    "zip": "11104",
    "city": "Sunnyside"
  },
  {
    "zip": "11351",
    "city": "Flushing"
  },
  {
    "zip": "11356",
    "city": "College Point"
  },
  {
    "zip": "11357",
    "city": "Whitestone"
  },
  {
    "zip": "11359",
    "city": "Bayside"
  },
  {
    "zip": "11362",
    "city": "Little Neck"
  },
  {
    "zip": "11364",
    "city": "Oakland Gardens"
  },
  {
    "zip": "11365",
    "city": "Fresh Meadows"
  },
  {
    "zip": "11368",
    "city": "Corona"
  },
  {
    "zip": "11369",
    "city": "East Elmhurst"
  },
  {
    "zip": "11372",
    "city": "Jackson Heights"
  },
  {
    "zip": "11373",
    "city": "Elmhurst"
  },
  {
    "zip": "11374",
    "city": "Rego Park"
  },
  {
    "zip": "11375",
    "city": "Forest Hills"
  },
  {
    "zip": "11377",
    "city": "Woodside"
  },
  {
    "zip": "11378",
    "city": "Maspeth"
  },
  {
    "zip": "11379",
    "city": "Middle Village"
  },
  {
    "zip": "11411",
    "city": "Cambria Heights"
  },
  {
    "zip": "11413",
    "city": "Springfield Gardens"
  },
  {
    "zip": "11414",
    "city": "Howard Beach"
  },
  {
    "zip": "11415",
    "city": "Kew Gardens"
  },
  {
    "zip": "11416",
    "city": "Ozone Park"
  },
  {
    "zip": "11418",
    "city": "Richmond Hill"
  },
  {
    "zip": "11419",
    "city": "South Richmond Hill"
  },
  {
    "zip": "11420",
    "city": "South Ozone Park"
  },
  {
    "zip": "11421",
    "city": "Woodhaven"
  },
  {
    "zip": "11422",
    "city": "Rosedale"
  },
  {
    "zip": "11426",
    "city": "Bellerose"
  },
  {
    "zip": "11427",
    "city": "Queens Village"
  },
  {
    "zip": "11501",
    "city": "Mineola"
  },
  {
    "zip": "11507",
    "city": "Albertson"
  },
  {
    "zip": "11509",
    "city": "Atlantic Beach"
  },
  {
    "zip": "11510",
    "city": "Baldwin"
  },
  {
    "zip": "11514",
    "city": "Carle Place"
  },
  {
    "zip": "11516",
    "city": "Cedarhurst"
  },
  {
    "zip": "11518",
    "city": "East Rockaway"
  },
  {
    "zip": "11530",
    "city": "Garden City"
  },
  {
    "zip": "11542",
    "city": "Glen Cove"
  },
  {
    "zip": "11545",
    "city": "Glen Head"
  },
  {
    "zip": "11548",
    "city": "Greenvale"
  },
  {
    "zip": "11550",
    "city": "Hempstead"
  },
  {
    "zip": "11552",
    "city": "West Hempstead"
  },
  {
    "zip": "11553",
    "city": "Uniondale"
  },
  {
    "zip": "11554",
    "city": "East Meadow"
  },
  {
    "zip": "11557",
    "city": "Hewlett"
  },
  {
    "zip": "11558",
    "city": "Island Park"
  },
  {
    "zip": "11560",
    "city": "Locust Valley"
  },
  {
    "zip": "11561",
    "city": "Long Beach"
  },
  {
    "zip": "11563",
    "city": "Lynbrook"
  },
  {
    "zip": "11565",
    "city": "Malverne"
  },
  {
    "zip": "11566",
    "city": "Merrick"
  },
  {
    "zip": "11568",
    "city": "Old Westbury"
  },
  {
    "zip": "11570",
    "city": "Rockville Centre"
  },
  {
    "zip": "11572",
    "city": "Oceanside"
  },
  {
    "zip": "11575",
    "city": "Roosevelt"
  },
  {
    "zip": "11576",
    "city": "Roslyn"
  },
  {
    "zip": "11577",
    "city": "Roslyn Heights"
  },
  {
    "zip": "11579",
    "city": "Sea Cliff"
  },
  {
    "zip": "11580",
    "city": "Valley Stream"
  },
  {
    "zip": "11590",
    "city": "Westbury"
  },
  {
    "zip": "11592",
    "city": "Rockville Center"
  },
  {
    "zip": "11596",
    "city": "Williston Park"
  },
  {
    "zip": "11598",
    "city": "Woodmere"
  },
  {
    "zip": "11691",
    "city": "Far Rockaway"
  },
  {
    "zip": "11692",
    "city": "Arverne"
  },
  {
    "zip": "11694",
    "city": "Rockaway Park"
  },
  {
    "zip": "11697",
    "city": "Breezy Point"
  },
  {
    "zip": "11701",
    "city": "Amityville"
  },
  {
    "zip": "11702",
    "city": "Babylon"
  },
  {
    "zip": "11703",
    "city": "North Babylon"
  },
  {
    "zip": "11704",
    "city": "West Babylon"
  },
  {
    "zip": "11705",
    "city": "Bayport"
  },
  {
    "zip": "11706",
    "city": "Bay Shore"
  },
  {
    "zip": "11710",
    "city": "Bellmore"
  },
  {
    "zip": "11713",
    "city": "Bellport"
  },
  {
    "zip": "11714",
    "city": "Bethpage"
  },
  {
    "zip": "11715",
    "city": "Blue Point"
  },
  {
    "zip": "11716",
    "city": "Bohemia"
  },
  {
    "zip": "11717",
    "city": "Brentwood"
  },
  {
    "zip": "11718",
    "city": "Brightwaters"
  },
  {
    "zip": "11719",
    "city": "Brookhaven"
  },
  {
    "zip": "11720",
    "city": "Centereach"
  },
  {
    "zip": "11721",
    "city": "Centerport"
  },
  {
    "zip": "11722",
    "city": "Central Islip"
  },
  {
    "zip": "11724",
    "city": "Cold Spring Harbor"
  },
  {
    "zip": "11725",
    "city": "Commack"
  },
  {
    "zip": "11726",
    "city": "Copiague"
  },
  {
    "zip": "11727",
    "city": "Coram"
  },
  {
    "zip": "11729",
    "city": "Deer Park"
  },
  {
    "zip": "11730",
    "city": "East Islip"
  },
  {
    "zip": "11731",
    "city": "East Northport"
  },
  {
    "zip": "11732",
    "city": "East Norwich"
  },
  {
    "zip": "11733",
    "city": "East Setauket"
  },
  {
    "zip": "11738",
    "city": "Farmingville"
  },
  {
    "zip": "11740",
    "city": "Greenlawn"
  },
  {
    "zip": "11742",
    "city": "Holtsville"
  },
  {
    "zip": "11746",
    "city": "Huntington Station"
  },
  {
    "zip": "11747",
    "city": "Melville"
  },
  {
    "zip": "11749",
    "city": "Islandia"
  },
  {
    "zip": "11751",
    "city": "Islip"
  },
  {
    "zip": "11752",
    "city": "Islip Terrace"
  },
  {
    "zip": "11754",
    "city": "Kings Park"
  },
  {
    "zip": "11755",
    "city": "Lake Grove"
  },
  {
    "zip": "11756",
    "city": "Levittown"
  },
  {
    "zip": "11757",
    "city": "Lindenhurst"
  },
  {
    "zip": "11758",
    "city": "Massapequa"
  },
  {
    "zip": "11762",
    "city": "Massapequa Park"
  },
  {
    "zip": "11764",
    "city": "Miller Place"
  },
  {
    "zip": "11765",
    "city": "Mill Neck"
  },
  {
    "zip": "11766",
    "city": "Mount Sinai"
  },
  {
    "zip": "11767",
    "city": "Nesconset"
  },
  {
    "zip": "11768",
    "city": "Northport"
  },
  {
    "zip": "11771",
    "city": "Oyster Bay"
  },
  {
    "zip": "11772",
    "city": "Patchogue"
  },
  {
    "zip": "11776",
    "city": "Port Jefferson Station"
  },
  {
    "zip": "11777",
    "city": "Port Jefferson"
  },
  {
    "zip": "11778",
    "city": "Rocky Point"
  },
  {
    "zip": "11779",
    "city": "Ronkonkoma"
  },
  {
    "zip": "11780",
    "city": "Saint James"
  },
  {
    "zip": "11782",
    "city": "Sayville"
  },
  {
    "zip": "11783",
    "city": "Seaford"
  },
  {
    "zip": "11784",
    "city": "Selden"
  },
  {
    "zip": "11787",
    "city": "Smithtown"
  },
  {
    "zip": "11788",
    "city": "Hauppauge"
  },
  {
    "zip": "11789",
    "city": "Sound Beach"
  },
  {
    "zip": "11790",
    "city": "Stony Brook"
  },
  {
    "zip": "11791",
    "city": "Syosset"
  },
  {
    "zip": "11792",
    "city": "Wading River"
  },
  {
    "zip": "11793",
    "city": "Wantagh"
  },
  {
    "zip": "11795",
    "city": "West Islip"
  },
  {
    "zip": "11796",
    "city": "West Sayville"
  },
  {
    "zip": "11798",
    "city": "Wyandanch"
  },
  {
    "zip": "11801",
    "city": "Hicksville"
  },
  {
    "zip": "11803",
    "city": "Plainview"
  },
  {
    "zip": "11804",
    "city": "Old Bethpage"
  },
  {
    "zip": "11901",
    "city": "Riverhead"
  },
  {
    "zip": "11933",
    "city": "Calverton"
  },
  {
    "zip": "11934",
    "city": "Center Moriches"
  },
  {
    "zip": "11935",
    "city": "Cutchogue"
  },
  {
    "zip": "11939",
    "city": "East Marion"
  },
  {
    "zip": "11940",
    "city": "East Moriches"
  },
  {
    "zip": "11942",
    "city": "East Quogue"
  },
  {
    "zip": "11944",
    "city": "Greenport"
  },
  {
    "zip": "11946",
    "city": "Hampton Bays"
  },
  {
    "zip": "11948",
    "city": "Laurel"
  },
  {
    "zip": "11949",
    "city": "Manorville"
  },
  {
    "zip": "11950",
    "city": "Mastic"
  },
  {
    "zip": "11951",
    "city": "Mastic Beach"
  },
  {
    "zip": "11952",
    "city": "Mattituck"
  },
  {
    "zip": "11953",
    "city": "Middle Island"
  },
  {
    "zip": "11954",
    "city": "Montauk"
  },
  {
    "zip": "11955",
    "city": "Moriches"
  },
  {
    "zip": "11958",
    "city": "Peconic"
  },
  {
    "zip": "11961",
    "city": "Ridge"
  },
  {
    "zip": "11963",
    "city": "Sag Harbor"
  },
  {
    "zip": "11971",
    "city": "Southold"
  },
  {
    "zip": "11976",
    "city": "Water Mill"
  },
  {
    "zip": "11977",
    "city": "Westhampton"
  },
  {
    "zip": "11978",
    "city": "Westhampton Beach"
  },
  {
    "zip": "11980",
    "city": "Yaphank"
  },
  {
    "zip": "12007",
    "city": "Alcove"
  },
  {
    "zip": "12008",
    "city": "Alplaus"
  },
  {
    "zip": "12009",
    "city": "Altamont"
  },
  {
    "zip": "12010",
    "city": "Amsterdam"
  },
  {
    "zip": "12017",
    "city": "Austerlitz"
  },
  {
    "zip": "12018",
    "city": "Averill Park"
  },
  {
    "zip": "12019",
    "city": "Ballston Lake"
  },
  {
    "zip": "12020",
    "city": "Ballston Spa"
  },
  {
    "zip": "12023",
    "city": "Berne"
  },
  {
    "zip": "12024",
    "city": "Brainard"
  },
  {
    "zip": "12025",
    "city": "Broadalbin"
  },
  {
    "zip": "12027",
    "city": "Burnt Hills"
  },
  {
    "zip": "12028",
    "city": "Buskirk"
  },
  {
    "zip": "12032",
    "city": "Caroga Lake"
  },
  {
    "zip": "12033",
    "city": "Castleton On Hudson"
  },
  {
    "zip": "12035",
    "city": "Central Bridge"
  },
  {
    "zip": "12036",
    "city": "Charlotteville"
  },
  {
    "zip": "12041",
    "city": "Clarksville"
  },
  {
    "zip": "12042",
    "city": "Climax"
  },
  {
    "zip": "12043",
    "city": "Cobleskill"
  },
  {
    "zip": "12046",
    "city": "Coeymans Hollow"
  },
  {
    "zip": "12047",
    "city": "Cohoes"
  },
  {
    "zip": "12051",
    "city": "Coxsackie"
  },
  {
    "zip": "12052",
    "city": "Cropseyville"
  },
  {
    "zip": "12053",
    "city": "Delanson"
  },
  {
    "zip": "12054",
    "city": "Delmar"
  },
  {
    "zip": "12055",
    "city": "Dormansville"
  },
  {
    "zip": "12056",
    "city": "Duanesburg"
  },
  {
    "zip": "12057",
    "city": "Eagle Bridge"
  },
  {
    "zip": "12058",
    "city": "Earlton"
  },
  {
    "zip": "12059",
    "city": "East Berne"
  },
  {
    "zip": "12060",
    "city": "East Chatham"
  },
  {
    "zip": "12061",
    "city": "East Greenbush"
  },
  {
    "zip": "12062",
    "city": "East Nassau"
  },
  {
    "zip": "12063",
    "city": "East Schodack"
  },
  {
    "zip": "12064",
    "city": "East Worcester"
  },
  {
    "zip": "12065",
    "city": "Clifton Park"
  },
  {
    "zip": "12066",
    "city": "Esperance"
  },
  {
    "zip": "12067",
    "city": "Feura Bush"
  },
  {
    "zip": "12068",
    "city": "Fonda"
  },
  {
    "zip": "12070",
    "city": "Fort Johnson"
  },
  {
    "zip": "12071",
    "city": "Fultonham"
  },
  {
    "zip": "12072",
    "city": "Fultonville"
  },
  {
    "zip": "12074",
    "city": "Galway"
  },
  {
    "zip": "12075",
    "city": "Ghent"
  },
  {
    "zip": "12076",
    "city": "Gilboa"
  },
  {
    "zip": "12077",
    "city": "Glenmont"
  },
  {
    "zip": "12078",
    "city": "Gloversville"
  },
  {
    "zip": "12084",
    "city": "Guilderland"
  },
  {
    "zip": "12085",
    "city": "Guilderland Center"
  },
  {
    "zip": "12086",
    "city": "Hagaman"
  },
  {
    "zip": "12087",
    "city": "Hannacroix"
  },
  {
    "zip": "12090",
    "city": "Hoosick Falls"
  },
  {
    "zip": "12092",
    "city": "Howes Cave"
  },
  {
    "zip": "12094",
    "city": "Johnsonville"
  },
  {
    "zip": "12095",
    "city": "Johnstown"
  },
  {
    "zip": "12106",
    "city": "Kinderhook"
  },
  {
    "zip": "12108",
    "city": "Lake Pleasant"
  },
  {
    "zip": "12110",
    "city": "Latham"
  },
  {
    "zip": "12115",
    "city": "Malden Bridge"
  },
  {
    "zip": "12116",
    "city": "Maryland"
  },
  {
    "zip": "12117",
    "city": "Mayfield"
  },
  {
    "zip": "12118",
    "city": "Mechanicville"
  },
  {
    "zip": "12120",
    "city": "Medusa"
  },
  {
    "zip": "12122",
    "city": "Middleburgh"
  },
  {
    "zip": "12123",
    "city": "Nassau"
  },
  {
    "zip": "12125",
    "city": "New Lebanon"
  },
  {
    "zip": "12130",
    "city": "Niverville"
  },
  {
    "zip": "12131",
    "city": "North Blenheim"
  },
  {
    "zip": "12134",
    "city": "Northville"
  },
  {
    "zip": "12136",
    "city": "Old Chatham"
  },
  {
    "zip": "12137",
    "city": "Pattersonville"
  },
  {
    "zip": "12138",
    "city": "Petersburg"
  },
  {
    "zip": "12139",
    "city": "Piseco"
  },
  {
    "zip": "12140",
    "city": "Poestenkill"
  },
  {
    "zip": "12143",
    "city": "Ravena"
  },
  {
    "zip": "12144",
    "city": "Rensselaer"
  },
  {
    "zip": "12147",
    "city": "Rensselaerville"
  },
  {
    "zip": "12148",
    "city": "Rexford"
  },
  {
    "zip": "12149",
    "city": "Richmondville"
  },
  {
    "zip": "12150",
    "city": "Rotterdam Junction"
  },
  {
    "zip": "12151",
    "city": "Round Lake"
  },
  {
    "zip": "12153",
    "city": "Sand Lake"
  },
  {
    "zip": "12154",
    "city": "Schaghticoke"
  },
  {
    "zip": "12155",
    "city": "Schenevus"
  },
  {
    "zip": "12156",
    "city": "Schodack Landing"
  },
  {
    "zip": "12157",
    "city": "Schoharie"
  },
  {
    "zip": "12158",
    "city": "Selkirk"
  },
  {
    "zip": "12159",
    "city": "Slingerlands"
  },
  {
    "zip": "12160",
    "city": "Sloansville"
  },
  {
    "zip": "12164",
    "city": "Speculator"
  },
  {
    "zip": "12165",
    "city": "Spencertown"
  },
  {
    "zip": "12166",
    "city": "Sprakers"
  },
  {
    "zip": "12168",
    "city": "Stephentown"
  },
  {
    "zip": "12170",
    "city": "Stillwater"
  },
  {
    "zip": "12173",
    "city": "Stuyvesant"
  },
  {
    "zip": "12176",
    "city": "Surprise"
  },
  {
    "zip": "12184",
    "city": "Valatie"
  },
  {
    "zip": "12185",
    "city": "Valley Falls"
  },
  {
    "zip": "12186",
    "city": "Voorheesville"
  },
  {
    "zip": "12187",
    "city": "Warnerville"
  },
  {
    "zip": "12189",
    "city": "Watervliet"
  },
  {
    "zip": "12192",
    "city": "West Coxsackie"
  },
  {
    "zip": "12193",
    "city": "Westerlo"
  },
  {
    "zip": "12194",
    "city": "West Fulton"
  },
  {
    "zip": "12196",
    "city": "West Sand Lake"
  },
  {
    "zip": "12198",
    "city": "Wynantskill"
  },
  {
    "zip": "12302",
    "city": "Schenectady"
  },
  {
    "zip": "12404",
    "city": "Accord"
  },
  {
    "zip": "12405",
    "city": "Acra"
  },
  {
    "zip": "12406",
    "city": "Arkville"
  },
  {
    "zip": "12409",
    "city": "Bearsville"
  },
  {
    "zip": "12410",
    "city": "Big Indian"
  },
  {
    "zip": "12411",
    "city": "Bloomington"
  },
  {
    "zip": "12412",
    "city": "Boiceville"
  },
  {
    "zip": "12413",
    "city": "Cairo"
  },
  {
    "zip": "12414",
    "city": "Catskill"
  },
  {
    "zip": "12418",
    "city": "Cornwallville"
  },
  {
    "zip": "12419",
    "city": "Cottekill"
  },
  {
    "zip": "12421",
    "city": "Denver"
  },
  {
    "zip": "12423",
    "city": "East Durham"
  },
  {
    "zip": "12424",
    "city": "East Jewett"
  },
  {
    "zip": "12427",
    "city": "Elka Park"
  },
  {
    "zip": "12428",
    "city": "Ellenville"
  },
  {
    "zip": "12430",
    "city": "Fleischmanns"
  },
  {
    "zip": "12433",
    "city": "Glenford"
  },
  {
    "zip": "12434",
    "city": "Grand Gorge"
  },
  {
    "zip": "12435",
    "city": "Greenfield Park"
  },
  {
    "zip": "12439",
    "city": "Hensonville"
  },
  {
    "zip": "12440",
    "city": "High Falls"
  },
  {
    "zip": "12442",
    "city": "Hunter"
  },
  {
    "zip": "12443",
    "city": "Hurley"
  },
  {
    "zip": "12444",
    "city": "Jewett"
  },
  {
    "zip": "12446",
    "city": "Kerhonkson"
  },
  {
    "zip": "12448",
    "city": "Lake Hill"
  },
  {
    "zip": "12449",
    "city": "Lake Katrine"
  },
  {
    "zip": "12450",
    "city": "Lanesville"
  },
  {
    "zip": "12454",
    "city": "Maplecrest"
  },
  {
    "zip": "12455",
    "city": "Margaretville"
  },
  {
    "zip": "12456",
    "city": "Mount Marion"
  },
  {
    "zip": "12457",
    "city": "Mount Tremper"
  },
  {
    "zip": "12458",
    "city": "Napanoch"
  },
  {
    "zip": "12460",
    "city": "Oak Hill"
  },
  {
    "zip": "12461",
    "city": "Olivebridge"
  },
  {
    "zip": "12463",
    "city": "Palenville"
  },
  {
    "zip": "12464",
    "city": "Phoenicia"
  },
  {
    "zip": "12465",
    "city": "Pine Hill"
  },
  {
    "zip": "12466",
    "city": "Port Ewen"
  },
  {
    "zip": "12468",
    "city": "Prattsville"
  },
  {
    "zip": "12469",
    "city": "Preston Hollow"
  },
  {
    "zip": "12470",
    "city": "Purling"
  },
  {
    "zip": "12472",
    "city": "Rosendale"
  },
  {
    "zip": "12473",
    "city": "Round Top"
  },
  {
    "zip": "12477",
    "city": "Saugerties"
  },
  {
    "zip": "12480",
    "city": "Shandaken"
  },
  {
    "zip": "12481",
    "city": "Shokan"
  },
  {
    "zip": "12482",
    "city": "South Cairo"
  },
  {
    "zip": "12484",
    "city": "Stone Ridge"
  },
  {
    "zip": "12485",
    "city": "Tannersville"
  },
  {
    "zip": "12486",
    "city": "Tillson"
  },
  {
    "zip": "12487",
    "city": "Ulster Park"
  },
  {
    "zip": "12491",
    "city": "West Hurley"
  },
  {
    "zip": "12492",
    "city": "West Kill"
  },
  {
    "zip": "12494",
    "city": "West Shokan"
  },
  {
    "zip": "12495",
    "city": "Willow"
  },
  {
    "zip": "12501",
    "city": "Amenia"
  },
  {
    "zip": "12502",
    "city": "Ancram"
  },
  {
    "zip": "12503",
    "city": "Ancramdale"
  },
  {
    "zip": "12507",
    "city": "Barrytown"
  },
  {
    "zip": "12508",
    "city": "Beacon"
  },
  {
    "zip": "12513",
    "city": "Claverack"
  },
  {
    "zip": "12514",
    "city": "Clinton Corners"
  },
  {
    "zip": "12515",
    "city": "Clintondale"
  },
  {
    "zip": "12516",
    "city": "Copake"
  },
  {
    "zip": "12517",
    "city": "Copake Falls"
  },
  {
    "zip": "12518",
    "city": "Cornwall"
  },
  {
    "zip": "12520",
    "city": "Cornwall On Hudson"
  },
  {
    "zip": "12521",
    "city": "Craryville"
  },
  {
    "zip": "12522",
    "city": "Dover Plains"
  },
  {
    "zip": "12523",
    "city": "Elizaville"
  },
  {
    "zip": "12524",
    "city": "Fishkill"
  },
  {
    "zip": "12526",
    "city": "Germantown"
  },
  {
    "zip": "12528",
    "city": "Highland"
  },
  {
    "zip": "12531",
    "city": "Holmes"
  },
  {
    "zip": "12533",
    "city": "Hopewell Junction"
  },
  {
    "zip": "12540",
    "city": "Lagrangeville"
  },
  {
    "zip": "12543",
    "city": "Maybrook"
  },
  {
    "zip": "12545",
    "city": "Millbrook"
  },
  {
    "zip": "12546",
    "city": "Millerton"
  },
  {
    "zip": "12548",
    "city": "Modena"
  },
  {
    "zip": "12549",
    "city": "Montgomery"
  },
  {
    "zip": "12550",
    "city": "Newburgh"
  },
  {
    "zip": "12553",
    "city": "New Windsor"
  },
  {
    "zip": "12561",
    "city": "New Paltz"
  },
  {
    "zip": "12563",
    "city": "Patterson"
  },
  {
    "zip": "12564",
    "city": "Pawling"
  },
  {
    "zip": "12565",
    "city": "Philmont"
  },
  {
    "zip": "12566",
    "city": "Pine Bush"
  },
  {
    "zip": "12567",
    "city": "Pine Plains"
  },
  {
    "zip": "12569",
    "city": "Pleasant Valley"
  },
  {
    "zip": "12570",
    "city": "Poughquag"
  },
  {
    "zip": "12571",
    "city": "Red Hook"
  },
  {
    "zip": "12572",
    "city": "Rhinebeck"
  },
  {
    "zip": "12575",
    "city": "Rock Tavern"
  },
  {
    "zip": "12577",
    "city": "Salisbury Mills"
  },
  {
    "zip": "12578",
    "city": "Salt Point"
  },
  {
    "zip": "12580",
    "city": "Staatsburg"
  },
  {
    "zip": "12581",
    "city": "Stanfordville"
  },
  {
    "zip": "12582",
    "city": "Stormville"
  },
  {
    "zip": "12583",
    "city": "Tivoli"
  },
  {
    "zip": "12585",
    "city": "Verbank"
  },
  {
    "zip": "12586",
    "city": "Walden"
  },
  {
    "zip": "12589",
    "city": "Wallkill"
  },
  {
    "zip": "12590",
    "city": "Wappingers Falls"
  },
  {
    "zip": "12592",
    "city": "Wassaic"
  },
  {
    "zip": "12593",
    "city": "West Copake"
  },
  {
    "zip": "12594",
    "city": "Wingdale"
  },
  {
    "zip": "12601",
    "city": "Poughkeepsie"
  },
  {
    "zip": "12719",
    "city": "Barryville"
  },
  {
    "zip": "12721",
    "city": "Bloomingburg"
  },
  {
    "zip": "12723",
    "city": "Callicoon"
  },
  {
    "zip": "12725",
    "city": "Claryville"
  },
  {
    "zip": "12726",
    "city": "Cochecton"
  },
  {
    "zip": "12729",
    "city": "Cuddebackville"
  },
  {
    "zip": "12732",
    "city": "Eldred"
  },
  {
    "zip": "12733",
    "city": "Fallsburg"
  },
  {
    "zip": "12734",
    "city": "Ferndale"
  },
  {
    "zip": "12736",
    "city": "Fremont Center"
  },
  {
    "zip": "12737",
    "city": "Glen Spey"
  },
  {
    "zip": "12738",
    "city": "Glen Wild"
  },
  {
    "zip": "12740",
    "city": "Grahamsville"
  },
  {
    "zip": "12741",
    "city": "Hankins"
  },
  {
    "zip": "12742",
    "city": "Harris"
  },
  {
    "zip": "12743",
    "city": "Highland Lake"
  },
  {
    "zip": "12745",
    "city": "Hortonville"
  },
  {
    "zip": "12746",
    "city": "Huguenot"
  },
  {
    "zip": "12747",
    "city": "Hurleyville"
  },
  {
    "zip": "12750",
    "city": "Kenoza Lake"
  },
  {
    "zip": "12751",
    "city": "Kiamesha Lake"
  },
  {
    "zip": "12752",
    "city": "Lake Huntington"
  },
  {
    "zip": "12758",
    "city": "Livingston Manor"
  },
  {
    "zip": "12759",
    "city": "Loch Sheldrake"
  },
  {
    "zip": "12760",
    "city": "Long Eddy"
  },
  {
    "zip": "12762",
    "city": "Mongaup Valley"
  },
  {
    "zip": "12763",
    "city": "Mountain Dale"
  },
  {
    "zip": "12764",
    "city": "Narrowsburg"
  },
  {
    "zip": "12765",
    "city": "Neversink"
  },
  {
    "zip": "12766",
    "city": "North Branch"
  },
  {
    "zip": "12768",
    "city": "Parksville"
  },
  {
    "zip": "12770",
    "city": "Pond Eddy"
  },
  {
    "zip": "12771",
    "city": "Port Jervis"
  },
  {
    "zip": "12775",
    "city": "Rock Hill"
  },
  {
    "zip": "12776",
    "city": "Roscoe"
  },
  {
    "zip": "12777",
    "city": "Forestburgh"
  },
  {
    "zip": "12779",
    "city": "South Fallsburg"
  },
  {
    "zip": "12780",
    "city": "Sparrow Bush"
  },
  {
    "zip": "12783",
    "city": "Swan Lake"
  },
  {
    "zip": "12786",
    "city": "White Lake"
  },
  {
    "zip": "12787",
    "city": "White Sulphur Springs"
  },
  {
    "zip": "12788",
    "city": "Woodbourne"
  },
  {
    "zip": "12789",
    "city": "Woodridge"
  },
  {
    "zip": "12790",
    "city": "Wurtsboro"
  },
  {
    "zip": "12791",
    "city": "Youngsville"
  },
  {
    "zip": "12792",
    "city": "Yulan"
  },
  {
    "zip": "12801",
    "city": "Glens Falls"
  },
  {
    "zip": "12803",
    "city": "South Glens Falls"
  },
  {
    "zip": "12804",
    "city": "Queensbury"
  },
  {
    "zip": "12808",
    "city": "Adirondack"
  },
  {
    "zip": "12809",
    "city": "Argyle"
  },
  {
    "zip": "12812",
    "city": "Blue Mountain Lake"
  },
  {
    "zip": "12814",
    "city": "Bolton Landing"
  },
  {
    "zip": "12815",
    "city": "Brant Lake"
  },
  {
    "zip": "12817",
    "city": "Chestertown"
  },
  {
    "zip": "12819",
    "city": "Clemons"
  },
  {
    "zip": "12821",
    "city": "Comstock"
  },
  {
    "zip": "12823",
    "city": "Cossayuna"
  },
  {
    "zip": "12824",
    "city": "Diamond Point"
  },
  {
    "zip": "12827",
    "city": "Fort Ann"
  },
  {
    "zip": "12828",
    "city": "Fort Edward"
  },
  {
    "zip": "12831",
    "city": "Gansevoort"
  },
  {
    "zip": "12833",
    "city": "Greenfield Center"
  },
  {
    "zip": "12836",
    "city": "Hague"
  },
  {
    "zip": "12839",
    "city": "Hudson Falls"
  },
  {
    "zip": "12842",
    "city": "Indian Lake"
  },
  {
    "zip": "12843",
    "city": "Johnsburg"
  },
  {
    "zip": "12844",
    "city": "Kattskill Bay"
  },
  {
    "zip": "12845",
    "city": "Lake George"
  },
  {
    "zip": "12846",
    "city": "Lake Luzerne"
  },
  {
    "zip": "12847",
    "city": "Long Lake"
  },
  {
    "zip": "12849",
    "city": "Middle Granville"
  },
  {
    "zip": "12850",
    "city": "Middle Grove"
  },
  {
    "zip": "12851",
    "city": "Minerva"
  },
  {
    "zip": "12852",
    "city": "Newcomb"
  },
  {
    "zip": "12853",
    "city": "North Creek"
  },
  {
    "zip": "12854",
    "city": "North Granville"
  },
  {
    "zip": "12855",
    "city": "North Hudson"
  },
  {
    "zip": "12857",
    "city": "Olmstedville"
  },
  {
    "zip": "12858",
    "city": "Paradox"
  },
  {
    "zip": "12859",
    "city": "Porter Corners"
  },
  {
    "zip": "12860",
    "city": "Pottersville"
  },
  {
    "zip": "12861",
    "city": "Putnam Station"
  },
  {
    "zip": "12863",
    "city": "Rock City Falls"
  },
  {
    "zip": "12866",
    "city": "Saratoga Springs"
  },
  {
    "zip": "12870",
    "city": "Schroon Lake"
  },
  {
    "zip": "12871",
    "city": "Schuylerville"
  },
  {
    "zip": "12873",
    "city": "Shushan"
  },
  {
    "zip": "12874",
    "city": "Silver Bay"
  },
  {
    "zip": "12878",
    "city": "Stony Creek"
  },
  {
    "zip": "12883",
    "city": "Ticonderoga"
  },
  {
    "zip": "12885",
    "city": "Warrensburg"
  },
  {
    "zip": "12886",
    "city": "Wevertown"
  },
  {
    "zip": "12887",
    "city": "Whitehall"
  },
  {
    "zip": "12901",
    "city": "Plattsburgh"
  },
  {
    "zip": "12910",
    "city": "Altona"
  },
  {
    "zip": "12911",
    "city": "Keeseville"
  },
  {
    "zip": "12912",
    "city": "Au Sable Forks"
  },
  {
    "zip": "12914",
    "city": "Bombay"
  },
  {
    "zip": "12916",
    "city": "Brushton"
  },
  {
    "zip": "12917",
    "city": "Burke"
  },
  {
    "zip": "12918",
    "city": "Cadyville"
  },
  {
    "zip": "12919",
    "city": "Champlain"
  },
  {
    "zip": "12920",
    "city": "Chateaugay"
  },
  {
    "zip": "12921",
    "city": "Chazy"
  },
  {
    "zip": "12922",
    "city": "Childwold"
  },
  {
    "zip": "12923",
    "city": "Churubusco"
  },
  {
    "zip": "12926",
    "city": "Constable"
  },
  {
    "zip": "12928",
    "city": "Crown Point"
  },
  {
    "zip": "12930",
    "city": "Dickinson Center"
  },
  {
    "zip": "12932",
    "city": "Elizabethtown"
  },
  {
    "zip": "12934",
    "city": "Ellenburg Center"
  },
  {
    "zip": "12935",
    "city": "Ellenburg Depot"
  },
  {
    "zip": "12937",
    "city": "Fort Covington"
  },
  {
    "zip": "12943",
    "city": "Keene Valley"
  },
  {
    "zip": "12945",
    "city": "Lake Clear"
  },
  {
    "zip": "12946",
    "city": "Lake Placid"
  },
  {
    "zip": "12949",
    "city": "Lawrenceville"
  },
  {
    "zip": "12950",
    "city": "Lewis"
  },
  {
    "zip": "12952",
    "city": "Lyon Mountain"
  },
  {
    "zip": "12953",
    "city": "Malone"
  },
  {
    "zip": "12956",
    "city": "Mineville"
  },
  {
    "zip": "12957",
    "city": "Moira"
  },
  {
    "zip": "12958",
    "city": "Mooers"
  },
  {
    "zip": "12959",
    "city": "Mooers Forks"
  },
  {
    "zip": "12960",
    "city": "Moriah"
  },
  {
    "zip": "12961",
    "city": "Moriah Center"
  },
  {
    "zip": "12962",
    "city": "Morrisonville"
  },
  {
    "zip": "12964",
    "city": "New Russia"
  },
  {
    "zip": "12965",
    "city": "Nicholville"
  },
  {
    "zip": "12966",
    "city": "North Bangor"
  },
  {
    "zip": "12967",
    "city": "North Lawrence"
  },
  {
    "zip": "12970",
    "city": "Paul Smiths"
  },
  {
    "zip": "12974",
    "city": "Port Henry"
  },
  {
    "zip": "12978",
    "city": "Redford"
  },
  {
    "zip": "12979",
    "city": "Rouses Point"
  },
  {
    "zip": "12980",
    "city": "Saint Regis Falls"
  },
  {
    "zip": "12981",
    "city": "Saranac"
  },
  {
    "zip": "12983",
    "city": "Saranac Lake"
  },
  {
    "zip": "12985",
    "city": "Schuyler Falls"
  },
  {
    "zip": "12986",
    "city": "Tupper Lake"
  },
  {
    "zip": "12987",
    "city": "Upper Jay"
  },
  {
    "zip": "12989",
    "city": "Vermontville"
  },
  {
    "zip": "12992",
    "city": "West Chazy"
  },
  {
    "zip": "12996",
    "city": "Willsboro"
  },
  {
    "zip": "12998",
    "city": "Witherbee"
  },
  {
    "zip": "13027",
    "city": "Baldwinsville"
  },
  {
    "zip": "13028",
    "city": "Bernhards Bay"
  },
  {
    "zip": "13029",
    "city": "Brewerton"
  },
  {
    "zip": "13031",
    "city": "Camillus"
  },
  {
    "zip": "13032",
    "city": "Canastota"
  },
  {
    "zip": "13033",
    "city": "Cato"
  },
  {
    "zip": "13034",
    "city": "Cayuga"
  },
  {
    "zip": "13035",
    "city": "Cazenovia"
  },
  {
    "zip": "13036",
    "city": "Central Square"
  },
  {
    "zip": "13037",
    "city": "Chittenango"
  },
  {
    "zip": "13039",
    "city": "Cicero"
  },
  {
    "zip": "13040",
    "city": "Cincinnatus"
  },
  {
    "zip": "13041",
    "city": "Clay"
  },
  {
    "zip": "13042",
    "city": "Cleveland"
  },
  {
    "zip": "13044",
    "city": "Constantia"
  },
  {
    "zip": "13045",
    "city": "Cortland"
  },
  {
    "zip": "13052",
    "city": "De Ruyter"
  },
  {
    "zip": "13054",
    "city": "Durhamville"
  },
  {
    "zip": "13057",
    "city": "East Syracuse"
  },
  {
    "zip": "13060",
    "city": "Elbridge"
  },
  {
    "zip": "13061",
    "city": "Erieville"
  },
  {
    "zip": "13063",
    "city": "Fabius"
  },
  {
    "zip": "13066",
    "city": "Fayetteville"
  },
  {
    "zip": "13068",
    "city": "Freeville"
  },
  {
    "zip": "13069",
    "city": "Fulton"
  },
  {
    "zip": "13071",
    "city": "Genoa"
  },
  {
    "zip": "13074",
    "city": "Hannibal"
  },
  {
    "zip": "13076",
    "city": "Hastings"
  },
  {
    "zip": "13077",
    "city": "Homer"
  },
  {
    "zip": "13078",
    "city": "Jamesville"
  },
  {
    "zip": "13080",
    "city": "Jordan"
  },
  {
    "zip": "13081",
    "city": "King Ferry"
  },
  {
    "zip": "13082",
    "city": "Kirkville"
  },
  {
    "zip": "13083",
    "city": "Lacona"
  },
  {
    "zip": "13084",
    "city": "La Fayette"
  },
  {
    "zip": "13088",
    "city": "Liverpool"
  },
  {
    "zip": "13092",
    "city": "Locke"
  },
  {
    "zip": "13101",
    "city": "Mc Graw"
  },
  {
    "zip": "13103",
    "city": "Mallory"
  },
  {
    "zip": "13104",
    "city": "Manlius"
  },
  {
    "zip": "13108",
    "city": "Marcellus"
  },
  {
    "zip": "13110",
    "city": "Marietta"
  },
  {
    "zip": "13111",
    "city": "Martville"
  },
  {
    "zip": "13112",
    "city": "Memphis"
  },
  {
    "zip": "13116",
    "city": "Minoa"
  },
  {
    "zip": "13118",
    "city": "Moravia"
  },
  {
    "zip": "13120",
    "city": "Nedrow"
  },
  {
    "zip": "13122",
    "city": "New Woodstock"
  },
  {
    "zip": "13124",
    "city": "North Pitcher"
  },
  {
    "zip": "13126",
    "city": "Oswego"
  },
  {
    "zip": "13131",
    "city": "Parish"
  },
  {
    "zip": "13132",
    "city": "Pennellville"
  },
  {
    "zip": "13135",
    "city": "Phoenix"
  },
  {
    "zip": "13136",
    "city": "Pitcher"
  },
  {
    "zip": "13140",
    "city": "Port Byron"
  },
  {
    "zip": "13141",
    "city": "Preble"
  },
  {
    "zip": "13142",
    "city": "Pulaski"
  },
  {
    "zip": "13143",
    "city": "Red Creek"
  },
  {
    "zip": "13145",
    "city": "Sandy Creek"
  },
  {
    "zip": "13146",
    "city": "Savannah"
  },
  {
    "zip": "13147",
    "city": "Scipio Center"
  },
  {
    "zip": "13148",
    "city": "Seneca Falls"
  },
  {
    "zip": "13152",
    "city": "Skaneateles"
  },
  {
    "zip": "13155",
    "city": "South Otselic"
  },
  {
    "zip": "13158",
    "city": "Truxton"
  },
  {
    "zip": "13159",
    "city": "Tully"
  },
  {
    "zip": "13160",
    "city": "Union Springs"
  },
  {
    "zip": "13164",
    "city": "Warners"
  },
  {
    "zip": "13165",
    "city": "Waterloo"
  },
  {
    "zip": "13166",
    "city": "Weedsport"
  },
  {
    "zip": "13167",
    "city": "West Monroe"
  },
  {
    "zip": "13202",
    "city": "Syracuse"
  },
  {
    "zip": "13301",
    "city": "Alder Creek"
  },
  {
    "zip": "13302",
    "city": "Altmar"
  },
  {
    "zip": "13303",
    "city": "Ava"
  },
  {
    "zip": "13304",
    "city": "Barneveld"
  },
  {
    "zip": "13308",
    "city": "Blossvale"
  },
  {
    "zip": "13309",
    "city": "Boonville"
  },
  {
    "zip": "13310",
    "city": "Bouckville"
  },
  {
    "zip": "13315",
    "city": "Burlington Flats"
  },
  {
    "zip": "13317",
    "city": "Canajoharie"
  },
  {
    "zip": "13318",
    "city": "Cassville"
  },
  {
    "zip": "13319",
    "city": "Chadwicks"
  },
  {
    "zip": "13324",
    "city": "Cold Brook"
  },
  {
    "zip": "13325",
    "city": "Constableville"
  },
  {
    "zip": "13326",
    "city": "Cooperstown"
  },
  {
    "zip": "13327",
    "city": "Croghan"
  },
  {
    "zip": "13328",
    "city": "Deansboro"
  },
  {
    "zip": "13329",
    "city": "Dolgeville"
  },
  {
    "zip": "13331",
    "city": "Eagle Bay"
  },
  {
    "zip": "13332",
    "city": "Earlville"
  },
  {
    "zip": "13333",
    "city": "East Springfield"
  },
  {
    "zip": "13334",
    "city": "Eaton"
  },
  {
    "zip": "13335",
    "city": "Edmeston"
  },
  {
    "zip": "13337",
    "city": "Fly Creek"
  },
  {
    "zip": "13338",
    "city": "Forestport"
  },
  {
    "zip": "13339",
    "city": "Fort Plain"
  },
  {
    "zip": "13342",
    "city": "Garrattsville"
  },
  {
    "zip": "13343",
    "city": "Glenfield"
  },
  {
    "zip": "13345",
    "city": "Greig"
  },
  {
    "zip": "13346",
    "city": "Hamilton"
  },
  {
    "zip": "13348",
    "city": "Hartwick"
  },
  {
    "zip": "13350",
    "city": "Herkimer"
  },
  {
    "zip": "13354",
    "city": "Holland Patent"
  },
  {
    "zip": "13355",
    "city": "Hubbardsville"
  },
  {
    "zip": "13357",
    "city": "Ilion"
  },
  {
    "zip": "13360",
    "city": "Inlet"
  },
  {
    "zip": "13361",
    "city": "Jordanville"
  },
  {
    "zip": "13363",
    "city": "Lee Center"
  },
  {
    "zip": "13367",
    "city": "Lowville"
  },
  {
    "zip": "13368",
    "city": "Lyons Falls"
  },
  {
    "zip": "13403",
    "city": "Marcy"
  },
  {
    "zip": "13406",
    "city": "Middleville"
  },
  {
    "zip": "13407",
    "city": "Mohawk"
  },
  {
    "zip": "13409",
    "city": "Munnsville"
  },
  {
    "zip": "13411",
    "city": "New Berlin"
  },
  {
    "zip": "13415",
    "city": "New Lisbon"
  },
  {
    "zip": "13417",
    "city": "New York Mills"
  },
  {
    "zip": "13420",
    "city": "Old Forge"
  },
  {
    "zip": "13421",
    "city": "Oneida"
  },
  {
    "zip": "13424",
    "city": "Oriskany"
  },
  {
    "zip": "13425",
    "city": "Oriskany Falls"
  },
  {
    "zip": "13428",
    "city": "Palatine Bridge"
  },
  {
    "zip": "13433",
    "city": "Port Leyden"
  },
  {
    "zip": "13436",
    "city": "Raquette Lake"
  },
  {
    "zip": "13437",
    "city": "Redfield"
  },
  {
    "zip": "13438",
    "city": "Remsen"
  },
  {
    "zip": "13439",
    "city": "Richfield Springs"
  },
  {
    "zip": "13440",
    "city": "Rome"
  },
  {
    "zip": "13450",
    "city": "Roseboom"
  },
  {
    "zip": "13452",
    "city": "Saint Johnsville"
  },
  {
    "zip": "13454",
    "city": "Salisbury Center"
  },
  {
    "zip": "13456",
    "city": "Sauquoit"
  },
  {
    "zip": "13459",
    "city": "Sharon Springs"
  },
  {
    "zip": "13460",
    "city": "Sherburne"
  },
  {
    "zip": "13461",
    "city": "Sherrill"
  },
  {
    "zip": "13464",
    "city": "Smyrna"
  },
  {
    "zip": "13465",
    "city": "Solsville"
  },
  {
    "zip": "13468",
    "city": "Springfield Center"
  },
  {
    "zip": "13469",
    "city": "Stittville"
  },
  {
    "zip": "13471",
    "city": "Taberg"
  },
  {
    "zip": "13473",
    "city": "Turin"
  },
  {
    "zip": "13475",
    "city": "Van Hornesville"
  },
  {
    "zip": "13477",
    "city": "Vernon Center"
  },
  {
    "zip": "13482",
    "city": "West Burlington"
  },
  {
    "zip": "13483",
    "city": "Westdale"
  },
  {
    "zip": "13485",
    "city": "West Edmeston"
  },
  {
    "zip": "13486",
    "city": "Westernville"
  },
  {
    "zip": "13489",
    "city": "West Leyden"
  },
  {
    "zip": "13491",
    "city": "West Winfield"
  },
  {
    "zip": "13492",
    "city": "Whitesboro"
  },
  {
    "zip": "13494",
    "city": "Woodgate"
  },
  {
    "zip": "13495",
    "city": "Yorkville"
  },
  {
    "zip": "13501",
    "city": "Utica"
  },
  {
    "zip": "13602",
    "city": "Fort Drum"
  },
  {
    "zip": "13606",
    "city": "Adams Center"
  },
  {
    "zip": "13607",
    "city": "Alexandria Bay"
  },
  {
    "zip": "13608",
    "city": "Antwerp"
  },
  {
    "zip": "13612",
    "city": "Black River"
  },
  {
    "zip": "13613",
    "city": "Brasher Falls"
  },
  {
    "zip": "13614",
    "city": "Brier Hill"
  },
  {
    "zip": "13616",
    "city": "Calcium"
  },
  {
    "zip": "13618",
    "city": "Cape Vincent"
  },
  {
    "zip": "13619",
    "city": "Carthage"
  },
  {
    "zip": "13620",
    "city": "Castorland"
  },
  {
    "zip": "13621",
    "city": "Chase Mills"
  },
  {
    "zip": "13622",
    "city": "Chaumont"
  },
  {
    "zip": "13625",
    "city": "Colton"
  },
  {
    "zip": "13626",
    "city": "Copenhagen"
  },
  {
    "zip": "13630",
    "city": "De Kalb Junction"
  },
  {
    "zip": "13633",
    "city": "De Peyster"
  },
  {
    "zip": "13635",
    "city": "Edwards"
  },
  {
    "zip": "13636",
    "city": "Ellisburg"
  },
  {
    "zip": "13637",
    "city": "Evans Mills"
  },
  {
    "zip": "13638",
    "city": "Felts Mills"
  },
  {
    "zip": "13639",
    "city": "Fine"
  },
  {
    "zip": "13640",
    "city": "Wellesley Island"
  },
  {
    "zip": "13642",
    "city": "Gouverneur"
  },
  {
    "zip": "13646",
    "city": "Hammond"
  },
  {
    "zip": "13650",
    "city": "Henderson"
  },
  {
    "zip": "13652",
    "city": "Hermon"
  },
  {
    "zip": "13654",
    "city": "Heuvelton"
  },
  {
    "zip": "13655",
    "city": "Hogansburg"
  },
  {
    "zip": "13656",
    "city": "La Fargeville"
  },
  {
    "zip": "13659",
    "city": "Lorraine"
  },
  {
    "zip": "13660",
    "city": "Madrid"
  },
  {
    "zip": "13661",
    "city": "Mannsville"
  },
  {
    "zip": "13662",
    "city": "Massena"
  },
  {
    "zip": "13665",
    "city": "Natural Bridge"
  },
  {
    "zip": "13670",
    "city": "Oswegatchie"
  },
  {
    "zip": "13672",
    "city": "Parishville"
  },
  {
    "zip": "13673",
    "city": "Philadelphia"
  },
  {
    "zip": "13675",
    "city": "Plessis"
  },
  {
    "zip": "13676",
    "city": "Potsdam"
  },
  {
    "zip": "13679",
    "city": "Redwood"
  },
  {
    "zip": "13680",
    "city": "Rensselaer Falls"
  },
  {
    "zip": "13681",
    "city": "Richville"
  },
  {
    "zip": "13682",
    "city": "Rodman"
  },
  {
    "zip": "13685",
    "city": "Sackets Harbor"
  },
  {
    "zip": "13687",
    "city": "South Colton"
  },
  {
    "zip": "13690",
    "city": "Star Lake"
  },
  {
    "zip": "13691",
    "city": "Theresa"
  },
  {
    "zip": "13693",
    "city": "Three Mile Bay"
  },
  {
    "zip": "13694",
    "city": "Waddington"
  },
  {
    "zip": "13696",
    "city": "West Stockholm"
  },
  {
    "zip": "13730",
    "city": "Afton"
  },
  {
    "zip": "13731",
    "city": "Andes"
  },
  {
    "zip": "13732",
    "city": "Apalachin"
  },
  {
    "zip": "13733",
    "city": "Bainbridge"
  },
  {
    "zip": "13739",
    "city": "Bloomville"
  },
  {
    "zip": "13740",
    "city": "Bovina Center"
  },
  {
    "zip": "13743",
    "city": "Candor"
  },
  {
    "zip": "13744",
    "city": "Castle Creek"
  },
  {
    "zip": "13746",
    "city": "Chenango Forks"
  },
  {
    "zip": "13748",
    "city": "Conklin"
  },
  {
    "zip": "13750",
    "city": "Davenport"
  },
  {
    "zip": "13751",
    "city": "Davenport Center"
  },
  {
    "zip": "13752",
    "city": "Delancey"
  },
  {
    "zip": "13753",
    "city": "Delhi"
  },
  {
    "zip": "13754",
    "city": "Deposit"
  },
  {
    "zip": "13755",
    "city": "Downsville"
  },
  {
    "zip": "13756",
    "city": "East Branch"
  },
  {
    "zip": "13757",
    "city": "East Meredith"
  },
  {
    "zip": "13760",
    "city": "Endicott"
  },
  {
    "zip": "13776",
    "city": "Gilbertsville"
  },
  {
    "zip": "13777",
    "city": "Glen Aubrey"
  },
  {
    "zip": "13786",
    "city": "Harpersfield"
  },
  {
    "zip": "13787",
    "city": "Harpursville"
  },
  {
    "zip": "13788",
    "city": "Hobart"
  },
  {
    "zip": "13790",
    "city": "Johnson City"
  },
  {
    "zip": "13795",
    "city": "Kirkwood"
  },
  {
    "zip": "13796",
    "city": "Laurens"
  },
  {
    "zip": "13797",
    "city": "Lisle"
  },
  {
    "zip": "13801",
    "city": "Mc Donough"
  },
  {
    "zip": "13802",
    "city": "Maine"
  },
  {
    "zip": "13803",
    "city": "Marathon"
  },
  {
    "zip": "13804",
    "city": "Masonville"
  },
  {
    "zip": "13806",
    "city": "Meridale"
  },
  {
    "zip": "13809",
    "city": "Mount Upton"
  },
  {
    "zip": "13810",
    "city": "Mount Vision"
  },
  {
    "zip": "13811",
    "city": "Newark Valley"
  },
  {
    "zip": "13812",
    "city": "Nichols"
  },
  {
    "zip": "13813",
    "city": "Nineveh"
  },
  {
    "zip": "13820",
    "city": "Oneonta"
  },
  {
    "zip": "13825",
    "city": "Otego"
  },
  {
    "zip": "13826",
    "city": "Ouaquaga"
  },
  {
    "zip": "13827",
    "city": "Owego"
  },
  {
    "zip": "13833",
    "city": "Port Crane"
  },
  {
    "zip": "13834",
    "city": "Portlandville"
  },
  {
    "zip": "13838",
    "city": "Sidney"
  },
  {
    "zip": "13839",
    "city": "Sidney Center"
  },
  {
    "zip": "13841",
    "city": "Smithville Flats"
  },
  {
    "zip": "13842",
    "city": "South Kortright"
  },
  {
    "zip": "13843",
    "city": "South New Berlin"
  },
  {
    "zip": "13844",
    "city": "South Plymouth"
  },
  {
    "zip": "13846",
    "city": "Treadwell"
  },
  {
    "zip": "13849",
    "city": "Unadilla"
  },
  {
    "zip": "13850",
    "city": "Vestal"
  },
  {
    "zip": "13856",
    "city": "Walton"
  },
  {
    "zip": "13859",
    "city": "Wells Bridge"
  },
  {
    "zip": "13861",
    "city": "West Oneonta"
  },
  {
    "zip": "13862",
    "city": "Whitney Point"
  },
  {
    "zip": "13863",
    "city": "Willet"
  },
  {
    "zip": "13864",
    "city": "Willseyville"
  },
  {
    "zip": "13901",
    "city": "Binghamton"
  },
  {
    "zip": "14001",
    "city": "Akron"
  },
  {
    "zip": "14004",
    "city": "Alden"
  },
  {
    "zip": "14005",
    "city": "Alexander"
  },
  {
    "zip": "14006",
    "city": "Angola"
  },
  {
    "zip": "14008",
    "city": "Appleton"
  },
  {
    "zip": "14009",
    "city": "Arcade"
  },
  {
    "zip": "14011",
    "city": "Attica"
  },
  {
    "zip": "14012",
    "city": "Barker"
  },
  {
    "zip": "14013",
    "city": "Basom"
  },
  {
    "zip": "14020",
    "city": "Batavia"
  },
  {
    "zip": "14024",
    "city": "Bliss"
  },
  {
    "zip": "14026",
    "city": "Bowmansville"
  },
  {
    "zip": "14028",
    "city": "Burt"
  },
  {
    "zip": "14030",
    "city": "Chaffee"
  },
  {
    "zip": "14031",
    "city": "Clarence"
  },
  {
    "zip": "14032",
    "city": "Clarence Center"
  },
  {
    "zip": "14033",
    "city": "Colden"
  },
  {
    "zip": "14034",
    "city": "Collins"
  },
  {
    "zip": "14036",
    "city": "Corfu"
  },
  {
    "zip": "14037",
    "city": "Cowlesville"
  },
  {
    "zip": "14039",
    "city": "Dale"
  },
  {
    "zip": "14040",
    "city": "Darien Center"
  },
  {
    "zip": "14042",
    "city": "Delevan"
  },
  {
    "zip": "14043",
    "city": "Depew"
  },
  {
    "zip": "14048",
    "city": "Dunkirk"
  },
  {
    "zip": "14051",
    "city": "East Amherst"
  },
  {
    "zip": "14052",
    "city": "East Aurora"
  },
  {
    "zip": "14054",
    "city": "East Bethany"
  },
  {
    "zip": "14055",
    "city": "East Concord"
  },
  {
    "zip": "14058",
    "city": "Elba"
  },
  {
    "zip": "14059",
    "city": "Elma"
  },
  {
    "zip": "14060",
    "city": "Farmersville Station"
  },
  {
    "zip": "14062",
    "city": "Forestville"
  },
  {
    "zip": "14063",
    "city": "Fredonia"
  },
  {
    "zip": "14066",
    "city": "Gainesville"
  },
  {
    "zip": "14067",
    "city": "Gasport"
  },
  {
    "zip": "14068",
    "city": "Getzville"
  },
  {
    "zip": "14070",
    "city": "Gowanda"
  },
  {
    "zip": "14072",
    "city": "Grand Island"
  },
  {
    "zip": "14081",
    "city": "Irving"
  },
  {
    "zip": "14082",
    "city": "Java Center"
  },
  {
    "zip": "14083",
    "city": "Java Village"
  },
  {
    "zip": "14085",
    "city": "Lake View"
  },
  {
    "zip": "14091",
    "city": "Lawtons"
  },
  {
    "zip": "14094",
    "city": "Lockport"
  },
  {
    "zip": "14102",
    "city": "Marilla"
  },
  {
    "zip": "14103",
    "city": "Medina"
  },
  {
    "zip": "14105",
    "city": "Middleport"
  },
  {
    "zip": "14111",
    "city": "North Collins"
  },
  {
    "zip": "14113",
    "city": "North Java"
  },
  {
    "zip": "14120",
    "city": "North Tonawanda"
  },
  {
    "zip": "14127",
    "city": "Orchard Park"
  },
  {
    "zip": "14129",
    "city": "Perrysburg"
  },
  {
    "zip": "14131",
    "city": "Ransomville"
  },
  {
    "zip": "14132",
    "city": "Sanborn"
  },
  {
    "zip": "14134",
    "city": "Sardinia"
  },
  {
    "zip": "14136",
    "city": "Silver Creek"
  },
  {
    "zip": "14138",
    "city": "South Dayton"
  },
  {
    "zip": "14139",
    "city": "South Wales"
  },
  {
    "zip": "14141",
    "city": "Springville"
  },
  {
    "zip": "14143",
    "city": "Stafford"
  },
  {
    "zip": "14145",
    "city": "Strykersville"
  },
  {
    "zip": "14150",
    "city": "Tonawanda"
  },
  {
    "zip": "14167",
    "city": "Varysburg"
  },
  {
    "zip": "14170",
    "city": "West Falls"
  },
  {
    "zip": "14171",
    "city": "West Valley"
  },
  {
    "zip": "14172",
    "city": "Wilson"
  },
  {
    "zip": "14174",
    "city": "Youngstown"
  },
  {
    "zip": "14201",
    "city": "Buffalo"
  },
  {
    "zip": "14301",
    "city": "Niagara Falls"
  },
  {
    "zip": "14415",
    "city": "Bellona"
  },
  {
    "zip": "14416",
    "city": "Bergen"
  },
  {
    "zip": "14418",
    "city": "Branchport"
  },
  {
    "zip": "14420",
    "city": "Brockport"
  },
  {
    "zip": "14422",
    "city": "Byron"
  },
  {
    "zip": "14423",
    "city": "Caledonia"
  },
  {
    "zip": "14424",
    "city": "Canandaigua"
  },
  {
    "zip": "14427",
    "city": "Castile"
  },
  {
    "zip": "14428",
    "city": "Churchville"
  },
  {
    "zip": "14432",
    "city": "Clifton Springs"
  },
  {
    "zip": "14433",
    "city": "Clyde"
  },
  {
    "zip": "14435",
    "city": "Conesus"
  },
  {
    "zip": "14437",
    "city": "Dansville"
  },
  {
    "zip": "14445",
    "city": "East Rochester"
  },
  {
    "zip": "14450",
    "city": "Fairport"
  },
  {
    "zip": "14454",
    "city": "Geneseo"
  },
  {
    "zip": "14456",
    "city": "Geneva"
  },
  {
    "zip": "14464",
    "city": "Hamlin"
  },
  {
    "zip": "14466",
    "city": "Hemlock"
  },
  {
    "zip": "14467",
    "city": "Henrietta"
  },
  {
    "zip": "14468",
    "city": "Hilton"
  },
  {
    "zip": "14470",
    "city": "Holley"
  },
  {
    "zip": "14471",
    "city": "Honeoye"
  },
  {
    "zip": "14472",
    "city": "Honeoye Falls"
  },
  {
    "zip": "14475",
    "city": "Ionia"
  },
  {
    "zip": "14476",
    "city": "Kendall"
  },
  {
    "zip": "14478",
    "city": "Keuka Park"
  },
  {
    "zip": "14479",
    "city": "Knowlesville"
  },
  {
    "zip": "14482",
    "city": "Le Roy"
  },
  {
    "zip": "14485",
    "city": "Lima"
  },
  {
    "zip": "14487",
    "city": "Livonia"
  },
  {
    "zip": "14502",
    "city": "Macedon"
  },
  {
    "zip": "14510",
    "city": "Mount Morris"
  },
  {
    "zip": "14514",
    "city": "North Chili"
  },
  {
    "zip": "14516",
    "city": "North Rose"
  },
  {
    "zip": "14517",
    "city": "Nunda"
  },
  {
    "zip": "14519",
    "city": "Ontario"
  },
  {
    "zip": "14521",
    "city": "Ovid"
  },
  {
    "zip": "14525",
    "city": "Pavilion"
  },
  {
    "zip": "14526",
    "city": "Penfield"
  },
  {
    "zip": "14527",
    "city": "Penn Yan"
  },
  {
    "zip": "14532",
    "city": "Phelps"
  },
  {
    "zip": "14533",
    "city": "Piffard"
  },
  {
    "zip": "14536",
    "city": "Portageville"
  },
  {
    "zip": "14541",
    "city": "Romulus"
  },
  {
    "zip": "14543",
    "city": "Rush"
  },
  {
    "zip": "14544",
    "city": "Rushville"
  },
  {
    "zip": "14545",
    "city": "Scottsburg"
  },
  {
    "zip": "14546",
    "city": "Scottsville"
  },
  {
    "zip": "14548",
    "city": "Shortsville"
  },
  {
    "zip": "14550",
    "city": "Silver Springs"
  },
  {
    "zip": "14551",
    "city": "Sodus"
  },
  {
    "zip": "14555",
    "city": "Sodus Point"
  },
  {
    "zip": "14559",
    "city": "Spencerport"
  },
  {
    "zip": "14560",
    "city": "Springwater"
  },
  {
    "zip": "14561",
    "city": "Stanley"
  },
  {
    "zip": "14564",
    "city": "Victor"
  },
  {
    "zip": "14568",
    "city": "Walworth"
  },
  {
    "zip": "14569",
    "city": "Warsaw"
  },
  {
    "zip": "14571",
    "city": "Waterport"
  },
  {
    "zip": "14585",
    "city": "West Bloomfield"
  },
  {
    "zip": "14586",
    "city": "West Henrietta"
  },
  {
    "zip": "14589",
    "city": "Williamson"
  },
  {
    "zip": "14706",
    "city": "Allegany"
  },
  {
    "zip": "14708",
    "city": "Alma"
  },
  {
    "zip": "14709",
    "city": "Angelica"
  },
  {
    "zip": "14710",
    "city": "Ashville"
  },
  {
    "zip": "14712",
    "city": "Bemus Point"
  },
  {
    "zip": "14714",
    "city": "Black Creek"
  },
  {
    "zip": "14715",
    "city": "Bolivar"
  },
  {
    "zip": "14716",
    "city": "Brocton"
  },
  {
    "zip": "14717",
    "city": "Caneadea"
  },
  {
    "zip": "14718",
    "city": "Cassadaga"
  },
  {
    "zip": "14719",
    "city": "Cattaraugus"
  },
  {
    "zip": "14721",
    "city": "Ceres"
  },
  {
    "zip": "14723",
    "city": "Cherry Creek"
  },
  {
    "zip": "14724",
    "city": "Clymer"
  },
  {
    "zip": "14726",
    "city": "Conewango Valley"
  },
  {
    "zip": "14727",
    "city": "Cuba"
  },
  {
    "zip": "14728",
    "city": "Dewittville"
  },
  {
    "zip": "14729",
    "city": "East Otto"
  },
  {
    "zip": "14731",
    "city": "Ellicottville"
  },
  {
    "zip": "14733",
    "city": "Falconer"
  },
  {
    "zip": "14735",
    "city": "Fillmore"
  },
  {
    "zip": "14736",
    "city": "Findley Lake"
  },
  {
    "zip": "14738",
    "city": "Frewsburg"
  },
  {
    "zip": "14740",
    "city": "Gerry"
  },
  {
    "zip": "14741",
    "city": "Great Valley"
  },
  {
    "zip": "14744",
    "city": "Houghton"
  },
  {
    "zip": "14747",
    "city": "Kennedy"
  },
  {
    "zip": "14748",
    "city": "Kill Buck"
  },
  {
    "zip": "14754",
    "city": "Little Genesee"
  },
  {
    "zip": "14755",
    "city": "Little Valley"
  },
  {
    "zip": "14757",
    "city": "Mayville"
  },
  {
    "zip": "14760",
    "city": "Olean"
  },
  {
    "zip": "14767",
    "city": "Panama"
  },
  {
    "zip": "14770",
    "city": "Portville"
  },
  {
    "zip": "14775",
    "city": "Ripley"
  },
  {
    "zip": "14777",
    "city": "Rushford"
  },
  {
    "zip": "14779",
    "city": "Salamanca"
  },
  {
    "zip": "14782",
    "city": "Sinclairville"
  },
  {
    "zip": "14803",
    "city": "Alfred Station"
  },
  {
    "zip": "14804",
    "city": "Almond"
  },
  {
    "zip": "14805",
    "city": "Alpine"
  },
  {
    "zip": "14807",
    "city": "Arkport"
  },
  {
    "zip": "14808",
    "city": "Atlanta"
  },
  {
    "zip": "14809",
    "city": "Avoca"
  },
  {
    "zip": "14812",
    "city": "Beaver Dams"
  },
  {
    "zip": "14814",
    "city": "Big Flats"
  },
  {
    "zip": "14816",
    "city": "Breesport"
  },
  {
    "zip": "14817",
    "city": "Brooktondale"
  },
  {
    "zip": "14818",
    "city": "Burdett"
  },
  {
    "zip": "14819",
    "city": "Cameron"
  },
  {
    "zip": "14820",
    "city": "Cameron Mills"
  },
  {
    "zip": "14821",
    "city": "Campbell"
  },
  {
    "zip": "14822",
    "city": "Canaseraga"
  },
  {
    "zip": "14823",
    "city": "Canisteo"
  },
  {
    "zip": "14824",
    "city": "Cayuta"
  },
  {
    "zip": "14825",
    "city": "Chemung"
  },
  {
    "zip": "14826",
    "city": "Cohocton"
  },
  {
    "zip": "14830",
    "city": "Corning"
  },
  {
    "zip": "14837",
    "city": "Dundee"
  },
  {
    "zip": "14838",
    "city": "Erin"
  },
  {
    "zip": "14840",
    "city": "Hammondsport"
  },
  {
    "zip": "14841",
    "city": "Hector"
  },
  {
    "zip": "14842",
    "city": "Himrod"
  },
  {
    "zip": "14843",
    "city": "Hornell"
  },
  {
    "zip": "14845",
    "city": "Horseheads"
  },
  {
    "zip": "14846",
    "city": "Hunt"
  },
  {
    "zip": "14847",
    "city": "Interlaken"
  },
  {
    "zip": "14850",
    "city": "Ithaca"
  },
  {
    "zip": "14855",
    "city": "Jasper"
  },
  {
    "zip": "14858",
    "city": "Lindley"
  },
  {
    "zip": "14859",
    "city": "Lockwood"
  },
  {
    "zip": "14861",
    "city": "Lowman"
  },
  {
    "zip": "14864",
    "city": "Millport"
  },
  {
    "zip": "14865",
    "city": "Montour Falls"
  },
  {
    "zip": "14869",
    "city": "Odessa"
  },
  {
    "zip": "14870",
    "city": "Painted Post"
  },
  {
    "zip": "14871",
    "city": "Pine City"
  },
  {
    "zip": "14872",
    "city": "Pine Valley"
  },
  {
    "zip": "14873",
    "city": "Prattsburgh"
  },
  {
    "zip": "14874",
    "city": "Pulteney"
  },
  {
    "zip": "14877",
    "city": "Rexville"
  },
  {
    "zip": "14878",
    "city": "Rock Stream"
  },
  {
    "zip": "14879",
    "city": "Savona"
  },
  {
    "zip": "14880",
    "city": "Scio"
  },
  {
    "zip": "14881",
    "city": "Slaterville Springs"
  },
  {
    "zip": "14882",
    "city": "Lansing"
  },
  {
    "zip": "14884",
    "city": "Swain"
  },
  {
    "zip": "14885",
    "city": "Troupsburg"
  },
  {
    "zip": "14886",
    "city": "Trumansburg"
  },
  {
    "zip": "14889",
    "city": "Van Etten"
  },
  {
    "zip": "14891",
    "city": "Watkins Glen"
  },
  {
    "zip": "14892",
    "city": "Waverly"
  },
  {
    "zip": "14894",
    "city": "Wellsburg"
  },
  {
    "zip": "14895",
    "city": "Wellsville"
  },
  {
    "zip": "14897",
    "city": "Whitesville"
  },
  {
    "zip": "14898",
    "city": "Woodhull"
  },
  {
    "zip": "14901",
    "city": "Elmira"
  },
  {
    "zip": "15001",
    "city": "Aliquippa"
  },
  {
    "zip": "15003",
    "city": "Ambridge"
  },
  {
    "zip": "15005",
    "city": "Baden"
  },
  {
    "zip": "15007",
    "city": "Bakerstown"
  },
  {
    "zip": "15009",
    "city": "Beaver"
  },
  {
    "zip": "15010",
    "city": "Beaver Falls"
  },
  {
    "zip": "15012",
    "city": "Belle Vernon"
  },
  {
    "zip": "15014",
    "city": "Brackenridge"
  },
  {
    "zip": "15015",
    "city": "Bradfordwoods"
  },
  {
    "zip": "15017",
    "city": "Bridgeville"
  },
  {
    "zip": "15018",
    "city": "Buena Vista"
  },
  {
    "zip": "15019",
    "city": "Bulger"
  },
  {
    "zip": "15021",
    "city": "Burgettstown"
  },
  {
    "zip": "15022",
    "city": "Charleroi"
  },
  {
    "zip": "15024",
    "city": "Cheswick"
  },
  {
    "zip": "15025",
    "city": "Clairton"
  },
  {
    "zip": "15030",
    "city": "Creighton"
  },
  {
    "zip": "15031",
    "city": "Cuddy"
  },
  {
    "zip": "15033",
    "city": "Donora"
  },
  {
    "zip": "15034",
    "city": "Dravosburg"
  },
  {
    "zip": "15035",
    "city": "East Mc Keesport"
  },
  {
    "zip": "15044",
    "city": "Gibsonia"
  },
  {
    "zip": "15045",
    "city": "Glassport"
  },
  {
    "zip": "15046",
    "city": "Crescent"
  },
  {
    "zip": "15049",
    "city": "Harwick"
  },
  {
    "zip": "15050",
    "city": "Hookstown"
  },
  {
    "zip": "15051",
    "city": "Indianola"
  },
  {
    "zip": "15052",
    "city": "Industry"
  },
  {
    "zip": "15053",
    "city": "Joffre"
  },
  {
    "zip": "15056",
    "city": "Leetsdale"
  },
  {
    "zip": "15057",
    "city": "Mc Donald"
  },
  {
    "zip": "15059",
    "city": "Midland"
  },
  {
    "zip": "15061",
    "city": "Monaca"
  },
  {
    "zip": "15062",
    "city": "Monessen"
  },
  {
    "zip": "15063",
    "city": "Monongahela"
  },
  {
    "zip": "15065",
    "city": "Natrona Heights"
  },
  {
    "zip": "15066",
    "city": "New Brighton"
  },
  {
    "zip": "15067",
    "city": "New Eagle"
  },
  {
    "zip": "15068",
    "city": "New Kensington"
  },
  {
    "zip": "15076",
    "city": "Russellton"
  },
  {
    "zip": "15078",
    "city": "Slovan"
  },
  {
    "zip": "15083",
    "city": "Sutersville"
  },
  {
    "zip": "15084",
    "city": "Tarentum"
  },
  {
    "zip": "15085",
    "city": "Trafford"
  },
  {
    "zip": "15086",
    "city": "Warrendale"
  },
  {
    "zip": "15090",
    "city": "Wexford"
  },
  {
    "zip": "15101",
    "city": "Allison Park"
  },
  {
    "zip": "15102",
    "city": "Bethel Park"
  },
  {
    "zip": "15104",
    "city": "Braddock"
  },
  {
    "zip": "15106",
    "city": "Carnegie"
  },
  {
    "zip": "15108",
    "city": "Coraopolis"
  },
  {
    "zip": "15110",
    "city": "Duquesne"
  },
  {
    "zip": "15112",
    "city": "East Pittsburgh"
  },
  {
    "zip": "15116",
    "city": "Glenshaw"
  },
  {
    "zip": "15120",
    "city": "Homestead"
  },
  {
    "zip": "15122",
    "city": "West Mifflin"
  },
  {
    "zip": "15126",
    "city": "Imperial"
  },
  {
    "zip": "15129",
    "city": "South Park"
  },
  {
    "zip": "15131",
    "city": "Mckeesport"
  },
  {
    "zip": "15136",
    "city": "Mc Kees Rocks"
  },
  {
    "zip": "15137",
    "city": "North Versailles"
  },
  {
    "zip": "15139",
    "city": "Oakmont"
  },
  {
    "zip": "15140",
    "city": "Pitcairn"
  },
  {
    "zip": "15142",
    "city": "Presto"
  },
  {
    "zip": "15143",
    "city": "Sewickley"
  },
  {
    "zip": "15144",
    "city": "Springdale"
  },
  {
    "zip": "15145",
    "city": "Turtle Creek"
  },
  {
    "zip": "15148",
    "city": "Wilmerding"
  },
  {
    "zip": "15201",
    "city": "Pittsburgh"
  },
  {
    "zip": "15310",
    "city": "Aleppo"
  },
  {
    "zip": "15311",
    "city": "Amity"
  },
  {
    "zip": "15312",
    "city": "Avella"
  },
  {
    "zip": "15314",
    "city": "Bentleyville"
  },
  {
    "zip": "15316",
    "city": "Brave"
  },
  {
    "zip": "15317",
    "city": "Canonsburg"
  },
  {
    "zip": "15320",
    "city": "Carmichaels"
  },
  {
    "zip": "15321",
    "city": "Cecil"
  },
  {
    "zip": "15323",
    "city": "Claysville"
  },
  {
    "zip": "15327",
    "city": "Dilliner"
  },
  {
    "zip": "15329",
    "city": "Prosperity"
  },
  {
    "zip": "15330",
    "city": "Eighty Four"
  },
  {
    "zip": "15332",
    "city": "Finleyville"
  },
  {
    "zip": "15333",
    "city": "Fredericktown"
  },
  {
    "zip": "15334",
    "city": "Garards Fort"
  },
  {
    "zip": "15337",
    "city": "Graysville"
  },
  {
    "zip": "15340",
    "city": "Hickory"
  },
  {
    "zip": "15342",
    "city": "Houston"
  },
  {
    "zip": "15345",
    "city": "Marianna"
  },
  {
    "zip": "15352",
    "city": "New Freeport"
  },
  {
    "zip": "15357",
    "city": "Rices Landing"
  },
  {
    "zip": "15359",
    "city": "Rogersville"
  },
  {
    "zip": "15360",
    "city": "Scenery Hill"
  },
  {
    "zip": "15362",
    "city": "Spraggs"
  },
  {
    "zip": "15363",
    "city": "Strabane"
  },
  {
    "zip": "15364",
    "city": "Sycamore"
  },
  {
    "zip": "15367",
    "city": "Venetia"
  },
  {
    "zip": "15370",
    "city": "Waynesburg"
  },
  {
    "zip": "15376",
    "city": "West Alexander"
  },
  {
    "zip": "15377",
    "city": "West Finley"
  },
  {
    "zip": "15380",
    "city": "Wind Ridge"
  },
  {
    "zip": "15401",
    "city": "Uniontown"
  },
  {
    "zip": "15410",
    "city": "Adah"
  },
  {
    "zip": "15413",
    "city": "Allison"
  },
  {
    "zip": "15419",
    "city": "California"
  },
  {
    "zip": "15423",
    "city": "Coal Center"
  },
  {
    "zip": "15424",
    "city": "Confluence"
  },
  {
    "zip": "15425",
    "city": "Connellsville"
  },
  {
    "zip": "15427",
    "city": "Daisytown"
  },
  {
    "zip": "15428",
    "city": "Dawson"
  },
  {
    "zip": "15431",
    "city": "Dunbar"
  },
  {
    "zip": "15433",
    "city": "East Millsboro"
  },
  {
    "zip": "15436",
    "city": "Fairchance"
  },
  {
    "zip": "15438",
    "city": "Fayette City"
  },
  {
    "zip": "15440",
    "city": "Gibbon Glade"
  },
  {
    "zip": "15442",
    "city": "Grindstone"
  },
  {
    "zip": "15444",
    "city": "Hiller"
  },
  {
    "zip": "15445",
    "city": "Hopwood"
  },
  {
    "zip": "15446",
    "city": "Indian Head"
  },
  {
    "zip": "15450",
    "city": "La Belle"
  },
  {
    "zip": "15451",
    "city": "Lake Lynn"
  },
  {
    "zip": "15456",
    "city": "Lemont Furnace"
  },
  {
    "zip": "15458",
    "city": "Mc Clellandtown"
  },
  {
    "zip": "15459",
    "city": "Markleysburg"
  },
  {
    "zip": "15461",
    "city": "Masontown"
  },
  {
    "zip": "15462",
    "city": "Melcroft"
  },
  {
    "zip": "15464",
    "city": "Mill Run"
  },
  {
    "zip": "15469",
    "city": "Normalville"
  },
  {
    "zip": "15470",
    "city": "Ohiopyle"
  },
  {
    "zip": "15473",
    "city": "Perryopolis"
  },
  {
    "zip": "15474",
    "city": "Point Marion"
  },
  {
    "zip": "15479",
    "city": "Smithton"
  },
  {
    "zip": "15480",
    "city": "Smock"
  },
  {
    "zip": "15486",
    "city": "Vanderbilt"
  },
  {
    "zip": "15488",
    "city": "Waltersburg"
  },
  {
    "zip": "15490",
    "city": "White"
  },
  {
    "zip": "15521",
    "city": "Alum Bank"
  },
  {
    "zip": "15531",
    "city": "Boswell"
  },
  {
    "zip": "15533",
    "city": "Breezewood"
  },
  {
    "zip": "15534",
    "city": "Buffalo Mills"
  },
  {
    "zip": "15535",
    "city": "Clearville"
  },
  {
    "zip": "15536",
    "city": "Crystal Spring"
  },
  {
    "zip": "15538",
    "city": "Fairhope"
  },
  {
    "zip": "15539",
    "city": "Fishertown"
  },
  {
    "zip": "15540",
    "city": "Fort Hill"
  },
  {
    "zip": "15541",
    "city": "Friedens"
  },
  {
    "zip": "15542",
    "city": "Garrett"
  },
  {
    "zip": "15545",
    "city": "Hyndman"
  },
  {
    "zip": "15546",
    "city": "Jenners"
  },
  {
    "zip": "15548",
    "city": "Kantner"
  },
  {
    "zip": "15550",
    "city": "Manns Choice"
  },
  {
    "zip": "15551",
    "city": "Markleton"
  },
  {
    "zip": "15552",
    "city": "Meyersdale"
  },
  {
    "zip": "15554",
    "city": "New Paris"
  },
  {
    "zip": "15559",
    "city": "Schellsburg"
  },
  {
    "zip": "15562",
    "city": "Springs"
  },
  {
    "zip": "15563",
    "city": "Stoystown"
  },
  {
    "zip": "15564",
    "city": "Wellersburg"
  },
  {
    "zip": "15565",
    "city": "West Salisbury"
  },
  {
    "zip": "15601",
    "city": "Greensburg"
  },
  {
    "zip": "15610",
    "city": "Acme"
  },
  {
    "zip": "15611",
    "city": "Adamsburg"
  },
  {
    "zip": "15612",
    "city": "Alverton"
  },
  {
    "zip": "15613",
    "city": "Apollo"
  },
  {
    "zip": "15615",
    "city": "Ardara"
  },
  {
    "zip": "15618",
    "city": "Avonmore"
  },
  {
    "zip": "15620",
    "city": "Bradenville"
  },
  {
    "zip": "15622",
    "city": "Champion"
  },
  {
    "zip": "15623",
    "city": "Claridge"
  },
  {
    "zip": "15628",
    "city": "Donegal"
  },
  {
    "zip": "15632",
    "city": "Export"
  },
  {
    "zip": "15634",
    "city": "Grapeville"
  },
  {
    "zip": "15636",
    "city": "Harrison City"
  },
  {
    "zip": "15637",
    "city": "Herminie"
  },
  {
    "zip": "15639",
    "city": "Hunker"
  },
  {
    "zip": "15642",
    "city": "Irwin"
  },
  {
    "zip": "15644",
    "city": "Jeannette"
  },
  {
    "zip": "15646",
    "city": "Jones Mills"
  },
  {
    "zip": "15647",
    "city": "Larimer"
  },
  {
    "zip": "15650",
    "city": "Latrobe"
  },
  {
    "zip": "15655",
    "city": "Laughlintown"
  },
  {
    "zip": "15656",
    "city": "Leechburg"
  },
  {
    "zip": "15658",
    "city": "Ligonier"
  },
  {
    "zip": "15661",
    "city": "Loyalhanna"
  },
  {
    "zip": "15665",
    "city": "Manor"
  },
  {
    "zip": "15666",
    "city": "Mount Pleasant"
  },
  {
    "zip": "15668",
    "city": "Murrysville"
  },
  {
    "zip": "15670",
    "city": "New Alexandria"
  },
  {
    "zip": "15671",
    "city": "New Derry"
  },
  {
    "zip": "15672",
    "city": "New Stanton"
  },
  {
    "zip": "15675",
    "city": "Penn"
  },
  {
    "zip": "15677",
    "city": "Rector"
  },
  {
    "zip": "15678",
    "city": "Rillton"
  },
  {
    "zip": "15679",
    "city": "Ruffs Dale"
  },
  {
    "zip": "15681",
    "city": "Saltsburg"
  },
  {
    "zip": "15683",
    "city": "Scottdale"
  },
  {
    "zip": "15684",
    "city": "Slickville"
  },
  {
    "zip": "15686",
    "city": "Spring Church"
  },
  {
    "zip": "15687",
    "city": "Stahlstown"
  },
  {
    "zip": "15688",
    "city": "Tarrs"
  },
  {
    "zip": "15690",
    "city": "Vandergrift"
  },
  {
    "zip": "15692",
    "city": "Westmoreland City"
  },
  {
    "zip": "15697",
    "city": "Youngwood"
  },
  {
    "zip": "15698",
    "city": "Yukon"
  },
  {
    "zip": "15701",
    "city": "Indiana"
  },
  {
    "zip": "15711",
    "city": "Anita"
  },
  {
    "zip": "15713",
    "city": "Aultman"
  },
  {
    "zip": "15714",
    "city": "Northern Cambria"
  },
  {
    "zip": "15717",
    "city": "Blairsville"
  },
  {
    "zip": "15722",
    "city": "Carrolltown"
  },
  {
    "zip": "15724",
    "city": "Cherry Tree"
  },
  {
    "zip": "15725",
    "city": "Clarksburg"
  },
  {
    "zip": "15729",
    "city": "Commodore"
  },
  {
    "zip": "15730",
    "city": "Coolspring"
  },
  {
    "zip": "15732",
    "city": "Creekside"
  },
  {
    "zip": "15740",
    "city": "Frostburg"
  },
  {
    "zip": "15742",
    "city": "Glen Campbell"
  },
  {
    "zip": "15747",
    "city": "Home"
  },
  {
    "zip": "15748",
    "city": "Homer City"
  },
  {
    "zip": "15750",
    "city": "Josephine"
  },
  {
    "zip": "15753",
    "city": "La Jose"
  },
  {
    "zip": "15757",
    "city": "Mahaffey"
  },
  {
    "zip": "15758",
    "city": "Marchand"
  },
  {
    "zip": "15759",
    "city": "Marion Center"
  },
  {
    "zip": "15760",
    "city": "Marsteller"
  },
  {
    "zip": "15761",
    "city": "Mentcle"
  },
  {
    "zip": "15762",
    "city": "Nicktown"
  },
  {
    "zip": "15763",
    "city": "Northpoint"
  },
  {
    "zip": "15764",
    "city": "Oliveburg"
  },
  {
    "zip": "15765",
    "city": "Penn Run"
  },
  {
    "zip": "15767",
    "city": "Punxsutawney"
  },
  {
    "zip": "15770",
    "city": "Ringgold"
  },
  {
    "zip": "15771",
    "city": "Rochester Mills"
  },
  {
    "zip": "15772",
    "city": "Rossiter"
  },
  {
    "zip": "15773",
    "city": "Saint Benedict"
  },
  {
    "zip": "15774",
    "city": "Shelocta"
  },
  {
    "zip": "15775",
    "city": "Spangler"
  },
  {
    "zip": "15776",
    "city": "Sprankle Mills"
  },
  {
    "zip": "15777",
    "city": "Starford"
  },
  {
    "zip": "15778",
    "city": "Timblin"
  },
  {
    "zip": "15780",
    "city": "Valier"
  },
  {
    "zip": "15784",
    "city": "Worthville"
  },
  {
    "zip": "15801",
    "city": "Du Bois"
  },
  {
    "zip": "15821",
    "city": "Benezett"
  },
  {
    "zip": "15822",
    "city": "Brandy Camp"
  },
  {
    "zip": "15824",
    "city": "Brockway"
  },
  {
    "zip": "15825",
    "city": "Brookville"
  },
  {
    "zip": "15827",
    "city": "Byrnedale"
  },
  {
    "zip": "15828",
    "city": "Clarington"
  },
  {
    "zip": "15829",
    "city": "Corsica"
  },
  {
    "zip": "15832",
    "city": "Driftwood"
  },
  {
    "zip": "15834",
    "city": "Emporium"
  },
  {
    "zip": "15840",
    "city": "Falls Creek"
  },
  {
    "zip": "15845",
    "city": "Johnsonburg"
  },
  {
    "zip": "15846",
    "city": "Kersey"
  },
  {
    "zip": "15848",
    "city": "Luthersburg"
  },
  {
    "zip": "15851",
    "city": "Reynoldsville"
  },
  {
    "zip": "15853",
    "city": "Ridgway"
  },
  {
    "zip": "15856",
    "city": "Rockton"
  },
  {
    "zip": "15857",
    "city": "Saint Marys"
  },
  {
    "zip": "15860",
    "city": "Sigel"
  },
  {
    "zip": "15861",
    "city": "Sinnamahoning"
  },
  {
    "zip": "15864",
    "city": "Summerville"
  },
  {
    "zip": "15865",
    "city": "Sykesville"
  },
  {
    "zip": "15866",
    "city": "Troutville"
  },
  {
    "zip": "15868",
    "city": "Weedville"
  },
  {
    "zip": "15870",
    "city": "Wilcox"
  },
  {
    "zip": "15920",
    "city": "Armagh"
  },
  {
    "zip": "15924",
    "city": "Cairnbrook"
  },
  {
    "zip": "15926",
    "city": "Central City"
  },
  {
    "zip": "15927",
    "city": "Colver"
  },
  {
    "zip": "15928",
    "city": "Davidsville"
  },
  {
    "zip": "15931",
    "city": "Ebensburg"
  },
  {
    "zip": "15935",
    "city": "Hollsopple"
  },
  {
    "zip": "15936",
    "city": "Hooversville"
  },
  {
    "zip": "15938",
    "city": "Lilly"
  },
  {
    "zip": "15940",
    "city": "Loretto"
  },
  {
    "zip": "15942",
    "city": "Mineral Point"
  },
  {
    "zip": "15943",
    "city": "Nanty Glo"
  },
  {
    "zip": "15944",
    "city": "New Florence"
  },
  {
    "zip": "15945",
    "city": "Parkhill"
  },
  {
    "zip": "15949",
    "city": "Robinson"
  },
  {
    "zip": "15952",
    "city": "Salix"
  },
  {
    "zip": "15953",
    "city": "Seanor"
  },
  {
    "zip": "15954",
    "city": "Seward"
  },
  {
    "zip": "15955",
    "city": "Sidman"
  },
  {
    "zip": "15956",
    "city": "South Fork"
  },
  {
    "zip": "15957",
    "city": "Strongstown"
  },
  {
    "zip": "15958",
    "city": "Summerhill"
  },
  {
    "zip": "15961",
    "city": "Vintondale"
  },
  {
    "zip": "15963",
    "city": "Windber"
  },
  {
    "zip": "16020",
    "city": "Boyers"
  },
  {
    "zip": "16021",
    "city": "Branchton"
  },
  {
    "zip": "16025",
    "city": "Chicora"
  },
  {
    "zip": "16028",
    "city": "East Brady"
  },
  {
    "zip": "16033",
    "city": "Evans City"
  },
  {
    "zip": "16034",
    "city": "Fenelton"
  },
  {
    "zip": "16040",
    "city": "Hilliards"
  },
  {
    "zip": "16041",
    "city": "Karns City"
  },
  {
    "zip": "16045",
    "city": "Lyndora"
  },
  {
    "zip": "16046",
    "city": "Mars"
  },
  {
    "zip": "16049",
    "city": "Parker"
  },
  {
    "zip": "16050",
    "city": "Petrolia"
  },
  {
    "zip": "16051",
    "city": "Portersville"
  },
  {
    "zip": "16053",
    "city": "Renfrew"
  },
  {
    "zip": "16055",
    "city": "Sarver"
  },
  {
    "zip": "16056",
    "city": "Saxonburg"
  },
  {
    "zip": "16057",
    "city": "Slippery Rock"
  },
  {
    "zip": "16059",
    "city": "Valencia"
  },
  {
    "zip": "16061",
    "city": "West Sunbury"
  },
  {
    "zip": "16063",
    "city": "Zelienople"
  },
  {
    "zip": "16066",
    "city": "Cranberry Twp"
  },
  {
    "zip": "16101",
    "city": "New Castle"
  },
  {
    "zip": "16110",
    "city": "Adamsville"
  },
  {
    "zip": "16111",
    "city": "Atlantic"
  },
  {
    "zip": "16112",
    "city": "Bessemer"
  },
  {
    "zip": "16114",
    "city": "Clarks Mills"
  },
  {
    "zip": "16115",
    "city": "Darlington"
  },
  {
    "zip": "16116",
    "city": "Edinburg"
  },
  {
    "zip": "16117",
    "city": "Ellwood City"
  },
  {
    "zip": "16120",
    "city": "Enon Valley"
  },
  {
    "zip": "16121",
    "city": "Farrell"
  },
  {
    "zip": "16123",
    "city": "Fombell"
  },
  {
    "zip": "16127",
    "city": "Grove City"
  },
  {
    "zip": "16131",
    "city": "Hartstown"
  },
  {
    "zip": "16133",
    "city": "Jackson Center"
  },
  {
    "zip": "16137",
    "city": "Mercer"
  },
  {
    "zip": "16141",
    "city": "New Galilee"
  },
  {
    "zip": "16142",
    "city": "New Wilmington"
  },
  {
    "zip": "16145",
    "city": "Sandy Lake"
  },
  {
    "zip": "16148",
    "city": "Hermitage"
  },
  {
    "zip": "16150",
    "city": "Sharpsville"
  },
  {
    "zip": "16153",
    "city": "Stoneboro"
  },
  {
    "zip": "16154",
    "city": "Transfer"
  },
  {
    "zip": "16156",
    "city": "Volant"
  },
  {
    "zip": "16157",
    "city": "Wampum"
  },
  {
    "zip": "16159",
    "city": "West Middlesex"
  },
  {
    "zip": "16201",
    "city": "Kittanning"
  },
  {
    "zip": "16210",
    "city": "Adrian"
  },
  {
    "zip": "16214",
    "city": "Clarion"
  },
  {
    "zip": "16217",
    "city": "Cooksburg"
  },
  {
    "zip": "16218",
    "city": "Cowansville"
  },
  {
    "zip": "16224",
    "city": "Fairmount City"
  },
  {
    "zip": "16226",
    "city": "Ford City"
  },
  {
    "zip": "16228",
    "city": "Ford Cliff"
  },
  {
    "zip": "16232",
    "city": "Knox"
  },
  {
    "zip": "16233",
    "city": "Leeper"
  },
  {
    "zip": "16235",
    "city": "Lucinda"
  },
  {
    "zip": "16239",
    "city": "Marienville"
  },
  {
    "zip": "16240",
    "city": "Mayport"
  },
  {
    "zip": "16242",
    "city": "New Bethlehem"
  },
  {
    "zip": "16248",
    "city": "Rimersburg"
  },
  {
    "zip": "16249",
    "city": "Rural Valley"
  },
  {
    "zip": "16253",
    "city": "Seminole"
  },
  {
    "zip": "16254",
    "city": "Shippenville"
  },
  {
    "zip": "16255",
    "city": "Sligo"
  },
  {
    "zip": "16256",
    "city": "Smicksburg"
  },
  {
    "zip": "16257",
    "city": "Snydersburg"
  },
  {
    "zip": "16258",
    "city": "Strattanville"
  },
  {
    "zip": "16260",
    "city": "Vowinckel"
  },
  {
    "zip": "16261",
    "city": "Widnoon"
  },
  {
    "zip": "16301",
    "city": "Oil City"
  },
  {
    "zip": "16311",
    "city": "Carlton"
  },
  {
    "zip": "16313",
    "city": "Clarendon"
  },
  {
    "zip": "16314",
    "city": "Cochranton"
  },
  {
    "zip": "16316",
    "city": "Conneaut Lake"
  },
  {
    "zip": "16319",
    "city": "Cranberry"
  },
  {
    "zip": "16326",
    "city": "Fryburg"
  },
  {
    "zip": "16327",
    "city": "Guys Mills"
  },
  {
    "zip": "16329",
    "city": "Irvine"
  },
  {
    "zip": "16331",
    "city": "Kossuth"
  },
  {
    "zip": "16332",
    "city": "Lickingville"
  },
  {
    "zip": "16334",
    "city": "Marble"
  },
  {
    "zip": "16335",
    "city": "Meadville"
  },
  {
    "zip": "16342",
    "city": "Polk"
  },
  {
    "zip": "16346",
    "city": "Seneca"
  },
  {
    "zip": "16350",
    "city": "Sugar Grove"
  },
  {
    "zip": "16351",
    "city": "Tidioute"
  },
  {
    "zip": "16353",
    "city": "Tionesta"
  },
  {
    "zip": "16360",
    "city": "Townville"
  },
  {
    "zip": "16364",
    "city": "Venus"
  },
  {
    "zip": "16373",
    "city": "Emlenton"
  },
  {
    "zip": "16374",
    "city": "Kennerdell"
  },
  {
    "zip": "16402",
    "city": "Bear Lake"
  },
  {
    "zip": "16403",
    "city": "Cambridge Springs"
  },
  {
    "zip": "16406",
    "city": "Conneautville"
  },
  {
    "zip": "16407",
    "city": "Corry"
  },
  {
    "zip": "16410",
    "city": "Cranesville"
  },
  {
    "zip": "16412",
    "city": "Edinboro"
  },
  {
    "zip": "16417",
    "city": "Girard"
  },
  {
    "zip": "16420",
    "city": "Grand Valley"
  },
  {
    "zip": "16421",
    "city": "Harborcreek"
  },
  {
    "zip": "16423",
    "city": "Lake City"
  },
  {
    "zip": "16424",
    "city": "Linesville"
  },
  {
    "zip": "16426",
    "city": "Mc Kean"
  },
  {
    "zip": "16428",
    "city": "North East"
  },
  {
    "zip": "16432",
    "city": "Riceville"
  },
  {
    "zip": "16433",
    "city": "Saegertown"
  },
  {
    "zip": "16434",
    "city": "Spartansburg"
  },
  {
    "zip": "16435",
    "city": "Springboro"
  },
  {
    "zip": "16436",
    "city": "Spring Creek"
  },
  {
    "zip": "16440",
    "city": "Venango"
  },
  {
    "zip": "16442",
    "city": "Wattsburg"
  },
  {
    "zip": "16501",
    "city": "Erie"
  },
  {
    "zip": "16601",
    "city": "Altoona"
  },
  {
    "zip": "16611",
    "city": "Alexandria"
  },
  {
    "zip": "16616",
    "city": "Beccaria"
  },
  {
    "zip": "16617",
    "city": "Bellwood"
  },
  {
    "zip": "16621",
    "city": "Broad Top"
  },
  {
    "zip": "16622",
    "city": "Calvin"
  },
  {
    "zip": "16625",
    "city": "Claysburg"
  },
  {
    "zip": "16627",
    "city": "Coalport"
  },
  {
    "zip": "16629",
    "city": "Coupon"
  },
  {
    "zip": "16630",
    "city": "Cresson"
  },
  {
    "zip": "16635",
    "city": "Duncansville"
  },
  {
    "zip": "16636",
    "city": "Dysart"
  },
  {
    "zip": "16637",
    "city": "East Freedom"
  },
  {
    "zip": "16638",
    "city": "Entriken"
  },
  {
    "zip": "16639",
    "city": "Fallentimber"
  },
  {
    "zip": "16640",
    "city": "Flinton"
  },
  {
    "zip": "16641",
    "city": "Gallitzin"
  },
  {
    "zip": "16647",
    "city": "Hesston"
  },
  {
    "zip": "16648",
    "city": "Hollidaysburg"
  },
  {
    "zip": "16651",
    "city": "Houtzdale"
  },
  {
    "zip": "16652",
    "city": "Huntingdon"
  },
  {
    "zip": "16655",
    "city": "Imler"
  },
  {
    "zip": "16656",
    "city": "Irvona"
  },
  {
    "zip": "16657",
    "city": "James Creek"
  },
  {
    "zip": "16659",
    "city": "Loysburg"
  },
  {
    "zip": "16661",
    "city": "Madera"
  },
  {
    "zip": "16662",
    "city": "Martinsburg"
  },
  {
    "zip": "16664",
    "city": "New Enterprise"
  },
  {
    "zip": "16666",
    "city": "Osceola Mills"
  },
  {
    "zip": "16667",
    "city": "Osterburg"
  },
  {
    "zip": "16668",
    "city": "Patton"
  },
  {
    "zip": "16670",
    "city": "Queen"
  },
  {
    "zip": "16673",
    "city": "Roaring Spring"
  },
  {
    "zip": "16674",
    "city": "Robertsdale"
  },
  {
    "zip": "16678",
    "city": "Saxton"
  },
  {
    "zip": "16679",
    "city": "Six Mile Run"
  },
  {
    "zip": "16680",
    "city": "Smithmill"
  },
  {
    "zip": "16682",
    "city": "Sproul"
  },
  {
    "zip": "16683",
    "city": "Spruce Creek"
  },
  {
    "zip": "16685",
    "city": "Todd"
  },
  {
    "zip": "16686",
    "city": "Tyrone"
  },
  {
    "zip": "16689",
    "city": "Waterfall"
  },
  {
    "zip": "16691",
    "city": "Wells Tannery"
  },
  {
    "zip": "16692",
    "city": "Westover"
  },
  {
    "zip": "16720",
    "city": "Austin"
  },
  {
    "zip": "16726",
    "city": "Cyclone"
  },
  {
    "zip": "16727",
    "city": "Derrick City"
  },
  {
    "zip": "16728",
    "city": "De Young"
  },
  {
    "zip": "16729",
    "city": "Duke Center"
  },
  {
    "zip": "16732",
    "city": "Gifford"
  },
  {
    "zip": "16735",
    "city": "Kane"
  },
  {
    "zip": "16738",
    "city": "Lewis Run"
  },
  {
    "zip": "16740",
    "city": "Mount Jewett"
  },
  {
    "zip": "16743",
    "city": "Port Allegany"
  },
  {
    "zip": "16744",
    "city": "Rew"
  },
  {
    "zip": "16745",
    "city": "Rixford"
  },
  {
    "zip": "16746",
    "city": "Roulette"
  },
  {
    "zip": "16748",
    "city": "Shinglehouse"
  },
  {
    "zip": "16749",
    "city": "Smethport"
  },
  {
    "zip": "16750",
    "city": "Turtlepoint"
  },
  {
    "zip": "16801",
    "city": "State College"
  },
  {
    "zip": "16802",
    "city": "University Park"
  },
  {
    "zip": "16820",
    "city": "Aaronsburg"
  },
  {
    "zip": "16821",
    "city": "Allport"
  },
  {
    "zip": "16822",
    "city": "Beech Creek"
  },
  {
    "zip": "16823",
    "city": "Bellefonte"
  },
  {
    "zip": "16827",
    "city": "Boalsburg"
  },
  {
    "zip": "16828",
    "city": "Centre Hall"
  },
  {
    "zip": "16830",
    "city": "Clearfield"
  },
  {
    "zip": "16832",
    "city": "Coburn"
  },
  {
    "zip": "16833",
    "city": "Curwensville"
  },
  {
    "zip": "16837",
    "city": "Glen Richey"
  },
  {
    "zip": "16838",
    "city": "Grampian"
  },
  {
    "zip": "16839",
    "city": "Grassflat"
  },
  {
    "zip": "16840",
    "city": "Hawk Run"
  },
  {
    "zip": "16841",
    "city": "Howard"
  },
  {
    "zip": "16844",
    "city": "Julian"
  },
  {
    "zip": "16845",
    "city": "Karthaus"
  },
  {
    "zip": "16850",
    "city": "Lecontes Mills"
  },
  {
    "zip": "16852",
    "city": "Madisonburg"
  },
  {
    "zip": "16854",
    "city": "Millheim"
  },
  {
    "zip": "16858",
    "city": "Morrisdale"
  },
  {
    "zip": "16859",
    "city": "Moshannon"
  },
  {
    "zip": "16860",
    "city": "Munson"
  },
  {
    "zip": "16861",
    "city": "New Millport"
  },
  {
    "zip": "16863",
    "city": "Olanta"
  },
  {
    "zip": "16864",
    "city": "Orviston"
  },
  {
    "zip": "16865",
    "city": "Pennsylvania Furnace"
  },
  {
    "zip": "16866",
    "city": "Philipsburg"
  },
  {
    "zip": "16870",
    "city": "Port Matilda"
  },
  {
    "zip": "16871",
    "city": "Pottersdale"
  },
  {
    "zip": "16872",
    "city": "Rebersburg"
  },
  {
    "zip": "16874",
    "city": "Snow Shoe"
  },
  {
    "zip": "16875",
    "city": "Spring Mills"
  },
  {
    "zip": "16877",
    "city": "Warriors Mark"
  },
  {
    "zip": "16878",
    "city": "West Decatur"
  },
  {
    "zip": "16879",
    "city": "Winburne"
  },
  {
    "zip": "16881",
    "city": "Woodland"
  },
  {
    "zip": "16882",
    "city": "Woodward"
  },
  {
    "zip": "16901",
    "city": "Wellsboro"
  },
  {
    "zip": "16910",
    "city": "Alba"
  },
  {
    "zip": "16912",
    "city": "Blossburg"
  },
  {
    "zip": "16914",
    "city": "Columbia Cross Roads"
  },
  {
    "zip": "16915",
    "city": "Coudersport"
  },
  {
    "zip": "16917",
    "city": "Covington"
  },
  {
    "zip": "16918",
    "city": "Cowanesque"
  },
  {
    "zip": "16920",
    "city": "Elkland"
  },
  {
    "zip": "16921",
    "city": "Gaines"
  },
  {
    "zip": "16922",
    "city": "Galeton"
  },
  {
    "zip": "16923",
    "city": "Genesee"
  },
  {
    "zip": "16925",
    "city": "Gillett"
  },
  {
    "zip": "16926",
    "city": "Granville Summit"
  },
  {
    "zip": "16927",
    "city": "Harrison Valley"
  },
  {
    "zip": "16928",
    "city": "Knoxville"
  },
  {
    "zip": "16932",
    "city": "Mainesburg"
  },
  {
    "zip": "16935",
    "city": "Middlebury Center"
  },
  {
    "zip": "16937",
    "city": "Mills"
  },
  {
    "zip": "16942",
    "city": "Osceola"
  },
  {
    "zip": "16943",
    "city": "Sabinsville"
  },
  {
    "zip": "16946",
    "city": "Tioga"
  },
  {
    "zip": "16948",
    "city": "Ulysses"
  },
  {
    "zip": "17002",
    "city": "Allensville"
  },
  {
    "zip": "17003",
    "city": "Annville"
  },
  {
    "zip": "17006",
    "city": "Blain"
  },
  {
    "zip": "17007",
    "city": "Boiling Springs"
  },
  {
    "zip": "17011",
    "city": "Camp Hill"
  },
  {
    "zip": "17014",
    "city": "Cocolamus"
  },
  {
    "zip": "17017",
    "city": "Dalmatia"
  },
  {
    "zip": "17018",
    "city": "Dauphin"
  },
  {
    "zip": "17019",
    "city": "Dillsburg"
  },
  {
    "zip": "17020",
    "city": "Duncannon"
  },
  {
    "zip": "17021",
    "city": "East Waterford"
  },
  {
    "zip": "17023",
    "city": "Elizabethville"
  },
  {
    "zip": "17024",
    "city": "Elliottsburg"
  },
  {
    "zip": "17025",
    "city": "Enola"
  },
  {
    "zip": "17026",
    "city": "Fredericksburg"
  },
  {
    "zip": "17028",
    "city": "Grantville"
  },
  {
    "zip": "17030",
    "city": "Gratz"
  },
  {
    "zip": "17033",
    "city": "Hershey"
  },
  {
    "zip": "17034",
    "city": "Highspire"
  },
  {
    "zip": "17035",
    "city": "Honey Grove"
  },
  {
    "zip": "17036",
    "city": "Hummelstown"
  },
  {
    "zip": "17037",
    "city": "Ickesburg"
  },
  {
    "zip": "17038",
    "city": "Jonestown"
  },
  {
    "zip": "17040",
    "city": "Landisburg"
  },
  {
    "zip": "17043",
    "city": "Lemoyne"
  },
  {
    "zip": "17044",
    "city": "Lewistown"
  },
  {
    "zip": "17047",
    "city": "Loysville"
  },
  {
    "zip": "17048",
    "city": "Lykens"
  },
  {
    "zip": "17049",
    "city": "Mc Alisterville"
  },
  {
    "zip": "17050",
    "city": "Mechanicsburg"
  },
  {
    "zip": "17051",
    "city": "Mc Veytown"
  },
  {
    "zip": "17052",
    "city": "Mapleton Depot"
  },
  {
    "zip": "17053",
    "city": "Marysville"
  },
  {
    "zip": "17058",
    "city": "Mifflin"
  },
  {
    "zip": "17059",
    "city": "Mifflintown"
  },
  {
    "zip": "17060",
    "city": "Mill Creek"
  },
  {
    "zip": "17061",
    "city": "Millersburg"
  },
  {
    "zip": "17062",
    "city": "Millerstown"
  },
  {
    "zip": "17063",
    "city": "Milroy"
  },
  {
    "zip": "17065",
    "city": "Mount Holly Springs"
  },
  {
    "zip": "17066",
    "city": "Mount Union"
  },
  {
    "zip": "17067",
    "city": "Myerstown"
  },
  {
    "zip": "17068",
    "city": "New Bloomfield"
  },
  {
    "zip": "17070",
    "city": "New Cumberland"
  },
  {
    "zip": "17073",
    "city": "Newmanstown"
  },
  {
    "zip": "17076",
    "city": "Oakland Mills"
  },
  {
    "zip": "17082",
    "city": "Port Royal"
  },
  {
    "zip": "17084",
    "city": "Reedsville"
  },
  {
    "zip": "17086",
    "city": "Richfield"
  },
  {
    "zip": "17090",
    "city": "Shermans Dale"
  },
  {
    "zip": "17094",
    "city": "Thompsontown"
  },
  {
    "zip": "17099",
    "city": "Yeagertown"
  },
  {
    "zip": "17101",
    "city": "Harrisburg"
  },
  {
    "zip": "17201",
    "city": "Chambersburg"
  },
  {
    "zip": "17211",
    "city": "Artemas"
  },
  {
    "zip": "17212",
    "city": "Big Cove Tannery"
  },
  {
    "zip": "17213",
    "city": "Blairs Mills"
  },
  {
    "zip": "17214",
    "city": "Blue Ridge Summit"
  },
  {
    "zip": "17215",
    "city": "Burnt Cabins"
  },
  {
    "zip": "17219",
    "city": "Doylesburg"
  },
  {
    "zip": "17220",
    "city": "Dry Run"
  },
  {
    "zip": "17221",
    "city": "Fannettsburg"
  },
  {
    "zip": "17223",
    "city": "Fort Littleton"
  },
  {
    "zip": "17224",
    "city": "Fort Loudon"
  },
  {
    "zip": "17225",
    "city": "Greencastle"
  },
  {
    "zip": "17228",
    "city": "Harrisonville"
  },
  {
    "zip": "17229",
    "city": "Hustontown"
  },
  {
    "zip": "17232",
    "city": "Lurgan"
  },
  {
    "zip": "17233",
    "city": "Mc Connellsburg"
  },
  {
    "zip": "17236",
    "city": "Mercersburg"
  },
  {
    "zip": "17237",
    "city": "Mont Alto"
  },
  {
    "zip": "17238",
    "city": "Needmore"
  },
  {
    "zip": "17239",
    "city": "Neelyton"
  },
  {
    "zip": "17240",
    "city": "Newburg"
  },
  {
    "zip": "17241",
    "city": "Newville"
  },
  {
    "zip": "17243",
    "city": "Orbisonia"
  },
  {
    "zip": "17244",
    "city": "Orrstown"
  },
  {
    "zip": "17246",
    "city": "Pleasant Hall"
  },
  {
    "zip": "17252",
    "city": "Saint Thomas"
  },
  {
    "zip": "17255",
    "city": "Shade Gap"
  },
  {
    "zip": "17257",
    "city": "Shippensburg"
  },
  {
    "zip": "17260",
    "city": "Shirleysburg"
  },
  {
    "zip": "17262",
    "city": "Spring Run"
  },
  {
    "zip": "17264",
    "city": "Three Springs"
  },
  {
    "zip": "17265",
    "city": "Upperstrasburg"
  },
  {
    "zip": "17266",
    "city": "Walnut Bottom"
  },
  {
    "zip": "17267",
    "city": "Warfordsburg"
  },
  {
    "zip": "17268",
    "city": "Waynesboro"
  },
  {
    "zip": "17271",
    "city": "Willow Hill"
  },
  {
    "zip": "17301",
    "city": "Abbottstown"
  },
  {
    "zip": "17302",
    "city": "Airville"
  },
  {
    "zip": "17304",
    "city": "Aspers"
  },
  {
    "zip": "17307",
    "city": "Biglerville"
  },
  {
    "zip": "17309",
    "city": "Brogue"
  },
  {
    "zip": "17313",
    "city": "Dallastown"
  },
  {
    "zip": "17314",
    "city": "Delta"
  },
  {
    "zip": "17319",
    "city": "Etters"
  },
  {
    "zip": "17321",
    "city": "Fawn Grove"
  },
  {
    "zip": "17322",
    "city": "Felton"
  },
  {
    "zip": "17324",
    "city": "Gardners"
  },
  {
    "zip": "17325",
    "city": "Gettysburg"
  },
  {
    "zip": "17329",
    "city": "Glenville"
  },
  {
    "zip": "17339",
    "city": "Lewisberry"
  },
  {
    "zip": "17340",
    "city": "Littlestown"
  },
  {
    "zip": "17344",
    "city": "Mc Sherrystown"
  },
  {
    "zip": "17347",
    "city": "Mount Wolf"
  },
  {
    "zip": "17349",
    "city": "New Freedom"
  },
  {
    "zip": "17350",
    "city": "New Oxford"
  },
  {
    "zip": "17352",
    "city": "New Park"
  },
  {
    "zip": "17353",
    "city": "Orrtanna"
  },
  {
    "zip": "17354",
    "city": "Porters Sideling"
  },
  {
    "zip": "17356",
    "city": "Red Lion"
  },
  {
    "zip": "17360",
    "city": "Seven Valleys"
  },
  {
    "zip": "17362",
    "city": "Spring Grove"
  },
  {
    "zip": "17363",
    "city": "Stewartstown"
  },
  {
    "zip": "17364",
    "city": "Thomasville"
  },
  {
    "zip": "17368",
    "city": "Wrightsville"
  },
  {
    "zip": "17370",
    "city": "York Haven"
  },
  {
    "zip": "17372",
    "city": "York Springs"
  },
  {
    "zip": "17375",
    "city": "Peach Glen"
  },
  {
    "zip": "17505",
    "city": "Bird In Hand"
  },
  {
    "zip": "17509",
    "city": "Christiana"
  },
  {
    "zip": "17516",
    "city": "Conestoga"
  },
  {
    "zip": "17518",
    "city": "Drumore"
  },
  {
    "zip": "17519",
    "city": "East Earl"
  },
  {
    "zip": "17520",
    "city": "East Petersburg"
  },
  {
    "zip": "17522",
    "city": "Ephrata"
  },
  {
    "zip": "17527",
    "city": "Gap"
  },
  {
    "zip": "17529",
    "city": "Gordonville"
  },
  {
    "zip": "17532",
    "city": "Holtwood"
  },
  {
    "zip": "17535",
    "city": "Kinzers"
  },
  {
    "zip": "17540",
    "city": "Leola"
  },
  {
    "zip": "17543",
    "city": "Lititz"
  },
  {
    "zip": "17545",
    "city": "Manheim"
  },
  {
    "zip": "17551",
    "city": "Millersville"
  },
  {
    "zip": "17552",
    "city": "Mount Joy"
  },
  {
    "zip": "17554",
    "city": "Mountville"
  },
  {
    "zip": "17555",
    "city": "Narvon"
  },
  {
    "zip": "17557",
    "city": "New Holland"
  },
  {
    "zip": "17562",
    "city": "Paradise"
  },
  {
    "zip": "17563",
    "city": "Peach Bottom"
  },
  {
    "zip": "17565",
    "city": "Pequea"
  },
  {
    "zip": "17566",
    "city": "Quarryville"
  },
  {
    "zip": "17569",
    "city": "Reinholds"
  },
  {
    "zip": "17572",
    "city": "Ronks"
  },
  {
    "zip": "17576",
    "city": "Smoketown"
  },
  {
    "zip": "17578",
    "city": "Stevens"
  },
  {
    "zip": "17579",
    "city": "Strasburg"
  },
  {
    "zip": "17581",
    "city": "Terre Hill"
  },
  {
    "zip": "17582",
    "city": "Washington Boro"
  },
  {
    "zip": "17584",
    "city": "Willow Street"
  },
  {
    "zip": "17701",
    "city": "Williamsport"
  },
  {
    "zip": "17723",
    "city": "Cammal"
  },
  {
    "zip": "17727",
    "city": "Cedar Run"
  },
  {
    "zip": "17728",
    "city": "Cogan Station"
  },
  {
    "zip": "17729",
    "city": "Cross Fork"
  },
  {
    "zip": "17737",
    "city": "Hughesville"
  },
  {
    "zip": "17738",
    "city": "North Bend"
  },
  {
    "zip": "17740",
    "city": "Jersey Shore"
  },
  {
    "zip": "17742",
    "city": "Lairdsville"
  },
  {
    "zip": "17745",
    "city": "Lock Haven"
  },
  {
    "zip": "17747",
    "city": "Loganton"
  },
  {
    "zip": "17751",
    "city": "Mill Hall"
  },
  {
    "zip": "17754",
    "city": "Montoursville"
  },
  {
    "zip": "17756",
    "city": "Muncy"
  },
  {
    "zip": "17758",
    "city": "Muncy Valley"
  },
  {
    "zip": "17764",
    "city": "Renovo"
  },
  {
    "zip": "17765",
    "city": "Roaring Branch"
  },
  {
    "zip": "17768",
    "city": "Shunk"
  },
  {
    "zip": "17771",
    "city": "Trout Run"
  },
  {
    "zip": "17772",
    "city": "Turbotville"
  },
  {
    "zip": "17774",
    "city": "Unityville"
  },
  {
    "zip": "17777",
    "city": "Watsontown"
  },
  {
    "zip": "17801",
    "city": "Sunbury"
  },
  {
    "zip": "17810",
    "city": "Allenwood"
  },
  {
    "zip": "17812",
    "city": "Beaver Springs"
  },
  {
    "zip": "17813",
    "city": "Beavertown"
  },
  {
    "zip": "17814",
    "city": "Benton"
  },
  {
    "zip": "17815",
    "city": "Bloomsburg"
  },
  {
    "zip": "17820",
    "city": "Catawissa"
  },
  {
    "zip": "17823",
    "city": "Dornsife"
  },
  {
    "zip": "17824",
    "city": "Elysburg"
  },
  {
    "zip": "17827",
    "city": "Freeburg"
  },
  {
    "zip": "17830",
    "city": "Herndon"
  },
  {
    "zip": "17834",
    "city": "Kulpmont"
  },
  {
    "zip": "17836",
    "city": "Leck Kill"
  },
  {
    "zip": "17837",
    "city": "Lewisburg"
  },
  {
    "zip": "17841",
    "city": "Mc Clure"
  },
  {
    "zip": "17842",
    "city": "Middleburg"
  },
  {
    "zip": "17844",
    "city": "Mifflinburg"
  },
  {
    "zip": "17845",
    "city": "Millmont"
  },
  {
    "zip": "17851",
    "city": "Mount Carmel"
  },
  {
    "zip": "17853",
    "city": "Mount Pleasant Mills"
  },
  {
    "zip": "17856",
    "city": "New Columbia"
  },
  {
    "zip": "17857",
    "city": "Northumberland"
  },
  {
    "zip": "17859",
    "city": "Orangeville"
  },
  {
    "zip": "17860",
    "city": "Paxinos"
  },
  {
    "zip": "17864",
    "city": "Port Trevorton"
  },
  {
    "zip": "17866",
    "city": "Coal Township"
  },
  {
    "zip": "17867",
    "city": "Rebuck"
  },
  {
    "zip": "17870",
    "city": "Selinsgrove"
  },
  {
    "zip": "17872",
    "city": "Shamokin"
  },
  {
    "zip": "17876",
    "city": "Shamokin Dam"
  },
  {
    "zip": "17881",
    "city": "Trevorton"
  },
  {
    "zip": "17886",
    "city": "West Milton"
  },
  {
    "zip": "17888",
    "city": "Wilburton"
  },
  {
    "zip": "17889",
    "city": "Winfield"
  },
  {
    "zip": "17901",
    "city": "Pottsville"
  },
  {
    "zip": "17929",
    "city": "Cressona"
  },
  {
    "zip": "17931",
    "city": "Frackville"
  },
  {
    "zip": "17934",
    "city": "Gilberton"
  },
  {
    "zip": "17935",
    "city": "Girardville"
  },
  {
    "zip": "17938",
    "city": "Hegins"
  },
  {
    "zip": "17941",
    "city": "Klingerstown"
  },
  {
    "zip": "17948",
    "city": "Mahanoy City"
  },
  {
    "zip": "17954",
    "city": "Minersville"
  },
  {
    "zip": "17957",
    "city": "Muir"
  },
  {
    "zip": "17959",
    "city": "New Philadelphia"
  },
  {
    "zip": "17960",
    "city": "New Ringgold"
  },
  {
    "zip": "17961",
    "city": "Orwigsburg"
  },
  {
    "zip": "17963",
    "city": "Pine Grove"
  },
  {
    "zip": "17965",
    "city": "Port Carbon"
  },
  {
    "zip": "17967",
    "city": "Ringtown"
  },
  {
    "zip": "17968",
    "city": "Sacramento"
  },
  {
    "zip": "17970",
    "city": "Saint Clair"
  },
  {
    "zip": "17972",
    "city": "Schuylkill Haven"
  },
  {
    "zip": "17976",
    "city": "Shenandoah"
  },
  {
    "zip": "17978",
    "city": "Spring Glen"
  },
  {
    "zip": "17980",
    "city": "Tower City"
  },
  {
    "zip": "17981",
    "city": "Tremont"
  },
  {
    "zip": "17983",
    "city": "Valley View"
  },
  {
    "zip": "17985",
    "city": "Zion Grove"
  },
  {
    "zip": "18003",
    "city": "Lehigh Valley"
  },
  {
    "zip": "18011",
    "city": "Alburtis"
  },
  {
    "zip": "18031",
    "city": "Breinigsville"
  },
  {
    "zip": "18032",
    "city": "Catasauqua"
  },
  {
    "zip": "18034",
    "city": "Center Valley"
  },
  {
    "zip": "18035",
    "city": "Cherryville"
  },
  {
    "zip": "18036",
    "city": "Coopersburg"
  },
  {
    "zip": "18037",
    "city": "Coplay"
  },
  {
    "zip": "18038",
    "city": "Danielsville"
  },
  {
    "zip": "18041",
    "city": "East Greenville"
  },
  {
    "zip": "18049",
    "city": "Emmaus"
  },
  {
    "zip": "18051",
    "city": "Fogelsville"
  },
  {
    "zip": "18053",
    "city": "Germansville"
  },
  {
    "zip": "18054",
    "city": "Green Lane"
  },
  {
    "zip": "18055",
    "city": "Hellertown"
  },
  {
    "zip": "18056",
    "city": "Hereford"
  },
  {
    "zip": "18058",
    "city": "Kunkletown"
  },
  {
    "zip": "18059",
    "city": "Laurys Station"
  },
  {
    "zip": "18062",
    "city": "Macungie"
  },
  {
    "zip": "18064",
    "city": "Nazareth"
  },
  {
    "zip": "18066",
    "city": "New Tripoli"
  },
  {
    "zip": "18069",
    "city": "Orefield"
  },
  {
    "zip": "18070",
    "city": "Palm"
  },
  {
    "zip": "18071",
    "city": "Palmerton"
  },
  {
    "zip": "18072",
    "city": "Pen Argyl"
  },
  {
    "zip": "18073",
    "city": "Pennsburg"
  },
  {
    "zip": "18074",
    "city": "Perkiomenville"
  },
  {
    "zip": "18076",
    "city": "Red Hill"
  },
  {
    "zip": "18077",
    "city": "Riegelsville"
  },
  {
    "zip": "18078",
    "city": "Schnecksville"
  },
  {
    "zip": "18080",
    "city": "Slatington"
  },
  {
    "zip": "18087",
    "city": "Trexlertown"
  },
  {
    "zip": "18088",
    "city": "Walnutport"
  },
  {
    "zip": "18091",
    "city": "Wind Gap"
  },
  {
    "zip": "18092",
    "city": "Zionsville"
  },
  {
    "zip": "18201",
    "city": "Hazleton"
  },
  {
    "zip": "18210",
    "city": "Albrightsville"
  },
  {
    "zip": "18211",
    "city": "Andreas"
  },
  {
    "zip": "18214",
    "city": "Barnesville"
  },
  {
    "zip": "18216",
    "city": "Beaver Meadows"
  },
  {
    "zip": "18218",
    "city": "Coaldale"
  },
  {
    "zip": "18222",
    "city": "Drums"
  },
  {
    "zip": "18224",
    "city": "Freeland"
  },
  {
    "zip": "18229",
    "city": "Jim Thorpe"
  },
  {
    "zip": "18232",
    "city": "Lansford"
  },
  {
    "zip": "18235",
    "city": "Lehighton"
  },
  {
    "zip": "18237",
    "city": "Mcadoo"
  },
  {
    "zip": "18240",
    "city": "Nesquehoning"
  },
  {
    "zip": "18241",
    "city": "Nuremberg"
  },
  {
    "zip": "18249",
    "city": "Sugarloaf"
  },
  {
    "zip": "18250",
    "city": "Summit Hill"
  },
  {
    "zip": "18252",
    "city": "Tamaqua"
  },
  {
    "zip": "18255",
    "city": "Weatherly"
  },
  {
    "zip": "18301",
    "city": "East Stroudsburg"
  },
  {
    "zip": "18321",
    "city": "Bartonsville"
  },
  {
    "zip": "18322",
    "city": "Brodheadsville"
  },
  {
    "zip": "18324",
    "city": "Bushkill"
  },
  {
    "zip": "18325",
    "city": "Canadensis"
  },
  {
    "zip": "18326",
    "city": "Cresco"
  },
  {
    "zip": "18328",
    "city": "Dingmans Ferry"
  },
  {
    "zip": "18330",
    "city": "Effort"
  },
  {
    "zip": "18331",
    "city": "Gilbert"
  },
  {
    "zip": "18332",
    "city": "Henryville"
  },
  {
    "zip": "18333",
    "city": "Kresgeville"
  },
  {
    "zip": "18334",
    "city": "Long Pond"
  },
  {
    "zip": "18336",
    "city": "Matamoras"
  },
  {
    "zip": "18343",
    "city": "Mount Bethel"
  },
  {
    "zip": "18344",
    "city": "Mount Pocono"
  },
  {
    "zip": "18346",
    "city": "Pocono Summit"
  },
  {
    "zip": "18347",
    "city": "Pocono Lake"
  },
  {
    "zip": "18350",
    "city": "Pocono Pines"
  },
  {
    "zip": "18352",
    "city": "Reeders"
  },
  {
    "zip": "18353",
    "city": "Saylorsburg"
  },
  {
    "zip": "18354",
    "city": "Sciota"
  },
  {
    "zip": "18355",
    "city": "Scotrun"
  },
  {
    "zip": "18360",
    "city": "Stroudsburg"
  },
  {
    "zip": "18370",
    "city": "Swiftwater"
  },
  {
    "zip": "18371",
    "city": "Tamiment"
  },
  {
    "zip": "18403",
    "city": "Archbald"
  },
  {
    "zip": "18405",
    "city": "Beach Lake"
  },
  {
    "zip": "18407",
    "city": "Carbondale"
  },
  {
    "zip": "18411",
    "city": "Clarks Summit"
  },
  {
    "zip": "18415",
    "city": "Damascus"
  },
  {
    "zip": "18417",
    "city": "Equinunk"
  },
  {
    "zip": "18419",
    "city": "Factoryville"
  },
  {
    "zip": "18421",
    "city": "Forest City"
  },
  {
    "zip": "18425",
    "city": "Greeley"
  },
  {
    "zip": "18426",
    "city": "Greentown"
  },
  {
    "zip": "18428",
    "city": "Hawley"
  },
  {
    "zip": "18430",
    "city": "Herrick Center"
  },
  {
    "zip": "18431",
    "city": "Honesdale"
  },
  {
    "zip": "18433",
    "city": "Jermyn"
  },
  {
    "zip": "18434",
    "city": "Jessup"
  },
  {
    "zip": "18435",
    "city": "Lackawaxen"
  },
  {
    "zip": "18436",
    "city": "Lake Ariel"
  },
  {
    "zip": "18437",
    "city": "Lake Como"
  },
  {
    "zip": "18441",
    "city": "Lenoxville"
  },
  {
    "zip": "18443",
    "city": "Milanville"
  },
  {
    "zip": "18444",
    "city": "Moscow"
  },
  {
    "zip": "18446",
    "city": "Nicholson"
  },
  {
    "zip": "18447",
    "city": "Olyphant"
  },
  {
    "zip": "18451",
    "city": "Paupack"
  },
  {
    "zip": "18452",
    "city": "Peckville"
  },
  {
    "zip": "18453",
    "city": "Pleasant Mount"
  },
  {
    "zip": "18455",
    "city": "Preston Park"
  },
  {
    "zip": "18456",
    "city": "Prompton"
  },
  {
    "zip": "18458",
    "city": "Shohola"
  },
  {
    "zip": "18460",
    "city": "South Sterling"
  },
  {
    "zip": "18461",
    "city": "Starlight"
  },
  {
    "zip": "18462",
    "city": "Starrucca"
  },
  {
    "zip": "18464",
    "city": "Tafton"
  },
  {
    "zip": "18466",
    "city": "Tobyhanna"
  },
  {
    "zip": "18469",
    "city": "Tyler Hill"
  },
  {
    "zip": "18470",
    "city": "Union Dale"
  },
  {
    "zip": "18472",
    "city": "Waymart"
  },
  {
    "zip": "18503",
    "city": "Scranton"
  },
  {
    "zip": "18507",
    "city": "Moosic"
  },
  {
    "zip": "18517",
    "city": "Taylor"
  },
  {
    "zip": "18610",
    "city": "Blakeslee"
  },
  {
    "zip": "18612",
    "city": "Dallas"
  },
  {
    "zip": "18614",
    "city": "Dushore"
  },
  {
    "zip": "18615",
    "city": "Falls"
  },
  {
    "zip": "18616",
    "city": "Forksville"
  },
  {
    "zip": "18617",
    "city": "Glen Lyon"
  },
  {
    "zip": "18618",
    "city": "Harveys Lake"
  },
  {
    "zip": "18619",
    "city": "Hillsgrove"
  },
  {
    "zip": "18621",
    "city": "Hunlock Creek"
  },
  {
    "zip": "18622",
    "city": "Huntington Mills"
  },
  {
    "zip": "18623",
    "city": "Laceyville"
  },
  {
    "zip": "18628",
    "city": "Lopez"
  },
  {
    "zip": "18629",
    "city": "Mehoopany"
  },
  {
    "zip": "18630",
    "city": "Meshoppen"
  },
  {
    "zip": "18632",
    "city": "Mildred"
  },
  {
    "zip": "18634",
    "city": "Nanticoke"
  },
  {
    "zip": "18635",
    "city": "Nescopeck"
  },
  {
    "zip": "18636",
    "city": "Noxen"
  },
  {
    "zip": "18640",
    "city": "Pittston"
  },
  {
    "zip": "18642",
    "city": "Duryea"
  },
  {
    "zip": "18655",
    "city": "Shickshinny"
  },
  {
    "zip": "18656",
    "city": "Sweet Valley"
  },
  {
    "zip": "18657",
    "city": "Tunkhannock"
  },
  {
    "zip": "18660",
    "city": "Wapwallopen"
  },
  {
    "zip": "18661",
    "city": "White Haven"
  },
  {
    "zip": "18701",
    "city": "Wilkes Barre"
  },
  {
    "zip": "18707",
    "city": "Mountain Top"
  },
  {
    "zip": "18708",
    "city": "Shavertown"
  },
  {
    "zip": "18709",
    "city": "Luzerne"
  },
  {
    "zip": "18812",
    "city": "Brackney"
  },
  {
    "zip": "18817",
    "city": "East Smithfield"
  },
  {
    "zip": "18818",
    "city": "Friendsville"
  },
  {
    "zip": "18821",
    "city": "Great Bend"
  },
  {
    "zip": "18822",
    "city": "Hallstead"
  },
  {
    "zip": "18823",
    "city": "Harford"
  },
  {
    "zip": "18824",
    "city": "Hop Bottom"
  },
  {
    "zip": "18826",
    "city": "Kingsley"
  },
  {
    "zip": "18828",
    "city": "Lawton"
  },
  {
    "zip": "18829",
    "city": "Le Raysville"
  },
  {
    "zip": "18830",
    "city": "Little Meadows"
  },
  {
    "zip": "18832",
    "city": "Monroeton"
  },
  {
    "zip": "18833",
    "city": "New Albany"
  },
  {
    "zip": "18840",
    "city": "Sayre"
  },
  {
    "zip": "18842",
    "city": "South Gibson"
  },
  {
    "zip": "18845",
    "city": "Stevensville"
  },
  {
    "zip": "18846",
    "city": "Sugar Run"
  },
  {
    "zip": "18847",
    "city": "Susquehanna"
  },
  {
    "zip": "18848",
    "city": "Towanda"
  },
  {
    "zip": "18850",
    "city": "Ulster"
  },
  {
    "zip": "18851",
    "city": "Warren Center"
  },
  {
    "zip": "18853",
    "city": "Wyalusing"
  },
  {
    "zip": "18854",
    "city": "Wysox"
  },
  {
    "zip": "18901",
    "city": "Doylestown"
  },
  {
    "zip": "18913",
    "city": "Carversville"
  },
  {
    "zip": "18914",
    "city": "Chalfont"
  },
  {
    "zip": "18915",
    "city": "Colmar"
  },
  {
    "zip": "18920",
    "city": "Erwinna"
  },
  {
    "zip": "18923",
    "city": "Fountainville"
  },
  {
    "zip": "18925",
    "city": "Furlong"
  },
  {
    "zip": "18927",
    "city": "Hilltown"
  },
  {
    "zip": "18929",
    "city": "Jamison"
  },
  {
    "zip": "18930",
    "city": "Kintnersville"
  },
  {
    "zip": "18932",
    "city": "Line Lexington"
  },
  {
    "zip": "18933",
    "city": "Lumberville"
  },
  {
    "zip": "18934",
    "city": "Mechanicsville"
  },
  {
    "zip": "18936",
    "city": "Montgomeryville"
  },
  {
    "zip": "18938",
    "city": "New Hope"
  },
  {
    "zip": "18942",
    "city": "Ottsville"
  },
  {
    "zip": "18944",
    "city": "Perkasie"
  },
  {
    "zip": "18947",
    "city": "Pipersville"
  },
  {
    "zip": "18951",
    "city": "Quakertown"
  },
  {
    "zip": "18954",
    "city": "Richboro"
  },
  {
    "zip": "18955",
    "city": "Richlandtown"
  },
  {
    "zip": "18960",
    "city": "Sellersville"
  },
  {
    "zip": "18964",
    "city": "Souderton"
  },
  {
    "zip": "18969",
    "city": "Telford"
  },
  {
    "zip": "18972",
    "city": "Upper Black Eddy"
  },
  {
    "zip": "18974",
    "city": "Warminster"
  },
  {
    "zip": "18976",
    "city": "Warrington"
  },
  {
    "zip": "18977",
    "city": "Washington Crossing"
  },
  {
    "zip": "19002",
    "city": "Ambler"
  },
  {
    "zip": "19003",
    "city": "Ardmore"
  },
  {
    "zip": "19004",
    "city": "Bala Cynwyd"
  },
  {
    "zip": "19006",
    "city": "Huntingdon Valley"
  },
  {
    "zip": "19008",
    "city": "Broomall"
  },
  {
    "zip": "19010",
    "city": "Bryn Mawr"
  },
  {
    "zip": "19012",
    "city": "Cheltenham"
  },
  {
    "zip": "19014",
    "city": "Aston"
  },
  {
    "zip": "19018",
    "city": "Clifton Heights"
  },
  {
    "zip": "19020",
    "city": "Bensalem"
  },
  {
    "zip": "19021",
    "city": "Croydon"
  },
  {
    "zip": "19022",
    "city": "Crum Lynne"
  },
  {
    "zip": "19023",
    "city": "Darby"
  },
  {
    "zip": "19025",
    "city": "Dresher"
  },
  {
    "zip": "19026",
    "city": "Drexel Hill"
  },
  {
    "zip": "19027",
    "city": "Elkins Park"
  },
  {
    "zip": "19029",
    "city": "Essington"
  },
  {
    "zip": "19030",
    "city": "Fairless Hills"
  },
  {
    "zip": "19031",
    "city": "Flourtown"
  },
  {
    "zip": "19032",
    "city": "Folcroft"
  },
  {
    "zip": "19033",
    "city": "Folsom"
  },
  {
    "zip": "19034",
    "city": "Fort Washington"
  },
  {
    "zip": "19035",
    "city": "Gladwyne"
  },
  {
    "zip": "19036",
    "city": "Glenolden"
  },
  {
    "zip": "19038",
    "city": "Glenside"
  },
  {
    "zip": "19040",
    "city": "Hatboro"
  },
  {
    "zip": "19041",
    "city": "Haverford"
  },
  {
    "zip": "19044",
    "city": "Horsham"
  },
  {
    "zip": "19046",
    "city": "Jenkintown"
  },
  {
    "zip": "19047",
    "city": "Langhorne"
  },
  {
    "zip": "19050",
    "city": "Lansdowne"
  },
  {
    "zip": "19053",
    "city": "Feasterville Trevose"
  },
  {
    "zip": "19060",
    "city": "Garnet Valley"
  },
  {
    "zip": "19061",
    "city": "Marcus Hook"
  },
  {
    "zip": "19063",
    "city": "Media"
  },
  {
    "zip": "19066",
    "city": "Merion Station"
  },
  {
    "zip": "19070",
    "city": "Morton"
  },
  {
    "zip": "19072",
    "city": "Narberth"
  },
  {
    "zip": "19073",
    "city": "Newtown Square"
  },
  {
    "zip": "19075",
    "city": "Oreland"
  },
  {
    "zip": "19076",
    "city": "Prospect Park"
  },
  {
    "zip": "19078",
    "city": "Ridley Park"
  },
  {
    "zip": "19079",
    "city": "Sharon Hill"
  },
  {
    "zip": "19081",
    "city": "Swarthmore"
  },
  {
    "zip": "19082",
    "city": "Upper Darby"
  },
  {
    "zip": "19083",
    "city": "Havertown"
  },
  {
    "zip": "19085",
    "city": "Villanova"
  },
  {
    "zip": "19090",
    "city": "Willow Grove"
  },
  {
    "zip": "19094",
    "city": "Woodlyn"
  },
  {
    "zip": "19095",
    "city": "Wyncote"
  },
  {
    "zip": "19096",
    "city": "Wynnewood"
  },
  {
    "zip": "19301",
    "city": "Paoli"
  },
  {
    "zip": "19310",
    "city": "Atglen"
  },
  {
    "zip": "19311",
    "city": "Avondale"
  },
  {
    "zip": "19312",
    "city": "Berwyn"
  },
  {
    "zip": "19317",
    "city": "Chadds Ford"
  },
  {
    "zip": "19319",
    "city": "Cheyney"
  },
  {
    "zip": "19320",
    "city": "Coatesville"
  },
  {
    "zip": "19330",
    "city": "Cochranville"
  },
  {
    "zip": "19333",
    "city": "Devon"
  },
  {
    "zip": "19335",
    "city": "Downingtown"
  },
  {
    "zip": "19339",
    "city": "Concordville"
  },
  {
    "zip": "19341",
    "city": "Exton"
  },
  {
    "zip": "19342",
    "city": "Glen Mills"
  },
  {
    "zip": "19343",
    "city": "Glenmoore"
  },
  {
    "zip": "19344",
    "city": "Honey Brook"
  },
  {
    "zip": "19348",
    "city": "Kennett Square"
  },
  {
    "zip": "19350",
    "city": "Landenberg"
  },
  {
    "zip": "19352",
    "city": "Lincoln University"
  },
  {
    "zip": "19355",
    "city": "Malvern"
  },
  {
    "zip": "19365",
    "city": "Parkesburg"
  },
  {
    "zip": "19372",
    "city": "Thorndale"
  },
  {
    "zip": "19374",
    "city": "Toughkenamon"
  },
  {
    "zip": "19380",
    "city": "West Chester"
  },
  {
    "zip": "19390",
    "city": "West Grove"
  },
  {
    "zip": "19401",
    "city": "Norristown"
  },
  {
    "zip": "19406",
    "city": "King Of Prussia"
  },
  {
    "zip": "19422",
    "city": "Blue Bell"
  },
  {
    "zip": "19425",
    "city": "Chester Springs"
  },
  {
    "zip": "19426",
    "city": "Collegeville"
  },
  {
    "zip": "19428",
    "city": "Conshohocken"
  },
  {
    "zip": "19435",
    "city": "Frederick"
  },
  {
    "zip": "19436",
    "city": "Gwynedd"
  },
  {
    "zip": "19438",
    "city": "Harleysville"
  },
  {
    "zip": "19444",
    "city": "Lafayette Hill"
  },
  {
    "zip": "19446",
    "city": "Lansdale"
  },
  {
    "zip": "19453",
    "city": "Mont Clare"
  },
  {
    "zip": "19454",
    "city": "North Wales"
  },
  {
    "zip": "19460",
    "city": "Phoenixville"
  },
  {
    "zip": "19462",
    "city": "Plymouth Meeting"
  },
  {
    "zip": "19464",
    "city": "Pottstown"
  },
  {
    "zip": "19468",
    "city": "Royersford"
  },
  {
    "zip": "19473",
    "city": "Schwenksville"
  },
  {
    "zip": "19475",
    "city": "Spring City"
  },
  {
    "zip": "19477",
    "city": "Spring House"
  },
  {
    "zip": "19483",
    "city": "Valley Forge"
  },
  {
    "zip": "19492",
    "city": "Zieglerville"
  },
  {
    "zip": "19503",
    "city": "Bally"
  },
  {
    "zip": "19504",
    "city": "Barto"
  },
  {
    "zip": "19505",
    "city": "Bechtelsville"
  },
  {
    "zip": "19506",
    "city": "Bernville"
  },
  {
    "zip": "19508",
    "city": "Birdsboro"
  },
  {
    "zip": "19510",
    "city": "Blandon"
  },
  {
    "zip": "19512",
    "city": "Boyertown"
  },
  {
    "zip": "19518",
    "city": "Douglassville"
  },
  {
    "zip": "19520",
    "city": "Elverson"
  },
  {
    "zip": "19522",
    "city": "Fleetwood"
  },
  {
    "zip": "19529",
    "city": "Kempton"
  },
  {
    "zip": "19530",
    "city": "Kutztown"
  },
  {
    "zip": "19533",
    "city": "Leesport"
  },
  {
    "zip": "19534",
    "city": "Lenhartsville"
  },
  {
    "zip": "19539",
    "city": "Mertztown"
  },
  {
    "zip": "19540",
    "city": "Mohnton"
  },
  {
    "zip": "19541",
    "city": "Mohrsville"
  },
  {
    "zip": "19543",
    "city": "Morgantown"
  },
  {
    "zip": "19547",
    "city": "Oley"
  },
  {
    "zip": "19551",
    "city": "Robesonia"
  },
  {
    "zip": "19555",
    "city": "Shoemakersville"
  },
  {
    "zip": "19562",
    "city": "Topton"
  },
  {
    "zip": "19565",
    "city": "Wernersville"
  },
  {
    "zip": "19567",
    "city": "Womelsdorf"
  },
  {
    "zip": "19701",
    "city": "Bear"
  },
  {
    "zip": "19703",
    "city": "Claymont"
  },
  {
    "zip": "19707",
    "city": "Hockessin"
  },
  {
    "zip": "19735",
    "city": "Winterthur"
  },
  {
    "zip": "19736",
    "city": "Yorklyn"
  },
  {
    "zip": "19902",
    "city": "Dover Afb"
  },
  {
    "zip": "19930",
    "city": "Bethany Beach"
  },
  {
    "zip": "19934",
    "city": "Camden Wyoming"
  },
  {
    "zip": "19939",
    "city": "Dagsboro"
  },
  {
    "zip": "19941",
    "city": "Ellendale"
  },
  {
    "zip": "19944",
    "city": "Fenwick Island"
  },
  {
    "zip": "19945",
    "city": "Frankford"
  },
  {
    "zip": "19946",
    "city": "Frederica"
  },
  {
    "zip": "19951",
    "city": "Harbeson"
  },
  {
    "zip": "19953",
    "city": "Hartly"
  },
  {
    "zip": "19958",
    "city": "Lewes"
  },
  {
    "zip": "19964",
    "city": "Marydel"
  },
  {
    "zip": "19966",
    "city": "Millsboro"
  },
  {
    "zip": "19971",
    "city": "Rehoboth Beach"
  },
  {
    "zip": "19975",
    "city": "Selbyville"
  },
  {
    "zip": "19979",
    "city": "Viola"
  },
  {
    "zip": "20105",
    "city": "Aldie"
  },
  {
    "zip": "20106",
    "city": "Amissville"
  },
  {
    "zip": "20107",
    "city": "Arcola"
  },
  {
    "zip": "20109",
    "city": "Manassas"
  },
  {
    "zip": "20115",
    "city": "Marshall"
  },
  {
    "zip": "20119",
    "city": "Catlett"
  },
  {
    "zip": "20120",
    "city": "Centreville"
  },
  {
    "zip": "20129",
    "city": "Paeonian Springs"
  },
  {
    "zip": "20130",
    "city": "Paris"
  },
  {
    "zip": "20132",
    "city": "Purcellville"
  },
  {
    "zip": "20135",
    "city": "Bluemont"
  },
  {
    "zip": "20136",
    "city": "Bristow"
  },
  {
    "zip": "20137",
    "city": "Broad Run"
  },
  {
    "zip": "20141",
    "city": "Round Hill"
  },
  {
    "zip": "20143",
    "city": "Catharpin"
  },
  {
    "zip": "20144",
    "city": "Delaplane"
  },
  {
    "zip": "20147",
    "city": "Ashburn"
  },
  {
    "zip": "20151",
    "city": "Chantilly"
  },
  {
    "zip": "20169",
    "city": "Haymarket"
  },
  {
    "zip": "20180",
    "city": "Lovettsville"
  },
  {
    "zip": "20181",
    "city": "Nokesville"
  },
  {
    "zip": "20184",
    "city": "Upperville"
  },
  {
    "zip": "20186",
    "city": "Warrenton"
  },
  {
    "zip": "20189",
    "city": "Dulles"
  },
  {
    "zip": "20190",
    "city": "Reston"
  },
  {
    "zip": "20198",
    "city": "The Plains"
  },
  {
    "zip": "20373",
    "city": "Naval Anacost Annex"
  },
  {
    "zip": "20374",
    "city": "Washington Navy Yard"
  },
  {
    "zip": "20588",
    "city": "Dhs"
  },
  {
    "zip": "20601",
    "city": "Waldorf"
  },
  {
    "zip": "20606",
    "city": "Abell"
  },
  {
    "zip": "20607",
    "city": "Accokeek"
  },
  {
    "zip": "20608",
    "city": "Aquasco"
  },
  {
    "zip": "20609",
    "city": "Avenue"
  },
  {
    "zip": "20611",
    "city": "Bel Alton"
  },
  {
    "zip": "20613",
    "city": "Brandywine"
  },
  {
    "zip": "20615",
    "city": "Broomes Island"
  },
  {
    "zip": "20616",
    "city": "Bryans Road"
  },
  {
    "zip": "20617",
    "city": "Bryantown"
  },
  {
    "zip": "20618",
    "city": "Bushwood"
  },
  {
    "zip": "20620",
    "city": "Callaway"
  },
  {
    "zip": "20621",
    "city": "Chaptico"
  },
  {
    "zip": "20622",
    "city": "Charlotte Hall"
  },
  {
    "zip": "20624",
    "city": "Clements"
  },
  {
    "zip": "20626",
    "city": "Coltons Point"
  },
  {
    "zip": "20628",
    "city": "Dameron"
  },
  {
    "zip": "20630",
    "city": "Drayden"
  },
  {
    "zip": "20632",
    "city": "Faulkner"
  },
  {
    "zip": "20634",
    "city": "Great Mills"
  },
  {
    "zip": "20636",
    "city": "Hollywood"
  },
  {
    "zip": "20639",
    "city": "Huntingtown"
  },
  {
    "zip": "20645",
    "city": "Issue"
  },
  {
    "zip": "20646",
    "city": "La Plata"
  },
  {
    "zip": "20650",
    "city": "Leonardtown"
  },
  {
    "zip": "20653",
    "city": "Lexington Park"
  },
  {
    "zip": "20656",
    "city": "Loveville"
  },
  {
    "zip": "20657",
    "city": "Lusby"
  },
  {
    "zip": "20658",
    "city": "Marbury"
  },
  {
    "zip": "20662",
    "city": "Nanjemoy"
  },
  {
    "zip": "20667",
    "city": "Park Hall"
  },
  {
    "zip": "20670",
    "city": "Patuxent River"
  },
  {
    "zip": "20674",
    "city": "Piney Point"
  },
  {
    "zip": "20675",
    "city": "Pomfret"
  },
  {
    "zip": "20677",
    "city": "Port Tobacco"
  },
  {
    "zip": "20678",
    "city": "Prince Frederick"
  },
  {
    "zip": "20684",
    "city": "Saint Inigoes"
  },
  {
    "zip": "20685",
    "city": "Saint Leonard"
  },
  {
    "zip": "20688",
    "city": "Solomons"
  },
  {
    "zip": "20690",
    "city": "Tall Timbers"
  },
  {
    "zip": "20692",
    "city": "Valley Lee"
  },
  {
    "zip": "20693",
    "city": "Welcome"
  },
  {
    "zip": "20697",
    "city": "Southern Md Facility"
  },
  {
    "zip": "20701",
    "city": "Annapolis Junction"
  },
  {
    "zip": "20705",
    "city": "Beltsville"
  },
  {
    "zip": "20706",
    "city": "Lanham"
  },
  {
    "zip": "20710",
    "city": "Bladensburg"
  },
  {
    "zip": "20711",
    "city": "Lothian"
  },
  {
    "zip": "20712",
    "city": "Mount Rainier"
  },
  {
    "zip": "20714",
    "city": "North Beach"
  },
  {
    "zip": "20715",
    "city": "Bowie"
  },
  {
    "zip": "20732",
    "city": "Chesapeake Beach"
  },
  {
    "zip": "20733",
    "city": "Churchton"
  },
  {
    "zip": "20736",
    "city": "Owings"
  },
  {
    "zip": "20740",
    "city": "College Park"
  },
  {
    "zip": "20743",
    "city": "Capitol Heights"
  },
  {
    "zip": "20745",
    "city": "Oxon Hill"
  },
  {
    "zip": "20746",
    "city": "Suitland"
  },
  {
    "zip": "20747",
    "city": "District Heights"
  },
  {
    "zip": "20748",
    "city": "Temple Hills"
  },
  {
    "zip": "20751",
    "city": "Deale"
  },
  {
    "zip": "20755",
    "city": "Fort George G Meade"
  },
  {
    "zip": "20762",
    "city": "Andrews Air Force Base"
  },
  {
    "zip": "20763",
    "city": "Savage"
  },
  {
    "zip": "20764",
    "city": "Shady Side"
  },
  {
    "zip": "20769",
    "city": "Glenn Dale"
  },
  {
    "zip": "20770",
    "city": "Greenbelt"
  },
  {
    "zip": "20772",
    "city": "Upper Marlboro"
  },
  {
    "zip": "20776",
    "city": "Harwood"
  },
  {
    "zip": "20778",
    "city": "West River"
  },
  {
    "zip": "20779",
    "city": "Tracys Landing"
  },
  {
    "zip": "20781",
    "city": "Hyattsville"
  },
  {
    "zip": "20812",
    "city": "Glen Echo"
  },
  {
    "zip": "20814",
    "city": "Bethesda"
  },
  {
    "zip": "20815",
    "city": "Chevy Chase"
  },
  {
    "zip": "20818",
    "city": "Cabin John"
  },
  {
    "zip": "20832",
    "city": "Olney"
  },
  {
    "zip": "20833",
    "city": "Brookeville"
  },
  {
    "zip": "20837",
    "city": "Poolesville"
  },
  {
    "zip": "20839",
    "city": "Beallsville"
  },
  {
    "zip": "20841",
    "city": "Boyds"
  },
  {
    "zip": "20842",
    "city": "Dickerson"
  },
  {
    "zip": "20850",
    "city": "Rockville"
  },
  {
    "zip": "20854",
    "city": "Potomac"
  },
  {
    "zip": "20855",
    "city": "Derwood"
  },
  {
    "zip": "20860",
    "city": "Sandy Spring"
  },
  {
    "zip": "20861",
    "city": "Ashton"
  },
  {
    "zip": "20862",
    "city": "Brinklow"
  },
  {
    "zip": "20866",
    "city": "Burtonsville"
  },
  {
    "zip": "20868",
    "city": "Spencerville"
  },
  {
    "zip": "20877",
    "city": "Gaithersburg"
  },
  {
    "zip": "20886",
    "city": "Montgomery Village"
  },
  {
    "zip": "20895",
    "city": "Kensington"
  },
  {
    "zip": "20897",
    "city": "Suburb Maryland Fac"
  },
  {
    "zip": "20901",
    "city": "Silver Spring"
  },
  {
    "zip": "20912",
    "city": "Takoma Park"
  },
  {
    "zip": "21001",
    "city": "Aberdeen"
  },
  {
    "zip": "21005",
    "city": "Aberdeen Proving Ground"
  },
  {
    "zip": "21009",
    "city": "Abingdon"
  },
  {
    "zip": "21010",
    "city": "Gunpowder"
  },
  {
    "zip": "21012",
    "city": "Arnold"
  },
  {
    "zip": "21014",
    "city": "Bel Air"
  },
  {
    "zip": "21017",
    "city": "Belcamp"
  },
  {
    "zip": "21030",
    "city": "Cockeysville"
  },
  {
    "zip": "21031",
    "city": "Hunt Valley"
  },
  {
    "zip": "21032",
    "city": "Crownsville"
  },
  {
    "zip": "21035",
    "city": "Davidsonville"
  },
  {
    "zip": "21040",
    "city": "Edgewood"
  },
  {
    "zip": "21042",
    "city": "Ellicott City"
  },
  {
    "zip": "21047",
    "city": "Fallston"
  },
  {
    "zip": "21048",
    "city": "Finksburg"
  },
  {
    "zip": "21050",
    "city": "Forest Hill"
  },
  {
    "zip": "21051",
    "city": "Fork"
  },
  {
    "zip": "21054",
    "city": "Gambrills"
  },
  {
    "zip": "21057",
    "city": "Glen Arm"
  },
  {
    "zip": "21060",
    "city": "Glen Burnie"
  },
  {
    "zip": "21075",
    "city": "Elkridge"
  },
  {
    "zip": "21077",
    "city": "Harmans"
  },
  {
    "zip": "21078",
    "city": "Havre De Grace"
  },
  {
    "zip": "21082",
    "city": "Hydes"
  },
  {
    "zip": "21084",
    "city": "Jarrettsville"
  },
  {
    "zip": "21085",
    "city": "Joppa"
  },
  {
    "zip": "21087",
    "city": "Kingsville"
  },
  {
    "zip": "21090",
    "city": "Linthicum Heights"
  },
  {
    "zip": "21093",
    "city": "Lutherville Timonium"
  },
  {
    "zip": "21104",
    "city": "Marriottsville"
  },
  {
    "zip": "21111",
    "city": "Monkton"
  },
  {
    "zip": "21113",
    "city": "Odenton"
  },
  {
    "zip": "21114",
    "city": "Crofton"
  },
  {
    "zip": "21117",
    "city": "Owings Mills"
  },
  {
    "zip": "21120",
    "city": "Parkton"
  },
  {
    "zip": "21122",
    "city": "Pasadena"
  },
  {
    "zip": "21128",
    "city": "Perry Hall"
  },
  {
    "zip": "21132",
    "city": "Pylesville"
  },
  {
    "zip": "21133",
    "city": "Randallstown"
  },
  {
    "zip": "21136",
    "city": "Reisterstown"
  },
  {
    "zip": "21140",
    "city": "Riva"
  },
  {
    "zip": "21144",
    "city": "Severn"
  },
  {
    "zip": "21146",
    "city": "Severna Park"
  },
  {
    "zip": "21152",
    "city": "Sparks Glencoe"
  },
  {
    "zip": "21154",
    "city": "Street"
  },
  {
    "zip": "21155",
    "city": "Upperco"
  },
  {
    "zip": "21156",
    "city": "Upper Falls"
  },
  {
    "zip": "21160",
    "city": "Whiteford"
  },
  {
    "zip": "21161",
    "city": "White Hall"
  },
  {
    "zip": "21162",
    "city": "White Marsh"
  },
  {
    "zip": "21201",
    "city": "Baltimore"
  },
  {
    "zip": "21204",
    "city": "Towson"
  },
  {
    "zip": "21207",
    "city": "Gwynn Oak"
  },
  {
    "zip": "21208",
    "city": "Pikesville"
  },
  {
    "zip": "21219",
    "city": "Sparrows Point"
  },
  {
    "zip": "21220",
    "city": "Middle River"
  },
  {
    "zip": "21222",
    "city": "Dundalk"
  },
  {
    "zip": "21226",
    "city": "Curtis Bay"
  },
  {
    "zip": "21227",
    "city": "Halethorpe"
  },
  {
    "zip": "21228",
    "city": "Catonsville"
  },
  {
    "zip": "21234",
    "city": "Parkville"
  },
  {
    "zip": "21244",
    "city": "Windsor Mill"
  },
  {
    "zip": "21401",
    "city": "Annapolis"
  },
  {
    "zip": "21520",
    "city": "Accident"
  },
  {
    "zip": "21522",
    "city": "Bittinger"
  },
  {
    "zip": "21530",
    "city": "Flintstone"
  },
  {
    "zip": "21536",
    "city": "Grantsville"
  },
  {
    "zip": "21538",
    "city": "Kitzmiller"
  },
  {
    "zip": "21539",
    "city": "Lonaconing"
  },
  {
    "zip": "21540",
    "city": "Luke"
  },
  {
    "zip": "21541",
    "city": "Mc Henry"
  },
  {
    "zip": "21545",
    "city": "Mount Savage"
  },
  {
    "zip": "21555",
    "city": "Oldtown"
  },
  {
    "zip": "21557",
    "city": "Rawlings"
  },
  {
    "zip": "21562",
    "city": "Westernport"
  },
  {
    "zip": "21607",
    "city": "Barclay"
  },
  {
    "zip": "21610",
    "city": "Betterton"
  },
  {
    "zip": "21612",
    "city": "Bozman"
  },
  {
    "zip": "21622",
    "city": "Church Creek"
  },
  {
    "zip": "21623",
    "city": "Church Hill"
  },
  {
    "zip": "21625",
    "city": "Cordova"
  },
  {
    "zip": "21626",
    "city": "Crapo"
  },
  {
    "zip": "21627",
    "city": "Crocheron"
  },
  {
    "zip": "21629",
    "city": "Denton"
  },
  {
    "zip": "21631",
    "city": "East New Market"
  },
  {
    "zip": "21632",
    "city": "Federalsburg"
  },
  {
    "zip": "21634",
    "city": "Fishing Creek"
  },
  {
    "zip": "21635",
    "city": "Galena"
  },
  {
    "zip": "21636",
    "city": "Goldsboro"
  },
  {
    "zip": "21638",
    "city": "Grasonville"
  },
  {
    "zip": "21643",
    "city": "Hurlock"
  },
  {
    "zip": "21644",
    "city": "Ingleside"
  },
  {
    "zip": "21645",
    "city": "Kennedyville"
  },
  {
    "zip": "21647",
    "city": "Mcdaniel"
  },
  {
    "zip": "21650",
    "city": "Massey"
  },
  {
    "zip": "21657",
    "city": "Queen Anne"
  },
  {
    "zip": "21658",
    "city": "Queenstown"
  },
  {
    "zip": "21659",
    "city": "Rhodesdale"
  },
  {
    "zip": "21660",
    "city": "Ridgely"
  },
  {
    "zip": "21661",
    "city": "Rock Hall"
  },
  {
    "zip": "21662",
    "city": "Royal Oak"
  },
  {
    "zip": "21663",
    "city": "Saint Michaels"
  },
  {
    "zip": "21665",
    "city": "Sherwood"
  },
  {
    "zip": "21667",
    "city": "Still Pond"
  },
  {
    "zip": "21668",
    "city": "Sudlersville"
  },
  {
    "zip": "21671",
    "city": "Tilghman"
  },
  {
    "zip": "21672",
    "city": "Toddville"
  },
  {
    "zip": "21673",
    "city": "Trappe"
  },
  {
    "zip": "21675",
    "city": "Wingate"
  },
  {
    "zip": "21676",
    "city": "Wittman"
  },
  {
    "zip": "21677",
    "city": "Woolford"
  },
  {
    "zip": "21678",
    "city": "Worton"
  },
  {
    "zip": "21679",
    "city": "Wye Mills"
  },
  {
    "zip": "21710",
    "city": "Adamstown"
  },
  {
    "zip": "21711",
    "city": "Big Pool"
  },
  {
    "zip": "21713",
    "city": "Boonsboro"
  },
  {
    "zip": "21718",
    "city": "Burkittsville"
  },
  {
    "zip": "21719",
    "city": "Cascade"
  },
  {
    "zip": "21722",
    "city": "Clear Spring"
  },
  {
    "zip": "21723",
    "city": "Cooksville"
  },
  {
    "zip": "21727",
    "city": "Emmitsburg"
  },
  {
    "zip": "21733",
    "city": "Fairplay"
  },
  {
    "zip": "21737",
    "city": "Glenelg"
  },
  {
    "zip": "21740",
    "city": "Hagerstown"
  },
  {
    "zip": "21754",
    "city": "Ijamsville"
  },
  {
    "zip": "21756",
    "city": "Keedysville"
  },
  {
    "zip": "21757",
    "city": "Keymar"
  },
  {
    "zip": "21766",
    "city": "Little Orleans"
  },
  {
    "zip": "21767",
    "city": "Maugansville"
  },
  {
    "zip": "21770",
    "city": "Monrovia"
  },
  {
    "zip": "21771",
    "city": "Mount Airy"
  },
  {
    "zip": "21773",
    "city": "Myersville"
  },
  {
    "zip": "21774",
    "city": "New Market"
  },
  {
    "zip": "21777",
    "city": "Point Of Rocks"
  },
  {
    "zip": "21778",
    "city": "Rocky Ridge"
  },
  {
    "zip": "21779",
    "city": "Rohrersville"
  },
  {
    "zip": "21780",
    "city": "Sabillasville"
  },
  {
    "zip": "21782",
    "city": "Sharpsburg"
  },
  {
    "zip": "21783",
    "city": "Smithsburg"
  },
  {
    "zip": "21787",
    "city": "Taneytown"
  },
  {
    "zip": "21788",
    "city": "Thurmont"
  },
  {
    "zip": "21790",
    "city": "Tuscarora"
  },
  {
    "zip": "21791",
    "city": "Union Bridge"
  },
  {
    "zip": "21793",
    "city": "Walkersville"
  },
  {
    "zip": "21794",
    "city": "West Friendship"
  },
  {
    "zip": "21798",
    "city": "Woodsboro"
  },
  {
    "zip": "21813",
    "city": "Bishopville"
  },
  {
    "zip": "21814",
    "city": "Bivalve"
  },
  {
    "zip": "21817",
    "city": "Crisfield"
  },
  {
    "zip": "21821",
    "city": "Deal Island"
  },
  {
    "zip": "21824",
    "city": "Ewell"
  },
  {
    "zip": "21826",
    "city": "Fruitland"
  },
  {
    "zip": "21829",
    "city": "Girdletree"
  },
  {
    "zip": "21835",
    "city": "Linkwood"
  },
  {
    "zip": "21837",
    "city": "Mardela Springs"
  },
  {
    "zip": "21838",
    "city": "Marion Station"
  },
  {
    "zip": "21849",
    "city": "Parsonsburg"
  },
  {
    "zip": "21850",
    "city": "Pittsville"
  },
  {
    "zip": "21851",
    "city": "Pocomoke City"
  },
  {
    "zip": "21853",
    "city": "Princess Anne"
  },
  {
    "zip": "21856",
    "city": "Quantico"
  },
  {
    "zip": "21862",
    "city": "Showell"
  },
  {
    "zip": "21863",
    "city": "Snow Hill"
  },
  {
    "zip": "21865",
    "city": "Tyaskin"
  },
  {
    "zip": "21872",
    "city": "Whaleyville"
  },
  {
    "zip": "21874",
    "city": "Willards"
  },
  {
    "zip": "21903",
    "city": "Perryville"
  },
  {
    "zip": "21904",
    "city": "Port Deposit"
  },
  {
    "zip": "21911",
    "city": "Rising Sun"
  },
  {
    "zip": "21915",
    "city": "Chesapeake City"
  },
  {
    "zip": "21917",
    "city": "Colora"
  },
  {
    "zip": "21918",
    "city": "Conowingo"
  },
  {
    "zip": "21919",
    "city": "Earleville"
  },
  {
    "zip": "21921",
    "city": "Elkton"
  },
  {
    "zip": "22025",
    "city": "Dumfries"
  },
  {
    "zip": "22027",
    "city": "Dunn Loring"
  },
  {
    "zip": "22039",
    "city": "Fairfax Station"
  },
  {
    "zip": "22041",
    "city": "Falls Church"
  },
  {
    "zip": "22060",
    "city": "Fort Belvoir"
  },
  {
    "zip": "22066",
    "city": "Great Falls"
  },
  {
    "zip": "22067",
    "city": "Greenway"
  },
  {
    "zip": "22079",
    "city": "Lorton"
  },
  {
    "zip": "22081",
    "city": "Merrifield"
  },
  {
    "zip": "22101",
    "city": "Mc Lean"
  },
  {
    "zip": "22124",
    "city": "Oakton"
  },
  {
    "zip": "22172",
    "city": "Triangle"
  },
  {
    "zip": "22211",
    "city": "Fort Myer"
  },
  {
    "zip": "22427",
    "city": "Bowling Green"
  },
  {
    "zip": "22432",
    "city": "Burgess"
  },
  {
    "zip": "22433",
    "city": "Burr Hill"
  },
  {
    "zip": "22435",
    "city": "Callao"
  },
  {
    "zip": "22436",
    "city": "Caret"
  },
  {
    "zip": "22437",
    "city": "Center Cross"
  },
  {
    "zip": "22443",
    "city": "Colonial Beach"
  },
  {
    "zip": "22448",
    "city": "Dahlgren"
  },
  {
    "zip": "22454",
    "city": "Dunnsville"
  },
  {
    "zip": "22460",
    "city": "Farnham"
  },
  {
    "zip": "22473",
    "city": "Heathsville"
  },
  {
    "zip": "22476",
    "city": "Hustle"
  },
  {
    "zip": "22482",
    "city": "Kilmarnock"
  },
  {
    "zip": "22485",
    "city": "King George"
  },
  {
    "zip": "22488",
    "city": "Kinsale"
  },
  {
    "zip": "22504",
    "city": "Laneview"
  },
  {
    "zip": "22508",
    "city": "Locust Grove"
  },
  {
    "zip": "22511",
    "city": "Lottsburg"
  },
  {
    "zip": "22520",
    "city": "Montross"
  },
  {
    "zip": "22534",
    "city": "Partlow"
  },
  {
    "zip": "22538",
    "city": "Rappahannock Academy"
  },
  {
    "zip": "22539",
    "city": "Reedville"
  },
  {
    "zip": "22542",
    "city": "Rhoadesville"
  },
  {
    "zip": "22546",
    "city": "Ruther Glen"
  },
  {
    "zip": "22551",
    "city": "Spotsylvania"
  },
  {
    "zip": "22560",
    "city": "Tappahannock"
  },
  {
    "zip": "22576",
    "city": "Weems"
  },
  {
    "zip": "22578",
    "city": "White Stone"
  },
  {
    "zip": "22580",
    "city": "Woodford"
  },
  {
    "zip": "22610",
    "city": "Bentonville"
  },
  {
    "zip": "22611",
    "city": "Berryville"
  },
  {
    "zip": "22620",
    "city": "Boyce"
  },
  {
    "zip": "22624",
    "city": "Clear Brook"
  },
  {
    "zip": "22625",
    "city": "Cross Junction"
  },
  {
    "zip": "22627",
    "city": "Flint Hill"
  },
  {
    "zip": "22630",
    "city": "Front Royal"
  },
  {
    "zip": "22637",
    "city": "Gore"
  },
  {
    "zip": "22639",
    "city": "Hume"
  },
  {
    "zip": "22640",
    "city": "Huntly"
  },
  {
    "zip": "22643",
    "city": "Markham"
  },
  {
    "zip": "22644",
    "city": "Maurertown"
  },
  {
    "zip": "22650",
    "city": "Rileyville"
  },
  {
    "zip": "22652",
    "city": "Fort Valley"
  },
  {
    "zip": "22654",
    "city": "Star Tannery"
  },
  {
    "zip": "22655",
    "city": "Stephens City"
  },
  {
    "zip": "22656",
    "city": "Stephenson"
  },
  {
    "zip": "22660",
    "city": "Toms Brook"
  },
  {
    "zip": "22663",
    "city": "White Post"
  },
  {
    "zip": "22701",
    "city": "Culpeper"
  },
  {
    "zip": "22709",
    "city": "Aroda"
  },
  {
    "zip": "22711",
    "city": "Banco"
  },
  {
    "zip": "22712",
    "city": "Bealeton"
  },
  {
    "zip": "22714",
    "city": "Brandy Station"
  },
  {
    "zip": "22715",
    "city": "Brightwood"
  },
  {
    "zip": "22718",
    "city": "Elkwood"
  },
  {
    "zip": "22719",
    "city": "Etlan"
  },
  {
    "zip": "22720",
    "city": "Goldvein"
  },
  {
    "zip": "22721",
    "city": "Graves Mill"
  },
  {
    "zip": "22722",
    "city": "Haywood"
  },
  {
    "zip": "22723",
    "city": "Hood"
  },
  {
    "zip": "22724",
    "city": "Jeffersonton"
  },
  {
    "zip": "22725",
    "city": "Leon"
  },
  {
    "zip": "22726",
    "city": "Lignum"
  },
  {
    "zip": "22729",
    "city": "Mitchells"
  },
  {
    "zip": "22730",
    "city": "Oakpark"
  },
  {
    "zip": "22731",
    "city": "Pratts"
  },
  {
    "zip": "22732",
    "city": "Radiant"
  },
  {
    "zip": "22733",
    "city": "Rapidan"
  },
  {
    "zip": "22734",
    "city": "Remington"
  },
  {
    "zip": "22735",
    "city": "Reva"
  },
  {
    "zip": "22736",
    "city": "Richardsville"
  },
  {
    "zip": "22737",
    "city": "Rixeyville"
  },
  {
    "zip": "22738",
    "city": "Rochelle"
  },
  {
    "zip": "22740",
    "city": "Sperryville"
  },
  {
    "zip": "22741",
    "city": "Stevensburg"
  },
  {
    "zip": "22742",
    "city": "Sumerduck"
  },
  {
    "zip": "22743",
    "city": "Syria"
  },
  {
    "zip": "22746",
    "city": "Viewtown"
  },
  {
    "zip": "22749",
    "city": "Woodville"
  },
  {
    "zip": "22801",
    "city": "Harrisonburg"
  },
  {
    "zip": "22810",
    "city": "Basye"
  },
  {
    "zip": "22811",
    "city": "Bergton"
  },
  {
    "zip": "22815",
    "city": "Broadway"
  },
  {
    "zip": "22820",
    "city": "Criders"
  },
  {
    "zip": "22830",
    "city": "Fulks Run"
  },
  {
    "zip": "22831",
    "city": "Hinton"
  },
  {
    "zip": "22832",
    "city": "Keezletown"
  },
  {
    "zip": "22834",
    "city": "Linville"
  },
  {
    "zip": "22835",
    "city": "Luray"
  },
  {
    "zip": "22840",
    "city": "Mc Gaheysville"
  },
  {
    "zip": "22841",
    "city": "Mount Crawford"
  },
  {
    "zip": "22842",
    "city": "Mount Jackson"
  },
  {
    "zip": "22843",
    "city": "Mount Solon"
  },
  {
    "zip": "22845",
    "city": "Orkney Springs"
  },
  {
    "zip": "22846",
    "city": "Penn Laird"
  },
  {
    "zip": "22847",
    "city": "Quicksburg"
  },
  {
    "zip": "22850",
    "city": "Singers Glen"
  },
  {
    "zip": "22853",
    "city": "Timberville"
  },
  {
    "zip": "22901",
    "city": "Charlottesville"
  },
  {
    "zip": "22922",
    "city": "Arrington"
  },
  {
    "zip": "22923",
    "city": "Barboursville"
  },
  {
    "zip": "22931",
    "city": "Covesville"
  },
  {
    "zip": "22932",
    "city": "Crozet"
  },
  {
    "zip": "22935",
    "city": "Dyke"
  },
  {
    "zip": "22936",
    "city": "Earlysville"
  },
  {
    "zip": "22937",
    "city": "Esmont"
  },
  {
    "zip": "22938",
    "city": "Faber"
  },
  {
    "zip": "22939",
    "city": "Fishersville"
  },
  {
    "zip": "22940",
    "city": "Free Union"
  },
  {
    "zip": "22942",
    "city": "Gordonsville"
  },
  {
    "zip": "22947",
    "city": "Keswick"
  },
  {
    "zip": "22948",
    "city": "Locust Dale"
  },
  {
    "zip": "22949",
    "city": "Lovingston"
  },
  {
    "zip": "22958",
    "city": "Nellysford"
  },
  {
    "zip": "22959",
    "city": "North Garden"
  },
  {
    "zip": "22964",
    "city": "Piney River"
  },
  {
    "zip": "22968",
    "city": "Ruckersville"
  },
  {
    "zip": "22969",
    "city": "Schuyler"
  },
  {
    "zip": "22971",
    "city": "Shipman"
  },
  {
    "zip": "22973",
    "city": "Stanardsville"
  },
  {
    "zip": "22976",
    "city": "Tyro"
  },
  {
    "zip": "23002",
    "city": "Amelia Court House"
  },
  {
    "zip": "23004",
    "city": "Arvonia"
  },
  {
    "zip": "23009",
    "city": "Aylett"
  },
  {
    "zip": "23011",
    "city": "Barhamsville"
  },
  {
    "zip": "23014",
    "city": "Beaumont"
  },
  {
    "zip": "23015",
    "city": "Beaverdam"
  },
  {
    "zip": "23021",
    "city": "Bohannon"
  },
  {
    "zip": "23022",
    "city": "Bremo Bluff"
  },
  {
    "zip": "23023",
    "city": "Bruington"
  },
  {
    "zip": "23024",
    "city": "Bumpass"
  },
  {
    "zip": "23025",
    "city": "Cardinal"
  },
  {
    "zip": "23027",
    "city": "Cartersville"
  },
  {
    "zip": "23030",
    "city": "Charles City"
  },
  {
    "zip": "23032",
    "city": "Church View"
  },
  {
    "zip": "23035",
    "city": "Cobbs Creek"
  },
  {
    "zip": "23039",
    "city": "Crozier"
  },
  {
    "zip": "23043",
    "city": "Deltaville"
  },
  {
    "zip": "23045",
    "city": "Diggs"
  },
  {
    "zip": "23047",
    "city": "Doswell"
  },
  {
    "zip": "23050",
    "city": "Dutton"
  },
  {
    "zip": "23055",
    "city": "Fork Union"
  },
  {
    "zip": "23059",
    "city": "Glen Allen"
  },
  {
    "zip": "23062",
    "city": "Gloucester Point"
  },
  {
    "zip": "23063",
    "city": "Goochland"
  },
  {
    "zip": "23065",
    "city": "Gum Spring"
  },
  {
    "zip": "23068",
    "city": "Hallieford"
  },
  {
    "zip": "23070",
    "city": "Hardyville"
  },
  {
    "zip": "23071",
    "city": "Hartfield"
  },
  {
    "zip": "23072",
    "city": "Hayes"
  },
  {
    "zip": "23075",
    "city": "Henrico"
  },
  {
    "zip": "23076",
    "city": "Hudgins"
  },
  {
    "zip": "23083",
    "city": "Jetersville"
  },
  {
    "zip": "23084",
    "city": "Kents Store"
  },
  {
    "zip": "23085",
    "city": "King And Queen Court House"
  },
  {
    "zip": "23086",
    "city": "King William"
  },
  {
    "zip": "23089",
    "city": "Lanexa"
  },
  {
    "zip": "23091",
    "city": "Little Plymouth"
  },
  {
    "zip": "23092",
    "city": "Locust Hill"
  },
  {
    "zip": "23093",
    "city": "Louisa"
  },
  {
    "zip": "23102",
    "city": "Maidens"
  },
  {
    "zip": "23103",
    "city": "Manakin Sabot"
  },
  {
    "zip": "23106",
    "city": "Manquin"
  },
  {
    "zip": "23108",
    "city": "Mascot"
  },
  {
    "zip": "23109",
    "city": "Mathews"
  },
  {
    "zip": "23110",
    "city": "Mattaponi"
  },
  {
    "zip": "23112",
    "city": "Midlothian"
  },
  {
    "zip": "23117",
    "city": "Mineral"
  },
  {
    "zip": "23119",
    "city": "Moon"
  },
  {
    "zip": "23120",
    "city": "Moseley"
  },
  {
    "zip": "23123",
    "city": "New Canton"
  },
  {
    "zip": "23124",
    "city": "New Kent"
  },
  {
    "zip": "23125",
    "city": "New Point"
  },
  {
    "zip": "23128",
    "city": "North"
  },
  {
    "zip": "23129",
    "city": "Oilville"
  },
  {
    "zip": "23130",
    "city": "Onemo"
  },
  {
    "zip": "23138",
    "city": "Port Haywood"
  },
  {
    "zip": "23139",
    "city": "Powhatan"
  },
  {
    "zip": "23140",
    "city": "Providence Forge"
  },
  {
    "zip": "23141",
    "city": "Quinton"
  },
  {
    "zip": "23148",
    "city": "Saint Stephens Church"
  },
  {
    "zip": "23149",
    "city": "Saluda"
  },
  {
    "zip": "23150",
    "city": "Sandston"
  },
  {
    "zip": "23156",
    "city": "Shacklefords"
  },
  {
    "zip": "23160",
    "city": "State Farm"
  },
  {
    "zip": "23163",
    "city": "Susan"
  },
  {
    "zip": "23168",
    "city": "Toano"
  },
  {
    "zip": "23169",
    "city": "Topping"
  },
  {
    "zip": "23173",
    "city": "University Of Richmond"
  },
  {
    "zip": "23175",
    "city": "Urbanna"
  },
  {
    "zip": "23176",
    "city": "Wake"
  },
  {
    "zip": "23177",
    "city": "Walkerton"
  },
  {
    "zip": "23180",
    "city": "Water View"
  },
  {
    "zip": "23301",
    "city": "Accomac"
  },
  {
    "zip": "23302",
    "city": "Assawoman"
  },
  {
    "zip": "23306",
    "city": "Belle Haven"
  },
  {
    "zip": "23307",
    "city": "Birdsnest"
  },
  {
    "zip": "23308",
    "city": "Bloxom"
  },
  {
    "zip": "23310",
    "city": "Cape Charles"
  },
  {
    "zip": "23314",
    "city": "Carrollton"
  },
  {
    "zip": "23315",
    "city": "Carrsville"
  },
  {
    "zip": "23320",
    "city": "Chesapeake"
  },
  {
    "zip": "23336",
    "city": "Chincoteague Island"
  },
  {
    "zip": "23337",
    "city": "Wallops Island"
  },
  {
    "zip": "23345",
    "city": "Davis Wharf"
  },
  {
    "zip": "23350",
    "city": "Exmore"
  },
  {
    "zip": "23354",
    "city": "Franktown"
  },
  {
    "zip": "23356",
    "city": "Greenbackville"
  },
  {
    "zip": "23358",
    "city": "Hacksneck"
  },
  {
    "zip": "23359",
    "city": "Hallwood"
  },
  {
    "zip": "23395",
    "city": "Horntown"
  },
  {
    "zip": "23396",
    "city": "Oak Hall"
  },
  {
    "zip": "23399",
    "city": "Jenkins Bridge"
  },
  {
    "zip": "23404",
    "city": "Locustville"
  },
  {
    "zip": "23405",
    "city": "Machipongo"
  },
  {
    "zip": "23409",
    "city": "Mears"
  },
  {
    "zip": "23410",
    "city": "Melfa"
  },
  {
    "zip": "23415",
    "city": "New Church"
  },
  {
    "zip": "23417",
    "city": "Onancock"
  },
  {
    "zip": "23418",
    "city": "Onley"
  },
  {
    "zip": "23420",
    "city": "Painter"
  },
  {
    "zip": "23421",
    "city": "Parksley"
  },
  {
    "zip": "23432",
    "city": "Suffolk"
  },
  {
    "zip": "23442",
    "city": "Temperanceville"
  },
  {
    "zip": "23451",
    "city": "Virginia Beach"
  },
  {
    "zip": "23488",
    "city": "Withams"
  },
  {
    "zip": "23601",
    "city": "Newport News"
  },
  {
    "zip": "23604",
    "city": "Fort Eustis"
  },
  {
    "zip": "23651",
    "city": "Fort Monroe"
  },
  {
    "zip": "23662",
    "city": "Poquoson"
  },
  {
    "zip": "23690",
    "city": "Yorktown"
  },
  {
    "zip": "23806",
    "city": "Virginia State University"
  },
  {
    "zip": "23821",
    "city": "Alberta"
  },
  {
    "zip": "23827",
    "city": "Boykins"
  },
  {
    "zip": "23829",
    "city": "Capron"
  },
  {
    "zip": "23830",
    "city": "Carson"
  },
  {
    "zip": "23833",
    "city": "Church Road"
  },
  {
    "zip": "23834",
    "city": "Colonial Heights"
  },
  {
    "zip": "23837",
    "city": "Courtland"
  },
  {
    "zip": "23839",
    "city": "Dendron"
  },
  {
    "zip": "23840",
    "city": "Dewitt"
  },
  {
    "zip": "23841",
    "city": "Dinwiddie"
  },
  {
    "zip": "23842",
    "city": "Disputanta"
  },
  {
    "zip": "23843",
    "city": "Dolphin"
  },
  {
    "zip": "23844",
    "city": "Drewryville"
  },
  {
    "zip": "23845",
    "city": "Ebony"
  },
  {
    "zip": "23846",
    "city": "Elberon"
  },
  {
    "zip": "23847",
    "city": "Emporia"
  },
  {
    "zip": "23850",
    "city": "Ford"
  },
  {
    "zip": "23856",
    "city": "Freeman"
  },
  {
    "zip": "23857",
    "city": "Gasburg"
  },
  {
    "zip": "23866",
    "city": "Ivor"
  },
  {
    "zip": "23867",
    "city": "Jarratt"
  },
  {
    "zip": "23872",
    "city": "Mc Kenney"
  },
  {
    "zip": "23874",
    "city": "Newsoms"
  },
  {
    "zip": "23875",
    "city": "Prince George"
  },
  {
    "zip": "23878",
    "city": "Sedley"
  },
  {
    "zip": "23879",
    "city": "Skippers"
  },
  {
    "zip": "23885",
    "city": "Sutherland"
  },
  {
    "zip": "23887",
    "city": "Valentines"
  },
  {
    "zip": "23889",
    "city": "Warfield"
  },
  {
    "zip": "23894",
    "city": "Wilsons"
  },
  {
    "zip": "23897",
    "city": "Yale"
  },
  {
    "zip": "23898",
    "city": "Zuni"
  },
  {
    "zip": "23901",
    "city": "Farmville"
  },
  {
    "zip": "23915",
    "city": "Baskerville"
  },
  {
    "zip": "23917",
    "city": "Boydton"
  },
  {
    "zip": "23919",
    "city": "Bracey"
  },
  {
    "zip": "23920",
    "city": "Brodnax"
  },
  {
    "zip": "23921",
    "city": "Buckingham"
  },
  {
    "zip": "23922",
    "city": "Burkeville"
  },
  {
    "zip": "23923",
    "city": "Charlotte Court House"
  },
  {
    "zip": "23924",
    "city": "Chase City"
  },
  {
    "zip": "23930",
    "city": "Crewe"
  },
  {
    "zip": "23934",
    "city": "Cullen"
  },
  {
    "zip": "23936",
    "city": "Dillwyn"
  },
  {
    "zip": "23937",
    "city": "Drakes Branch"
  },
  {
    "zip": "23938",
    "city": "Dundas"
  },
  {
    "zip": "23942",
    "city": "Green Bay"
  },
  {
    "zip": "23944",
    "city": "Kenbridge"
  },
  {
    "zip": "23947",
    "city": "Keysville"
  },
  {
    "zip": "23950",
    "city": "La Crosse"
  },
  {
    "zip": "23954",
    "city": "Meherrin"
  },
  {
    "zip": "23958",
    "city": "Pamplin"
  },
  {
    "zip": "23959",
    "city": "Phenix"
  },
  {
    "zip": "23963",
    "city": "Red House"
  },
  {
    "zip": "23964",
    "city": "Red Oak"
  },
  {
    "zip": "23966",
    "city": "Rice"
  },
  {
    "zip": "23967",
    "city": "Saxe"
  },
  {
    "zip": "23968",
    "city": "Skipwith"
  },
  {
    "zip": "23970",
    "city": "South Hill"
  },
  {
    "zip": "23974",
    "city": "Victoria"
  },
  {
    "zip": "23976",
    "city": "Wylliesburg"
  },
  {
    "zip": "24011",
    "city": "Roanoke"
  },
  {
    "zip": "24053",
    "city": "Ararat"
  },
  {
    "zip": "24054",
    "city": "Axton"
  },
  {
    "zip": "24055",
    "city": "Bassett"
  },
  {
    "zip": "24059",
    "city": "Bent Mountain"
  },
  {
    "zip": "24060",
    "city": "Blacksburg"
  },
  {
    "zip": "24064",
    "city": "Blue Ridge"
  },
  {
    "zip": "24065",
    "city": "Boones Mill"
  },
  {
    "zip": "24070",
    "city": "Catawba"
  },
  {
    "zip": "24072",
    "city": "Check"
  },
  {
    "zip": "24073",
    "city": "Christiansburg"
  },
  {
    "zip": "24076",
    "city": "Claudville"
  },
  {
    "zip": "24077",
    "city": "Cloverdale"
  },
  {
    "zip": "24079",
    "city": "Copper Hill"
  },
  {
    "zip": "24082",
    "city": "Critz"
  },
  {
    "zip": "24083",
    "city": "Daleville"
  },
  {
    "zip": "24085",
    "city": "Eagle Rock"
  },
  {
    "zip": "24086",
    "city": "Eggleston"
  },
  {
    "zip": "24087",
    "city": "Elliston"
  },
  {
    "zip": "24088",
    "city": "Ferrum"
  },
  {
    "zip": "24089",
    "city": "Fieldale"
  },
  {
    "zip": "24090",
    "city": "Fincastle"
  },
  {
    "zip": "24091",
    "city": "Floyd"
  },
  {
    "zip": "24092",
    "city": "Glade Hill"
  },
  {
    "zip": "24093",
    "city": "Glen Lyn"
  },
  {
    "zip": "24095",
    "city": "Goodview"
  },
  {
    "zip": "24101",
    "city": "Hardy"
  },
  {
    "zip": "24102",
    "city": "Henry"
  },
  {
    "zip": "24104",
    "city": "Huddleston"
  },
  {
    "zip": "24105",
    "city": "Indian Valley"
  },
  {
    "zip": "24120",
    "city": "Meadows Of Dan"
  },
  {
    "zip": "24121",
    "city": "Moneta"
  },
  {
    "zip": "24124",
    "city": "Narrows"
  },
  {
    "zip": "24131",
    "city": "Paint Bank"
  },
  {
    "zip": "24133",
    "city": "Patrick Springs"
  },
  {
    "zip": "24134",
    "city": "Pearisburg"
  },
  {
    "zip": "24137",
    "city": "Penhook"
  },
  {
    "zip": "24138",
    "city": "Pilot"
  },
  {
    "zip": "24141",
    "city": "Radford"
  },
  {
    "zip": "24147",
    "city": "Rich Creek"
  },
  {
    "zip": "24148",
    "city": "Ridgeway"
  },
  {
    "zip": "24149",
    "city": "Riner"
  },
  {
    "zip": "24150",
    "city": "Ripplemead"
  },
  {
    "zip": "24151",
    "city": "Rocky Mount"
  },
  {
    "zip": "24161",
    "city": "Sandy Level"
  },
  {
    "zip": "24162",
    "city": "Shawsville"
  },
  {
    "zip": "24167",
    "city": "Staffordsville"
  },
  {
    "zip": "24168",
    "city": "Stanleytown"
  },
  {
    "zip": "24171",
    "city": "Stuart"
  },
  {
    "zip": "24174",
    "city": "Thaxton"
  },
  {
    "zip": "24176",
    "city": "Union Hall"
  },
  {
    "zip": "24179",
    "city": "Vinton"
  },
  {
    "zip": "24184",
    "city": "Wirtz"
  },
  {
    "zip": "24185",
    "city": "Woolwine"
  },
  {
    "zip": "24216",
    "city": "Appalachia"
  },
  {
    "zip": "24217",
    "city": "Bee"
  },
  {
    "zip": "24219",
    "city": "Big Stone Gap"
  },
  {
    "zip": "24220",
    "city": "Birchleaf"
  },
  {
    "zip": "24221",
    "city": "Blackwater"
  },
  {
    "zip": "24224",
    "city": "Castlewood"
  },
  {
    "zip": "24226",
    "city": "Clinchco"
  },
  {
    "zip": "24228",
    "city": "Clintwood"
  },
  {
    "zip": "24230",
    "city": "Coeburn"
  },
  {
    "zip": "24237",
    "city": "Dante"
  },
  {
    "zip": "24244",
    "city": "Duffield"
  },
  {
    "zip": "24245",
    "city": "Dungannon"
  },
  {
    "zip": "24248",
    "city": "Ewing"
  },
  {
    "zip": "24250",
    "city": "Fort Blackmore"
  },
  {
    "zip": "24251",
    "city": "Gate City"
  },
  {
    "zip": "24256",
    "city": "Haysi"
  },
  {
    "zip": "24258",
    "city": "Hiltons"
  },
  {
    "zip": "24260",
    "city": "Honaker"
  },
  {
    "zip": "24263",
    "city": "Jonesville"
  },
  {
    "zip": "24265",
    "city": "Keokee"
  },
  {
    "zip": "24270",
    "city": "Mendota"
  },
  {
    "zip": "24271",
    "city": "Nickelsville"
  },
  {
    "zip": "24272",
    "city": "Nora"
  },
  {
    "zip": "24277",
    "city": "Pennington Gap"
  },
  {
    "zip": "24279",
    "city": "Pound"
  },
  {
    "zip": "24281",
    "city": "Rose Hill"
  },
  {
    "zip": "24282",
    "city": "Saint Charles"
  },
  {
    "zip": "24283",
    "city": "Saint Paul"
  },
  {
    "zip": "24290",
    "city": "Weber City"
  },
  {
    "zip": "24292",
    "city": "Whitetop"
  },
  {
    "zip": "24293",
    "city": "Wise"
  },
  {
    "zip": "24311",
    "city": "Atkins"
  },
  {
    "zip": "24312",
    "city": "Austinville"
  },
  {
    "zip": "24313",
    "city": "Barren Springs"
  },
  {
    "zip": "24314",
    "city": "Bastian"
  },
  {
    "zip": "24315",
    "city": "Bland"
  },
  {
    "zip": "24316",
    "city": "Broadford"
  },
  {
    "zip": "24317",
    "city": "Cana"
  },
  {
    "zip": "24319",
    "city": "Chilhowie"
  },
  {
    "zip": "24322",
    "city": "Cripple Creek"
  },
  {
    "zip": "24323",
    "city": "Crockett"
  },
  {
    "zip": "24324",
    "city": "Draper"
  },
  {
    "zip": "24325",
    "city": "Dugspur"
  },
  {
    "zip": "24326",
    "city": "Elk Creek"
  },
  {
    "zip": "24328",
    "city": "Fancy Gap"
  },
  {
    "zip": "24330",
    "city": "Fries"
  },
  {
    "zip": "24333",
    "city": "Galax"
  },
  {
    "zip": "24340",
    "city": "Glade Spring"
  },
  {
    "zip": "24343",
    "city": "Hillsville"
  },
  {
    "zip": "24347",
    "city": "Hiwassee"
  },
  {
    "zip": "24348",
    "city": "Independence"
  },
  {
    "zip": "24350",
    "city": "Ivanhoe"
  },
  {
    "zip": "24351",
    "city": "Lambsburg"
  },
  {
    "zip": "24352",
    "city": "Laurel Fork"
  },
  {
    "zip": "24360",
    "city": "Max Meadows"
  },
  {
    "zip": "24361",
    "city": "Meadowview"
  },
  {
    "zip": "24363",
    "city": "Mouth Of Wilson"
  },
  {
    "zip": "24366",
    "city": "Rocky Gap"
  },
  {
    "zip": "24368",
    "city": "Rural Retreat"
  },
  {
    "zip": "24370",
    "city": "Saltville"
  },
  {
    "zip": "24374",
    "city": "Speedwell"
  },
  {
    "zip": "24378",
    "city": "Troutdale"
  },
  {
    "zip": "24380",
    "city": "Willis"
  },
  {
    "zip": "24381",
    "city": "Woodlawn"
  },
  {
    "zip": "24382",
    "city": "Wytheville"
  },
  {
    "zip": "24401",
    "city": "Staunton"
  },
  {
    "zip": "24413",
    "city": "Blue Grass"
  },
  {
    "zip": "24422",
    "city": "Clifton Forge"
  },
  {
    "zip": "24430",
    "city": "Craigsville"
  },
  {
    "zip": "24431",
    "city": "Crimora"
  },
  {
    "zip": "24433",
    "city": "Doe Hill"
  },
  {
    "zip": "24437",
    "city": "Fort Defiance"
  },
  {
    "zip": "24441",
    "city": "Grottoes"
  },
  {
    "zip": "24442",
    "city": "Head Waters"
  },
  {
    "zip": "24445",
    "city": "Hot Springs"
  },
  {
    "zip": "24458",
    "city": "Mc Dowell"
  },
  {
    "zip": "24459",
    "city": "Middlebrook"
  },
  {
    "zip": "24460",
    "city": "Millboro"
  },
  {
    "zip": "24464",
    "city": "Montebello"
  },
  {
    "zip": "24467",
    "city": "Mount Sidney"
  },
  {
    "zip": "24468",
    "city": "Mustoe"
  },
  {
    "zip": "24472",
    "city": "Raphine"
  },
  {
    "zip": "24473",
    "city": "Rockbridge Baths"
  },
  {
    "zip": "24476",
    "city": "Steeles Tavern"
  },
  {
    "zip": "24477",
    "city": "Stuarts Draft"
  },
  {
    "zip": "24479",
    "city": "Swoope"
  },
  {
    "zip": "24483",
    "city": "Vesuvius"
  },
  {
    "zip": "24484",
    "city": "Warm Springs"
  },
  {
    "zip": "24485",
    "city": "West Augusta"
  },
  {
    "zip": "24486",
    "city": "Weyers Cave"
  },
  {
    "zip": "24501",
    "city": "Lynchburg"
  },
  {
    "zip": "24517",
    "city": "Altavista"
  },
  {
    "zip": "24522",
    "city": "Appomattox"
  },
  {
    "zip": "24526",
    "city": "Big Island"
  },
  {
    "zip": "24527",
    "city": "Blairs"
  },
  {
    "zip": "24528",
    "city": "Brookneal"
  },
  {
    "zip": "24529",
    "city": "Buffalo Junction"
  },
  {
    "zip": "24530",
    "city": "Callands"
  },
  {
    "zip": "24534",
    "city": "Clover"
  },
  {
    "zip": "24536",
    "city": "Coleman Falls"
  },
  {
    "zip": "24539",
    "city": "Crystal Hill"
  },
  {
    "zip": "24549",
    "city": "Dry Fork"
  },
  {
    "zip": "24550",
    "city": "Evington"
  },
  {
    "zip": "24551",
    "city": "Forest"
  },
  {
    "zip": "24554",
    "city": "Gladys"
  },
  {
    "zip": "24555",
    "city": "Glasgow"
  },
  {
    "zip": "24556",
    "city": "Goode"
  },
  {
    "zip": "24557",
    "city": "Gretna"
  },
  {
    "zip": "24562",
    "city": "Howardsville"
  },
  {
    "zip": "24563",
    "city": "Hurt"
  },
  {
    "zip": "24565",
    "city": "Java"
  },
  {
    "zip": "24566",
    "city": "Keeling"
  },
  {
    "zip": "24570",
    "city": "Lowry"
  },
  {
    "zip": "24571",
    "city": "Lynch Station"
  },
  {
    "zip": "24572",
    "city": "Madison Heights"
  },
  {
    "zip": "24577",
    "city": "Nathalie"
  },
  {
    "zip": "24579",
    "city": "Natural Bridge Station"
  },
  {
    "zip": "24588",
    "city": "Rustburg"
  },
  {
    "zip": "24592",
    "city": "South Boston"
  },
  {
    "zip": "24593",
    "city": "Spout Spring"
  },
  {
    "zip": "24594",
    "city": "Sutherlin"
  },
  {
    "zip": "24597",
    "city": "Vernon Hill"
  },
  {
    "zip": "24598",
    "city": "Virgilina"
  },
  {
    "zip": "24599",
    "city": "Wingina"
  },
  {
    "zip": "24602",
    "city": "Bandy"
  },
  {
    "zip": "24603",
    "city": "Big Rock"
  },
  {
    "zip": "24605",
    "city": "Bluefield"
  },
  {
    "zip": "24609",
    "city": "Cedar Bluff"
  },
  {
    "zip": "24613",
    "city": "Falls Mills"
  },
  {
    "zip": "24614",
    "city": "Grundy"
  },
  {
    "zip": "24622",
    "city": "Jewell Ridge"
  },
  {
    "zip": "24628",
    "city": "Maxie"
  },
  {
    "zip": "24630",
    "city": "North Tazewell"
  },
  {
    "zip": "24631",
    "city": "Oakwood"
  },
  {
    "zip": "24634",
    "city": "Pilgrims Knob"
  },
  {
    "zip": "24637",
    "city": "Pounding Mill"
  },
  {
    "zip": "24639",
    "city": "Raven"
  },
  {
    "zip": "24641",
    "city": "Richlands"
  },
  {
    "zip": "24649",
    "city": "Swords Creek"
  },
  {
    "zip": "24651",
    "city": "Tazewell"
  },
  {
    "zip": "24656",
    "city": "Vansant"
  },
  {
    "zip": "24657",
    "city": "Whitewood"
  },
  {
    "zip": "24714",
    "city": "Beeson"
  },
  {
    "zip": "24715",
    "city": "Bramwell"
  },
  {
    "zip": "24731",
    "city": "Kegley"
  },
  {
    "zip": "24733",
    "city": "Lashmeet"
  },
  {
    "zip": "24736",
    "city": "Matoaka"
  },
  {
    "zip": "24747",
    "city": "Rock"
  },
  {
    "zip": "24801",
    "city": "Welch"
  },
  {
    "zip": "24808",
    "city": "Anawalt"
  },
  {
    "zip": "24815",
    "city": "Berwind"
  },
  {
    "zip": "24818",
    "city": "Brenton"
  },
  {
    "zip": "24822",
    "city": "Clear Fork"
  },
  {
    "zip": "24823",
    "city": "Coal Mountain"
  },
  {
    "zip": "24828",
    "city": "Davy"
  },
  {
    "zip": "24830",
    "city": "Elbert"
  },
  {
    "zip": "24844",
    "city": "Iaeger"
  },
  {
    "zip": "24846",
    "city": "Isaban"
  },
  {
    "zip": "24849",
    "city": "Jesse"
  },
  {
    "zip": "24850",
    "city": "Jolo"
  },
  {
    "zip": "24860",
    "city": "Matheny"
  },
  {
    "zip": "24868",
    "city": "Northfork"
  },
  {
    "zip": "24869",
    "city": "North Spring"
  },
  {
    "zip": "24870",
    "city": "Oceana"
  },
  {
    "zip": "24872",
    "city": "Panther"
  },
  {
    "zip": "24873",
    "city": "Paynesville"
  },
  {
    "zip": "24874",
    "city": "Pineville"
  },
  {
    "zip": "24879",
    "city": "Raysal"
  },
  {
    "zip": "24880",
    "city": "Rock View"
  },
  {
    "zip": "24882",
    "city": "Simon"
  },
  {
    "zip": "24884",
    "city": "Squire"
  },
  {
    "zip": "24892",
    "city": "War"
  },
  {
    "zip": "24910",
    "city": "Alderson"
  },
  {
    "zip": "24915",
    "city": "Arbovale"
  },
  {
    "zip": "24918",
    "city": "Ballard"
  },
  {
    "zip": "24920",
    "city": "Bartow"
  },
  {
    "zip": "24924",
    "city": "Buckeye"
  },
  {
    "zip": "24927",
    "city": "Cass"
  },
  {
    "zip": "24931",
    "city": "Crawley"
  },
  {
    "zip": "24934",
    "city": "Dunmore"
  },
  {
    "zip": "24941",
    "city": "Gap Mills"
  },
  {
    "zip": "24943",
    "city": "Grassy Meadows"
  },
  {
    "zip": "24944",
    "city": "Green Bank"
  },
  {
    "zip": "24946",
    "city": "Hillsboro"
  },
  {
    "zip": "24951",
    "city": "Lindside"
  },
  {
    "zip": "24954",
    "city": "Marlinton"
  },
  {
    "zip": "24957",
    "city": "Maxwelton"
  },
  {
    "zip": "24962",
    "city": "Pence Springs"
  },
  {
    "zip": "24963",
    "city": "Peterstown"
  },
  {
    "zip": "24966",
    "city": "Renick"
  },
  {
    "zip": "24970",
    "city": "Ronceverte"
  },
  {
    "zip": "24974",
    "city": "Secondcreek"
  },
  {
    "zip": "24976",
    "city": "Sinks Grove"
  },
  {
    "zip": "24977",
    "city": "Smoot"
  },
  {
    "zip": "24981",
    "city": "Talcott"
  },
  {
    "zip": "24984",
    "city": "Waiteville"
  },
  {
    "zip": "24985",
    "city": "Wayside"
  },
  {
    "zip": "24993",
    "city": "Wolfcreek"
  },
  {
    "zip": "25003",
    "city": "Alum Creek"
  },
  {
    "zip": "25005",
    "city": "Amma"
  },
  {
    "zip": "25007",
    "city": "Arnett"
  },
  {
    "zip": "25008",
    "city": "Artie"
  },
  {
    "zip": "25015",
    "city": "Belle"
  },
  {
    "zip": "25019",
    "city": "Bickmore"
  },
  {
    "zip": "25021",
    "city": "Bim"
  },
  {
    "zip": "25024",
    "city": "Bloomingrose"
  },
  {
    "zip": "25025",
    "city": "Blount"
  },
  {
    "zip": "25028",
    "city": "Bob White"
  },
  {
    "zip": "25030",
    "city": "Bomont"
  },
  {
    "zip": "25035",
    "city": "Cabin Creek"
  },
  {
    "zip": "25044",
    "city": "Clear Creek"
  },
  {
    "zip": "25045",
    "city": "Clendenin"
  },
  {
    "zip": "25047",
    "city": "Clothier"
  },
  {
    "zip": "25048",
    "city": "Colcord"
  },
  {
    "zip": "25049",
    "city": "Comfort"
  },
  {
    "zip": "25051",
    "city": "Costa"
  },
  {
    "zip": "25059",
    "city": "Dixie"
  },
  {
    "zip": "25062",
    "city": "Dry Creek"
  },
  {
    "zip": "25063",
    "city": "Duck"
  },
  {
    "zip": "25067",
    "city": "East Bank"
  },
  {
    "zip": "25071",
    "city": "Elkview"
  },
  {
    "zip": "25075",
    "city": "Eskdale"
  },
  {
    "zip": "25079",
    "city": "Falling Rock"
  },
  {
    "zip": "25082",
    "city": "Fraziers Bottom"
  },
  {
    "zip": "25083",
    "city": "Gallagher"
  },
  {
    "zip": "25085",
    "city": "Gauley Bridge"
  },
  {
    "zip": "25093",
    "city": "Gordon"
  },
  {
    "zip": "25103",
    "city": "Hansford"
  },
  {
    "zip": "25107",
    "city": "Hernshaw"
  },
  {
    "zip": "25108",
    "city": "Hewett"
  },
  {
    "zip": "25111",
    "city": "Indore"
  },
  {
    "zip": "25113",
    "city": "Ivydale"
  },
  {
    "zip": "25114",
    "city": "Jeffrey"
  },
  {
    "zip": "25115",
    "city": "Kanawha Falls"
  },
  {
    "zip": "25118",
    "city": "Kimberly"
  },
  {
    "zip": "25119",
    "city": "Kincaid"
  },
  {
    "zip": "25121",
    "city": "Lake"
  },
  {
    "zip": "25125",
    "city": "Lizemores"
  },
  {
    "zip": "25132",
    "city": "Mammoth"
  },
  {
    "zip": "25133",
    "city": "Maysel"
  },
  {
    "zip": "25139",
    "city": "Mount Carbon"
  },
  {
    "zip": "25140",
    "city": "Naoma"
  },
  {
    "zip": "25141",
    "city": "Nebo"
  },
  {
    "zip": "25142",
    "city": "Nellis"
  },
  {
    "zip": "25143",
    "city": "Nitro"
  },
  {
    "zip": "25148",
    "city": "Orgas"
  },
  {
    "zip": "25154",
    "city": "Peytona"
  },
  {
    "zip": "25159",
    "city": "Poca"
  },
  {
    "zip": "25160",
    "city": "Pond Gap"
  },
  {
    "zip": "25161",
    "city": "Powellton"
  },
  {
    "zip": "25164",
    "city": "Procious"
  },
  {
    "zip": "25165",
    "city": "Racine"
  },
  {
    "zip": "25169",
    "city": "Ridgeview"
  },
  {
    "zip": "25173",
    "city": "Robson"
  },
  {
    "zip": "25174",
    "city": "Rock Creek"
  },
  {
    "zip": "25180",
    "city": "Saxon"
  },
  {
    "zip": "25181",
    "city": "Seth"
  },
  {
    "zip": "25187",
    "city": "Southside"
  },
  {
    "zip": "25193",
    "city": "Sylvester"
  },
  {
    "zip": "25202",
    "city": "Tornado"
  },
  {
    "zip": "25204",
    "city": "Twilight"
  },
  {
    "zip": "25206",
    "city": "Van"
  },
  {
    "zip": "25214",
    "city": "Winifrede"
  },
  {
    "zip": "25231",
    "city": "Advent"
  },
  {
    "zip": "25234",
    "city": "Arnoldsburg"
  },
  {
    "zip": "25235",
    "city": "Chloe"
  },
  {
    "zip": "25239",
    "city": "Cottageville"
  },
  {
    "zip": "25241",
    "city": "Evans"
  },
  {
    "zip": "25243",
    "city": "Gandeeville"
  },
  {
    "zip": "25244",
    "city": "Gay"
  },
  {
    "zip": "25245",
    "city": "Given"
  },
  {
    "zip": "25248",
    "city": "Kenna"
  },
  {
    "zip": "25251",
    "city": "Left Hand"
  },
  {
    "zip": "25253",
    "city": "Letart"
  },
  {
    "zip": "25259",
    "city": "Looneyville"
  },
  {
    "zip": "25260",
    "city": "Mason"
  },
  {
    "zip": "25261",
    "city": "Millstone"
  },
  {
    "zip": "25264",
    "city": "Mount Alto"
  },
  {
    "zip": "25267",
    "city": "Normantown"
  },
  {
    "zip": "25268",
    "city": "Orma"
  },
  {
    "zip": "25270",
    "city": "Reedy"
  },
  {
    "zip": "25275",
    "city": "Sandyville"
  },
  {
    "zip": "25285",
    "city": "Wallback"
  },
  {
    "zip": "25287",
    "city": "West Columbia"
  },
  {
    "zip": "25411",
    "city": "Berkeley Springs"
  },
  {
    "zip": "25413",
    "city": "Bunker Hill"
  },
  {
    "zip": "25414",
    "city": "Charles Town"
  },
  {
    "zip": "25419",
    "city": "Falling Waters"
  },
  {
    "zip": "25420",
    "city": "Gerrardstown"
  },
  {
    "zip": "25421",
    "city": "Glengary"
  },
  {
    "zip": "25422",
    "city": "Great Cacapon"
  },
  {
    "zip": "25425",
    "city": "Harpers Ferry"
  },
  {
    "zip": "25427",
    "city": "Hedgesville"
  },
  {
    "zip": "25430",
    "city": "Kearneysville"
  },
  {
    "zip": "25431",
    "city": "Levels"
  },
  {
    "zip": "25434",
    "city": "Paw Paw"
  },
  {
    "zip": "25437",
    "city": "Points"
  },
  {
    "zip": "25438",
    "city": "Ranson"
  },
  {
    "zip": "25442",
    "city": "Shenandoah Junction"
  },
  {
    "zip": "25443",
    "city": "Shepherdstown"
  },
  {
    "zip": "25444",
    "city": "Slanesville"
  },
  {
    "zip": "25446",
    "city": "Summit Point"
  },
  {
    "zip": "25501",
    "city": "Alkol"
  },
  {
    "zip": "25502",
    "city": "Apple Grove"
  },
  {
    "zip": "25505",
    "city": "Big Creek"
  },
  {
    "zip": "25506",
    "city": "Branchland"
  },
  {
    "zip": "25508",
    "city": "Chapmanville"
  },
  {
    "zip": "25510",
    "city": "Culloden"
  },
  {
    "zip": "25511",
    "city": "Dunlow"
  },
  {
    "zip": "25512",
    "city": "East Lynn"
  },
  {
    "zip": "25514",
    "city": "Fort Gay"
  },
  {
    "zip": "25515",
    "city": "Gallipolis Ferry"
  },
  {
    "zip": "25521",
    "city": "Griffithsville"
  },
  {
    "zip": "25524",
    "city": "Harts"
  },
  {
    "zip": "25526",
    "city": "Hurricane"
  },
  {
    "zip": "25530",
    "city": "Kenova"
  },
  {
    "zip": "25534",
    "city": "Kiahsville"
  },
  {
    "zip": "25535",
    "city": "Lavalette"
  },
  {
    "zip": "25537",
    "city": "Lesage"
  },
  {
    "zip": "25540",
    "city": "Midkiff"
  },
  {
    "zip": "25544",
    "city": "Myra"
  },
  {
    "zip": "25545",
    "city": "Ona"
  },
  {
    "zip": "25547",
    "city": "Pecks Mill"
  },
  {
    "zip": "25550",
    "city": "Point Pleasant"
  },
  {
    "zip": "25555",
    "city": "Prichard"
  },
  {
    "zip": "25557",
    "city": "Ranger"
  },
  {
    "zip": "25559",
    "city": "Salt Rock"
  },
  {
    "zip": "25560",
    "city": "Scott Depot"
  },
  {
    "zip": "25564",
    "city": "Sod"
  },
  {
    "zip": "25565",
    "city": "Spurlockville"
  },
  {
    "zip": "25567",
    "city": "Sumerco"
  },
  {
    "zip": "25571",
    "city": "West Hamlin"
  },
  {
    "zip": "25573",
    "city": "Yawkey"
  },
  {
    "zip": "25601",
    "city": "Logan"
  },
  {
    "zip": "25607",
    "city": "Amherstdale"
  },
  {
    "zip": "25608",
    "city": "Baisden"
  },
  {
    "zip": "25612",
    "city": "Chauncey"
  },
  {
    "zip": "25617",
    "city": "Davin"
  },
  {
    "zip": "25632",
    "city": "Lyburn"
  },
  {
    "zip": "25635",
    "city": "Man"
  },
  {
    "zip": "25638",
    "city": "Omar"
  },
  {
    "zip": "25650",
    "city": "Verner"
  },
  {
    "zip": "25651",
    "city": "Wharncliffe"
  },
  {
    "zip": "25654",
    "city": "Yolyn"
  },
  {
    "zip": "25666",
    "city": "Breeden"
  },
  {
    "zip": "25669",
    "city": "Crum"
  },
  {
    "zip": "25670",
    "city": "Delbarton"
  },
  {
    "zip": "25671",
    "city": "Dingess"
  },
  {
    "zip": "25672",
    "city": "Edgarton"
  },
  {
    "zip": "25674",
    "city": "Kermit"
  },
  {
    "zip": "25676",
    "city": "Lenore"
  },
  {
    "zip": "25678",
    "city": "Matewan"
  },
  {
    "zip": "25699",
    "city": "Wilsondale"
  },
  {
    "zip": "25801",
    "city": "Beckley"
  },
  {
    "zip": "25811",
    "city": "Amigo"
  },
  {
    "zip": "25812",
    "city": "Ansted"
  },
  {
    "zip": "25817",
    "city": "Bolt"
  },
  {
    "zip": "25820",
    "city": "Camp Creek"
  },
  {
    "zip": "25823",
    "city": "Coal City"
  },
  {
    "zip": "25825",
    "city": "Cool Ridge"
  },
  {
    "zip": "25827",
    "city": "Crab Orchard"
  },
  {
    "zip": "25831",
    "city": "Danese"
  },
  {
    "zip": "25832",
    "city": "Daniels"
  },
  {
    "zip": "25837",
    "city": "Edmond"
  },
  {
    "zip": "25839",
    "city": "Fairdale"
  },
  {
    "zip": "25841",
    "city": "Flat Top"
  },
  {
    "zip": "25844",
    "city": "Glen Daniel"
  },
  {
    "zip": "25845",
    "city": "Glen Fork"
  },
  {
    "zip": "25846",
    "city": "Glen Jean"
  },
  {
    "zip": "25848",
    "city": "Glen Rogers"
  },
  {
    "zip": "25854",
    "city": "Hico"
  },
  {
    "zip": "25864",
    "city": "Layland"
  },
  {
    "zip": "25865",
    "city": "Lester"
  },
  {
    "zip": "25868",
    "city": "Lookout"
  },
  {
    "zip": "25870",
    "city": "Maben"
  },
  {
    "zip": "25876",
    "city": "Saulsville"
  },
  {
    "zip": "25880",
    "city": "Mount Hope"
  },
  {
    "zip": "25882",
    "city": "Mullens"
  },
  {
    "zip": "25902",
    "city": "Odd"
  },
  {
    "zip": "25908",
    "city": "Princewick"
  },
  {
    "zip": "25913",
    "city": "Ravencliff"
  },
  {
    "zip": "25915",
    "city": "Rhodell"
  },
  {
    "zip": "25917",
    "city": "Scarbro"
  },
  {
    "zip": "25918",
    "city": "Shady Spring"
  },
  {
    "zip": "25920",
    "city": "Slab Fork"
  },
  {
    "zip": "25922",
    "city": "Spanishburg"
  },
  {
    "zip": "25932",
    "city": "Surveyor"
  },
  {
    "zip": "25936",
    "city": "Thurmond"
  },
  {
    "zip": "25958",
    "city": "Charmco"
  },
  {
    "zip": "25962",
    "city": "Rainelle"
  },
  {
    "zip": "25965",
    "city": "Elton"
  },
  {
    "zip": "25969",
    "city": "Jumping Branch"
  },
  {
    "zip": "25971",
    "city": "Lerona"
  },
  {
    "zip": "25976",
    "city": "Meadow Bridge"
  },
  {
    "zip": "25977",
    "city": "Meadow Creek"
  },
  {
    "zip": "25978",
    "city": "Nimitz"
  },
  {
    "zip": "25979",
    "city": "Pipestem"
  },
  {
    "zip": "25981",
    "city": "Quinwood"
  },
  {
    "zip": "25984",
    "city": "Rupert"
  },
  {
    "zip": "25985",
    "city": "Sandstone"
  },
  {
    "zip": "25989",
    "city": "White Oak"
  },
  {
    "zip": "26003",
    "city": "Wheeling"
  },
  {
    "zip": "26031",
    "city": "Benwood"
  },
  {
    "zip": "26035",
    "city": "Colliers"
  },
  {
    "zip": "26037",
    "city": "Follansbee"
  },
  {
    "zip": "26038",
    "city": "Glen Dale"
  },
  {
    "zip": "26039",
    "city": "Glen Easton"
  },
  {
    "zip": "26040",
    "city": "Mcmechen"
  },
  {
    "zip": "26041",
    "city": "Moundsville"
  },
  {
    "zip": "26050",
    "city": "Newell"
  },
  {
    "zip": "26059",
    "city": "Triadelphia"
  },
  {
    "zip": "26060",
    "city": "Valley Grove"
  },
  {
    "zip": "26062",
    "city": "Weirton"
  },
  {
    "zip": "26101",
    "city": "Parkersburg"
  },
  {
    "zip": "26136",
    "city": "Big Bend"
  },
  {
    "zip": "26137",
    "city": "Big Springs"
  },
  {
    "zip": "26138",
    "city": "Brohard"
  },
  {
    "zip": "26141",
    "city": "Creston"
  },
  {
    "zip": "26142",
    "city": "Davisville"
  },
  {
    "zip": "26146",
    "city": "Friendly"
  },
  {
    "zip": "26148",
    "city": "Macfarlan"
  },
  {
    "zip": "26149",
    "city": "Middlebourne"
  },
  {
    "zip": "26150",
    "city": "Mineral Wells"
  },
  {
    "zip": "26151",
    "city": "Mount Zion"
  },
  {
    "zip": "26152",
    "city": "Munday"
  },
  {
    "zip": "26155",
    "city": "New Martinsville"
  },
  {
    "zip": "26159",
    "city": "Paden City"
  },
  {
    "zip": "26160",
    "city": "Palestine"
  },
  {
    "zip": "26161",
    "city": "Petroleum"
  },
  {
    "zip": "26162",
    "city": "Porters Falls"
  },
  {
    "zip": "26164",
    "city": "Ravenswood"
  },
  {
    "zip": "26167",
    "city": "Reader"
  },
  {
    "zip": "26175",
    "city": "Sistersville"
  },
  {
    "zip": "26178",
    "city": "Smithville"
  },
  {
    "zip": "26180",
    "city": "Walker"
  },
  {
    "zip": "26201",
    "city": "Buckhannon"
  },
  {
    "zip": "26202",
    "city": "Fenwick"
  },
  {
    "zip": "26203",
    "city": "Erbacon"
  },
  {
    "zip": "26206",
    "city": "Cowen"
  },
  {
    "zip": "26208",
    "city": "Camden On Gauley"
  },
  {
    "zip": "26217",
    "city": "Diana"
  },
  {
    "zip": "26218",
    "city": "French Creek"
  },
  {
    "zip": "26222",
    "city": "Hacker Valley"
  },
  {
    "zip": "26224",
    "city": "Helvetia"
  },
  {
    "zip": "26228",
    "city": "Kanawha Head"
  },
  {
    "zip": "26230",
    "city": "Pickens"
  },
  {
    "zip": "26234",
    "city": "Rock Cave"
  },
  {
    "zip": "26237",
    "city": "Tallmansville"
  },
  {
    "zip": "26238",
    "city": "Volga"
  },
  {
    "zip": "26250",
    "city": "Belington"
  },
  {
    "zip": "26254",
    "city": "Bowden"
  },
  {
    "zip": "26257",
    "city": "Coalton"
  },
  {
    "zip": "26260",
    "city": "Davis"
  },
  {
    "zip": "26261",
    "city": "Richwood"
  },
  {
    "zip": "26263",
    "city": "Dryfork"
  },
  {
    "zip": "26264",
    "city": "Durbin"
  },
  {
    "zip": "26266",
    "city": "Upperglade"
  },
  {
    "zip": "26267",
    "city": "Ellamore"
  },
  {
    "zip": "26268",
    "city": "Glady"
  },
  {
    "zip": "26269",
    "city": "Hambleton"
  },
  {
    "zip": "26270",
    "city": "Harman"
  },
  {
    "zip": "26271",
    "city": "Hendricks"
  },
  {
    "zip": "26273",
    "city": "Huttonsville"
  },
  {
    "zip": "26276",
    "city": "Kerens"
  },
  {
    "zip": "26278",
    "city": "Mabie"
  },
  {
    "zip": "26282",
    "city": "Monterville"
  },
  {
    "zip": "26287",
    "city": "Parsons"
  },
  {
    "zip": "26288",
    "city": "Webster Springs"
  },
  {
    "zip": "26291",
    "city": "Slatyfork"
  },
  {
    "zip": "26292",
    "city": "Thomas"
  },
  {
    "zip": "26293",
    "city": "Valley Bend"
  },
  {
    "zip": "26294",
    "city": "Valley Head"
  },
  {
    "zip": "26321",
    "city": "Alum Bridge"
  },
  {
    "zip": "26327",
    "city": "Berea"
  },
  {
    "zip": "26335",
    "city": "Burnsville"
  },
  {
    "zip": "26339",
    "city": "Center Point"
  },
  {
    "zip": "26342",
    "city": "Coxs Mills"
  },
  {
    "zip": "26343",
    "city": "Crawford"
  },
  {
    "zip": "26346",
    "city": "Ellenboro"
  },
  {
    "zip": "26372",
    "city": "Horner"
  },
  {
    "zip": "26376",
    "city": "Ireland"
  },
  {
    "zip": "26377",
    "city": "Jacksonburg"
  },
  {
    "zip": "26378",
    "city": "Jane Lew"
  },
  {
    "zip": "26384",
    "city": "Linn"
  },
  {
    "zip": "26385",
    "city": "Lost Creek"
  },
  {
    "zip": "26386",
    "city": "Lumberport"
  },
  {
    "zip": "26404",
    "city": "Meadowbrook"
  },
  {
    "zip": "26405",
    "city": "Moatsville"
  },
  {
    "zip": "26408",
    "city": "Mount Clare"
  },
  {
    "zip": "26411",
    "city": "New Milton"
  },
  {
    "zip": "26412",
    "city": "Orlando"
  },
  {
    "zip": "26415",
    "city": "Pennsboro"
  },
  {
    "zip": "26416",
    "city": "Philippi"
  },
  {
    "zip": "26421",
    "city": "Pullman"
  },
  {
    "zip": "26425",
    "city": "Rowlesburg"
  },
  {
    "zip": "26430",
    "city": "Sand Fork"
  },
  {
    "zip": "26431",
    "city": "Shinnston"
  },
  {
    "zip": "26444",
    "city": "Tunnelton"
  },
  {
    "zip": "26448",
    "city": "Wallace"
  },
  {
    "zip": "26456",
    "city": "West Union"
  },
  {
    "zip": "26461",
    "city": "Wilsonburg"
  },
  {
    "zip": "26519",
    "city": "Albright"
  },
  {
    "zip": "26521",
    "city": "Blacksville"
  },
  {
    "zip": "26524",
    "city": "Bretz"
  },
  {
    "zip": "26525",
    "city": "Bruceton Mills"
  },
  {
    "zip": "26537",
    "city": "Kingwood"
  },
  {
    "zip": "26541",
    "city": "Maidsville"
  },
  {
    "zip": "26546",
    "city": "Pursglove"
  },
  {
    "zip": "26554",
    "city": "Fairmont"
  },
  {
    "zip": "26560",
    "city": "Baxter"
  },
  {
    "zip": "26561",
    "city": "Big Run"
  },
  {
    "zip": "26562",
    "city": "Burton"
  },
  {
    "zip": "26568",
    "city": "Enterprise"
  },
  {
    "zip": "26575",
    "city": "Hundred"
  },
  {
    "zip": "26582",
    "city": "Mannington"
  },
  {
    "zip": "26585",
    "city": "Metz"
  },
  {
    "zip": "26587",
    "city": "Rachel"
  },
  {
    "zip": "26588",
    "city": "Rivesville"
  },
  {
    "zip": "26590",
    "city": "Wana"
  },
  {
    "zip": "26610",
    "city": "Birch River"
  },
  {
    "zip": "26615",
    "city": "Copen"
  },
  {
    "zip": "26617",
    "city": "Dille"
  },
  {
    "zip": "26619",
    "city": "Exchange"
  },
  {
    "zip": "26621",
    "city": "Flatwoods"
  },
  {
    "zip": "26623",
    "city": "Frametown"
  },
  {
    "zip": "26624",
    "city": "Gassaway"
  },
  {
    "zip": "26627",
    "city": "Heaters"
  },
  {
    "zip": "26629",
    "city": "Little Birch"
  },
  {
    "zip": "26631",
    "city": "Napier"
  },
  {
    "zip": "26638",
    "city": "Shock"
  },
  {
    "zip": "26651",
    "city": "Summersville"
  },
  {
    "zip": "26656",
    "city": "Belva"
  },
  {
    "zip": "26662",
    "city": "Canvas"
  },
  {
    "zip": "26676",
    "city": "Leivasy"
  },
  {
    "zip": "26678",
    "city": "Mount Lookout"
  },
  {
    "zip": "26679",
    "city": "Mount Nebo"
  },
  {
    "zip": "26680",
    "city": "Nallen"
  },
  {
    "zip": "26681",
    "city": "Nettie"
  },
  {
    "zip": "26684",
    "city": "Pool"
  },
  {
    "zip": "26690",
    "city": "Swiss"
  },
  {
    "zip": "26711",
    "city": "Capon Bridge"
  },
  {
    "zip": "26714",
    "city": "Delray"
  },
  {
    "zip": "26716",
    "city": "Eglon"
  },
  {
    "zip": "26717",
    "city": "Elk Garden"
  },
  {
    "zip": "26719",
    "city": "Fort Ashby"
  },
  {
    "zip": "26720",
    "city": "Gormania"
  },
  {
    "zip": "26722",
    "city": "Green Spring"
  },
  {
    "zip": "26726",
    "city": "Keyser"
  },
  {
    "zip": "26731",
    "city": "Lahmansville"
  },
  {
    "zip": "26739",
    "city": "Mount Storm"
  },
  {
    "zip": "26743",
    "city": "New Creek"
  },
  {
    "zip": "26750",
    "city": "Piedmont"
  },
  {
    "zip": "26753",
    "city": "Ridgeley"
  },
  {
    "zip": "26755",
    "city": "Rio"
  },
  {
    "zip": "26757",
    "city": "Romney"
  },
  {
    "zip": "26761",
    "city": "Shanks"
  },
  {
    "zip": "26764",
    "city": "Terra Alta"
  },
  {
    "zip": "26767",
    "city": "Wiley Ford"
  },
  {
    "zip": "26801",
    "city": "Baker"
  },
  {
    "zip": "26808",
    "city": "High View"
  },
  {
    "zip": "26810",
    "city": "Lost City"
  },
  {
    "zip": "26812",
    "city": "Mathias"
  },
  {
    "zip": "26817",
    "city": "Bloomery"
  },
  {
    "zip": "26818",
    "city": "Fisher"
  },
  {
    "zip": "26833",
    "city": "Maysville"
  },
  {
    "zip": "26836",
    "city": "Moorefield"
  },
  {
    "zip": "26838",
    "city": "Milam"
  },
  {
    "zip": "26845",
    "city": "Old Fields"
  },
  {
    "zip": "26851",
    "city": "Wardensville"
  },
  {
    "zip": "26852",
    "city": "Purgitsville"
  },
  {
    "zip": "26855",
    "city": "Cabins"
  },
  {
    "zip": "26865",
    "city": "Yellow Spring"
  },
  {
    "zip": "26866",
    "city": "Upper Tract"
  },
  {
    "zip": "26884",
    "city": "Seneca Rocks"
  },
  {
    "zip": "27006",
    "city": "Advance"
  },
  {
    "zip": "27009",
    "city": "Belews Creek"
  },
  {
    "zip": "27012",
    "city": "Clemmons"
  },
  {
    "zip": "27017",
    "city": "Dobson"
  },
  {
    "zip": "27018",
    "city": "East Bend"
  },
  {
    "zip": "27019",
    "city": "Germanton"
  },
  {
    "zip": "27020",
    "city": "Hamptonville"
  },
  {
    "zip": "27021",
    "city": "King"
  },
  {
    "zip": "27022",
    "city": "Lawsonville"
  },
  {
    "zip": "27023",
    "city": "Lewisville"
  },
  {
    "zip": "27024",
    "city": "Lowgap"
  },
  {
    "zip": "27027",
    "city": "Mayodan"
  },
  {
    "zip": "27028",
    "city": "Mocksville"
  },
  {
    "zip": "27040",
    "city": "Pfafftown"
  },
  {
    "zip": "27041",
    "city": "Pilot Mountain"
  },
  {
    "zip": "27042",
    "city": "Pine Hall"
  },
  {
    "zip": "27043",
    "city": "Pinnacle"
  },
  {
    "zip": "27045",
    "city": "Rural Hall"
  },
  {
    "zip": "27046",
    "city": "Sandy Ridge"
  },
  {
    "zip": "27047",
    "city": "Siloam"
  },
  {
    "zip": "27048",
    "city": "Stoneville"
  },
  {
    "zip": "27050",
    "city": "Tobaccoville"
  },
  {
    "zip": "27051",
    "city": "Walkertown"
  },
  {
    "zip": "27052",
    "city": "Walnut Cove"
  },
  {
    "zip": "27054",
    "city": "Woodleaf"
  },
  {
    "zip": "27055",
    "city": "Yadkinville"
  },
  {
    "zip": "27101",
    "city": "Winston Salem"
  },
  {
    "zip": "27151",
    "city": "Winston-salem"
  },
  {
    "zip": "27203",
    "city": "Asheboro"
  },
  {
    "zip": "27207",
    "city": "Bear Creek"
  },
  {
    "zip": "27208",
    "city": "Bennett"
  },
  {
    "zip": "27209",
    "city": "Biscoe"
  },
  {
    "zip": "27212",
    "city": "Blanch"
  },
  {
    "zip": "27214",
    "city": "Browns Summit"
  },
  {
    "zip": "27235",
    "city": "Colfax"
  },
  {
    "zip": "27242",
    "city": "Eagle Springs"
  },
  {
    "zip": "27243",
    "city": "Efland"
  },
  {
    "zip": "27244",
    "city": "Elon"
  },
  {
    "zip": "27249",
    "city": "Gibsonville"
  },
  {
    "zip": "27252",
    "city": "Goldston"
  },
  {
    "zip": "27253",
    "city": "Graham"
  },
  {
    "zip": "27258",
    "city": "Haw River"
  },
  {
    "zip": "27260",
    "city": "High Point"
  },
  {
    "zip": "27281",
    "city": "Jackson Springs"
  },
  {
    "zip": "27284",
    "city": "Kernersville"
  },
  {
    "zip": "27291",
    "city": "Leasburg"
  },
  {
    "zip": "27301",
    "city": "Mc Leansville"
  },
  {
    "zip": "27302",
    "city": "Mebane"
  },
  {
    "zip": "27306",
    "city": "Mount Gilead"
  },
  {
    "zip": "27312",
    "city": "Pittsboro"
  },
  {
    "zip": "27313",
    "city": "Pleasant Garden"
  },
  {
    "zip": "27314",
    "city": "Prospect Hill"
  },
  {
    "zip": "27316",
    "city": "Ramseur"
  },
  {
    "zip": "27317",
    "city": "Randleman"
  },
  {
    "zip": "27320",
    "city": "Reidsville"
  },
  {
    "zip": "27325",
    "city": "Robbins"
  },
  {
    "zip": "27326",
    "city": "Ruffin"
  },
  {
    "zip": "27341",
    "city": "Seagrove"
  },
  {
    "zip": "27343",
    "city": "Semora"
  },
  {
    "zip": "27344",
    "city": "Siler City"
  },
  {
    "zip": "27349",
    "city": "Snow Camp"
  },
  {
    "zip": "27350",
    "city": "Sophia"
  },
  {
    "zip": "27355",
    "city": "Staley"
  },
  {
    "zip": "27356",
    "city": "Star"
  },
  {
    "zip": "27357",
    "city": "Stokesdale"
  },
  {
    "zip": "27358",
    "city": "Summerfield"
  },
  {
    "zip": "27370",
    "city": "Trinity"
  },
  {
    "zip": "27376",
    "city": "West End"
  },
  {
    "zip": "27377",
    "city": "Whitsett"
  },
  {
    "zip": "27379",
    "city": "Yanceyville"
  },
  {
    "zip": "27501",
    "city": "Angier"
  },
  {
    "zip": "27502",
    "city": "Apex"
  },
  {
    "zip": "27503",
    "city": "Bahama"
  },
  {
    "zip": "27504",
    "city": "Benson"
  },
  {
    "zip": "27507",
    "city": "Bullock"
  },
  {
    "zip": "27508",
    "city": "Bunn"
  },
  {
    "zip": "27509",
    "city": "Butner"
  },
  {
    "zip": "27510",
    "city": "Carrboro"
  },
  {
    "zip": "27511",
    "city": "Cary"
  },
  {
    "zip": "27514",
    "city": "Chapel Hill"
  },
  {
    "zip": "27521",
    "city": "Coats"
  },
  {
    "zip": "27522",
    "city": "Creedmoor"
  },
  {
    "zip": "27524",
    "city": "Four Oaks"
  },
  {
    "zip": "27525",
    "city": "Franklinton"
  },
  {
    "zip": "27526",
    "city": "Fuquay Varina"
  },
  {
    "zip": "27529",
    "city": "Garner"
  },
  {
    "zip": "27540",
    "city": "Holly Springs"
  },
  {
    "zip": "27541",
    "city": "Hurdle Mills"
  },
  {
    "zip": "27542",
    "city": "Kenly"
  },
  {
    "zip": "27544",
    "city": "Kittrell"
  },
  {
    "zip": "27545",
    "city": "Knightdale"
  },
  {
    "zip": "27546",
    "city": "Lillington"
  },
  {
    "zip": "27549",
    "city": "Louisburg"
  },
  {
    "zip": "27551",
    "city": "Macon"
  },
  {
    "zip": "27553",
    "city": "Manson"
  },
  {
    "zip": "27559",
    "city": "Moncure"
  },
  {
    "zip": "27562",
    "city": "New Hill"
  },
  {
    "zip": "27563",
    "city": "Norlina"
  },
  {
    "zip": "27571",
    "city": "Rolesville"
  },
  {
    "zip": "27572",
    "city": "Rougemont"
  },
  {
    "zip": "27573",
    "city": "Roxboro"
  },
  {
    "zip": "27576",
    "city": "Selma"
  },
  {
    "zip": "27581",
    "city": "Stem"
  },
  {
    "zip": "27583",
    "city": "Timberlake"
  },
  {
    "zip": "27587",
    "city": "Wake Forest"
  },
  {
    "zip": "27592",
    "city": "Willow Spring"
  },
  {
    "zip": "27597",
    "city": "Zebulon"
  },
  {
    "zip": "27601",
    "city": "Raleigh"
  },
  {
    "zip": "27805",
    "city": "Aulander"
  },
  {
    "zip": "27807",
    "city": "Bailey"
  },
  {
    "zip": "27809",
    "city": "Battleboro"
  },
  {
    "zip": "27810",
    "city": "Belhaven"
  },
  {
    "zip": "27814",
    "city": "Blounts Creek"
  },
  {
    "zip": "27816",
    "city": "Castalia"
  },
  {
    "zip": "27817",
    "city": "Chocowinity"
  },
  {
    "zip": "27818",
    "city": "Como"
  },
  {
    "zip": "27821",
    "city": "Edward"
  },
  {
    "zip": "27822",
    "city": "Elm City"
  },
  {
    "zip": "27824",
    "city": "Engelhard"
  },
  {
    "zip": "27829",
    "city": "Fountain"
  },
  {
    "zip": "27831",
    "city": "Garysburg"
  },
  {
    "zip": "27832",
    "city": "Gaston"
  },
  {
    "zip": "27837",
    "city": "Grimesland"
  },
  {
    "zip": "27843",
    "city": "Hobgood"
  },
  {
    "zip": "27844",
    "city": "Hollister"
  },
  {
    "zip": "27847",
    "city": "Kelford"
  },
  {
    "zip": "27849",
    "city": "Lewiston Woodville"
  },
  {
    "zip": "27851",
    "city": "Lucama"
  },
  {
    "zip": "27852",
    "city": "Macclesfield"
  },
  {
    "zip": "27853",
    "city": "Margarettsville"
  },
  {
    "zip": "27854",
    "city": "Milwaukee"
  },
  {
    "zip": "27855",
    "city": "Murfreesboro"
  },
  {
    "zip": "27856",
    "city": "Nashville"
  },
  {
    "zip": "27857",
    "city": "Oak City"
  },
  {
    "zip": "27860",
    "city": "Pantego"
  },
  {
    "zip": "27862",
    "city": "Pendleton"
  },
  {
    "zip": "27863",
    "city": "Pikeville"
  },
  {
    "zip": "27864",
    "city": "Pinetops"
  },
  {
    "zip": "27865",
    "city": "Pinetown"
  },
  {
    "zip": "27866",
    "city": "Pleasant Hill"
  },
  {
    "zip": "27869",
    "city": "Rich Square"
  },
  {
    "zip": "27870",
    "city": "Roanoke Rapids"
  },
  {
    "zip": "27871",
    "city": "Robersonville"
  },
  {
    "zip": "27872",
    "city": "Roxobel"
  },
  {
    "zip": "27874",
    "city": "Scotland Neck"
  },
  {
    "zip": "27876",
    "city": "Seaboard"
  },
  {
    "zip": "27880",
    "city": "Sims"
  },
  {
    "zip": "27882",
    "city": "Spring Hope"
  },
  {
    "zip": "27883",
    "city": "Stantonsburg"
  },
  {
    "zip": "27884",
    "city": "Stokes"
  },
  {
    "zip": "27885",
    "city": "Swanquarter"
  },
  {
    "zip": "27886",
    "city": "Tarboro"
  },
  {
    "zip": "27888",
    "city": "Walstonburg"
  },
  {
    "zip": "27890",
    "city": "Weldon"
  },
  {
    "zip": "27891",
    "city": "Whitakers"
  },
  {
    "zip": "27892",
    "city": "Williamston"
  },
  {
    "zip": "27909",
    "city": "Elizabeth City"
  },
  {
    "zip": "27910",
    "city": "Ahoskie"
  },
  {
    "zip": "27916",
    "city": "Aydlett"
  },
  {
    "zip": "27917",
    "city": "Barco"
  },
  {
    "zip": "27922",
    "city": "Cofield"
  },
  {
    "zip": "27923",
    "city": "Coinjock"
  },
  {
    "zip": "27924",
    "city": "Colerain"
  },
  {
    "zip": "27926",
    "city": "Corapeake"
  },
  {
    "zip": "27927",
    "city": "Corolla"
  },
  {
    "zip": "27928",
    "city": "Creswell"
  },
  {
    "zip": "27929",
    "city": "Currituck"
  },
  {
    "zip": "27932",
    "city": "Edenton"
  },
  {
    "zip": "27935",
    "city": "Eure"
  },
  {
    "zip": "27937",
    "city": "Gates"
  },
  {
    "zip": "27938",
    "city": "Gatesville"
  },
  {
    "zip": "27939",
    "city": "Grandy"
  },
  {
    "zip": "27941",
    "city": "Harbinger"
  },
  {
    "zip": "27942",
    "city": "Harrellsville"
  },
  {
    "zip": "27944",
    "city": "Hertford"
  },
  {
    "zip": "27946",
    "city": "Hobbsville"
  },
  {
    "zip": "27947",
    "city": "Jarvisburg"
  },
  {
    "zip": "27948",
    "city": "Kill Devil Hills"
  },
  {
    "zip": "27949",
    "city": "Kitty Hawk"
  },
  {
    "zip": "27950",
    "city": "Knotts Island"
  },
  {
    "zip": "27953",
    "city": "Manns Harbor"
  },
  {
    "zip": "27954",
    "city": "Manteo"
  },
  {
    "zip": "27956",
    "city": "Maple"
  },
  {
    "zip": "27957",
    "city": "Merry Hill"
  },
  {
    "zip": "27958",
    "city": "Moyock"
  },
  {
    "zip": "27959",
    "city": "Nags Head"
  },
  {
    "zip": "27964",
    "city": "Point Harbor"
  },
  {
    "zip": "27965",
    "city": "Poplar Branch"
  },
  {
    "zip": "27966",
    "city": "Powells Point"
  },
  {
    "zip": "27970",
    "city": "Roper"
  },
  {
    "zip": "27973",
    "city": "Shawboro"
  },
  {
    "zip": "27974",
    "city": "Shiloh"
  },
  {
    "zip": "27976",
    "city": "South Mills"
  },
  {
    "zip": "27978",
    "city": "Stumpy Point"
  },
  {
    "zip": "27980",
    "city": "Tyner"
  },
  {
    "zip": "27981",
    "city": "Wanchese"
  },
  {
    "zip": "27986",
    "city": "Winton"
  },
  {
    "zip": "28001",
    "city": "Albemarle"
  },
  {
    "zip": "28006",
    "city": "Alexis"
  },
  {
    "zip": "28016",
    "city": "Bessemer City"
  },
  {
    "zip": "28018",
    "city": "Bostic"
  },
  {
    "zip": "28020",
    "city": "Casar"
  },
  {
    "zip": "28023",
    "city": "China Grove"
  },
  {
    "zip": "28031",
    "city": "Cornelius"
  },
  {
    "zip": "28032",
    "city": "Cramerton"
  },
  {
    "zip": "28033",
    "city": "Crouse"
  },
  {
    "zip": "28035",
    "city": "Davidson"
  },
  {
    "zip": "28052",
    "city": "Gastonia"
  },
  {
    "zip": "28071",
    "city": "Gold Hill"
  },
  {
    "zip": "28073",
    "city": "Grover"
  },
  {
    "zip": "28078",
    "city": "Huntersville"
  },
  {
    "zip": "28079",
    "city": "Indian Trail"
  },
  {
    "zip": "28080",
    "city": "Iron Station"
  },
  {
    "zip": "28081",
    "city": "Kannapolis"
  },
  {
    "zip": "28086",
    "city": "Kings Mountain"
  },
  {
    "zip": "28088",
    "city": "Landis"
  },
  {
    "zip": "28090",
    "city": "Lawndale"
  },
  {
    "zip": "28091",
    "city": "Lilesville"
  },
  {
    "zip": "28092",
    "city": "Lincolnton"
  },
  {
    "zip": "28097",
    "city": "Locust"
  },
  {
    "zip": "28101",
    "city": "Mc Adenville"
  },
  {
    "zip": "28103",
    "city": "Marshville"
  },
  {
    "zip": "28104",
    "city": "Matthews"
  },
  {
    "zip": "28114",
    "city": "Mooresboro"
  },
  {
    "zip": "28115",
    "city": "Mooresville"
  },
  {
    "zip": "28119",
    "city": "Morven"
  },
  {
    "zip": "28125",
    "city": "Mount Ulla"
  },
  {
    "zip": "28129",
    "city": "Oakboro"
  },
  {
    "zip": "28133",
    "city": "Peachland"
  },
  {
    "zip": "28135",
    "city": "Polkton"
  },
  {
    "zip": "28138",
    "city": "Rockwell"
  },
  {
    "zip": "28139",
    "city": "Rutherfordton"
  },
  {
    "zip": "28150",
    "city": "Shelby"
  },
  {
    "zip": "28160",
    "city": "Spindale"
  },
  {
    "zip": "28163",
    "city": "Stanfield"
  },
  {
    "zip": "28166",
    "city": "Troutman"
  },
  {
    "zip": "28167",
    "city": "Union Mills"
  },
  {
    "zip": "28168",
    "city": "Vale"
  },
  {
    "zip": "28170",
    "city": "Wadesboro"
  },
  {
    "zip": "28173",
    "city": "Waxhaw"
  },
  {
    "zip": "28307",
    "city": "Fort Bragg"
  },
  {
    "zip": "28308",
    "city": "Pope Army Airfield"
  },
  {
    "zip": "28318",
    "city": "Autryville"
  },
  {
    "zip": "28320",
    "city": "Bladenboro"
  },
  {
    "zip": "28323",
    "city": "Bunnlevel"
  },
  {
    "zip": "28334",
    "city": "Dunn"
  },
  {
    "zip": "28338",
    "city": "Ellerbe"
  },
  {
    "zip": "28339",
    "city": "Erwin"
  },
  {
    "zip": "28341",
    "city": "Faison"
  },
  {
    "zip": "28343",
    "city": "Gibson"
  },
  {
    "zip": "28344",
    "city": "Godwin"
  },
  {
    "zip": "28345",
    "city": "Hamlet"
  },
  {
    "zip": "28347",
    "city": "Hoffman"
  },
  {
    "zip": "28348",
    "city": "Hope Mills"
  },
  {
    "zip": "28349",
    "city": "Kenansville"
  },
  {
    "zip": "28351",
    "city": "Laurel Hill"
  },
  {
    "zip": "28352",
    "city": "Laurinburg"
  },
  {
    "zip": "28357",
    "city": "Lumber Bridge"
  },
  {
    "zip": "28363",
    "city": "Marston"
  },
  {
    "zip": "28364",
    "city": "Maxton"
  },
  {
    "zip": "28365",
    "city": "Mount Olive"
  },
  {
    "zip": "28366",
    "city": "Newton Grove"
  },
  {
    "zip": "28369",
    "city": "Orrum"
  },
  {
    "zip": "28373",
    "city": "Pinebluff"
  },
  {
    "zip": "28374",
    "city": "Pinehurst"
  },
  {
    "zip": "28376",
    "city": "Raeford"
  },
  {
    "zip": "28377",
    "city": "Red Springs"
  },
  {
    "zip": "28379",
    "city": "Rockingham"
  },
  {
    "zip": "28382",
    "city": "Roseboro"
  },
  {
    "zip": "28383",
    "city": "Rowland"
  },
  {
    "zip": "28384",
    "city": "Saint Pauls"
  },
  {
    "zip": "28385",
    "city": "Salemburg"
  },
  {
    "zip": "28386",
    "city": "Shannon"
  },
  {
    "zip": "28387",
    "city": "Southern Pines"
  },
  {
    "zip": "28391",
    "city": "Stedman"
  },
  {
    "zip": "28392",
    "city": "Tar Heel"
  },
  {
    "zip": "28393",
    "city": "Turkey"
  },
  {
    "zip": "28394",
    "city": "Vass"
  },
  {
    "zip": "28395",
    "city": "Wade"
  },
  {
    "zip": "28396",
    "city": "Wagram"
  },
  {
    "zip": "28420",
    "city": "Ash"
  },
  {
    "zip": "28422",
    "city": "Bolivia"
  },
  {
    "zip": "28425",
    "city": "Burgaw"
  },
  {
    "zip": "28428",
    "city": "Carolina Beach"
  },
  {
    "zip": "28429",
    "city": "Castle Hayne"
  },
  {
    "zip": "28430",
    "city": "Cerro Gordo"
  },
  {
    "zip": "28431",
    "city": "Chadbourn"
  },
  {
    "zip": "28433",
    "city": "Clarkton"
  },
  {
    "zip": "28434",
    "city": "Council"
  },
  {
    "zip": "28435",
    "city": "Currie"
  },
  {
    "zip": "28436",
    "city": "Delco"
  },
  {
    "zip": "28438",
    "city": "Evergreen"
  },
  {
    "zip": "28439",
    "city": "Fair Bluff"
  },
  {
    "zip": "28442",
    "city": "Hallsboro"
  },
  {
    "zip": "28444",
    "city": "Harrells"
  },
  {
    "zip": "28445",
    "city": "Holly Ridge"
  },
  {
    "zip": "28448",
    "city": "Kelly"
  },
  {
    "zip": "28449",
    "city": "Kure Beach"
  },
  {
    "zip": "28450",
    "city": "Lake Waccamaw"
  },
  {
    "zip": "28451",
    "city": "Leland"
  },
  {
    "zip": "28452",
    "city": "Longwood"
  },
  {
    "zip": "28454",
    "city": "Maple Hill"
  },
  {
    "zip": "28455",
    "city": "Nakina"
  },
  {
    "zip": "28456",
    "city": "Riegelwood"
  },
  {
    "zip": "28460",
    "city": "Sneads Ferry"
  },
  {
    "zip": "28462",
    "city": "Supply"
  },
  {
    "zip": "28463",
    "city": "Tabor City"
  },
  {
    "zip": "28464",
    "city": "Teachey"
  },
  {
    "zip": "28465",
    "city": "Oak Island"
  },
  {
    "zip": "28467",
    "city": "Calabash"
  },
  {
    "zip": "28468",
    "city": "Sunset Beach"
  },
  {
    "zip": "28469",
    "city": "Ocean Isle Beach"
  },
  {
    "zip": "28470",
    "city": "Shallotte"
  },
  {
    "zip": "28472",
    "city": "Whiteville"
  },
  {
    "zip": "28478",
    "city": "Willard"
  },
  {
    "zip": "28479",
    "city": "Winnabow"
  },
  {
    "zip": "28480",
    "city": "Wrightsville Beach"
  },
  {
    "zip": "28501",
    "city": "Kinston"
  },
  {
    "zip": "28510",
    "city": "Arapahoe"
  },
  {
    "zip": "28513",
    "city": "Ayden"
  },
  {
    "zip": "28515",
    "city": "Bayboro"
  },
  {
    "zip": "28516",
    "city": "Beaufort"
  },
  {
    "zip": "28518",
    "city": "Beulaville"
  },
  {
    "zip": "28520",
    "city": "Cedar Island"
  },
  {
    "zip": "28521",
    "city": "Chinquapin"
  },
  {
    "zip": "28523",
    "city": "Cove City"
  },
  {
    "zip": "28525",
    "city": "Deep Run"
  },
  {
    "zip": "28527",
    "city": "Ernul"
  },
  {
    "zip": "28529",
    "city": "Grantsboro"
  },
  {
    "zip": "28530",
    "city": "Grifton"
  },
  {
    "zip": "28531",
    "city": "Harkers Island"
  },
  {
    "zip": "28532",
    "city": "Havelock"
  },
  {
    "zip": "28533",
    "city": "Cherry Point"
  },
  {
    "zip": "28537",
    "city": "Hobucken"
  },
  {
    "zip": "28538",
    "city": "Hookerton"
  },
  {
    "zip": "28539",
    "city": "Hubert"
  },
  {
    "zip": "28543",
    "city": "Tarawa Terrace"
  },
  {
    "zip": "28544",
    "city": "Midway Park"
  },
  {
    "zip": "28545",
    "city": "Mccutcheon Field"
  },
  {
    "zip": "28547",
    "city": "Camp Lejeune"
  },
  {
    "zip": "28551",
    "city": "La Grange"
  },
  {
    "zip": "28552",
    "city": "Lowland"
  },
  {
    "zip": "28553",
    "city": "Marshallberg"
  },
  {
    "zip": "28556",
    "city": "Merritt"
  },
  {
    "zip": "28557",
    "city": "Morehead City"
  },
  {
    "zip": "28560",
    "city": "New Bern"
  },
  {
    "zip": "28571",
    "city": "Oriental"
  },
  {
    "zip": "28572",
    "city": "Pink Hill"
  },
  {
    "zip": "28573",
    "city": "Pollocksville"
  },
  {
    "zip": "28577",
    "city": "Sealevel"
  },
  {
    "zip": "28578",
    "city": "Seven Springs"
  },
  {
    "zip": "28581",
    "city": "Stacy"
  },
  {
    "zip": "28582",
    "city": "Stella"
  },
  {
    "zip": "28584",
    "city": "Swansboro"
  },
  {
    "zip": "28586",
    "city": "Vanceboro"
  },
  {
    "zip": "28587",
    "city": "Vandemere"
  },
  {
    "zip": "28590",
    "city": "Winterville"
  },
  {
    "zip": "28594",
    "city": "Emerald Isle"
  },
  {
    "zip": "28604",
    "city": "Banner Elk"
  },
  {
    "zip": "28605",
    "city": "Blowing Rock"
  },
  {
    "zip": "28606",
    "city": "Boomer"
  },
  {
    "zip": "28607",
    "city": "Boone"
  },
  {
    "zip": "28611",
    "city": "Collettsville"
  },
  {
    "zip": "28612",
    "city": "Connellys Springs"
  },
  {
    "zip": "28613",
    "city": "Conover"
  },
  {
    "zip": "28617",
    "city": "Crumpler"
  },
  {
    "zip": "28618",
    "city": "Deep Gap"
  },
  {
    "zip": "28621",
    "city": "Elkin"
  },
  {
    "zip": "28622",
    "city": "Elk Park"
  },
  {
    "zip": "28623",
    "city": "Ennice"
  },
  {
    "zip": "28624",
    "city": "Ferguson"
  },
  {
    "zip": "28625",
    "city": "Statesville"
  },
  {
    "zip": "28627",
    "city": "Glade Valley"
  },
  {
    "zip": "28629",
    "city": "Glendale Springs"
  },
  {
    "zip": "28630",
    "city": "Granite Falls"
  },
  {
    "zip": "28631",
    "city": "Grassy Creek"
  },
  {
    "zip": "28635",
    "city": "Hays"
  },
  {
    "zip": "28636",
    "city": "Hiddenite"
  },
  {
    "zip": "28637",
    "city": "Hildebran"
  },
  {
    "zip": "28644",
    "city": "Laurel Springs"
  },
  {
    "zip": "28645",
    "city": "Lenoir"
  },
  {
    "zip": "28649",
    "city": "Mc Grady"
  },
  {
    "zip": "28650",
    "city": "Maiden"
  },
  {
    "zip": "28651",
    "city": "Millers Creek"
  },
  {
    "zip": "28654",
    "city": "Moravian Falls"
  },
  {
    "zip": "28655",
    "city": "Morganton"
  },
  {
    "zip": "28657",
    "city": "Newland"
  },
  {
    "zip": "28659",
    "city": "North Wilkesboro"
  },
  {
    "zip": "28660",
    "city": "Olin"
  },
  {
    "zip": "28663",
    "city": "Piney Creek"
  },
  {
    "zip": "28665",
    "city": "Purlear"
  },
  {
    "zip": "28668",
    "city": "Roaring Gap"
  },
  {
    "zip": "28669",
    "city": "Roaring River"
  },
  {
    "zip": "28670",
    "city": "Ronda"
  },
  {
    "zip": "28672",
    "city": "Scottville"
  },
  {
    "zip": "28673",
    "city": "Sherrills Ford"
  },
  {
    "zip": "28676",
    "city": "State Road"
  },
  {
    "zip": "28681",
    "city": "Taylorsville"
  },
  {
    "zip": "28682",
    "city": "Terrell"
  },
  {
    "zip": "28685",
    "city": "Traphill"
  },
  {
    "zip": "28689",
    "city": "Union Grove"
  },
  {
    "zip": "28690",
    "city": "Valdese"
  },
  {
    "zip": "28692",
    "city": "Vilas"
  },
  {
    "zip": "28693",
    "city": "Warrensville"
  },
  {
    "zip": "28694",
    "city": "West Jefferson"
  },
  {
    "zip": "28697",
    "city": "Wilkesboro"
  },
  {
    "zip": "28698",
    "city": "Zionville"
  },
  {
    "zip": "28704",
    "city": "Arden"
  },
  {
    "zip": "28705",
    "city": "Bakersville"
  },
  {
    "zip": "28708",
    "city": "Balsam Grove"
  },
  {
    "zip": "28709",
    "city": "Barnardsville"
  },
  {
    "zip": "28711",
    "city": "Black Mountain"
  },
  {
    "zip": "28712",
    "city": "Brevard"
  },
  {
    "zip": "28713",
    "city": "Bryson City"
  },
  {
    "zip": "28715",
    "city": "Candler"
  },
  {
    "zip": "28717",
    "city": "Cashiers"
  },
  {
    "zip": "28718",
    "city": "Cedar Mountain"
  },
  {
    "zip": "28719",
    "city": "Cherokee"
  },
  {
    "zip": "28723",
    "city": "Cullowhee"
  },
  {
    "zip": "28726",
    "city": "East Flat Rock"
  },
  {
    "zip": "28729",
    "city": "Etowah"
  },
  {
    "zip": "28731",
    "city": "Flat Rock"
  },
  {
    "zip": "28732",
    "city": "Fletcher"
  },
  {
    "zip": "28733",
    "city": "Fontana Dam"
  },
  {
    "zip": "28735",
    "city": "Gerton"
  },
  {
    "zip": "28739",
    "city": "Hendersonville"
  },
  {
    "zip": "28740",
    "city": "Green Mountain"
  },
  {
    "zip": "28742",
    "city": "Horse Shoe"
  },
  {
    "zip": "28745",
    "city": "Lake Junaluska"
  },
  {
    "zip": "28746",
    "city": "Lake Lure"
  },
  {
    "zip": "28747",
    "city": "Lake Toxaway"
  },
  {
    "zip": "28751",
    "city": "Maggie Valley"
  },
  {
    "zip": "28756",
    "city": "Mill Spring"
  },
  {
    "zip": "28759",
    "city": "Mills River"
  },
  {
    "zip": "28762",
    "city": "Old Fort"
  },
  {
    "zip": "28763",
    "city": "Otto"
  },
  {
    "zip": "28766",
    "city": "Penrose"
  },
  {
    "zip": "28768",
    "city": "Pisgah Forest"
  },
  {
    "zip": "28771",
    "city": "Robbinsville"
  },
  {
    "zip": "28772",
    "city": "Rosman"
  },
  {
    "zip": "28774",
    "city": "Sapphire"
  },
  {
    "zip": "28775",
    "city": "Scaly Mountain"
  },
  {
    "zip": "28777",
    "city": "Spruce Pine"
  },
  {
    "zip": "28778",
    "city": "Swannanoa"
  },
  {
    "zip": "28779",
    "city": "Sylva"
  },
  {
    "zip": "28782",
    "city": "Tryon"
  },
  {
    "zip": "28783",
    "city": "Tuckasegee"
  },
  {
    "zip": "28785",
    "city": "Waynesville"
  },
  {
    "zip": "28787",
    "city": "Weaverville"
  },
  {
    "zip": "28789",
    "city": "Whittier"
  },
  {
    "zip": "28790",
    "city": "Zirconia"
  },
  {
    "zip": "28801",
    "city": "Asheville"
  },
  {
    "zip": "28901",
    "city": "Andrews"
  },
  {
    "zip": "28902",
    "city": "Brasstown"
  },
  {
    "zip": "28904",
    "city": "Hayesville"
  },
  {
    "zip": "28906",
    "city": "Murphy"
  },
  {
    "zip": "28909",
    "city": "Warne"
  },
  {
    "zip": "29001",
    "city": "Alcolu"
  },
  {
    "zip": "29003",
    "city": "Bamberg"
  },
  {
    "zip": "29006",
    "city": "Batesburg"
  },
  {
    "zip": "29009",
    "city": "Bethune"
  },
  {
    "zip": "29014",
    "city": "Blackstock"
  },
  {
    "zip": "29015",
    "city": "Blair"
  },
  {
    "zip": "29016",
    "city": "Blythewood"
  },
  {
    "zip": "29018",
    "city": "Bowman"
  },
  {
    "zip": "29032",
    "city": "Cassatt"
  },
  {
    "zip": "29033",
    "city": "Cayce"
  },
  {
    "zip": "29036",
    "city": "Chapin"
  },
  {
    "zip": "29037",
    "city": "Chappells"
  },
  {
    "zip": "29038",
    "city": "Cope"
  },
  {
    "zip": "29040",
    "city": "Dalzell"
  },
  {
    "zip": "29044",
    "city": "Eastover"
  },
  {
    "zip": "29045",
    "city": "Elgin"
  },
  {
    "zip": "29047",
    "city": "Elloree"
  },
  {
    "zip": "29048",
    "city": "Eutawville"
  },
  {
    "zip": "29051",
    "city": "Gable"
  },
  {
    "zip": "29052",
    "city": "Gadsden"
  },
  {
    "zip": "29056",
    "city": "Greeleyville"
  },
  {
    "zip": "29058",
    "city": "Heath Springs"
  },
  {
    "zip": "29059",
    "city": "Holly Hill"
  },
  {
    "zip": "29061",
    "city": "Hopkins"
  },
  {
    "zip": "29063",
    "city": "Irmo"
  },
  {
    "zip": "29065",
    "city": "Jenkinsville"
  },
  {
    "zip": "29067",
    "city": "Kershaw"
  },
  {
    "zip": "29069",
    "city": "Lamar"
  },
  {
    "zip": "29070",
    "city": "Leesville"
  },
  {
    "zip": "29075",
    "city": "Little Mountain"
  },
  {
    "zip": "29078",
    "city": "Lugoff"
  },
  {
    "zip": "29081",
    "city": "Ehrhardt"
  },
  {
    "zip": "29082",
    "city": "Lodge"
  },
  {
    "zip": "29101",
    "city": "Mc Bee"
  },
  {
    "zip": "29102",
    "city": "Manning"
  },
  {
    "zip": "29104",
    "city": "Mayesville"
  },
  {
    "zip": "29105",
    "city": "Monetta"
  },
  {
    "zip": "29107",
    "city": "Neeses"
  },
  {
    "zip": "29108",
    "city": "Newberry"
  },
  {
    "zip": "29111",
    "city": "New Zion"
  },
  {
    "zip": "29123",
    "city": "Pelion"
  },
  {
    "zip": "29125",
    "city": "Pinewood"
  },
  {
    "zip": "29126",
    "city": "Pomaria"
  },
  {
    "zip": "29128",
    "city": "Rembert"
  },
  {
    "zip": "29129",
    "city": "Ridge Spring"
  },
  {
    "zip": "29133",
    "city": "Rowesville"
  },
  {
    "zip": "29135",
    "city": "Saint Matthews"
  },
  {
    "zip": "29137",
    "city": "Salley"
  },
  {
    "zip": "29142",
    "city": "Santee"
  },
  {
    "zip": "29145",
    "city": "Silverstreet"
  },
  {
    "zip": "29148",
    "city": "Summerton"
  },
  {
    "zip": "29150",
    "city": "Sumter"
  },
  {
    "zip": "29152",
    "city": "Shaw A F B"
  },
  {
    "zip": "29161",
    "city": "Timmonsville"
  },
  {
    "zip": "29162",
    "city": "Turbeville"
  },
  {
    "zip": "29163",
    "city": "Vance"
  },
  {
    "zip": "29164",
    "city": "Wagener"
  },
  {
    "zip": "29166",
    "city": "Ward"
  },
  {
    "zip": "29168",
    "city": "Wedgefield"
  },
  {
    "zip": "29178",
    "city": "Whitmire"
  },
  {
    "zip": "29180",
    "city": "Winnsboro"
  },
  {
    "zip": "29301",
    "city": "Spartanburg"
  },
  {
    "zip": "29322",
    "city": "Campobello"
  },
  {
    "zip": "29323",
    "city": "Chesnee"
  },
  {
    "zip": "29330",
    "city": "Cowpens"
  },
  {
    "zip": "29332",
    "city": "Cross Hill"
  },
  {
    "zip": "29334",
    "city": "Duncan"
  },
  {
    "zip": "29335",
    "city": "Enoree"
  },
  {
    "zip": "29340",
    "city": "Gaffney"
  },
  {
    "zip": "29349",
    "city": "Inman"
  },
  {
    "zip": "29351",
    "city": "Joanna"
  },
  {
    "zip": "29355",
    "city": "Kinards"
  },
  {
    "zip": "29356",
    "city": "Landrum"
  },
  {
    "zip": "29365",
    "city": "Lyman"
  },
  {
    "zip": "29369",
    "city": "Moore"
  },
  {
    "zip": "29372",
    "city": "Pacolet"
  },
  {
    "zip": "29374",
    "city": "Pauline"
  },
  {
    "zip": "29376",
    "city": "Roebuck"
  },
  {
    "zip": "29385",
    "city": "Wellford"
  },
  {
    "zip": "29388",
    "city": "Woodruff"
  },
  {
    "zip": "29404",
    "city": "Charleston Afb"
  },
  {
    "zip": "29405",
    "city": "North Charleston"
  },
  {
    "zip": "29410",
    "city": "Hanahan"
  },
  {
    "zip": "29426",
    "city": "Adams Run"
  },
  {
    "zip": "29429",
    "city": "Awendaw"
  },
  {
    "zip": "29431",
    "city": "Bonneau"
  },
  {
    "zip": "29434",
    "city": "Cordesville"
  },
  {
    "zip": "29436",
    "city": "Cross"
  },
  {
    "zip": "29438",
    "city": "Edisto Island"
  },
  {
    "zip": "29445",
    "city": "Goose Creek"
  },
  {
    "zip": "29446",
    "city": "Green Pond"
  },
  {
    "zip": "29448",
    "city": "Harleyville"
  },
  {
    "zip": "29450",
    "city": "Huger"
  },
  {
    "zip": "29451",
    "city": "Isle Of Palms"
  },
  {
    "zip": "29455",
    "city": "Johns Island"
  },
  {
    "zip": "29456",
    "city": "Ladson"
  },
  {
    "zip": "29458",
    "city": "Mc Clellanville"
  },
  {
    "zip": "29461",
    "city": "Moncks Corner"
  },
  {
    "zip": "29469",
    "city": "Pinopolis"
  },
  {
    "zip": "29470",
    "city": "Ravenel"
  },
  {
    "zip": "29471",
    "city": "Reevesville"
  },
  {
    "zip": "29472",
    "city": "Ridgeville"
  },
  {
    "zip": "29474",
    "city": "Round O"
  },
  {
    "zip": "29477",
    "city": "Saint George"
  },
  {
    "zip": "29479",
    "city": "Saint Stephen"
  },
  {
    "zip": "29481",
    "city": "Smoaks"
  },
  {
    "zip": "29482",
    "city": "Sullivans Island"
  },
  {
    "zip": "29487",
    "city": "Wadmalaw Island"
  },
  {
    "zip": "29488",
    "city": "Walterboro"
  },
  {
    "zip": "29511",
    "city": "Aynor"
  },
  {
    "zip": "29512",
    "city": "Bennettsville"
  },
  {
    "zip": "29516",
    "city": "Blenheim"
  },
  {
    "zip": "29518",
    "city": "Cades"
  },
  {
    "zip": "29520",
    "city": "Cheraw"
  },
  {
    "zip": "29525",
    "city": "Clio"
  },
  {
    "zip": "29530",
    "city": "Coward"
  },
  {
    "zip": "29536",
    "city": "Dillon"
  },
  {
    "zip": "29544",
    "city": "Galivants Ferry"
  },
  {
    "zip": "29545",
    "city": "Green Sea"
  },
  {
    "zip": "29546",
    "city": "Gresham"
  },
  {
    "zip": "29547",
    "city": "Hamer"
  },
  {
    "zip": "29550",
    "city": "Hartsville"
  },
  {
    "zip": "29554",
    "city": "Hemingway"
  },
  {
    "zip": "29556",
    "city": "Kingstree"
  },
  {
    "zip": "29564",
    "city": "Lane"
  },
  {
    "zip": "29565",
    "city": "Latta"
  },
  {
    "zip": "29566",
    "city": "Little River"
  },
  {
    "zip": "29567",
    "city": "Little Rock"
  },
  {
    "zip": "29568",
    "city": "Longs"
  },
  {
    "zip": "29569",
    "city": "Loris"
  },
  {
    "zip": "29570",
    "city": "Mc Coll"
  },
  {
    "zip": "29572",
    "city": "Myrtle Beach"
  },
  {
    "zip": "29574",
    "city": "Mullins"
  },
  {
    "zip": "29576",
    "city": "Murrells Inlet"
  },
  {
    "zip": "29580",
    "city": "Nesmith"
  },
  {
    "zip": "29582",
    "city": "North Myrtle Beach"
  },
  {
    "zip": "29583",
    "city": "Pamplico"
  },
  {
    "zip": "29584",
    "city": "Patrick"
  },
  {
    "zip": "29585",
    "city": "Pawleys Island"
  },
  {
    "zip": "29590",
    "city": "Salters"
  },
  {
    "zip": "29592",
    "city": "Sellers"
  },
  {
    "zip": "29593",
    "city": "Society Hill"
  },
  {
    "zip": "29620",
    "city": "Abbeville"
  },
  {
    "zip": "29621",
    "city": "Anderson"
  },
  {
    "zip": "29627",
    "city": "Belton"
  },
  {
    "zip": "29628",
    "city": "Calhoun Falls"
  },
  {
    "zip": "29630",
    "city": "Central"
  },
  {
    "zip": "29631",
    "city": "Clemson"
  },
  {
    "zip": "29638",
    "city": "Donalds"
  },
  {
    "zip": "29639",
    "city": "Due West"
  },
  {
    "zip": "29640",
    "city": "Easley"
  },
  {
    "zip": "29643",
    "city": "Fair Play"
  },
  {
    "zip": "29644",
    "city": "Fountain Inn"
  },
  {
    "zip": "29645",
    "city": "Gray Court"
  },
  {
    "zip": "29650",
    "city": "Greer"
  },
  {
    "zip": "29653",
    "city": "Hodges"
  },
  {
    "zip": "29654",
    "city": "Honea Path"
  },
  {
    "zip": "29655",
    "city": "Iva"
  },
  {
    "zip": "29658",
    "city": "Long Creek"
  },
  {
    "zip": "29662",
    "city": "Mauldin"
  },
  {
    "zip": "29664",
    "city": "Mountain Rest"
  },
  {
    "zip": "29666",
    "city": "Ninety Six"
  },
  {
    "zip": "29667",
    "city": "Norris"
  },
  {
    "zip": "29669",
    "city": "Pelzer"
  },
  {
    "zip": "29680",
    "city": "Simpsonville"
  },
  {
    "zip": "29682",
    "city": "Six Mile"
  },
  {
    "zip": "29684",
    "city": "Starr"
  },
  {
    "zip": "29686",
    "city": "Tamassee"
  },
  {
    "zip": "29687",
    "city": "Taylors"
  },
  {
    "zip": "29690",
    "city": "Travelers Rest"
  },
  {
    "zip": "29691",
    "city": "Walhalla"
  },
  {
    "zip": "29692",
    "city": "Ware Shoals"
  },
  {
    "zip": "29707",
    "city": "Fort Mill"
  },
  {
    "zip": "29712",
    "city": "Edgemoor"
  },
  {
    "zip": "29714",
    "city": "Fort Lawn"
  },
  {
    "zip": "29717",
    "city": "Hickory Grove"
  },
  {
    "zip": "29726",
    "city": "Mc Connells"
  },
  {
    "zip": "29727",
    "city": "Mount Croghan"
  },
  {
    "zip": "29728",
    "city": "Pageland"
  },
  {
    "zip": "29729",
    "city": "Richburg"
  },
  {
    "zip": "29741",
    "city": "Ruby"
  },
  {
    "zip": "29801",
    "city": "Aiken"
  },
  {
    "zip": "29809",
    "city": "New Ellenton"
  },
  {
    "zip": "29812",
    "city": "Barnwell"
  },
  {
    "zip": "29817",
    "city": "Blackville"
  },
  {
    "zip": "29821",
    "city": "Clarks Hill"
  },
  {
    "zip": "29824",
    "city": "Edgefield"
  },
  {
    "zip": "29828",
    "city": "Gloverville"
  },
  {
    "zip": "29835",
    "city": "Mc Cormick"
  },
  {
    "zip": "29836",
    "city": "Martin"
  },
  {
    "zip": "29838",
    "city": "Modoc"
  },
  {
    "zip": "29841",
    "city": "North Augusta"
  },
  {
    "zip": "29842",
    "city": "Beech Island"
  },
  {
    "zip": "29843",
    "city": "Olar"
  },
  {
    "zip": "29845",
    "city": "Plum Branch"
  },
  {
    "zip": "29849",
    "city": "Ulmer"
  },
  {
    "zip": "29851",
    "city": "Warrenville"
  },
  {
    "zip": "29907",
    "city": "Ladys Island"
  },
  {
    "zip": "29909",
    "city": "Okatie"
  },
  {
    "zip": "29910",
    "city": "Bluffton"
  },
  {
    "zip": "29911",
    "city": "Brunson"
  },
  {
    "zip": "29912",
    "city": "Coosawhatchie"
  },
  {
    "zip": "29915",
    "city": "Daufuskie Island"
  },
  {
    "zip": "29916",
    "city": "Early Branch"
  },
  {
    "zip": "29918",
    "city": "Estill"
  },
  {
    "zip": "29920",
    "city": "Saint Helena Island"
  },
  {
    "zip": "29922",
    "city": "Garnett"
  },
  {
    "zip": "29926",
    "city": "Hilton Head Island"
  },
  {
    "zip": "29927",
    "city": "Hardeeville"
  },
  {
    "zip": "29929",
    "city": "Islandton"
  },
  {
    "zip": "29934",
    "city": "Pineland"
  },
  {
    "zip": "29936",
    "city": "Ridgeland"
  },
  {
    "zip": "29943",
    "city": "Tillman"
  },
  {
    "zip": "29944",
    "city": "Varnville"
  },
  {
    "zip": "29945",
    "city": "Yemassee"
  },
  {
    "zip": "30002",
    "city": "Avondale Estates"
  },
  {
    "zip": "30004",
    "city": "Alpharetta"
  },
  {
    "zip": "30012",
    "city": "Conyers"
  },
  {
    "zip": "30017",
    "city": "Grayson"
  },
  {
    "zip": "30019",
    "city": "Dacula"
  },
  {
    "zip": "30021",
    "city": "Clarkston"
  },
  {
    "zip": "30024",
    "city": "Suwanee"
  },
  {
    "zip": "30025",
    "city": "Social Circle"
  },
  {
    "zip": "30028",
    "city": "Cumming"
  },
  {
    "zip": "30030",
    "city": "Decatur"
  },
  {
    "zip": "30038",
    "city": "Lithonia"
  },
  {
    "zip": "30039",
    "city": "Snellville"
  },
  {
    "zip": "30047",
    "city": "Lilburn"
  },
  {
    "zip": "30052",
    "city": "Loganville"
  },
  {
    "zip": "30056",
    "city": "Newborn"
  },
  {
    "zip": "30071",
    "city": "Norcross"
  },
  {
    "zip": "30075",
    "city": "Roswell"
  },
  {
    "zip": "30083",
    "city": "Stone Mountain"
  },
  {
    "zip": "30084",
    "city": "Tucker"
  },
  {
    "zip": "30096",
    "city": "Duluth"
  },
  {
    "zip": "30103",
    "city": "Adairsville"
  },
  {
    "zip": "30104",
    "city": "Aragon"
  },
  {
    "zip": "30105",
    "city": "Armuchee"
  },
  {
    "zip": "30106",
    "city": "Austell"
  },
  {
    "zip": "30107",
    "city": "Ball Ground"
  },
  {
    "zip": "30108",
    "city": "Bowdon"
  },
  {
    "zip": "30122",
    "city": "Lithia Springs"
  },
  {
    "zip": "30124",
    "city": "Cave Spring"
  },
  {
    "zip": "30125",
    "city": "Cedartown"
  },
  {
    "zip": "30126",
    "city": "Mableton"
  },
  {
    "zip": "30127",
    "city": "Powder Springs"
  },
  {
    "zip": "30134",
    "city": "Douglasville"
  },
  {
    "zip": "30139",
    "city": "Fairmount"
  },
  {
    "zip": "30144",
    "city": "Kennesaw"
  },
  {
    "zip": "30147",
    "city": "Lindale"
  },
  {
    "zip": "30148",
    "city": "Marble Hill"
  },
  {
    "zip": "30153",
    "city": "Rockmart"
  },
  {
    "zip": "30170",
    "city": "Roopville"
  },
  {
    "zip": "30171",
    "city": "Rydal"
  },
  {
    "zip": "30175",
    "city": "Talking Rock"
  },
  {
    "zip": "30176",
    "city": "Tallapoosa"
  },
  {
    "zip": "30177",
    "city": "Tate"
  },
  {
    "zip": "30180",
    "city": "Villa Rica"
  },
  {
    "zip": "30182",
    "city": "Waco"
  },
  {
    "zip": "30183",
    "city": "Waleska"
  },
  {
    "zip": "30185",
    "city": "Whitesburg"
  },
  {
    "zip": "30187",
    "city": "Winston"
  },
  {
    "zip": "30213",
    "city": "Fairburn"
  },
  {
    "zip": "30216",
    "city": "Flovilla"
  },
  {
    "zip": "30223",
    "city": "Griffin"
  },
  {
    "zip": "30230",
    "city": "Hogansville"
  },
  {
    "zip": "30234",
    "city": "Jenkinsburg"
  },
  {
    "zip": "30251",
    "city": "Luthersville"
  },
  {
    "zip": "30252",
    "city": "Mcdonough"
  },
  {
    "zip": "30256",
    "city": "Meansville"
  },
  {
    "zip": "30257",
    "city": "Milner"
  },
  {
    "zip": "30258",
    "city": "Molena"
  },
  {
    "zip": "30259",
    "city": "Moreland"
  },
  {
    "zip": "30260",
    "city": "Morrow"
  },
  {
    "zip": "30263",
    "city": "Newnan"
  },
  {
    "zip": "30268",
    "city": "Palmetto"
  },
  {
    "zip": "30269",
    "city": "Peachtree City"
  },
  {
    "zip": "30273",
    "city": "Rex"
  },
  {
    "zip": "30276",
    "city": "Senoia"
  },
  {
    "zip": "30285",
    "city": "The Rock"
  },
  {
    "zip": "30288",
    "city": "Conley"
  },
  {
    "zip": "30294",
    "city": "Ellenwood"
  },
  {
    "zip": "30297",
    "city": "Forest Park"
  },
  {
    "zip": "30401",
    "city": "Swainsboro"
  },
  {
    "zip": "30410",
    "city": "Ailey"
  },
  {
    "zip": "30411",
    "city": "Alamo"
  },
  {
    "zip": "30415",
    "city": "Brooklet"
  },
  {
    "zip": "30417",
    "city": "Claxton"
  },
  {
    "zip": "30420",
    "city": "Cobbtown"
  },
  {
    "zip": "30427",
    "city": "Glennville"
  },
  {
    "zip": "30434",
    "city": "Louisville"
  },
  {
    "zip": "30439",
    "city": "Metter"
  },
  {
    "zip": "30441",
    "city": "Midville"
  },
  {
    "zip": "30442",
    "city": "Millen"
  },
  {
    "zip": "30450",
    "city": "Portal"
  },
  {
    "zip": "30452",
    "city": "Register"
  },
  {
    "zip": "30454",
    "city": "Rockledge"
  },
  {
    "zip": "30455",
    "city": "Rocky Ford"
  },
  {
    "zip": "30456",
    "city": "Sardis"
  },
  {
    "zip": "30457",
    "city": "Soperton"
  },
  {
    "zip": "30458",
    "city": "Statesboro"
  },
  {
    "zip": "30467",
    "city": "Sylvania"
  },
  {
    "zip": "30471",
    "city": "Twin City"
  },
  {
    "zip": "30473",
    "city": "Uvalda"
  },
  {
    "zip": "30474",
    "city": "Vidalia"
  },
  {
    "zip": "30477",
    "city": "Wadley"
  },
  {
    "zip": "30510",
    "city": "Alto"
  },
  {
    "zip": "30516",
    "city": "Bowersville"
  },
  {
    "zip": "30517",
    "city": "Braselton"
  },
  {
    "zip": "30518",
    "city": "Buford"
  },
  {
    "zip": "30520",
    "city": "Canon"
  },
  {
    "zip": "30521",
    "city": "Carnesville"
  },
  {
    "zip": "30522",
    "city": "Cherry Log"
  },
  {
    "zip": "30523",
    "city": "Clarkesville"
  },
  {
    "zip": "30527",
    "city": "Clermont"
  },
  {
    "zip": "30529",
    "city": "Commerce"
  },
  {
    "zip": "30531",
    "city": "Cornelia"
  },
  {
    "zip": "30533",
    "city": "Dahlonega"
  },
  {
    "zip": "30534",
    "city": "Dawsonville"
  },
  {
    "zip": "30535",
    "city": "Demorest"
  },
  {
    "zip": "30536",
    "city": "Ellijay"
  },
  {
    "zip": "30537",
    "city": "Dillard"
  },
  {
    "zip": "30538",
    "city": "Eastanollee"
  },
  {
    "zip": "30539",
    "city": "East Ellijay"
  },
  {
    "zip": "30541",
    "city": "Epworth"
  },
  {
    "zip": "30542",
    "city": "Flowery Branch"
  },
  {
    "zip": "30543",
    "city": "Gillsville"
  },
  {
    "zip": "30545",
    "city": "Helen"
  },
  {
    "zip": "30546",
    "city": "Hiawassee"
  },
  {
    "zip": "30548",
    "city": "Hoschton"
  },
  {
    "zip": "30552",
    "city": "Lakemont"
  },
  {
    "zip": "30553",
    "city": "Lavonia"
  },
  {
    "zip": "30554",
    "city": "Lula"
  },
  {
    "zip": "30555",
    "city": "Mc Caysville"
  },
  {
    "zip": "30559",
    "city": "Mineral Bluff"
  },
  {
    "zip": "30564",
    "city": "Murrayville"
  },
  {
    "zip": "30567",
    "city": "Pendergrass"
  },
  {
    "zip": "30568",
    "city": "Rabun Gap"
  },
  {
    "zip": "30571",
    "city": "Sautee Nacoochee"
  },
  {
    "zip": "30572",
    "city": "Suches"
  },
  {
    "zip": "30575",
    "city": "Talmo"
  },
  {
    "zip": "30576",
    "city": "Tiger"
  },
  {
    "zip": "30577",
    "city": "Toccoa"
  },
  {
    "zip": "30582",
    "city": "Young Harris"
  },
  {
    "zip": "30619",
    "city": "Arnoldsville"
  },
  {
    "zip": "30621",
    "city": "Bishop"
  },
  {
    "zip": "30622",
    "city": "Bogart"
  },
  {
    "zip": "30625",
    "city": "Buckhead"
  },
  {
    "zip": "30628",
    "city": "Colbert"
  },
  {
    "zip": "30629",
    "city": "Comer"
  },
  {
    "zip": "30631",
    "city": "Crawfordville"
  },
  {
    "zip": "30634",
    "city": "Dewy Rose"
  },
  {
    "zip": "30635",
    "city": "Elberton"
  },
  {
    "zip": "30641",
    "city": "Good Hope"
  },
  {
    "zip": "30643",
    "city": "Hartwell"
  },
  {
    "zip": "30660",
    "city": "Rayle"
  },
  {
    "zip": "30662",
    "city": "Royston"
  },
  {
    "zip": "30663",
    "city": "Rutledge"
  },
  {
    "zip": "30666",
    "city": "Statham"
  },
  {
    "zip": "30667",
    "city": "Stephens"
  },
  {
    "zip": "30668",
    "city": "Tignall"
  },
  {
    "zip": "30669",
    "city": "Union Point"
  },
  {
    "zip": "30677",
    "city": "Watkinsville"
  },
  {
    "zip": "30680",
    "city": "Winder"
  },
  {
    "zip": "30701",
    "city": "Calhoun"
  },
  {
    "zip": "30707",
    "city": "Chickamauga"
  },
  {
    "zip": "30708",
    "city": "Cisco"
  },
  {
    "zip": "30710",
    "city": "Cohutta"
  },
  {
    "zip": "30711",
    "city": "Crandall"
  },
  {
    "zip": "30730",
    "city": "Lyerly"
  },
  {
    "zip": "30731",
    "city": "Menlo"
  },
  {
    "zip": "30735",
    "city": "Resaca"
  },
  {
    "zip": "30738",
    "city": "Rising Fawn"
  },
  {
    "zip": "30739",
    "city": "Rock Spring"
  },
  {
    "zip": "30740",
    "city": "Rocky Face"
  },
  {
    "zip": "30741",
    "city": "Rossville"
  },
  {
    "zip": "30742",
    "city": "Fort Oglethorpe"
  },
  {
    "zip": "30746",
    "city": "Sugar Valley"
  },
  {
    "zip": "30750",
    "city": "Lookout Mountain"
  },
  {
    "zip": "30753",
    "city": "Trion"
  },
  {
    "zip": "30755",
    "city": "Tunnel Hill"
  },
  {
    "zip": "30802",
    "city": "Appling"
  },
  {
    "zip": "30803",
    "city": "Avera"
  },
  {
    "zip": "30805",
    "city": "Blythe"
  },
  {
    "zip": "30808",
    "city": "Dearing"
  },
  {
    "zip": "30813",
    "city": "Grovetown"
  },
  {
    "zip": "30814",
    "city": "Harlem"
  },
  {
    "zip": "30815",
    "city": "Hephzibah"
  },
  {
    "zip": "30820",
    "city": "Mitchell"
  },
  {
    "zip": "30822",
    "city": "Perkins"
  },
  {
    "zip": "30823",
    "city": "Stapleton"
  },
  {
    "zip": "30824",
    "city": "Thomson"
  },
  {
    "zip": "30833",
    "city": "Wrens"
  },
  {
    "zip": "31005",
    "city": "Bonaire"
  },
  {
    "zip": "31007",
    "city": "Byromville"
  },
  {
    "zip": "31009",
    "city": "Cadwell"
  },
  {
    "zip": "31014",
    "city": "Cochran"
  },
  {
    "zip": "31015",
    "city": "Cordele"
  },
  {
    "zip": "31018",
    "city": "Davisboro"
  },
  {
    "zip": "31020",
    "city": "Dry Branch"
  },
  {
    "zip": "31023",
    "city": "Eastman"
  },
  {
    "zip": "31024",
    "city": "Eatonton"
  },
  {
    "zip": "31025",
    "city": "Elko"
  },
  {
    "zip": "31027",
    "city": "East Dublin"
  },
  {
    "zip": "31029",
    "city": "Forsyth"
  },
  {
    "zip": "31033",
    "city": "Haddock"
  },
  {
    "zip": "31036",
    "city": "Hawkinsville"
  },
  {
    "zip": "31037",
    "city": "Helena"
  },
  {
    "zip": "31041",
    "city": "Ideal"
  },
  {
    "zip": "31042",
    "city": "Irwinton"
  },
  {
    "zip": "31045",
    "city": "Jewell"
  },
  {
    "zip": "31046",
    "city": "Juliette"
  },
  {
    "zip": "31047",
    "city": "Kathleen"
  },
  {
    "zip": "31049",
    "city": "Kite"
  },
  {
    "zip": "31052",
    "city": "Lizella"
  },
  {
    "zip": "31054",
    "city": "Mc Intyre"
  },
  {
    "zip": "31055",
    "city": "Mc Rae"
  },
  {
    "zip": "31057",
    "city": "Marshallville"
  },
  {
    "zip": "31058",
    "city": "Mauk"
  },
  {
    "zip": "31061",
    "city": "Milledgeville"
  },
  {
    "zip": "31063",
    "city": "Montezuma"
  },
  {
    "zip": "31066",
    "city": "Musella"
  },
  {
    "zip": "31068",
    "city": "Oglethorpe"
  },
  {
    "zip": "31071",
    "city": "Pineview"
  },
  {
    "zip": "31072",
    "city": "Pitts"
  },
  {
    "zip": "31075",
    "city": "Rentz"
  },
  {
    "zip": "31076",
    "city": "Reynolds"
  },
  {
    "zip": "31077",
    "city": "Rhine"
  },
  {
    "zip": "31078",
    "city": "Roberta"
  },
  {
    "zip": "31082",
    "city": "Sandersville"
  },
  {
    "zip": "31085",
    "city": "Shady Dale"
  },
  {
    "zip": "31088",
    "city": "Warner Robins"
  },
  {
    "zip": "31089",
    "city": "Tennille"
  },
  {
    "zip": "31090",
    "city": "Toomsboro"
  },
  {
    "zip": "31094",
    "city": "Warthen"
  },
  {
    "zip": "31097",
    "city": "Yatesville"
  },
  {
    "zip": "31303",
    "city": "Clyo"
  },
  {
    "zip": "31308",
    "city": "Ellabell"
  },
  {
    "zip": "31309",
    "city": "Fleming"
  },
  {
    "zip": "31312",
    "city": "Guyton"
  },
  {
    "zip": "31313",
    "city": "Hinesville"
  },
  {
    "zip": "31314",
    "city": "Fort Stewart"
  },
  {
    "zip": "31316",
    "city": "Ludowici"
  },
  {
    "zip": "31320",
    "city": "Midway"
  },
  {
    "zip": "31322",
    "city": "Pooler"
  },
  {
    "zip": "31323",
    "city": "Riceboro"
  },
  {
    "zip": "31328",
    "city": "Tybee Island"
  },
  {
    "zip": "31501",
    "city": "Waycross"
  },
  {
    "zip": "31512",
    "city": "Ambrose"
  },
  {
    "zip": "31513",
    "city": "Baxley"
  },
  {
    "zip": "31516",
    "city": "Blackshear"
  },
  {
    "zip": "31519",
    "city": "Broxton"
  },
  {
    "zip": "31522",
    "city": "Saint Simons Island"
  },
  {
    "zip": "31527",
    "city": "Jekyll Island"
  },
  {
    "zip": "31537",
    "city": "Folkston"
  },
  {
    "zip": "31539",
    "city": "Hazlehurst"
  },
  {
    "zip": "31543",
    "city": "Hortense"
  },
  {
    "zip": "31545",
    "city": "Jesup"
  },
  {
    "zip": "31547",
    "city": "Kings Bay"
  },
  {
    "zip": "31548",
    "city": "Kingsland"
  },
  {
    "zip": "31549",
    "city": "Lumber City"
  },
  {
    "zip": "31551",
    "city": "Mershon"
  },
  {
    "zip": "31553",
    "city": "Nahunta"
  },
  {
    "zip": "31554",
    "city": "Nicholls"
  },
  {
    "zip": "31555",
    "city": "Odum"
  },
  {
    "zip": "31560",
    "city": "Screven"
  },
  {
    "zip": "31563",
    "city": "Surrency"
  },
  {
    "zip": "31567",
    "city": "West Green"
  },
  {
    "zip": "31601",
    "city": "Valdosta"
  },
  {
    "zip": "31620",
    "city": "Adel"
  },
  {
    "zip": "31622",
    "city": "Alapaha"
  },
  {
    "zip": "31624",
    "city": "Axson"
  },
  {
    "zip": "31625",
    "city": "Barney"
  },
  {
    "zip": "31630",
    "city": "Du Pont"
  },
  {
    "zip": "31631",
    "city": "Fargo"
  },
  {
    "zip": "31632",
    "city": "Hahira"
  },
  {
    "zip": "31634",
    "city": "Homerville"
  },
  {
    "zip": "31635",
    "city": "Lakeland"
  },
  {
    "zip": "31636",
    "city": "Lake Park"
  },
  {
    "zip": "31641",
    "city": "Naylor"
  },
  {
    "zip": "31642",
    "city": "Pearson"
  },
  {
    "zip": "31643",
    "city": "Quitman"
  },
  {
    "zip": "31645",
    "city": "Ray City"
  },
  {
    "zip": "31647",
    "city": "Sparks"
  },
  {
    "zip": "31648",
    "city": "Statenville"
  },
  {
    "zip": "31650",
    "city": "Willacoochee"
  },
  {
    "zip": "31699",
    "city": "Moody A F B"
  },
  {
    "zip": "31709",
    "city": "Americus"
  },
  {
    "zip": "31711",
    "city": "Andersonville"
  },
  {
    "zip": "31712",
    "city": "Arabi"
  },
  {
    "zip": "31716",
    "city": "Baconton"
  },
  {
    "zip": "31730",
    "city": "Camilla"
  },
  {
    "zip": "31733",
    "city": "Chula"
  },
  {
    "zip": "31735",
    "city": "Cobb"
  },
  {
    "zip": "31738",
    "city": "Coolidge"
  },
  {
    "zip": "31743",
    "city": "De Soto"
  },
  {
    "zip": "31744",
    "city": "Doerun"
  },
  {
    "zip": "31749",
    "city": "Enigma"
  },
  {
    "zip": "31750",
    "city": "Fitzgerald"
  },
  {
    "zip": "31756",
    "city": "Hartsfield"
  },
  {
    "zip": "31764",
    "city": "Leslie"
  },
  {
    "zip": "31765",
    "city": "Meigs"
  },
  {
    "zip": "31768",
    "city": "Moultrie"
  },
  {
    "zip": "31771",
    "city": "Norman Park"
  },
  {
    "zip": "31773",
    "city": "Ochlocknee"
  },
  {
    "zip": "31774",
    "city": "Ocilla"
  },
  {
    "zip": "31775",
    "city": "Omega"
  },
  {
    "zip": "31778",
    "city": "Pavo"
  },
  {
    "zip": "31780",
    "city": "Plains"
  },
  {
    "zip": "31781",
    "city": "Poulan"
  },
  {
    "zip": "31783",
    "city": "Rebecca"
  },
  {
    "zip": "31784",
    "city": "Sale City"
  },
  {
    "zip": "31793",
    "city": "Tifton"
  },
  {
    "zip": "31795",
    "city": "Ty Ty"
  },
  {
    "zip": "31798",
    "city": "Wray"
  },
  {
    "zip": "31801",
    "city": "Box Springs"
  },
  {
    "zip": "31804",
    "city": "Cataula"
  },
  {
    "zip": "31805",
    "city": "Cusseta"
  },
  {
    "zip": "31806",
    "city": "Ellaville"
  },
  {
    "zip": "31807",
    "city": "Ellerslie"
  },
  {
    "zip": "31808",
    "city": "Fortson"
  },
  {
    "zip": "31812",
    "city": "Junction City"
  },
  {
    "zip": "31815",
    "city": "Lumpkin"
  },
  {
    "zip": "31821",
    "city": "Omaha"
  },
  {
    "zip": "31822",
    "city": "Pine Mountain"
  },
  {
    "zip": "31823",
    "city": "Pine Mountain Valley"
  },
  {
    "zip": "31827",
    "city": "Talbotton"
  },
  {
    "zip": "31829",
    "city": "Upatoi"
  },
  {
    "zip": "31831",
    "city": "Waverly Hall"
  },
  {
    "zip": "31905",
    "city": "Fort Benning"
  },
  {
    "zip": "32003",
    "city": "Fleming Island"
  },
  {
    "zip": "32009",
    "city": "Bryceville"
  },
  {
    "zip": "32011",
    "city": "Callahan"
  },
  {
    "zip": "32034",
    "city": "Fernandina Beach"
  },
  {
    "zip": "32038",
    "city": "Fort White"
  },
  {
    "zip": "32040",
    "city": "Glen Saint Mary"
  },
  {
    "zip": "32043",
    "city": "Green Cove Springs"
  },
  {
    "zip": "32046",
    "city": "Hilliard"
  },
  {
    "zip": "32053",
    "city": "Jennings"
  },
  {
    "zip": "32054",
    "city": "Lake Butler"
  },
  {
    "zip": "32058",
    "city": "Lawtey"
  },
  {
    "zip": "32060",
    "city": "Live Oak"
  },
  {
    "zip": "32061",
    "city": "Lulu"
  },
  {
    "zip": "32062",
    "city": "Mc Alpin"
  },
  {
    "zip": "32063",
    "city": "Macclenny"
  },
  {
    "zip": "32065",
    "city": "Orange Park"
  },
  {
    "zip": "32066",
    "city": "Mayo"
  },
  {
    "zip": "32071",
    "city": "O Brien"
  },
  {
    "zip": "32080",
    "city": "Saint Augustine"
  },
  {
    "zip": "32081",
    "city": "Ponte Vedra"
  },
  {
    "zip": "32082",
    "city": "Ponte Vedra Beach"
  },
  {
    "zip": "32083",
    "city": "Raiford"
  },
  {
    "zip": "32087",
    "city": "Sanderson"
  },
  {
    "zip": "32091",
    "city": "Starke"
  },
  {
    "zip": "32094",
    "city": "Wellborn"
  },
  {
    "zip": "32096",
    "city": "White Springs"
  },
  {
    "zip": "32097",
    "city": "Yulee"
  },
  {
    "zip": "32102",
    "city": "Astor"
  },
  {
    "zip": "32110",
    "city": "Bunnell"
  },
  {
    "zip": "32112",
    "city": "Crescent City"
  },
  {
    "zip": "32113",
    "city": "Citra"
  },
  {
    "zip": "32114",
    "city": "Daytona Beach"
  },
  {
    "zip": "32127",
    "city": "Port Orange"
  },
  {
    "zip": "32130",
    "city": "De Leon Springs"
  },
  {
    "zip": "32131",
    "city": "East Palatka"
  },
  {
    "zip": "32134",
    "city": "Fort Mc Coy"
  },
  {
    "zip": "32136",
    "city": "Flagler Beach"
  },
  {
    "zip": "32137",
    "city": "Palm Coast"
  },
  {
    "zip": "32140",
    "city": "Florahome"
  },
  {
    "zip": "32148",
    "city": "Interlachen"
  },
  {
    "zip": "32159",
    "city": "Lady Lake"
  },
  {
    "zip": "32162",
    "city": "The Villages"
  },
  {
    "zip": "32168",
    "city": "New Smyrna Beach"
  },
  {
    "zip": "32174",
    "city": "Ormond Beach"
  },
  {
    "zip": "32177",
    "city": "Palatka"
  },
  {
    "zip": "32179",
    "city": "Ocklawaha"
  },
  {
    "zip": "32180",
    "city": "Pierson"
  },
  {
    "zip": "32181",
    "city": "Pomona Park"
  },
  {
    "zip": "32187",
    "city": "San Mateo"
  },
  {
    "zip": "32189",
    "city": "Satsuma"
  },
  {
    "zip": "32190",
    "city": "Seville"
  },
  {
    "zip": "32193",
    "city": "Welaka"
  },
  {
    "zip": "32195",
    "city": "Weirsdale"
  },
  {
    "zip": "32250",
    "city": "Jacksonville Beach"
  },
  {
    "zip": "32259",
    "city": "Saint Johns"
  },
  {
    "zip": "32266",
    "city": "Neptune Beach"
  },
  {
    "zip": "32301",
    "city": "Tallahassee"
  },
  {
    "zip": "32320",
    "city": "Apalachicola"
  },
  {
    "zip": "32322",
    "city": "Carrabelle"
  },
  {
    "zip": "32324",
    "city": "Chattahoochee"
  },
  {
    "zip": "32328",
    "city": "Eastpoint"
  },
  {
    "zip": "32333",
    "city": "Havana"
  },
  {
    "zip": "32334",
    "city": "Hosford"
  },
  {
    "zip": "32336",
    "city": "Lamont"
  },
  {
    "zip": "32346",
    "city": "Panacea"
  },
  {
    "zip": "32350",
    "city": "Pinetta"
  },
  {
    "zip": "32358",
    "city": "Sopchoppy"
  },
  {
    "zip": "32359",
    "city": "Steinhatchee"
  },
  {
    "zip": "32401",
    "city": "Panama City"
  },
  {
    "zip": "32407",
    "city": "Panama City Beach"
  },
  {
    "zip": "32420",
    "city": "Alford"
  },
  {
    "zip": "32421",
    "city": "Altha"
  },
  {
    "zip": "32423",
    "city": "Bascom"
  },
  {
    "zip": "32424",
    "city": "Blountstown"
  },
  {
    "zip": "32425",
    "city": "Bonifay"
  },
  {
    "zip": "32426",
    "city": "Campbellton"
  },
  {
    "zip": "32427",
    "city": "Caryville"
  },
  {
    "zip": "32428",
    "city": "Chipley"
  },
  {
    "zip": "32431",
    "city": "Cottondale"
  },
  {
    "zip": "32433",
    "city": "Defuniak Springs"
  },
  {
    "zip": "32437",
    "city": "Ebro"
  },
  {
    "zip": "32440",
    "city": "Graceville"
  },
  {
    "zip": "32442",
    "city": "Grand Ridge"
  },
  {
    "zip": "32444",
    "city": "Lynn Haven"
  },
  {
    "zip": "32449",
    "city": "Wewahitchka"
  },
  {
    "zip": "32455",
    "city": "Ponce De Leon"
  },
  {
    "zip": "32456",
    "city": "Port Saint Joe"
  },
  {
    "zip": "32459",
    "city": "Santa Rosa Beach"
  },
  {
    "zip": "32460",
    "city": "Sneads"
  },
  {
    "zip": "32501",
    "city": "Pensacola"
  },
  {
    "zip": "32533",
    "city": "Cantonment"
  },
  {
    "zip": "32535",
    "city": "Century"
  },
  {
    "zip": "32536",
    "city": "Crestview"
  },
  {
    "zip": "32541",
    "city": "Destin"
  },
  {
    "zip": "32542",
    "city": "Eglin Afb"
  },
  {
    "zip": "32544",
    "city": "Hurlburt Field"
  },
  {
    "zip": "32547",
    "city": "Fort Walton Beach"
  },
  {
    "zip": "32550",
    "city": "Miramar Beach"
  },
  {
    "zip": "32561",
    "city": "Gulf Breeze"
  },
  {
    "zip": "32564",
    "city": "Holt"
  },
  {
    "zip": "32566",
    "city": "Navarre"
  },
  {
    "zip": "32568",
    "city": "Mc David"
  },
  {
    "zip": "32569",
    "city": "Mary Esther"
  },
  {
    "zip": "32577",
    "city": "Molino"
  },
  {
    "zip": "32578",
    "city": "Niceville"
  },
  {
    "zip": "32579",
    "city": "Shalimar"
  },
  {
    "zip": "32580",
    "city": "Valparaiso"
  },
  {
    "zip": "32615",
    "city": "Alachua"
  },
  {
    "zip": "32617",
    "city": "Anthony"
  },
  {
    "zip": "32618",
    "city": "Archer"
  },
  {
    "zip": "32619",
    "city": "Bell"
  },
  {
    "zip": "32621",
    "city": "Bronson"
  },
  {
    "zip": "32622",
    "city": "Brooker"
  },
  {
    "zip": "32625",
    "city": "Cedar Key"
  },
  {
    "zip": "32626",
    "city": "Chiefland"
  },
  {
    "zip": "32628",
    "city": "Cross City"
  },
  {
    "zip": "32631",
    "city": "Earleton"
  },
  {
    "zip": "32643",
    "city": "High Springs"
  },
  {
    "zip": "32648",
    "city": "Horseshoe Beach"
  },
  {
    "zip": "32656",
    "city": "Keystone Heights"
  },
  {
    "zip": "32667",
    "city": "Micanopy"
  },
  {
    "zip": "32668",
    "city": "Morriston"
  },
  {
    "zip": "32686",
    "city": "Reddick"
  },
  {
    "zip": "32694",
    "city": "Waldo"
  },
  {
    "zip": "32701",
    "city": "Altamonte Springs"
  },
  {
    "zip": "32703",
    "city": "Apopka"
  },
  {
    "zip": "32707",
    "city": "Casselberry"
  },
  {
    "zip": "32708",
    "city": "Winter Springs"
  },
  {
    "zip": "32709",
    "city": "Christmas"
  },
  {
    "zip": "32713",
    "city": "Debary"
  },
  {
    "zip": "32720",
    "city": "Deland"
  },
  {
    "zip": "32725",
    "city": "Deltona"
  },
  {
    "zip": "32744",
    "city": "Lake Helen"
  },
  {
    "zip": "32746",
    "city": "Lake Mary"
  },
  {
    "zip": "32751",
    "city": "Maitland"
  },
  {
    "zip": "32754",
    "city": "Mims"
  },
  {
    "zip": "32757",
    "city": "Mount Dora"
  },
  {
    "zip": "32763",
    "city": "Orange City"
  },
  {
    "zip": "32764",
    "city": "Osteen"
  },
  {
    "zip": "32765",
    "city": "Oviedo"
  },
  {
    "zip": "32767",
    "city": "Paisley"
  },
  {
    "zip": "32778",
    "city": "Tavares"
  },
  {
    "zip": "32784",
    "city": "Umatilla"
  },
  {
    "zip": "32789",
    "city": "Winter Park"
  },
  {
    "zip": "32798",
    "city": "Zellwood"
  },
  {
    "zip": "32901",
    "city": "Melbourne"
  },
  {
    "zip": "32903",
    "city": "Indialantic"
  },
  {
    "zip": "32905",
    "city": "Palm Bay"
  },
  {
    "zip": "32920",
    "city": "Cape Canaveral"
  },
  {
    "zip": "32922",
    "city": "Cocoa"
  },
  {
    "zip": "32925",
    "city": "Patrick Afb"
  },
  {
    "zip": "32931",
    "city": "Cocoa Beach"
  },
  {
    "zip": "32937",
    "city": "Satellite Beach"
  },
  {
    "zip": "32948",
    "city": "Fellsmere"
  },
  {
    "zip": "32949",
    "city": "Grant"
  },
  {
    "zip": "32950",
    "city": "Malabar"
  },
  {
    "zip": "32951",
    "city": "Melbourne Beach"
  },
  {
    "zip": "32952",
    "city": "Merritt Island"
  },
  {
    "zip": "32958",
    "city": "Sebastian"
  },
  {
    "zip": "32960",
    "city": "Vero Beach"
  },
  {
    "zip": "33004",
    "city": "Dania"
  },
  {
    "zip": "33009",
    "city": "Hallandale"
  },
  {
    "zip": "33010",
    "city": "Hialeah"
  },
  {
    "zip": "33028",
    "city": "Pembroke Pines"
  },
  {
    "zip": "33036",
    "city": "Islamorada"
  },
  {
    "zip": "33037",
    "city": "Key Largo"
  },
  {
    "zip": "33040",
    "city": "Key West"
  },
  {
    "zip": "33042",
    "city": "Summerland Key"
  },
  {
    "zip": "33043",
    "city": "Big Pine Key"
  },
  {
    "zip": "33054",
    "city": "Opa Locka"
  },
  {
    "zip": "33056",
    "city": "Miami Gardens"
  },
  {
    "zip": "33060",
    "city": "Pompano Beach"
  },
  {
    "zip": "33070",
    "city": "Tavernier"
  },
  {
    "zip": "33109",
    "city": "Miami Beach"
  },
  {
    "zip": "33122",
    "city": "Miami"
  },
  {
    "zip": "33149",
    "city": "Key Biscayne"
  },
  {
    "zip": "33160",
    "city": "North Miami Beach"
  },
  {
    "zip": "33301",
    "city": "Fort Lauderdale"
  },
  {
    "zip": "33388",
    "city": "Plantation"
  },
  {
    "zip": "33401",
    "city": "West Palm Beach"
  },
  {
    "zip": "33408",
    "city": "North Palm Beach"
  },
  {
    "zip": "33410",
    "city": "Palm Beach Gardens"
  },
  {
    "zip": "33414",
    "city": "Wellington"
  },
  {
    "zip": "33426",
    "city": "Boynton Beach"
  },
  {
    "zip": "33428",
    "city": "Boca Raton"
  },
  {
    "zip": "33430",
    "city": "Belle Glade"
  },
  {
    "zip": "33438",
    "city": "Canal Point"
  },
  {
    "zip": "33440",
    "city": "Clewiston"
  },
  {
    "zip": "33441",
    "city": "Deerfield Beach"
  },
  {
    "zip": "33444",
    "city": "Delray Beach"
  },
  {
    "zip": "33449",
    "city": "Lake Worth"
  },
  {
    "zip": "33455",
    "city": "Hobe Sound"
  },
  {
    "zip": "33458",
    "city": "Jupiter"
  },
  {
    "zip": "33470",
    "city": "Loxahatchee"
  },
  {
    "zip": "33471",
    "city": "Moore Haven"
  },
  {
    "zip": "33476",
    "city": "Pahokee"
  },
  {
    "zip": "33480",
    "city": "Palm Beach"
  },
  {
    "zip": "33493",
    "city": "South Bay"
  },
  {
    "zip": "33513",
    "city": "Bushnell"
  },
  {
    "zip": "33514",
    "city": "Center Hill"
  },
  {
    "zip": "33523",
    "city": "Dade City"
  },
  {
    "zip": "33534",
    "city": "Gibsonton"
  },
  {
    "zip": "33538",
    "city": "Lake Panasoffkee"
  },
  {
    "zip": "33540",
    "city": "Zephyrhills"
  },
  {
    "zip": "33543",
    "city": "Wesley Chapel"
  },
  {
    "zip": "33547",
    "city": "Lithia"
  },
  {
    "zip": "33548",
    "city": "Lutz"
  },
  {
    "zip": "33563",
    "city": "Plant City"
  },
  {
    "zip": "33569",
    "city": "Riverview"
  },
  {
    "zip": "33570",
    "city": "Ruskin"
  },
  {
    "zip": "33572",
    "city": "Apollo Beach"
  },
  {
    "zip": "33573",
    "city": "Sun City Center"
  },
  {
    "zip": "33584",
    "city": "Seffner"
  },
  {
    "zip": "33585",
    "city": "Sumterville"
  },
  {
    "zip": "33592",
    "city": "Thonotosassa"
  },
  {
    "zip": "33594",
    "city": "Valrico"
  },
  {
    "zip": "33598",
    "city": "Wimauma"
  },
  {
    "zip": "33602",
    "city": "Tampa"
  },
  {
    "zip": "33701",
    "city": "Saint Petersburg"
  },
  {
    "zip": "33755",
    "city": "Clearwater"
  },
  {
    "zip": "33767",
    "city": "Clearwater Beach"
  },
  {
    "zip": "33770",
    "city": "Largo"
  },
  {
    "zip": "33781",
    "city": "Pinellas Park"
  },
  {
    "zip": "33785",
    "city": "Indian Rocks Beach"
  },
  {
    "zip": "33786",
    "city": "Belleair Beach"
  },
  {
    "zip": "33825",
    "city": "Avon Park"
  },
  {
    "zip": "33827",
    "city": "Babson Park"
  },
  {
    "zip": "33841",
    "city": "Fort Meade"
  },
  {
    "zip": "33843",
    "city": "Frostproof"
  },
  {
    "zip": "33844",
    "city": "Haines City"
  },
  {
    "zip": "33850",
    "city": "Lake Alfred"
  },
  {
    "zip": "33853",
    "city": "Lake Wales"
  },
  {
    "zip": "33857",
    "city": "Lorida"
  },
  {
    "zip": "33860",
    "city": "Mulberry"
  },
  {
    "zip": "33867",
    "city": "River Ranch"
  },
  {
    "zip": "33868",
    "city": "Polk City"
  },
  {
    "zip": "33870",
    "city": "Sebring"
  },
  {
    "zip": "33873",
    "city": "Wauchula"
  },
  {
    "zip": "33880",
    "city": "Winter Haven"
  },
  {
    "zip": "33890",
    "city": "Zolfo Springs"
  },
  {
    "zip": "33900",
    "city": "Fort Myers"
  },
  {
    "zip": "33903",
    "city": "North Fort Myers"
  },
  {
    "zip": "33904",
    "city": "Cape Coral"
  },
  {
    "zip": "33920",
    "city": "Alva"
  },
  {
    "zip": "33922",
    "city": "Bokeelia"
  },
  {
    "zip": "33928",
    "city": "Estero"
  },
  {
    "zip": "33931",
    "city": "Fort Myers Beach"
  },
  {
    "zip": "33935",
    "city": "Labelle"
  },
  {
    "zip": "33936",
    "city": "Lehigh Acres"
  },
  {
    "zip": "33946",
    "city": "Placida"
  },
  {
    "zip": "33947",
    "city": "Rotonda West"
  },
  {
    "zip": "33948",
    "city": "Port Charlotte"
  },
  {
    "zip": "33950",
    "city": "Punta Gorda"
  },
  {
    "zip": "33956",
    "city": "Saint James City"
  },
  {
    "zip": "33957",
    "city": "Sanibel"
  },
  {
    "zip": "34134",
    "city": "Bonita Springs"
  },
  {
    "zip": "34141",
    "city": "Ochopee"
  },
  {
    "zip": "34142",
    "city": "Immokalee"
  },
  {
    "zip": "34145",
    "city": "Marco Island"
  },
  {
    "zip": "34201",
    "city": "Bradenton"
  },
  {
    "zip": "34215",
    "city": "Cortez"
  },
  {
    "zip": "34217",
    "city": "Bradenton Beach"
  },
  {
    "zip": "34219",
    "city": "Parrish"
  },
  {
    "zip": "34222",
    "city": "Ellenton"
  },
  {
    "zip": "34228",
    "city": "Longboat Key"
  },
  {
    "zip": "34229",
    "city": "Osprey"
  },
  {
    "zip": "34231",
    "city": "Sarasota"
  },
  {
    "zip": "34251",
    "city": "Myakka City"
  },
  {
    "zip": "34266",
    "city": "Arcadia"
  },
  {
    "zip": "34275",
    "city": "Nokomis"
  },
  {
    "zip": "34285",
    "city": "Venice"
  },
  {
    "zip": "34286",
    "city": "North Port"
  },
  {
    "zip": "34420",
    "city": "Belleview"
  },
  {
    "zip": "34428",
    "city": "Crystal River"
  },
  {
    "zip": "34431",
    "city": "Dunnellon"
  },
  {
    "zip": "34436",
    "city": "Floral City"
  },
  {
    "zip": "34442",
    "city": "Hernando"
  },
  {
    "zip": "34446",
    "city": "Homosassa"
  },
  {
    "zip": "34449",
    "city": "Inglis"
  },
  {
    "zip": "34450",
    "city": "Inverness"
  },
  {
    "zip": "34461",
    "city": "Lecanto"
  },
  {
    "zip": "34465",
    "city": "Beverly Hills"
  },
  {
    "zip": "34470",
    "city": "Ocala"
  },
  {
    "zip": "34498",
    "city": "Yankeetown"
  },
  {
    "zip": "34606",
    "city": "Spring Hill"
  },
  {
    "zip": "34637",
    "city": "Land O Lakes"
  },
  {
    "zip": "34652",
    "city": "New Port Richey"
  },
  {
    "zip": "34668",
    "city": "Port Richey"
  },
  {
    "zip": "34677",
    "city": "Oldsmar"
  },
  {
    "zip": "34683",
    "city": "Palm Harbor"
  },
  {
    "zip": "34688",
    "city": "Tarpon Springs"
  },
  {
    "zip": "34690",
    "city": "Holiday"
  },
  {
    "zip": "34695",
    "city": "Safety Harbor"
  },
  {
    "zip": "34698",
    "city": "Dunedin"
  },
  {
    "zip": "34705",
    "city": "Astatula"
  },
  {
    "zip": "34731",
    "city": "Fruitland Park"
  },
  {
    "zip": "34734",
    "city": "Gotha"
  },
  {
    "zip": "34737",
    "city": "Howey In The Hills"
  },
  {
    "zip": "34741",
    "city": "Kissimmee"
  },
  {
    "zip": "34753",
    "city": "Mascotte"
  },
  {
    "zip": "34756",
    "city": "Montverde"
  },
  {
    "zip": "34761",
    "city": "Ocoee"
  },
  {
    "zip": "34762",
    "city": "Okahumpka"
  },
  {
    "zip": "34769",
    "city": "Saint Cloud"
  },
  {
    "zip": "34786",
    "city": "Windermere"
  },
  {
    "zip": "34787",
    "city": "Winter Garden"
  },
  {
    "zip": "34797",
    "city": "Yalaha"
  },
  {
    "zip": "34945",
    "city": "Fort Pierce"
  },
  {
    "zip": "34952",
    "city": "Port Saint Lucie"
  },
  {
    "zip": "34956",
    "city": "Indiantown"
  },
  {
    "zip": "34957",
    "city": "Jensen Beach"
  },
  {
    "zip": "34972",
    "city": "Okeechobee"
  },
  {
    "zip": "34990",
    "city": "Palm City"
  },
  {
    "zip": "35004",
    "city": "Moody"
  },
  {
    "zip": "35006",
    "city": "Adger"
  },
  {
    "zip": "35007",
    "city": "Alabaster"
  },
  {
    "zip": "35010",
    "city": "Alexander City"
  },
  {
    "zip": "35016",
    "city": "Arab"
  },
  {
    "zip": "35019",
    "city": "Baileyton"
  },
  {
    "zip": "35031",
    "city": "Blountsville"
  },
  {
    "zip": "35034",
    "city": "Brent"
  },
  {
    "zip": "35035",
    "city": "Brierfield"
  },
  {
    "zip": "35040",
    "city": "Calera"
  },
  {
    "zip": "35044",
    "city": "Childersburg"
  },
  {
    "zip": "35045",
    "city": "Clanton"
  },
  {
    "zip": "35051",
    "city": "Columbiana"
  },
  {
    "zip": "35053",
    "city": "Crane Hill"
  },
  {
    "zip": "35054",
    "city": "Cropwell"
  },
  {
    "zip": "35055",
    "city": "Cullman"
  },
  {
    "zip": "35061",
    "city": "Dolomite"
  },
  {
    "zip": "35062",
    "city": "Dora"
  },
  {
    "zip": "35063",
    "city": "Empire"
  },
  {
    "zip": "35068",
    "city": "Fultondale"
  },
  {
    "zip": "35071",
    "city": "Gardendale"
  },
  {
    "zip": "35072",
    "city": "Goodwater"
  },
  {
    "zip": "35077",
    "city": "Hanceville"
  },
  {
    "zip": "35078",
    "city": "Harpersville"
  },
  {
    "zip": "35079",
    "city": "Hayden"
  },
  {
    "zip": "35083",
    "city": "Holly Pond"
  },
  {
    "zip": "35085",
    "city": "Jemison"
  },
  {
    "zip": "35089",
    "city": "Kellyton"
  },
  {
    "zip": "35097",
    "city": "Locust Fork"
  },
  {
    "zip": "35111",
    "city": "Mc Calla"
  },
  {
    "zip": "35114",
    "city": "Maylene"
  },
  {
    "zip": "35115",
    "city": "Montevallo"
  },
  {
    "zip": "35118",
    "city": "Mulga"
  },
  {
    "zip": "35120",
    "city": "Odenville"
  },
  {
    "zip": "35125",
    "city": "Pell City"
  },
  {
    "zip": "35126",
    "city": "Pinson"
  },
  {
    "zip": "35127",
    "city": "Pleasant Grove"
  },
  {
    "zip": "35131",
    "city": "Ragland"
  },
  {
    "zip": "35133",
    "city": "Remlap"
  },
  {
    "zip": "35136",
    "city": "Rockford"
  },
  {
    "zip": "35147",
    "city": "Sterrett"
  },
  {
    "zip": "35148",
    "city": "Sumiton"
  },
  {
    "zip": "35150",
    "city": "Sylacauga"
  },
  {
    "zip": "35160",
    "city": "Talladega"
  },
  {
    "zip": "35171",
    "city": "Thorsby"
  },
  {
    "zip": "35173",
    "city": "Trussville"
  },
  {
    "zip": "35176",
    "city": "Vandiver"
  },
  {
    "zip": "35178",
    "city": "Vincent"
  },
  {
    "zip": "35179",
    "city": "Vinemont"
  },
  {
    "zip": "35180",
    "city": "Warrior"
  },
  {
    "zip": "35183",
    "city": "Weogufka"
  },
  {
    "zip": "35184",
    "city": "West Blocton"
  },
  {
    "zip": "35186",
    "city": "Wilsonville"
  },
  {
    "zip": "35203",
    "city": "Birmingham"
  },
  {
    "zip": "35401",
    "city": "Tuscaloosa"
  },
  {
    "zip": "35442",
    "city": "Aliceville"
  },
  {
    "zip": "35443",
    "city": "Boligee"
  },
  {
    "zip": "35444",
    "city": "Brookwood"
  },
  {
    "zip": "35446",
    "city": "Buhl"
  },
  {
    "zip": "35452",
    "city": "Coker"
  },
  {
    "zip": "35456",
    "city": "Duncanville"
  },
  {
    "zip": "35457",
    "city": "Echola"
  },
  {
    "zip": "35458",
    "city": "Elrod"
  },
  {
    "zip": "35459",
    "city": "Emelle"
  },
  {
    "zip": "35460",
    "city": "Epes"
  },
  {
    "zip": "35461",
    "city": "Ethelsville"
  },
  {
    "zip": "35462",
    "city": "Eutaw"
  },
  {
    "zip": "35463",
    "city": "Fosters"
  },
  {
    "zip": "35466",
    "city": "Gordo"
  },
  {
    "zip": "35474",
    "city": "Moundville"
  },
  {
    "zip": "35480",
    "city": "Ralph"
  },
  {
    "zip": "35481",
    "city": "Reform"
  },
  {
    "zip": "35541",
    "city": "Arley"
  },
  {
    "zip": "35542",
    "city": "Bankston"
  },
  {
    "zip": "35544",
    "city": "Beaverton"
  },
  {
    "zip": "35546",
    "city": "Berry"
  },
  {
    "zip": "35548",
    "city": "Brilliant"
  },
  {
    "zip": "35549",
    "city": "Carbon Hill"
  },
  {
    "zip": "35553",
    "city": "Double Springs"
  },
  {
    "zip": "35554",
    "city": "Eldridge"
  },
  {
    "zip": "35555",
    "city": "Fayette"
  },
  {
    "zip": "35563",
    "city": "Guin"
  },
  {
    "zip": "35564",
    "city": "Hackleburg"
  },
  {
    "zip": "35565",
    "city": "Haleyville"
  },
  {
    "zip": "35578",
    "city": "Nauvoo"
  },
  {
    "zip": "35579",
    "city": "Oakman"
  },
  {
    "zip": "35581",
    "city": "Phil Campbell"
  },
  {
    "zip": "35582",
    "city": "Red Bay"
  },
  {
    "zip": "35586",
    "city": "Sulligent"
  },
  {
    "zip": "35587",
    "city": "Townley"
  },
  {
    "zip": "35593",
    "city": "Vina"
  },
  {
    "zip": "35620",
    "city": "Elkmont"
  },
  {
    "zip": "35621",
    "city": "Eva"
  },
  {
    "zip": "35622",
    "city": "Falkville"
  },
  {
    "zip": "35640",
    "city": "Hartselle"
  },
  {
    "zip": "35645",
    "city": "Killen"
  },
  {
    "zip": "35646",
    "city": "Leighton"
  },
  {
    "zip": "35650",
    "city": "Moulton"
  },
  {
    "zip": "35653",
    "city": "Russellville"
  },
  {
    "zip": "35661",
    "city": "Muscle Shoals"
  },
  {
    "zip": "35671",
    "city": "Tanner"
  },
  {
    "zip": "35672",
    "city": "Town Creek"
  },
  {
    "zip": "35674",
    "city": "Tuscumbia"
  },
  {
    "zip": "35741",
    "city": "Brownsboro"
  },
  {
    "zip": "35745",
    "city": "Estillfork"
  },
  {
    "zip": "35746",
    "city": "Fackler"
  },
  {
    "zip": "35748",
    "city": "Gurley"
  },
  {
    "zip": "35749",
    "city": "Harvest"
  },
  {
    "zip": "35750",
    "city": "Hazel Green"
  },
  {
    "zip": "35751",
    "city": "Hollytree"
  },
  {
    "zip": "35754",
    "city": "Laceys Spring"
  },
  {
    "zip": "35755",
    "city": "Langston"
  },
  {
    "zip": "35759",
    "city": "Meridianville"
  },
  {
    "zip": "35763",
    "city": "Owens Cross Roads"
  },
  {
    "zip": "35764",
    "city": "Paint Rock"
  },
  {
    "zip": "35765",
    "city": "Pisgah"
  },
  {
    "zip": "35768",
    "city": "Scottsboro"
  },
  {
    "zip": "35771",
    "city": "Section"
  },
  {
    "zip": "35772",
    "city": "Stevenson"
  },
  {
    "zip": "35773",
    "city": "Toney"
  },
  {
    "zip": "35775",
    "city": "Valhermoso Springs"
  },
  {
    "zip": "35801",
    "city": "Huntsville"
  },
  {
    "zip": "35906",
    "city": "Rainbow City"
  },
  {
    "zip": "35950",
    "city": "Albertville"
  },
  {
    "zip": "35954",
    "city": "Attalla"
  },
  {
    "zip": "35956",
    "city": "Boaz"
  },
  {
    "zip": "35958",
    "city": "Bryant"
  },
  {
    "zip": "35960",
    "city": "Centre"
  },
  {
    "zip": "35962",
    "city": "Crossville"
  },
  {
    "zip": "35967",
    "city": "Fort Payne"
  },
  {
    "zip": "35971",
    "city": "Fyffe"
  },
  {
    "zip": "35972",
    "city": "Gallant"
  },
  {
    "zip": "35973",
    "city": "Gaylesville"
  },
  {
    "zip": "35974",
    "city": "Geraldine"
  },
  {
    "zip": "35975",
    "city": "Groveoak"
  },
  {
    "zip": "35976",
    "city": "Guntersville"
  },
  {
    "zip": "35978",
    "city": "Henagar"
  },
  {
    "zip": "35979",
    "city": "Higdon"
  },
  {
    "zip": "35980",
    "city": "Horton"
  },
  {
    "zip": "35981",
    "city": "Ider"
  },
  {
    "zip": "35984",
    "city": "Mentone"
  },
  {
    "zip": "35986",
    "city": "Rainsville"
  },
  {
    "zip": "35987",
    "city": "Steele"
  },
  {
    "zip": "36003",
    "city": "Autaugaville"
  },
  {
    "zip": "36005",
    "city": "Banks"
  },
  {
    "zip": "36006",
    "city": "Billingsley"
  },
  {
    "zip": "36009",
    "city": "Brantley"
  },
  {
    "zip": "36010",
    "city": "Brundidge"
  },
  {
    "zip": "36020",
    "city": "Coosada"
  },
  {
    "zip": "36022",
    "city": "Deatsville"
  },
  {
    "zip": "36024",
    "city": "Eclectic"
  },
  {
    "zip": "36025",
    "city": "Elmore"
  },
  {
    "zip": "36026",
    "city": "Equality"
  },
  {
    "zip": "36027",
    "city": "Eufaula"
  },
  {
    "zip": "36028",
    "city": "Dozier"
  },
  {
    "zip": "36029",
    "city": "Fitzpatrick"
  },
  {
    "zip": "36030",
    "city": "Forest Home"
  },
  {
    "zip": "36032",
    "city": "Fort Deposit"
  },
  {
    "zip": "36033",
    "city": "Georgiana"
  },
  {
    "zip": "36036",
    "city": "Grady"
  },
  {
    "zip": "36039",
    "city": "Hardaway"
  },
  {
    "zip": "36040",
    "city": "Hayneville"
  },
  {
    "zip": "36041",
    "city": "Highland Home"
  },
  {
    "zip": "36042",
    "city": "Honoraville"
  },
  {
    "zip": "36043",
    "city": "Hope Hull"
  },
  {
    "zip": "36046",
    "city": "Lapine"
  },
  {
    "zip": "36047",
    "city": "Letohatchee"
  },
  {
    "zip": "36049",
    "city": "Luverne"
  },
  {
    "zip": "36064",
    "city": "Pike Road"
  },
  {
    "zip": "36066",
    "city": "Prattville"
  },
  {
    "zip": "36069",
    "city": "Ramer"
  },
  {
    "zip": "36075",
    "city": "Shorter"
  },
  {
    "zip": "36078",
    "city": "Tallassee"
  },
  {
    "zip": "36080",
    "city": "Titus"
  },
  {
    "zip": "36083",
    "city": "Tuskegee"
  },
  {
    "zip": "36088",
    "city": "Tuskegee Institute"
  },
  {
    "zip": "36091",
    "city": "Verbena"
  },
  {
    "zip": "36092",
    "city": "Wetumpka"
  },
  {
    "zip": "36201",
    "city": "Anniston"
  },
  {
    "zip": "36255",
    "city": "Cragford"
  },
  {
    "zip": "36256",
    "city": "Daviston"
  },
  {
    "zip": "36260",
    "city": "Eastaboga"
  },
  {
    "zip": "36262",
    "city": "Fruithurst"
  },
  {
    "zip": "36264",
    "city": "Heflin"
  },
  {
    "zip": "36266",
    "city": "Lineville"
  },
  {
    "zip": "36268",
    "city": "Munford"
  },
  {
    "zip": "36269",
    "city": "Muscadine"
  },
  {
    "zip": "36271",
    "city": "Ohatchee"
  },
  {
    "zip": "36273",
    "city": "Ranburne"
  },
  {
    "zip": "36277",
    "city": "Weaver"
  },
  {
    "zip": "36278",
    "city": "Wedowee"
  },
  {
    "zip": "36301",
    "city": "Dothan"
  },
  {
    "zip": "36311",
    "city": "Ariton"
  },
  {
    "zip": "36314",
    "city": "Black"
  },
  {
    "zip": "36316",
    "city": "Chancellor"
  },
  {
    "zip": "36317",
    "city": "Clopton"
  },
  {
    "zip": "36318",
    "city": "Coffee Springs"
  },
  {
    "zip": "36320",
    "city": "Cottonwood"
  },
  {
    "zip": "36321",
    "city": "Cowarts"
  },
  {
    "zip": "36345",
    "city": "Headland"
  },
  {
    "zip": "36346",
    "city": "Jack"
  },
  {
    "zip": "36350",
    "city": "Midland City"
  },
  {
    "zip": "36351",
    "city": "New Brockton"
  },
  {
    "zip": "36360",
    "city": "Ozark"
  },
  {
    "zip": "36362",
    "city": "Fort Rucker"
  },
  {
    "zip": "36370",
    "city": "Pansey"
  },
  {
    "zip": "36373",
    "city": "Shorterville"
  },
  {
    "zip": "36374",
    "city": "Skipperville"
  },
  {
    "zip": "36375",
    "city": "Slocomb"
  },
  {
    "zip": "36376",
    "city": "Webb"
  },
  {
    "zip": "36420",
    "city": "Andalusia"
  },
  {
    "zip": "36425",
    "city": "Beatrice"
  },
  {
    "zip": "36426",
    "city": "Brewton"
  },
  {
    "zip": "36432",
    "city": "Castleberry"
  },
  {
    "zip": "36435",
    "city": "Coy"
  },
  {
    "zip": "36436",
    "city": "Dickinson"
  },
  {
    "zip": "36441",
    "city": "Flomaton"
  },
  {
    "zip": "36442",
    "city": "Florala"
  },
  {
    "zip": "36445",
    "city": "Frisco City"
  },
  {
    "zip": "36451",
    "city": "Grove Hill"
  },
  {
    "zip": "36456",
    "city": "Mc Kenzie"
  },
  {
    "zip": "36467",
    "city": "Opp"
  },
  {
    "zip": "36471",
    "city": "Peterman"
  },
  {
    "zip": "36473",
    "city": "Range"
  },
  {
    "zip": "36474",
    "city": "Red Level"
  },
  {
    "zip": "36475",
    "city": "Repton"
  },
  {
    "zip": "36477",
    "city": "Samson"
  },
  {
    "zip": "36480",
    "city": "Uriah"
  },
  {
    "zip": "36481",
    "city": "Vredenburgh"
  },
  {
    "zip": "36482",
    "city": "Whatley"
  },
  {
    "zip": "36483",
    "city": "Wing"
  },
  {
    "zip": "36502",
    "city": "Atmore"
  },
  {
    "zip": "36505",
    "city": "Axis"
  },
  {
    "zip": "36507",
    "city": "Bay Minette"
  },
  {
    "zip": "36509",
    "city": "Bayou La Batre"
  },
  {
    "zip": "36511",
    "city": "Bon Secour"
  },
  {
    "zip": "36518",
    "city": "Chatom"
  },
  {
    "zip": "36521",
    "city": "Chunchula"
  },
  {
    "zip": "36522",
    "city": "Citronelle"
  },
  {
    "zip": "36523",
    "city": "Coden"
  },
  {
    "zip": "36524",
    "city": "Coffeeville"
  },
  {
    "zip": "36525",
    "city": "Creola"
  },
  {
    "zip": "36526",
    "city": "Daphne"
  },
  {
    "zip": "36527",
    "city": "Spanish Fort"
  },
  {
    "zip": "36528",
    "city": "Dauphin Island"
  },
  {
    "zip": "36530",
    "city": "Elberta"
  },
  {
    "zip": "36535",
    "city": "Foley"
  },
  {
    "zip": "36538",
    "city": "Frankville"
  },
  {
    "zip": "36539",
    "city": "Fruitdale"
  },
  {
    "zip": "36540",
    "city": "Gainestown"
  },
  {
    "zip": "36541",
    "city": "Grand Bay"
  },
  {
    "zip": "36542",
    "city": "Gulf Shores"
  },
  {
    "zip": "36548",
    "city": "Leroy"
  },
  {
    "zip": "36549",
    "city": "Lillian"
  },
  {
    "zip": "36551",
    "city": "Loxley"
  },
  {
    "zip": "36553",
    "city": "Mc Intosh"
  },
  {
    "zip": "36555",
    "city": "Magnolia Springs"
  },
  {
    "zip": "36558",
    "city": "Millry"
  },
  {
    "zip": "36561",
    "city": "Orange Beach"
  },
  {
    "zip": "36562",
    "city": "Perdido"
  },
  {
    "zip": "36569",
    "city": "Saint Stephens"
  },
  {
    "zip": "36571",
    "city": "Saraland"
  },
  {
    "zip": "36575",
    "city": "Semmes"
  },
  {
    "zip": "36576",
    "city": "Silverhill"
  },
  {
    "zip": "36580",
    "city": "Summerdale"
  },
  {
    "zip": "36582",
    "city": "Theodore"
  },
  {
    "zip": "36583",
    "city": "Tibbie"
  },
  {
    "zip": "36584",
    "city": "Vinegar Bend"
  },
  {
    "zip": "36585",
    "city": "Wagarville"
  },
  {
    "zip": "36587",
    "city": "Wilmer"
  },
  {
    "zip": "36602",
    "city": "Mobile"
  },
  {
    "zip": "36613",
    "city": "Eight Mile"
  },
  {
    "zip": "36721",
    "city": "Annemanie"
  },
  {
    "zip": "36728",
    "city": "Catherine"
  },
  {
    "zip": "36732",
    "city": "Demopolis"
  },
  {
    "zip": "36736",
    "city": "Dixons Mills"
  },
  {
    "zip": "36738",
    "city": "Faunsdale"
  },
  {
    "zip": "36740",
    "city": "Forkland"
  },
  {
    "zip": "36742",
    "city": "Gallion"
  },
  {
    "zip": "36749",
    "city": "Jones"
  },
  {
    "zip": "36750",
    "city": "Maplesville"
  },
  {
    "zip": "36751",
    "city": "Lower Peach Tree"
  },
  {
    "zip": "36752",
    "city": "Lowndesboro"
  },
  {
    "zip": "36758",
    "city": "Plantersville"
  },
  {
    "zip": "36759",
    "city": "Marion Junction"
  },
  {
    "zip": "36761",
    "city": "Minter"
  },
  {
    "zip": "36762",
    "city": "Morvin"
  },
  {
    "zip": "36765",
    "city": "Newbern"
  },
  {
    "zip": "36767",
    "city": "Orrville"
  },
  {
    "zip": "36768",
    "city": "Pine Apple"
  },
  {
    "zip": "36773",
    "city": "Safford"
  },
  {
    "zip": "36776",
    "city": "Sawyerville"
  },
  {
    "zip": "36782",
    "city": "Sweet Water"
  },
  {
    "zip": "36785",
    "city": "Tyler"
  },
  {
    "zip": "36790",
    "city": "Stanton"
  },
  {
    "zip": "36793",
    "city": "Lawley"
  },
  {
    "zip": "36801",
    "city": "Opelika"
  },
  {
    "zip": "36849",
    "city": "Auburn University"
  },
  {
    "zip": "36853",
    "city": "Dadeville"
  },
  {
    "zip": "36854",
    "city": "Valley"
  },
  {
    "zip": "36855",
    "city": "Five Points"
  },
  {
    "zip": "36856",
    "city": "Fort Mitchell"
  },
  {
    "zip": "36858",
    "city": "Hatchechubbee"
  },
  {
    "zip": "36860",
    "city": "Hurtsboro"
  },
  {
    "zip": "36861",
    "city": "Jacksons Gap"
  },
  {
    "zip": "36863",
    "city": "Lanett"
  },
  {
    "zip": "36866",
    "city": "Notasulga"
  },
  {
    "zip": "36867",
    "city": "Phenix City"
  },
  {
    "zip": "36871",
    "city": "Pittsview"
  },
  {
    "zip": "36875",
    "city": "Seale"
  },
  {
    "zip": "36877",
    "city": "Smiths Station"
  },
  {
    "zip": "36908",
    "city": "Gilbertown"
  },
  {
    "zip": "36910",
    "city": "Jachin"
  },
  {
    "zip": "36912",
    "city": "Lisman"
  },
  {
    "zip": "36913",
    "city": "Melvin"
  },
  {
    "zip": "36919",
    "city": "Silas"
  },
  {
    "zip": "36921",
    "city": "Toxey"
  },
  {
    "zip": "37013",
    "city": "Antioch"
  },
  {
    "zip": "37015",
    "city": "Ashland City"
  },
  {
    "zip": "37016",
    "city": "Auburntown"
  },
  {
    "zip": "37018",
    "city": "Beechgrove"
  },
  {
    "zip": "37020",
    "city": "Bell Buckle"
  },
  {
    "zip": "37025",
    "city": "Bon Aqua"
  },
  {
    "zip": "37026",
    "city": "Bradyville"
  },
  {
    "zip": "37028",
    "city": "Bumpus Mills"
  },
  {
    "zip": "37029",
    "city": "Burns"
  },
  {
    "zip": "37031",
    "city": "Castalian Springs"
  },
  {
    "zip": "37032",
    "city": "Cedar Hill"
  },
  {
    "zip": "37035",
    "city": "Chapmansboro"
  },
  {
    "zip": "37046",
    "city": "College Grove"
  },
  {
    "zip": "37047",
    "city": "Cornersville"
  },
  {
    "zip": "37048",
    "city": "Cottontown"
  },
  {
    "zip": "37049",
    "city": "Cross Plains"
  },
  {
    "zip": "37050",
    "city": "Cumberland City"
  },
  {
    "zip": "37051",
    "city": "Cumberland Furnace"
  },
  {
    "zip": "37052",
    "city": "Cunningham"
  },
  {
    "zip": "37055",
    "city": "Dickson"
  },
  {
    "zip": "37057",
    "city": "Dixon Springs"
  },
  {
    "zip": "37059",
    "city": "Dowelltown"
  },
  {
    "zip": "37060",
    "city": "Eagleville"
  },
  {
    "zip": "37066",
    "city": "Gallatin"
  },
  {
    "zip": "37072",
    "city": "Goodlettsville"
  },
  {
    "zip": "37073",
    "city": "Greenbrier"
  },
  {
    "zip": "37078",
    "city": "Hurricane Mills"
  },
  {
    "zip": "37079",
    "city": "Indian Mound"
  },
  {
    "zip": "37080",
    "city": "Joelton"
  },
  {
    "zip": "37082",
    "city": "Kingston Springs"
  },
  {
    "zip": "37085",
    "city": "Lascassas"
  },
  {
    "zip": "37086",
    "city": "La Vergne"
  },
  {
    "zip": "37097",
    "city": "Lobelville"
  },
  {
    "zip": "37098",
    "city": "Lyles"
  },
  {
    "zip": "37101",
    "city": "Mc Ewen"
  },
  {
    "zip": "37110",
    "city": "Mcminnville"
  },
  {
    "zip": "37122",
    "city": "Mount Juliet"
  },
  {
    "zip": "37134",
    "city": "New Johnsonville"
  },
  {
    "zip": "37135",
    "city": "Nolensville"
  },
  {
    "zip": "37137",
    "city": "Nunnelly"
  },
  {
    "zip": "37138",
    "city": "Old Hickory"
  },
  {
    "zip": "37140",
    "city": "Only"
  },
  {
    "zip": "37141",
    "city": "Orlinda"
  },
  {
    "zip": "37143",
    "city": "Pegram"
  },
  {
    "zip": "37145",
    "city": "Pleasant Shade"
  },
  {
    "zip": "37146",
    "city": "Pleasant View"
  },
  {
    "zip": "37149",
    "city": "Readyville"
  },
  {
    "zip": "37150",
    "city": "Red Boiling Springs"
  },
  {
    "zip": "37151",
    "city": "Riddleton"
  },
  {
    "zip": "37153",
    "city": "Rockvale"
  },
  {
    "zip": "37160",
    "city": "Shelbyville"
  },
  {
    "zip": "37175",
    "city": "Stewart"
  },
  {
    "zip": "37178",
    "city": "Tennessee Ridge"
  },
  {
    "zip": "37179",
    "city": "Thompsons Station"
  },
  {
    "zip": "37181",
    "city": "Vanleer"
  },
  {
    "zip": "37183",
    "city": "Wartrace"
  },
  {
    "zip": "37187",
    "city": "White Bluff"
  },
  {
    "zip": "37188",
    "city": "White House"
  },
  {
    "zip": "37189",
    "city": "Whites Creek"
  },
  {
    "zip": "37302",
    "city": "Apison"
  },
  {
    "zip": "37304",
    "city": "Bakewell"
  },
  {
    "zip": "37305",
    "city": "Beersheba Springs"
  },
  {
    "zip": "37308",
    "city": "Birchwood"
  },
  {
    "zip": "37313",
    "city": "Coalmont"
  },
  {
    "zip": "37317",
    "city": "Copperhill"
  },
  {
    "zip": "37318",
    "city": "Cowan"
  },
  {
    "zip": "37324",
    "city": "Decherd"
  },
  {
    "zip": "37325",
    "city": "Delano"
  },
  {
    "zip": "37327",
    "city": "Dunlap"
  },
  {
    "zip": "37328",
    "city": "Elora"
  },
  {
    "zip": "37330",
    "city": "Estill Springs"
  },
  {
    "zip": "37332",
    "city": "Evensville"
  },
  {
    "zip": "37333",
    "city": "Farner"
  },
  {
    "zip": "37335",
    "city": "Flintville"
  },
  {
    "zip": "37337",
    "city": "Grandview"
  },
  {
    "zip": "37339",
    "city": "Gruetli Laager"
  },
  {
    "zip": "37340",
    "city": "Guild"
  },
  {
    "zip": "37343",
    "city": "Hixson"
  },
  {
    "zip": "37345",
    "city": "Huntland"
  },
  {
    "zip": "37348",
    "city": "Kelso"
  },
  {
    "zip": "37351",
    "city": "Lupton City"
  },
  {
    "zip": "37354",
    "city": "Madisonville"
  },
  {
    "zip": "37356",
    "city": "Monteagle"
  },
  {
    "zip": "37357",
    "city": "Morrison"
  },
  {
    "zip": "37360",
    "city": "Normandy"
  },
  {
    "zip": "37363",
    "city": "Ooltewah"
  },
  {
    "zip": "37369",
    "city": "Reliance"
  },
  {
    "zip": "37373",
    "city": "Sale Creek"
  },
  {
    "zip": "37374",
    "city": "Sequatchie"
  },
  {
    "zip": "37375",
    "city": "Sewanee"
  },
  {
    "zip": "37377",
    "city": "Signal Mountain"
  },
  {
    "zip": "37379",
    "city": "Soddy Daisy"
  },
  {
    "zip": "37380",
    "city": "South Pittsburg"
  },
  {
    "zip": "37385",
    "city": "Tellico Plains"
  },
  {
    "zip": "37387",
    "city": "Tracy City"
  },
  {
    "zip": "37388",
    "city": "Tullahoma"
  },
  {
    "zip": "37389",
    "city": "Arnold Afb"
  },
  {
    "zip": "37391",
    "city": "Turtletown"
  },
  {
    "zip": "37396",
    "city": "Whiteside"
  },
  {
    "zip": "37397",
    "city": "Whitwell"
  },
  {
    "zip": "37402",
    "city": "Chattanooga"
  },
  {
    "zip": "37617",
    "city": "Blountville"
  },
  {
    "zip": "37618",
    "city": "Bluff City"
  },
  {
    "zip": "37641",
    "city": "Chuckey"
  },
  {
    "zip": "37643",
    "city": "Elizabethton"
  },
  {
    "zip": "37656",
    "city": "Fall Branch"
  },
  {
    "zip": "37657",
    "city": "Flag Pond"
  },
  {
    "zip": "37659",
    "city": "Jonesborough"
  },
  {
    "zip": "37660",
    "city": "Kingsport"
  },
  {
    "zip": "37680",
    "city": "Laurel Bloomery"
  },
  {
    "zip": "37683",
    "city": "Mountain City"
  },
  {
    "zip": "37686",
    "city": "Piney Flats"
  },
  {
    "zip": "37687",
    "city": "Roan Mountain"
  },
  {
    "zip": "37688",
    "city": "Shady Valley"
  },
  {
    "zip": "37691",
    "city": "Trade"
  },
  {
    "zip": "37692",
    "city": "Unicoi"
  },
  {
    "zip": "37694",
    "city": "Watauga"
  },
  {
    "zip": "37701",
    "city": "Alcoa"
  },
  {
    "zip": "37708",
    "city": "Bean Station"
  },
  {
    "zip": "37709",
    "city": "Blaine"
  },
  {
    "zip": "37710",
    "city": "Briceville"
  },
  {
    "zip": "37711",
    "city": "Bulls Gap"
  },
  {
    "zip": "37713",
    "city": "Bybee"
  },
  {
    "zip": "37715",
    "city": "Clairfield"
  },
  {
    "zip": "37721",
    "city": "Corryton"
  },
  {
    "zip": "37722",
    "city": "Cosby"
  },
  {
    "zip": "37724",
    "city": "Cumberland Gap"
  },
  {
    "zip": "37725",
    "city": "Dandridge"
  },
  {
    "zip": "37726",
    "city": "Deer Lodge"
  },
  {
    "zip": "37727",
    "city": "Del Rio"
  },
  {
    "zip": "37729",
    "city": "Duff"
  },
  {
    "zip": "37731",
    "city": "Eidson"
  },
  {
    "zip": "37738",
    "city": "Gatlinburg"
  },
  {
    "zip": "37742",
    "city": "Greenback"
  },
  {
    "zip": "37743",
    "city": "Greeneville"
  },
  {
    "zip": "37752",
    "city": "Harrogate"
  },
  {
    "zip": "37754",
    "city": "Heiskell"
  },
  {
    "zip": "37755",
    "city": "Helenwood"
  },
  {
    "zip": "37757",
    "city": "Jacksboro"
  },
  {
    "zip": "37760",
    "city": "Jefferson City"
  },
  {
    "zip": "37762",
    "city": "Jellico"
  },
  {
    "zip": "37764",
    "city": "Kodak"
  },
  {
    "zip": "37765",
    "city": "Kyles Ford"
  },
  {
    "zip": "37766",
    "city": "La Follette"
  },
  {
    "zip": "37770",
    "city": "Lancing"
  },
  {
    "zip": "37771",
    "city": "Lenoir City"
  },
  {
    "zip": "37779",
    "city": "Luttrell"
  },
  {
    "zip": "37801",
    "city": "Maryville"
  },
  {
    "zip": "37807",
    "city": "Maynardville"
  },
  {
    "zip": "37811",
    "city": "Mooresburg"
  },
  {
    "zip": "37818",
    "city": "Mosheim"
  },
  {
    "zip": "37825",
    "city": "New Tazewell"
  },
  {
    "zip": "37826",
    "city": "Niota"
  },
  {
    "zip": "37840",
    "city": "Oliver Springs"
  },
  {
    "zip": "37843",
    "city": "Parrottsville"
  },
  {
    "zip": "37847",
    "city": "Pioneer"
  },
  {
    "zip": "37849",
    "city": "Powell"
  },
  {
    "zip": "37862",
    "city": "Sevierville"
  },
  {
    "zip": "37863",
    "city": "Pigeon Forge"
  },
  {
    "zip": "37866",
    "city": "Sharps Chapel"
  },
  {
    "zip": "37869",
    "city": "Sneedville"
  },
  {
    "zip": "37871",
    "city": "Strawberry Plains"
  },
  {
    "zip": "37872",
    "city": "Sunbright"
  },
  {
    "zip": "37873",
    "city": "Surgoinsville"
  },
  {
    "zip": "37874",
    "city": "Sweetwater"
  },
  {
    "zip": "37877",
    "city": "Talbott"
  },
  {
    "zip": "37880",
    "city": "Ten Mile"
  },
  {
    "zip": "37881",
    "city": "Thorn Hill"
  },
  {
    "zip": "37885",
    "city": "Vonore"
  },
  {
    "zip": "37886",
    "city": "Walland"
  },
  {
    "zip": "37887",
    "city": "Wartburg"
  },
  {
    "zip": "37890",
    "city": "White Pine"
  },
  {
    "zip": "38004",
    "city": "Atoka"
  },
  {
    "zip": "38006",
    "city": "Bells"
  },
  {
    "zip": "38015",
    "city": "Burlison"
  },
  {
    "zip": "38017",
    "city": "Collierville"
  },
  {
    "zip": "38023",
    "city": "Drummonds"
  },
  {
    "zip": "38024",
    "city": "Dyersburg"
  },
  {
    "zip": "38028",
    "city": "Eads"
  },
  {
    "zip": "38030",
    "city": "Finley"
  },
  {
    "zip": "38039",
    "city": "Grand Junction"
  },
  {
    "zip": "38040",
    "city": "Halls"
  },
  {
    "zip": "38041",
    "city": "Henning"
  },
  {
    "zip": "38042",
    "city": "Hickory Valley"
  },
  {
    "zip": "38044",
    "city": "Hornsby"
  },
  {
    "zip": "38061",
    "city": "Pocahontas"
  },
  {
    "zip": "38067",
    "city": "Saulsbury"
  },
  {
    "zip": "38079",
    "city": "Tiptonville"
  },
  {
    "zip": "38220",
    "city": "Atwood"
  },
  {
    "zip": "38221",
    "city": "Big Sandy"
  },
  {
    "zip": "38224",
    "city": "Cottage Grove"
  },
  {
    "zip": "38226",
    "city": "Dukedom"
  },
  {
    "zip": "38229",
    "city": "Gleason"
  },
  {
    "zip": "38232",
    "city": "Hornbeak"
  },
  {
    "zip": "38233",
    "city": "Kenton"
  },
  {
    "zip": "38240",
    "city": "Obion"
  },
  {
    "zip": "38241",
    "city": "Palmersville"
  },
  {
    "zip": "38251",
    "city": "Puryear"
  },
  {
    "zip": "38253",
    "city": "Rives"
  },
  {
    "zip": "38257",
    "city": "South Fulton"
  },
  {
    "zip": "38258",
    "city": "Trezevant"
  },
  {
    "zip": "38259",
    "city": "Trimble"
  },
  {
    "zip": "38311",
    "city": "Bath Springs"
  },
  {
    "zip": "38313",
    "city": "Beech Bluff"
  },
  {
    "zip": "38315",
    "city": "Bethel Springs"
  },
  {
    "zip": "38317",
    "city": "Bruceton"
  },
  {
    "zip": "38326",
    "city": "Counce"
  },
  {
    "zip": "38327",
    "city": "Crump"
  },
  {
    "zip": "38328",
    "city": "Darden"
  },
  {
    "zip": "38329",
    "city": "Decaturville"
  },
  {
    "zip": "38330",
    "city": "Dyer"
  },
  {
    "zip": "38332",
    "city": "Enville"
  },
  {
    "zip": "38334",
    "city": "Finger"
  },
  {
    "zip": "38339",
    "city": "Guys"
  },
  {
    "zip": "38341",
    "city": "Holladay"
  },
  {
    "zip": "38342",
    "city": "Hollow Rock"
  },
  {
    "zip": "38343",
    "city": "Humboldt"
  },
  {
    "zip": "38345",
    "city": "Huron"
  },
  {
    "zip": "38347",
    "city": "Jacks Creek"
  },
  {
    "zip": "38348",
    "city": "Lavinia"
  },
  {
    "zip": "38356",
    "city": "Medon"
  },
  {
    "zip": "38357",
    "city": "Michie"
  },
  {
    "zip": "38361",
    "city": "Morris Chapel"
  },
  {
    "zip": "38368",
    "city": "Reagan"
  },
  {
    "zip": "38370",
    "city": "Saltillo"
  },
  {
    "zip": "38374",
    "city": "Scotts Hill"
  },
  {
    "zip": "38375",
    "city": "Selmer"
  },
  {
    "zip": "38379",
    "city": "Stantonville"
  },
  {
    "zip": "38380",
    "city": "Sugar Tree"
  },
  {
    "zip": "38381",
    "city": "Toone"
  },
  {
    "zip": "38388",
    "city": "Wildersville"
  },
  {
    "zip": "38390",
    "city": "Yuma"
  },
  {
    "zip": "38450",
    "city": "Collinwood"
  },
  {
    "zip": "38451",
    "city": "Culleoka"
  },
  {
    "zip": "38452",
    "city": "Cypress Inn"
  },
  {
    "zip": "38453",
    "city": "Dellrose"
  },
  {
    "zip": "38454",
    "city": "Duck River"
  },
  {
    "zip": "38456",
    "city": "Ethridge"
  },
  {
    "zip": "38459",
    "city": "Frankewing"
  },
  {
    "zip": "38460",
    "city": "Goodspring"
  },
  {
    "zip": "38461",
    "city": "Hampshire"
  },
  {
    "zip": "38462",
    "city": "Hohenwald"
  },
  {
    "zip": "38463",
    "city": "Iron City"
  },
  {
    "zip": "38464",
    "city": "Lawrenceburg"
  },
  {
    "zip": "38468",
    "city": "Leoma"
  },
  {
    "zip": "38471",
    "city": "Lutts"
  },
  {
    "zip": "38472",
    "city": "Lynnville"
  },
  {
    "zip": "38473",
    "city": "Minor Hill"
  },
  {
    "zip": "38475",
    "city": "Olivehill"
  },
  {
    "zip": "38476",
    "city": "Primm Springs"
  },
  {
    "zip": "38481",
    "city": "Saint Joseph"
  },
  {
    "zip": "38482",
    "city": "Santa Fe"
  },
  {
    "zip": "38483",
    "city": "Summertown"
  },
  {
    "zip": "38486",
    "city": "Westpoint"
  },
  {
    "zip": "38488",
    "city": "Taft"
  },
  {
    "zip": "38501",
    "city": "Cookeville"
  },
  {
    "zip": "38504",
    "city": "Allardt"
  },
  {
    "zip": "38541",
    "city": "Allons"
  },
  {
    "zip": "38542",
    "city": "Allred"
  },
  {
    "zip": "38545",
    "city": "Bloomington Springs"
  },
  {
    "zip": "38547",
    "city": "Brush Creek"
  },
  {
    "zip": "38548",
    "city": "Buffalo Valley"
  },
  {
    "zip": "38549",
    "city": "Byrdstown"
  },
  {
    "zip": "38551",
    "city": "Celina"
  },
  {
    "zip": "38552",
    "city": "Chestnut Mound"
  },
  {
    "zip": "38553",
    "city": "Clarkrange"
  },
  {
    "zip": "38559",
    "city": "Doyle"
  },
  {
    "zip": "38560",
    "city": "Elmwood"
  },
  {
    "zip": "38562",
    "city": "Gainesboro"
  },
  {
    "zip": "38565",
    "city": "Grimsley"
  },
  {
    "zip": "38567",
    "city": "Hickman"
  },
  {
    "zip": "38568",
    "city": "Hilham"
  },
  {
    "zip": "38575",
    "city": "Moss"
  },
  {
    "zip": "38577",
    "city": "Pall Mall"
  },
  {
    "zip": "38579",
    "city": "Quebeck"
  },
  {
    "zip": "38580",
    "city": "Rickman"
  },
  {
    "zip": "38581",
    "city": "Rock Island"
  },
  {
    "zip": "38582",
    "city": "Silver Point"
  },
  {
    "zip": "38587",
    "city": "Walling"
  },
  {
    "zip": "38588",
    "city": "Whitleyville"
  },
  {
    "zip": "38589",
    "city": "Wilder"
  },
  {
    "zip": "38606",
    "city": "Batesville"
  },
  {
    "zip": "38609",
    "city": "Belen"
  },
  {
    "zip": "38610",
    "city": "Blue Mountain"
  },
  {
    "zip": "38611",
    "city": "Byhalia"
  },
  {
    "zip": "38614",
    "city": "Clarksdale"
  },
  {
    "zip": "38617",
    "city": "Coahoma"
  },
  {
    "zip": "38618",
    "city": "Coldwater"
  },
  {
    "zip": "38621",
    "city": "Crenshaw"
  },
  {
    "zip": "38625",
    "city": "Dumas"
  },
  {
    "zip": "38627",
    "city": "Etta"
  },
  {
    "zip": "38628",
    "city": "Falcon"
  },
  {
    "zip": "38629",
    "city": "Falkner"
  },
  {
    "zip": "38633",
    "city": "Hickory Flat"
  },
  {
    "zip": "38637",
    "city": "Horn Lake"
  },
  {
    "zip": "38641",
    "city": "Lake Cormorant"
  },
  {
    "zip": "38643",
    "city": "Lambert"
  },
  {
    "zip": "38645",
    "city": "Lyon"
  },
  {
    "zip": "38646",
    "city": "Marks"
  },
  {
    "zip": "38647",
    "city": "Michigan City"
  },
  {
    "zip": "38650",
    "city": "Myrtle"
  },
  {
    "zip": "38651",
    "city": "Nesbit"
  },
  {
    "zip": "38654",
    "city": "Olive Branch"
  },
  {
    "zip": "38658",
    "city": "Pope"
  },
  {
    "zip": "38659",
    "city": "Potts Camp"
  },
  {
    "zip": "38661",
    "city": "Red Banks"
  },
  {
    "zip": "38664",
    "city": "Robinsonville"
  },
  {
    "zip": "38665",
    "city": "Sarah"
  },
  {
    "zip": "38668",
    "city": "Senatobia"
  },
  {
    "zip": "38670",
    "city": "Sledge"
  },
  {
    "zip": "38671",
    "city": "Southaven"
  },
  {
    "zip": "38674",
    "city": "Tiplersville"
  },
  {
    "zip": "38675",
    "city": "Tula"
  },
  {
    "zip": "38676",
    "city": "Tunica"
  },
  {
    "zip": "38680",
    "city": "Walls"
  },
  {
    "zip": "38683",
    "city": "Walnut"
  },
  {
    "zip": "38720",
    "city": "Alligator"
  },
  {
    "zip": "38721",
    "city": "Anguilla"
  },
  {
    "zip": "38725",
    "city": "Benoit"
  },
  {
    "zip": "38726",
    "city": "Beulah"
  },
  {
    "zip": "38730",
    "city": "Boyle"
  },
  {
    "zip": "38736",
    "city": "Doddsville"
  },
  {
    "zip": "38737",
    "city": "Drew"
  },
  {
    "zip": "38744",
    "city": "Glen Allan"
  },
  {
    "zip": "38746",
    "city": "Gunnison"
  },
  {
    "zip": "38748",
    "city": "Hollandale"
  },
  {
    "zip": "38754",
    "city": "Isola"
  },
  {
    "zip": "38759",
    "city": "Merigold"
  },
  {
    "zip": "38761",
    "city": "Moorhead"
  },
  {
    "zip": "38762",
    "city": "Mound Bayou"
  },
  {
    "zip": "38771",
    "city": "Ruleville"
  },
  {
    "zip": "38773",
    "city": "Shaw"
  },
  {
    "zip": "38778",
    "city": "Sunflower"
  },
  {
    "zip": "38801",
    "city": "Tupelo"
  },
  {
    "zip": "38821",
    "city": "Amory"
  },
  {
    "zip": "38824",
    "city": "Baldwyn"
  },
  {
    "zip": "38826",
    "city": "Belden"
  },
  {
    "zip": "38828",
    "city": "Blue Springs"
  },
  {
    "zip": "38829",
    "city": "Booneville"
  },
  {
    "zip": "38841",
    "city": "Ecru"
  },
  {
    "zip": "38844",
    "city": "Gattman"
  },
  {
    "zip": "38847",
    "city": "Golden"
  },
  {
    "zip": "38848",
    "city": "Greenwood Springs"
  },
  {
    "zip": "38849",
    "city": "Guntown"
  },
  {
    "zip": "38850",
    "city": "Houlka"
  },
  {
    "zip": "38852",
    "city": "Iuka"
  },
  {
    "zip": "38855",
    "city": "Mantachie"
  },
  {
    "zip": "38857",
    "city": "Mooreville"
  },
  {
    "zip": "38858",
    "city": "Nettleton"
  },
  {
    "zip": "38859",
    "city": "New Site"
  },
  {
    "zip": "38860",
    "city": "Okolona"
  },
  {
    "zip": "38863",
    "city": "Pontotoc"
  },
  {
    "zip": "38865",
    "city": "Rienzi"
  },
  {
    "zip": "38873",
    "city": "Tishomingo"
  },
  {
    "zip": "38878",
    "city": "Vardaman"
  },
  {
    "zip": "38901",
    "city": "Grenada"
  },
  {
    "zip": "38913",
    "city": "Banner"
  },
  {
    "zip": "38915",
    "city": "Bruce"
  },
  {
    "zip": "38916",
    "city": "Calhoun City"
  },
  {
    "zip": "38920",
    "city": "Cascilla"
  },
  {
    "zip": "38923",
    "city": "Coila"
  },
  {
    "zip": "38924",
    "city": "Cruger"
  },
  {
    "zip": "38925",
    "city": "Duck Hill"
  },
  {
    "zip": "38927",
    "city": "Enid"
  },
  {
    "zip": "38929",
    "city": "Gore Springs"
  },
  {
    "zip": "38940",
    "city": "Holcomb"
  },
  {
    "zip": "38941",
    "city": "Itta Bena"
  },
  {
    "zip": "38943",
    "city": "Mc Carley"
  },
  {
    "zip": "38944",
    "city": "Minter City"
  },
  {
    "zip": "38950",
    "city": "Philipp"
  },
  {
    "zip": "38952",
    "city": "Schlater"
  },
  {
    "zip": "38953",
    "city": "Scobey"
  },
  {
    "zip": "38954",
    "city": "Sidon"
  },
  {
    "zip": "38961",
    "city": "Tillatoba"
  },
  {
    "zip": "38963",
    "city": "Tutwiler"
  },
  {
    "zip": "38965",
    "city": "Water Valley"
  },
  {
    "zip": "38967",
    "city": "Winona"
  },
  {
    "zip": "39038",
    "city": "Belzoni"
  },
  {
    "zip": "39040",
    "city": "Bentonia"
  },
  {
    "zip": "39044",
    "city": "Braxton"
  },
  {
    "zip": "39057",
    "city": "Conehatta"
  },
  {
    "zip": "39059",
    "city": "Crystal Springs"
  },
  {
    "zip": "39063",
    "city": "Durant"
  },
  {
    "zip": "39067",
    "city": "Ethel"
  },
  {
    "zip": "39071",
    "city": "Flora"
  },
  {
    "zip": "39079",
    "city": "Goodman"
  },
  {
    "zip": "39086",
    "city": "Hermanville"
  },
  {
    "zip": "39088",
    "city": "Holly Bluff"
  },
  {
    "zip": "39090",
    "city": "Kosciusko"
  },
  {
    "zip": "39094",
    "city": "Lena"
  },
  {
    "zip": "39096",
    "city": "Lorman"
  },
  {
    "zip": "39097",
    "city": "Louise"
  },
  {
    "zip": "39108",
    "city": "Mc Cool"
  },
  {
    "zip": "39111",
    "city": "Magee"
  },
  {
    "zip": "39114",
    "city": "Mendenhall"
  },
  {
    "zip": "39116",
    "city": "Mize"
  },
  {
    "zip": "39120",
    "city": "Natchez"
  },
  {
    "zip": "39140",
    "city": "Newhebron"
  },
  {
    "zip": "39144",
    "city": "Pattison"
  },
  {
    "zip": "39145",
    "city": "Pelahatchie"
  },
  {
    "zip": "39149",
    "city": "Pinola"
  },
  {
    "zip": "39150",
    "city": "Port Gibson"
  },
  {
    "zip": "39159",
    "city": "Rolling Fork"
  },
  {
    "zip": "39160",
    "city": "Sallis"
  },
  {
    "zip": "39162",
    "city": "Satartia"
  },
  {
    "zip": "39166",
    "city": "Silver City"
  },
  {
    "zip": "39169",
    "city": "Tchula"
  },
  {
    "zip": "39170",
    "city": "Terry"
  },
  {
    "zip": "39173",
    "city": "Tinsley"
  },
  {
    "zip": "39176",
    "city": "Vaiden"
  },
  {
    "zip": "39179",
    "city": "Vaughan"
  },
  {
    "zip": "39180",
    "city": "Vicksburg"
  },
  {
    "zip": "39189",
    "city": "Walnut Grove"
  },
  {
    "zip": "39191",
    "city": "Wesson"
  },
  {
    "zip": "39192",
    "city": "West"
  },
  {
    "zip": "39194",
    "city": "Yazoo City"
  },
  {
    "zip": "39208",
    "city": "Pearl"
  },
  {
    "zip": "39232",
    "city": "Flowood"
  },
  {
    "zip": "39272",
    "city": "Byram"
  },
  {
    "zip": "39301",
    "city": "Meridian"
  },
  {
    "zip": "39322",
    "city": "Buckatunna"
  },
  {
    "zip": "39323",
    "city": "Chunky"
  },
  {
    "zip": "39328",
    "city": "De Kalb"
  },
  {
    "zip": "39335",
    "city": "Lauderdale"
  },
  {
    "zip": "39338",
    "city": "Louin"
  },
  {
    "zip": "39346",
    "city": "Noxapater"
  },
  {
    "zip": "39347",
    "city": "Pachuta"
  },
  {
    "zip": "39348",
    "city": "Paulding"
  },
  {
    "zip": "39352",
    "city": "Porterville"
  },
  {
    "zip": "39358",
    "city": "Scooba"
  },
  {
    "zip": "39360",
    "city": "Shubuta"
  },
  {
    "zip": "39361",
    "city": "Shuqualak"
  },
  {
    "zip": "39362",
    "city": "State Line"
  },
  {
    "zip": "39363",
    "city": "Stonewall"
  },
  {
    "zip": "39364",
    "city": "Toomsuba"
  },
  {
    "zip": "39366",
    "city": "Vossburg"
  },
  {
    "zip": "39401",
    "city": "Hattiesburg"
  },
  {
    "zip": "39421",
    "city": "Bassfield"
  },
  {
    "zip": "39422",
    "city": "Bay Springs"
  },
  {
    "zip": "39426",
    "city": "Carriere"
  },
  {
    "zip": "39437",
    "city": "Ellisville"
  },
  {
    "zip": "39439",
    "city": "Heidelberg"
  },
  {
    "zip": "39451",
    "city": "Leakesville"
  },
  {
    "zip": "39452",
    "city": "Lucedale"
  },
  {
    "zip": "39456",
    "city": "Mc Lain"
  },
  {
    "zip": "39459",
    "city": "Moselle"
  },
  {
    "zip": "39461",
    "city": "Neely"
  },
  {
    "zip": "39462",
    "city": "New Augusta"
  },
  {
    "zip": "39464",
    "city": "Ovett"
  },
  {
    "zip": "39465",
    "city": "Petal"
  },
  {
    "zip": "39466",
    "city": "Picayune"
  },
  {
    "zip": "39470",
    "city": "Poplarville"
  },
  {
    "zip": "39474",
    "city": "Prentiss"
  },
  {
    "zip": "39475",
    "city": "Purvis"
  },
  {
    "zip": "39476",
    "city": "Richton"
  },
  {
    "zip": "39479",
    "city": "Seminary"
  },
  {
    "zip": "39480",
    "city": "Soso"
  },
  {
    "zip": "39481",
    "city": "Stringer"
  },
  {
    "zip": "39482",
    "city": "Sumrall"
  },
  {
    "zip": "39483",
    "city": "Foxworth"
  },
  {
    "zip": "39501",
    "city": "Gulfport"
  },
  {
    "zip": "39520",
    "city": "Bay Saint Louis"
  },
  {
    "zip": "39522",
    "city": "Stennis Space Center"
  },
  {
    "zip": "39525",
    "city": "Diamondhead"
  },
  {
    "zip": "39530",
    "city": "Biloxi"
  },
  {
    "zip": "39540",
    "city": "Diberville"
  },
  {
    "zip": "39553",
    "city": "Gautier"
  },
  {
    "zip": "39556",
    "city": "Kiln"
  },
  {
    "zip": "39562",
    "city": "Moss Point"
  },
  {
    "zip": "39564",
    "city": "Ocean Springs"
  },
  {
    "zip": "39565",
    "city": "Vancleave"
  },
  {
    "zip": "39567",
    "city": "Pascagoula"
  },
  {
    "zip": "39571",
    "city": "Pass Christian"
  },
  {
    "zip": "39572",
    "city": "Pearlington"
  },
  {
    "zip": "39573",
    "city": "Perkinston"
  },
  {
    "zip": "39574",
    "city": "Saucier"
  },
  {
    "zip": "39576",
    "city": "Waveland"
  },
  {
    "zip": "39577",
    "city": "Wiggins"
  },
  {
    "zip": "39629",
    "city": "Bogue Chitto"
  },
  {
    "zip": "39630",
    "city": "Bude"
  },
  {
    "zip": "39633",
    "city": "Crosby"
  },
  {
    "zip": "39638",
    "city": "Gloster"
  },
  {
    "zip": "39641",
    "city": "Jayess"
  },
  {
    "zip": "39643",
    "city": "Kokomo"
  },
  {
    "zip": "39647",
    "city": "Mc Call Creek"
  },
  {
    "zip": "39648",
    "city": "Mccomb"
  },
  {
    "zip": "39656",
    "city": "Oak Vale"
  },
  {
    "zip": "39657",
    "city": "Osyka"
  },
  {
    "zip": "39661",
    "city": "Roxie"
  },
  {
    "zip": "39662",
    "city": "Ruth"
  },
  {
    "zip": "39664",
    "city": "Smithdale"
  },
  {
    "zip": "39665",
    "city": "Sontag"
  },
  {
    "zip": "39667",
    "city": "Tylertown"
  },
  {
    "zip": "39668",
    "city": "Union Church"
  },
  {
    "zip": "39735",
    "city": "Ackerman"
  },
  {
    "zip": "39737",
    "city": "Bellefontaine"
  },
  {
    "zip": "39741",
    "city": "Cedarbluff"
  },
  {
    "zip": "39744",
    "city": "Eupora"
  },
  {
    "zip": "39745",
    "city": "French Camp"
  },
  {
    "zip": "39747",
    "city": "Kilmichael"
  },
  {
    "zip": "39751",
    "city": "Mantee"
  },
  {
    "zip": "39752",
    "city": "Mathiston"
  },
  {
    "zip": "39755",
    "city": "Pheba"
  },
  {
    "zip": "39756",
    "city": "Prairie"
  },
  {
    "zip": "39759",
    "city": "Starkville"
  },
  {
    "zip": "39766",
    "city": "Steens"
  },
  {
    "zip": "39769",
    "city": "Sturgis"
  },
  {
    "zip": "39771",
    "city": "Walthall"
  },
  {
    "zip": "39772",
    "city": "Weir"
  },
  {
    "zip": "39815",
    "city": "Attapulgus"
  },
  {
    "zip": "39823",
    "city": "Blakely"
  },
  {
    "zip": "39825",
    "city": "Brinson"
  },
  {
    "zip": "39826",
    "city": "Bronwood"
  },
  {
    "zip": "39836",
    "city": "Coleman"
  },
  {
    "zip": "39837",
    "city": "Colquitt"
  },
  {
    "zip": "39840",
    "city": "Cuthbert"
  },
  {
    "zip": "39845",
    "city": "Donalsonville"
  },
  {
    "zip": "39851",
    "city": "Fort Gaines"
  },
  {
    "zip": "39861",
    "city": "Jakin"
  },
  {
    "zip": "39862",
    "city": "Leary"
  },
  {
    "zip": "39877",
    "city": "Parrott"
  },
  {
    "zip": "39886",
    "city": "Shellman"
  },
  {
    "zip": "39897",
    "city": "Whigham"
  },
  {
    "zip": "40003",
    "city": "Bagdad"
  },
  {
    "zip": "40004",
    "city": "Bardstown"
  },
  {
    "zip": "40009",
    "city": "Bradfordsville"
  },
  {
    "zip": "40010",
    "city": "Buckner"
  },
  {
    "zip": "40011",
    "city": "Campbellsburg"
  },
  {
    "zip": "40013",
    "city": "Coxs Creek"
  },
  {
    "zip": "40014",
    "city": "Crestwood"
  },
  {
    "zip": "40019",
    "city": "Eminence"
  },
  {
    "zip": "40022",
    "city": "Finchville"
  },
  {
    "zip": "40023",
    "city": "Fisherville"
  },
  {
    "zip": "40040",
    "city": "Mackville"
  },
  {
    "zip": "40046",
    "city": "Mount Eden"
  },
  {
    "zip": "40047",
    "city": "Mount Washington"
  },
  {
    "zip": "40056",
    "city": "Pewee Valley"
  },
  {
    "zip": "40057",
    "city": "Pleasureville"
  },
  {
    "zip": "40060",
    "city": "Raywick"
  },
  {
    "zip": "40070",
    "city": "Sulphur"
  },
  {
    "zip": "40075",
    "city": "Turners Station"
  },
  {
    "zip": "40076",
    "city": "Waddy"
  },
  {
    "zip": "40078",
    "city": "Willisburg"
  },
  {
    "zip": "40104",
    "city": "Battletown"
  },
  {
    "zip": "40108",
    "city": "Brandenburg"
  },
  {
    "zip": "40111",
    "city": "Cloverport"
  },
  {
    "zip": "40115",
    "city": "Custer"
  },
  {
    "zip": "40117",
    "city": "Ekron"
  },
  {
    "zip": "40119",
    "city": "Falls Of Rough"
  },
  {
    "zip": "40121",
    "city": "Fort Knox"
  },
  {
    "zip": "40142",
    "city": "Guston"
  },
  {
    "zip": "40143",
    "city": "Hardinsburg"
  },
  {
    "zip": "40144",
    "city": "Harned"
  },
  {
    "zip": "40150",
    "city": "Lebanon Junction"
  },
  {
    "zip": "40152",
    "city": "Mc Daniels"
  },
  {
    "zip": "40155",
    "city": "Muldraugh"
  },
  {
    "zip": "40157",
    "city": "Payneville"
  },
  {
    "zip": "40160",
    "city": "Radcliff"
  },
  {
    "zip": "40161",
    "city": "Rhodelia"
  },
  {
    "zip": "40162",
    "city": "Rineyville"
  },
  {
    "zip": "40165",
    "city": "Shepherdsville"
  },
  {
    "zip": "40170",
    "city": "Stephensport"
  },
  {
    "zip": "40171",
    "city": "Union Star"
  },
  {
    "zip": "40175",
    "city": "Vine Grove"
  },
  {
    "zip": "40178",
    "city": "Westview"
  },
  {
    "zip": "40312",
    "city": "Clay City"
  },
  {
    "zip": "40316",
    "city": "Denniston"
  },
  {
    "zip": "40322",
    "city": "Frenchburg"
  },
  {
    "zip": "40328",
    "city": "Gravel Switch"
  },
  {
    "zip": "40330",
    "city": "Harrodsburg"
  },
  {
    "zip": "40346",
    "city": "Means"
  },
  {
    "zip": "40351",
    "city": "Morehead"
  },
  {
    "zip": "40353",
    "city": "Mount Sterling"
  },
  {
    "zip": "40355",
    "city": "New Liberty"
  },
  {
    "zip": "40356",
    "city": "Nicholasville"
  },
  {
    "zip": "40358",
    "city": "Olympia"
  },
  {
    "zip": "40359",
    "city": "Owenton"
  },
  {
    "zip": "40360",
    "city": "Owingsville"
  },
  {
    "zip": "40370",
    "city": "Sadieville"
  },
  {
    "zip": "40371",
    "city": "Salt Lick"
  },
  {
    "zip": "40372",
    "city": "Salvisa"
  },
  {
    "zip": "40376",
    "city": "Slade"
  },
  {
    "zip": "40379",
    "city": "Stamping Ground"
  },
  {
    "zip": "40383",
    "city": "Versailles"
  },
  {
    "zip": "40390",
    "city": "Wilmore"
  },
  {
    "zip": "40409",
    "city": "Brodhead"
  },
  {
    "zip": "40437",
    "city": "Hustonville"
  },
  {
    "zip": "40447",
    "city": "Mc Kee"
  },
  {
    "zip": "40461",
    "city": "Paint Lick"
  },
  {
    "zip": "40472",
    "city": "Ravenna"
  },
  {
    "zip": "40481",
    "city": "Sandgap"
  },
  {
    "zip": "40484",
    "city": "Stanford"
  },
  {
    "zip": "40701",
    "city": "Corbin"
  },
  {
    "zip": "40729",
    "city": "East Bernstadt"
  },
  {
    "zip": "40737",
    "city": "Keavy"
  },
  {
    "zip": "40740",
    "city": "Lily"
  },
  {
    "zip": "40741",
    "city": "London"
  },
  {
    "zip": "40754",
    "city": "Nevisdale"
  },
  {
    "zip": "40759",
    "city": "Rockholds"
  },
  {
    "zip": "40763",
    "city": "Siler"
  },
  {
    "zip": "40808",
    "city": "Big Laurel"
  },
  {
    "zip": "40810",
    "city": "Bledsoe"
  },
  {
    "zip": "40815",
    "city": "Cawood"
  },
  {
    "zip": "40816",
    "city": "Chappell"
  },
  {
    "zip": "40818",
    "city": "Coalgood"
  },
  {
    "zip": "40819",
    "city": "Coldiron"
  },
  {
    "zip": "40820",
    "city": "Cranks"
  },
  {
    "zip": "40826",
    "city": "Eolia"
  },
  {
    "zip": "40827",
    "city": "Essie"
  },
  {
    "zip": "40828",
    "city": "Evarts"
  },
  {
    "zip": "40830",
    "city": "Gulston"
  },
  {
    "zip": "40831",
    "city": "Harlan"
  },
  {
    "zip": "40840",
    "city": "Helton"
  },
  {
    "zip": "40843",
    "city": "Holmes Mill"
  },
  {
    "zip": "40845",
    "city": "Hulen"
  },
  {
    "zip": "40856",
    "city": "Miracle"
  },
  {
    "zip": "40858",
    "city": "Mozelle"
  },
  {
    "zip": "40862",
    "city": "Partridge"
  },
  {
    "zip": "40863",
    "city": "Pathfork"
  },
  {
    "zip": "40868",
    "city": "Stinnett"
  },
  {
    "zip": "40870",
    "city": "Totz"
  },
  {
    "zip": "40873",
    "city": "Wallins Creek"
  },
  {
    "zip": "40874",
    "city": "Warbranch"
  },
  {
    "zip": "40902",
    "city": "Arjay"
  },
  {
    "zip": "40903",
    "city": "Artemus"
  },
  {
    "zip": "40906",
    "city": "Barbourville"
  },
  {
    "zip": "40915",
    "city": "Bimble"
  },
  {
    "zip": "40921",
    "city": "Bryants Store"
  },
  {
    "zip": "40923",
    "city": "Cannon"
  },
  {
    "zip": "40927",
    "city": "Closplint"
  },
  {
    "zip": "40935",
    "city": "Flat Lick"
  },
  {
    "zip": "40939",
    "city": "Fourmile"
  },
  {
    "zip": "40940",
    "city": "Frakes"
  },
  {
    "zip": "40943",
    "city": "Girdler"
  },
  {
    "zip": "40946",
    "city": "Green Road"
  },
  {
    "zip": "40949",
    "city": "Heidrick"
  },
  {
    "zip": "40953",
    "city": "Hinkle"
  },
  {
    "zip": "40958",
    "city": "Kettle Island"
  },
  {
    "zip": "40964",
    "city": "Mary Alice"
  },
  {
    "zip": "40965",
    "city": "Middlesboro"
  },
  {
    "zip": "40979",
    "city": "Roark"
  },
  {
    "zip": "40982",
    "city": "Scalf"
  },
  {
    "zip": "40983",
    "city": "Sextons Creek"
  },
  {
    "zip": "40988",
    "city": "Stoney Fork"
  },
  {
    "zip": "40995",
    "city": "Trosper"
  },
  {
    "zip": "40999",
    "city": "Woollum"
  },
  {
    "zip": "41015",
    "city": "Latonia"
  },
  {
    "zip": "41017",
    "city": "Ft Mitchell"
  },
  {
    "zip": "41018",
    "city": "Erlanger"
  },
  {
    "zip": "41030",
    "city": "Crittenden"
  },
  {
    "zip": "41031",
    "city": "Cynthiana"
  },
  {
    "zip": "41033",
    "city": "De Mossville"
  },
  {
    "zip": "41035",
    "city": "Dry Ridge"
  },
  {
    "zip": "41041",
    "city": "Flemingsburg"
  },
  {
    "zip": "41046",
    "city": "Glencoe"
  },
  {
    "zip": "41055",
    "city": "Mayslick"
  },
  {
    "zip": "41063",
    "city": "Morning View"
  },
  {
    "zip": "41064",
    "city": "Mount Olivet"
  },
  {
    "zip": "41073",
    "city": "Bellevue"
  },
  {
    "zip": "41075",
    "city": "Fort Thomas"
  },
  {
    "zip": "41083",
    "city": "Sanders"
  },
  {
    "zip": "41121",
    "city": "Argillite"
  },
  {
    "zip": "41129",
    "city": "Catlettsburg"
  },
  {
    "zip": "41144",
    "city": "Greenup"
  },
  {
    "zip": "41146",
    "city": "Hitchins"
  },
  {
    "zip": "41149",
    "city": "Isonville"
  },
  {
    "zip": "41159",
    "city": "Martha"
  },
  {
    "zip": "41160",
    "city": "Mazie"
  },
  {
    "zip": "41164",
    "city": "Olive Hill"
  },
  {
    "zip": "41174",
    "city": "South Portsmouth"
  },
  {
    "zip": "41175",
    "city": "South Shore"
  },
  {
    "zip": "41179",
    "city": "Vanceburg"
  },
  {
    "zip": "41180",
    "city": "Webbville"
  },
  {
    "zip": "41189",
    "city": "Tollesboro"
  },
  {
    "zip": "41203",
    "city": "Beauty"
  },
  {
    "zip": "41204",
    "city": "Boons Camp"
  },
  {
    "zip": "41214",
    "city": "Debord"
  },
  {
    "zip": "41216",
    "city": "East Point"
  },
  {
    "zip": "41219",
    "city": "Flatgap"
  },
  {
    "zip": "41222",
    "city": "Hagerhill"
  },
  {
    "zip": "41224",
    "city": "Inez"
  },
  {
    "zip": "41226",
    "city": "Keaton"
  },
  {
    "zip": "41231",
    "city": "Lovely"
  },
  {
    "zip": "41232",
    "city": "Lowmansville"
  },
  {
    "zip": "41234",
    "city": "Meally"
  },
  {
    "zip": "41238",
    "city": "Oil Springs"
  },
  {
    "zip": "41240",
    "city": "Paintsville"
  },
  {
    "zip": "41250",
    "city": "Pilgrim"
  },
  {
    "zip": "41254",
    "city": "River"
  },
  {
    "zip": "41255",
    "city": "Sitka"
  },
  {
    "zip": "41257",
    "city": "Stambaugh"
  },
  {
    "zip": "41260",
    "city": "Thelma"
  },
  {
    "zip": "41262",
    "city": "Tomahawk"
  },
  {
    "zip": "41263",
    "city": "Tutor Key"
  },
  {
    "zip": "41265",
    "city": "Van Lear"
  },
  {
    "zip": "41274",
    "city": "Wittensville"
  },
  {
    "zip": "41310",
    "city": "Bays"
  },
  {
    "zip": "41311",
    "city": "Beattyville"
  },
  {
    "zip": "41317",
    "city": "Clayhole"
  },
  {
    "zip": "41338",
    "city": "Island City"
  },
  {
    "zip": "41351",
    "city": "Mistletoe"
  },
  {
    "zip": "41360",
    "city": "Pine Ridge"
  },
  {
    "zip": "41364",
    "city": "Ricetown"
  },
  {
    "zip": "41365",
    "city": "Rogers"
  },
  {
    "zip": "41366",
    "city": "Rousseau"
  },
  {
    "zip": "41367",
    "city": "Rowdy"
  },
  {
    "zip": "41385",
    "city": "Vancleve"
  },
  {
    "zip": "41390",
    "city": "Whick"
  },
  {
    "zip": "41397",
    "city": "Zoe"
  },
  {
    "zip": "41408",
    "city": "Cannel City"
  },
  {
    "zip": "41421",
    "city": "Elkfork"
  },
  {
    "zip": "41425",
    "city": "Ezel"
  },
  {
    "zip": "41464",
    "city": "Royalton"
  },
  {
    "zip": "41465",
    "city": "Salyersville"
  },
  {
    "zip": "41472",
    "city": "West Liberty"
  },
  {
    "zip": "41503",
    "city": "South Williamson"
  },
  {
    "zip": "41512",
    "city": "Ashcamp"
  },
  {
    "zip": "41513",
    "city": "Belcher"
  },
  {
    "zip": "41514",
    "city": "Belfry"
  },
  {
    "zip": "41517",
    "city": "Burdine"
  },
  {
    "zip": "41519",
    "city": "Canada"
  },
  {
    "zip": "41522",
    "city": "Elkhorn City"
  },
  {
    "zip": "41524",
    "city": "Fedscreek"
  },
  {
    "zip": "41528",
    "city": "Freeburn"
  },
  {
    "zip": "41534",
    "city": "Hellier"
  },
  {
    "zip": "41535",
    "city": "Huddy"
  },
  {
    "zip": "41537",
    "city": "Jenkins"
  },
  {
    "zip": "41539",
    "city": "Kimper"
  },
  {
    "zip": "41540",
    "city": "Lick Creek"
  },
  {
    "zip": "41543",
    "city": "Mc Andrews"
  },
  {
    "zip": "41544",
    "city": "Mc Carr"
  },
  {
    "zip": "41547",
    "city": "Majestic"
  },
  {
    "zip": "41548",
    "city": "Mouthcard"
  },
  {
    "zip": "41554",
    "city": "Phyllis"
  },
  {
    "zip": "41555",
    "city": "Pinsonfork"
  },
  {
    "zip": "41557",
    "city": "Raccoon"
  },
  {
    "zip": "41558",
    "city": "Ransom"
  },
  {
    "zip": "41559",
    "city": "Regina"
  },
  {
    "zip": "41560",
    "city": "Robinson Creek"
  },
  {
    "zip": "41562",
    "city": "Shelbiana"
  },
  {
    "zip": "41563",
    "city": "Shelby Gap"
  },
  {
    "zip": "41567",
    "city": "Stone"
  },
  {
    "zip": "41568",
    "city": "Stopover"
  },
  {
    "zip": "41571",
    "city": "Varney"
  },
  {
    "zip": "41572",
    "city": "Virgie"
  },
  {
    "zip": "41601",
    "city": "Allen"
  },
  {
    "zip": "41602",
    "city": "Auxier"
  },
  {
    "zip": "41605",
    "city": "Betsy Layne"
  },
  {
    "zip": "41606",
    "city": "Bevinsville"
  },
  {
    "zip": "41607",
    "city": "Blue River"
  },
  {
    "zip": "41612",
    "city": "Bypro"
  },
  {
    "zip": "41615",
    "city": "Dana"
  },
  {
    "zip": "41616",
    "city": "David"
  },
  {
    "zip": "41619",
    "city": "Drift"
  },
  {
    "zip": "41621",
    "city": "Dwale"
  },
  {
    "zip": "41622",
    "city": "Eastern"
  },
  {
    "zip": "41631",
    "city": "Grethel"
  },
  {
    "zip": "41632",
    "city": "Gunlock"
  },
  {
    "zip": "41635",
    "city": "Harold"
  },
  {
    "zip": "41636",
    "city": "Hi Hat"
  },
  {
    "zip": "41640",
    "city": "Hueysville"
  },
  {
    "zip": "41642",
    "city": "Ivel"
  },
  {
    "zip": "41643",
    "city": "Lackey"
  },
  {
    "zip": "41645",
    "city": "Langley"
  },
  {
    "zip": "41651",
    "city": "Minnie"
  },
  {
    "zip": "41653",
    "city": "Prestonsburg"
  },
  {
    "zip": "41655",
    "city": "Printer"
  },
  {
    "zip": "41659",
    "city": "Stanville"
  },
  {
    "zip": "41660",
    "city": "Teaberry"
  },
  {
    "zip": "41663",
    "city": "Tram"
  },
  {
    "zip": "41667",
    "city": "Weeksbury"
  },
  {
    "zip": "41669",
    "city": "Wheelwright"
  },
  {
    "zip": "41701",
    "city": "Hazard"
  },
  {
    "zip": "41712",
    "city": "Ary"
  },
  {
    "zip": "41714",
    "city": "Bear Branch"
  },
  {
    "zip": "41719",
    "city": "Bonnyman"
  },
  {
    "zip": "41721",
    "city": "Buckhorn"
  },
  {
    "zip": "41722",
    "city": "Bulan"
  },
  {
    "zip": "41723",
    "city": "Busy"
  },
  {
    "zip": "41727",
    "city": "Chavies"
  },
  {
    "zip": "41729",
    "city": "Combs"
  },
  {
    "zip": "41731",
    "city": "Cornettsville"
  },
  {
    "zip": "41735",
    "city": "Delphia"
  },
  {
    "zip": "41740",
    "city": "Emmalena"
  },
  {
    "zip": "41745",
    "city": "Gays Creek"
  },
  {
    "zip": "41746",
    "city": "Happy"
  },
  {
    "zip": "41749",
    "city": "Hyden"
  },
  {
    "zip": "41751",
    "city": "Jeff"
  },
  {
    "zip": "41754",
    "city": "Krypton"
  },
  {
    "zip": "41759",
    "city": "Sassafras"
  },
  {
    "zip": "41760",
    "city": "Scuddy"
  },
  {
    "zip": "41762",
    "city": "Sizerock"
  },
  {
    "zip": "41763",
    "city": "Slemp"
  },
  {
    "zip": "41764",
    "city": "Smilax"
  },
  {
    "zip": "41766",
    "city": "Thousandsticks"
  },
  {
    "zip": "41772",
    "city": "Vest"
  },
  {
    "zip": "41773",
    "city": "Vicco"
  },
  {
    "zip": "41774",
    "city": "Viper"
  },
  {
    "zip": "41775",
    "city": "Wendover"
  },
  {
    "zip": "41776",
    "city": "Wooton"
  },
  {
    "zip": "41777",
    "city": "Yeaddiss"
  },
  {
    "zip": "41804",
    "city": "Blackey"
  },
  {
    "zip": "41812",
    "city": "Deane"
  },
  {
    "zip": "41815",
    "city": "Ermine"
  },
  {
    "zip": "41821",
    "city": "Hallie"
  },
  {
    "zip": "41822",
    "city": "Hindman"
  },
  {
    "zip": "41824",
    "city": "Isom"
  },
  {
    "zip": "41825",
    "city": "Jackhorn"
  },
  {
    "zip": "41826",
    "city": "Jeremiah"
  },
  {
    "zip": "41831",
    "city": "Leburn"
  },
  {
    "zip": "41832",
    "city": "Letcher"
  },
  {
    "zip": "41833",
    "city": "Linefork"
  },
  {
    "zip": "41834",
    "city": "Littcarr"
  },
  {
    "zip": "41835",
    "city": "Mc Roberts"
  },
  {
    "zip": "41836",
    "city": "Mallie"
  },
  {
    "zip": "41837",
    "city": "Mayking"
  },
  {
    "zip": "41839",
    "city": "Mousie"
  },
  {
    "zip": "41840",
    "city": "Neon"
  },
  {
    "zip": "41843",
    "city": "Pine Top"
  },
  {
    "zip": "41844",
    "city": "Pippa Passes"
  },
  {
    "zip": "41845",
    "city": "Premium"
  },
  {
    "zip": "41847",
    "city": "Redfox"
  },
  {
    "zip": "41848",
    "city": "Roxana"
  },
  {
    "zip": "41859",
    "city": "Dema"
  },
  {
    "zip": "41862",
    "city": "Topmost"
  },
  {
    "zip": "42001",
    "city": "Paducah"
  },
  {
    "zip": "42020",
    "city": "Almo"
  },
  {
    "zip": "42023",
    "city": "Bardwell"
  },
  {
    "zip": "42024",
    "city": "Barlow"
  },
  {
    "zip": "42028",
    "city": "Burna"
  },
  {
    "zip": "42029",
    "city": "Calvert City"
  },
  {
    "zip": "42038",
    "city": "Eddyville"
  },
  {
    "zip": "42039",
    "city": "Fancy Farm"
  },
  {
    "zip": "42045",
    "city": "Grand Rivers"
  },
  {
    "zip": "42048",
    "city": "Hardin"
  },
  {
    "zip": "42049",
    "city": "Hazel"
  },
  {
    "zip": "42053",
    "city": "Kevil"
  },
  {
    "zip": "42054",
    "city": "Kirksey"
  },
  {
    "zip": "42055",
    "city": "Kuttawa"
  },
  {
    "zip": "42056",
    "city": "La Center"
  },
  {
    "zip": "42058",
    "city": "Ledbetter"
  },
  {
    "zip": "42069",
    "city": "Melber"
  },
  {
    "zip": "42071",
    "city": "Murray"
  },
  {
    "zip": "42076",
    "city": "New Concord"
  },
  {
    "zip": "42079",
    "city": "Sedalia"
  },
  {
    "zip": "42081",
    "city": "Smithland"
  },
  {
    "zip": "42082",
    "city": "Symsonia"
  },
  {
    "zip": "42083",
    "city": "Tiline"
  },
  {
    "zip": "42086",
    "city": "West Paducah"
  },
  {
    "zip": "42087",
    "city": "Wickliffe"
  },
  {
    "zip": "42088",
    "city": "Wingo"
  },
  {
    "zip": "42120",
    "city": "Adolphus"
  },
  {
    "zip": "42122",
    "city": "Alvaton"
  },
  {
    "zip": "42127",
    "city": "Cave City"
  },
  {
    "zip": "42129",
    "city": "Edmonton"
  },
  {
    "zip": "42130",
    "city": "Eighty Eight"
  },
  {
    "zip": "42131",
    "city": "Etoile"
  },
  {
    "zip": "42133",
    "city": "Fountain Run"
  },
  {
    "zip": "42140",
    "city": "Gamaliel"
  },
  {
    "zip": "42151",
    "city": "Hestand"
  },
  {
    "zip": "42154",
    "city": "Knob Lick"
  },
  {
    "zip": "42156",
    "city": "Lucas"
  },
  {
    "zip": "42157",
    "city": "Mount Hermon"
  },
  {
    "zip": "42160",
    "city": "Park City"
  },
  {
    "zip": "42166",
    "city": "Summer Shade"
  },
  {
    "zip": "42167",
    "city": "Tompkinsville"
  },
  {
    "zip": "42170",
    "city": "Woodburn"
  },
  {
    "zip": "42171",
    "city": "Smiths Grove"
  },
  {
    "zip": "42202",
    "city": "Adairville"
  },
  {
    "zip": "42207",
    "city": "Bee Spring"
  },
  {
    "zip": "42211",
    "city": "Cadiz"
  },
  {
    "zip": "42214",
    "city": "Center"
  },
  {
    "zip": "42215",
    "city": "Cerulean"
  },
  {
    "zip": "42223",
    "city": "Fort Campbell"
  },
  {
    "zip": "42232",
    "city": "Gracey"
  },
  {
    "zip": "42234",
    "city": "Guthrie"
  },
  {
    "zip": "42240",
    "city": "Hopkinsville"
  },
  {
    "zip": "42252",
    "city": "Jetson"
  },
  {
    "zip": "42259",
    "city": "Mammoth Cave"
  },
  {
    "zip": "42262",
    "city": "Oak Grove"
  },
  {
    "zip": "42265",
    "city": "Olmstead"
  },
  {
    "zip": "42274",
    "city": "Rockfield"
  },
  {
    "zip": "42275",
    "city": "Roundhill"
  },
  {
    "zip": "42280",
    "city": "Sharon Grove"
  },
  {
    "zip": "42285",
    "city": "Sweeden"
  },
  {
    "zip": "42287",
    "city": "Welchs Creek"
  },
  {
    "zip": "42301",
    "city": "Owensboro"
  },
  {
    "zip": "42320",
    "city": "Beaver Dam"
  },
  {
    "zip": "42323",
    "city": "Beechmont"
  },
  {
    "zip": "42326",
    "city": "Browder"
  },
  {
    "zip": "42328",
    "city": "Centertown"
  },
  {
    "zip": "42337",
    "city": "Drakesboro"
  },
  {
    "zip": "42339",
    "city": "Dunmor"
  },
  {
    "zip": "42343",
    "city": "Fordsville"
  },
  {
    "zip": "42348",
    "city": "Hawesville"
  },
  {
    "zip": "42349",
    "city": "Horse Branch"
  },
  {
    "zip": "42350",
    "city": "Island"
  },
  {
    "zip": "42351",
    "city": "Lewisport"
  },
  {
    "zip": "42355",
    "city": "Maceo"
  },
  {
    "zip": "42361",
    "city": "Olaton"
  },
  {
    "zip": "42366",
    "city": "Philpot"
  },
  {
    "zip": "42367",
    "city": "Powderly"
  },
  {
    "zip": "42368",
    "city": "Reynolds Station"
  },
  {
    "zip": "42371",
    "city": "Rumsey"
  },
  {
    "zip": "42403",
    "city": "Blackford"
  },
  {
    "zip": "42406",
    "city": "Corydon"
  },
  {
    "zip": "42408",
    "city": "Dawson Springs"
  },
  {
    "zip": "42409",
    "city": "Dixon"
  },
  {
    "zip": "42410",
    "city": "Earlington"
  },
  {
    "zip": "42436",
    "city": "Manitou"
  },
  {
    "zip": "42437",
    "city": "Morganfield"
  },
  {
    "zip": "42442",
    "city": "Nortonville"
  },
  {
    "zip": "42451",
    "city": "Reed"
  },
  {
    "zip": "42452",
    "city": "Robards"
  },
  {
    "zip": "42455",
    "city": "Sebree"
  },
  {
    "zip": "42456",
    "city": "Slaughters"
  },
  {
    "zip": "42458",
    "city": "Spottsville"
  },
  {
    "zip": "42516",
    "city": "Bethelridge"
  },
  {
    "zip": "42518",
    "city": "Bronston"
  },
  {
    "zip": "42519",
    "city": "Burnside"
  },
  {
    "zip": "42528",
    "city": "Dunnville"
  },
  {
    "zip": "42544",
    "city": "Nancy"
  },
  {
    "zip": "42553",
    "city": "Science Hill"
  },
  {
    "zip": "42566",
    "city": "Yosemite"
  },
  {
    "zip": "42567",
    "city": "Eubank"
  },
  {
    "zip": "42603",
    "city": "Alpha"
  },
  {
    "zip": "42634",
    "city": "Parkers Lake"
  },
  {
    "zip": "42635",
    "city": "Pine Knot"
  },
  {
    "zip": "42638",
    "city": "Revelo"
  },
  {
    "zip": "42642",
    "city": "Russell Springs"
  },
  {
    "zip": "42647",
    "city": "Stearns"
  },
  {
    "zip": "42649",
    "city": "Strunk"
  },
  {
    "zip": "42653",
    "city": "Whitley City"
  },
  {
    "zip": "42712",
    "city": "Big Clifty"
  },
  {
    "zip": "42713",
    "city": "Bonnieville"
  },
  {
    "zip": "42715",
    "city": "Breeding"
  },
  {
    "zip": "42717",
    "city": "Burkesville"
  },
  {
    "zip": "42718",
    "city": "Campbellsville"
  },
  {
    "zip": "42721",
    "city": "Caneyville"
  },
  {
    "zip": "42722",
    "city": "Canmer"
  },
  {
    "zip": "42724",
    "city": "Cecilia"
  },
  {
    "zip": "42726",
    "city": "Clarkson"
  },
  {
    "zip": "42729",
    "city": "Cub Run"
  },
  {
    "zip": "42731",
    "city": "Dubre"
  },
  {
    "zip": "42732",
    "city": "Eastview"
  },
  {
    "zip": "42733",
    "city": "Elk Horn"
  },
  {
    "zip": "42740",
    "city": "Glendale"
  },
  {
    "zip": "42741",
    "city": "Glens Fork"
  },
  {
    "zip": "42742",
    "city": "Gradyville"
  },
  {
    "zip": "42748",
    "city": "Hodgenville"
  },
  {
    "zip": "42749",
    "city": "Horse Cave"
  },
  {
    "zip": "42753",
    "city": "Knifley"
  },
  {
    "zip": "42754",
    "city": "Leitchfield"
  },
  {
    "zip": "42764",
    "city": "Mount Sherman"
  },
  {
    "zip": "42765",
    "city": "Munfordville"
  },
  {
    "zip": "42776",
    "city": "Sonora"
  },
  {
    "zip": "42788",
    "city": "White Mills"
  },
  {
    "zip": "43003",
    "city": "Ashley"
  },
  {
    "zip": "43004",
    "city": "Blacklick"
  },
  {
    "zip": "43006",
    "city": "Brinkhaven"
  },
  {
    "zip": "43009",
    "city": "Cable"
  },
  {
    "zip": "43011",
    "city": "Centerburg"
  },
  {
    "zip": "43013",
    "city": "Croton"
  },
  {
    "zip": "43015",
    "city": "Delaware"
  },
  {
    "zip": "43022",
    "city": "Gambier"
  },
  {
    "zip": "43035",
    "city": "Lewis Center"
  },
  {
    "zip": "43045",
    "city": "Milford Center"
  },
  {
    "zip": "43046",
    "city": "Millersport"
  },
  {
    "zip": "43060",
    "city": "North Lewisburg"
  },
  {
    "zip": "43061",
    "city": "Ostrander"
  },
  {
    "zip": "43062",
    "city": "Pataskala"
  },
  {
    "zip": "43064",
    "city": "Plain City"
  },
  {
    "zip": "43066",
    "city": "Radnor"
  },
  {
    "zip": "43068",
    "city": "Reynoldsburg"
  },
  {
    "zip": "43071",
    "city": "Saint Louisville"
  },
  {
    "zip": "43072",
    "city": "Saint Paris"
  },
  {
    "zip": "43076",
    "city": "Thornville"
  },
  {
    "zip": "43078",
    "city": "Urbana"
  },
  {
    "zip": "43081",
    "city": "Westerville"
  },
  {
    "zip": "43102",
    "city": "Amanda"
  },
  {
    "zip": "43110",
    "city": "Canal Winchester"
  },
  {
    "zip": "43112",
    "city": "Carroll"
  },
  {
    "zip": "43116",
    "city": "Commercial Point"
  },
  {
    "zip": "43119",
    "city": "Galloway"
  },
  {
    "zip": "43125",
    "city": "Groveport"
  },
  {
    "zip": "43135",
    "city": "Laurelville"
  },
  {
    "zip": "43136",
    "city": "Lithopolis"
  },
  {
    "zip": "43137",
    "city": "Lockbourne"
  },
  {
    "zip": "43147",
    "city": "Pickerington"
  },
  {
    "zip": "43149",
    "city": "Rockbridge"
  },
  {
    "zip": "43152",
    "city": "South Bloomingville"
  },
  {
    "zip": "43153",
    "city": "South Solon"
  },
  {
    "zip": "43154",
    "city": "Stoutsville"
  },
  {
    "zip": "43160",
    "city": "Washington Court House"
  },
  {
    "zip": "43163",
    "city": "West Rushville"
  },
  {
    "zip": "43310",
    "city": "Belle Center"
  },
  {
    "zip": "43315",
    "city": "Cardington"
  },
  {
    "zip": "43316",
    "city": "Carey"
  },
  {
    "zip": "43318",
    "city": "De Graff"
  },
  {
    "zip": "43319",
    "city": "East Liberty"
  },
  {
    "zip": "43323",
    "city": "Harpster"
  },
  {
    "zip": "43331",
    "city": "Lakeview"
  },
  {
    "zip": "43332",
    "city": "La Rue"
  },
  {
    "zip": "43334",
    "city": "Marengo"
  },
  {
    "zip": "43337",
    "city": "Morral"
  },
  {
    "zip": "43340",
    "city": "Mount Victory"
  },
  {
    "zip": "43341",
    "city": "New Bloomington"
  },
  {
    "zip": "43347",
    "city": "Rushsylvania"
  },
  {
    "zip": "43348",
    "city": "Russells Point"
  },
  {
    "zip": "43351",
    "city": "Upper Sandusky"
  },
  {
    "zip": "43358",
    "city": "West Mansfield"
  },
  {
    "zip": "43360",
    "city": "Zanesfield"
  },
  {
    "zip": "43406",
    "city": "Bradner"
  },
  {
    "zip": "43407",
    "city": "Burgoon"
  },
  {
    "zip": "43412",
    "city": "Curtice"
  },
  {
    "zip": "43413",
    "city": "Cygnet"
  },
  {
    "zip": "43431",
    "city": "Gibsonburg"
  },
  {
    "zip": "43432",
    "city": "Graytown"
  },
  {
    "zip": "43440",
    "city": "Lakeside Marblehead"
  },
  {
    "zip": "43442",
    "city": "Lindsey"
  },
  {
    "zip": "43443",
    "city": "Luckey"
  },
  {
    "zip": "43449",
    "city": "Oak Harbor"
  },
  {
    "zip": "43450",
    "city": "Pemberville"
  },
  {
    "zip": "43452",
    "city": "Port Clinton"
  },
  {
    "zip": "43457",
    "city": "Risingsun"
  },
  {
    "zip": "43460",
    "city": "Rossford"
  },
  {
    "zip": "43462",
    "city": "Rudolph"
  },
  {
    "zip": "43464",
    "city": "Vickery"
  },
  {
    "zip": "43465",
    "city": "Walbridge"
  },
  {
    "zip": "43501",
    "city": "Alvordton"
  },
  {
    "zip": "43502",
    "city": "Archbold"
  },
  {
    "zip": "43504",
    "city": "Berkey"
  },
  {
    "zip": "43506",
    "city": "Bryan"
  },
  {
    "zip": "43511",
    "city": "Custar"
  },
  {
    "zip": "43512",
    "city": "Defiance"
  },
  {
    "zip": "43516",
    "city": "Deshler"
  },
  {
    "zip": "43517",
    "city": "Edgerton"
  },
  {
    "zip": "43518",
    "city": "Edon"
  },
  {
    "zip": "43522",
    "city": "Grand Rapids"
  },
  {
    "zip": "43524",
    "city": "Hamler"
  },
  {
    "zip": "43525",
    "city": "Haskins"
  },
  {
    "zip": "43527",
    "city": "Holgate"
  },
  {
    "zip": "43532",
    "city": "Liberty Center"
  },
  {
    "zip": "43535",
    "city": "Malinta"
  },
  {
    "zip": "43536",
    "city": "Mark Center"
  },
  {
    "zip": "43537",
    "city": "Maumee"
  },
  {
    "zip": "43540",
    "city": "Metamora"
  },
  {
    "zip": "43541",
    "city": "Milton Center"
  },
  {
    "zip": "43542",
    "city": "Monclova"
  },
  {
    "zip": "43545",
    "city": "Napoleon"
  },
  {
    "zip": "43548",
    "city": "New Bavaria"
  },
  {
    "zip": "43549",
    "city": "Ney"
  },
  {
    "zip": "43557",
    "city": "Stryker"
  },
  {
    "zip": "43567",
    "city": "Wauseon"
  },
  {
    "zip": "43570",
    "city": "West Unity"
  },
  {
    "zip": "43571",
    "city": "Whitehouse"
  },
  {
    "zip": "43601",
    "city": "Toledo"
  },
  {
    "zip": "43616",
    "city": "Oregon"
  },
  {
    "zip": "43701",
    "city": "Zanesville"
  },
  {
    "zip": "43720",
    "city": "Blue Rock"
  },
  {
    "zip": "43723",
    "city": "Byesville"
  },
  {
    "zip": "43727",
    "city": "Chandlersville"
  },
  {
    "zip": "43728",
    "city": "Chesterhill"
  },
  {
    "zip": "43731",
    "city": "Crooksville"
  },
  {
    "zip": "43734",
    "city": "Duncan Falls"
  },
  {
    "zip": "43747",
    "city": "Jerusalem"
  },
  {
    "zip": "43749",
    "city": "Kimbolton"
  },
  {
    "zip": "43755",
    "city": "Lore City"
  },
  {
    "zip": "43756",
    "city": "Mcconnelsville"
  },
  {
    "zip": "43758",
    "city": "Malta"
  },
  {
    "zip": "43760",
    "city": "Mount Perry"
  },
  {
    "zip": "43764",
    "city": "New Lexington"
  },
  {
    "zip": "43766",
    "city": "New Straitsville"
  },
  {
    "zip": "43771",
    "city": "Philo"
  },
  {
    "zip": "43772",
    "city": "Pleasant City"
  },
  {
    "zip": "43773",
    "city": "Quaker City"
  },
  {
    "zip": "43777",
    "city": "Roseville"
  },
  {
    "zip": "43778",
    "city": "Salesville"
  },
  {
    "zip": "43779",
    "city": "Sarahsville"
  },
  {
    "zip": "43780",
    "city": "Senecaville"
  },
  {
    "zip": "43782",
    "city": "Shawnee"
  },
  {
    "zip": "43787",
    "city": "Stockport"
  },
  {
    "zip": "43793",
    "city": "Woodsfield"
  },
  {
    "zip": "43811",
    "city": "Conesville"
  },
  {
    "zip": "43812",
    "city": "Coshocton"
  },
  {
    "zip": "43822",
    "city": "Frazeysburg"
  },
  {
    "zip": "43824",
    "city": "Fresno"
  },
  {
    "zip": "43830",
    "city": "Nashport"
  },
  {
    "zip": "43832",
    "city": "Newcomerstown"
  },
  {
    "zip": "43840",
    "city": "Stone Creek"
  },
  {
    "zip": "43843",
    "city": "Walhonding"
  },
  {
    "zip": "43845",
    "city": "West Lafayette"
  },
  {
    "zip": "43901",
    "city": "Adena"
  },
  {
    "zip": "43902",
    "city": "Alledonia"
  },
  {
    "zip": "43906",
    "city": "Bellaire"
  },
  {
    "zip": "43908",
    "city": "Bergholz"
  },
  {
    "zip": "43917",
    "city": "Dillonvale"
  },
  {
    "zip": "43920",
    "city": "East Liverpool"
  },
  {
    "zip": "43930",
    "city": "Hammondsville"
  },
  {
    "zip": "43932",
    "city": "Irondale"
  },
  {
    "zip": "43933",
    "city": "Jacobsburg"
  },
  {
    "zip": "43935",
    "city": "Martins Ferry"
  },
  {
    "zip": "43938",
    "city": "Mingo Junction"
  },
  {
    "zip": "43942",
    "city": "Powhatan Point"
  },
  {
    "zip": "43943",
    "city": "Rayland"
  },
  {
    "zip": "43945",
    "city": "Salineville"
  },
  {
    "zip": "43947",
    "city": "Shadyside"
  },
  {
    "zip": "43950",
    "city": "Saint Clairsville"
  },
  {
    "zip": "43952",
    "city": "Steubenville"
  },
  {
    "zip": "43963",
    "city": "Tiltonsville"
  },
  {
    "zip": "43964",
    "city": "Toronto"
  },
  {
    "zip": "44004",
    "city": "Ashtabula"
  },
  {
    "zip": "44010",
    "city": "Austinburg"
  },
  {
    "zip": "44012",
    "city": "Avon Lake"
  },
  {
    "zip": "44022",
    "city": "Chagrin Falls"
  },
  {
    "zip": "44024",
    "city": "Chardon"
  },
  {
    "zip": "44026",
    "city": "Chesterland"
  },
  {
    "zip": "44028",
    "city": "Columbia Station"
  },
  {
    "zip": "44030",
    "city": "Conneaut"
  },
  {
    "zip": "44035",
    "city": "Elyria"
  },
  {
    "zip": "44039",
    "city": "North Ridgeville"
  },
  {
    "zip": "44040",
    "city": "Gates Mills"
  },
  {
    "zip": "44046",
    "city": "Huntsburg"
  },
  {
    "zip": "44052",
    "city": "Lorain"
  },
  {
    "zip": "44054",
    "city": "Sheffield Lake"
  },
  {
    "zip": "44056",
    "city": "Macedonia"
  },
  {
    "zip": "44060",
    "city": "Mentor"
  },
  {
    "zip": "44070",
    "city": "North Olmsted"
  },
  {
    "zip": "44072",
    "city": "Novelty"
  },
  {
    "zip": "44074",
    "city": "Oberlin"
  },
  {
    "zip": "44077",
    "city": "Painesville"
  },
  {
    "zip": "44082",
    "city": "Pierpont"
  },
  {
    "zip": "44087",
    "city": "Twinsburg"
  },
  {
    "zip": "44089",
    "city": "Vermilion"
  },
  {
    "zip": "44093",
    "city": "Williamsfield"
  },
  {
    "zip": "44094",
    "city": "Willoughby"
  },
  {
    "zip": "44095",
    "city": "Eastlake"
  },
  {
    "zip": "44116",
    "city": "Rocky River"
  },
  {
    "zip": "44117",
    "city": "Euclid"
  },
  {
    "zip": "44133",
    "city": "North Royalton"
  },
  {
    "zip": "44136",
    "city": "Strongsville"
  },
  {
    "zip": "44137",
    "city": "Maple Heights"
  },
  {
    "zip": "44138",
    "city": "Olmsted Falls"
  },
  {
    "zip": "44140",
    "city": "Bay Village"
  },
  {
    "zip": "44141",
    "city": "Brecksville"
  },
  {
    "zip": "44142",
    "city": "Brookpark"
  },
  {
    "zip": "44145",
    "city": "Westlake"
  },
  {
    "zip": "44147",
    "city": "Broadview Heights"
  },
  {
    "zip": "44201",
    "city": "Atwater"
  },
  {
    "zip": "44203",
    "city": "Barberton"
  },
  {
    "zip": "44214",
    "city": "Burbank"
  },
  {
    "zip": "44215",
    "city": "Chippewa Lake"
  },
  {
    "zip": "44221",
    "city": "Cuyahoga Falls"
  },
  {
    "zip": "44231",
    "city": "Garrettsville"
  },
  {
    "zip": "44233",
    "city": "Hinckley"
  },
  {
    "zip": "44241",
    "city": "Streetsboro"
  },
  {
    "zip": "44260",
    "city": "Mogadore"
  },
  {
    "zip": "44262",
    "city": "Munroe Falls"
  },
  {
    "zip": "44264",
    "city": "Peninsula"
  },
  {
    "zip": "44270",
    "city": "Rittman"
  },
  {
    "zip": "44272",
    "city": "Rootstown"
  },
  {
    "zip": "44278",
    "city": "Tallmadge"
  },
  {
    "zip": "44280",
    "city": "Valley City"
  },
  {
    "zip": "44281",
    "city": "Wadsworth"
  },
  {
    "zip": "44287",
    "city": "West Salem"
  },
  {
    "zip": "44401",
    "city": "Berlin Center"
  },
  {
    "zip": "44402",
    "city": "Bristolville"
  },
  {
    "zip": "44404",
    "city": "Burghill"
  },
  {
    "zip": "44406",
    "city": "Canfield"
  },
  {
    "zip": "44412",
    "city": "Diamond"
  },
  {
    "zip": "44413",
    "city": "East Palestine"
  },
  {
    "zip": "44417",
    "city": "Farmdale"
  },
  {
    "zip": "44418",
    "city": "Fowler"
  },
  {
    "zip": "44423",
    "city": "Hanoverton"
  },
  {
    "zip": "44425",
    "city": "Hubbard"
  },
  {
    "zip": "44428",
    "city": "Kinsman"
  },
  {
    "zip": "44429",
    "city": "Lake Milton"
  },
  {
    "zip": "44430",
    "city": "Leavittsburg"
  },
  {
    "zip": "44431",
    "city": "Leetonia"
  },
  {
    "zip": "44436",
    "city": "Lowellville"
  },
  {
    "zip": "44438",
    "city": "Masury"
  },
  {
    "zip": "44440",
    "city": "Mineral Ridge"
  },
  {
    "zip": "44441",
    "city": "Negley"
  },
  {
    "zip": "44442",
    "city": "New Middletown"
  },
  {
    "zip": "44443",
    "city": "New Springfield"
  },
  {
    "zip": "44444",
    "city": "Newton Falls"
  },
  {
    "zip": "44445",
    "city": "New Waterford"
  },
  {
    "zip": "44446",
    "city": "Niles"
  },
  {
    "zip": "44449",
    "city": "North Benton"
  },
  {
    "zip": "44450",
    "city": "North Bloomfield"
  },
  {
    "zip": "44451",
    "city": "North Jackson"
  },
  {
    "zip": "44452",
    "city": "North Lima"
  },
  {
    "zip": "44471",
    "city": "Struthers"
  },
  {
    "zip": "44491",
    "city": "West Farmington"
  },
  {
    "zip": "44601",
    "city": "Alliance"
  },
  {
    "zip": "44606",
    "city": "Apple Creek"
  },
  {
    "zip": "44608",
    "city": "Beach City"
  },
  {
    "zip": "44609",
    "city": "Beloit"
  },
  {
    "zip": "44611",
    "city": "Big Prairie"
  },
  {
    "zip": "44614",
    "city": "Canal Fulton"
  },
  {
    "zip": "44620",
    "city": "Dellroy"
  },
  {
    "zip": "44621",
    "city": "Dennison"
  },
  {
    "zip": "44626",
    "city": "East Sparta"
  },
  {
    "zip": "44629",
    "city": "Gnadenhutten"
  },
  {
    "zip": "44631",
    "city": "Harlem Springs"
  },
  {
    "zip": "44632",
    "city": "Hartville"
  },
  {
    "zip": "44633",
    "city": "Holmesville"
  },
  {
    "zip": "44634",
    "city": "Homeworth"
  },
  {
    "zip": "44637",
    "city": "Killbuck"
  },
  {
    "zip": "44646",
    "city": "Massillon"
  },
  {
    "zip": "44651",
    "city": "Mechanicstown"
  },
  {
    "zip": "44656",
    "city": "Mineral City"
  },
  {
    "zip": "44675",
    "city": "Sherrodsville"
  },
  {
    "zip": "44676",
    "city": "Shreve"
  },
  {
    "zip": "44681",
    "city": "Sugarcreek"
  },
  {
    "zip": "44683",
    "city": "Uhrichsville"
  },
  {
    "zip": "44691",
    "city": "Wooster"
  },
  {
    "zip": "44695",
    "city": "Bowerston"
  },
  {
    "zip": "44699",
    "city": "Tippecanoe"
  },
  {
    "zip": "44730",
    "city": "East Canton"
  },
  {
    "zip": "44802",
    "city": "Alvada"
  },
  {
    "zip": "44813",
    "city": "Bellville"
  },
  {
    "zip": "44814",
    "city": "Berlin Heights"
  },
  {
    "zip": "44817",
    "city": "Bloomdale"
  },
  {
    "zip": "44820",
    "city": "Bucyrus"
  },
  {
    "zip": "44827",
    "city": "Crestline"
  },
  {
    "zip": "44830",
    "city": "Fostoria"
  },
  {
    "zip": "44833",
    "city": "Galion"
  },
  {
    "zip": "44836",
    "city": "Green Springs"
  },
  {
    "zip": "44840",
    "city": "Jeromesville"
  },
  {
    "zip": "44841",
    "city": "Kansas"
  },
  {
    "zip": "44842",
    "city": "Loudonville"
  },
  {
    "zip": "44844",
    "city": "Mc Cutchenville"
  },
  {
    "zip": "44849",
    "city": "Nevada"
  },
  {
    "zip": "44853",
    "city": "New Riegel"
  },
  {
    "zip": "44854",
    "city": "New Washington"
  },
  {
    "zip": "44855",
    "city": "North Fairfield"
  },
  {
    "zip": "44859",
    "city": "Nova"
  },
  {
    "zip": "44864",
    "city": "Perrysville"
  },
  {
    "zip": "44867",
    "city": "Republic"
  },
  {
    "zip": "44870",
    "city": "Sandusky"
  },
  {
    "zip": "44883",
    "city": "Tiffin"
  },
  {
    "zip": "44887",
    "city": "Tiro"
  },
  {
    "zip": "44889",
    "city": "Wakeman"
  },
  {
    "zip": "45002",
    "city": "Cleves"
  },
  {
    "zip": "45003",
    "city": "College Corner"
  },
  {
    "zip": "45034",
    "city": "Kings Mills"
  },
  {
    "zip": "45039",
    "city": "Maineville"
  },
  {
    "zip": "45051",
    "city": "Mount Saint Joseph"
  },
  {
    "zip": "45053",
    "city": "Okeana"
  },
  {
    "zip": "45054",
    "city": "Oregonia"
  },
  {
    "zip": "45065",
    "city": "South Lebanon"
  },
  {
    "zip": "45102",
    "city": "Amelia"
  },
  {
    "zip": "45107",
    "city": "Blanchester"
  },
  {
    "zip": "45111",
    "city": "Camp Dennison"
  },
  {
    "zip": "45120",
    "city": "Felicity"
  },
  {
    "zip": "45130",
    "city": "Hamersville"
  },
  {
    "zip": "45140",
    "city": "Loveland"
  },
  {
    "zip": "45154",
    "city": "Mount Orab"
  },
  {
    "zip": "45157",
    "city": "New Richmond"
  },
  {
    "zip": "45159",
    "city": "New Vienna"
  },
  {
    "zip": "45160",
    "city": "Owensville"
  },
  {
    "zip": "45162",
    "city": "Pleasant Plain"
  },
  {
    "zip": "45169",
    "city": "Sabina"
  },
  {
    "zip": "45174",
    "city": "Terrace Park"
  },
  {
    "zip": "45202",
    "city": "Cincinnati"
  },
  {
    "zip": "45302",
    "city": "Anna"
  },
  {
    "zip": "45304",
    "city": "Arcanum"
  },
  {
    "zip": "45305",
    "city": "Bellbrook"
  },
  {
    "zip": "45306",
    "city": "Botkins"
  },
  {
    "zip": "45312",
    "city": "Casstown"
  },
  {
    "zip": "45321",
    "city": "Eldorado"
  },
  {
    "zip": "45323",
    "city": "Enon"
  },
  {
    "zip": "45324",
    "city": "Fairborn"
  },
  {
    "zip": "45325",
    "city": "Farmersville"
  },
  {
    "zip": "45332",
    "city": "Hollansburg"
  },
  {
    "zip": "45337",
    "city": "Laura"
  },
  {
    "zip": "45339",
    "city": "Ludlow Falls"
  },
  {
    "zip": "45342",
    "city": "Miamisburg"
  },
  {
    "zip": "45344",
    "city": "New Carlisle"
  },
  {
    "zip": "45346",
    "city": "New Madison"
  },
  {
    "zip": "45348",
    "city": "New Weston"
  },
  {
    "zip": "45356",
    "city": "Piqua"
  },
  {
    "zip": "45362",
    "city": "Rossburg"
  },
  {
    "zip": "45363",
    "city": "Russia"
  },
  {
    "zip": "45368",
    "city": "South Charleston"
  },
  {
    "zip": "45369",
    "city": "South Vienna"
  },
  {
    "zip": "45371",
    "city": "Tipp City"
  },
  {
    "zip": "45377",
    "city": "Vandalia"
  },
  {
    "zip": "45381",
    "city": "West Alexandria"
  },
  {
    "zip": "45382",
    "city": "West Manchester"
  },
  {
    "zip": "45385",
    "city": "Xenia"
  },
  {
    "zip": "45387",
    "city": "Yellow Springs"
  },
  {
    "zip": "45388",
    "city": "Yorkshire"
  },
  {
    "zip": "45601",
    "city": "Chillicothe"
  },
  {
    "zip": "45614",
    "city": "Bidwell"
  },
  {
    "zip": "45616",
    "city": "Blue Creek"
  },
  {
    "zip": "45623",
    "city": "Crown City"
  },
  {
    "zip": "45629",
    "city": "Franklin Furnace"
  },
  {
    "zip": "45631",
    "city": "Gallipolis"
  },
  {
    "zip": "45638",
    "city": "Ironton"
  },
  {
    "zip": "45645",
    "city": "Kitts Hill"
  },
  {
    "zip": "45648",
    "city": "Lucasville"
  },
  {
    "zip": "45650",
    "city": "Lynx"
  },
  {
    "zip": "45651",
    "city": "Mc Arthur"
  },
  {
    "zip": "45652",
    "city": "Mc Dermott"
  },
  {
    "zip": "45653",
    "city": "Minford"
  },
  {
    "zip": "45654",
    "city": "New Plymouth"
  },
  {
    "zip": "45657",
    "city": "Otway"
  },
  {
    "zip": "45658",
    "city": "Patriot"
  },
  {
    "zip": "45659",
    "city": "Pedro"
  },
  {
    "zip": "45660",
    "city": "Peebles"
  },
  {
    "zip": "45661",
    "city": "Piketon"
  },
  {
    "zip": "45663",
    "city": "West Portsmouth"
  },
  {
    "zip": "45669",
    "city": "Proctorville"
  },
  {
    "zip": "45671",
    "city": "Rarden"
  },
  {
    "zip": "45672",
    "city": "Ray"
  },
  {
    "zip": "45673",
    "city": "Richmond Dale"
  },
  {
    "zip": "45678",
    "city": "Scottown"
  },
  {
    "zip": "45679",
    "city": "Seaman"
  },
  {
    "zip": "45680",
    "city": "South Point"
  },
  {
    "zip": "45682",
    "city": "South Webster"
  },
  {
    "zip": "45684",
    "city": "Stout"
  },
  {
    "zip": "45685",
    "city": "Thurman"
  },
  {
    "zip": "45692",
    "city": "Wellston"
  },
  {
    "zip": "45694",
    "city": "Wheelersburg"
  },
  {
    "zip": "45695",
    "city": "Wilkesville"
  },
  {
    "zip": "45696",
    "city": "Willow Wood"
  },
  {
    "zip": "45711",
    "city": "Amesville"
  },
  {
    "zip": "45714",
    "city": "Belpre"
  },
  {
    "zip": "45721",
    "city": "Coal Run"
  },
  {
    "zip": "45723",
    "city": "Coolville"
  },
  {
    "zip": "45727",
    "city": "Dexter City"
  },
  {
    "zip": "45732",
    "city": "Glouster"
  },
  {
    "zip": "45735",
    "city": "Guysville"
  },
  {
    "zip": "45741",
    "city": "Langsville"
  },
  {
    "zip": "45742",
    "city": "Little Hocking"
  },
  {
    "zip": "45743",
    "city": "Long Bottom"
  },
  {
    "zip": "45745",
    "city": "Lower Salem"
  },
  {
    "zip": "45746",
    "city": "Macksburg"
  },
  {
    "zip": "45761",
    "city": "Millfield"
  },
  {
    "zip": "45764",
    "city": "Nelsonville"
  },
  {
    "zip": "45766",
    "city": "New Marshfield"
  },
  {
    "zip": "45767",
    "city": "New Matamoras"
  },
  {
    "zip": "45769",
    "city": "Pomeroy"
  },
  {
    "zip": "45773",
    "city": "Reno"
  },
  {
    "zip": "45776",
    "city": "Shade"
  },
  {
    "zip": "45788",
    "city": "Whipple"
  },
  {
    "zip": "45789",
    "city": "Wingett Run"
  },
  {
    "zip": "45809",
    "city": "Gomer"
  },
  {
    "zip": "45810",
    "city": "Ada"
  },
  {
    "zip": "45812",
    "city": "Alger"
  },
  {
    "zip": "45830",
    "city": "Columbus Grove"
  },
  {
    "zip": "45831",
    "city": "Continental"
  },
  {
    "zip": "45832",
    "city": "Convoy"
  },
  {
    "zip": "45833",
    "city": "Delphos"
  },
  {
    "zip": "45835",
    "city": "Dola"
  },
  {
    "zip": "45840",
    "city": "Findlay"
  },
  {
    "zip": "45841",
    "city": "Jenera"
  },
  {
    "zip": "45844",
    "city": "Fort Jennings"
  },
  {
    "zip": "45845",
    "city": "Fort Loramie"
  },
  {
    "zip": "45846",
    "city": "Fort Recovery"
  },
  {
    "zip": "45849",
    "city": "Grover Hill"
  },
  {
    "zip": "45850",
    "city": "Harrod"
  },
  {
    "zip": "45851",
    "city": "Haviland"
  },
  {
    "zip": "45856",
    "city": "Leipsic"
  },
  {
    "zip": "45858",
    "city": "Mc Comb"
  },
  {
    "zip": "45860",
    "city": "Maria Stein"
  },
  {
    "zip": "45863",
    "city": "Middle Point"
  },
  {
    "zip": "45865",
    "city": "Minster"
  },
  {
    "zip": "45867",
    "city": "Mount Blanchard"
  },
  {
    "zip": "45868",
    "city": "Mount Cory"
  },
  {
    "zip": "45869",
    "city": "New Bremen"
  },
  {
    "zip": "45871",
    "city": "New Knoxville"
  },
  {
    "zip": "45872",
    "city": "North Baltimore"
  },
  {
    "zip": "45874",
    "city": "Ohio City"
  },
  {
    "zip": "45875",
    "city": "Ottawa"
  },
  {
    "zip": "45877",
    "city": "Pandora"
  },
  {
    "zip": "45880",
    "city": "Payne"
  },
  {
    "zip": "45881",
    "city": "Rawson"
  },
  {
    "zip": "45883",
    "city": "Saint Henry"
  },
  {
    "zip": "45886",
    "city": "Scott"
  },
  {
    "zip": "45890",
    "city": "Vanlue"
  },
  {
    "zip": "45891",
    "city": "Van Wert"
  },
  {
    "zip": "45894",
    "city": "Venedocia"
  },
  {
    "zip": "45895",
    "city": "Wapakoneta"
  },
  {
    "zip": "45896",
    "city": "Waynesfield"
  },
  {
    "zip": "45898",
    "city": "Willshire"
  },
  {
    "zip": "46036",
    "city": "Elwood"
  },
  {
    "zip": "46037",
    "city": "Fishers"
  },
  {
    "zip": "46040",
    "city": "Fortville"
  },
  {
    "zip": "46044",
    "city": "Frankton"
  },
  {
    "zip": "46048",
    "city": "Ingalls"
  },
  {
    "zip": "46050",
    "city": "Kirklin"
  },
  {
    "zip": "46051",
    "city": "Lapel"
  },
  {
    "zip": "46055",
    "city": "Mc Cordsville"
  },
  {
    "zip": "46056",
    "city": "Markleville"
  },
  {
    "zip": "46057",
    "city": "Michigantown"
  },
  {
    "zip": "46060",
    "city": "Noblesville"
  },
  {
    "zip": "46069",
    "city": "Sheridan"
  },
  {
    "zip": "46070",
    "city": "Summitville"
  },
  {
    "zip": "46071",
    "city": "Thorntown"
  },
  {
    "zip": "46072",
    "city": "Tipton"
  },
  {
    "zip": "46075",
    "city": "Whitestown"
  },
  {
    "zip": "46076",
    "city": "Windfall"
  },
  {
    "zip": "46106",
    "city": "Bargersville"
  },
  {
    "zip": "46107",
    "city": "Beech Grove"
  },
  {
    "zip": "46110",
    "city": "Boggstown"
  },
  {
    "zip": "46112",
    "city": "Brownsburg"
  },
  {
    "zip": "46113",
    "city": "Camby"
  },
  {
    "zip": "46124",
    "city": "Edinburgh"
  },
  {
    "zip": "46126",
    "city": "Fairland"
  },
  {
    "zip": "46130",
    "city": "Fountaintown"
  },
  {
    "zip": "46148",
    "city": "Knightstown"
  },
  {
    "zip": "46149",
    "city": "Lizton"
  },
  {
    "zip": "46150",
    "city": "Manilla"
  },
  {
    "zip": "46163",
    "city": "New Palestine"
  },
  {
    "zip": "46166",
    "city": "Paragon"
  },
  {
    "zip": "46171",
    "city": "Reelsville"
  },
  {
    "zip": "46172",
    "city": "Roachdale"
  },
  {
    "zip": "46180",
    "city": "Stilesville"
  },
  {
    "zip": "46181",
    "city": "Trafalgar"
  },
  {
    "zip": "46182",
    "city": "Waldron"
  },
  {
    "zip": "46184",
    "city": "Whiteland"
  },
  {
    "zip": "46186",
    "city": "Wilkinson"
  },
  {
    "zip": "46201",
    "city": "Indianapolis"
  },
  {
    "zip": "46303",
    "city": "Cedar Lake"
  },
  {
    "zip": "46304",
    "city": "Chesterton"
  },
  {
    "zip": "46310",
    "city": "Demotte"
  },
  {
    "zip": "46312",
    "city": "East Chicago"
  },
  {
    "zip": "46319",
    "city": "Griffith"
  },
  {
    "zip": "46321",
    "city": "Munster"
  },
  {
    "zip": "46340",
    "city": "Hanna"
  },
  {
    "zip": "46347",
    "city": "Kouts"
  },
  {
    "zip": "46349",
    "city": "Lake Village"
  },
  {
    "zip": "46350",
    "city": "La Porte"
  },
  {
    "zip": "46366",
    "city": "North Judson"
  },
  {
    "zip": "46371",
    "city": "Rolling Prairie"
  },
  {
    "zip": "46373",
    "city": "Saint John"
  },
  {
    "zip": "46374",
    "city": "San Pierre"
  },
  {
    "zip": "46375",
    "city": "Schererville"
  },
  {
    "zip": "46390",
    "city": "Wanatah"
  },
  {
    "zip": "46392",
    "city": "Wheatfield"
  },
  {
    "zip": "46402",
    "city": "Gary"
  },
  {
    "zip": "46405",
    "city": "Lake Station"
  },
  {
    "zip": "46410",
    "city": "Merrillville"
  },
  {
    "zip": "46501",
    "city": "Argos"
  },
  {
    "zip": "46504",
    "city": "Bourbon"
  },
  {
    "zip": "46508",
    "city": "Burket"
  },
  {
    "zip": "46510",
    "city": "Claypool"
  },
  {
    "zip": "46511",
    "city": "Culver"
  },
  {
    "zip": "46514",
    "city": "Elkhart"
  },
  {
    "zip": "46524",
    "city": "Etna Green"
  },
  {
    "zip": "46530",
    "city": "Granger"
  },
  {
    "zip": "46531",
    "city": "Grovertown"
  },
  {
    "zip": "46544",
    "city": "Mishawaka"
  },
  {
    "zip": "46550",
    "city": "Nappanee"
  },
  {
    "zip": "46554",
    "city": "North Liberty"
  },
  {
    "zip": "46555",
    "city": "North Webster"
  },
  {
    "zip": "46562",
    "city": "Pierceton"
  },
  {
    "zip": "46565",
    "city": "Shipshewana"
  },
  {
    "zip": "46571",
    "city": "Topeka"
  },
  {
    "zip": "46573",
    "city": "Wakarusa"
  },
  {
    "zip": "46590",
    "city": "Winona Lake"
  },
  {
    "zip": "46601",
    "city": "South Bend"
  },
  {
    "zip": "46710",
    "city": "Avilla"
  },
  {
    "zip": "46725",
    "city": "Columbia City"
  },
  {
    "zip": "46730",
    "city": "Corunna"
  },
  {
    "zip": "46731",
    "city": "Craigville"
  },
  {
    "zip": "46741",
    "city": "Grabill"
  },
  {
    "zip": "46745",
    "city": "Hoagland"
  },
  {
    "zip": "46746",
    "city": "Howe"
  },
  {
    "zip": "46748",
    "city": "Huntertown"
  },
  {
    "zip": "46755",
    "city": "Kendallville"
  },
  {
    "zip": "46759",
    "city": "Keystone"
  },
  {
    "zip": "46760",
    "city": "Kimmell"
  },
  {
    "zip": "46763",
    "city": "Laotto"
  },
  {
    "zip": "46764",
    "city": "Larwill"
  },
  {
    "zip": "46765",
    "city": "Leo"
  },
  {
    "zip": "46770",
    "city": "Markle"
  },
  {
    "zip": "46777",
    "city": "Ossian"
  },
  {
    "zip": "46779",
    "city": "Pleasant Lake"
  },
  {
    "zip": "46781",
    "city": "Poneto"
  },
  {
    "zip": "46784",
    "city": "Rome City"
  },
  {
    "zip": "46785",
    "city": "Saint Joe"
  },
  {
    "zip": "46787",
    "city": "South Whitley"
  },
  {
    "zip": "46794",
    "city": "Wawaka"
  },
  {
    "zip": "46795",
    "city": "Wolcottville"
  },
  {
    "zip": "46798",
    "city": "Yoder"
  },
  {
    "zip": "46802",
    "city": "Fort Wayne"
  },
  {
    "zip": "46911",
    "city": "Amboy"
  },
  {
    "zip": "46913",
    "city": "Bringhurst"
  },
  {
    "zip": "46919",
    "city": "Converse"
  },
  {
    "zip": "46923",
    "city": "Delphi"
  },
  {
    "zip": "46932",
    "city": "Galveston"
  },
  {
    "zip": "46933",
    "city": "Gas City"
  },
  {
    "zip": "46939",
    "city": "Kewanna"
  },
  {
    "zip": "46940",
    "city": "La Fontaine"
  },
  {
    "zip": "46941",
    "city": "Lagro"
  },
  {
    "zip": "46943",
    "city": "Laketon"
  },
  {
    "zip": "46947",
    "city": "Logansport"
  },
  {
    "zip": "46950",
    "city": "Lucerne"
  },
  {
    "zip": "46951",
    "city": "Macy"
  },
  {
    "zip": "46961",
    "city": "New Waverly"
  },
  {
    "zip": "46962",
    "city": "North Manchester"
  },
  {
    "zip": "46968",
    "city": "Ora"
  },
  {
    "zip": "46971",
    "city": "Grissom Arb"
  },
  {
    "zip": "46974",
    "city": "Roann"
  },
  {
    "zip": "46978",
    "city": "Royal Center"
  },
  {
    "zip": "46979",
    "city": "Russiaville"
  },
  {
    "zip": "46985",
    "city": "Star City"
  },
  {
    "zip": "46986",
    "city": "Swayzee"
  },
  {
    "zip": "46988",
    "city": "Twelve Mile"
  },
  {
    "zip": "46989",
    "city": "Upland"
  },
  {
    "zip": "46992",
    "city": "Wabash"
  },
  {
    "zip": "46996",
    "city": "Winamac"
  },
  {
    "zip": "47003",
    "city": "West College Corner"
  },
  {
    "zip": "47018",
    "city": "Dillsboro"
  },
  {
    "zip": "47023",
    "city": "Holton"
  },
  {
    "zip": "47032",
    "city": "Moores Hill"
  },
  {
    "zip": "47036",
    "city": "Oldenburg"
  },
  {
    "zip": "47037",
    "city": "Osgood"
  },
  {
    "zip": "47041",
    "city": "Sunman"
  },
  {
    "zip": "47043",
    "city": "Vevay"
  },
  {
    "zip": "47106",
    "city": "Borden"
  },
  {
    "zip": "47115",
    "city": "Depauw"
  },
  {
    "zip": "47116",
    "city": "Eckerty"
  },
  {
    "zip": "47118",
    "city": "English"
  },
  {
    "zip": "47119",
    "city": "Floyds Knobs"
  },
  {
    "zip": "47123",
    "city": "Grantsburg"
  },
  {
    "zip": "47137",
    "city": "Leavenworth"
  },
  {
    "zip": "47142",
    "city": "Mauckport"
  },
  {
    "zip": "47147",
    "city": "Nabb"
  },
  {
    "zip": "47161",
    "city": "New Salisbury"
  },
  {
    "zip": "47163",
    "city": "Otisco"
  },
  {
    "zip": "47165",
    "city": "Pekin"
  },
  {
    "zip": "47172",
    "city": "Sellersburg"
  },
  {
    "zip": "47175",
    "city": "Taswell"
  },
  {
    "zip": "47177",
    "city": "Underwood"
  },
  {
    "zip": "47220",
    "city": "Brownstown"
  },
  {
    "zip": "47223",
    "city": "Butlerville"
  },
  {
    "zip": "47227",
    "city": "Commiskey"
  },
  {
    "zip": "47229",
    "city": "Crothersville"
  },
  {
    "zip": "47230",
    "city": "Deputy"
  },
  {
    "zip": "47231",
    "city": "Dupont"
  },
  {
    "zip": "47235",
    "city": "Freetown"
  },
  {
    "zip": "47236",
    "city": "Grammer"
  },
  {
    "zip": "47260",
    "city": "Medora"
  },
  {
    "zip": "47264",
    "city": "Norman"
  },
  {
    "zip": "47265",
    "city": "North Vernon"
  },
  {
    "zip": "47270",
    "city": "Paris Crossing"
  },
  {
    "zip": "47273",
    "city": "Scipio"
  },
  {
    "zip": "47281",
    "city": "Vallonia"
  },
  {
    "zip": "47302",
    "city": "Muncie"
  },
  {
    "zip": "47327",
    "city": "Cambridge City"
  },
  {
    "zip": "47331",
    "city": "Connersville"
  },
  {
    "zip": "47339",
    "city": "Economy"
  },
  {
    "zip": "47340",
    "city": "Farmland"
  },
  {
    "zip": "47341",
    "city": "Fountain City"
  },
  {
    "zip": "47345",
    "city": "Greens Fork"
  },
  {
    "zip": "47348",
    "city": "Hartford City"
  },
  {
    "zip": "47354",
    "city": "Losantville"
  },
  {
    "zip": "47360",
    "city": "Mooreland"
  },
  {
    "zip": "47368",
    "city": "Parker City"
  },
  {
    "zip": "47369",
    "city": "Pennville"
  },
  {
    "zip": "47373",
    "city": "Redkey"
  },
  {
    "zip": "47381",
    "city": "Salamonia"
  },
  {
    "zip": "47385",
    "city": "Spiceland"
  },
  {
    "zip": "47386",
    "city": "Springport"
  },
  {
    "zip": "47387",
    "city": "Straughn"
  },
  {
    "zip": "47429",
    "city": "Ellettsville"
  },
  {
    "zip": "47432",
    "city": "French Lick"
  },
  {
    "zip": "47433",
    "city": "Gosport"
  },
  {
    "zip": "47436",
    "city": "Heltonville"
  },
  {
    "zip": "47438",
    "city": "Jasonville"
  },
  {
    "zip": "47441",
    "city": "Linton"
  },
  {
    "zip": "47451",
    "city": "Oolitic"
  },
  {
    "zip": "47453",
    "city": "Owensburg"
  },
  {
    "zip": "47459",
    "city": "Solsberry"
  },
  {
    "zip": "47465",
    "city": "Switz City"
  },
  {
    "zip": "47469",
    "city": "West Baden Springs"
  },
  {
    "zip": "47470",
    "city": "Williams"
  },
  {
    "zip": "47512",
    "city": "Bicknell"
  },
  {
    "zip": "47513",
    "city": "Birdseye"
  },
  {
    "zip": "47516",
    "city": "Bruceville"
  },
  {
    "zip": "47519",
    "city": "Cannelburg"
  },
  {
    "zip": "47520",
    "city": "Cannelton"
  },
  {
    "zip": "47521",
    "city": "Celestine"
  },
  {
    "zip": "47522",
    "city": "Crane"
  },
  {
    "zip": "47524",
    "city": "Decker"
  },
  {
    "zip": "47527",
    "city": "Dubois"
  },
  {
    "zip": "47528",
    "city": "Edwardsport"
  },
  {
    "zip": "47529",
    "city": "Elnora"
  },
  {
    "zip": "47531",
    "city": "Evanston"
  },
  {
    "zip": "47532",
    "city": "Ferdinand"
  },
  {
    "zip": "47537",
    "city": "Gentryville"
  },
  {
    "zip": "47542",
    "city": "Huntingburg"
  },
  {
    "zip": "47551",
    "city": "Leopold"
  },
  {
    "zip": "47552",
    "city": "Lincoln City"
  },
  {
    "zip": "47553",
    "city": "Loogootee"
  },
  {
    "zip": "47557",
    "city": "Monroe City"
  },
  {
    "zip": "47561",
    "city": "Oaktown"
  },
  {
    "zip": "47562",
    "city": "Odon"
  },
  {
    "zip": "47564",
    "city": "Otwell"
  },
  {
    "zip": "47573",
    "city": "Ragsdale"
  },
  {
    "zip": "47575",
    "city": "Saint Anthony"
  },
  {
    "zip": "47576",
    "city": "Saint Croix"
  },
  {
    "zip": "47577",
    "city": "Saint Meinrad"
  },
  {
    "zip": "47578",
    "city": "Sandborn"
  },
  {
    "zip": "47579",
    "city": "Santa Claus"
  },
  {
    "zip": "47580",
    "city": "Schnellville"
  },
  {
    "zip": "47581",
    "city": "Shoals"
  },
  {
    "zip": "47585",
    "city": "Stendal"
  },
  {
    "zip": "47586",
    "city": "Tell City"
  },
  {
    "zip": "47590",
    "city": "Velpen"
  },
  {
    "zip": "47591",
    "city": "Vincennes"
  },
  {
    "zip": "47597",
    "city": "Wheatland"
  },
  {
    "zip": "47598",
    "city": "Winslow"
  },
  {
    "zip": "47610",
    "city": "Chandler"
  },
  {
    "zip": "47611",
    "city": "Chrisney"
  },
  {
    "zip": "47613",
    "city": "Elberfeld"
  },
  {
    "zip": "47631",
    "city": "New Harmony"
  },
  {
    "zip": "47633",
    "city": "Poseyville"
  },
  {
    "zip": "47637",
    "city": "Tennyson"
  },
  {
    "zip": "47638",
    "city": "Wadesville"
  },
  {
    "zip": "47639",
    "city": "Haubstadt"
  },
  {
    "zip": "47647",
    "city": "Buckskin"
  },
  {
    "zip": "47648",
    "city": "Fort Branch"
  },
  {
    "zip": "47649",
    "city": "Francisco"
  },
  {
    "zip": "47660",
    "city": "Oakland City"
  },
  {
    "zip": "47666",
    "city": "Patoka"
  },
  {
    "zip": "47708",
    "city": "Evansville"
  },
  {
    "zip": "47802",
    "city": "Terre Haute"
  },
  {
    "zip": "47834",
    "city": "Brazil"
  },
  {
    "zip": "47837",
    "city": "Carbon"
  },
  {
    "zip": "47840",
    "city": "Centerpoint"
  },
  {
    "zip": "47846",
    "city": "Cory"
  },
  {
    "zip": "47848",
    "city": "Dugger"
  },
  {
    "zip": "47849",
    "city": "Fairbanks"
  },
  {
    "zip": "47850",
    "city": "Farmersburg"
  },
  {
    "zip": "47861",
    "city": "Merom"
  },
  {
    "zip": "47866",
    "city": "Pimento"
  },
  {
    "zip": "47879",
    "city": "Shelburn"
  },
  {
    "zip": "47885",
    "city": "West Terre Haute"
  },
  {
    "zip": "47917",
    "city": "Ambia"
  },
  {
    "zip": "47920",
    "city": "Battle Ground"
  },
  {
    "zip": "47922",
    "city": "Brook"
  },
  {
    "zip": "47923",
    "city": "Brookston"
  },
  {
    "zip": "47926",
    "city": "Burnettsville"
  },
  {
    "zip": "47929",
    "city": "Chalmers"
  },
  {
    "zip": "47933",
    "city": "Crawfordsville"
  },
  {
    "zip": "47942",
    "city": "Earl Park"
  },
  {
    "zip": "47943",
    "city": "Fair Oaks"
  },
  {
    "zip": "47946",
    "city": "Francesville"
  },
  {
    "zip": "47948",
    "city": "Goodland"
  },
  {
    "zip": "47950",
    "city": "Idaville"
  },
  {
    "zip": "47951",
    "city": "Kentland"
  },
  {
    "zip": "47954",
    "city": "Ladoga"
  },
  {
    "zip": "47957",
    "city": "Medaryville"
  },
  {
    "zip": "47959",
    "city": "Monon"
  },
  {
    "zip": "47963",
    "city": "Morocco"
  },
  {
    "zip": "47968",
    "city": "New Ross"
  },
  {
    "zip": "47970",
    "city": "Otterbein"
  },
  {
    "zip": "47975",
    "city": "Pine Village"
  },
  {
    "zip": "47987",
    "city": "Veedersburg"
  },
  {
    "zip": "47990",
    "city": "Waynetown"
  },
  {
    "zip": "48001",
    "city": "Algonac"
  },
  {
    "zip": "48002",
    "city": "Allenton"
  },
  {
    "zip": "48003",
    "city": "Almont"
  },
  {
    "zip": "48005",
    "city": "Armada"
  },
  {
    "zip": "48014",
    "city": "Capac"
  },
  {
    "zip": "48015",
    "city": "Center Line"
  },
  {
    "zip": "48017",
    "city": "Clawson"
  },
  {
    "zip": "48021",
    "city": "Eastpointe"
  },
  {
    "zip": "48022",
    "city": "Emmett"
  },
  {
    "zip": "48026",
    "city": "Fraser"
  },
  {
    "zip": "48027",
    "city": "Goodells"
  },
  {
    "zip": "48028",
    "city": "Harsens Island"
  },
  {
    "zip": "48030",
    "city": "Hazel Park"
  },
  {
    "zip": "48032",
    "city": "Jeddo"
  },
  {
    "zip": "48035",
    "city": "Clinton Township"
  },
  {
    "zip": "48039",
    "city": "Marine City"
  },
  {
    "zip": "48042",
    "city": "Macomb"
  },
  {
    "zip": "48043",
    "city": "Mount Clemens"
  },
  {
    "zip": "48045",
    "city": "Harrison Township"
  },
  {
    "zip": "48047",
    "city": "New Baltimore"
  },
  {
    "zip": "48049",
    "city": "North Street"
  },
  {
    "zip": "48054",
    "city": "East China"
  },
  {
    "zip": "48059",
    "city": "Fort Gratiot"
  },
  {
    "zip": "48060",
    "city": "Port Huron"
  },
  {
    "zip": "48065",
    "city": "Romeo"
  },
  {
    "zip": "48069",
    "city": "Pleasant Ridge"
  },
  {
    "zip": "48070",
    "city": "Huntington Woods"
  },
  {
    "zip": "48074",
    "city": "Smiths Creek"
  },
  {
    "zip": "48080",
    "city": "Saint Clair Shores"
  },
  {
    "zip": "48101",
    "city": "Allen Park"
  },
  {
    "zip": "48103",
    "city": "Ann Arbor"
  },
  {
    "zip": "48117",
    "city": "Carleton"
  },
  {
    "zip": "48120",
    "city": "Dearborn"
  },
  {
    "zip": "48122",
    "city": "Melvindale"
  },
  {
    "zip": "48125",
    "city": "Dearborn Heights"
  },
  {
    "zip": "48137",
    "city": "Gregory"
  },
  {
    "zip": "48138",
    "city": "Grosse Ile"
  },
  {
    "zip": "48140",
    "city": "Ida"
  },
  {
    "zip": "48141",
    "city": "Inkster"
  },
  {
    "zip": "48145",
    "city": "La Salle"
  },
  {
    "zip": "48157",
    "city": "Luna Pier"
  },
  {
    "zip": "48159",
    "city": "Maybee"
  },
  {
    "zip": "48165",
    "city": "New Hudson"
  },
  {
    "zip": "48169",
    "city": "Pinckney"
  },
  {
    "zip": "48176",
    "city": "Saline"
  },
  {
    "zip": "48178",
    "city": "South Lyon"
  },
  {
    "zip": "48179",
    "city": "South Rockwood"
  },
  {
    "zip": "48182",
    "city": "Temperance"
  },
  {
    "zip": "48185",
    "city": "Westland"
  },
  {
    "zip": "48189",
    "city": "Whitmore Lake"
  },
  {
    "zip": "48192",
    "city": "Wyandotte"
  },
  {
    "zip": "48195",
    "city": "Southgate"
  },
  {
    "zip": "48197",
    "city": "Ypsilanti"
  },
  {
    "zip": "48212",
    "city": "Hamtramck"
  },
  {
    "zip": "48218",
    "city": "River Rouge"
  },
  {
    "zip": "48225",
    "city": "Harper Woods"
  },
  {
    "zip": "48229",
    "city": "Ecorse"
  },
  {
    "zip": "48230",
    "city": "Grosse Pointe"
  },
  {
    "zip": "48237",
    "city": "Oak Park"
  },
  {
    "zip": "48301",
    "city": "Bloomfield Hills"
  },
  {
    "zip": "48310",
    "city": "Sterling Heights"
  },
  {
    "zip": "48320",
    "city": "Keego Harbor"
  },
  {
    "zip": "48326",
    "city": "Auburn Hills"
  },
  {
    "zip": "48340",
    "city": "Pontiac"
  },
  {
    "zip": "48350",
    "city": "Davisburg"
  },
  {
    "zip": "48359",
    "city": "Lake Orion"
  },
  {
    "zip": "48367",
    "city": "Leonard"
  },
  {
    "zip": "48374",
    "city": "Novi"
  },
  {
    "zip": "48382",
    "city": "Commerce Township"
  },
  {
    "zip": "48390",
    "city": "Walled Lake"
  },
  {
    "zip": "48393",
    "city": "Wixom"
  },
  {
    "zip": "48401",
    "city": "Applegate"
  },
  {
    "zip": "48413",
    "city": "Bad Axe"
  },
  {
    "zip": "48414",
    "city": "Bancroft"
  },
  {
    "zip": "48415",
    "city": "Birch Run"
  },
  {
    "zip": "48416",
    "city": "Brown City"
  },
  {
    "zip": "48419",
    "city": "Carsonville"
  },
  {
    "zip": "48421",
    "city": "Columbiaville"
  },
  {
    "zip": "48422",
    "city": "Croswell"
  },
  {
    "zip": "48423",
    "city": "Davison"
  },
  {
    "zip": "48427",
    "city": "Deckerville"
  },
  {
    "zip": "48429",
    "city": "Durand"
  },
  {
    "zip": "48430",
    "city": "Fenton"
  },
  {
    "zip": "48432",
    "city": "Filion"
  },
  {
    "zip": "48438",
    "city": "Goodrich"
  },
  {
    "zip": "48439",
    "city": "Grand Blanc"
  },
  {
    "zip": "48441",
    "city": "Harbor Beach"
  },
  {
    "zip": "48442",
    "city": "Holly"
  },
  {
    "zip": "48444",
    "city": "Imlay City"
  },
  {
    "zip": "48445",
    "city": "Kinde"
  },
  {
    "zip": "48446",
    "city": "Lapeer"
  },
  {
    "zip": "48449",
    "city": "Lennon"
  },
  {
    "zip": "48453",
    "city": "Marlette"
  },
  {
    "zip": "48456",
    "city": "Minden City"
  },
  {
    "zip": "48460",
    "city": "New Lothrop"
  },
  {
    "zip": "48462",
    "city": "Ortonville"
  },
  {
    "zip": "48464",
    "city": "Otter Lake"
  },
  {
    "zip": "48465",
    "city": "Palms"
  },
  {
    "zip": "48466",
    "city": "Peck"
  },
  {
    "zip": "48467",
    "city": "Port Austin"
  },
  {
    "zip": "48468",
    "city": "Port Hope"
  },
  {
    "zip": "48469",
    "city": "Port Sanilac"
  },
  {
    "zip": "48472",
    "city": "Snover"
  },
  {
    "zip": "48473",
    "city": "Swartz Creek"
  },
  {
    "zip": "48475",
    "city": "Ubly"
  },
  {
    "zip": "48502",
    "city": "Flint"
  },
  {
    "zip": "48601",
    "city": "Saginaw"
  },
  {
    "zip": "48613",
    "city": "Bentley"
  },
  {
    "zip": "48614",
    "city": "Brant"
  },
  {
    "zip": "48615",
    "city": "Breckenridge"
  },
  {
    "zip": "48616",
    "city": "Chesaning"
  },
  {
    "zip": "48617",
    "city": "Clare"
  },
  {
    "zip": "48619",
    "city": "Comins"
  },
  {
    "zip": "48622",
    "city": "Farwell"
  },
  {
    "zip": "48624",
    "city": "Gladwin"
  },
  {
    "zip": "48629",
    "city": "Houghton Lake"
  },
  {
    "zip": "48631",
    "city": "Kawkawlin"
  },
  {
    "zip": "48635",
    "city": "Lupton"
  },
  {
    "zip": "48637",
    "city": "Merrill"
  },
  {
    "zip": "48647",
    "city": "Mio"
  },
  {
    "zip": "48649",
    "city": "Oakley"
  },
  {
    "zip": "48650",
    "city": "Pinconning"
  },
  {
    "zip": "48651",
    "city": "Prudenville"
  },
  {
    "zip": "48652",
    "city": "Rhodes"
  },
  {
    "zip": "48653",
    "city": "Roscommon"
  },
  {
    "zip": "48654",
    "city": "Rose City"
  },
  {
    "zip": "48656",
    "city": "Saint Helen"
  },
  {
    "zip": "48661",
    "city": "West Branch"
  },
  {
    "zip": "48662",
    "city": "Wheeler"
  },
  {
    "zip": "48703",
    "city": "Au Gres"
  },
  {
    "zip": "48705",
    "city": "Barton City"
  },
  {
    "zip": "48706",
    "city": "Bay City"
  },
  {
    "zip": "48710",
    "city": "University Center"
  },
  {
    "zip": "48720",
    "city": "Bay Port"
  },
  {
    "zip": "48723",
    "city": "Caro"
  },
  {
    "zip": "48725",
    "city": "Caseville"
  },
  {
    "zip": "48726",
    "city": "Cass City"
  },
  {
    "zip": "48727",
    "city": "Clifford"
  },
  {
    "zip": "48728",
    "city": "Curran"
  },
  {
    "zip": "48729",
    "city": "Deford"
  },
  {
    "zip": "48730",
    "city": "East Tawas"
  },
  {
    "zip": "48732",
    "city": "Essexville"
  },
  {
    "zip": "48733",
    "city": "Fairgrove"
  },
  {
    "zip": "48734",
    "city": "Frankenmuth"
  },
  {
    "zip": "48735",
    "city": "Gagetown"
  },
  {
    "zip": "48737",
    "city": "Glennie"
  },
  {
    "zip": "48739",
    "city": "Hale"
  },
  {
    "zip": "48745",
    "city": "Mikado"
  },
  {
    "zip": "48747",
    "city": "Munger"
  },
  {
    "zip": "48748",
    "city": "National City"
  },
  {
    "zip": "48749",
    "city": "Omer"
  },
  {
    "zip": "48750",
    "city": "Oscoda"
  },
  {
    "zip": "48754",
    "city": "Owendale"
  },
  {
    "zip": "48755",
    "city": "Pigeon"
  },
  {
    "zip": "48756",
    "city": "Prescott"
  },
  {
    "zip": "48757",
    "city": "Reese"
  },
  {
    "zip": "48759",
    "city": "Sebewaing"
  },
  {
    "zip": "48760",
    "city": "Silverwood"
  },
  {
    "zip": "48761",
    "city": "South Branch"
  },
  {
    "zip": "48762",
    "city": "Spruce"
  },
  {
    "zip": "48763",
    "city": "Tawas City"
  },
  {
    "zip": "48766",
    "city": "Twining"
  },
  {
    "zip": "48768",
    "city": "Vassar"
  },
  {
    "zip": "48770",
    "city": "Whittemore"
  },
  {
    "zip": "48807",
    "city": "Bannister"
  },
  {
    "zip": "48809",
    "city": "Belding"
  },
  {
    "zip": "48811",
    "city": "Carson City"
  },
  {
    "zip": "48818",
    "city": "Crystal"
  },
  {
    "zip": "48821",
    "city": "Dimondale"
  },
  {
    "zip": "48822",
    "city": "Eagle"
  },
  {
    "zip": "48823",
    "city": "East Lansing"
  },
  {
    "zip": "48827",
    "city": "Eaton Rapids"
  },
  {
    "zip": "48829",
    "city": "Edmore"
  },
  {
    "zip": "48831",
    "city": "Elsie"
  },
  {
    "zip": "48832",
    "city": "Elwell"
  },
  {
    "zip": "48836",
    "city": "Fowlerville"
  },
  {
    "zip": "48837",
    "city": "Grand Ledge"
  },
  {
    "zip": "48840",
    "city": "Haslett"
  },
  {
    "zip": "48848",
    "city": "Laingsburg"
  },
  {
    "zip": "48849",
    "city": "Lake Odessa"
  },
  {
    "zip": "48857",
    "city": "Morrice"
  },
  {
    "zip": "48861",
    "city": "Mulliken"
  },
  {
    "zip": "48864",
    "city": "Okemos"
  },
  {
    "zip": "48867",
    "city": "Owosso"
  },
  {
    "zip": "48871",
    "city": "Perrinton"
  },
  {
    "zip": "48873",
    "city": "Pewamo"
  },
  {
    "zip": "48876",
    "city": "Potterville"
  },
  {
    "zip": "48878",
    "city": "Rosebush"
  },
  {
    "zip": "48880",
    "city": "Saint Louis"
  },
  {
    "zip": "48883",
    "city": "Shepherd"
  },
  {
    "zip": "48886",
    "city": "Six Lakes"
  },
  {
    "zip": "48890",
    "city": "Sunfield"
  },
  {
    "zip": "48891",
    "city": "Vestaburg"
  },
  {
    "zip": "48892",
    "city": "Webberville"
  },
  {
    "zip": "48893",
    "city": "Weidman"
  },
  {
    "zip": "48894",
    "city": "Westphalia"
  },
  {
    "zip": "49001",
    "city": "Kalamazoo"
  },
  {
    "zip": "49010",
    "city": "Allegan"
  },
  {
    "zip": "49014",
    "city": "Battle Creek"
  },
  {
    "zip": "49022",
    "city": "Benton Harbor"
  },
  {
    "zip": "49030",
    "city": "Burr Oak"
  },
  {
    "zip": "49031",
    "city": "Cassopolis"
  },
  {
    "zip": "49033",
    "city": "Ceresco"
  },
  {
    "zip": "49038",
    "city": "Coloma"
  },
  {
    "zip": "49040",
    "city": "Colon"
  },
  {
    "zip": "49042",
    "city": "Constantine"
  },
  {
    "zip": "49043",
    "city": "Covert"
  },
  {
    "zip": "49046",
    "city": "Delton"
  },
  {
    "zip": "49047",
    "city": "Dowagiac"
  },
  {
    "zip": "49050",
    "city": "Dowling"
  },
  {
    "zip": "49051",
    "city": "East Leroy"
  },
  {
    "zip": "49053",
    "city": "Galesburg"
  },
  {
    "zip": "49055",
    "city": "Gobles"
  },
  {
    "zip": "49060",
    "city": "Hickory Corners"
  },
  {
    "zip": "49066",
    "city": "Leonidas"
  },
  {
    "zip": "49071",
    "city": "Mattawan"
  },
  {
    "zip": "49076",
    "city": "Olivet"
  },
  {
    "zip": "49078",
    "city": "Otsego"
  },
  {
    "zip": "49080",
    "city": "Plainwell"
  },
  {
    "zip": "49087",
    "city": "Schoolcraft"
  },
  {
    "zip": "49088",
    "city": "Scotts"
  },
  {
    "zip": "49090",
    "city": "South Haven"
  },
  {
    "zip": "49092",
    "city": "Tekonsha"
  },
  {
    "zip": "49099",
    "city": "White Pigeon"
  },
  {
    "zip": "49101",
    "city": "Baroda"
  },
  {
    "zip": "49102",
    "city": "Berrien Center"
  },
  {
    "zip": "49103",
    "city": "Berrien Springs"
  },
  {
    "zip": "49106",
    "city": "Bridgman"
  },
  {
    "zip": "49111",
    "city": "Eau Claire"
  },
  {
    "zip": "49112",
    "city": "Edwardsburg"
  },
  {
    "zip": "49113",
    "city": "Galien"
  },
  {
    "zip": "49117",
    "city": "New Buffalo"
  },
  {
    "zip": "49125",
    "city": "Sawyer"
  },
  {
    "zip": "49128",
    "city": "Three Oaks"
  },
  {
    "zip": "49129",
    "city": "Union Pier"
  },
  {
    "zip": "49228",
    "city": "Blissfield"
  },
  {
    "zip": "49229",
    "city": "Britton"
  },
  {
    "zip": "49233",
    "city": "Cement City"
  },
  {
    "zip": "49234",
    "city": "Clarklake"
  },
  {
    "zip": "49240",
    "city": "Grass Lake"
  },
  {
    "zip": "49249",
    "city": "Jerome"
  },
  {
    "zip": "49253",
    "city": "Manitou Beach"
  },
  {
    "zip": "49254",
    "city": "Michigan Center"
  },
  {
    "zip": "49256",
    "city": "Morenci"
  },
  {
    "zip": "49259",
    "city": "Munith"
  },
  {
    "zip": "49264",
    "city": "Onondaga"
  },
  {
    "zip": "49265",
    "city": "Onsted"
  },
  {
    "zip": "49266",
    "city": "Osseo"
  },
  {
    "zip": "49267",
    "city": "Ottawa Lake"
  },
  {
    "zip": "49269",
    "city": "Parma"
  },
  {
    "zip": "49276",
    "city": "Riga"
  },
  {
    "zip": "49277",
    "city": "Rives Junction"
  },
  {
    "zip": "49279",
    "city": "Sand Creek"
  },
  {
    "zip": "49282",
    "city": "Somerset Center"
  },
  {
    "zip": "49283",
    "city": "Spring Arbor"
  },
  {
    "zip": "49286",
    "city": "Tecumseh"
  },
  {
    "zip": "49305",
    "city": "Barryton"
  },
  {
    "zip": "49307",
    "city": "Big Rapids"
  },
  {
    "zip": "49309",
    "city": "Bitely"
  },
  {
    "zip": "49310",
    "city": "Blanchard"
  },
  {
    "zip": "49315",
    "city": "Byron Center"
  },
  {
    "zip": "49318",
    "city": "Casnovia"
  },
  {
    "zip": "49319",
    "city": "Cedar Springs"
  },
  {
    "zip": "49321",
    "city": "Comstock Park"
  },
  {
    "zip": "49322",
    "city": "Coral"
  },
  {
    "zip": "49323",
    "city": "Dorr"
  },
  {
    "zip": "49326",
    "city": "Gowen"
  },
  {
    "zip": "49329",
    "city": "Howard City"
  },
  {
    "zip": "49330",
    "city": "Kent City"
  },
  {
    "zip": "49332",
    "city": "Mecosta"
  },
  {
    "zip": "49336",
    "city": "Morley"
  },
  {
    "zip": "49337",
    "city": "Newaygo"
  },
  {
    "zip": "49340",
    "city": "Remus"
  },
  {
    "zip": "49342",
    "city": "Rodney"
  },
  {
    "zip": "49346",
    "city": "Stanwood"
  },
  {
    "zip": "49347",
    "city": "Trufant"
  },
  {
    "zip": "49349",
    "city": "White Cloud"
  },
  {
    "zip": "49402",
    "city": "Branch"
  },
  {
    "zip": "49404",
    "city": "Coopersville"
  },
  {
    "zip": "49408",
    "city": "Fennville"
  },
  {
    "zip": "49411",
    "city": "Free Soil"
  },
  {
    "zip": "49415",
    "city": "Fruitport"
  },
  {
    "zip": "49417",
    "city": "Grand Haven"
  },
  {
    "zip": "49418",
    "city": "Grandville"
  },
  {
    "zip": "49420",
    "city": "Hart"
  },
  {
    "zip": "49421",
    "city": "Hesperia"
  },
  {
    "zip": "49426",
    "city": "Hudsonville"
  },
  {
    "zip": "49428",
    "city": "Jenison"
  },
  {
    "zip": "49431",
    "city": "Ludington"
  },
  {
    "zip": "49435",
    "city": "Marne"
  },
  {
    "zip": "49440",
    "city": "Muskegon"
  },
  {
    "zip": "49446",
    "city": "New Era"
  },
  {
    "zip": "49448",
    "city": "Nunica"
  },
  {
    "zip": "49449",
    "city": "Pentwater"
  },
  {
    "zip": "49452",
    "city": "Rothbury"
  },
  {
    "zip": "49453",
    "city": "Saugatuck"
  },
  {
    "zip": "49457",
    "city": "Twin Lake"
  },
  {
    "zip": "49459",
    "city": "Walkerville"
  },
  {
    "zip": "49460",
    "city": "West Olive"
  },
  {
    "zip": "49464",
    "city": "Zeeland"
  },
  {
    "zip": "49601",
    "city": "Cadillac"
  },
  {
    "zip": "49616",
    "city": "Benzonia"
  },
  {
    "zip": "49618",
    "city": "Boon"
  },
  {
    "zip": "49619",
    "city": "Brethren"
  },
  {
    "zip": "49620",
    "city": "Buckley"
  },
  {
    "zip": "49621",
    "city": "Cedar"
  },
  {
    "zip": "49622",
    "city": "Central Lake"
  },
  {
    "zip": "49623",
    "city": "Chase"
  },
  {
    "zip": "49625",
    "city": "Copemish"
  },
  {
    "zip": "49629",
    "city": "Elk Rapids"
  },
  {
    "zip": "49631",
    "city": "Evart"
  },
  {
    "zip": "49633",
    "city": "Fife Lake"
  },
  {
    "zip": "49636",
    "city": "Glen Arbor"
  },
  {
    "zip": "49637",
    "city": "Grawn"
  },
  {
    "zip": "49638",
    "city": "Harrietta"
  },
  {
    "zip": "49639",
    "city": "Hersey"
  },
  {
    "zip": "49640",
    "city": "Honor"
  },
  {
    "zip": "49642",
    "city": "Idlewild"
  },
  {
    "zip": "49643",
    "city": "Interlochen"
  },
  {
    "zip": "49644",
    "city": "Irons"
  },
  {
    "zip": "49645",
    "city": "Kaleva"
  },
  {
    "zip": "49646",
    "city": "Kalkaska"
  },
  {
    "zip": "49648",
    "city": "Kewadin"
  },
  {
    "zip": "49650",
    "city": "Lake Ann"
  },
  {
    "zip": "49653",
    "city": "Lake Leelanau"
  },
  {
    "zip": "49656",
    "city": "Luther"
  },
  {
    "zip": "49657",
    "city": "Mc Bain"
  },
  {
    "zip": "49659",
    "city": "Mancelona"
  },
  {
    "zip": "49660",
    "city": "Manistee"
  },
  {
    "zip": "49663",
    "city": "Manton"
  },
  {
    "zip": "49664",
    "city": "Maple City"
  },
  {
    "zip": "49668",
    "city": "Mesick"
  },
  {
    "zip": "49675",
    "city": "Onekama"
  },
  {
    "zip": "49676",
    "city": "Rapid City"
  },
  {
    "zip": "49677",
    "city": "Reed City"
  },
  {
    "zip": "49679",
    "city": "Sears"
  },
  {
    "zip": "49680",
    "city": "South Boardman"
  },
  {
    "zip": "49682",
    "city": "Suttons Bay"
  },
  {
    "zip": "49683",
    "city": "Thompsonville"
  },
  {
    "zip": "49684",
    "city": "Traverse City"
  },
  {
    "zip": "49688",
    "city": "Tustin"
  },
  {
    "zip": "49701",
    "city": "Mackinaw City"
  },
  {
    "zip": "49706",
    "city": "Alanson"
  },
  {
    "zip": "49707",
    "city": "Alpena"
  },
  {
    "zip": "49710",
    "city": "Barbeau"
  },
  {
    "zip": "49712",
    "city": "Boyne City"
  },
  {
    "zip": "49713",
    "city": "Boyne Falls"
  },
  {
    "zip": "49715",
    "city": "Brimley"
  },
  {
    "zip": "49716",
    "city": "Brutus"
  },
  {
    "zip": "49718",
    "city": "Carp Lake"
  },
  {
    "zip": "49720",
    "city": "Charlevoix"
  },
  {
    "zip": "49721",
    "city": "Cheboygan"
  },
  {
    "zip": "49724",
    "city": "Dafter"
  },
  {
    "zip": "49725",
    "city": "De Tour Village"
  },
  {
    "zip": "49726",
    "city": "Drummond Island"
  },
  {
    "zip": "49727",
    "city": "East Jordan"
  },
  {
    "zip": "49728",
    "city": "Eckerman"
  },
  {
    "zip": "49733",
    "city": "Frederic"
  },
  {
    "zip": "49735",
    "city": "Gaylord"
  },
  {
    "zip": "49736",
    "city": "Goetzville"
  },
  {
    "zip": "49738",
    "city": "Grayling"
  },
  {
    "zip": "49740",
    "city": "Harbor Springs"
  },
  {
    "zip": "49743",
    "city": "Hawks"
  },
  {
    "zip": "49744",
    "city": "Herron"
  },
  {
    "zip": "49745",
    "city": "Hessel"
  },
  {
    "zip": "49746",
    "city": "Hillman"
  },
  {
    "zip": "49747",
    "city": "Hubbard Lake"
  },
  {
    "zip": "49749",
    "city": "Indian River"
  },
  {
    "zip": "49751",
    "city": "Johannesburg"
  },
  {
    "zip": "49752",
    "city": "Kinross"
  },
  {
    "zip": "49753",
    "city": "Lachine"
  },
  {
    "zip": "49755",
    "city": "Levering"
  },
  {
    "zip": "49760",
    "city": "Moran"
  },
  {
    "zip": "49762",
    "city": "Naubinway"
  },
  {
    "zip": "49765",
    "city": "Onaway"
  },
  {
    "zip": "49766",
    "city": "Ossineke"
  },
  {
    "zip": "49769",
    "city": "Pellston"
  },
  {
    "zip": "49770",
    "city": "Petoskey"
  },
  {
    "zip": "49774",
    "city": "Pickford"
  },
  {
    "zip": "49775",
    "city": "Pointe Aux Pins"
  },
  {
    "zip": "49776",
    "city": "Posen"
  },
  {
    "zip": "49779",
    "city": "Rogers City"
  },
  {
    "zip": "49780",
    "city": "Rudyard"
  },
  {
    "zip": "49781",
    "city": "Saint Ignace"
  },
  {
    "zip": "49782",
    "city": "Beaver Island"
  },
  {
    "zip": "49783",
    "city": "Sault Sainte Marie"
  },
  {
    "zip": "49788",
    "city": "Kincheloe"
  },
  {
    "zip": "49799",
    "city": "Wolverine"
  },
  {
    "zip": "49801",
    "city": "Iron Mountain"
  },
  {
    "zip": "49802",
    "city": "Kingsford"
  },
  {
    "zip": "49805",
    "city": "Allouez"
  },
  {
    "zip": "49806",
    "city": "Au Train"
  },
  {
    "zip": "49807",
    "city": "Bark River"
  },
  {
    "zip": "49812",
    "city": "Carney"
  },
  {
    "zip": "49815",
    "city": "Channing"
  },
  {
    "zip": "49817",
    "city": "Cooks"
  },
  {
    "zip": "49818",
    "city": "Cornell"
  },
  {
    "zip": "49820",
    "city": "Curtis"
  },
  {
    "zip": "49821",
    "city": "Daggett"
  },
  {
    "zip": "49822",
    "city": "Deerton"
  },
  {
    "zip": "49827",
    "city": "Engadine"
  },
  {
    "zip": "49829",
    "city": "Escanaba"
  },
  {
    "zip": "49831",
    "city": "Felch"
  },
  {
    "zip": "49834",
    "city": "Foster City"
  },
  {
    "zip": "49835",
    "city": "Garden"
  },
  {
    "zip": "49836",
    "city": "Germfask"
  },
  {
    "zip": "49838",
    "city": "Gould City"
  },
  {
    "zip": "49840",
    "city": "Gulliver"
  },
  {
    "zip": "49841",
    "city": "Gwinn"
  },
  {
    "zip": "49847",
    "city": "Hermansville"
  },
  {
    "zip": "49849",
    "city": "Ishpeming"
  },
  {
    "zip": "49853",
    "city": "Mc Millan"
  },
  {
    "zip": "49854",
    "city": "Manistique"
  },
  {
    "zip": "49855",
    "city": "Marquette"
  },
  {
    "zip": "49858",
    "city": "Menominee"
  },
  {
    "zip": "49861",
    "city": "Michigamme"
  },
  {
    "zip": "49862",
    "city": "Munising"
  },
  {
    "zip": "49866",
    "city": "Negaunee"
  },
  {
    "zip": "49873",
    "city": "Perronville"
  },
  {
    "zip": "49874",
    "city": "Powers"
  },
  {
    "zip": "49876",
    "city": "Quinnesec"
  },
  {
    "zip": "49878",
    "city": "Rapid River"
  },
  {
    "zip": "49881",
    "city": "Sagola"
  },
  {
    "zip": "49883",
    "city": "Seney"
  },
  {
    "zip": "49884",
    "city": "Shingleton"
  },
  {
    "zip": "49885",
    "city": "Skandia"
  },
  {
    "zip": "49886",
    "city": "Spalding"
  },
  {
    "zip": "49891",
    "city": "Trenary"
  },
  {
    "zip": "49892",
    "city": "Vulcan"
  },
  {
    "zip": "49895",
    "city": "Wetmore"
  },
  {
    "zip": "49905",
    "city": "Atlantic Mine"
  },
  {
    "zip": "49908",
    "city": "Baraga"
  },
  {
    "zip": "49910",
    "city": "Bergland"
  },
  {
    "zip": "49912",
    "city": "Bruce Crossing"
  },
  {
    "zip": "49913",
    "city": "Calumet"
  },
  {
    "zip": "49916",
    "city": "Chassell"
  },
  {
    "zip": "49920",
    "city": "Crystal Falls"
  },
  {
    "zip": "49921",
    "city": "Dodgeville"
  },
  {
    "zip": "49925",
    "city": "Ewen"
  },
  {
    "zip": "49927",
    "city": "Gaastra"
  },
  {
    "zip": "49935",
    "city": "Iron River"
  },
  {
    "zip": "49938",
    "city": "Ironwood"
  },
  {
    "zip": "49945",
    "city": "Lake Linden"
  },
  {
    "zip": "49946",
    "city": "Lanse"
  },
  {
    "zip": "49947",
    "city": "Marenisco"
  },
  {
    "zip": "49948",
    "city": "Mass City"
  },
  {
    "zip": "49952",
    "city": "Nisula"
  },
  {
    "zip": "49953",
    "city": "Ontonagon"
  },
  {
    "zip": "49958",
    "city": "Pelkie"
  },
  {
    "zip": "49962",
    "city": "Skanee"
  },
  {
    "zip": "49965",
    "city": "Toivola"
  },
  {
    "zip": "49967",
    "city": "Trout Creek"
  },
  {
    "zip": "49969",
    "city": "Watersmeet"
  },
  {
    "zip": "49970",
    "city": "Watton"
  },
  {
    "zip": "50001",
    "city": "Ackworth"
  },
  {
    "zip": "50002",
    "city": "Adair"
  },
  {
    "zip": "50007",
    "city": "Alleman"
  },
  {
    "zip": "50008",
    "city": "Allerton"
  },
  {
    "zip": "50010",
    "city": "Ames"
  },
  {
    "zip": "50021",
    "city": "Ankeny"
  },
  {
    "zip": "50026",
    "city": "Bagley"
  },
  {
    "zip": "50027",
    "city": "Barnes City"
  },
  {
    "zip": "50029",
    "city": "Bayard"
  },
  {
    "zip": "50033",
    "city": "Bevington"
  },
  {
    "zip": "50034",
    "city": "Blairsburg"
  },
  {
    "zip": "50035",
    "city": "Bondurant"
  },
  {
    "zip": "50039",
    "city": "Bouton"
  },
  {
    "zip": "50042",
    "city": "Brayton"
  },
  {
    "zip": "50044",
    "city": "Bussey"
  },
  {
    "zip": "50048",
    "city": "Casey"
  },
  {
    "zip": "50049",
    "city": "Chariton"
  },
  {
    "zip": "50050",
    "city": "Churdan"
  },
  {
    "zip": "50056",
    "city": "Colo"
  },
  {
    "zip": "50058",
    "city": "Coon Rapids"
  },
  {
    "zip": "50059",
    "city": "Cooper"
  },
  {
    "zip": "50062",
    "city": "Melcher-dallas"
  },
  {
    "zip": "50063",
    "city": "Dallas Center"
  },
  {
    "zip": "50065",
    "city": "Davis City"
  },
  {
    "zip": "50071",
    "city": "Dows"
  },
  {
    "zip": "50072",
    "city": "Earlham"
  },
  {
    "zip": "50074",
    "city": "Ellston"
  },
  {
    "zip": "50076",
    "city": "Exira"
  },
  {
    "zip": "50101",
    "city": "Galt"
  },
  {
    "zip": "50103",
    "city": "Garden Grove"
  },
  {
    "zip": "50108",
    "city": "Grand River"
  },
  {
    "zip": "50111",
    "city": "Grimes"
  },
  {
    "zip": "50112",
    "city": "Grinnell"
  },
  {
    "zip": "50115",
    "city": "Guthrie Center"
  },
  {
    "zip": "50119",
    "city": "Harvey"
  },
  {
    "zip": "50123",
    "city": "Humeston"
  },
  {
    "zip": "50124",
    "city": "Huxley"
  },
  {
    "zip": "50126",
    "city": "Iowa Falls"
  },
  {
    "zip": "50127",
    "city": "Ira"
  },
  {
    "zip": "50132",
    "city": "Kamrar"
  },
  {
    "zip": "50133",
    "city": "Kellerton"
  },
  {
    "zip": "50134",
    "city": "Kelley"
  },
  {
    "zip": "50135",
    "city": "Kellogg"
  },
  {
    "zip": "50140",
    "city": "Lamoni"
  },
  {
    "zip": "50148",
    "city": "Liscomb"
  },
  {
    "zip": "50149",
    "city": "Lorimor"
  },
  {
    "zip": "50150",
    "city": "Lovilia"
  },
  {
    "zip": "50154",
    "city": "Mc Callsburg"
  },
  {
    "zip": "50157",
    "city": "Malcom"
  },
  {
    "zip": "50158",
    "city": "Marshalltown"
  },
  {
    "zip": "50161",
    "city": "Maxwell"
  },
  {
    "zip": "50167",
    "city": "Minburn"
  },
  {
    "zip": "50168",
    "city": "Mingo"
  },
  {
    "zip": "50169",
    "city": "Mitchellville"
  },
  {
    "zip": "50173",
    "city": "Montour"
  },
  {
    "zip": "50210",
    "city": "New Virginia"
  },
  {
    "zip": "50212",
    "city": "Ogden"
  },
  {
    "zip": "50214",
    "city": "Otley"
  },
  {
    "zip": "50216",
    "city": "Panora"
  },
  {
    "zip": "50217",
    "city": "Paton"
  },
  {
    "zip": "50219",
    "city": "Pella"
  },
  {
    "zip": "50223",
    "city": "Pilot Mound"
  },
  {
    "zip": "50227",
    "city": "Popejoy"
  },
  {
    "zip": "50228",
    "city": "Prairie City"
  },
  {
    "zip": "50229",
    "city": "Prole"
  },
  {
    "zip": "50230",
    "city": "Radcliffe"
  },
  {
    "zip": "50232",
    "city": "Reasnor"
  },
  {
    "zip": "50235",
    "city": "Rippey"
  },
  {
    "zip": "50236",
    "city": "Roland"
  },
  {
    "zip": "50237",
    "city": "Runnells"
  },
  {
    "zip": "50242",
    "city": "Searsboro"
  },
  {
    "zip": "50244",
    "city": "Slater"
  },
  {
    "zip": "50247",
    "city": "State Center"
  },
  {
    "zip": "50248",
    "city": "Story City"
  },
  {
    "zip": "50251",
    "city": "Sully"
  },
  {
    "zip": "50252",
    "city": "Swan"
  },
  {
    "zip": "50254",
    "city": "Thayer"
  },
  {
    "zip": "50256",
    "city": "Tracy"
  },
  {
    "zip": "50257",
    "city": "Truro"
  },
  {
    "zip": "50261",
    "city": "Van Meter"
  },
  {
    "zip": "50263",
    "city": "Waukee"
  },
  {
    "zip": "50265",
    "city": "West Des Moines"
  },
  {
    "zip": "50268",
    "city": "What Cheer"
  },
  {
    "zip": "50273",
    "city": "Winterset"
  },
  {
    "zip": "50274",
    "city": "Wiota"
  },
  {
    "zip": "50278",
    "city": "Zearing"
  },
  {
    "zip": "50307",
    "city": "Des Moines"
  },
  {
    "zip": "50322",
    "city": "Urbandale"
  },
  {
    "zip": "50324",
    "city": "Windsor Heights"
  },
  {
    "zip": "50325",
    "city": "Clive"
  },
  {
    "zip": "50401",
    "city": "Mason City"
  },
  {
    "zip": "50421",
    "city": "Belmond"
  },
  {
    "zip": "50423",
    "city": "Britt"
  },
  {
    "zip": "50424",
    "city": "Buffalo Center"
  },
  {
    "zip": "50426",
    "city": "Carpenter"
  },
  {
    "zip": "50428",
    "city": "Clear Lake"
  },
  {
    "zip": "50430",
    "city": "Corwith"
  },
  {
    "zip": "50433",
    "city": "Dougherty"
  },
  {
    "zip": "50434",
    "city": "Fertile"
  },
  {
    "zip": "50439",
    "city": "Goodell"
  },
  {
    "zip": "50444",
    "city": "Hanlontown"
  },
  {
    "zip": "50446",
    "city": "Joice"
  },
  {
    "zip": "50447",
    "city": "Kanawha"
  },
  {
    "zip": "50448",
    "city": "Kensett"
  },
  {
    "zip": "50449",
    "city": "Klemme"
  },
  {
    "zip": "50450",
    "city": "Lake Mills"
  },
  {
    "zip": "50451",
    "city": "Lakota"
  },
  {
    "zip": "50452",
    "city": "Latimer"
  },
  {
    "zip": "50454",
    "city": "Little Cedar"
  },
  {
    "zip": "50455",
    "city": "Mc Intire"
  },
  {
    "zip": "50456",
    "city": "Manly"
  },
  {
    "zip": "50457",
    "city": "Meservey"
  },
  {
    "zip": "50458",
    "city": "Nora Springs"
  },
  {
    "zip": "50460",
    "city": "Orchard"
  },
  {
    "zip": "50461",
    "city": "Osage"
  },
  {
    "zip": "50467",
    "city": "Rock Falls"
  },
  {
    "zip": "50470",
    "city": "Rowan"
  },
  {
    "zip": "50471",
    "city": "Rudd"
  },
  {
    "zip": "50472",
    "city": "Saint Ansgar"
  },
  {
    "zip": "50473",
    "city": "Scarville"
  },
  {
    "zip": "50477",
    "city": "Swaledale"
  },
  {
    "zip": "50480",
    "city": "Titonka"
  },
  {
    "zip": "50481",
    "city": "Toeterville"
  },
  {
    "zip": "50482",
    "city": "Ventura"
  },
  {
    "zip": "50484",
    "city": "Woden"
  },
  {
    "zip": "50501",
    "city": "Fort Dodge"
  },
  {
    "zip": "50510",
    "city": "Albert City"
  },
  {
    "zip": "50511",
    "city": "Algona"
  },
  {
    "zip": "50514",
    "city": "Armstrong"
  },
  {
    "zip": "50515",
    "city": "Ayrshire"
  },
  {
    "zip": "50516",
    "city": "Badger"
  },
  {
    "zip": "50518",
    "city": "Barnum"
  },
  {
    "zip": "50519",
    "city": "Bode"
  },
  {
    "zip": "50520",
    "city": "Bradgate"
  },
  {
    "zip": "50523",
    "city": "Callender"
  },
  {
    "zip": "50527",
    "city": "Curlew"
  },
  {
    "zip": "50528",
    "city": "Cylinder"
  },
  {
    "zip": "50529",
    "city": "Dakota City"
  },
  {
    "zip": "50531",
    "city": "Dolliver"
  },
  {
    "zip": "50532",
    "city": "Duncombe"
  },
  {
    "zip": "50533",
    "city": "Eagle Grove"
  },
  {
    "zip": "50535",
    "city": "Early"
  },
  {
    "zip": "50536",
    "city": "Emmetsburg"
  },
  {
    "zip": "50538",
    "city": "Farnhamville"
  },
  {
    "zip": "50541",
    "city": "Gilmore City"
  },
  {
    "zip": "50542",
    "city": "Goldfield"
  },
  {
    "zip": "50543",
    "city": "Gowrie"
  },
  {
    "zip": "50544",
    "city": "Harcourt"
  },
  {
    "zip": "50551",
    "city": "Jolley"
  },
  {
    "zip": "50557",
    "city": "Lehigh"
  },
  {
    "zip": "50559",
    "city": "Lone Rock"
  },
  {
    "zip": "50560",
    "city": "Lu Verne"
  },
  {
    "zip": "50561",
    "city": "Lytton"
  },
  {
    "zip": "50562",
    "city": "Mallard"
  },
  {
    "zip": "50566",
    "city": "Moorland"
  },
  {
    "zip": "50567",
    "city": "Nemaha"
  },
  {
    "zip": "50569",
    "city": "Otho"
  },
  {
    "zip": "50570",
    "city": "Ottosen"
  },
  {
    "zip": "50576",
    "city": "Rembrandt"
  },
  {
    "zip": "50577",
    "city": "Renwick"
  },
  {
    "zip": "50578",
    "city": "Ringsted"
  },
  {
    "zip": "50579",
    "city": "Rockwell City"
  },
  {
    "zip": "50581",
    "city": "Rolfe"
  },
  {
    "zip": "50583",
    "city": "Sac City"
  },
  {
    "zip": "50585",
    "city": "Sioux Rapids"
  },
  {
    "zip": "50588",
    "city": "Storm Lake"
  },
  {
    "zip": "50590",
    "city": "Swea City"
  },
  {
    "zip": "50591",
    "city": "Thor"
  },
  {
    "zip": "50595",
    "city": "Webster City"
  },
  {
    "zip": "50597",
    "city": "West Bend"
  },
  {
    "zip": "50599",
    "city": "Woolstock"
  },
  {
    "zip": "50601",
    "city": "Ackley"
  },
  {
    "zip": "50603",
    "city": "Alta Vista"
  },
  {
    "zip": "50604",
    "city": "Aplington"
  },
  {
    "zip": "50605",
    "city": "Aredale"
  },
  {
    "zip": "50609",
    "city": "Beaman"
  },
  {
    "zip": "50613",
    "city": "Cedar Falls"
  },
  {
    "zip": "50620",
    "city": "Colwell"
  },
  {
    "zip": "50621",
    "city": "Conrad"
  },
  {
    "zip": "50624",
    "city": "Dike"
  },
  {
    "zip": "50626",
    "city": "Dunkerton"
  },
  {
    "zip": "50627",
    "city": "Eldora"
  },
  {
    "zip": "50629",
    "city": "Fairbank"
  },
  {
    "zip": "50632",
    "city": "Garwin"
  },
  {
    "zip": "50635",
    "city": "Gladbrook"
  },
  {
    "zip": "50638",
    "city": "Grundy Center"
  },
  {
    "zip": "50647",
    "city": "Janesville"
  },
  {
    "zip": "50649",
    "city": "Kesley"
  },
  {
    "zip": "50651",
    "city": "La Porte City"
  },
  {
    "zip": "50653",
    "city": "Marble Rock"
  },
  {
    "zip": "50662",
    "city": "Oelwein"
  },
  {
    "zip": "50664",
    "city": "Oran"
  },
  {
    "zip": "50668",
    "city": "Readlyn"
  },
  {
    "zip": "50669",
    "city": "Reinbeck"
  },
  {
    "zip": "50670",
    "city": "Shell Rock"
  },
  {
    "zip": "50672",
    "city": "Steamboat Rock"
  },
  {
    "zip": "50675",
    "city": "Traer"
  },
  {
    "zip": "50676",
    "city": "Tripoli"
  },
  {
    "zip": "50681",
    "city": "Westgate"
  },
  {
    "zip": "50707",
    "city": "Evansdale"
  },
  {
    "zip": "50836",
    "city": "Blockton"
  },
  {
    "zip": "50845",
    "city": "Diagonal"
  },
  {
    "zip": "50846",
    "city": "Fontanelle"
  },
  {
    "zip": "50848",
    "city": "Gravity"
  },
  {
    "zip": "50854",
    "city": "Mount Ayr"
  },
  {
    "zip": "50857",
    "city": "Nodaway"
  },
  {
    "zip": "50861",
    "city": "Shannon City"
  },
  {
    "zip": "50863",
    "city": "Tingley"
  },
  {
    "zip": "50864",
    "city": "Villisca"
  },
  {
    "zip": "51002",
    "city": "Alta"
  },
  {
    "zip": "51004",
    "city": "Anthon"
  },
  {
    "zip": "51005",
    "city": "Aurelia"
  },
  {
    "zip": "51010",
    "city": "Castana"
  },
  {
    "zip": "51014",
    "city": "Cleghorn"
  },
  {
    "zip": "51016",
    "city": "Correctionville"
  },
  {
    "zip": "51020",
    "city": "Galva"
  },
  {
    "zip": "51023",
    "city": "Hawarden"
  },
  {
    "zip": "51025",
    "city": "Holstein"
  },
  {
    "zip": "51026",
    "city": "Hornick"
  },
  {
    "zip": "51027",
    "city": "Ireton"
  },
  {
    "zip": "51029",
    "city": "Larrabee"
  },
  {
    "zip": "51031",
    "city": "Le Mars"
  },
  {
    "zip": "51033",
    "city": "Linn Grove"
  },
  {
    "zip": "51035",
    "city": "Marcus"
  },
  {
    "zip": "51036",
    "city": "Maurice"
  },
  {
    "zip": "51039",
    "city": "Moville"
  },
  {
    "zip": "51040",
    "city": "Onawa"
  },
  {
    "zip": "51044",
    "city": "Oto"
  },
  {
    "zip": "51046",
    "city": "Paullina"
  },
  {
    "zip": "51047",
    "city": "Peterson"
  },
  {
    "zip": "51049",
    "city": "Quimby"
  },
  {
    "zip": "51053",
    "city": "Schaller"
  },
  {
    "zip": "51054",
    "city": "Sergeant Bluff"
  },
  {
    "zip": "51055",
    "city": "Sloan"
  },
  {
    "zip": "51060",
    "city": "Ute"
  },
  {
    "zip": "51061",
    "city": "Washta"
  },
  {
    "zip": "51101",
    "city": "Sioux City"
  },
  {
    "zip": "51230",
    "city": "Alvord"
  },
  {
    "zip": "51234",
    "city": "Boyden"
  },
  {
    "zip": "51235",
    "city": "Doon"
  },
  {
    "zip": "51237",
    "city": "George"
  },
  {
    "zip": "51238",
    "city": "Hospers"
  },
  {
    "zip": "51241",
    "city": "Larchwood"
  },
  {
    "zip": "51245",
    "city": "Primghar"
  },
  {
    "zip": "51246",
    "city": "Rock Rapids"
  },
  {
    "zip": "51247",
    "city": "Rock Valley"
  },
  {
    "zip": "51249",
    "city": "Sibley"
  },
  {
    "zip": "51250",
    "city": "Sioux Center"
  },
  {
    "zip": "51331",
    "city": "Arnolds Park"
  },
  {
    "zip": "51333",
    "city": "Dickens"
  },
  {
    "zip": "51334",
    "city": "Estherville"
  },
  {
    "zip": "51338",
    "city": "Everly"
  },
  {
    "zip": "51342",
    "city": "Graettinger"
  },
  {
    "zip": "51346",
    "city": "Hartley"
  },
  {
    "zip": "51354",
    "city": "Ocheyedan"
  },
  {
    "zip": "51355",
    "city": "Okoboji"
  },
  {
    "zip": "51357",
    "city": "Royal"
  },
  {
    "zip": "51358",
    "city": "Ruthven"
  },
  {
    "zip": "51360",
    "city": "Spirit Lake"
  },
  {
    "zip": "51364",
    "city": "Terril"
  },
  {
    "zip": "51431",
    "city": "Arthur"
  },
  {
    "zip": "51436",
    "city": "Breda"
  },
  {
    "zip": "51439",
    "city": "Charter Oak"
  },
  {
    "zip": "51441",
    "city": "Deloit"
  },
  {
    "zip": "51442",
    "city": "Denison"
  },
  {
    "zip": "51443",
    "city": "Glidden"
  },
  {
    "zip": "51445",
    "city": "Ida Grove"
  },
  {
    "zip": "51447",
    "city": "Kirkman"
  },
  {
    "zip": "51448",
    "city": "Kiron"
  },
  {
    "zip": "51453",
    "city": "Lohrville"
  },
  {
    "zip": "51458",
    "city": "Odebolt"
  },
  {
    "zip": "51461",
    "city": "Schleswig"
  },
  {
    "zip": "51465",
    "city": "Vail"
  },
  {
    "zip": "51466",
    "city": "Wall Lake"
  },
  {
    "zip": "51467",
    "city": "Westside"
  },
  {
    "zip": "51501",
    "city": "Council Bluffs"
  },
  {
    "zip": "51510",
    "city": "Carter Lake"
  },
  {
    "zip": "51520",
    "city": "Arion"
  },
  {
    "zip": "51523",
    "city": "Blencoe"
  },
  {
    "zip": "51528",
    "city": "Dow City"
  },
  {
    "zip": "51530",
    "city": "Earling"
  },
  {
    "zip": "51532",
    "city": "Elliott"
  },
  {
    "zip": "51535",
    "city": "Griswold"
  },
  {
    "zip": "51542",
    "city": "Honey Creek"
  },
  {
    "zip": "51543",
    "city": "Kimballton"
  },
  {
    "zip": "51545",
    "city": "Little Sioux"
  },
  {
    "zip": "51548",
    "city": "Mc Clelland"
  },
  {
    "zip": "51553",
    "city": "Minden"
  },
  {
    "zip": "51555",
    "city": "Missouri Valley"
  },
  {
    "zip": "51556",
    "city": "Modale"
  },
  {
    "zip": "51557",
    "city": "Mondamin"
  },
  {
    "zip": "51559",
    "city": "Neola"
  },
  {
    "zip": "51561",
    "city": "Pacific Junction"
  },
  {
    "zip": "51563",
    "city": "Persia"
  },
  {
    "zip": "51572",
    "city": "Soldier"
  },
  {
    "zip": "51575",
    "city": "Treynor"
  },
  {
    "zip": "51631",
    "city": "Braddyville"
  },
  {
    "zip": "51632",
    "city": "Clarinda"
  },
  {
    "zip": "51636",
    "city": "Coin"
  },
  {
    "zip": "51639",
    "city": "Farragut"
  },
  {
    "zip": "51645",
    "city": "Imogene"
  },
  {
    "zip": "51647",
    "city": "Northboro"
  },
  {
    "zip": "51648",
    "city": "Percival"
  },
  {
    "zip": "51653",
    "city": "Tabor"
  },
  {
    "zip": "52001",
    "city": "Dubuque"
  },
  {
    "zip": "52035",
    "city": "Colesburg"
  },
  {
    "zip": "52039",
    "city": "Durango"
  },
  {
    "zip": "52040",
    "city": "Dyersville"
  },
  {
    "zip": "52043",
    "city": "Elkader"
  },
  {
    "zip": "52044",
    "city": "Elkport"
  },
  {
    "zip": "52046",
    "city": "Farley"
  },
  {
    "zip": "52048",
    "city": "Garber"
  },
  {
    "zip": "52049",
    "city": "Garnavillo"
  },
  {
    "zip": "52052",
    "city": "Guttenberg"
  },
  {
    "zip": "52053",
    "city": "Holy Cross"
  },
  {
    "zip": "52054",
    "city": "La Motte"
  },
  {
    "zip": "52060",
    "city": "Maquoketa"
  },
  {
    "zip": "52064",
    "city": "Miles"
  },
  {
    "zip": "52066",
    "city": "North Buena Vista"
  },
  {
    "zip": "52068",
    "city": "Peosta"
  },
  {
    "zip": "52070",
    "city": "Sabula"
  },
  {
    "zip": "52072",
    "city": "Saint Olaf"
  },
  {
    "zip": "52074",
    "city": "Spragueville"
  },
  {
    "zip": "52076",
    "city": "Strawberry Point"
  },
  {
    "zip": "52079",
    "city": "Zwingle"
  },
  {
    "zip": "52101",
    "city": "Decorah"
  },
  {
    "zip": "52132",
    "city": "Calmar"
  },
  {
    "zip": "52144",
    "city": "Fort Atkinson"
  },
  {
    "zip": "52147",
    "city": "Hawkeye"
  },
  {
    "zip": "52154",
    "city": "Lawler"
  },
  {
    "zip": "52155",
    "city": "Lime Springs"
  },
  {
    "zip": "52156",
    "city": "Luana"
  },
  {
    "zip": "52157",
    "city": "Mc Gregor"
  },
  {
    "zip": "52159",
    "city": "Monona"
  },
  {
    "zip": "52160",
    "city": "New Albin"
  },
  {
    "zip": "52162",
    "city": "Postville"
  },
  {
    "zip": "52164",
    "city": "Randalia"
  },
  {
    "zip": "52169",
    "city": "Wadena"
  },
  {
    "zip": "52171",
    "city": "Waucoma"
  },
  {
    "zip": "52172",
    "city": "Waukon"
  },
  {
    "zip": "52201",
    "city": "Ainsworth"
  },
  {
    "zip": "52202",
    "city": "Alburnett"
  },
  {
    "zip": "52203",
    "city": "Amana"
  },
  {
    "zip": "52205",
    "city": "Anamosa"
  },
  {
    "zip": "52208",
    "city": "Belle Plaine"
  },
  {
    "zip": "52212",
    "city": "Center Junction"
  },
  {
    "zip": "52217",
    "city": "Clutier"
  },
  {
    "zip": "52218",
    "city": "Coggon"
  },
  {
    "zip": "52219",
    "city": "Prairieburg"
  },
  {
    "zip": "52221",
    "city": "Guernsey"
  },
  {
    "zip": "52227",
    "city": "Ely"
  },
  {
    "zip": "52231",
    "city": "Harper"
  },
  {
    "zip": "52233",
    "city": "Hiawatha"
  },
  {
    "zip": "52240",
    "city": "Iowa City"
  },
  {
    "zip": "52241",
    "city": "Coralville"
  },
  {
    "zip": "52247",
    "city": "Kalona"
  },
  {
    "zip": "52248",
    "city": "Keota"
  },
  {
    "zip": "52251",
    "city": "Ladora"
  },
  {
    "zip": "52252",
    "city": "Langworthy"
  },
  {
    "zip": "52254",
    "city": "Lost Nation"
  },
  {
    "zip": "52255",
    "city": "Lowden"
  },
  {
    "zip": "52305",
    "city": "Martelle"
  },
  {
    "zip": "52313",
    "city": "Mount Auburn"
  },
  {
    "zip": "52315",
    "city": "Newhall"
  },
  {
    "zip": "52316",
    "city": "North English"
  },
  {
    "zip": "52321",
    "city": "Onslow"
  },
  {
    "zip": "52323",
    "city": "Oxford Junction"
  },
  {
    "zip": "52324",
    "city": "Palo"
  },
  {
    "zip": "52325",
    "city": "Parnell"
  },
  {
    "zip": "52326",
    "city": "Quasqueton"
  },
  {
    "zip": "52328",
    "city": "Robins"
  },
  {
    "zip": "52330",
    "city": "Ryan"
  },
  {
    "zip": "52332",
    "city": "Shellsburg"
  },
  {
    "zip": "52334",
    "city": "South Amana"
  },
  {
    "zip": "52335",
    "city": "South English"
  },
  {
    "zip": "52338",
    "city": "Swisher"
  },
  {
    "zip": "52339",
    "city": "Tama"
  },
  {
    "zip": "52346",
    "city": "Van Horne"
  },
  {
    "zip": "52351",
    "city": "Walford"
  },
  {
    "zip": "52354",
    "city": "Watkins"
  },
  {
    "zip": "52356",
    "city": "Wellman"
  },
  {
    "zip": "52401",
    "city": "Cedar Rapids"
  },
  {
    "zip": "52501",
    "city": "Ottumwa"
  },
  {
    "zip": "52530",
    "city": "Agency"
  },
  {
    "zip": "52531",
    "city": "Albia"
  },
  {
    "zip": "52536",
    "city": "Blakesburg"
  },
  {
    "zip": "52542",
    "city": "Cantril"
  },
  {
    "zip": "52551",
    "city": "Douds"
  },
  {
    "zip": "52552",
    "city": "Drakesville"
  },
  {
    "zip": "52554",
    "city": "Eldon"
  },
  {
    "zip": "52555",
    "city": "Exline"
  },
  {
    "zip": "52560",
    "city": "Floris"
  },
  {
    "zip": "52563",
    "city": "Hedrick"
  },
  {
    "zip": "52565",
    "city": "Keosauqua"
  },
  {
    "zip": "52567",
    "city": "Libertyville"
  },
  {
    "zip": "52576",
    "city": "Ollie"
  },
  {
    "zip": "52577",
    "city": "Oskaloosa"
  },
  {
    "zip": "52580",
    "city": "Packwood"
  },
  {
    "zip": "52581",
    "city": "Plano"
  },
  {
    "zip": "52583",
    "city": "Promise City"
  },
  {
    "zip": "52591",
    "city": "Sigourney"
  },
  {
    "zip": "52593",
    "city": "Udell"
  },
  {
    "zip": "52620",
    "city": "Bonaparte"
  },
  {
    "zip": "52625",
    "city": "Donnellson"
  },
  {
    "zip": "52627",
    "city": "Fort Madison"
  },
  {
    "zip": "52632",
    "city": "Keokuk"
  },
  {
    "zip": "52635",
    "city": "Lockridge"
  },
  {
    "zip": "52637",
    "city": "Mediapolis"
  },
  {
    "zip": "52640",
    "city": "Morning Sun"
  },
  {
    "zip": "52650",
    "city": "Sperry"
  },
  {
    "zip": "52653",
    "city": "Wapello"
  },
  {
    "zip": "52658",
    "city": "Wever"
  },
  {
    "zip": "52720",
    "city": "Atalissa"
  },
  {
    "zip": "52722",
    "city": "Bettendorf"
  },
  {
    "zip": "52729",
    "city": "Calamus"
  },
  {
    "zip": "52730",
    "city": "Camanche"
  },
  {
    "zip": "52737",
    "city": "Columbus City"
  },
  {
    "zip": "52738",
    "city": "Columbus Junction"
  },
  {
    "zip": "52742",
    "city": "De Witt"
  },
  {
    "zip": "52746",
    "city": "Donahue"
  },
  {
    "zip": "52750",
    "city": "Goose Lake"
  },
  {
    "zip": "52751",
    "city": "Grand Mound"
  },
  {
    "zip": "52753",
    "city": "Le Claire"
  },
  {
    "zip": "52754",
    "city": "Letts"
  },
  {
    "zip": "52755",
    "city": "Lone Tree"
  },
  {
    "zip": "52756",
    "city": "Long Grove"
  },
  {
    "zip": "52761",
    "city": "Muscatine"
  },
  {
    "zip": "52771",
    "city": "Teeds Grove"
  },
  {
    "zip": "52773",
    "city": "Walcott"
  },
  {
    "zip": "53001",
    "city": "Adell"
  },
  {
    "zip": "53004",
    "city": "Belgium"
  },
  {
    "zip": "53010",
    "city": "Campbellsport"
  },
  {
    "zip": "53012",
    "city": "Cedarburg"
  },
  {
    "zip": "53014",
    "city": "Chilton"
  },
  {
    "zip": "53017",
    "city": "Colgate"
  },
  {
    "zip": "53018",
    "city": "Delafield"
  },
  {
    "zip": "53020",
    "city": "Elkhart Lake"
  },
  {
    "zip": "53023",
    "city": "Glenbeulah"
  },
  {
    "zip": "53032",
    "city": "Horicon"
  },
  {
    "zip": "53033",
    "city": "Hubertus"
  },
  {
    "zip": "53034",
    "city": "Hustisford"
  },
  {
    "zip": "53035",
    "city": "Iron Ridge"
  },
  {
    "zip": "53036",
    "city": "Ixonia"
  },
  {
    "zip": "53038",
    "city": "Johnson Creek"
  },
  {
    "zip": "53039",
    "city": "Juneau"
  },
  {
    "zip": "53040",
    "city": "Kewaskum"
  },
  {
    "zip": "53042",
    "city": "Kiel"
  },
  {
    "zip": "53044",
    "city": "Kohler"
  },
  {
    "zip": "53046",
    "city": "Lannon"
  },
  {
    "zip": "53048",
    "city": "Lomira"
  },
  {
    "zip": "53051",
    "city": "Menomonee Falls"
  },
  {
    "zip": "53057",
    "city": "Mount Calvary"
  },
  {
    "zip": "53058",
    "city": "Nashotah"
  },
  {
    "zip": "53059",
    "city": "Neosho"
  },
  {
    "zip": "53061",
    "city": "New Holstein"
  },
  {
    "zip": "53066",
    "city": "Oconomowoc"
  },
  {
    "zip": "53069",
    "city": "Okauchee"
  },
  {
    "zip": "53070",
    "city": "Oostburg"
  },
  {
    "zip": "53072",
    "city": "Pewaukee"
  },
  {
    "zip": "53075",
    "city": "Random Lake"
  },
  {
    "zip": "53078",
    "city": "Rubicon"
  },
  {
    "zip": "53080",
    "city": "Saukville"
  },
  {
    "zip": "53081",
    "city": "Sheboygan"
  },
  {
    "zip": "53085",
    "city": "Sheboygan Falls"
  },
  {
    "zip": "53086",
    "city": "Slinger"
  },
  {
    "zip": "53092",
    "city": "Thiensville"
  },
  {
    "zip": "53097",
    "city": "Mequon"
  },
  {
    "zip": "53110",
    "city": "Cudahy"
  },
  {
    "zip": "53115",
    "city": "Delavan"
  },
  {
    "zip": "53118",
    "city": "Dousman"
  },
  {
    "zip": "53120",
    "city": "East Troy"
  },
  {
    "zip": "53121",
    "city": "Elkhorn"
  },
  {
    "zip": "53122",
    "city": "Elm Grove"
  },
  {
    "zip": "53125",
    "city": "Fontana"
  },
  {
    "zip": "53126",
    "city": "Franksville"
  },
  {
    "zip": "53128",
    "city": "Genoa City"
  },
  {
    "zip": "53129",
    "city": "Greendale"
  },
  {
    "zip": "53130",
    "city": "Hales Corners"
  },
  {
    "zip": "53137",
    "city": "Helenville"
  },
  {
    "zip": "53139",
    "city": "Kansasville"
  },
  {
    "zip": "53140",
    "city": "Kenosha"
  },
  {
    "zip": "53147",
    "city": "Lake Geneva"
  },
  {
    "zip": "53149",
    "city": "Mukwonago"
  },
  {
    "zip": "53150",
    "city": "Muskego"
  },
  {
    "zip": "53153",
    "city": "North Prairie"
  },
  {
    "zip": "53154",
    "city": "Oak Creek"
  },
  {
    "zip": "53158",
    "city": "Pleasant Prairie"
  },
  {
    "zip": "53172",
    "city": "South Milwaukee"
  },
  {
    "zip": "53177",
    "city": "Sturtevant"
  },
  {
    "zip": "53179",
    "city": "Trevor"
  },
  {
    "zip": "53181",
    "city": "Twin Lakes"
  },
  {
    "zip": "53186",
    "city": "Waukesha"
  },
  {
    "zip": "53190",
    "city": "Whitewater"
  },
  {
    "zip": "53191",
    "city": "Williams Bay"
  },
  {
    "zip": "53503",
    "city": "Arena"
  },
  {
    "zip": "53515",
    "city": "Black Earth"
  },
  {
    "zip": "53516",
    "city": "Blanchardville"
  },
  {
    "zip": "53517",
    "city": "Blue Mounds"
  },
  {
    "zip": "53522",
    "city": "Browntown"
  },
  {
    "zip": "53529",
    "city": "Dane"
  },
  {
    "zip": "53532",
    "city": "De Forest"
  },
  {
    "zip": "53541",
    "city": "Gratiot"
  },
  {
    "zip": "53550",
    "city": "Juda"
  },
  {
    "zip": "53558",
    "city": "Mc Farland"
  },
  {
    "zip": "53560",
    "city": "Mazomanie"
  },
  {
    "zip": "53569",
    "city": "Montfort"
  },
  {
    "zip": "53572",
    "city": "Mount Horeb"
  },
  {
    "zip": "53573",
    "city": "Muscoda"
  },
  {
    "zip": "53574",
    "city": "New Glarus"
  },
  {
    "zip": "53576",
    "city": "Orfordville"
  },
  {
    "zip": "53577",
    "city": "Plain"
  },
  {
    "zip": "53578",
    "city": "Prairie Du Sac"
  },
  {
    "zip": "53579",
    "city": "Reeseville"
  },
  {
    "zip": "53580",
    "city": "Rewey"
  },
  {
    "zip": "53581",
    "city": "Richland Center"
  },
  {
    "zip": "53583",
    "city": "Sauk City"
  },
  {
    "zip": "53586",
    "city": "Shullsburg"
  },
  {
    "zip": "53587",
    "city": "South Wayne"
  },
  {
    "zip": "53588",
    "city": "Spring Green"
  },
  {
    "zip": "53590",
    "city": "Sun Prairie"
  },
  {
    "zip": "53597",
    "city": "Waunakee"
  },
  {
    "zip": "53805",
    "city": "Boscobel"
  },
  {
    "zip": "53807",
    "city": "Cuba City"
  },
  {
    "zip": "53809",
    "city": "Fennimore"
  },
  {
    "zip": "53810",
    "city": "Glen Haven"
  },
  {
    "zip": "53818",
    "city": "Platteville"
  },
  {
    "zip": "53820",
    "city": "Potosi"
  },
  {
    "zip": "53821",
    "city": "Prairie Du Chien"
  },
  {
    "zip": "53825",
    "city": "Stitzer"
  },
  {
    "zip": "53826",
    "city": "Wauzeka"
  },
  {
    "zip": "53827",
    "city": "Woodman"
  },
  {
    "zip": "53913",
    "city": "Baraboo"
  },
  {
    "zip": "53920",
    "city": "Briggsville"
  },
  {
    "zip": "53922",
    "city": "Burnett"
  },
  {
    "zip": "53923",
    "city": "Cambria"
  },
  {
    "zip": "53929",
    "city": "Elroy"
  },
  {
    "zip": "53930",
    "city": "Endeavor"
  },
  {
    "zip": "53933",
    "city": "Fox Lake"
  },
  {
    "zip": "53936",
    "city": "Grand Marsh"
  },
  {
    "zip": "53937",
    "city": "Hillpoint"
  },
  {
    "zip": "53941",
    "city": "La Valle"
  },
  {
    "zip": "53944",
    "city": "Lyndon Station"
  },
  {
    "zip": "53946",
    "city": "Markesan"
  },
  {
    "zip": "53948",
    "city": "Mauston"
  },
  {
    "zip": "53949",
    "city": "Montello"
  },
  {
    "zip": "53951",
    "city": "North Freedom"
  },
  {
    "zip": "53954",
    "city": "Pardeeville"
  },
  {
    "zip": "53955",
    "city": "Poynette"
  },
  {
    "zip": "53959",
    "city": "Reedsburg"
  },
  {
    "zip": "53961",
    "city": "Rock Springs"
  },
  {
    "zip": "53963",
    "city": "Waupun"
  },
  {
    "zip": "53965",
    "city": "Wisconsin Dells"
  },
  {
    "zip": "53968",
    "city": "Wonewoc"
  },
  {
    "zip": "54001",
    "city": "Amery"
  },
  {
    "zip": "54003",
    "city": "Beldenville"
  },
  {
    "zip": "54009",
    "city": "Dresser"
  },
  {
    "zip": "54013",
    "city": "Glenwood City"
  },
  {
    "zip": "54014",
    "city": "Hager City"
  },
  {
    "zip": "54022",
    "city": "River Falls"
  },
  {
    "zip": "54023",
    "city": "Roberts"
  },
  {
    "zip": "54024",
    "city": "Saint Croix Falls"
  },
  {
    "zip": "54026",
    "city": "Star Prairie"
  },
  {
    "zip": "54101",
    "city": "Abrams"
  },
  {
    "zip": "54102",
    "city": "Amberg"
  },
  {
    "zip": "54103",
    "city": "Armstrong Creek"
  },
  {
    "zip": "54104",
    "city": "Athelstane"
  },
  {
    "zip": "54107",
    "city": "Bonduel"
  },
  {
    "zip": "54110",
    "city": "Brillion"
  },
  {
    "zip": "54113",
    "city": "Combined Locks"
  },
  {
    "zip": "54114",
    "city": "Crivitz"
  },
  {
    "zip": "54115",
    "city": "De Pere"
  },
  {
    "zip": "54120",
    "city": "Fence"
  },
  {
    "zip": "54123",
    "city": "Forest Junction"
  },
  {
    "zip": "54126",
    "city": "Greenleaf"
  },
  {
    "zip": "54127",
    "city": "Green Valley"
  },
  {
    "zip": "54129",
    "city": "Hilbert"
  },
  {
    "zip": "54130",
    "city": "Kaukauna"
  },
  {
    "zip": "54135",
    "city": "Keshena"
  },
  {
    "zip": "54137",
    "city": "Krakow"
  },
  {
    "zip": "54140",
    "city": "Little Chute"
  },
  {
    "zip": "54141",
    "city": "Little Suamico"
  },
  {
    "zip": "54143",
    "city": "Marinette"
  },
  {
    "zip": "54149",
    "city": "Mountain"
  },
  {
    "zip": "54150",
    "city": "Neopit"
  },
  {
    "zip": "54151",
    "city": "Niagara"
  },
  {
    "zip": "54153",
    "city": "Oconto"
  },
  {
    "zip": "54154",
    "city": "Oconto Falls"
  },
  {
    "zip": "54156",
    "city": "Pembine"
  },
  {
    "zip": "54157",
    "city": "Peshtigo"
  },
  {
    "zip": "54159",
    "city": "Porterfield"
  },
  {
    "zip": "54166",
    "city": "Shawano"
  },
  {
    "zip": "54170",
    "city": "Shiocton"
  },
  {
    "zip": "54171",
    "city": "Sobieski"
  },
  {
    "zip": "54173",
    "city": "Suamico"
  },
  {
    "zip": "54174",
    "city": "Suring"
  },
  {
    "zip": "54177",
    "city": "Wausaukee"
  },
  {
    "zip": "54201",
    "city": "Algoma"
  },
  {
    "zip": "54202",
    "city": "Baileys Harbor"
  },
  {
    "zip": "54204",
    "city": "Brussels"
  },
  {
    "zip": "54209",
    "city": "Egg Harbor"
  },
  {
    "zip": "54210",
    "city": "Ellison Bay"
  },
  {
    "zip": "54212",
    "city": "Fish Creek"
  },
  {
    "zip": "54216",
    "city": "Kewaunee"
  },
  {
    "zip": "54217",
    "city": "Luxemburg"
  },
  {
    "zip": "54220",
    "city": "Manitowoc"
  },
  {
    "zip": "54227",
    "city": "Maribel"
  },
  {
    "zip": "54228",
    "city": "Mishicot"
  },
  {
    "zip": "54229",
    "city": "New Franken"
  },
  {
    "zip": "54234",
    "city": "Sister Bay"
  },
  {
    "zip": "54235",
    "city": "Sturgeon Bay"
  },
  {
    "zip": "54241",
    "city": "Two Rivers"
  },
  {
    "zip": "54245",
    "city": "Valders"
  },
  {
    "zip": "54246",
    "city": "Washington Island"
  },
  {
    "zip": "54247",
    "city": "Whitelaw"
  },
  {
    "zip": "54401",
    "city": "Wausau"
  },
  {
    "zip": "54405",
    "city": "Abbotsford"
  },
  {
    "zip": "54407",
    "city": "Amherst Junction"
  },
  {
    "zip": "54408",
    "city": "Aniwa"
  },
  {
    "zip": "54409",
    "city": "Antigo"
  },
  {
    "zip": "54410",
    "city": "Arpin"
  },
  {
    "zip": "54414",
    "city": "Birnamwood"
  },
  {
    "zip": "54416",
    "city": "Bowler"
  },
  {
    "zip": "54420",
    "city": "Chili"
  },
  {
    "zip": "54421",
    "city": "Colby"
  },
  {
    "zip": "54422",
    "city": "Curtiss"
  },
  {
    "zip": "54424",
    "city": "Deerbrook"
  },
  {
    "zip": "54426",
    "city": "Edgar"
  },
  {
    "zip": "54427",
    "city": "Eland"
  },
  {
    "zip": "54428",
    "city": "Elcho"
  },
  {
    "zip": "54436",
    "city": "Granton"
  },
  {
    "zip": "54440",
    "city": "Hatley"
  },
  {
    "zip": "54442",
    "city": "Irma"
  },
  {
    "zip": "54446",
    "city": "Loyal"
  },
  {
    "zip": "54447",
    "city": "Lublin"
  },
  {
    "zip": "54454",
    "city": "Milladore"
  },
  {
    "zip": "54455",
    "city": "Mosinee"
  },
  {
    "zip": "54456",
    "city": "Neillsville"
  },
  {
    "zip": "54457",
    "city": "Nekoosa"
  },
  {
    "zip": "54459",
    "city": "Ogema"
  },
  {
    "zip": "54460",
    "city": "Owen"
  },
  {
    "zip": "54463",
    "city": "Pelican Lake"
  },
  {
    "zip": "54465",
    "city": "Pickerel"
  },
  {
    "zip": "54467",
    "city": "Plover"
  },
  {
    "zip": "54469",
    "city": "Port Edwards"
  },
  {
    "zip": "54470",
    "city": "Rib Lake"
  },
  {
    "zip": "54471",
    "city": "Ringle"
  },
  {
    "zip": "54473",
    "city": "Rosholt"
  },
  {
    "zip": "54474",
    "city": "Rothschild"
  },
  {
    "zip": "54476",
    "city": "Schofield"
  },
  {
    "zip": "54480",
    "city": "Stetsonville"
  },
  {
    "zip": "54481",
    "city": "Stevens Point"
  },
  {
    "zip": "54485",
    "city": "Summit Lake"
  },
  {
    "zip": "54486",
    "city": "Tigerton"
  },
  {
    "zip": "54489",
    "city": "Vesper"
  },
  {
    "zip": "54490",
    "city": "Westboro"
  },
  {
    "zip": "54494",
    "city": "Wisconsin Rapids"
  },
  {
    "zip": "54498",
    "city": "Withee"
  },
  {
    "zip": "54499",
    "city": "Wittenberg"
  },
  {
    "zip": "54501",
    "city": "Rhinelander"
  },
  {
    "zip": "54511",
    "city": "Argonne"
  },
  {
    "zip": "54512",
    "city": "Boulder Junction"
  },
  {
    "zip": "54513",
    "city": "Brantwood"
  },
  {
    "zip": "54514",
    "city": "Butternut"
  },
  {
    "zip": "54517",
    "city": "Clam Lake"
  },
  {
    "zip": "54520",
    "city": "Crandon"
  },
  {
    "zip": "54521",
    "city": "Eagle River"
  },
  {
    "zip": "54524",
    "city": "Fifield"
  },
  {
    "zip": "54525",
    "city": "Gile"
  },
  {
    "zip": "54526",
    "city": "Glen Flora"
  },
  {
    "zip": "54529",
    "city": "Harshaw"
  },
  {
    "zip": "54530",
    "city": "Hawkins"
  },
  {
    "zip": "54531",
    "city": "Hazelhurst"
  },
  {
    "zip": "54537",
    "city": "Kennan"
  },
  {
    "zip": "54538",
    "city": "Lac Du Flambeau"
  },
  {
    "zip": "54539",
    "city": "Lake Tomahawk"
  },
  {
    "zip": "54541",
    "city": "Laona"
  },
  {
    "zip": "54545",
    "city": "Manitowish Waters"
  },
  {
    "zip": "54546",
    "city": "Mellen"
  },
  {
    "zip": "54548",
    "city": "Minocqua"
  },
  {
    "zip": "54550",
    "city": "Montreal"
  },
  {
    "zip": "54552",
    "city": "Park Falls"
  },
  {
    "zip": "54556",
    "city": "Prentice"
  },
  {
    "zip": "54558",
    "city": "Saint Germain"
  },
  {
    "zip": "54560",
    "city": "Sayner"
  },
  {
    "zip": "54562",
    "city": "Three Lakes"
  },
  {
    "zip": "54563",
    "city": "Tony"
  },
  {
    "zip": "54565",
    "city": "Upson"
  },
  {
    "zip": "54566",
    "city": "Wabeno"
  },
  {
    "zip": "54611",
    "city": "Alma Center"
  },
  {
    "zip": "54613",
    "city": "Arkdale"
  },
  {
    "zip": "54615",
    "city": "Black River Falls"
  },
  {
    "zip": "54618",
    "city": "Camp Douglas"
  },
  {
    "zip": "54619",
    "city": "Cashton"
  },
  {
    "zip": "54621",
    "city": "Chaseburg"
  },
  {
    "zip": "54622",
    "city": "Cochrane"
  },
  {
    "zip": "54623",
    "city": "Coon Valley"
  },
  {
    "zip": "54625",
    "city": "Dodge"
  },
  {
    "zip": "54627",
    "city": "Ettrick"
  },
  {
    "zip": "54628",
    "city": "Ferryville"
  },
  {
    "zip": "54630",
    "city": "Galesville"
  },
  {
    "zip": "54631",
    "city": "Gays Mills"
  },
  {
    "zip": "54635",
    "city": "Hixton"
  },
  {
    "zip": "54636",
    "city": "Holmen"
  },
  {
    "zip": "54639",
    "city": "La Farge"
  },
  {
    "zip": "54644",
    "city": "Mindoro"
  },
  {
    "zip": "54646",
    "city": "Necedah"
  },
  {
    "zip": "54650",
    "city": "Onalaska"
  },
  {
    "zip": "54652",
    "city": "Readstown"
  },
  {
    "zip": "54655",
    "city": "Soldiers Grove"
  },
  {
    "zip": "54660",
    "city": "Tomah"
  },
  {
    "zip": "54661",
    "city": "Trempealeau"
  },
  {
    "zip": "54665",
    "city": "Viroqua"
  },
  {
    "zip": "54666",
    "city": "Warrens"
  },
  {
    "zip": "54667",
    "city": "Westby"
  },
  {
    "zip": "54721",
    "city": "Arkansaw"
  },
  {
    "zip": "54724",
    "city": "Bloomer"
  },
  {
    "zip": "54725",
    "city": "Boyceville"
  },
  {
    "zip": "54726",
    "city": "Boyd"
  },
  {
    "zip": "54727",
    "city": "Cadott"
  },
  {
    "zip": "54728",
    "city": "Chetek"
  },
  {
    "zip": "54729",
    "city": "Chippewa Falls"
  },
  {
    "zip": "54731",
    "city": "Conrath"
  },
  {
    "zip": "54734",
    "city": "Downing"
  },
  {
    "zip": "54737",
    "city": "Eau Galle"
  },
  {
    "zip": "54738",
    "city": "Eleva"
  },
  {
    "zip": "54739",
    "city": "Elk Mound"
  },
  {
    "zip": "54741",
    "city": "Fairchild"
  },
  {
    "zip": "54742",
    "city": "Fall Creek"
  },
  {
    "zip": "54745",
    "city": "Holcombe"
  },
  {
    "zip": "54746",
    "city": "Humbird"
  },
  {
    "zip": "54748",
    "city": "Jim Falls"
  },
  {
    "zip": "54749",
    "city": "Knapp"
  },
  {
    "zip": "54750",
    "city": "Maiden Rock"
  },
  {
    "zip": "54751",
    "city": "Menomonie"
  },
  {
    "zip": "54754",
    "city": "Merrillan"
  },
  {
    "zip": "54755",
    "city": "Mondovi"
  },
  {
    "zip": "54757",
    "city": "New Auburn"
  },
  {
    "zip": "54759",
    "city": "Pepin"
  },
  {
    "zip": "54761",
    "city": "Plum City"
  },
  {
    "zip": "54762",
    "city": "Prairie Farm"
  },
  {
    "zip": "54770",
    "city": "Strum"
  },
  {
    "zip": "54771",
    "city": "Thorp"
  },
  {
    "zip": "54801",
    "city": "Spooner"
  },
  {
    "zip": "54805",
    "city": "Almena"
  },
  {
    "zip": "54810",
    "city": "Balsam Lake"
  },
  {
    "zip": "54812",
    "city": "Barron"
  },
  {
    "zip": "54813",
    "city": "Barronett"
  },
  {
    "zip": "54814",
    "city": "Bayfield"
  },
  {
    "zip": "54820",
    "city": "Brule"
  },
  {
    "zip": "54824",
    "city": "Centuria"
  },
  {
    "zip": "54827",
    "city": "Cornucopia"
  },
  {
    "zip": "54828",
    "city": "Couderay"
  },
  {
    "zip": "54832",
    "city": "Drummond"
  },
  {
    "zip": "54835",
    "city": "Exeland"
  },
  {
    "zip": "54839",
    "city": "Grand View"
  },
  {
    "zip": "54841",
    "city": "Haugen"
  },
  {
    "zip": "54843",
    "city": "Hayward"
  },
  {
    "zip": "54844",
    "city": "Herbster"
  },
  {
    "zip": "54845",
    "city": "Hertel"
  },
  {
    "zip": "54848",
    "city": "Ladysmith"
  },
  {
    "zip": "54849",
    "city": "Lake Nebagamon"
  },
  {
    "zip": "54853",
    "city": "Luck"
  },
  {
    "zip": "54859",
    "city": "Minong"
  },
  {
    "zip": "54862",
    "city": "Ojibwa"
  },
  {
    "zip": "54864",
    "city": "Poplar"
  },
  {
    "zip": "54865",
    "city": "Port Wing"
  },
  {
    "zip": "54867",
    "city": "Radisson"
  },
  {
    "zip": "54868",
    "city": "Rice Lake"
  },
  {
    "zip": "54870",
    "city": "Sarona"
  },
  {
    "zip": "54871",
    "city": "Shell Lake"
  },
  {
    "zip": "54872",
    "city": "Siren"
  },
  {
    "zip": "54873",
    "city": "Solon Springs"
  },
  {
    "zip": "54874",
    "city": "South Range"
  },
  {
    "zip": "54875",
    "city": "Springbrook"
  },
  {
    "zip": "54876",
    "city": "Stone Lake"
  },
  {
    "zip": "54880",
    "city": "Superior"
  },
  {
    "zip": "54888",
    "city": "Trego"
  },
  {
    "zip": "54889",
    "city": "Turtle Lake"
  },
  {
    "zip": "54895",
    "city": "Weyerhaeuser"
  },
  {
    "zip": "54896",
    "city": "Winter"
  },
  {
    "zip": "54901",
    "city": "Oshkosh"
  },
  {
    "zip": "54928",
    "city": "Caroline"
  },
  {
    "zip": "54929",
    "city": "Clintonville"
  },
  {
    "zip": "54935",
    "city": "Fond Du Lac"
  },
  {
    "zip": "54941",
    "city": "Green Lake"
  },
  {
    "zip": "54945",
    "city": "Iola"
  },
  {
    "zip": "54947",
    "city": "Larsen"
  },
  {
    "zip": "54948",
    "city": "Leopolis"
  },
  {
    "zip": "54949",
    "city": "Manawa"
  },
  {
    "zip": "54952",
    "city": "Menasha"
  },
  {
    "zip": "54956",
    "city": "Neenah"
  },
  {
    "zip": "54960",
    "city": "Neshkoro"
  },
  {
    "zip": "54963",
    "city": "Omro"
  },
  {
    "zip": "54964",
    "city": "Pickett"
  },
  {
    "zip": "54965",
    "city": "Pine River"
  },
  {
    "zip": "54967",
    "city": "Poy Sippi"
  },
  {
    "zip": "54970",
    "city": "Redgranite"
  },
  {
    "zip": "54971",
    "city": "Ripon"
  },
  {
    "zip": "54977",
    "city": "Scandinavia"
  },
  {
    "zip": "54978",
    "city": "Tilleda"
  },
  {
    "zip": "54979",
    "city": "Van Dyne"
  },
  {
    "zip": "54981",
    "city": "Waupaca"
  },
  {
    "zip": "54982",
    "city": "Wautoma"
  },
  {
    "zip": "54983",
    "city": "Weyauwega"
  },
  {
    "zip": "54984",
    "city": "Wild Rose"
  },
  {
    "zip": "54986",
    "city": "Winneconne"
  },
  {
    "zip": "55006",
    "city": "Braham"
  },
  {
    "zip": "55007",
    "city": "Brook Park"
  },
  {
    "zip": "55009",
    "city": "Cannon Falls"
  },
  {
    "zip": "55012",
    "city": "Center City"
  },
  {
    "zip": "55013",
    "city": "Chisago City"
  },
  {
    "zip": "55014",
    "city": "Circle Pines"
  },
  {
    "zip": "55017",
    "city": "Dalbo"
  },
  {
    "zip": "55020",
    "city": "Elko New Market"
  },
  {
    "zip": "55021",
    "city": "Faribault"
  },
  {
    "zip": "55025",
    "city": "Forest Lake"
  },
  {
    "zip": "55026",
    "city": "Frontenac"
  },
  {
    "zip": "55027",
    "city": "Goodhue"
  },
  {
    "zip": "55030",
    "city": "Grasston"
  },
  {
    "zip": "55036",
    "city": "Henriette"
  },
  {
    "zip": "55038",
    "city": "Hugo"
  },
  {
    "zip": "55040",
    "city": "Isanti"
  },
  {
    "zip": "55042",
    "city": "Lake Elmo"
  },
  {
    "zip": "55045",
    "city": "Lindstrom"
  },
  {
    "zip": "55046",
    "city": "Lonsdale"
  },
  {
    "zip": "55047",
    "city": "Marine On Saint Croix"
  },
  {
    "zip": "55051",
    "city": "Mora"
  },
  {
    "zip": "55053",
    "city": "Nerstrand"
  },
  {
    "zip": "55060",
    "city": "Owatonna"
  },
  {
    "zip": "55066",
    "city": "Red Wing"
  },
  {
    "zip": "55068",
    "city": "Rosemount"
  },
  {
    "zip": "55069",
    "city": "Rush City"
  },
  {
    "zip": "55071",
    "city": "Saint Paul Park"
  },
  {
    "zip": "55073",
    "city": "Scandia"
  },
  {
    "zip": "55074",
    "city": "Shafer"
  },
  {
    "zip": "55075",
    "city": "South Saint Paul"
  },
  {
    "zip": "55076",
    "city": "Inver Grove Heights"
  },
  {
    "zip": "55080",
    "city": "Stanchfield"
  },
  {
    "zip": "55084",
    "city": "Taylors Falls"
  },
  {
    "zip": "55303",
    "city": "Anoka"
  },
  {
    "zip": "55308",
    "city": "Becker"
  },
  {
    "zip": "55309",
    "city": "Big Lake"
  },
  {
    "zip": "55310",
    "city": "Bird Island"
  },
  {
    "zip": "55312",
    "city": "Brownton"
  },
  {
    "zip": "55314",
    "city": "Buffalo Lake"
  },
  {
    "zip": "55316",
    "city": "Champlin"
  },
  {
    "zip": "55317",
    "city": "Chanhassen"
  },
  {
    "zip": "55318",
    "city": "Chaska"
  },
  {
    "zip": "55321",
    "city": "Cokato"
  },
  {
    "zip": "55322",
    "city": "Cologne"
  },
  {
    "zip": "55324",
    "city": "Darwin"
  },
  {
    "zip": "55325",
    "city": "Dassel"
  },
  {
    "zip": "55329",
    "city": "Eden Valley"
  },
  {
    "zip": "55330",
    "city": "Elk River"
  },
  {
    "zip": "55331",
    "city": "Excelsior"
  },
  {
    "zip": "55335",
    "city": "Gibbon"
  },
  {
    "zip": "55338",
    "city": "Green Isle"
  },
  {
    "zip": "55340",
    "city": "Hamel"
  },
  {
    "zip": "55344",
    "city": "Eden Prairie"
  },
  {
    "zip": "55345",
    "city": "Minnetonka"
  },
  {
    "zip": "55349",
    "city": "Howard Lake"
  },
  {
    "zip": "55350",
    "city": "Hutchinson"
  },
  {
    "zip": "55353",
    "city": "Kimball"
  },
  {
    "zip": "55354",
    "city": "Lester Prairie"
  },
  {
    "zip": "55358",
    "city": "Maple Lake"
  },
  {
    "zip": "55359",
    "city": "Maple Plain"
  },
  {
    "zip": "55360",
    "city": "Mayer"
  },
  {
    "zip": "55364",
    "city": "Mound"
  },
  {
    "zip": "55367",
    "city": "New Germany"
  },
  {
    "zip": "55368",
    "city": "Norwood Young America"
  },
  {
    "zip": "55370",
    "city": "Plato"
  },
  {
    "zip": "55372",
    "city": "Prior Lake"
  },
  {
    "zip": "55375",
    "city": "Saint Bonifacius"
  },
  {
    "zip": "55376",
    "city": "Saint Michael"
  },
  {
    "zip": "55379",
    "city": "Shakopee"
  },
  {
    "zip": "55384",
    "city": "Spring Park"
  },
  {
    "zip": "55387",
    "city": "Waconia"
  },
  {
    "zip": "55391",
    "city": "Wayzata"
  },
  {
    "zip": "55397",
    "city": "Young America"
  },
  {
    "zip": "55398",
    "city": "Zimmerman"
  },
  {
    "zip": "55401",
    "city": "Minneapolis"
  },
  {
    "zip": "55602",
    "city": "Brimson"
  },
  {
    "zip": "55603",
    "city": "Finland"
  },
  {
    "zip": "55604",
    "city": "Grand Marais"
  },
  {
    "zip": "55605",
    "city": "Grand Portage"
  },
  {
    "zip": "55606",
    "city": "Hovland"
  },
  {
    "zip": "55607",
    "city": "Isabella"
  },
  {
    "zip": "55612",
    "city": "Lutsen"
  },
  {
    "zip": "55613",
    "city": "Schroeder"
  },
  {
    "zip": "55615",
    "city": "Tofte"
  },
  {
    "zip": "55616",
    "city": "Two Harbors"
  },
  {
    "zip": "55701",
    "city": "Adolph"
  },
  {
    "zip": "55702",
    "city": "Alborn"
  },
  {
    "zip": "55703",
    "city": "Angora"
  },
  {
    "zip": "55704",
    "city": "Askov"
  },
  {
    "zip": "55706",
    "city": "Babbitt"
  },
  {
    "zip": "55709",
    "city": "Bovey"
  },
  {
    "zip": "55712",
    "city": "Bruno"
  },
  {
    "zip": "55717",
    "city": "Canyon"
  },
  {
    "zip": "55719",
    "city": "Chisholm"
  },
  {
    "zip": "55720",
    "city": "Cloquet"
  },
  {
    "zip": "55723",
    "city": "Cook"
  },
  {
    "zip": "55724",
    "city": "Cotton"
  },
  {
    "zip": "55725",
    "city": "Crane Lake"
  },
  {
    "zip": "55732",
    "city": "Embarrass"
  },
  {
    "zip": "55733",
    "city": "Esko"
  },
  {
    "zip": "55734",
    "city": "Eveleth"
  },
  {
    "zip": "55735",
    "city": "Finlayson"
  },
  {
    "zip": "55736",
    "city": "Floodwood"
  },
  {
    "zip": "55738",
    "city": "Forbes"
  },
  {
    "zip": "55746",
    "city": "Hibbing"
  },
  {
    "zip": "55748",
    "city": "Hill City"
  },
  {
    "zip": "55750",
    "city": "Hoyt Lakes"
  },
  {
    "zip": "55751",
    "city": "Iron"
  },
  {
    "zip": "55752",
    "city": "Jacobson"
  },
  {
    "zip": "55756",
    "city": "Kerrick"
  },
  {
    "zip": "55757",
    "city": "Kettle River"
  },
  {
    "zip": "55758",
    "city": "Kinney"
  },
  {
    "zip": "55760",
    "city": "Mcgregor"
  },
  {
    "zip": "55763",
    "city": "Makinen"
  },
  {
    "zip": "55765",
    "city": "Meadowlands"
  },
  {
    "zip": "55767",
    "city": "Moose Lake"
  },
  {
    "zip": "55768",
    "city": "Mountain Iron"
  },
  {
    "zip": "55769",
    "city": "Nashwauk"
  },
  {
    "zip": "55771",
    "city": "Orr"
  },
  {
    "zip": "55775",
    "city": "Pengilly"
  },
  {
    "zip": "55781",
    "city": "Side Lake"
  },
  {
    "zip": "55783",
    "city": "Sturgeon Lake"
  },
  {
    "zip": "55784",
    "city": "Swan River"
  },
  {
    "zip": "55785",
    "city": "Swatara"
  },
  {
    "zip": "55787",
    "city": "Tamarack"
  },
  {
    "zip": "55790",
    "city": "Tower"
  },
  {
    "zip": "55792",
    "city": "Virginia"
  },
  {
    "zip": "55793",
    "city": "Warba"
  },
  {
    "zip": "55795",
    "city": "Willow River"
  },
  {
    "zip": "55797",
    "city": "Wrenshall"
  },
  {
    "zip": "55798",
    "city": "Wright"
  },
  {
    "zip": "55910",
    "city": "Altura"
  },
  {
    "zip": "55917",
    "city": "Blooming Prairie"
  },
  {
    "zip": "55918",
    "city": "Brownsdale"
  },
  {
    "zip": "55923",
    "city": "Chatfield"
  },
  {
    "zip": "55925",
    "city": "Dakota"
  },
  {
    "zip": "55927",
    "city": "Dodge Center"
  },
  {
    "zip": "55931",
    "city": "Eitzen"
  },
  {
    "zip": "55934",
    "city": "Eyota"
  },
  {
    "zip": "55936",
    "city": "Grand Meadow"
  },
  {
    "zip": "55940",
    "city": "Hayfield"
  },
  {
    "zip": "55941",
    "city": "Hokah"
  },
  {
    "zip": "55944",
    "city": "Kasson"
  },
  {
    "zip": "55947",
    "city": "La Crescent"
  },
  {
    "zip": "55953",
    "city": "Lyle"
  },
  {
    "zip": "55954",
    "city": "Mabel"
  },
  {
    "zip": "55955",
    "city": "Mantorville"
  },
  {
    "zip": "55956",
    "city": "Mazeppa"
  },
  {
    "zip": "55959",
    "city": "Minnesota City"
  },
  {
    "zip": "55960",
    "city": "Oronoco"
  },
  {
    "zip": "55968",
    "city": "Reads Landing"
  },
  {
    "zip": "55969",
    "city": "Rollingstone"
  },
  {
    "zip": "55970",
    "city": "Rose Creek"
  },
  {
    "zip": "55973",
    "city": "Sargeant"
  },
  {
    "zip": "55976",
    "city": "Stewartville"
  },
  {
    "zip": "55977",
    "city": "Taopi"
  },
  {
    "zip": "55981",
    "city": "Wabasha"
  },
  {
    "zip": "55983",
    "city": "Wanamingo"
  },
  {
    "zip": "55985",
    "city": "West Concord"
  },
  {
    "zip": "55990",
    "city": "Wykoff"
  },
  {
    "zip": "55991",
    "city": "Zumbro Falls"
  },
  {
    "zip": "55992",
    "city": "Zumbrota"
  },
  {
    "zip": "56001",
    "city": "Mankato"
  },
  {
    "zip": "56007",
    "city": "Albert Lea"
  },
  {
    "zip": "56013",
    "city": "Blue Earth"
  },
  {
    "zip": "56014",
    "city": "Bricelyn"
  },
  {
    "zip": "56016",
    "city": "Clarks Grove"
  },
  {
    "zip": "56019",
    "city": "Comfrey"
  },
  {
    "zip": "56028",
    "city": "Elysian"
  },
  {
    "zip": "56029",
    "city": "Emmons"
  },
  {
    "zip": "56033",
    "city": "Frost"
  },
  {
    "zip": "56037",
    "city": "Good Thunder"
  },
  {
    "zip": "56039",
    "city": "Granada"
  },
  {
    "zip": "56041",
    "city": "Hanska"
  },
  {
    "zip": "56050",
    "city": "Kasota"
  },
  {
    "zip": "56051",
    "city": "Kiester"
  },
  {
    "zip": "56052",
    "city": "Kilkenny"
  },
  {
    "zip": "56055",
    "city": "Lake Crystal"
  },
  {
    "zip": "56057",
    "city": "Le Center"
  },
  {
    "zip": "56058",
    "city": "Le Sueur"
  },
  {
    "zip": "56062",
    "city": "Madelia"
  },
  {
    "zip": "56063",
    "city": "Madison Lake"
  },
  {
    "zip": "56068",
    "city": "Minnesota Lake"
  },
  {
    "zip": "56071",
    "city": "New Prague"
  },
  {
    "zip": "56072",
    "city": "New Richland"
  },
  {
    "zip": "56073",
    "city": "New Ulm"
  },
  {
    "zip": "56074",
    "city": "Nicollet"
  },
  {
    "zip": "56082",
    "city": "Saint Peter"
  },
  {
    "zip": "56085",
    "city": "Sleepy Eye"
  },
  {
    "zip": "56088",
    "city": "Truman"
  },
  {
    "zip": "56093",
    "city": "Waseca"
  },
  {
    "zip": "56098",
    "city": "Winnebago"
  },
  {
    "zip": "56101",
    "city": "Windom"
  },
  {
    "zip": "56113",
    "city": "Arco"
  },
  {
    "zip": "56115",
    "city": "Balaton"
  },
  {
    "zip": "56116",
    "city": "Beaver Creek"
  },
  {
    "zip": "56117",
    "city": "Bigelow"
  },
  {
    "zip": "56118",
    "city": "Bingham Lake"
  },
  {
    "zip": "56120",
    "city": "Butterfield"
  },
  {
    "zip": "56121",
    "city": "Ceylon"
  },
  {
    "zip": "56127",
    "city": "Dunnell"
  },
  {
    "zip": "56131",
    "city": "Fulda"
  },
  {
    "zip": "56132",
    "city": "Garvin"
  },
  {
    "zip": "56137",
    "city": "Heron Lake"
  },
  {
    "zip": "56138",
    "city": "Hills"
  },
  {
    "zip": "56141",
    "city": "Iona"
  },
  {
    "zip": "56145",
    "city": "Jeffers"
  },
  {
    "zip": "56146",
    "city": "Kanaranzi"
  },
  {
    "zip": "56147",
    "city": "Kenneth"
  },
  {
    "zip": "56149",
    "city": "Lake Benton"
  },
  {
    "zip": "56150",
    "city": "Lakefield"
  },
  {
    "zip": "56151",
    "city": "Lake Wilson"
  },
  {
    "zip": "56152",
    "city": "Lamberton"
  },
  {
    "zip": "56155",
    "city": "Lismore"
  },
  {
    "zip": "56157",
    "city": "Lynd"
  },
  {
    "zip": "56159",
    "city": "Mountain Lake"
  },
  {
    "zip": "56160",
    "city": "Odin"
  },
  {
    "zip": "56161",
    "city": "Okabena"
  },
  {
    "zip": "56162",
    "city": "Ormsby"
  },
  {
    "zip": "56164",
    "city": "Pipestone"
  },
  {
    "zip": "56168",
    "city": "Rushmore"
  },
  {
    "zip": "56170",
    "city": "Ruthton"
  },
  {
    "zip": "56171",
    "city": "Sherburn"
  },
  {
    "zip": "56172",
    "city": "Slayton"
  },
  {
    "zip": "56173",
    "city": "Steen"
  },
  {
    "zip": "56174",
    "city": "Storden"
  },
  {
    "zip": "56176",
    "city": "Trimont"
  },
  {
    "zip": "56185",
    "city": "Wilmont"
  },
  {
    "zip": "56201",
    "city": "Willmar"
  },
  {
    "zip": "56211",
    "city": "Beardsley"
  },
  {
    "zip": "56214",
    "city": "Belview"
  },
  {
    "zip": "56216",
    "city": "Blomkest"
  },
  {
    "zip": "56219",
    "city": "Browns Valley"
  },
  {
    "zip": "56220",
    "city": "Canby"
  },
  {
    "zip": "56221",
    "city": "Chokio"
  },
  {
    "zip": "56222",
    "city": "Clara City"
  },
  {
    "zip": "56223",
    "city": "Clarkfield"
  },
  {
    "zip": "56226",
    "city": "Clontarf"
  },
  {
    "zip": "56227",
    "city": "Correll"
  },
  {
    "zip": "56228",
    "city": "Cosmos"
  },
  {
    "zip": "56230",
    "city": "Danube"
  },
  {
    "zip": "56235",
    "city": "Donnelly"
  },
  {
    "zip": "56237",
    "city": "Echo"
  },
  {
    "zip": "56245",
    "city": "Hanley Falls"
  },
  {
    "zip": "56248",
    "city": "Herman"
  },
  {
    "zip": "56249",
    "city": "Holloway"
  },
  {
    "zip": "56251",
    "city": "Kandiyohi"
  },
  {
    "zip": "56252",
    "city": "Kerkhoven"
  },
  {
    "zip": "56253",
    "city": "Lake Lillian"
  },
  {
    "zip": "56255",
    "city": "Lucan"
  },
  {
    "zip": "56264",
    "city": "Minneota"
  },
  {
    "zip": "56265",
    "city": "Montevideo"
  },
  {
    "zip": "56271",
    "city": "Murdock"
  },
  {
    "zip": "56277",
    "city": "Olivia"
  },
  {
    "zip": "56279",
    "city": "Pennock"
  },
  {
    "zip": "56281",
    "city": "Prinsburg"
  },
  {
    "zip": "56283",
    "city": "Redwood Falls"
  },
  {
    "zip": "56284",
    "city": "Renville"
  },
  {
    "zip": "56285",
    "city": "Sacred Heart"
  },
  {
    "zip": "56287",
    "city": "Seaforth"
  },
  {
    "zip": "56288",
    "city": "Spicer"
  },
  {
    "zip": "56289",
    "city": "Sunburg"
  },
  {
    "zip": "56292",
    "city": "Vesta"
  },
  {
    "zip": "56293",
    "city": "Wabasso"
  },
  {
    "zip": "56295",
    "city": "Watson"
  },
  {
    "zip": "56296",
    "city": "Wheaton"
  },
  {
    "zip": "56297",
    "city": "Wood Lake"
  },
  {
    "zip": "56311",
    "city": "Barrett"
  },
  {
    "zip": "56314",
    "city": "Bowlus"
  },
  {
    "zip": "56316",
    "city": "Brooten"
  },
  {
    "zip": "56318",
    "city": "Burtrum"
  },
  {
    "zip": "56319",
    "city": "Carlos"
  },
  {
    "zip": "56323",
    "city": "Cyrus"
  },
  {
    "zip": "56330",
    "city": "Foreston"
  },
  {
    "zip": "56336",
    "city": "Grey Eagle"
  },
  {
    "zip": "56340",
    "city": "Holdingford"
  },
  {
    "zip": "56342",
    "city": "Isle"
  },
  {
    "zip": "56347",
    "city": "Long Prairie"
  },
  {
    "zip": "56350",
    "city": "Mc Grath"
  },
  {
    "zip": "56353",
    "city": "Milaca"
  },
  {
    "zip": "56354",
    "city": "Miltona"
  },
  {
    "zip": "56358",
    "city": "Ogilvie"
  },
  {
    "zip": "56359",
    "city": "Onamia"
  },
  {
    "zip": "56360",
    "city": "Osakis"
  },
  {
    "zip": "56361",
    "city": "Parkers Prairie"
  },
  {
    "zip": "56364",
    "city": "Pierz"
  },
  {
    "zip": "56377",
    "city": "Sartell"
  },
  {
    "zip": "56378",
    "city": "Sauk Centre"
  },
  {
    "zip": "56379",
    "city": "Sauk Rapids"
  },
  {
    "zip": "56381",
    "city": "Starbuck"
  },
  {
    "zip": "56382",
    "city": "Swanville"
  },
  {
    "zip": "56384",
    "city": "Upsala"
  },
  {
    "zip": "56385",
    "city": "Villard"
  },
  {
    "zip": "56386",
    "city": "Wahkon"
  },
  {
    "zip": "56387",
    "city": "Waite Park"
  },
  {
    "zip": "56401",
    "city": "Brainerd"
  },
  {
    "zip": "56431",
    "city": "Aitkin"
  },
  {
    "zip": "56433",
    "city": "Akeley"
  },
  {
    "zip": "56434",
    "city": "Aldrich"
  },
  {
    "zip": "56435",
    "city": "Backus"
  },
  {
    "zip": "56437",
    "city": "Bertha"
  },
  {
    "zip": "56438",
    "city": "Browerville"
  },
  {
    "zip": "56440",
    "city": "Clarissa"
  },
  {
    "zip": "56442",
    "city": "Crosslake"
  },
  {
    "zip": "56444",
    "city": "Deerwood"
  },
  {
    "zip": "56446",
    "city": "Eagle Bend"
  },
  {
    "zip": "56447",
    "city": "Emily"
  },
  {
    "zip": "56448",
    "city": "Fifty Lakes"
  },
  {
    "zip": "56449",
    "city": "Fort Ripley"
  },
  {
    "zip": "56461",
    "city": "Laporte"
  },
  {
    "zip": "56464",
    "city": "Menahga"
  },
  {
    "zip": "56466",
    "city": "Motley"
  },
  {
    "zip": "56467",
    "city": "Nevis"
  },
  {
    "zip": "56468",
    "city": "Nisswa"
  },
  {
    "zip": "56469",
    "city": "Palisade"
  },
  {
    "zip": "56470",
    "city": "Park Rapids"
  },
  {
    "zip": "56472",
    "city": "Pequot Lakes"
  },
  {
    "zip": "56473",
    "city": "Pillager"
  },
  {
    "zip": "56475",
    "city": "Randall"
  },
  {
    "zip": "56477",
    "city": "Sebeka"
  },
  {
    "zip": "56478",
    "city": "Nimrod"
  },
  {
    "zip": "56479",
    "city": "Staples"
  },
  {
    "zip": "56481",
    "city": "Verndale"
  },
  {
    "zip": "56501",
    "city": "Detroit Lakes"
  },
  {
    "zip": "56515",
    "city": "Battle Lake"
  },
  {
    "zip": "56516",
    "city": "Bejou"
  },
  {
    "zip": "56517",
    "city": "Beltrami"
  },
  {
    "zip": "56519",
    "city": "Borup"
  },
  {
    "zip": "56524",
    "city": "Clitherall"
  },
  {
    "zip": "56527",
    "city": "Deer Creek"
  },
  {
    "zip": "56528",
    "city": "Dent"
  },
  {
    "zip": "56529",
    "city": "Dilworth"
  },
  {
    "zip": "56531",
    "city": "Elbow Lake"
  },
  {
    "zip": "56534",
    "city": "Erhard"
  },
  {
    "zip": "56535",
    "city": "Erskine"
  },
  {
    "zip": "56537",
    "city": "Fergus Falls"
  },
  {
    "zip": "56542",
    "city": "Fosston"
  },
  {
    "zip": "56543",
    "city": "Foxhome"
  },
  {
    "zip": "56544",
    "city": "Frazee"
  },
  {
    "zip": "56547",
    "city": "Glyndon"
  },
  {
    "zip": "56548",
    "city": "Halstad"
  },
  {
    "zip": "56550",
    "city": "Hendrum"
  },
  {
    "zip": "56552",
    "city": "Hitterdal"
  },
  {
    "zip": "56556",
    "city": "Mcintosh"
  },
  {
    "zip": "56557",
    "city": "Mahnomen"
  },
  {
    "zip": "56566",
    "city": "Naytahwaush"
  },
  {
    "zip": "56568",
    "city": "Nielsville"
  },
  {
    "zip": "56571",
    "city": "Ottertail"
  },
  {
    "zip": "56572",
    "city": "Pelican Rapids"
  },
  {
    "zip": "56574",
    "city": "Perley"
  },
  {
    "zip": "56575",
    "city": "Ponsford"
  },
  {
    "zip": "56578",
    "city": "Rochert"
  },
  {
    "zip": "56579",
    "city": "Rothsay"
  },
  {
    "zip": "56580",
    "city": "Sabin"
  },
  {
    "zip": "56581",
    "city": "Shelly"
  },
  {
    "zip": "56583",
    "city": "Tintah"
  },
  {
    "zip": "56584",
    "city": "Twin Valley"
  },
  {
    "zip": "56585",
    "city": "Ulen"
  },
  {
    "zip": "56587",
    "city": "Vergas"
  },
  {
    "zip": "56588",
    "city": "Vining"
  },
  {
    "zip": "56589",
    "city": "Waubun"
  },
  {
    "zip": "56592",
    "city": "Winger"
  },
  {
    "zip": "56594",
    "city": "Wolverton"
  },
  {
    "zip": "56601",
    "city": "Bemidji"
  },
  {
    "zip": "56623",
    "city": "Baudette"
  },
  {
    "zip": "56626",
    "city": "Bena"
  },
  {
    "zip": "56627",
    "city": "Big Falls"
  },
  {
    "zip": "56628",
    "city": "Bigfork"
  },
  {
    "zip": "56630",
    "city": "Blackduck"
  },
  {
    "zip": "56633",
    "city": "Cass Lake"
  },
  {
    "zip": "56634",
    "city": "Clearbrook"
  },
  {
    "zip": "56636",
    "city": "Deer River"
  },
  {
    "zip": "56637",
    "city": "Talmoon"
  },
  {
    "zip": "56639",
    "city": "Effie"
  },
  {
    "zip": "56641",
    "city": "Federal Dam"
  },
  {
    "zip": "56644",
    "city": "Gonvick"
  },
  {
    "zip": "56646",
    "city": "Gully"
  },
  {
    "zip": "56647",
    "city": "Hines"
  },
  {
    "zip": "56649",
    "city": "International Falls"
  },
  {
    "zip": "56650",
    "city": "Kelliher"
  },
  {
    "zip": "56651",
    "city": "Lengby"
  },
  {
    "zip": "56653",
    "city": "Littlefork"
  },
  {
    "zip": "56654",
    "city": "Loman"
  },
  {
    "zip": "56655",
    "city": "Longville"
  },
  {
    "zip": "56657",
    "city": "Marcell"
  },
  {
    "zip": "56658",
    "city": "Margie"
  },
  {
    "zip": "56659",
    "city": "Max"
  },
  {
    "zip": "56660",
    "city": "Mizpah"
  },
  {
    "zip": "56661",
    "city": "Northome"
  },
  {
    "zip": "56662",
    "city": "Outing"
  },
  {
    "zip": "56667",
    "city": "Puposky"
  },
  {
    "zip": "56669",
    "city": "Kabetogama"
  },
  {
    "zip": "56672",
    "city": "Remer"
  },
  {
    "zip": "56676",
    "city": "Shevlin"
  },
  {
    "zip": "56678",
    "city": "Solway"
  },
  {
    "zip": "56681",
    "city": "Squaw Lake"
  },
  {
    "zip": "56682",
    "city": "Swift"
  },
  {
    "zip": "56683",
    "city": "Tenstrike"
  },
  {
    "zip": "56684",
    "city": "Trail"
  },
  {
    "zip": "56685",
    "city": "Waskish"
  },
  {
    "zip": "56688",
    "city": "Wirt"
  },
  {
    "zip": "56701",
    "city": "Thief River Falls"
  },
  {
    "zip": "56710",
    "city": "Alvarado"
  },
  {
    "zip": "56716",
    "city": "Crookston"
  },
  {
    "zip": "56721",
    "city": "East Grand Forks"
  },
  {
    "zip": "56724",
    "city": "Gatzke"
  },
  {
    "zip": "56725",
    "city": "Goodridge"
  },
  {
    "zip": "56727",
    "city": "Grygla"
  },
  {
    "zip": "56728",
    "city": "Hallock"
  },
  {
    "zip": "56729",
    "city": "Halma"
  },
  {
    "zip": "56732",
    "city": "Karlstad"
  },
  {
    "zip": "56734",
    "city": "Lake Bronson"
  },
  {
    "zip": "56738",
    "city": "Newfolden"
  },
  {
    "zip": "56740",
    "city": "Noyes"
  },
  {
    "zip": "56742",
    "city": "Oklee"
  },
  {
    "zip": "56744",
    "city": "Oslo"
  },
  {
    "zip": "56748",
    "city": "Plummer"
  },
  {
    "zip": "56750",
    "city": "Red Lake Falls"
  },
  {
    "zip": "56751",
    "city": "Roseau"
  },
  {
    "zip": "56754",
    "city": "Saint Hilaire"
  },
  {
    "zip": "56755",
    "city": "Saint Vincent"
  },
  {
    "zip": "56756",
    "city": "Salol"
  },
  {
    "zip": "56757",
    "city": "Stephen"
  },
  {
    "zip": "56758",
    "city": "Strandquist"
  },
  {
    "zip": "56759",
    "city": "Strathcona"
  },
  {
    "zip": "56760",
    "city": "Viking"
  },
  {
    "zip": "56761",
    "city": "Wannaska"
  },
  {
    "zip": "56763",
    "city": "Warroad"
  },
  {
    "zip": "56901",
    "city": "Parcel Return Service"
  },
  {
    "zip": "57001",
    "city": "Alcester"
  },
  {
    "zip": "57004",
    "city": "Beresford"
  },
  {
    "zip": "57006",
    "city": "Brookings"
  },
  {
    "zip": "57012",
    "city": "Canistota"
  },
  {
    "zip": "57017",
    "city": "Colman"
  },
  {
    "zip": "57020",
    "city": "Crooks"
  },
  {
    "zip": "57022",
    "city": "Dell Rapids"
  },
  {
    "zip": "57024",
    "city": "Egan"
  },
  {
    "zip": "57025",
    "city": "Elk Point"
  },
  {
    "zip": "57028",
    "city": "Flandreau"
  },
  {
    "zip": "57030",
    "city": "Garretson"
  },
  {
    "zip": "57031",
    "city": "Gayville"
  },
  {
    "zip": "57037",
    "city": "Irene"
  },
  {
    "zip": "57039",
    "city": "Lennox"
  },
  {
    "zip": "57040",
    "city": "Lesterville"
  },
  {
    "zip": "57045",
    "city": "Menno"
  },
  {
    "zip": "57046",
    "city": "Mission Hill"
  },
  {
    "zip": "57049",
    "city": "North Sioux City"
  },
  {
    "zip": "57051",
    "city": "Oldham"
  },
  {
    "zip": "57054",
    "city": "Ramona"
  },
  {
    "zip": "57055",
    "city": "Renner"
  },
  {
    "zip": "57056",
    "city": "Rowena"
  },
  {
    "zip": "57064",
    "city": "Tea"
  },
  {
    "zip": "57065",
    "city": "Trent"
  },
  {
    "zip": "57066",
    "city": "Tyndall"
  },
  {
    "zip": "57068",
    "city": "Valley Springs"
  },
  {
    "zip": "57069",
    "city": "Vermillion"
  },
  {
    "zip": "57070",
    "city": "Viborg"
  },
  {
    "zip": "57072",
    "city": "Volin"
  },
  {
    "zip": "57073",
    "city": "Wakonda"
  },
  {
    "zip": "57076",
    "city": "Winfred"
  },
  {
    "zip": "57077",
    "city": "Worthing"
  },
  {
    "zip": "57078",
    "city": "Yankton"
  },
  {
    "zip": "57103",
    "city": "Sioux Falls"
  },
  {
    "zip": "57216",
    "city": "Big Stone City"
  },
  {
    "zip": "57218",
    "city": "Brandt"
  },
  {
    "zip": "57224",
    "city": "Claire City"
  },
  {
    "zip": "57231",
    "city": "De Smet"
  },
  {
    "zip": "57234",
    "city": "Estelline"
  },
  {
    "zip": "57238",
    "city": "Goodwin"
  },
  {
    "zip": "57239",
    "city": "Grenville"
  },
  {
    "zip": "57241",
    "city": "Hayti"
  },
  {
    "zip": "57246",
    "city": "Labolt"
  },
  {
    "zip": "57248",
    "city": "Lake Norden"
  },
  {
    "zip": "57249",
    "city": "Lake Preston"
  },
  {
    "zip": "57251",
    "city": "Marvin"
  },
  {
    "zip": "57252",
    "city": "Milbank"
  },
  {
    "zip": "57255",
    "city": "New Effington"
  },
  {
    "zip": "57256",
    "city": "Ortley"
  },
  {
    "zip": "57257",
    "city": "Peever"
  },
  {
    "zip": "57259",
    "city": "Revillo"
  },
  {
    "zip": "57262",
    "city": "Sisseton"
  },
  {
    "zip": "57265",
    "city": "Strandburg"
  },
  {
    "zip": "57269",
    "city": "Twin Brooks"
  },
  {
    "zip": "57270",
    "city": "Veblen"
  },
  {
    "zip": "57273",
    "city": "Waubay"
  },
  {
    "zip": "57278",
    "city": "Willow Lake"
  },
  {
    "zip": "57313",
    "city": "Armour"
  },
  {
    "zip": "57314",
    "city": "Artesian"
  },
  {
    "zip": "57317",
    "city": "Bonesteel"
  },
  {
    "zip": "57321",
    "city": "Canova"
  },
  {
    "zip": "57324",
    "city": "Cavour"
  },
  {
    "zip": "57331",
    "city": "Dimock"
  },
  {
    "zip": "57332",
    "city": "Emery"
  },
  {
    "zip": "57334",
    "city": "Ethan"
  },
  {
    "zip": "57337",
    "city": "Fedora"
  },
  {
    "zip": "57339",
    "city": "Fort Thompson"
  },
  {
    "zip": "57341",
    "city": "Gann Valley"
  },
  {
    "zip": "57342",
    "city": "Geddes"
  },
  {
    "zip": "57345",
    "city": "Highmore"
  },
  {
    "zip": "57346",
    "city": "Stephan"
  },
  {
    "zip": "57348",
    "city": "Hitchcock"
  },
  {
    "zip": "57353",
    "city": "Iroquois"
  },
  {
    "zip": "57356",
    "city": "Lake Andes"
  },
  {
    "zip": "57362",
    "city": "Miller"
  },
  {
    "zip": "57365",
    "city": "Oacoma"
  },
  {
    "zip": "57366",
    "city": "Parkston"
  },
  {
    "zip": "57368",
    "city": "Plankinton"
  },
  {
    "zip": "57369",
    "city": "Platte"
  },
  {
    "zip": "57370",
    "city": "Pukwana"
  },
  {
    "zip": "57371",
    "city": "Ree Heights"
  },
  {
    "zip": "57373",
    "city": "Saint Lawrence"
  },
  {
    "zip": "57375",
    "city": "Stickney"
  },
  {
    "zip": "57376",
    "city": "Tripp"
  },
  {
    "zip": "57379",
    "city": "Virgil"
  },
  {
    "zip": "57380",
    "city": "Wagner"
  },
  {
    "zip": "57381",
    "city": "Wessington"
  },
  {
    "zip": "57382",
    "city": "Wessington Springs"
  },
  {
    "zip": "57384",
    "city": "Wolsey"
  },
  {
    "zip": "57428",
    "city": "Bowdle"
  },
  {
    "zip": "57434",
    "city": "Conde"
  },
  {
    "zip": "57435",
    "city": "Cresbard"
  },
  {
    "zip": "57436",
    "city": "Doland"
  },
  {
    "zip": "57437",
    "city": "Eureka"
  },
  {
    "zip": "57438",
    "city": "Faulkton"
  },
  {
    "zip": "57446",
    "city": "Hecla"
  },
  {
    "zip": "57448",
    "city": "Hosmer"
  },
  {
    "zip": "57450",
    "city": "Hoven"
  },
  {
    "zip": "57454",
    "city": "Langford"
  },
  {
    "zip": "57461",
    "city": "Mellette"
  },
  {
    "zip": "57466",
    "city": "Onaka"
  },
  {
    "zip": "57470",
    "city": "Rockham"
  },
  {
    "zip": "57472",
    "city": "Selby"
  },
  {
    "zip": "57475",
    "city": "Tolstoy"
  },
  {
    "zip": "57476",
    "city": "Tulare"
  },
  {
    "zip": "57477",
    "city": "Turton"
  },
  {
    "zip": "57501",
    "city": "Pierre"
  },
  {
    "zip": "57520",
    "city": "Agar"
  },
  {
    "zip": "57522",
    "city": "Blunt"
  },
  {
    "zip": "57528",
    "city": "Colome"
  },
  {
    "zip": "57532",
    "city": "Fort Pierre"
  },
  {
    "zip": "57534",
    "city": "Hamill"
  },
  {
    "zip": "57536",
    "city": "Harrold"
  },
  {
    "zip": "57538",
    "city": "Herrick"
  },
  {
    "zip": "57540",
    "city": "Holabird"
  },
  {
    "zip": "57543",
    "city": "Kadoka"
  },
  {
    "zip": "57544",
    "city": "Kennebec"
  },
  {
    "zip": "57548",
    "city": "Lower Brule"
  },
  {
    "zip": "57553",
    "city": "Milesville"
  },
  {
    "zip": "57555",
    "city": "Mission"
  },
  {
    "zip": "57559",
    "city": "Murdo"
  },
  {
    "zip": "57562",
    "city": "Okaton"
  },
  {
    "zip": "57564",
    "city": "Onida"
  },
  {
    "zip": "57566",
    "city": "Parmelee"
  },
  {
    "zip": "57567",
    "city": "Philip"
  },
  {
    "zip": "57568",
    "city": "Presho"
  },
  {
    "zip": "57574",
    "city": "Tuthill"
  },
  {
    "zip": "57576",
    "city": "Vivian"
  },
  {
    "zip": "57577",
    "city": "Wanblee"
  },
  {
    "zip": "57579",
    "city": "White River"
  },
  {
    "zip": "57580",
    "city": "Winner"
  },
  {
    "zip": "57584",
    "city": "Witten"
  },
  {
    "zip": "57585",
    "city": "Wood"
  },
  {
    "zip": "57601",
    "city": "Mobridge"
  },
  {
    "zip": "57620",
    "city": "Bison"
  },
  {
    "zip": "57623",
    "city": "Dupree"
  },
  {
    "zip": "57625",
    "city": "Eagle Butte"
  },
  {
    "zip": "57626",
    "city": "Faith"
  },
  {
    "zip": "57630",
    "city": "Glencross"
  },
  {
    "zip": "57631",
    "city": "Glenham"
  },
  {
    "zip": "57632",
    "city": "Herreid"
  },
  {
    "zip": "57633",
    "city": "Isabel"
  },
  {
    "zip": "57634",
    "city": "Keldron"
  },
  {
    "zip": "57638",
    "city": "Lemmon"
  },
  {
    "zip": "57640",
    "city": "Lodgepole"
  },
  {
    "zip": "57642",
    "city": "Mc Laughlin"
  },
  {
    "zip": "57644",
    "city": "Meadow"
  },
  {
    "zip": "57646",
    "city": "Mound City"
  },
  {
    "zip": "57648",
    "city": "Pollock"
  },
  {
    "zip": "57656",
    "city": "Timber Lake"
  },
  {
    "zip": "57657",
    "city": "Trail City"
  },
  {
    "zip": "57658",
    "city": "Wakpala"
  },
  {
    "zip": "57706",
    "city": "Ellsworth Afb"
  },
  {
    "zip": "57716",
    "city": "Batesland"
  },
  {
    "zip": "57717",
    "city": "Belle Fourche"
  },
  {
    "zip": "57718",
    "city": "Black Hawk"
  },
  {
    "zip": "57719",
    "city": "Box Elder"
  },
  {
    "zip": "57722",
    "city": "Buffalo Gap"
  },
  {
    "zip": "57724",
    "city": "Camp Crook"
  },
  {
    "zip": "57725",
    "city": "Caputa"
  },
  {
    "zip": "57732",
    "city": "Deadwood"
  },
  {
    "zip": "57735",
    "city": "Edgemont"
  },
  {
    "zip": "57737",
    "city": "Enning"
  },
  {
    "zip": "57744",
    "city": "Hermosa"
  },
  {
    "zip": "57748",
    "city": "Howes"
  },
  {
    "zip": "57750",
    "city": "Interior"
  },
  {
    "zip": "57752",
    "city": "Kyle"
  },
  {
    "zip": "57754",
    "city": "Lead"
  },
  {
    "zip": "57758",
    "city": "Mud Butte"
  },
  {
    "zip": "57759",
    "city": "Nemo"
  },
  {
    "zip": "57761",
    "city": "New Underwood"
  },
  {
    "zip": "57762",
    "city": "Nisland"
  },
  {
    "zip": "57763",
    "city": "Oelrichs"
  },
  {
    "zip": "57764",
    "city": "Oglala"
  },
  {
    "zip": "57766",
    "city": "Oral"
  },
  {
    "zip": "57767",
    "city": "Owanka"
  },
  {
    "zip": "57772",
    "city": "Porcupine"
  },
  {
    "zip": "57775",
    "city": "Quinn"
  },
  {
    "zip": "57779",
    "city": "Saint Onge"
  },
  {
    "zip": "57780",
    "city": "Scenic"
  },
  {
    "zip": "57783",
    "city": "Spearfish"
  },
  {
    "zip": "57787",
    "city": "Union Center"
  },
  {
    "zip": "57790",
    "city": "Wall"
  },
  {
    "zip": "57791",
    "city": "Wasta"
  },
  {
    "zip": "57792",
    "city": "White Owl"
  },
  {
    "zip": "57794",
    "city": "Wounded Knee"
  },
  {
    "zip": "58002",
    "city": "Absaraka"
  },
  {
    "zip": "58005",
    "city": "Argusville"
  },
  {
    "zip": "58007",
    "city": "Ayr"
  },
  {
    "zip": "58012",
    "city": "Casselton"
  },
  {
    "zip": "58015",
    "city": "Christine"
  },
  {
    "zip": "58017",
    "city": "Cogswell"
  },
  {
    "zip": "58027",
    "city": "Enderlin"
  },
  {
    "zip": "58031",
    "city": "Fingal"
  },
  {
    "zip": "58032",
    "city": "Forman"
  },
  {
    "zip": "58033",
    "city": "Fort Ransom"
  },
  {
    "zip": "58038",
    "city": "Grandin"
  },
  {
    "zip": "58040",
    "city": "Gwinner"
  },
  {
    "zip": "58041",
    "city": "Hankinson"
  },
  {
    "zip": "58047",
    "city": "Horace"
  },
  {
    "zip": "58049",
    "city": "Kathryn"
  },
  {
    "zip": "58051",
    "city": "Kindred"
  },
  {
    "zip": "58053",
    "city": "Lidgerwood"
  },
  {
    "zip": "58057",
    "city": "Mcleod"
  },
  {
    "zip": "58058",
    "city": "Mantador"
  },
  {
    "zip": "58060",
    "city": "Milnor"
  },
  {
    "zip": "58061",
    "city": "Mooreton"
  },
  {
    "zip": "58062",
    "city": "Nome"
  },
  {
    "zip": "58063",
    "city": "Oriska"
  },
  {
    "zip": "58064",
    "city": "Page"
  },
  {
    "zip": "58065",
    "city": "Pillsbury"
  },
  {
    "zip": "58069",
    "city": "Stirum"
  },
  {
    "zip": "58075",
    "city": "Wahpeton"
  },
  {
    "zip": "58078",
    "city": "West Fargo"
  },
  {
    "zip": "58081",
    "city": "Wyndmere"
  },
  {
    "zip": "58201",
    "city": "Grand Forks"
  },
  {
    "zip": "58204",
    "city": "Grand Forks Afb"
  },
  {
    "zip": "58212",
    "city": "Aneta"
  },
  {
    "zip": "58214",
    "city": "Arvilla"
  },
  {
    "zip": "58216",
    "city": "Bathgate"
  },
  {
    "zip": "58220",
    "city": "Cavalier"
  },
  {
    "zip": "58223",
    "city": "Cummings"
  },
  {
    "zip": "58224",
    "city": "Dahlen"
  },
  {
    "zip": "58225",
    "city": "Drayton"
  },
  {
    "zip": "58228",
    "city": "Emerado"
  },
  {
    "zip": "58231",
    "city": "Fordville"
  },
  {
    "zip": "58233",
    "city": "Forest River"
  },
  {
    "zip": "58235",
    "city": "Gilby"
  },
  {
    "zip": "58236",
    "city": "Glasston"
  },
  {
    "zip": "58239",
    "city": "Hannah"
  },
  {
    "zip": "58240",
    "city": "Hatton"
  },
  {
    "zip": "58241",
    "city": "Hensel"
  },
  {
    "zip": "58243",
    "city": "Hoople"
  },
  {
    "zip": "58249",
    "city": "Langdon"
  },
  {
    "zip": "58250",
    "city": "Lankin"
  },
  {
    "zip": "58251",
    "city": "Larimore"
  },
  {
    "zip": "58254",
    "city": "Mcville"
  },
  {
    "zip": "58255",
    "city": "Maida"
  },
  {
    "zip": "58256",
    "city": "Manvel"
  },
  {
    "zip": "58258",
    "city": "Mekinock"
  },
  {
    "zip": "58259",
    "city": "Michigan"
  },
  {
    "zip": "58261",
    "city": "Minto"
  },
  {
    "zip": "58265",
    "city": "Neche"
  },
  {
    "zip": "58269",
    "city": "Osnabrock"
  },
  {
    "zip": "58270",
    "city": "Park River"
  },
  {
    "zip": "58271",
    "city": "Pembina"
  },
  {
    "zip": "58273",
    "city": "Pisek"
  },
  {
    "zip": "58301",
    "city": "Devils Lake"
  },
  {
    "zip": "58310",
    "city": "Agate"
  },
  {
    "zip": "58311",
    "city": "Alsen"
  },
  {
    "zip": "58313",
    "city": "Balta"
  },
  {
    "zip": "58316",
    "city": "Belcourt"
  },
  {
    "zip": "58317",
    "city": "Bisbee"
  },
  {
    "zip": "58318",
    "city": "Bottineau"
  },
  {
    "zip": "58321",
    "city": "Brocket"
  },
  {
    "zip": "58324",
    "city": "Cando"
  },
  {
    "zip": "58325",
    "city": "Churchs Ferry"
  },
  {
    "zip": "58327",
    "city": "Crary"
  },
  {
    "zip": "58329",
    "city": "Dunseith"
  },
  {
    "zip": "58331",
    "city": "Egeland"
  },
  {
    "zip": "58332",
    "city": "Esmond"
  },
  {
    "zip": "58339",
    "city": "Hansboro"
  },
  {
    "zip": "58348",
    "city": "Maddock"
  },
  {
    "zip": "58351",
    "city": "Minnewaukan"
  },
  {
    "zip": "58352",
    "city": "Munich"
  },
  {
    "zip": "58353",
    "city": "Mylo"
  },
  {
    "zip": "58356",
    "city": "New Rockford"
  },
  {
    "zip": "58357",
    "city": "Oberon"
  },
  {
    "zip": "58363",
    "city": "Perth"
  },
  {
    "zip": "58365",
    "city": "Rocklake"
  },
  {
    "zip": "58366",
    "city": "Rolette"
  },
  {
    "zip": "58367",
    "city": "Rolla"
  },
  {
    "zip": "58368",
    "city": "Rugby"
  },
  {
    "zip": "58372",
    "city": "Sarles"
  },
  {
    "zip": "58374",
    "city": "Sheyenne"
  },
  {
    "zip": "58377",
    "city": "Starkweather"
  },
  {
    "zip": "58380",
    "city": "Tolna"
  },
  {
    "zip": "58384",
    "city": "Willow City"
  },
  {
    "zip": "58385",
    "city": "Wolford"
  },
  {
    "zip": "58416",
    "city": "Binford"
  },
  {
    "zip": "58421",
    "city": "Carrington"
  },
  {
    "zip": "58422",
    "city": "Cathay"
  },
  {
    "zip": "58423",
    "city": "Chaseley"
  },
  {
    "zip": "58426",
    "city": "Courtenay"
  },
  {
    "zip": "58429",
    "city": "Dazey"
  },
  {
    "zip": "58430",
    "city": "Denhoff"
  },
  {
    "zip": "58431",
    "city": "Dickey"
  },
  {
    "zip": "58433",
    "city": "Edgeley"
  },
  {
    "zip": "58438",
    "city": "Fessenden"
  },
  {
    "zip": "58441",
    "city": "Fullerton"
  },
  {
    "zip": "58442",
    "city": "Gackle"
  },
  {
    "zip": "58445",
    "city": "Grace City"
  },
  {
    "zip": "58448",
    "city": "Hannaford"
  },
  {
    "zip": "58451",
    "city": "Hurdsfield"
  },
  {
    "zip": "58452",
    "city": "Jessie"
  },
  {
    "zip": "58454",
    "city": "Jud"
  },
  {
    "zip": "58455",
    "city": "Kensal"
  },
  {
    "zip": "58456",
    "city": "Kulm"
  },
  {
    "zip": "58458",
    "city": "Lamoure"
  },
  {
    "zip": "58460",
    "city": "Lehr"
  },
  {
    "zip": "58461",
    "city": "Litchville"
  },
  {
    "zip": "58463",
    "city": "Mcclusky"
  },
  {
    "zip": "58464",
    "city": "Mchenry"
  },
  {
    "zip": "58474",
    "city": "Oakes"
  },
  {
    "zip": "58475",
    "city": "Pettibone"
  },
  {
    "zip": "58476",
    "city": "Pingree"
  },
  {
    "zip": "58477",
    "city": "Regan"
  },
  {
    "zip": "58481",
    "city": "Spiritwood"
  },
  {
    "zip": "58483",
    "city": "Streeter"
  },
  {
    "zip": "58486",
    "city": "Sykeston"
  },
  {
    "zip": "58487",
    "city": "Tappen"
  },
  {
    "zip": "58488",
    "city": "Tuttle"
  },
  {
    "zip": "58492",
    "city": "Wimbledon"
  },
  {
    "zip": "58495",
    "city": "Wishek"
  },
  {
    "zip": "58496",
    "city": "Woodworth"
  },
  {
    "zip": "58501",
    "city": "Bismarck"
  },
  {
    "zip": "58528",
    "city": "Cannon Ball"
  },
  {
    "zip": "58531",
    "city": "Coleharbor"
  },
  {
    "zip": "58532",
    "city": "Driscoll"
  },
  {
    "zip": "58535",
    "city": "Flasher"
  },
  {
    "zip": "58538",
    "city": "Fort Yates"
  },
  {
    "zip": "58541",
    "city": "Golden Valley"
  },
  {
    "zip": "58544",
    "city": "Hazelton"
  },
  {
    "zip": "58545",
    "city": "Hazen"
  },
  {
    "zip": "58549",
    "city": "Kintyre"
  },
  {
    "zip": "58554",
    "city": "Mandan"
  },
  {
    "zip": "58558",
    "city": "Menoken"
  },
  {
    "zip": "58560",
    "city": "Moffit"
  },
  {
    "zip": "58562",
    "city": "New Leipzig"
  },
  {
    "zip": "58568",
    "city": "Selfridge"
  },
  {
    "zip": "58569",
    "city": "Shields"
  },
  {
    "zip": "58570",
    "city": "Solen"
  },
  {
    "zip": "58580",
    "city": "Zap"
  },
  {
    "zip": "58620",
    "city": "Amidon"
  },
  {
    "zip": "58621",
    "city": "Beach"
  },
  {
    "zip": "58622",
    "city": "Belfield"
  },
  {
    "zip": "58626",
    "city": "Dunn Center"
  },
  {
    "zip": "58631",
    "city": "Glen Ullin"
  },
  {
    "zip": "58632",
    "city": "Golva"
  },
  {
    "zip": "58634",
    "city": "Grassy Butte"
  },
  {
    "zip": "58636",
    "city": "Halliday"
  },
  {
    "zip": "58639",
    "city": "Hettinger"
  },
  {
    "zip": "58640",
    "city": "Killdeer"
  },
  {
    "zip": "58641",
    "city": "Lefor"
  },
  {
    "zip": "58643",
    "city": "Marmarth"
  },
  {
    "zip": "58646",
    "city": "Mott"
  },
  {
    "zip": "58647",
    "city": "New England"
  },
  {
    "zip": "58649",
    "city": "Reeder"
  },
  {
    "zip": "58650",
    "city": "Regent"
  },
  {
    "zip": "58651",
    "city": "Rhame"
  },
  {
    "zip": "58652",
    "city": "Richardton"
  },
  {
    "zip": "58654",
    "city": "Sentinel Butte"
  },
  {
    "zip": "58655",
    "city": "South Heart"
  },
  {
    "zip": "58704",
    "city": "Minot Afb"
  },
  {
    "zip": "58710",
    "city": "Anamoose"
  },
  {
    "zip": "58711",
    "city": "Antler"
  },
  {
    "zip": "58712",
    "city": "Balfour"
  },
  {
    "zip": "58713",
    "city": "Bantry"
  },
  {
    "zip": "58716",
    "city": "Benedict"
  },
  {
    "zip": "58718",
    "city": "Berthold"
  },
  {
    "zip": "58721",
    "city": "Bowbells"
  },
  {
    "zip": "58723",
    "city": "Butte"
  },
  {
    "zip": "58725",
    "city": "Carpio"
  },
  {
    "zip": "58731",
    "city": "Deering"
  },
  {
    "zip": "58733",
    "city": "Des Lacs"
  },
  {
    "zip": "58734",
    "city": "Donnybrook"
  },
  {
    "zip": "58736",
    "city": "Drake"
  },
  {
    "zip": "58737",
    "city": "Flaxton"
  },
  {
    "zip": "58740",
    "city": "Glenburn"
  },
  {
    "zip": "58744",
    "city": "Karlsruhe"
  },
  {
    "zip": "58746",
    "city": "Kenmare"
  },
  {
    "zip": "58748",
    "city": "Kramer"
  },
  {
    "zip": "58752",
    "city": "Lignite"
  },
  {
    "zip": "58756",
    "city": "Makoti"
  },
  {
    "zip": "58757",
    "city": "Mandaree"
  },
  {
    "zip": "58760",
    "city": "Maxbass"
  },
  {
    "zip": "58761",
    "city": "Mohall"
  },
  {
    "zip": "58763",
    "city": "New Town"
  },
  {
    "zip": "58765",
    "city": "Noonan"
  },
  {
    "zip": "58770",
    "city": "Parshall"
  },
  {
    "zip": "58771",
    "city": "Plaza"
  },
  {
    "zip": "58773",
    "city": "Powers Lake"
  },
  {
    "zip": "58775",
    "city": "Roseglen"
  },
  {
    "zip": "58776",
    "city": "Ross"
  },
  {
    "zip": "58778",
    "city": "Ruso"
  },
  {
    "zip": "58779",
    "city": "Ryder"
  },
  {
    "zip": "58783",
    "city": "Souris"
  },
  {
    "zip": "58785",
    "city": "Surrey"
  },
  {
    "zip": "58787",
    "city": "Tolley"
  },
  {
    "zip": "58788",
    "city": "Towner"
  },
  {
    "zip": "58789",
    "city": "Upham"
  },
  {
    "zip": "58790",
    "city": "Velva"
  },
  {
    "zip": "58792",
    "city": "Voltaire"
  },
  {
    "zip": "58793",
    "city": "Westhope"
  },
  {
    "zip": "58794",
    "city": "White Earth"
  },
  {
    "zip": "58795",
    "city": "Wildrose"
  },
  {
    "zip": "58835",
    "city": "Arnegard"
  },
  {
    "zip": "58838",
    "city": "Cartwright"
  },
  {
    "zip": "58844",
    "city": "Fortuna"
  },
  {
    "zip": "58845",
    "city": "Grenora"
  },
  {
    "zip": "58854",
    "city": "Watford City"
  },
  {
    "zip": "58856",
    "city": "Zahl"
  },
  {
    "zip": "59001",
    "city": "Absarokee"
  },
  {
    "zip": "59006",
    "city": "Ballantine"
  },
  {
    "zip": "59007",
    "city": "Bearcreek"
  },
  {
    "zip": "59010",
    "city": "Bighorn"
  },
  {
    "zip": "59011",
    "city": "Big Timber"
  },
  {
    "zip": "59012",
    "city": "Birney"
  },
  {
    "zip": "59014",
    "city": "Bridger"
  },
  {
    "zip": "59015",
    "city": "Broadview"
  },
  {
    "zip": "59016",
    "city": "Busby"
  },
  {
    "zip": "59022",
    "city": "Crow Agency"
  },
  {
    "zip": "59027",
    "city": "Emigrant"
  },
  {
    "zip": "59028",
    "city": "Fishtail"
  },
  {
    "zip": "59029",
    "city": "Fromberg"
  },
  {
    "zip": "59031",
    "city": "Garryowen"
  },
  {
    "zip": "59032",
    "city": "Grass Range"
  },
  {
    "zip": "59033",
    "city": "Greycliff"
  },
  {
    "zip": "59037",
    "city": "Huntley"
  },
  {
    "zip": "59038",
    "city": "Hysham"
  },
  {
    "zip": "59039",
    "city": "Ingomar"
  },
  {
    "zip": "59041",
    "city": "Joliet"
  },
  {
    "zip": "59046",
    "city": "Lavina"
  },
  {
    "zip": "59050",
    "city": "Lodge Grass"
  },
  {
    "zip": "59052",
    "city": "Mc Leod"
  },
  {
    "zip": "59053",
    "city": "Martinsdale"
  },
  {
    "zip": "59057",
    "city": "Molt"
  },
  {
    "zip": "59058",
    "city": "Mosby"
  },
  {
    "zip": "59059",
    "city": "Musselshell"
  },
  {
    "zip": "59061",
    "city": "Nye"
  },
  {
    "zip": "59062",
    "city": "Otter"
  },
  {
    "zip": "59064",
    "city": "Pompeys Pillar"
  },
  {
    "zip": "59065",
    "city": "Pray"
  },
  {
    "zip": "59067",
    "city": "Rapelje"
  },
  {
    "zip": "59068",
    "city": "Red Lodge"
  },
  {
    "zip": "59069",
    "city": "Reed Point"
  },
  {
    "zip": "59072",
    "city": "Roundup"
  },
  {
    "zip": "59074",
    "city": "Ryegate"
  },
  {
    "zip": "59075",
    "city": "Saint Xavier"
  },
  {
    "zip": "59077",
    "city": "Sand Springs"
  },
  {
    "zip": "59078",
    "city": "Shawmut"
  },
  {
    "zip": "59081",
    "city": "Silver Gate"
  },
  {
    "zip": "59084",
    "city": "Teigen"
  },
  {
    "zip": "59085",
    "city": "Two Dot"
  },
  {
    "zip": "59086",
    "city": "Wilsall"
  },
  {
    "zip": "59087",
    "city": "Winnett"
  },
  {
    "zip": "59088",
    "city": "Worden"
  },
  {
    "zip": "59089",
    "city": "Wyola"
  },
  {
    "zip": "59101",
    "city": "Billings"
  },
  {
    "zip": "59201",
    "city": "Wolf Point"
  },
  {
    "zip": "59211",
    "city": "Antelope"
  },
  {
    "zip": "59212",
    "city": "Bainville"
  },
  {
    "zip": "59215",
    "city": "Circle"
  },
  {
    "zip": "59218",
    "city": "Culbertson"
  },
  {
    "zip": "59219",
    "city": "Dagmar"
  },
  {
    "zip": "59222",
    "city": "Flaxville"
  },
  {
    "zip": "59223",
    "city": "Fort Peck"
  },
  {
    "zip": "59225",
    "city": "Frazer"
  },
  {
    "zip": "59226",
    "city": "Froid"
  },
  {
    "zip": "59240",
    "city": "Glentana"
  },
  {
    "zip": "59244",
    "city": "Larslan"
  },
  {
    "zip": "59247",
    "city": "Medicine Lake"
  },
  {
    "zip": "59250",
    "city": "Opheim"
  },
  {
    "zip": "59252",
    "city": "Outlook"
  },
  {
    "zip": "59253",
    "city": "Peerless"
  },
  {
    "zip": "59254",
    "city": "Plentywood"
  },
  {
    "zip": "59257",
    "city": "Redstone"
  },
  {
    "zip": "59258",
    "city": "Reserve"
  },
  {
    "zip": "59259",
    "city": "Richey"
  },
  {
    "zip": "59274",
    "city": "Vida"
  },
  {
    "zip": "59276",
    "city": "Whitetail"
  },
  {
    "zip": "59301",
    "city": "Miles City"
  },
  {
    "zip": "59311",
    "city": "Alzada"
  },
  {
    "zip": "59312",
    "city": "Angela"
  },
  {
    "zip": "59314",
    "city": "Biddle"
  },
  {
    "zip": "59316",
    "city": "Boyes"
  },
  {
    "zip": "59317",
    "city": "Broadus"
  },
  {
    "zip": "59318",
    "city": "Brusett"
  },
  {
    "zip": "59319",
    "city": "Capitol"
  },
  {
    "zip": "59322",
    "city": "Cohagen"
  },
  {
    "zip": "59324",
    "city": "Ekalaka"
  },
  {
    "zip": "59326",
    "city": "Fallon"
  },
  {
    "zip": "59330",
    "city": "Glendive"
  },
  {
    "zip": "59333",
    "city": "Hathaway"
  },
  {
    "zip": "59336",
    "city": "Ismay"
  },
  {
    "zip": "59338",
    "city": "Kinsey"
  },
  {
    "zip": "59339",
    "city": "Lindsay"
  },
  {
    "zip": "59343",
    "city": "Olive"
  },
  {
    "zip": "59344",
    "city": "Plevna"
  },
  {
    "zip": "59345",
    "city": "Powderville"
  },
  {
    "zip": "59347",
    "city": "Rosebud"
  },
  {
    "zip": "59351",
    "city": "Volborg"
  },
  {
    "zip": "59353",
    "city": "Wibaux"
  },
  {
    "zip": "59402",
    "city": "Malmstrom A F B"
  },
  {
    "zip": "59412",
    "city": "Belt"
  },
  {
    "zip": "59414",
    "city": "Black Eagle"
  },
  {
    "zip": "59416",
    "city": "Brady"
  },
  {
    "zip": "59417",
    "city": "Browning"
  },
  {
    "zip": "59419",
    "city": "Bynum"
  },
  {
    "zip": "59420",
    "city": "Carter"
  },
  {
    "zip": "59422",
    "city": "Choteau"
  },
  {
    "zip": "59424",
    "city": "Coffee Creek"
  },
  {
    "zip": "59427",
    "city": "Cut Bank"
  },
  {
    "zip": "59440",
    "city": "Floweree"
  },
  {
    "zip": "59441",
    "city": "Forest Grove"
  },
  {
    "zip": "59442",
    "city": "Fort Benton"
  },
  {
    "zip": "59443",
    "city": "Fort Shaw"
  },
  {
    "zip": "59444",
    "city": "Galata"
  },
  {
    "zip": "59447",
    "city": "Geyser"
  },
  {
    "zip": "59450",
    "city": "Highwood"
  },
  {
    "zip": "59451",
    "city": "Hilger"
  },
  {
    "zip": "59452",
    "city": "Hobson"
  },
  {
    "zip": "59453",
    "city": "Judith Gap"
  },
  {
    "zip": "59454",
    "city": "Kevin"
  },
  {
    "zip": "59456",
    "city": "Ledger"
  },
  {
    "zip": "59460",
    "city": "Loma"
  },
  {
    "zip": "59461",
    "city": "Lothair"
  },
  {
    "zip": "59462",
    "city": "Moccasin"
  },
  {
    "zip": "59463",
    "city": "Monarch"
  },
  {
    "zip": "59465",
    "city": "Neihart"
  },
  {
    "zip": "59466",
    "city": "Oilmont"
  },
  {
    "zip": "59467",
    "city": "Pendroy"
  },
  {
    "zip": "59468",
    "city": "Power"
  },
  {
    "zip": "59469",
    "city": "Raynesford"
  },
  {
    "zip": "59471",
    "city": "Roy"
  },
  {
    "zip": "59472",
    "city": "Sand Coulee"
  },
  {
    "zip": "59480",
    "city": "Stockett"
  },
  {
    "zip": "59482",
    "city": "Sunburst"
  },
  {
    "zip": "59483",
    "city": "Sun River"
  },
  {
    "zip": "59484",
    "city": "Sweet Grass"
  },
  {
    "zip": "59487",
    "city": "Vaughn"
  },
  {
    "zip": "59489",
    "city": "Winifred"
  },
  {
    "zip": "59501",
    "city": "Havre"
  },
  {
    "zip": "59523",
    "city": "Chinook"
  },
  {
    "zip": "59524",
    "city": "Dodson"
  },
  {
    "zip": "59525",
    "city": "Gildford"
  },
  {
    "zip": "59529",
    "city": "Hogeland"
  },
  {
    "zip": "59531",
    "city": "Joplin"
  },
  {
    "zip": "59532",
    "city": "Kremlin"
  },
  {
    "zip": "59535",
    "city": "Lloyd"
  },
  {
    "zip": "59537",
    "city": "Loring"
  },
  {
    "zip": "59545",
    "city": "Whitlash"
  },
  {
    "zip": "59546",
    "city": "Zortman"
  },
  {
    "zip": "59547",
    "city": "Zurich"
  },
  {
    "zip": "59632",
    "city": "Boulder"
  },
  {
    "zip": "59633",
    "city": "Canyon Creek"
  },
  {
    "zip": "59634",
    "city": "Clancy"
  },
  {
    "zip": "59635",
    "city": "East Helena"
  },
  {
    "zip": "59641",
    "city": "Radersburg"
  },
  {
    "zip": "59643",
    "city": "Toston"
  },
  {
    "zip": "59648",
    "city": "Wolf Creek"
  },
  {
    "zip": "59711",
    "city": "Anaconda"
  },
  {
    "zip": "59715",
    "city": "Bozeman"
  },
  {
    "zip": "59721",
    "city": "Cardwell"
  },
  {
    "zip": "59727",
    "city": "Divide"
  },
  {
    "zip": "59729",
    "city": "Ennis"
  },
  {
    "zip": "59730",
    "city": "Gallatin Gateway"
  },
  {
    "zip": "59733",
    "city": "Gold Creek"
  },
  {
    "zip": "59741",
    "city": "Manhattan"
  },
  {
    "zip": "59746",
    "city": "Polaris"
  },
  {
    "zip": "59751",
    "city": "Silver Star"
  },
  {
    "zip": "59752",
    "city": "Three Forks"
  },
  {
    "zip": "59754",
    "city": "Twin Bridges"
  },
  {
    "zip": "59755",
    "city": "Virginia City"
  },
  {
    "zip": "59758",
    "city": "West Yellowstone"
  },
  {
    "zip": "59761",
    "city": "Wisdom"
  },
  {
    "zip": "59762",
    "city": "Wise River"
  },
  {
    "zip": "59801",
    "city": "Missoula"
  },
  {
    "zip": "59820",
    "city": "Alberton"
  },
  {
    "zip": "59821",
    "city": "Arlee"
  },
  {
    "zip": "59823",
    "city": "Bonner"
  },
  {
    "zip": "59824",
    "city": "Charlo"
  },
  {
    "zip": "59826",
    "city": "Condon"
  },
  {
    "zip": "59827",
    "city": "Conner"
  },
  {
    "zip": "59828",
    "city": "Corvallis"
  },
  {
    "zip": "59837",
    "city": "Hall"
  },
  {
    "zip": "59843",
    "city": "Helmville"
  },
  {
    "zip": "59844",
    "city": "Heron"
  },
  {
    "zip": "59846",
    "city": "Huson"
  },
  {
    "zip": "59847",
    "city": "Lolo"
  },
  {
    "zip": "59848",
    "city": "Lonepine"
  },
  {
    "zip": "59853",
    "city": "Noxon"
  },
  {
    "zip": "59854",
    "city": "Ovando"
  },
  {
    "zip": "59860",
    "city": "Polson"
  },
  {
    "zip": "59863",
    "city": "Ravalli"
  },
  {
    "zip": "59864",
    "city": "Ronan"
  },
  {
    "zip": "59865",
    "city": "Saint Ignatius"
  },
  {
    "zip": "59866",
    "city": "Saint Regis"
  },
  {
    "zip": "59867",
    "city": "Saltese"
  },
  {
    "zip": "59868",
    "city": "Seeley Lake"
  },
  {
    "zip": "59871",
    "city": "Sula"
  },
  {
    "zip": "59873",
    "city": "Thompson Falls"
  },
  {
    "zip": "59901",
    "city": "Kalispell"
  },
  {
    "zip": "59910",
    "city": "Big Arm"
  },
  {
    "zip": "59915",
    "city": "Elmo"
  },
  {
    "zip": "59920",
    "city": "Kila"
  },
  {
    "zip": "59923",
    "city": "Libby"
  },
  {
    "zip": "59926",
    "city": "Martin City"
  },
  {
    "zip": "59928",
    "city": "Polebridge"
  },
  {
    "zip": "59931",
    "city": "Rollins"
  },
  {
    "zip": "59937",
    "city": "Whitefish"
  },
  {
    "zip": "60004",
    "city": "Arlington Heights"
  },
  {
    "zip": "60007",
    "city": "Elk Grove Village"
  },
  {
    "zip": "60008",
    "city": "Rolling Meadows"
  },
  {
    "zip": "60012",
    "city": "Crystal Lake"
  },
  {
    "zip": "60016",
    "city": "Des Plaines"
  },
  {
    "zip": "60021",
    "city": "Fox River Grove"
  },
  {
    "zip": "60025",
    "city": "Glenview"
  },
  {
    "zip": "60030",
    "city": "Grayslake"
  },
  {
    "zip": "60031",
    "city": "Gurnee"
  },
  {
    "zip": "60037",
    "city": "Fort Sheridan"
  },
  {
    "zip": "60042",
    "city": "Island Lake"
  },
  {
    "zip": "60044",
    "city": "Lake Bluff"
  },
  {
    "zip": "60045",
    "city": "Lake Forest"
  },
  {
    "zip": "60046",
    "city": "Lake Villa"
  },
  {
    "zip": "60047",
    "city": "Lake Zurich"
  },
  {
    "zip": "60053",
    "city": "Morton Grove"
  },
  {
    "zip": "60056",
    "city": "Mount Prospect"
  },
  {
    "zip": "60060",
    "city": "Mundelein"
  },
  {
    "zip": "60061",
    "city": "Vernon Hills"
  },
  {
    "zip": "60062",
    "city": "Northbrook"
  },
  {
    "zip": "60064",
    "city": "North Chicago"
  },
  {
    "zip": "60067",
    "city": "Palatine"
  },
  {
    "zip": "60069",
    "city": "Lincolnshire"
  },
  {
    "zip": "60070",
    "city": "Prospect Heights"
  },
  {
    "zip": "60076",
    "city": "Skokie"
  },
  {
    "zip": "60084",
    "city": "Wauconda"
  },
  {
    "zip": "60085",
    "city": "Waukegan"
  },
  {
    "zip": "60088",
    "city": "Great Lakes"
  },
  {
    "zip": "60089",
    "city": "Buffalo Grove"
  },
  {
    "zip": "60091",
    "city": "Wilmette"
  },
  {
    "zip": "60093",
    "city": "Winnetka"
  },
  {
    "zip": "60096",
    "city": "Winthrop Harbor"
  },
  {
    "zip": "60097",
    "city": "Wonder Lake"
  },
  {
    "zip": "60099",
    "city": "Zion"
  },
  {
    "zip": "60102",
    "city": "Algonquin"
  },
  {
    "zip": "60106",
    "city": "Bensenville"
  },
  {
    "zip": "60107",
    "city": "Streamwood"
  },
  {
    "zip": "60110",
    "city": "Carpentersville"
  },
  {
    "zip": "60115",
    "city": "Dekalb"
  },
  {
    "zip": "60119",
    "city": "Elburn"
  },
  {
    "zip": "60133",
    "city": "Hanover Park"
  },
  {
    "zip": "60136",
    "city": "Gilberts"
  },
  {
    "zip": "60137",
    "city": "Glen Ellyn"
  },
  {
    "zip": "60139",
    "city": "Glendale Heights"
  },
  {
    "zip": "60143",
    "city": "Itasca"
  },
  {
    "zip": "60146",
    "city": "Kirkland"
  },
  {
    "zip": "60148",
    "city": "Lombard"
  },
  {
    "zip": "60151",
    "city": "Maple Park"
  },
  {
    "zip": "60154",
    "city": "Westchester"
  },
  {
    "zip": "60156",
    "city": "Lake In The Hills"
  },
  {
    "zip": "60157",
    "city": "Medinah"
  },
  {
    "zip": "60160",
    "city": "Melrose Park"
  },
  {
    "zip": "60163",
    "city": "Berkeley"
  },
  {
    "zip": "60165",
    "city": "Stone Park"
  },
  {
    "zip": "60169",
    "city": "Hoffman Estates"
  },
  {
    "zip": "60171",
    "city": "River Grove"
  },
  {
    "zip": "60173",
    "city": "Schaumburg"
  },
  {
    "zip": "60176",
    "city": "Schiller Park"
  },
  {
    "zip": "60177",
    "city": "South Elgin"
  },
  {
    "zip": "60181",
    "city": "Villa Park"
  },
  {
    "zip": "60185",
    "city": "West Chicago"
  },
  {
    "zip": "60188",
    "city": "Carol Stream"
  },
  {
    "zip": "60191",
    "city": "Wood Dale"
  },
  {
    "zip": "60305",
    "city": "River Forest"
  },
  {
    "zip": "60401",
    "city": "Beecher"
  },
  {
    "zip": "60403",
    "city": "Crest Hill"
  },
  {
    "zip": "60404",
    "city": "Shorewood"
  },
  {
    "zip": "60406",
    "city": "Blue Island"
  },
  {
    "zip": "60407",
    "city": "Braceville"
  },
  {
    "zip": "60408",
    "city": "Braidwood"
  },
  {
    "zip": "60409",
    "city": "Calumet City"
  },
  {
    "zip": "60410",
    "city": "Channahon"
  },
  {
    "zip": "60411",
    "city": "Chicago Heights"
  },
  {
    "zip": "60415",
    "city": "Chicago Ridge"
  },
  {
    "zip": "60417",
    "city": "Crete"
  },
  {
    "zip": "60419",
    "city": "Dolton"
  },
  {
    "zip": "60420",
    "city": "Dwight"
  },
  {
    "zip": "60422",
    "city": "Flossmoor"
  },
  {
    "zip": "60429",
    "city": "Hazel Crest"
  },
  {
    "zip": "60430",
    "city": "Homewood"
  },
  {
    "zip": "60439",
    "city": "Lemont"
  },
  {
    "zip": "60440",
    "city": "Bolingbrook"
  },
  {
    "zip": "60443",
    "city": "Matteson"
  },
  {
    "zip": "60444",
    "city": "Mazon"
  },
  {
    "zip": "60446",
    "city": "Romeoville"
  },
  {
    "zip": "60447",
    "city": "Minooka"
  },
  {
    "zip": "60448",
    "city": "Mokena"
  },
  {
    "zip": "60449",
    "city": "Monee"
  },
  {
    "zip": "60451",
    "city": "New Lenox"
  },
  {
    "zip": "60452",
    "city": "Oak Forest"
  },
  {
    "zip": "60453",
    "city": "Oak Lawn"
  },
  {
    "zip": "60455",
    "city": "Bridgeview"
  },
  {
    "zip": "60456",
    "city": "Hometown"
  },
  {
    "zip": "60457",
    "city": "Hickory Hills"
  },
  {
    "zip": "60458",
    "city": "Justice"
  },
  {
    "zip": "60460",
    "city": "Odell"
  },
  {
    "zip": "60461",
    "city": "Olympia Fields"
  },
  {
    "zip": "60462",
    "city": "Orland Park"
  },
  {
    "zip": "60463",
    "city": "Palos Heights"
  },
  {
    "zip": "60464",
    "city": "Palos Park"
  },
  {
    "zip": "60465",
    "city": "Palos Hills"
  },
  {
    "zip": "60466",
    "city": "Park Forest"
  },
  {
    "zip": "60468",
    "city": "Peotone"
  },
  {
    "zip": "60471",
    "city": "Richton Park"
  },
  {
    "zip": "60473",
    "city": "South Holland"
  },
  {
    "zip": "60475",
    "city": "Steger"
  },
  {
    "zip": "60477",
    "city": "Tinley Park"
  },
  {
    "zip": "60478",
    "city": "Country Club Hills"
  },
  {
    "zip": "60480",
    "city": "Willow Springs"
  },
  {
    "zip": "60482",
    "city": "Worth"
  },
  {
    "zip": "60491",
    "city": "Homer Glen"
  },
  {
    "zip": "60501",
    "city": "Summit Argo"
  },
  {
    "zip": "60514",
    "city": "Clarendon Hills"
  },
  {
    "zip": "60515",
    "city": "Downers Grove"
  },
  {
    "zip": "60523",
    "city": "Oak Brook"
  },
  {
    "zip": "60526",
    "city": "La Grange Park"
  },
  {
    "zip": "60527",
    "city": "Willowbrook"
  },
  {
    "zip": "60539",
    "city": "Mooseheart"
  },
  {
    "zip": "60540",
    "city": "Naperville"
  },
  {
    "zip": "60542",
    "city": "North Aurora"
  },
  {
    "zip": "60549",
    "city": "Serena"
  },
  {
    "zip": "60550",
    "city": "Shabbona"
  },
  {
    "zip": "60552",
    "city": "Somonauk"
  },
  {
    "zip": "60553",
    "city": "Steward"
  },
  {
    "zip": "60556",
    "city": "Waterman"
  },
  {
    "zip": "60558",
    "city": "Western Springs"
  },
  {
    "zip": "60559",
    "city": "Westmont"
  },
  {
    "zip": "60599",
    "city": "Fox Valley"
  },
  {
    "zip": "60601",
    "city": "Chicago"
  },
  {
    "zip": "60706",
    "city": "Harwood Heights"
  },
  {
    "zip": "60712",
    "city": "Lincolnwood"
  },
  {
    "zip": "60803",
    "city": "Alsip"
  },
  {
    "zip": "60805",
    "city": "Evergreen Park"
  },
  {
    "zip": "60901",
    "city": "Kankakee"
  },
  {
    "zip": "60911",
    "city": "Ashkum"
  },
  {
    "zip": "60912",
    "city": "Beaverville"
  },
  {
    "zip": "60913",
    "city": "Bonfield"
  },
  {
    "zip": "60914",
    "city": "Bourbonnais"
  },
  {
    "zip": "60919",
    "city": "Cabery"
  },
  {
    "zip": "60922",
    "city": "Chebanse"
  },
  {
    "zip": "60924",
    "city": "Cissna Park"
  },
  {
    "zip": "60929",
    "city": "Cullom"
  },
  {
    "zip": "60931",
    "city": "Donovan"
  },
  {
    "zip": "60934",
    "city": "Emington"
  },
  {
    "zip": "60936",
    "city": "Gibson City"
  },
  {
    "zip": "60940",
    "city": "Grant Park"
  },
  {
    "zip": "60941",
    "city": "Herscher"
  },
  {
    "zip": "60942",
    "city": "Hoopeston"
  },
  {
    "zip": "60948",
    "city": "Loda"
  },
  {
    "zip": "60950",
    "city": "Manteno"
  },
  {
    "zip": "60951",
    "city": "Martinton"
  },
  {
    "zip": "60954",
    "city": "Momence"
  },
  {
    "zip": "60955",
    "city": "Onarga"
  },
  {
    "zip": "60958",
    "city": "Pembroke Township"
  },
  {
    "zip": "60959",
    "city": "Piper City"
  },
  {
    "zip": "60960",
    "city": "Rankin"
  },
  {
    "zip": "60964",
    "city": "Saint Anne"
  },
  {
    "zip": "60968",
    "city": "Thawville"
  },
  {
    "zip": "60970",
    "city": "Watseka"
  },
  {
    "zip": "61001",
    "city": "Apple River"
  },
  {
    "zip": "61014",
    "city": "Chadwick"
  },
  {
    "zip": "61015",
    "city": "Chana"
  },
  {
    "zip": "61020",
    "city": "Davis Junction"
  },
  {
    "zip": "61025",
    "city": "East Dubuque"
  },
  {
    "zip": "61030",
    "city": "Forreston"
  },
  {
    "zip": "61031",
    "city": "Franklin Grove"
  },
  {
    "zip": "61038",
    "city": "Garden Prairie"
  },
  {
    "zip": "61039",
    "city": "German Valley"
  },
  {
    "zip": "61042",
    "city": "Harmon"
  },
  {
    "zip": "61046",
    "city": "Lanark"
  },
  {
    "zip": "61047",
    "city": "Leaf River"
  },
  {
    "zip": "61049",
    "city": "Lindenwood"
  },
  {
    "zip": "61050",
    "city": "Mc Connell"
  },
  {
    "zip": "61052",
    "city": "Monroe Center"
  },
  {
    "zip": "61053",
    "city": "Mount Carroll"
  },
  {
    "zip": "61062",
    "city": "Pearl City"
  },
  {
    "zip": "61063",
    "city": "Pecatonica"
  },
  {
    "zip": "61064",
    "city": "Polo"
  },
  {
    "zip": "61065",
    "city": "Poplar Grove"
  },
  {
    "zip": "61067",
    "city": "Ridott"
  },
  {
    "zip": "61070",
    "city": "Rock City"
  },
  {
    "zip": "61074",
    "city": "Savanna"
  },
  {
    "zip": "61075",
    "city": "Scales Mound"
  },
  {
    "zip": "61080",
    "city": "South Beloit"
  },
  {
    "zip": "61084",
    "city": "Stillman Valley"
  },
  {
    "zip": "61111",
    "city": "Loves Park"
  },
  {
    "zip": "61115",
    "city": "Machesney Park"
  },
  {
    "zip": "61231",
    "city": "Aledo"
  },
  {
    "zip": "61234",
    "city": "Annawan"
  },
  {
    "zip": "61239",
    "city": "Carbon Cliff"
  },
  {
    "zip": "61240",
    "city": "Coal Valley"
  },
  {
    "zip": "61241",
    "city": "Colona"
  },
  {
    "zip": "61243",
    "city": "Deer Grove"
  },
  {
    "zip": "61244",
    "city": "East Moline"
  },
  {
    "zip": "61258",
    "city": "Hooppole"
  },
  {
    "zip": "61259",
    "city": "Illinois City"
  },
  {
    "zip": "61260",
    "city": "Joy"
  },
  {
    "zip": "61261",
    "city": "Lyndon"
  },
  {
    "zip": "61262",
    "city": "Lynn Center"
  },
  {
    "zip": "61265",
    "city": "Moline"
  },
  {
    "zip": "61273",
    "city": "Orion"
  },
  {
    "zip": "61274",
    "city": "Osco"
  },
  {
    "zip": "61277",
    "city": "Prophetstown"
  },
  {
    "zip": "61281",
    "city": "Sherrard"
  },
  {
    "zip": "61282",
    "city": "Silvis"
  },
  {
    "zip": "61283",
    "city": "Tampico"
  },
  {
    "zip": "61284",
    "city": "Taylor Ridge"
  },
  {
    "zip": "61311",
    "city": "Ancona"
  },
  {
    "zip": "61314",
    "city": "Buda"
  },
  {
    "zip": "61318",
    "city": "Compton"
  },
  {
    "zip": "61327",
    "city": "Hennepin"
  },
  {
    "zip": "61329",
    "city": "Ladd"
  },
  {
    "zip": "61330",
    "city": "La Moille"
  },
  {
    "zip": "61333",
    "city": "Long Point"
  },
  {
    "zip": "61334",
    "city": "Lostant"
  },
  {
    "zip": "61335",
    "city": "Mc Nabb"
  },
  {
    "zip": "61341",
    "city": "Marseilles"
  },
  {
    "zip": "61345",
    "city": "Neponset"
  },
  {
    "zip": "61348",
    "city": "Oglesby"
  },
  {
    "zip": "61349",
    "city": "Ohio"
  },
  {
    "zip": "61364",
    "city": "Streator"
  },
  {
    "zip": "61367",
    "city": "Sublette"
  },
  {
    "zip": "61368",
    "city": "Tiskilwa"
  },
  {
    "zip": "61369",
    "city": "Toluca"
  },
  {
    "zip": "61370",
    "city": "Tonica"
  },
  {
    "zip": "61375",
    "city": "Varna"
  },
  {
    "zip": "61377",
    "city": "Wenona"
  },
  {
    "zip": "61378",
    "city": "West Brooklyn"
  },
  {
    "zip": "61379",
    "city": "Wyanet"
  },
  {
    "zip": "61418",
    "city": "Biggsville"
  },
  {
    "zip": "61420",
    "city": "Blandinsville"
  },
  {
    "zip": "61425",
    "city": "Carman"
  },
  {
    "zip": "61428",
    "city": "Dahinda"
  },
  {
    "zip": "61430",
    "city": "East Galesburg"
  },
  {
    "zip": "61435",
    "city": "Gerlaw"
  },
  {
    "zip": "61436",
    "city": "Gilson"
  },
  {
    "zip": "61441",
    "city": "Ipava"
  },
  {
    "zip": "61442",
    "city": "Keithsburg"
  },
  {
    "zip": "61443",
    "city": "Kewanee"
  },
  {
    "zip": "61450",
    "city": "La Harpe"
  },
  {
    "zip": "61453",
    "city": "Little York"
  },
  {
    "zip": "61454",
    "city": "Lomax"
  },
  {
    "zip": "61458",
    "city": "Maquon"
  },
  {
    "zip": "61466",
    "city": "North Henderson"
  },
  {
    "zip": "61468",
    "city": "Ophiem"
  },
  {
    "zip": "61469",
    "city": "Oquawka"
  },
  {
    "zip": "61476",
    "city": "Seaton"
  },
  {
    "zip": "61478",
    "city": "Smithshire"
  },
  {
    "zip": "61479",
    "city": "Speer"
  },
  {
    "zip": "61480",
    "city": "Stronghurst"
  },
  {
    "zip": "61482",
    "city": "Table Grove"
  },
  {
    "zip": "61483",
    "city": "Toulon"
  },
  {
    "zip": "61484",
    "city": "Vermont"
  },
  {
    "zip": "61488",
    "city": "Wataga"
  },
  {
    "zip": "61526",
    "city": "Edelstein"
  },
  {
    "zip": "61533",
    "city": "Glasford"
  },
  {
    "zip": "61536",
    "city": "Hanna City"
  },
  {
    "zip": "61540",
    "city": "Lacon"
  },
  {
    "zip": "61544",
    "city": "London Mills"
  },
  {
    "zip": "61545",
    "city": "Lowpoint"
  },
  {
    "zip": "61546",
    "city": "Manito"
  },
  {
    "zip": "61559",
    "city": "Princeville"
  },
  {
    "zip": "61565",
    "city": "Sparland"
  },
  {
    "zip": "61569",
    "city": "Trivoli"
  },
  {
    "zip": "61572",
    "city": "Yates City"
  },
  {
    "zip": "61602",
    "city": "Peoria"
  },
  {
    "zip": "61610",
    "city": "Creve Coeur"
  },
  {
    "zip": "61611",
    "city": "East Peoria"
  },
  {
    "zip": "61616",
    "city": "Peoria Heights"
  },
  {
    "zip": "61720",
    "city": "Anchor"
  },
  {
    "zip": "61721",
    "city": "Armington"
  },
  {
    "zip": "61722",
    "city": "Arrowsmith"
  },
  {
    "zip": "61724",
    "city": "Bellflower"
  },
  {
    "zip": "61725",
    "city": "Carlock"
  },
  {
    "zip": "61726",
    "city": "Chenoa"
  },
  {
    "zip": "61729",
    "city": "Congerville"
  },
  {
    "zip": "61731",
    "city": "Cropsey"
  },
  {
    "zip": "61736",
    "city": "Downs"
  },
  {
    "zip": "61738",
    "city": "El Paso"
  },
  {
    "zip": "61739",
    "city": "Fairbury"
  },
  {
    "zip": "61740",
    "city": "Flanagan"
  },
  {
    "zip": "61741",
    "city": "Forrest"
  },
  {
    "zip": "61742",
    "city": "Goodfield"
  },
  {
    "zip": "61743",
    "city": "Graymont"
  },
  {
    "zip": "61744",
    "city": "Gridley"
  },
  {
    "zip": "61745",
    "city": "Heyworth"
  },
  {
    "zip": "61749",
    "city": "Kenney"
  },
  {
    "zip": "61755",
    "city": "Mackinaw"
  },
  {
    "zip": "61756",
    "city": "Maroa"
  },
  {
    "zip": "61759",
    "city": "Minier"
  },
  {
    "zip": "61760",
    "city": "Minonk"
  },
  {
    "zip": "61761",
    "city": "Normal"
  },
  {
    "zip": "61769",
    "city": "Saunemin"
  },
  {
    "zip": "61770",
    "city": "Saybrook"
  },
  {
    "zip": "61771",
    "city": "Secor"
  },
  {
    "zip": "61775",
    "city": "Strawn"
  },
  {
    "zip": "61777",
    "city": "Wapella"
  },
  {
    "zip": "61811",
    "city": "Alvin"
  },
  {
    "zip": "61813",
    "city": "Bement"
  },
  {
    "zip": "61816",
    "city": "Broadlands"
  },
  {
    "zip": "61817",
    "city": "Catlin"
  },
  {
    "zip": "61820",
    "city": "Champaign"
  },
  {
    "zip": "61831",
    "city": "Collison"
  },
  {
    "zip": "61839",
    "city": "De Land"
  },
  {
    "zip": "61840",
    "city": "Dewey"
  },
  {
    "zip": "61842",
    "city": "Farmer City"
  },
  {
    "zip": "61844",
    "city": "Fithian"
  },
  {
    "zip": "61845",
    "city": "Foosland"
  },
  {
    "zip": "61851",
    "city": "Ivesdale"
  },
  {
    "zip": "61852",
    "city": "Longview"
  },
  {
    "zip": "61853",
    "city": "Mahomet"
  },
  {
    "zip": "61855",
    "city": "Milmine"
  },
  {
    "zip": "61863",
    "city": "Pesotum"
  },
  {
    "zip": "61866",
    "city": "Rantoul"
  },
  {
    "zip": "61870",
    "city": "Ridge Farm"
  },
  {
    "zip": "61872",
    "city": "Sadorus"
  },
  {
    "zip": "61876",
    "city": "Sidell"
  },
  {
    "zip": "61878",
    "city": "Thomasboro"
  },
  {
    "zip": "61880",
    "city": "Tolono"
  },
  {
    "zip": "61884",
    "city": "White Heath"
  },
  {
    "zip": "61912",
    "city": "Ashmore"
  },
  {
    "zip": "61919",
    "city": "Camargo"
  },
  {
    "zip": "61924",
    "city": "Chrisman"
  },
  {
    "zip": "61925",
    "city": "Dalton City"
  },
  {
    "zip": "61928",
    "city": "Gays"
  },
  {
    "zip": "61930",
    "city": "Hindsboro"
  },
  {
    "zip": "61937",
    "city": "Lovington"
  },
  {
    "zip": "61938",
    "city": "Mattoon"
  },
  {
    "zip": "61940",
    "city": "Metcalf"
  },
  {
    "zip": "61942",
    "city": "Newman"
  },
  {
    "zip": "61953",
    "city": "Tuscola"
  },
  {
    "zip": "61956",
    "city": "Villa Grove"
  },
  {
    "zip": "62001",
    "city": "Alhambra"
  },
  {
    "zip": "62006",
    "city": "Batchtown"
  },
  {
    "zip": "62009",
    "city": "Benld"
  },
  {
    "zip": "62010",
    "city": "Bethalto"
  },
  {
    "zip": "62017",
    "city": "Coffeen"
  },
  {
    "zip": "62018",
    "city": "Cottage Hills"
  },
  {
    "zip": "62021",
    "city": "Dorsey"
  },
  {
    "zip": "62022",
    "city": "Dow"
  },
  {
    "zip": "62024",
    "city": "East Alton"
  },
  {
    "zip": "62025",
    "city": "Edwardsville"
  },
  {
    "zip": "62028",
    "city": "Elsah"
  },
  {
    "zip": "62031",
    "city": "Fieldon"
  },
  {
    "zip": "62033",
    "city": "Gillespie"
  },
  {
    "zip": "62034",
    "city": "Glen Carbon"
  },
  {
    "zip": "62035",
    "city": "Godfrey"
  },
  {
    "zip": "62036",
    "city": "Golden Eagle"
  },
  {
    "zip": "62040",
    "city": "Granite City"
  },
  {
    "zip": "62050",
    "city": "Hillview"
  },
  {
    "zip": "62052",
    "city": "Jerseyville"
  },
  {
    "zip": "62053",
    "city": "Kampsville"
  },
  {
    "zip": "62061",
    "city": "Marine"
  },
  {
    "zip": "62065",
    "city": "Michael"
  },
  {
    "zip": "62067",
    "city": "Moro"
  },
  {
    "zip": "62070",
    "city": "Mozier"
  },
  {
    "zip": "62074",
    "city": "New Douglas"
  },
  {
    "zip": "62079",
    "city": "Piasa"
  },
  {
    "zip": "62082",
    "city": "Roodhouse"
  },
  {
    "zip": "62083",
    "city": "Rosamond"
  },
  {
    "zip": "62086",
    "city": "Sorento"
  },
  {
    "zip": "62087",
    "city": "South Roxana"
  },
  {
    "zip": "62091",
    "city": "Walshville"
  },
  {
    "zip": "62094",
    "city": "Witt"
  },
  {
    "zip": "62095",
    "city": "Wood River"
  },
  {
    "zip": "62201",
    "city": "East Saint Louis"
  },
  {
    "zip": "62208",
    "city": "Fairview Heights"
  },
  {
    "zip": "62214",
    "city": "Addieville"
  },
  {
    "zip": "62215",
    "city": "Albers"
  },
  {
    "zip": "62216",
    "city": "Aviston"
  },
  {
    "zip": "62218",
    "city": "Bartelso"
  },
  {
    "zip": "62225",
    "city": "Scott Air Force Base"
  },
  {
    "zip": "62230",
    "city": "Breese"
  },
  {
    "zip": "62231",
    "city": "Carlyle"
  },
  {
    "zip": "62232",
    "city": "Caseyville"
  },
  {
    "zip": "62237",
    "city": "Coulterville"
  },
  {
    "zip": "62239",
    "city": "Dupo"
  },
  {
    "zip": "62240",
    "city": "East Carondelet"
  },
  {
    "zip": "62241",
    "city": "Ellis Grove"
  },
  {
    "zip": "62244",
    "city": "Fults"
  },
  {
    "zip": "62253",
    "city": "Keyesport"
  },
  {
    "zip": "62255",
    "city": "Lenzburg"
  },
  {
    "zip": "62257",
    "city": "Marissa"
  },
  {
    "zip": "62258",
    "city": "Mascoutah"
  },
  {
    "zip": "62260",
    "city": "Millstadt"
  },
  {
    "zip": "62262",
    "city": "Mulberry Grove"
  },
  {
    "zip": "62264",
    "city": "New Athens"
  },
  {
    "zip": "62265",
    "city": "New Baden"
  },
  {
    "zip": "62269",
    "city": "O Fallon"
  },
  {
    "zip": "62271",
    "city": "Okawville"
  },
  {
    "zip": "62272",
    "city": "Percy"
  },
  {
    "zip": "62274",
    "city": "Pinckneyville"
  },
  {
    "zip": "62277",
    "city": "Prairie Du Rocher"
  },
  {
    "zip": "62278",
    "city": "Red Bud"
  },
  {
    "zip": "62281",
    "city": "Saint Jacob"
  },
  {
    "zip": "62284",
    "city": "Smithboro"
  },
  {
    "zip": "62288",
    "city": "Steeleville"
  },
  {
    "zip": "62295",
    "city": "Valmeyer"
  },
  {
    "zip": "62297",
    "city": "Walsh"
  },
  {
    "zip": "62312",
    "city": "Barry"
  },
  {
    "zip": "62313",
    "city": "Basco"
  },
  {
    "zip": "62314",
    "city": "Baylis"
  },
  {
    "zip": "62316",
    "city": "Bowen"
  },
  {
    "zip": "62320",
    "city": "Camp Point"
  },
  {
    "zip": "62325",
    "city": "Coatsburg"
  },
  {
    "zip": "62330",
    "city": "Dallas City"
  },
  {
    "zip": "62340",
    "city": "Griggsville"
  },
  {
    "zip": "62346",
    "city": "La Prairie"
  },
  {
    "zip": "62349",
    "city": "Loraine"
  },
  {
    "zip": "62359",
    "city": "Paloma"
  },
  {
    "zip": "62360",
    "city": "Payson"
  },
  {
    "zip": "62373",
    "city": "Sutter"
  },
  {
    "zip": "62374",
    "city": "Tennessee"
  },
  {
    "zip": "62375",
    "city": "Timewell"
  },
  {
    "zip": "62376",
    "city": "Ursa"
  },
  {
    "zip": "62414",
    "city": "Beecher City"
  },
  {
    "zip": "62422",
    "city": "Cowden"
  },
  {
    "zip": "62424",
    "city": "Dieterich"
  },
  {
    "zip": "62432",
    "city": "Hidalgo"
  },
  {
    "zip": "62433",
    "city": "Hutsonville"
  },
  {
    "zip": "62434",
    "city": "Ingraham"
  },
  {
    "zip": "62440",
    "city": "Lerna"
  },
  {
    "zip": "62444",
    "city": "Mode"
  },
  {
    "zip": "62446",
    "city": "Mount Erie"
  },
  {
    "zip": "62447",
    "city": "Neoga"
  },
  {
    "zip": "62449",
    "city": "Oblong"
  },
  {
    "zip": "62458",
    "city": "Saint Elmo"
  },
  {
    "zip": "62460",
    "city": "Saint Francisville"
  },
  {
    "zip": "62461",
    "city": "Shumway"
  },
  {
    "zip": "62463",
    "city": "Stewardson"
  },
  {
    "zip": "62467",
    "city": "Teutopolis"
  },
  {
    "zip": "62469",
    "city": "Trilla"
  },
  {
    "zip": "62478",
    "city": "West York"
  },
  {
    "zip": "62501",
    "city": "Argenta"
  },
  {
    "zip": "62510",
    "city": "Assumption"
  },
  {
    "zip": "62512",
    "city": "Beason"
  },
  {
    "zip": "62513",
    "city": "Blue Mound"
  },
  {
    "zip": "62517",
    "city": "Bulpitt"
  },
  {
    "zip": "62518",
    "city": "Chestnut"
  },
  {
    "zip": "62530",
    "city": "Divernon"
  },
  {
    "zip": "62536",
    "city": "Glenarm"
  },
  {
    "zip": "62538",
    "city": "Harvel"
  },
  {
    "zip": "62539",
    "city": "Illiopolis"
  },
  {
    "zip": "62548",
    "city": "Mount Pulaski"
  },
  {
    "zip": "62549",
    "city": "Mt Zion"
  },
  {
    "zip": "62550",
    "city": "Moweaqua"
  },
  {
    "zip": "62553",
    "city": "Oconee"
  },
  {
    "zip": "62554",
    "city": "Oreana"
  },
  {
    "zip": "62555",
    "city": "Owaneco"
  },
  {
    "zip": "62557",
    "city": "Pana"
  },
  {
    "zip": "62558",
    "city": "Pawnee"
  },
  {
    "zip": "62568",
    "city": "Taylorville"
  },
  {
    "zip": "62571",
    "city": "Tower Hill"
  },
  {
    "zip": "62572",
    "city": "Waggoner"
  },
  {
    "zip": "62611",
    "city": "Arenzville"
  },
  {
    "zip": "62618",
    "city": "Beardstown"
  },
  {
    "zip": "62621",
    "city": "Bluffs"
  },
  {
    "zip": "62625",
    "city": "Cantrall"
  },
  {
    "zip": "62626",
    "city": "Carlinville"
  },
  {
    "zip": "62627",
    "city": "Chandlerville"
  },
  {
    "zip": "62635",
    "city": "Emden"
  },
  {
    "zip": "62642",
    "city": "Greenview"
  },
  {
    "zip": "62643",
    "city": "Hartsburg"
  },
  {
    "zip": "62649",
    "city": "Hettick"
  },
  {
    "zip": "62655",
    "city": "Kilbourne"
  },
  {
    "zip": "62659",
    "city": "Lincolns New Salem"
  },
  {
    "zip": "62661",
    "city": "Loami"
  },
  {
    "zip": "62665",
    "city": "Meredosia"
  },
  {
    "zip": "62667",
    "city": "Modesto"
  },
  {
    "zip": "62673",
    "city": "Oakford"
  },
  {
    "zip": "62677",
    "city": "Pleasant Plains"
  },
  {
    "zip": "62682",
    "city": "San Jose"
  },
  {
    "zip": "62688",
    "city": "Tallula"
  },
  {
    "zip": "62690",
    "city": "Virden"
  },
  {
    "zip": "62801",
    "city": "Centralia"
  },
  {
    "zip": "62803",
    "city": "Hoyleton"
  },
  {
    "zip": "62809",
    "city": "Barnhill"
  },
  {
    "zip": "62810",
    "city": "Belle Rive"
  },
  {
    "zip": "62814",
    "city": "Bluford"
  },
  {
    "zip": "62815",
    "city": "Bone Gap"
  },
  {
    "zip": "62816",
    "city": "Bonnie"
  },
  {
    "zip": "62817",
    "city": "Broughton"
  },
  {
    "zip": "62818",
    "city": "Browns"
  },
  {
    "zip": "62820",
    "city": "Burnt Prairie"
  },
  {
    "zip": "62821",
    "city": "Carmi"
  },
  {
    "zip": "62822",
    "city": "Christopher"
  },
  {
    "zip": "62823",
    "city": "Cisne"
  },
  {
    "zip": "62830",
    "city": "Dix"
  },
  {
    "zip": "62832",
    "city": "Du Quoin"
  },
  {
    "zip": "62833",
    "city": "Ellery"
  },
  {
    "zip": "62838",
    "city": "Farina"
  },
  {
    "zip": "62842",
    "city": "Geff"
  },
  {
    "zip": "62843",
    "city": "Golden Gate"
  },
  {
    "zip": "62844",
    "city": "Grayville"
  },
  {
    "zip": "62846",
    "city": "Ina"
  },
  {
    "zip": "62851",
    "city": "Keenes"
  },
  {
    "zip": "62853",
    "city": "Kell"
  },
  {
    "zip": "62854",
    "city": "Kinmundy"
  },
  {
    "zip": "62859",
    "city": "Mc Leansboro"
  },
  {
    "zip": "62862",
    "city": "Mill Shoals"
  },
  {
    "zip": "62865",
    "city": "Mulkeytown"
  },
  {
    "zip": "62868",
    "city": "Noble"
  },
  {
    "zip": "62869",
    "city": "Norris City"
  },
  {
    "zip": "62872",
    "city": "Opdyke"
  },
  {
    "zip": "62877",
    "city": "Richview"
  },
  {
    "zip": "62878",
    "city": "Rinard"
  },
  {
    "zip": "62882",
    "city": "Sandoval"
  },
  {
    "zip": "62883",
    "city": "Scheller"
  },
  {
    "zip": "62884",
    "city": "Sesser"
  },
  {
    "zip": "62885",
    "city": "Shobonier"
  },
  {
    "zip": "62887",
    "city": "Springerton"
  },
  {
    "zip": "62888",
    "city": "Tamaroa"
  },
  {
    "zip": "62889",
    "city": "Texico"
  },
  {
    "zip": "62893",
    "city": "Walnut Hill"
  },
  {
    "zip": "62894",
    "city": "Waltonville"
  },
  {
    "zip": "62895",
    "city": "Wayne City"
  },
  {
    "zip": "62896",
    "city": "West Frankfort"
  },
  {
    "zip": "62897",
    "city": "Whittington"
  },
  {
    "zip": "62905",
    "city": "Alto Pass"
  },
  {
    "zip": "62908",
    "city": "Belknap"
  },
  {
    "zip": "62910",
    "city": "Brookport"
  },
  {
    "zip": "62912",
    "city": "Buncombe"
  },
  {
    "zip": "62916",
    "city": "Campbell Hill"
  },
  {
    "zip": "62917",
    "city": "Carrier Mills"
  },
  {
    "zip": "62918",
    "city": "Carterville"
  },
  {
    "zip": "62919",
    "city": "Cave In Rock"
  },
  {
    "zip": "62920",
    "city": "Cobden"
  },
  {
    "zip": "62922",
    "city": "Creal Springs"
  },
  {
    "zip": "62923",
    "city": "Cypress"
  },
  {
    "zip": "62926",
    "city": "Dongola"
  },
  {
    "zip": "62932",
    "city": "Elkville"
  },
  {
    "zip": "62933",
    "city": "Energy"
  },
  {
    "zip": "62935",
    "city": "Galatia"
  },
  {
    "zip": "62938",
    "city": "Golconda"
  },
  {
    "zip": "62939",
    "city": "Goreville"
  },
  {
    "zip": "62941",
    "city": "Grand Chain"
  },
  {
    "zip": "62942",
    "city": "Grand Tower"
  },
  {
    "zip": "62947",
    "city": "Herod"
  },
  {
    "zip": "62948",
    "city": "Herrin"
  },
  {
    "zip": "62950",
    "city": "Jacob"
  },
  {
    "zip": "62951",
    "city": "Johnston City"
  },
  {
    "zip": "62954",
    "city": "Junction"
  },
  {
    "zip": "62956",
    "city": "Karnak"
  },
  {
    "zip": "62958",
    "city": "Makanda"
  },
  {
    "zip": "62960",
    "city": "Metropolis"
  },
  {
    "zip": "62962",
    "city": "Miller City"
  },
  {
    "zip": "62964",
    "city": "Mounds"
  },
  {
    "zip": "62966",
    "city": "Murphysboro"
  },
  {
    "zip": "62967",
    "city": "New Burnside"
  },
  {
    "zip": "62970",
    "city": "Olmsted"
  },
  {
    "zip": "62982",
    "city": "Rosiclare"
  },
  {
    "zip": "62984",
    "city": "Shawneetown"
  },
  {
    "zip": "62985",
    "city": "Simpson"
  },
  {
    "zip": "62987",
    "city": "Stonefort"
  },
  {
    "zip": "62988",
    "city": "Tamms"
  },
  {
    "zip": "62990",
    "city": "Thebes"
  },
  {
    "zip": "62992",
    "city": "Ullin"
  },
  {
    "zip": "62996",
    "city": "Villa Ridge"
  },
  {
    "zip": "62998",
    "city": "Wolf Lake"
  },
  {
    "zip": "62999",
    "city": "Zeigler"
  },
  {
    "zip": "63011",
    "city": "Ballwin"
  },
  {
    "zip": "63012",
    "city": "Barnhart"
  },
  {
    "zip": "63014",
    "city": "Berger"
  },
  {
    "zip": "63019",
    "city": "Crystal City"
  },
  {
    "zip": "63023",
    "city": "Dittmer"
  },
  {
    "zip": "63028",
    "city": "Festus"
  },
  {
    "zip": "63031",
    "city": "Florissant"
  },
  {
    "zip": "63036",
    "city": "French Village"
  },
  {
    "zip": "63037",
    "city": "Gerald"
  },
  {
    "zip": "63039",
    "city": "Gray Summit"
  },
  {
    "zip": "63041",
    "city": "Grubville"
  },
  {
    "zip": "63042",
    "city": "Hazelwood"
  },
  {
    "zip": "63043",
    "city": "Maryland Heights"
  },
  {
    "zip": "63045",
    "city": "Earth City"
  },
  {
    "zip": "63048",
    "city": "Herculaneum"
  },
  {
    "zip": "63049",
    "city": "High Ridge"
  },
  {
    "zip": "63051",
    "city": "House Springs"
  },
  {
    "zip": "63055",
    "city": "Labadie"
  },
  {
    "zip": "63060",
    "city": "Lonedell"
  },
  {
    "zip": "63061",
    "city": "Luebbering"
  },
  {
    "zip": "63069",
    "city": "Pacific"
  },
  {
    "zip": "63070",
    "city": "Pevely"
  },
  {
    "zip": "63071",
    "city": "Richwoods"
  },
  {
    "zip": "63072",
    "city": "Robertsville"
  },
  {
    "zip": "63074",
    "city": "Saint Ann"
  },
  {
    "zip": "63087",
    "city": "Valles Mines"
  },
  {
    "zip": "63088",
    "city": "Valley Park"
  },
  {
    "zip": "63330",
    "city": "Annada"
  },
  {
    "zip": "63339",
    "city": "Curryville"
  },
  {
    "zip": "63343",
    "city": "Elsberry"
  },
  {
    "zip": "63345",
    "city": "Farber"
  },
  {
    "zip": "63348",
    "city": "Foristell"
  },
  {
    "zip": "63349",
    "city": "Hawk Point"
  },
  {
    "zip": "63350",
    "city": "High Hill"
  },
  {
    "zip": "63351",
    "city": "Jonesburg"
  },
  {
    "zip": "63352",
    "city": "Laddonia"
  },
  {
    "zip": "63353",
    "city": "Louisiana"
  },
  {
    "zip": "63357",
    "city": "Marthasville"
  },
  {
    "zip": "63361",
    "city": "Montgomery City"
  },
  {
    "zip": "63362",
    "city": "Moscow Mills"
  },
  {
    "zip": "63367",
    "city": "Lake Saint Louis"
  },
  {
    "zip": "63369",
    "city": "Old Monroe"
  },
  {
    "zip": "63373",
    "city": "Portage Des Sioux"
  },
  {
    "zip": "63376",
    "city": "Saint Peters"
  },
  {
    "zip": "63377",
    "city": "Silex"
  },
  {
    "zip": "63385",
    "city": "Wentzville"
  },
  {
    "zip": "63386",
    "city": "West Alton"
  },
  {
    "zip": "63390",
    "city": "Wright City"
  },
  {
    "zip": "63431",
    "city": "Anabel"
  },
  {
    "zip": "63432",
    "city": "Arbela"
  },
  {
    "zip": "63443",
    "city": "Hunnewell"
  },
  {
    "zip": "63445",
    "city": "Kahoka"
  },
  {
    "zip": "63446",
    "city": "Knox City"
  },
  {
    "zip": "63450",
    "city": "Lentner"
  },
  {
    "zip": "63468",
    "city": "Shelbina"
  },
  {
    "zip": "63474",
    "city": "Wyaconda"
  },
  {
    "zip": "63501",
    "city": "Kirksville"
  },
  {
    "zip": "63531",
    "city": "Baring"
  },
  {
    "zip": "63532",
    "city": "Bevier"
  },
  {
    "zip": "63533",
    "city": "Brashear"
  },
  {
    "zip": "63535",
    "city": "Coatsville"
  },
  {
    "zip": "63537",
    "city": "Edina"
  },
  {
    "zip": "63540",
    "city": "Gibbs"
  },
  {
    "zip": "63543",
    "city": "Gorin"
  },
  {
    "zip": "63544",
    "city": "Green Castle"
  },
  {
    "zip": "63545",
    "city": "Green City"
  },
  {
    "zip": "63546",
    "city": "Greentop"
  },
  {
    "zip": "63547",
    "city": "Hurdland"
  },
  {
    "zip": "63558",
    "city": "New Cambria"
  },
  {
    "zip": "63559",
    "city": "Novinger"
  },
  {
    "zip": "63561",
    "city": "Queen City"
  },
  {
    "zip": "63566",
    "city": "Winigan"
  },
  {
    "zip": "63601",
    "city": "Park Hills"
  },
  {
    "zip": "63626",
    "city": "Blackwell"
  },
  {
    "zip": "63627",
    "city": "Bloomsdale"
  },
  {
    "zip": "63628",
    "city": "Bonne Terre"
  },
  {
    "zip": "63629",
    "city": "Bunker"
  },
  {
    "zip": "63630",
    "city": "Cadet"
  },
  {
    "zip": "63636",
    "city": "Des Arc"
  },
  {
    "zip": "63637",
    "city": "Doe Run"
  },
  {
    "zip": "63653",
    "city": "Leadwood"
  },
  {
    "zip": "63655",
    "city": "Marquand"
  },
  {
    "zip": "63656",
    "city": "Middle Brook"
  },
  {
    "zip": "63670",
    "city": "Sainte Genevieve"
  },
  {
    "zip": "63673",
    "city": "Saint Mary"
  },
  {
    "zip": "63701",
    "city": "Cape Girardeau"
  },
  {
    "zip": "63732",
    "city": "Altenburg"
  },
  {
    "zip": "63735",
    "city": "Bell City"
  },
  {
    "zip": "63739",
    "city": "Burfordville"
  },
  {
    "zip": "63743",
    "city": "Daisy"
  },
  {
    "zip": "63747",
    "city": "Friedheim"
  },
  {
    "zip": "63748",
    "city": "Frohna"
  },
  {
    "zip": "63750",
    "city": "Gipsy"
  },
  {
    "zip": "63751",
    "city": "Glenallen"
  },
  {
    "zip": "63763",
    "city": "Mc Gee"
  },
  {
    "zip": "63770",
    "city": "Old Appleton"
  },
  {
    "zip": "63780",
    "city": "Scott City"
  },
  {
    "zip": "63781",
    "city": "Sedgewickville"
  },
  {
    "zip": "63782",
    "city": "Sturdivant"
  },
  {
    "zip": "63787",
    "city": "Zalma"
  },
  {
    "zip": "63801",
    "city": "Sikeston"
  },
  {
    "zip": "63821",
    "city": "Arbyrd"
  },
  {
    "zip": "63822",
    "city": "Bernie"
  },
  {
    "zip": "63823",
    "city": "Bertrand"
  },
  {
    "zip": "63827",
    "city": "Bragg City"
  },
  {
    "zip": "63830",
    "city": "Caruthersville"
  },
  {
    "zip": "63833",
    "city": "Catron"
  },
  {
    "zip": "63845",
    "city": "East Prairie"
  },
  {
    "zip": "63848",
    "city": "Gideon"
  },
  {
    "zip": "63849",
    "city": "Gobler"
  },
  {
    "zip": "63855",
    "city": "Hornersville"
  },
  {
    "zip": "63857",
    "city": "Kennett"
  },
  {
    "zip": "63862",
    "city": "Lilbourn"
  },
  {
    "zip": "63869",
    "city": "New Madrid"
  },
  {
    "zip": "63876",
    "city": "Senath"
  },
  {
    "zip": "63879",
    "city": "Wardell"
  },
  {
    "zip": "63901",
    "city": "Poplar Bluff"
  },
  {
    "zip": "63931",
    "city": "Briar"
  },
  {
    "zip": "63932",
    "city": "Broseley"
  },
  {
    "zip": "63934",
    "city": "Clubb"
  },
  {
    "zip": "63935",
    "city": "Doniphan"
  },
  {
    "zip": "63937",
    "city": "Ellsinore"
  },
  {
    "zip": "63939",
    "city": "Fairdealing"
  },
  {
    "zip": "63940",
    "city": "Fisk"
  },
  {
    "zip": "63942",
    "city": "Gatewood"
  },
  {
    "zip": "63945",
    "city": "Harviell"
  },
  {
    "zip": "63951",
    "city": "Lowndes"
  },
  {
    "zip": "63954",
    "city": "Neelyville"
  },
  {
    "zip": "63955",
    "city": "Oxly"
  },
  {
    "zip": "63960",
    "city": "Puxico"
  },
  {
    "zip": "63961",
    "city": "Qulin"
  },
  {
    "zip": "63963",
    "city": "Shook"
  },
  {
    "zip": "63964",
    "city": "Silva"
  },
  {
    "zip": "63966",
    "city": "Wappapello"
  },
  {
    "zip": "64011",
    "city": "Bates City"
  },
  {
    "zip": "64018",
    "city": "Camden Point"
  },
  {
    "zip": "64019",
    "city": "Centerview"
  },
  {
    "zip": "64020",
    "city": "Concordia"
  },
  {
    "zip": "64021",
    "city": "Corder"
  },
  {
    "zip": "64024",
    "city": "Excelsior Springs"
  },
  {
    "zip": "64029",
    "city": "Grain Valley"
  },
  {
    "zip": "64037",
    "city": "Higginsville"
  },
  {
    "zip": "64060",
    "city": "Kearney"
  },
  {
    "zip": "64062",
    "city": "Lawson"
  },
  {
    "zip": "64063",
    "city": "Lees Summit"
  },
  {
    "zip": "64070",
    "city": "Lone Jack"
  },
  {
    "zip": "64071",
    "city": "Mayview"
  },
  {
    "zip": "64077",
    "city": "Orrick"
  },
  {
    "zip": "64078",
    "city": "Peculiar"
  },
  {
    "zip": "64079",
    "city": "Platte City"
  },
  {
    "zip": "64083",
    "city": "Raymore"
  },
  {
    "zip": "64084",
    "city": "Rayville"
  },
  {
    "zip": "64101",
    "city": "Kansas City"
  },
  {
    "zip": "64421",
    "city": "Amazonia"
  },
  {
    "zip": "64423",
    "city": "Barnard"
  },
  {
    "zip": "64426",
    "city": "Blythedale"
  },
  {
    "zip": "64427",
    "city": "Bolckow"
  },
  {
    "zip": "64428",
    "city": "Burlington Junction"
  },
  {
    "zip": "64431",
    "city": "Clearmont"
  },
  {
    "zip": "64433",
    "city": "Conception"
  },
  {
    "zip": "64434",
    "city": "Conception Junction"
  },
  {
    "zip": "64437",
    "city": "Craig"
  },
  {
    "zip": "64448",
    "city": "Faucett"
  },
  {
    "zip": "64453",
    "city": "Gentry"
  },
  {
    "zip": "64454",
    "city": "Gower"
  },
  {
    "zip": "64456",
    "city": "Grant City"
  },
  {
    "zip": "64463",
    "city": "King City"
  },
  {
    "zip": "64465",
    "city": "Lathrop"
  },
  {
    "zip": "64474",
    "city": "Osborn"
  },
  {
    "zip": "64476",
    "city": "Pickering"
  },
  {
    "zip": "64477",
    "city": "Plattsburg"
  },
  {
    "zip": "64479",
    "city": "Ravenwood"
  },
  {
    "zip": "64480",
    "city": "Rea"
  },
  {
    "zip": "64482",
    "city": "Rock Port"
  },
  {
    "zip": "64487",
    "city": "Skidmore"
  },
  {
    "zip": "64489",
    "city": "Stanberry"
  },
  {
    "zip": "64491",
    "city": "Tarkio"
  },
  {
    "zip": "64493",
    "city": "Turney"
  },
  {
    "zip": "64497",
    "city": "Weatherby"
  },
  {
    "zip": "64622",
    "city": "Bogard"
  },
  {
    "zip": "64623",
    "city": "Bosworth"
  },
  {
    "zip": "64624",
    "city": "Braymer"
  },
  {
    "zip": "64631",
    "city": "Bucklin"
  },
  {
    "zip": "64632",
    "city": "Cainsville"
  },
  {
    "zip": "64636",
    "city": "Coffey"
  },
  {
    "zip": "64637",
    "city": "Cowgill"
  },
  {
    "zip": "64638",
    "city": "Dawn"
  },
  {
    "zip": "64642",
    "city": "Gilman City"
  },
  {
    "zip": "64646",
    "city": "Humphreys"
  },
  {
    "zip": "64647",
    "city": "Jameson"
  },
  {
    "zip": "64648",
    "city": "Jamesport"
  },
  {
    "zip": "64649",
    "city": "Kidder"
  },
  {
    "zip": "64651",
    "city": "Laclede"
  },
  {
    "zip": "64652",
    "city": "Laredo"
  },
  {
    "zip": "64653",
    "city": "Linneus"
  },
  {
    "zip": "64657",
    "city": "Mc Fall"
  },
  {
    "zip": "64658",
    "city": "Marceline"
  },
  {
    "zip": "64668",
    "city": "Norborne"
  },
  {
    "zip": "64670",
    "city": "Pattonsburg"
  },
  {
    "zip": "64672",
    "city": "Powersville"
  },
  {
    "zip": "64674",
    "city": "Purdin"
  },
  {
    "zip": "64676",
    "city": "Rothville"
  },
  {
    "zip": "64679",
    "city": "Spickard"
  },
  {
    "zip": "64682",
    "city": "Tina"
  },
  {
    "zip": "64722",
    "city": "Amoret"
  },
  {
    "zip": "64724",
    "city": "Appleton City"
  },
  {
    "zip": "64725",
    "city": "Archie"
  },
  {
    "zip": "64728",
    "city": "Bronaugh"
  },
  {
    "zip": "64733",
    "city": "Chilhowee"
  },
  {
    "zip": "64740",
    "city": "Deepwater"
  },
  {
    "zip": "64742",
    "city": "Drexel"
  },
  {
    "zip": "64744",
    "city": "El Dorado Springs"
  },
  {
    "zip": "64748",
    "city": "Golden City"
  },
  {
    "zip": "64756",
    "city": "Jerico Springs"
  },
  {
    "zip": "64761",
    "city": "Leeton"
  },
  {
    "zip": "64762",
    "city": "Liberal"
  },
  {
    "zip": "64763",
    "city": "Lowry City"
  },
  {
    "zip": "64769",
    "city": "Mindenmines"
  },
  {
    "zip": "64778",
    "city": "Richards"
  },
  {
    "zip": "64779",
    "city": "Rich Hill"
  },
  {
    "zip": "64783",
    "city": "Schell City"
  },
  {
    "zip": "64788",
    "city": "Urich"
  },
  {
    "zip": "64834",
    "city": "Carl Junction"
  },
  {
    "zip": "64847",
    "city": "Lanagan"
  },
  {
    "zip": "64848",
    "city": "La Russell"
  },
  {
    "zip": "64854",
    "city": "Noel"
  },
  {
    "zip": "64855",
    "city": "Oronogo"
  },
  {
    "zip": "64859",
    "city": "Reeds"
  },
  {
    "zip": "64861",
    "city": "Rocky Comfort"
  },
  {
    "zip": "64862",
    "city": "Sarcoxie"
  },
  {
    "zip": "64863",
    "city": "South West City"
  },
  {
    "zip": "64866",
    "city": "Stark City"
  },
  {
    "zip": "64870",
    "city": "Webb City"
  },
  {
    "zip": "65011",
    "city": "Barnett"
  },
  {
    "zip": "65016",
    "city": "Bonnots Mill"
  },
  {
    "zip": "65017",
    "city": "Brumley"
  },
  {
    "zip": "65020",
    "city": "Camdenton"
  },
  {
    "zip": "65024",
    "city": "Chamois"
  },
  {
    "zip": "65032",
    "city": "Eugene"
  },
  {
    "zip": "65037",
    "city": "Gravois Mills"
  },
  {
    "zip": "65040",
    "city": "Henley"
  },
  {
    "zip": "65041",
    "city": "Hermann"
  },
  {
    "zip": "65043",
    "city": "Holts Summit"
  },
  {
    "zip": "65047",
    "city": "Kaiser"
  },
  {
    "zip": "65048",
    "city": "Koeltztown"
  },
  {
    "zip": "65049",
    "city": "Lake Ozark"
  },
  {
    "zip": "65052",
    "city": "Linn Creek"
  },
  {
    "zip": "65053",
    "city": "Lohman"
  },
  {
    "zip": "65054",
    "city": "Loose Creek"
  },
  {
    "zip": "65058",
    "city": "Meta"
  },
  {
    "zip": "65059",
    "city": "Mokane"
  },
  {
    "zip": "65065",
    "city": "Osage Beach"
  },
  {
    "zip": "65068",
    "city": "Prairie Home"
  },
  {
    "zip": "65069",
    "city": "Rhineland"
  },
  {
    "zip": "65075",
    "city": "Saint Elizabeth"
  },
  {
    "zip": "65077",
    "city": "Steedman"
  },
  {
    "zip": "65078",
    "city": "Stover"
  },
  {
    "zip": "65079",
    "city": "Sunrise Beach"
  },
  {
    "zip": "65080",
    "city": "Tebbetts"
  },
  {
    "zip": "65083",
    "city": "Ulman"
  },
  {
    "zip": "65231",
    "city": "Auxvasse"
  },
  {
    "zip": "65232",
    "city": "Benton City"
  },
  {
    "zip": "65237",
    "city": "Bunceton"
  },
  {
    "zip": "65244",
    "city": "Clifton Hill"
  },
  {
    "zip": "65247",
    "city": "Excello"
  },
  {
    "zip": "65255",
    "city": "Hallsville"
  },
  {
    "zip": "65257",
    "city": "Higbee"
  },
  {
    "zip": "65258",
    "city": "Holliday"
  },
  {
    "zip": "65261",
    "city": "Keytesville"
  },
  {
    "zip": "65262",
    "city": "Kingdom City"
  },
  {
    "zip": "65270",
    "city": "Moberly"
  },
  {
    "zip": "65274",
    "city": "New Franklin"
  },
  {
    "zip": "65276",
    "city": "Pilot Grove"
  },
  {
    "zip": "65279",
    "city": "Rocheport"
  },
  {
    "zip": "65280",
    "city": "Rush Hill"
  },
  {
    "zip": "65284",
    "city": "Sturgeon"
  },
  {
    "zip": "65286",
    "city": "Triplett"
  },
  {
    "zip": "65287",
    "city": "Wooldridge"
  },
  {
    "zip": "65305",
    "city": "Whiteman Air Force Base"
  },
  {
    "zip": "65321",
    "city": "Blackburn"
  },
  {
    "zip": "65324",
    "city": "Climax Springs"
  },
  {
    "zip": "65325",
    "city": "Cole Camp"
  },
  {
    "zip": "65330",
    "city": "Gilliam"
  },
  {
    "zip": "65332",
    "city": "Green Ridge"
  },
  {
    "zip": "65333",
    "city": "Houstonia"
  },
  {
    "zip": "65336",
    "city": "Knob Noster"
  },
  {
    "zip": "65337",
    "city": "La Monte"
  },
  {
    "zip": "65339",
    "city": "Malta Bend"
  },
  {
    "zip": "65348",
    "city": "Otterville"
  },
  {
    "zip": "65351",
    "city": "Sweet Springs"
  },
  {
    "zip": "65438",
    "city": "Birch Tree"
  },
  {
    "zip": "65439",
    "city": "Bixby"
  },
  {
    "zip": "65440",
    "city": "Boss"
  },
  {
    "zip": "65443",
    "city": "Brinktown"
  },
  {
    "zip": "65449",
    "city": "Cook Sta"
  },
  {
    "zip": "65452",
    "city": "Crocker"
  },
  {
    "zip": "65457",
    "city": "Devils Elbow"
  },
  {
    "zip": "65461",
    "city": "Duke"
  },
  {
    "zip": "65462",
    "city": "Edgar Springs"
  },
  {
    "zip": "65468",
    "city": "Eunice"
  },
  {
    "zip": "65473",
    "city": "Fort Leonard Wood"
  },
  {
    "zip": "65479",
    "city": "Hartshorn"
  },
  {
    "zip": "65484",
    "city": "Huggins"
  },
  {
    "zip": "65486",
    "city": "Iberia"
  },
  {
    "zip": "65501",
    "city": "Jadwin"
  },
  {
    "zip": "65534",
    "city": "Laquey"
  },
  {
    "zip": "65542",
    "city": "Licking"
  },
  {
    "zip": "65548",
    "city": "Mountain View"
  },
  {
    "zip": "65555",
    "city": "Raymondville"
  },
  {
    "zip": "65557",
    "city": "Roby"
  },
  {
    "zip": "65564",
    "city": "Solo"
  },
  {
    "zip": "65565",
    "city": "Steelville"
  },
  {
    "zip": "65566",
    "city": "Viburnum"
  },
  {
    "zip": "65567",
    "city": "Stoutland"
  },
  {
    "zip": "65570",
    "city": "Success"
  },
  {
    "zip": "65580",
    "city": "Vichy"
  },
  {
    "zip": "65584",
    "city": "Saint Robert"
  },
  {
    "zip": "65590",
    "city": "Long Lane"
  },
  {
    "zip": "65604",
    "city": "Ash Grove"
  },
  {
    "zip": "65611",
    "city": "Blue Eye"
  },
  {
    "zip": "65612",
    "city": "Bois D Arc"
  },
  {
    "zip": "65614",
    "city": "Bradleyville"
  },
  {
    "zip": "65616",
    "city": "Branson"
  },
  {
    "zip": "65618",
    "city": "Brixey"
  },
  {
    "zip": "65620",
    "city": "Bruner"
  },
  {
    "zip": "65624",
    "city": "Cape Fair"
  },
  {
    "zip": "65626",
    "city": "Caulfield"
  },
  {
    "zip": "65627",
    "city": "Cedarcreek"
  },
  {
    "zip": "65630",
    "city": "Chestnutridge"
  },
  {
    "zip": "65631",
    "city": "Clever"
  },
  {
    "zip": "65634",
    "city": "Cross Timbers"
  },
  {
    "zip": "65640",
    "city": "Dunnegan"
  },
  {
    "zip": "65646",
    "city": "Everton"
  },
  {
    "zip": "65648",
    "city": "Fair Grove"
  },
  {
    "zip": "65652",
    "city": "Fordland"
  },
  {
    "zip": "65660",
    "city": "Graff"
  },
  {
    "zip": "65662",
    "city": "Grovespring"
  },
  {
    "zip": "65663",
    "city": "Half Way"
  },
  {
    "zip": "65666",
    "city": "Hardenville"
  },
  {
    "zip": "65669",
    "city": "Highlandville"
  },
  {
    "zip": "65674",
    "city": "Humansville"
  },
  {
    "zip": "65679",
    "city": "Kirbyville"
  },
  {
    "zip": "65680",
    "city": "Kissee Mills"
  },
  {
    "zip": "65681",
    "city": "Lampe"
  },
  {
    "zip": "65686",
    "city": "Kimberling City"
  },
  {
    "zip": "65689",
    "city": "Cabool"
  },
  {
    "zip": "65690",
    "city": "Couch"
  },
  {
    "zip": "65692",
    "city": "Koshkonong"
  },
  {
    "zip": "65701",
    "city": "Mc Clurg"
  },
  {
    "zip": "65705",
    "city": "Marionville"
  },
  {
    "zip": "65708",
    "city": "Monett"
  },
  {
    "zip": "65711",
    "city": "Mountain Grove"
  },
  {
    "zip": "65713",
    "city": "Niangua"
  },
  {
    "zip": "65714",
    "city": "Nixa"
  },
  {
    "zip": "65720",
    "city": "Oldfield"
  },
  {
    "zip": "65723",
    "city": "Pierce City"
  },
  {
    "zip": "65725",
    "city": "Pleasant Hope"
  },
  {
    "zip": "65731",
    "city": "Powersite"
  },
  {
    "zip": "65733",
    "city": "Protem"
  },
  {
    "zip": "65734",
    "city": "Purdy"
  },
  {
    "zip": "65737",
    "city": "Reeds Spring"
  },
  {
    "zip": "65739",
    "city": "Ridgedale"
  },
  {
    "zip": "65740",
    "city": "Rockaway Beach"
  },
  {
    "zip": "65744",
    "city": "Rueter"
  },
  {
    "zip": "65745",
    "city": "Seligman"
  },
  {
    "zip": "65747",
    "city": "Shell Knob"
  },
  {
    "zip": "65752",
    "city": "South Greenfield"
  },
  {
    "zip": "65754",
    "city": "Spokane"
  },
  {
    "zip": "65755",
    "city": "Squires"
  },
  {
    "zip": "65756",
    "city": "Stotts City"
  },
  {
    "zip": "65759",
    "city": "Taneyville"
  },
  {
    "zip": "65761",
    "city": "Theodosia"
  },
  {
    "zip": "65762",
    "city": "Thornfield"
  },
  {
    "zip": "65764",
    "city": "Tunas"
  },
  {
    "zip": "65766",
    "city": "Udall"
  },
  {
    "zip": "65768",
    "city": "Vanzant"
  },
  {
    "zip": "65771",
    "city": "Walnut Shade"
  },
  {
    "zip": "65773",
    "city": "Wasola"
  },
  {
    "zip": "65774",
    "city": "Weaubleau"
  },
  {
    "zip": "65775",
    "city": "West Plains"
  },
  {
    "zip": "65783",
    "city": "Windyville"
  },
  {
    "zip": "65784",
    "city": "Zanoni"
  },
  {
    "zip": "65786",
    "city": "Macks Creek"
  },
  {
    "zip": "65787",
    "city": "Roach"
  },
  {
    "zip": "65788",
    "city": "Peace Valley"
  },
  {
    "zip": "66002",
    "city": "Atchison"
  },
  {
    "zip": "66006",
    "city": "Baldwin City"
  },
  {
    "zip": "66007",
    "city": "Basehor"
  },
  {
    "zip": "66008",
    "city": "Bendena"
  },
  {
    "zip": "66012",
    "city": "Bonner Springs"
  },
  {
    "zip": "66015",
    "city": "Colony"
  },
  {
    "zip": "66025",
    "city": "Eudora"
  },
  {
    "zip": "66027",
    "city": "Fort Leavenworth"
  },
  {
    "zip": "66031",
    "city": "New Century"
  },
  {
    "zip": "66040",
    "city": "Lacygne"
  },
  {
    "zip": "66050",
    "city": "Lecompton"
  },
  {
    "zip": "66054",
    "city": "Mc Louth"
  },
  {
    "zip": "66058",
    "city": "Muscotah"
  },
  {
    "zip": "66061",
    "city": "Olathe"
  },
  {
    "zip": "66064",
    "city": "Osawatomie"
  },
  {
    "zip": "66070",
    "city": "Ozawkie"
  },
  {
    "zip": "66071",
    "city": "Paola"
  },
  {
    "zip": "66075",
    "city": "Pleasanton"
  },
  {
    "zip": "66085",
    "city": "Stilwell"
  },
  {
    "zip": "66086",
    "city": "Tonganoxie"
  },
  {
    "zip": "66090",
    "city": "Wathena"
  },
  {
    "zip": "66091",
    "city": "Welda"
  },
  {
    "zip": "66204",
    "city": "Overland Park"
  },
  {
    "zip": "66206",
    "city": "Leawood"
  },
  {
    "zip": "66208",
    "city": "Prairie Village"
  },
  {
    "zip": "66215",
    "city": "Lenexa"
  },
  {
    "zip": "66250",
    "city": "Shawnee Mission"
  },
  {
    "zip": "66403",
    "city": "Axtell"
  },
  {
    "zip": "66406",
    "city": "Beattie"
  },
  {
    "zip": "66407",
    "city": "Belvue"
  },
  {
    "zip": "66408",
    "city": "Bern"
  },
  {
    "zip": "66409",
    "city": "Berryton"
  },
  {
    "zip": "66411",
    "city": "Blue Rapids"
  },
  {
    "zip": "66413",
    "city": "Burlingame"
  },
  {
    "zip": "66418",
    "city": "Delia"
  },
  {
    "zip": "66423",
    "city": "Eskridge"
  },
  {
    "zip": "66424",
    "city": "Everest"
  },
  {
    "zip": "66428",
    "city": "Goff"
  },
  {
    "zip": "66431",
    "city": "Harveyville"
  },
  {
    "zip": "66432",
    "city": "Havensville"
  },
  {
    "zip": "66440",
    "city": "Hoyt"
  },
  {
    "zip": "66442",
    "city": "Fort Riley"
  },
  {
    "zip": "66449",
    "city": "Leonardville"
  },
  {
    "zip": "66509",
    "city": "Mayetta"
  },
  {
    "zip": "66510",
    "city": "Melvern"
  },
  {
    "zip": "66516",
    "city": "Netawaka"
  },
  {
    "zip": "66518",
    "city": "Oketo"
  },
  {
    "zip": "66520",
    "city": "Olsburg"
  },
  {
    "zip": "66521",
    "city": "Onaga"
  },
  {
    "zip": "66523",
    "city": "Osage City"
  },
  {
    "zip": "66524",
    "city": "Overbrook"
  },
  {
    "zip": "66526",
    "city": "Paxico"
  },
  {
    "zip": "66527",
    "city": "Powhattan"
  },
  {
    "zip": "66528",
    "city": "Quenemo"
  },
  {
    "zip": "66531",
    "city": "Riley"
  },
  {
    "zip": "66534",
    "city": "Sabetha"
  },
  {
    "zip": "66547",
    "city": "Wamego"
  },
  {
    "zip": "66701",
    "city": "Fort Scott"
  },
  {
    "zip": "66712",
    "city": "Arma"
  },
  {
    "zip": "66713",
    "city": "Baxter Springs"
  },
  {
    "zip": "66720",
    "city": "Chanute"
  },
  {
    "zip": "66732",
    "city": "Elsmore"
  },
  {
    "zip": "66734",
    "city": "Farlington"
  },
  {
    "zip": "66746",
    "city": "Hepler"
  },
  {
    "zip": "66753",
    "city": "Mc Cune"
  },
  {
    "zip": "66757",
    "city": "Neodesha"
  },
  {
    "zip": "66758",
    "city": "Neosho Falls"
  },
  {
    "zip": "66772",
    "city": "Savonburg"
  },
  {
    "zip": "66773",
    "city": "Scammon"
  },
  {
    "zip": "66775",
    "city": "Stark"
  },
  {
    "zip": "66778",
    "city": "Treece"
  },
  {
    "zip": "66783",
    "city": "Yates Center"
  },
  {
    "zip": "66830",
    "city": "Admire"
  },
  {
    "zip": "66838",
    "city": "Burdick"
  },
  {
    "zip": "66842",
    "city": "Cassoday"
  },
  {
    "zip": "66843",
    "city": "Cedar Point"
  },
  {
    "zip": "66845",
    "city": "Cottonwood Falls"
  },
  {
    "zip": "66846",
    "city": "Council Grove"
  },
  {
    "zip": "66850",
    "city": "Elmdale"
  },
  {
    "zip": "66856",
    "city": "Lebo"
  },
  {
    "zip": "66859",
    "city": "Lost Springs"
  },
  {
    "zip": "66862",
    "city": "Matfield Green"
  },
  {
    "zip": "66864",
    "city": "Neosho Rapids"
  },
  {
    "zip": "66865",
    "city": "Olpe"
  },
  {
    "zip": "66869",
    "city": "Strong City"
  },
  {
    "zip": "66872",
    "city": "White City"
  },
  {
    "zip": "66873",
    "city": "Wilsey"
  },
  {
    "zip": "66930",
    "city": "Agenda"
  },
  {
    "zip": "66933",
    "city": "Barnes"
  },
  {
    "zip": "66941",
    "city": "Esbon"
  },
  {
    "zip": "66942",
    "city": "Formoso"
  },
  {
    "zip": "66946",
    "city": "Hollenberg"
  },
  {
    "zip": "66955",
    "city": "Mahaska"
  },
  {
    "zip": "66958",
    "city": "Morrowville"
  },
  {
    "zip": "66959",
    "city": "Munden"
  },
  {
    "zip": "66960",
    "city": "Narka"
  },
  {
    "zip": "66967",
    "city": "Smith Center"
  },
  {
    "zip": "66970",
    "city": "Webber"
  },
  {
    "zip": "67001",
    "city": "Andale"
  },
  {
    "zip": "67004",
    "city": "Argonia"
  },
  {
    "zip": "67005",
    "city": "Arkansas City"
  },
  {
    "zip": "67019",
    "city": "Burden"
  },
  {
    "zip": "67020",
    "city": "Burrton"
  },
  {
    "zip": "67021",
    "city": "Byers"
  },
  {
    "zip": "67024",
    "city": "Cedar Vale"
  },
  {
    "zip": "67025",
    "city": "Cheney"
  },
  {
    "zip": "67030",
    "city": "Colwich"
  },
  {
    "zip": "67031",
    "city": "Conway Springs"
  },
  {
    "zip": "67039",
    "city": "Douglass"
  },
  {
    "zip": "67042",
    "city": "El Dorado"
  },
  {
    "zip": "67050",
    "city": "Garden Plain"
  },
  {
    "zip": "67051",
    "city": "Geuda Springs"
  },
  {
    "zip": "67052",
    "city": "Goddard"
  },
  {
    "zip": "67056",
    "city": "Halstead"
  },
  {
    "zip": "67057",
    "city": "Hardtner"
  },
  {
    "zip": "67060",
    "city": "Haysville"
  },
  {
    "zip": "67067",
    "city": "Kechi"
  },
  {
    "zip": "67070",
    "city": "Kiowa"
  },
  {
    "zip": "67101",
    "city": "Maize"
  },
  {
    "zip": "67104",
    "city": "Medicine Lodge"
  },
  {
    "zip": "67107",
    "city": "Moundridge"
  },
  {
    "zip": "67109",
    "city": "Mullinville"
  },
  {
    "zip": "67110",
    "city": "Mulvane"
  },
  {
    "zip": "67117",
    "city": "North Newton"
  },
  {
    "zip": "67123",
    "city": "Potwin"
  },
  {
    "zip": "67124",
    "city": "Pratt"
  },
  {
    "zip": "67127",
    "city": "Protection"
  },
  {
    "zip": "67132",
    "city": "Rosalia"
  },
  {
    "zip": "67137",
    "city": "Severy"
  },
  {
    "zip": "67142",
    "city": "Spivey"
  },
  {
    "zip": "67143",
    "city": "Sun City"
  },
  {
    "zip": "67147",
    "city": "Valley Center"
  },
  {
    "zip": "67159",
    "city": "Zenda"
  },
  {
    "zip": "67202",
    "city": "Wichita"
  },
  {
    "zip": "67221",
    "city": "Mcconnell Afb"
  },
  {
    "zip": "67333",
    "city": "Caney"
  },
  {
    "zip": "67335",
    "city": "Cherryvale"
  },
  {
    "zip": "67336",
    "city": "Chetopa"
  },
  {
    "zip": "67337",
    "city": "Coffeyville"
  },
  {
    "zip": "67342",
    "city": "Edna"
  },
  {
    "zip": "67344",
    "city": "Elk City"
  },
  {
    "zip": "67345",
    "city": "Elk Falls"
  },
  {
    "zip": "67346",
    "city": "Grenola"
  },
  {
    "zip": "67352",
    "city": "Longton"
  },
  {
    "zip": "67354",
    "city": "Mound Valley"
  },
  {
    "zip": "67355",
    "city": "Niotaze"
  },
  {
    "zip": "67361",
    "city": "Sedan"
  },
  {
    "zip": "67401",
    "city": "Salina"
  },
  {
    "zip": "67410",
    "city": "Abilene"
  },
  {
    "zip": "67416",
    "city": "Assaria"
  },
  {
    "zip": "67427",
    "city": "Bushton"
  },
  {
    "zip": "67430",
    "city": "Cawker City"
  },
  {
    "zip": "67431",
    "city": "Chapman"
  },
  {
    "zip": "67432",
    "city": "Clay Center"
  },
  {
    "zip": "67442",
    "city": "Falun"
  },
  {
    "zip": "67445",
    "city": "Glasco"
  },
  {
    "zip": "67446",
    "city": "Glen Elder"
  },
  {
    "zip": "67447",
    "city": "Green"
  },
  {
    "zip": "67448",
    "city": "Gypsum"
  },
  {
    "zip": "67449",
    "city": "Herington"
  },
  {
    "zip": "67450",
    "city": "Holyrood"
  },
  {
    "zip": "67454",
    "city": "Kanopolis"
  },
  {
    "zip": "67456",
    "city": "Lindsborg"
  },
  {
    "zip": "67458",
    "city": "Longford"
  },
  {
    "zip": "67460",
    "city": "Mcpherson"
  },
  {
    "zip": "67466",
    "city": "Miltonvale"
  },
  {
    "zip": "67473",
    "city": "Osborne"
  },
  {
    "zip": "67474",
    "city": "Portis"
  },
  {
    "zip": "67480",
    "city": "Solomon"
  },
  {
    "zip": "67481",
    "city": "Sylvan Grove"
  },
  {
    "zip": "67484",
    "city": "Tescott"
  },
  {
    "zip": "67505",
    "city": "South Hutchinson"
  },
  {
    "zip": "67510",
    "city": "Abbyville"
  },
  {
    "zip": "67511",
    "city": "Albert"
  },
  {
    "zip": "67516",
    "city": "Bazine"
  },
  {
    "zip": "67518",
    "city": "Beeler"
  },
  {
    "zip": "67521",
    "city": "Brownell"
  },
  {
    "zip": "67522",
    "city": "Buhler"
  },
  {
    "zip": "67525",
    "city": "Claflin"
  },
  {
    "zip": "67526",
    "city": "Ellinwood"
  },
  {
    "zip": "67543",
    "city": "Haven"
  },
  {
    "zip": "67544",
    "city": "Hoisington"
  },
  {
    "zip": "67547",
    "city": "Kinsley"
  },
  {
    "zip": "67550",
    "city": "Larned"
  },
  {
    "zip": "67556",
    "city": "Mc Cracken"
  },
  {
    "zip": "67557",
    "city": "Macksville"
  },
  {
    "zip": "67559",
    "city": "Nekoma"
  },
  {
    "zip": "67560",
    "city": "Ness City"
  },
  {
    "zip": "67561",
    "city": "Nickerson"
  },
  {
    "zip": "67563",
    "city": "Offerle"
  },
  {
    "zip": "67564",
    "city": "Olmitz"
  },
  {
    "zip": "67567",
    "city": "Pawnee Rock"
  },
  {
    "zip": "67570",
    "city": "Pretty Prairie"
  },
  {
    "zip": "67574",
    "city": "Rozel"
  },
  {
    "zip": "67575",
    "city": "Rush Center"
  },
  {
    "zip": "67581",
    "city": "Sylvia"
  },
  {
    "zip": "67583",
    "city": "Turon"
  },
  {
    "zip": "67621",
    "city": "Agra"
  },
  {
    "zip": "67625",
    "city": "Bogue"
  },
  {
    "zip": "67631",
    "city": "Collyer"
  },
  {
    "zip": "67632",
    "city": "Damar"
  },
  {
    "zip": "67634",
    "city": "Dorrance"
  },
  {
    "zip": "67637",
    "city": "Ellis"
  },
  {
    "zip": "67639",
    "city": "Glade"
  },
  {
    "zip": "67644",
    "city": "Kirwin"
  },
  {
    "zip": "67645",
    "city": "Lenora"
  },
  {
    "zip": "67650",
    "city": "Morland"
  },
  {
    "zip": "67651",
    "city": "Natoma"
  },
  {
    "zip": "67653",
    "city": "Norcatur"
  },
  {
    "zip": "67656",
    "city": "Ogallah"
  },
  {
    "zip": "67657",
    "city": "Palco"
  },
  {
    "zip": "67659",
    "city": "Penokee"
  },
  {
    "zip": "67664",
    "city": "Prairie View"
  },
  {
    "zip": "67672",
    "city": "Wakeeney"
  },
  {
    "zip": "67675",
    "city": "Woodston"
  },
  {
    "zip": "67731",
    "city": "Bird City"
  },
  {
    "zip": "67733",
    "city": "Edson"
  },
  {
    "zip": "67734",
    "city": "Gem"
  },
  {
    "zip": "67736",
    "city": "Gove"
  },
  {
    "zip": "67737",
    "city": "Grainfield"
  },
  {
    "zip": "67740",
    "city": "Hoxie"
  },
  {
    "zip": "67741",
    "city": "Kanorado"
  },
  {
    "zip": "67744",
    "city": "Ludell"
  },
  {
    "zip": "67747",
    "city": "Monument"
  },
  {
    "zip": "67751",
    "city": "Park"
  },
  {
    "zip": "67752",
    "city": "Quinter"
  },
  {
    "zip": "67762",
    "city": "Weskan"
  },
  {
    "zip": "67801",
    "city": "Dodge City"
  },
  {
    "zip": "67835",
    "city": "Cimarron"
  },
  {
    "zip": "67837",
    "city": "Copeland"
  },
  {
    "zip": "67841",
    "city": "Ensign"
  },
  {
    "zip": "67849",
    "city": "Hanston"
  },
  {
    "zip": "67850",
    "city": "Healy"
  },
  {
    "zip": "67854",
    "city": "Jetmore"
  },
  {
    "zip": "67859",
    "city": "Kismet"
  },
  {
    "zip": "67860",
    "city": "Lakin"
  },
  {
    "zip": "67861",
    "city": "Leoti"
  },
  {
    "zip": "67862",
    "city": "Manter"
  },
  {
    "zip": "67863",
    "city": "Marienthal"
  },
  {
    "zip": "67864",
    "city": "Meade"
  },
  {
    "zip": "67865",
    "city": "Minneola"
  },
  {
    "zip": "67868",
    "city": "Pierceville"
  },
  {
    "zip": "67870",
    "city": "Satanta"
  },
  {
    "zip": "67876",
    "city": "Spearville"
  },
  {
    "zip": "67879",
    "city": "Tribune"
  },
  {
    "zip": "67951",
    "city": "Hugoton"
  },
  {
    "zip": "68015",
    "city": "Cedar Bluffs"
  },
  {
    "zip": "68023",
    "city": "Fort Calhoun"
  },
  {
    "zip": "68031",
    "city": "Hooper"
  },
  {
    "zip": "68034",
    "city": "Kennard"
  },
  {
    "zip": "68040",
    "city": "Malmo"
  },
  {
    "zip": "68041",
    "city": "Mead"
  },
  {
    "zip": "68046",
    "city": "Papillion"
  },
  {
    "zip": "68047",
    "city": "Pender"
  },
  {
    "zip": "68048",
    "city": "Plattsmouth"
  },
  {
    "zip": "68050",
    "city": "Prague"
  },
  {
    "zip": "68055",
    "city": "Rosalie"
  },
  {
    "zip": "68056",
    "city": "St Columbans"
  },
  {
    "zip": "68057",
    "city": "Scribner"
  },
  {
    "zip": "68061",
    "city": "Tekamah"
  },
  {
    "zip": "68062",
    "city": "Thurston"
  },
  {
    "zip": "68066",
    "city": "Wahoo"
  },
  {
    "zip": "68067",
    "city": "Walthill"
  },
  {
    "zip": "68073",
    "city": "Yutan"
  },
  {
    "zip": "68113",
    "city": "Offutt A F B"
  },
  {
    "zip": "68128",
    "city": "La Vista"
  },
  {
    "zip": "68304",
    "city": "Alvo"
  },
  {
    "zip": "68309",
    "city": "Barneston"
  },
  {
    "zip": "68313",
    "city": "Beaver Crossing"
  },
  {
    "zip": "68317",
    "city": "Bennet"
  },
  {
    "zip": "68319",
    "city": "Bradshaw"
  },
  {
    "zip": "68320",
    "city": "Brock"
  },
  {
    "zip": "68322",
    "city": "Bruning"
  },
  {
    "zip": "68323",
    "city": "Burchard"
  },
  {
    "zip": "68324",
    "city": "Burr"
  },
  {
    "zip": "68328",
    "city": "Clatonia"
  },
  {
    "zip": "68336",
    "city": "Davey"
  },
  {
    "zip": "68338",
    "city": "Daykin"
  },
  {
    "zip": "68342",
    "city": "Diller"
  },
  {
    "zip": "68355",
    "city": "Falls City"
  },
  {
    "zip": "68357",
    "city": "Filley"
  },
  {
    "zip": "68358",
    "city": "Firth"
  },
  {
    "zip": "68359",
    "city": "Friend"
  },
  {
    "zip": "68368",
    "city": "Hallam"
  },
  {
    "zip": "68375",
    "city": "Hubbell"
  },
  {
    "zip": "68377",
    "city": "Jansen"
  },
  {
    "zip": "68401",
    "city": "Mc Cool Junction"
  },
  {
    "zip": "68402",
    "city": "Malcolm"
  },
  {
    "zip": "68404",
    "city": "Martell"
  },
  {
    "zip": "68406",
    "city": "Milligan"
  },
  {
    "zip": "68410",
    "city": "Nebraska City"
  },
  {
    "zip": "68413",
    "city": "Nehawka"
  },
  {
    "zip": "68416",
    "city": "Ohiowa"
  },
  {
    "zip": "68417",
    "city": "Otoe"
  },
  {
    "zip": "68420",
    "city": "Pawnee City"
  },
  {
    "zip": "68422",
    "city": "Pickrell"
  },
  {
    "zip": "68423",
    "city": "Pleasant Dale"
  },
  {
    "zip": "68430",
    "city": "Roca"
  },
  {
    "zip": "68431",
    "city": "Rulo"
  },
  {
    "zip": "68436",
    "city": "Shickley"
  },
  {
    "zip": "68437",
    "city": "Shubert"
  },
  {
    "zip": "68439",
    "city": "Staplehurst"
  },
  {
    "zip": "68440",
    "city": "Steele City"
  },
  {
    "zip": "68441",
    "city": "Steinauer"
  },
  {
    "zip": "68444",
    "city": "Strang"
  },
  {
    "zip": "68447",
    "city": "Table Rock"
  },
  {
    "zip": "68448",
    "city": "Talmage"
  },
  {
    "zip": "68452",
    "city": "Ong"
  },
  {
    "zip": "68453",
    "city": "Tobias"
  },
  {
    "zip": "68457",
    "city": "Verdon"
  },
  {
    "zip": "68463",
    "city": "Weeping Water"
  },
  {
    "zip": "68464",
    "city": "Western"
  },
  {
    "zip": "68465",
    "city": "Wilber"
  },
  {
    "zip": "68466",
    "city": "Wymore"
  },
  {
    "zip": "68628",
    "city": "Clarks"
  },
  {
    "zip": "68632",
    "city": "David City"
  },
  {
    "zip": "68637",
    "city": "Ericson"
  },
  {
    "zip": "68641",
    "city": "Howells"
  },
  {
    "zip": "68642",
    "city": "Humphrey"
  },
  {
    "zip": "68643",
    "city": "Leigh"
  },
  {
    "zip": "68648",
    "city": "Morse Bluff"
  },
  {
    "zip": "68653",
    "city": "Platte Center"
  },
  {
    "zip": "68655",
    "city": "Primrose"
  },
  {
    "zip": "68658",
    "city": "Rising City"
  },
  {
    "zip": "68660",
    "city": "Saint Edward"
  },
  {
    "zip": "68666",
    "city": "Stromsburg"
  },
  {
    "zip": "68716",
    "city": "Beemer"
  },
  {
    "zip": "68725",
    "city": "Chambers"
  },
  {
    "zip": "68727",
    "city": "Coleridge"
  },
  {
    "zip": "68734",
    "city": "Emmet"
  },
  {
    "zip": "68736",
    "city": "Fordyce"
  },
  {
    "zip": "68739",
    "city": "Hartington"
  },
  {
    "zip": "68740",
    "city": "Hoskins"
  },
  {
    "zip": "68746",
    "city": "Lynch"
  },
  {
    "zip": "68747",
    "city": "Mclean"
  },
  {
    "zip": "68751",
    "city": "Maskell"
  },
  {
    "zip": "68752",
    "city": "Meadow Grove"
  },
  {
    "zip": "68755",
    "city": "Naper"
  },
  {
    "zip": "68756",
    "city": "Neligh"
  },
  {
    "zip": "68758",
    "city": "Newman Grove"
  },
  {
    "zip": "68760",
    "city": "Niobrara"
  },
  {
    "zip": "68763",
    "city": "Oneill"
  },
  {
    "zip": "68765",
    "city": "Osmond"
  },
  {
    "zip": "68767",
    "city": "Pierce"
  },
  {
    "zip": "68768",
    "city": "Pilger"
  },
  {
    "zip": "68770",
    "city": "Ponca"
  },
  {
    "zip": "68774",
    "city": "Saint Helena"
  },
  {
    "zip": "68776",
    "city": "South Sioux City"
  },
  {
    "zip": "68778",
    "city": "Springview"
  },
  {
    "zip": "68781",
    "city": "Tilden"
  },
  {
    "zip": "68783",
    "city": "Verdigre"
  },
  {
    "zip": "68786",
    "city": "Wausa"
  },
  {
    "zip": "68789",
    "city": "Winnetoon"
  },
  {
    "zip": "68790",
    "city": "Winside"
  },
  {
    "zip": "68791",
    "city": "Wisner"
  },
  {
    "zip": "68792",
    "city": "Wynot"
  },
  {
    "zip": "68810",
    "city": "Alda"
  },
  {
    "zip": "68813",
    "city": "Anselmo"
  },
  {
    "zip": "68814",
    "city": "Ansley"
  },
  {
    "zip": "68820",
    "city": "Boelus"
  },
  {
    "zip": "68822",
    "city": "Broken Bow"
  },
  {
    "zip": "68823",
    "city": "Burwell"
  },
  {
    "zip": "68831",
    "city": "Dannebrog"
  },
  {
    "zip": "68833",
    "city": "Dunning"
  },
  {
    "zip": "68836",
    "city": "Elm Creek"
  },
  {
    "zip": "68841",
    "city": "Giltner"
  },
  {
    "zip": "68846",
    "city": "Hordville"
  },
  {
    "zip": "68853",
    "city": "Loup City"
  },
  {
    "zip": "68856",
    "city": "Merna"
  },
  {
    "zip": "68859",
    "city": "North Loup"
  },
  {
    "zip": "68862",
    "city": "Ord"
  },
  {
    "zip": "68863",
    "city": "Overton"
  },
  {
    "zip": "68872",
    "city": "Saint Libory"
  },
  {
    "zip": "68874",
    "city": "Sargent"
  },
  {
    "zip": "68875",
    "city": "Scotia"
  },
  {
    "zip": "68882",
    "city": "Wolbach"
  },
  {
    "zip": "68926",
    "city": "Beaver City"
  },
  {
    "zip": "68928",
    "city": "Bladen"
  },
  {
    "zip": "68934",
    "city": "Deweese"
  },
  {
    "zip": "68940",
    "city": "Funk"
  },
  {
    "zip": "68941",
    "city": "Glenvil"
  },
  {
    "zip": "68942",
    "city": "Guide Rock"
  },
  {
    "zip": "68945",
    "city": "Heartwell"
  },
  {
    "zip": "68946",
    "city": "Hendley"
  },
  {
    "zip": "68947",
    "city": "Hildreth"
  },
  {
    "zip": "68949",
    "city": "Holdrege"
  },
  {
    "zip": "68952",
    "city": "Inavale"
  },
  {
    "zip": "68954",
    "city": "Inland"
  },
  {
    "zip": "68955",
    "city": "Juniata"
  },
  {
    "zip": "68956",
    "city": "Kenesaw"
  },
  {
    "zip": "68958",
    "city": "Loomis"
  },
  {
    "zip": "68960",
    "city": "Naponee"
  },
  {
    "zip": "68964",
    "city": "Oak"
  },
  {
    "zip": "68970",
    "city": "Red Cloud"
  },
  {
    "zip": "68971",
    "city": "Republican City"
  },
  {
    "zip": "68975",
    "city": "Saronville"
  },
  {
    "zip": "69001",
    "city": "Mc Cook"
  },
  {
    "zip": "69020",
    "city": "Bartley"
  },
  {
    "zip": "69021",
    "city": "Benkelman"
  },
  {
    "zip": "69027",
    "city": "Enders"
  },
  {
    "zip": "69029",
    "city": "Farnam"
  },
  {
    "zip": "69030",
    "city": "Haigler"
  },
  {
    "zip": "69032",
    "city": "Hayes Center"
  },
  {
    "zip": "69041",
    "city": "Parks"
  },
  {
    "zip": "69042",
    "city": "Stockville"
  },
  {
    "zip": "69045",
    "city": "Wauneta"
  },
  {
    "zip": "69101",
    "city": "North Platte"
  },
  {
    "zip": "69125",
    "city": "Broadwater"
  },
  {
    "zip": "69130",
    "city": "Cozad"
  },
  {
    "zip": "69135",
    "city": "Elsmere"
  },
  {
    "zip": "69138",
    "city": "Gothenburg"
  },
  {
    "zip": "69142",
    "city": "Halsey"
  },
  {
    "zip": "69147",
    "city": "Lewellen"
  },
  {
    "zip": "69148",
    "city": "Lisco"
  },
  {
    "zip": "69152",
    "city": "Mullen"
  },
  {
    "zip": "69153",
    "city": "Ogallala"
  },
  {
    "zip": "69156",
    "city": "Potter"
  },
  {
    "zip": "69157",
    "city": "Purdum"
  },
  {
    "zip": "69166",
    "city": "Thedford"
  },
  {
    "zip": "69171",
    "city": "Willow Island"
  },
  {
    "zip": "69201",
    "city": "Valentine"
  },
  {
    "zip": "69211",
    "city": "Cody"
  },
  {
    "zip": "69216",
    "city": "Kilgore"
  },
  {
    "zip": "69217",
    "city": "Long Pine"
  },
  {
    "zip": "69218",
    "city": "Merriman"
  },
  {
    "zip": "69219",
    "city": "Nenzel"
  },
  {
    "zip": "69337",
    "city": "Chadron"
  },
  {
    "zip": "69341",
    "city": "Gering"
  },
  {
    "zip": "69347",
    "city": "Hay Springs"
  },
  {
    "zip": "69348",
    "city": "Hemingford"
  },
  {
    "zip": "69354",
    "city": "Marsland"
  },
  {
    "zip": "69356",
    "city": "Minatare"
  },
  {
    "zip": "69361",
    "city": "Scottsbluff"
  },
  {
    "zip": "69367",
    "city": "Whitney"
  },
  {
    "zip": "70001",
    "city": "Metairie"
  },
  {
    "zip": "70030",
    "city": "Des Allemands"
  },
  {
    "zip": "70031",
    "city": "Ama"
  },
  {
    "zip": "70036",
    "city": "Barataria"
  },
  {
    "zip": "70037",
    "city": "Belle Chasse"
  },
  {
    "zip": "70039",
    "city": "Boutte"
  },
  {
    "zip": "70040",
    "city": "Braithwaite"
  },
  {
    "zip": "70041",
    "city": "Buras"
  },
  {
    "zip": "70043",
    "city": "Chalmette"
  },
  {
    "zip": "70047",
    "city": "Destrehan"
  },
  {
    "zip": "70049",
    "city": "Edgard"
  },
  {
    "zip": "70051",
    "city": "Garyville"
  },
  {
    "zip": "70052",
    "city": "Gramercy"
  },
  {
    "zip": "70057",
    "city": "Hahnville"
  },
  {
    "zip": "70062",
    "city": "Kenner"
  },
  {
    "zip": "70067",
    "city": "Lafitte"
  },
  {
    "zip": "70068",
    "city": "La Place"
  },
  {
    "zip": "70070",
    "city": "Luling"
  },
  {
    "zip": "70071",
    "city": "Lutcher"
  },
  {
    "zip": "70072",
    "city": "Marrero"
  },
  {
    "zip": "70075",
    "city": "Meraux"
  },
  {
    "zip": "70079",
    "city": "Norco"
  },
  {
    "zip": "70080",
    "city": "Paradis"
  },
  {
    "zip": "70083",
    "city": "Port Sulphur"
  },
  {
    "zip": "70085",
    "city": "Saint Bernard"
  },
  {
    "zip": "70087",
    "city": "Saint Rose"
  },
  {
    "zip": "70090",
    "city": "Vacherie"
  },
  {
    "zip": "70092",
    "city": "Violet"
  },
  {
    "zip": "70094",
    "city": "Westwego"
  },
  {
    "zip": "70112",
    "city": "New Orleans"
  },
  {
    "zip": "70301",
    "city": "Thibodaux"
  },
  {
    "zip": "70339",
    "city": "Pierre Part"
  },
  {
    "zip": "70341",
    "city": "Belle Rose"
  },
  {
    "zip": "70343",
    "city": "Bourg"
  },
  {
    "zip": "70344",
    "city": "Chauvin"
  },
  {
    "zip": "70345",
    "city": "Cut Off"
  },
  {
    "zip": "70346",
    "city": "Donaldsonville"
  },
  {
    "zip": "70352",
    "city": "Donner"
  },
  {
    "zip": "70353",
    "city": "Dulac"
  },
  {
    "zip": "70354",
    "city": "Galliano"
  },
  {
    "zip": "70355",
    "city": "Gheens"
  },
  {
    "zip": "70357",
    "city": "Golden Meadow"
  },
  {
    "zip": "70360",
    "city": "Houma"
  },
  {
    "zip": "70372",
    "city": "Labadieville"
  },
  {
    "zip": "70373",
    "city": "Larose"
  },
  {
    "zip": "70377",
    "city": "Montegut"
  },
  {
    "zip": "70380",
    "city": "Morgan City"
  },
  {
    "zip": "70390",
    "city": "Napoleonville"
  },
  {
    "zip": "70393",
    "city": "Plattenville"
  },
  {
    "zip": "70394",
    "city": "Raceland"
  },
  {
    "zip": "70395",
    "city": "Schriever"
  },
  {
    "zip": "70397",
    "city": "Theriot"
  },
  {
    "zip": "70420",
    "city": "Abita Springs"
  },
  {
    "zip": "70421",
    "city": "Akers"
  },
  {
    "zip": "70422",
    "city": "Amite"
  },
  {
    "zip": "70426",
    "city": "Angie"
  },
  {
    "zip": "70427",
    "city": "Bogalusa"
  },
  {
    "zip": "70431",
    "city": "Bush"
  },
  {
    "zip": "70436",
    "city": "Fluker"
  },
  {
    "zip": "70442",
    "city": "Husser"
  },
  {
    "zip": "70444",
    "city": "Kentwood"
  },
  {
    "zip": "70445",
    "city": "Lacombe"
  },
  {
    "zip": "70446",
    "city": "Loranger"
  },
  {
    "zip": "70448",
    "city": "Mandeville"
  },
  {
    "zip": "70449",
    "city": "Maurepas"
  },
  {
    "zip": "70454",
    "city": "Ponchatoula"
  },
  {
    "zip": "70455",
    "city": "Robert"
  },
  {
    "zip": "70458",
    "city": "Slidell"
  },
  {
    "zip": "70466",
    "city": "Tickfaw"
  },
  {
    "zip": "70512",
    "city": "Arnaudville"
  },
  {
    "zip": "70515",
    "city": "Basile"
  },
  {
    "zip": "70517",
    "city": "Breaux Bridge"
  },
  {
    "zip": "70518",
    "city": "Broussard"
  },
  {
    "zip": "70520",
    "city": "Carencro"
  },
  {
    "zip": "70525",
    "city": "Church Point"
  },
  {
    "zip": "70526",
    "city": "Crowley"
  },
  {
    "zip": "70528",
    "city": "Delcambre"
  },
  {
    "zip": "70529",
    "city": "Duson"
  },
  {
    "zip": "70533",
    "city": "Erath"
  },
  {
    "zip": "70537",
    "city": "Evangeline"
  },
  {
    "zip": "70542",
    "city": "Gueydan"
  },
  {
    "zip": "70543",
    "city": "Iota"
  },
  {
    "zip": "70544",
    "city": "Jeanerette"
  },
  {
    "zip": "70548",
    "city": "Kaplan"
  },
  {
    "zip": "70549",
    "city": "Lake Arthur"
  },
  {
    "zip": "70552",
    "city": "Loreauville"
  },
  {
    "zip": "70554",
    "city": "Mamou"
  },
  {
    "zip": "70559",
    "city": "Morse"
  },
  {
    "zip": "70560",
    "city": "New Iberia"
  },
  {
    "zip": "70570",
    "city": "Opelousas"
  },
  {
    "zip": "70577",
    "city": "Port Barre"
  },
  {
    "zip": "70578",
    "city": "Rayne"
  },
  {
    "zip": "70582",
    "city": "Saint Martinville"
  },
  {
    "zip": "70586",
    "city": "Ville Platte"
  },
  {
    "zip": "70591",
    "city": "Welsh"
  },
  {
    "zip": "70601",
    "city": "Lake Charles"
  },
  {
    "zip": "70632",
    "city": "Creole"
  },
  {
    "zip": "70633",
    "city": "Dequincy"
  },
  {
    "zip": "70634",
    "city": "Deridder"
  },
  {
    "zip": "70643",
    "city": "Grand Chenier"
  },
  {
    "zip": "70645",
    "city": "Hackberry"
  },
  {
    "zip": "70647",
    "city": "Iowa"
  },
  {
    "zip": "70648",
    "city": "Kinder"
  },
  {
    "zip": "70653",
    "city": "Merryville"
  },
  {
    "zip": "70654",
    "city": "Mittie"
  },
  {
    "zip": "70656",
    "city": "Pitkin"
  },
  {
    "zip": "70657",
    "city": "Ragley"
  },
  {
    "zip": "70658",
    "city": "Reeves"
  },
  {
    "zip": "70660",
    "city": "Singer"
  },
  {
    "zip": "70661",
    "city": "Starks"
  },
  {
    "zip": "70662",
    "city": "Sugartown"
  },
  {
    "zip": "70706",
    "city": "Denham Springs"
  },
  {
    "zip": "70710",
    "city": "Addis"
  },
  {
    "zip": "70715",
    "city": "Batchelor"
  },
  {
    "zip": "70719",
    "city": "Brusly"
  },
  {
    "zip": "70721",
    "city": "Carville"
  },
  {
    "zip": "70723",
    "city": "Convent"
  },
  {
    "zip": "70725",
    "city": "Darrow"
  },
  {
    "zip": "70729",
    "city": "Erwinville"
  },
  {
    "zip": "70732",
    "city": "Fordoche"
  },
  {
    "zip": "70733",
    "city": "French Settlement"
  },
  {
    "zip": "70734",
    "city": "Geismar"
  },
  {
    "zip": "70736",
    "city": "Glynn"
  },
  {
    "zip": "70737",
    "city": "Gonzales"
  },
  {
    "zip": "70739",
    "city": "Greenwell Springs"
  },
  {
    "zip": "70740",
    "city": "Grosse Tete"
  },
  {
    "zip": "70749",
    "city": "Jarreau"
  },
  {
    "zip": "70750",
    "city": "Krotz Springs"
  },
  {
    "zip": "70753",
    "city": "Lettsworth"
  },
  {
    "zip": "70756",
    "city": "Lottie"
  },
  {
    "zip": "70757",
    "city": "Maringouin"
  },
  {
    "zip": "70759",
    "city": "Morganza"
  },
  {
    "zip": "70760",
    "city": "New Roads"
  },
  {
    "zip": "70762",
    "city": "Oscar"
  },
  {
    "zip": "70763",
    "city": "Paulina"
  },
  {
    "zip": "70764",
    "city": "Plaquemine"
  },
  {
    "zip": "70767",
    "city": "Port Allen"
  },
  {
    "zip": "70769",
    "city": "Prairieville"
  },
  {
    "zip": "70770",
    "city": "Pride"
  },
  {
    "zip": "70773",
    "city": "Rougon"
  },
  {
    "zip": "70774",
    "city": "Saint Amant"
  },
  {
    "zip": "70776",
    "city": "Saint Gabriel"
  },
  {
    "zip": "70777",
    "city": "Slaughter"
  },
  {
    "zip": "70780",
    "city": "Sunshine"
  },
  {
    "zip": "70783",
    "city": "Ventress"
  },
  {
    "zip": "70788",
    "city": "White Castle"
  },
  {
    "zip": "70791",
    "city": "Zachary"
  },
  {
    "zip": "70801",
    "city": "Baton Rouge"
  },
  {
    "zip": "71008",
    "city": "Bienville"
  },
  {
    "zip": "71016",
    "city": "Castor"
  },
  {
    "zip": "71018",
    "city": "Cotton Valley"
  },
  {
    "zip": "71019",
    "city": "Coushatta"
  },
  {
    "zip": "71023",
    "city": "Doyline"
  },
  {
    "zip": "71024",
    "city": "Dubberly"
  },
  {
    "zip": "71027",
    "city": "Frierson"
  },
  {
    "zip": "71028",
    "city": "Gibsland"
  },
  {
    "zip": "71031",
    "city": "Goldonna"
  },
  {
    "zip": "71032",
    "city": "Grand Cane"
  },
  {
    "zip": "71034",
    "city": "Hall Summit"
  },
  {
    "zip": "71037",
    "city": "Haughton"
  },
  {
    "zip": "71038",
    "city": "Haynesville"
  },
  {
    "zip": "71043",
    "city": "Hosston"
  },
  {
    "zip": "71046",
    "city": "Keatchie"
  },
  {
    "zip": "71047",
    "city": "Keithville"
  },
  {
    "zip": "71060",
    "city": "Mooringsport"
  },
  {
    "zip": "71063",
    "city": "Pelican"
  },
  {
    "zip": "71064",
    "city": "Plain Dealing"
  },
  {
    "zip": "71069",
    "city": "Rodessa"
  },
  {
    "zip": "71071",
    "city": "Sarepta"
  },
  {
    "zip": "71072",
    "city": "Shongaloo"
  },
  {
    "zip": "71075",
    "city": "Springhill"
  },
  {
    "zip": "71101",
    "city": "Shreveport"
  },
  {
    "zip": "71110",
    "city": "Barksdale Afb"
  },
  {
    "zip": "71111",
    "city": "Bossier City"
  },
  {
    "zip": "71219",
    "city": "Baskin"
  },
  {
    "zip": "71220",
    "city": "Bastrop"
  },
  {
    "zip": "71222",
    "city": "Bernice"
  },
  {
    "zip": "71223",
    "city": "Bonita"
  },
  {
    "zip": "71227",
    "city": "Choudrant"
  },
  {
    "zip": "71229",
    "city": "Collinston"
  },
  {
    "zip": "71235",
    "city": "Dubach"
  },
  {
    "zip": "71237",
    "city": "Epps"
  },
  {
    "zip": "71238",
    "city": "Eros"
  },
  {
    "zip": "71241",
    "city": "Farmerville"
  },
  {
    "zip": "71243",
    "city": "Fort Necessity"
  },
  {
    "zip": "71245",
    "city": "Grambling"
  },
  {
    "zip": "71254",
    "city": "Lake Providence"
  },
  {
    "zip": "71256",
    "city": "Lillie"
  },
  {
    "zip": "71259",
    "city": "Mangham"
  },
  {
    "zip": "71261",
    "city": "Mer Rouge"
  },
  {
    "zip": "71270",
    "city": "Ruston"
  },
  {
    "zip": "71275",
    "city": "Simsboro"
  },
  {
    "zip": "71276",
    "city": "Sondheimer"
  },
  {
    "zip": "71277",
    "city": "Spearsville"
  },
  {
    "zip": "71280",
    "city": "Sterlington"
  },
  {
    "zip": "71282",
    "city": "Tallulah"
  },
  {
    "zip": "71286",
    "city": "Transylvania"
  },
  {
    "zip": "71322",
    "city": "Bunkie"
  },
  {
    "zip": "71325",
    "city": "Cheneyville"
  },
  {
    "zip": "71327",
    "city": "Cottonport"
  },
  {
    "zip": "71328",
    "city": "Deville"
  },
  {
    "zip": "71334",
    "city": "Ferriday"
  },
  {
    "zip": "71341",
    "city": "Hessmer"
  },
  {
    "zip": "71342",
    "city": "Jena"
  },
  {
    "zip": "71346",
    "city": "Lecompte"
  },
  {
    "zip": "71350",
    "city": "Mansura"
  },
  {
    "zip": "71351",
    "city": "Marksville"
  },
  {
    "zip": "71355",
    "city": "Moreauville"
  },
  {
    "zip": "71357",
    "city": "Newellton"
  },
  {
    "zip": "71362",
    "city": "Plaucheville"
  },
  {
    "zip": "71367",
    "city": "Saint Landry"
  },
  {
    "zip": "71368",
    "city": "Sicily Island"
  },
  {
    "zip": "71369",
    "city": "Simmesport"
  },
  {
    "zip": "71371",
    "city": "Trout"
  },
  {
    "zip": "71375",
    "city": "Waterproof"
  },
  {
    "zip": "71401",
    "city": "Aimwell"
  },
  {
    "zip": "71403",
    "city": "Anacoco"
  },
  {
    "zip": "71405",
    "city": "Ball"
  },
  {
    "zip": "71411",
    "city": "Campti"
  },
  {
    "zip": "71416",
    "city": "Cloutierville"
  },
  {
    "zip": "71423",
    "city": "Dry Prong"
  },
  {
    "zip": "71429",
    "city": "Florien"
  },
  {
    "zip": "71433",
    "city": "Glenmora"
  },
  {
    "zip": "71438",
    "city": "Hineston"
  },
  {
    "zip": "71439",
    "city": "Hornbeck"
  },
  {
    "zip": "71443",
    "city": "Kurthwood"
  },
  {
    "zip": "71449",
    "city": "Many"
  },
  {
    "zip": "71450",
    "city": "Marthaville"
  },
  {
    "zip": "71457",
    "city": "Natchitoches"
  },
  {
    "zip": "71459",
    "city": "Fort Polk"
  },
  {
    "zip": "71461",
    "city": "New Llano"
  },
  {
    "zip": "71465",
    "city": "Olla"
  },
  {
    "zip": "71468",
    "city": "Provencal"
  },
  {
    "zip": "71469",
    "city": "Robeline"
  },
  {
    "zip": "71472",
    "city": "Sieper"
  },
  {
    "zip": "71473",
    "city": "Sikes"
  },
  {
    "zip": "71479",
    "city": "Tullos"
  },
  {
    "zip": "71483",
    "city": "Winnfield"
  },
  {
    "zip": "71486",
    "city": "Zwolle"
  },
  {
    "zip": "71601",
    "city": "Pine Bluff"
  },
  {
    "zip": "71635",
    "city": "Crossett"
  },
  {
    "zip": "71638",
    "city": "Dermott"
  },
  {
    "zip": "71642",
    "city": "Fountain Hill"
  },
  {
    "zip": "71643",
    "city": "Gould"
  },
  {
    "zip": "71651",
    "city": "Jersey"
  },
  {
    "zip": "71654",
    "city": "Mc Gehee"
  },
  {
    "zip": "71660",
    "city": "New Edinburg"
  },
  {
    "zip": "71661",
    "city": "Parkdale"
  },
  {
    "zip": "71665",
    "city": "Rison"
  },
  {
    "zip": "71670",
    "city": "Tillar"
  },
  {
    "zip": "71675",
    "city": "Wilmar"
  },
  {
    "zip": "71720",
    "city": "Bearden"
  },
  {
    "zip": "71726",
    "city": "Chidester"
  },
  {
    "zip": "71743",
    "city": "Gurdon"
  },
  {
    "zip": "71747",
    "city": "Huttig"
  },
  {
    "zip": "71751",
    "city": "Louann"
  },
  {
    "zip": "71752",
    "city": "Mc Neil"
  },
  {
    "zip": "71762",
    "city": "Smackover"
  },
  {
    "zip": "71763",
    "city": "Sparkman"
  },
  {
    "zip": "71822",
    "city": "Ashdown"
  },
  {
    "zip": "71825",
    "city": "Blevins"
  },
  {
    "zip": "71832",
    "city": "De Queen"
  },
  {
    "zip": "71833",
    "city": "Dierks"
  },
  {
    "zip": "71834",
    "city": "Doddridge"
  },
  {
    "zip": "71836",
    "city": "Foreman"
  },
  {
    "zip": "71837",
    "city": "Fouke"
  },
  {
    "zip": "71839",
    "city": "Garland City"
  },
  {
    "zip": "71841",
    "city": "Gillham"
  },
  {
    "zip": "71842",
    "city": "Horatio"
  },
  {
    "zip": "71846",
    "city": "Lockesburg"
  },
  {
    "zip": "71847",
    "city": "Mc Caskill"
  },
  {
    "zip": "71851",
    "city": "Mineral Springs"
  },
  {
    "zip": "71854",
    "city": "Texarkana"
  },
  {
    "zip": "71855",
    "city": "Ozan"
  },
  {
    "zip": "71858",
    "city": "Rosston"
  },
  {
    "zip": "71859",
    "city": "Saratoga"
  },
  {
    "zip": "71860",
    "city": "Stamps"
  },
  {
    "zip": "71901",
    "city": "Hot Springs National Park"
  },
  {
    "zip": "71909",
    "city": "Hot Springs Village"
  },
  {
    "zip": "71923",
    "city": "Arkadelphia"
  },
  {
    "zip": "71933",
    "city": "Bonnerdale"
  },
  {
    "zip": "71935",
    "city": "Caddo Gap"
  },
  {
    "zip": "71937",
    "city": "Cove"
  },
  {
    "zip": "71940",
    "city": "Delight"
  },
  {
    "zip": "71941",
    "city": "Donaldson"
  },
  {
    "zip": "71944",
    "city": "Grannis"
  },
  {
    "zip": "71949",
    "city": "Jessieville"
  },
  {
    "zip": "71950",
    "city": "Kirby"
  },
  {
    "zip": "71953",
    "city": "Mena"
  },
  {
    "zip": "71956",
    "city": "Mountain Pine"
  },
  {
    "zip": "71957",
    "city": "Mount Ida"
  },
  {
    "zip": "71959",
    "city": "Newhope"
  },
  {
    "zip": "71961",
    "city": "Oden"
  },
  {
    "zip": "71964",
    "city": "Pearcy"
  },
  {
    "zip": "71965",
    "city": "Pencil Bluff"
  },
  {
    "zip": "71970",
    "city": "Story"
  },
  {
    "zip": "71971",
    "city": "Umpire"
  },
  {
    "zip": "71972",
    "city": "Vandervoort"
  },
  {
    "zip": "71973",
    "city": "Wickes"
  },
  {
    "zip": "72001",
    "city": "Adona"
  },
  {
    "zip": "72003",
    "city": "Almyra"
  },
  {
    "zip": "72004",
    "city": "Altheimer"
  },
  {
    "zip": "72005",
    "city": "Amagon"
  },
  {
    "zip": "72010",
    "city": "Bald Knob"
  },
  {
    "zip": "72011",
    "city": "Bauxite"
  },
  {
    "zip": "72012",
    "city": "Beebe"
  },
  {
    "zip": "72013",
    "city": "Bee Branch"
  },
  {
    "zip": "72021",
    "city": "Brinkley"
  },
  {
    "zip": "72025",
    "city": "Casa"
  },
  {
    "zip": "72026",
    "city": "Casscoe"
  },
  {
    "zip": "72027",
    "city": "Center Ridge"
  },
  {
    "zip": "72036",
    "city": "Cotton Plant"
  },
  {
    "zip": "72038",
    "city": "Crocketts Bluff"
  },
  {
    "zip": "72041",
    "city": "De Valls Bluff"
  },
  {
    "zip": "72046",
    "city": "England"
  },
  {
    "zip": "72051",
    "city": "Fox"
  },
  {
    "zip": "72057",
    "city": "Grapevine"
  },
  {
    "zip": "72060",
    "city": "Griffithville"
  },
  {
    "zip": "72061",
    "city": "Guy"
  },
  {
    "zip": "72063",
    "city": "Hattieville"
  },
  {
    "zip": "72065",
    "city": "Hensley"
  },
  {
    "zip": "72067",
    "city": "Higden"
  },
  {
    "zip": "72068",
    "city": "Higginson"
  },
  {
    "zip": "72069",
    "city": "Holly Grove"
  },
  {
    "zip": "72072",
    "city": "Humnoke"
  },
  {
    "zip": "72081",
    "city": "Judsonia"
  },
  {
    "zip": "72086",
    "city": "Lonoke"
  },
  {
    "zip": "72088",
    "city": "Fairfield Bay"
  },
  {
    "zip": "72099",
    "city": "Little Rock Air Force Base"
  },
  {
    "zip": "72101",
    "city": "Mc Crory"
  },
  {
    "zip": "72103",
    "city": "Mabelvale"
  },
  {
    "zip": "72106",
    "city": "Mayflower"
  },
  {
    "zip": "72110",
    "city": "Morrilton"
  },
  {
    "zip": "72113",
    "city": "Maumelle"
  },
  {
    "zip": "72114",
    "city": "North Little Rock"
  },
  {
    "zip": "72121",
    "city": "Pangburn"
  },
  {
    "zip": "72122",
    "city": "Paron"
  },
  {
    "zip": "72127",
    "city": "Plumerville"
  },
  {
    "zip": "72128",
    "city": "Poyen"
  },
  {
    "zip": "72130",
    "city": "Prim"
  },
  {
    "zip": "72134",
    "city": "Roe"
  },
  {
    "zip": "72136",
    "city": "Romance"
  },
  {
    "zip": "72137",
    "city": "Rose Bud"
  },
  {
    "zip": "72143",
    "city": "Searcy"
  },
  {
    "zip": "72156",
    "city": "Solgohachia"
  },
  {
    "zip": "72160",
    "city": "Stuttgart"
  },
  {
    "zip": "72165",
    "city": "Thida"
  },
  {
    "zip": "72166",
    "city": "Tichnor"
  },
  {
    "zip": "72167",
    "city": "Traskwood"
  },
  {
    "zip": "72173",
    "city": "Vilonia"
  },
  {
    "zip": "72175",
    "city": "Wabbaseka"
  },
  {
    "zip": "72179",
    "city": "Wilburn"
  },
  {
    "zip": "72301",
    "city": "West Memphis"
  },
  {
    "zip": "72315",
    "city": "Blytheville"
  },
  {
    "zip": "72320",
    "city": "Brickeys"
  },
  {
    "zip": "72326",
    "city": "Colt"
  },
  {
    "zip": "72330",
    "city": "Dyess"
  },
  {
    "zip": "72331",
    "city": "Earle"
  },
  {
    "zip": "72333",
    "city": "Elaine"
  },
  {
    "zip": "72335",
    "city": "Forrest City"
  },
  {
    "zip": "72338",
    "city": "Frenchmans Bayou"
  },
  {
    "zip": "72346",
    "city": "Heth"
  },
  {
    "zip": "72347",
    "city": "Hickory Ridge"
  },
  {
    "zip": "72348",
    "city": "Hughes"
  },
  {
    "zip": "72350",
    "city": "Joiner"
  },
  {
    "zip": "72354",
    "city": "Lepanto"
  },
  {
    "zip": "72355",
    "city": "Lexa"
  },
  {
    "zip": "72358",
    "city": "Luxora"
  },
  {
    "zip": "72365",
    "city": "Marked Tree"
  },
  {
    "zip": "72366",
    "city": "Marvell"
  },
  {
    "zip": "72373",
    "city": "Parkin"
  },
  {
    "zip": "72384",
    "city": "Turrell"
  },
  {
    "zip": "72386",
    "city": "Tyronza"
  },
  {
    "zip": "72390",
    "city": "West Helena"
  },
  {
    "zip": "72392",
    "city": "Wheatley"
  },
  {
    "zip": "72394",
    "city": "Widener"
  },
  {
    "zip": "72396",
    "city": "Wynne"
  },
  {
    "zip": "72410",
    "city": "Alicia"
  },
  {
    "zip": "72411",
    "city": "Bay"
  },
  {
    "zip": "72413",
    "city": "Biggers"
  },
  {
    "zip": "72414",
    "city": "Black Oak"
  },
  {
    "zip": "72415",
    "city": "Black Rock"
  },
  {
    "zip": "72416",
    "city": "Bono"
  },
  {
    "zip": "72417",
    "city": "Brookland"
  },
  {
    "zip": "72419",
    "city": "Caraway"
  },
  {
    "zip": "72421",
    "city": "Cash"
  },
  {
    "zip": "72425",
    "city": "Delaplaine"
  },
  {
    "zip": "72434",
    "city": "Imboden"
  },
  {
    "zip": "72435",
    "city": "Knobel"
  },
  {
    "zip": "72436",
    "city": "Lafe"
  },
  {
    "zip": "72438",
    "city": "Leachville"
  },
  {
    "zip": "72439",
    "city": "Light"
  },
  {
    "zip": "72442",
    "city": "Manila"
  },
  {
    "zip": "72443",
    "city": "Marmaduke"
  },
  {
    "zip": "72447",
    "city": "Monette"
  },
  {
    "zip": "72450",
    "city": "Paragould"
  },
  {
    "zip": "72453",
    "city": "Peach Orchard"
  },
  {
    "zip": "72454",
    "city": "Piggott"
  },
  {
    "zip": "72456",
    "city": "Pollard"
  },
  {
    "zip": "72459",
    "city": "Ravenden"
  },
  {
    "zip": "72460",
    "city": "Ravenden Springs"
  },
  {
    "zip": "72469",
    "city": "Strawberry"
  },
  {
    "zip": "72471",
    "city": "Swifton"
  },
  {
    "zip": "72472",
    "city": "Trumann"
  },
  {
    "zip": "72473",
    "city": "Tuckerman"
  },
  {
    "zip": "72476",
    "city": "Walnut Ridge"
  },
  {
    "zip": "72479",
    "city": "Weiner"
  },
  {
    "zip": "72482",
    "city": "Williford"
  },
  {
    "zip": "72512",
    "city": "Horseshoe Bend"
  },
  {
    "zip": "72513",
    "city": "Ash Flat"
  },
  {
    "zip": "72515",
    "city": "Bexar"
  },
  {
    "zip": "72517",
    "city": "Brockwell"
  },
  {
    "zip": "72519",
    "city": "Calico Rock"
  },
  {
    "zip": "72520",
    "city": "Camp"
  },
  {
    "zip": "72524",
    "city": "Cord"
  },
  {
    "zip": "72527",
    "city": "Desha"
  },
  {
    "zip": "72528",
    "city": "Dolph"
  },
  {
    "zip": "72529",
    "city": "Cherokee Village"
  },
  {
    "zip": "72530",
    "city": "Drasco"
  },
  {
    "zip": "72532",
    "city": "Evening Shade"
  },
  {
    "zip": "72533",
    "city": "Fifty Six"
  },
  {
    "zip": "72534",
    "city": "Floral"
  },
  {
    "zip": "72538",
    "city": "Gepp"
  },
  {
    "zip": "72540",
    "city": "Guion"
  },
  {
    "zip": "72543",
    "city": "Heber Springs"
  },
  {
    "zip": "72554",
    "city": "Mammoth Spring"
  },
  {
    "zip": "72555",
    "city": "Marcella"
  },
  {
    "zip": "72564",
    "city": "Oil Trough"
  },
  {
    "zip": "72571",
    "city": "Rosie"
  },
  {
    "zip": "72572",
    "city": "Saffell"
  },
  {
    "zip": "72573",
    "city": "Sage"
  },
  {
    "zip": "72578",
    "city": "Sturkie"
  },
  {
    "zip": "72579",
    "city": "Sulphur Rock"
  },
  {
    "zip": "72581",
    "city": "Tumbling Shoals"
  },
  {
    "zip": "72584",
    "city": "Violet Hill"
  },
  {
    "zip": "72585",
    "city": "Wideman"
  },
  {
    "zip": "72587",
    "city": "Wiseman"
  },
  {
    "zip": "72617",
    "city": "Big Flat"
  },
  {
    "zip": "72619",
    "city": "Bull Shoals"
  },
  {
    "zip": "72623",
    "city": "Clarkridge"
  },
  {
    "zip": "72626",
    "city": "Cotter"
  },
  {
    "zip": "72628",
    "city": "Deer"
  },
  {
    "zip": "72629",
    "city": "Dennard"
  },
  {
    "zip": "72631",
    "city": "Eureka Springs"
  },
  {
    "zip": "72634",
    "city": "Flippin"
  },
  {
    "zip": "72635",
    "city": "Gassville"
  },
  {
    "zip": "72638",
    "city": "Green Forest"
  },
  {
    "zip": "72639",
    "city": "Harriet"
  },
  {
    "zip": "72640",
    "city": "Hasty"
  },
  {
    "zip": "72644",
    "city": "Lead Hill"
  },
  {
    "zip": "72648",
    "city": "Marble Falls"
  },
  {
    "zip": "72653",
    "city": "Mountain Home"
  },
  {
    "zip": "72655",
    "city": "Mount Judea"
  },
  {
    "zip": "72657",
    "city": "Timbo"
  },
  {
    "zip": "72658",
    "city": "Norfork"
  },
  {
    "zip": "72663",
    "city": "Onia"
  },
  {
    "zip": "72666",
    "city": "Parthenon"
  },
  {
    "zip": "72668",
    "city": "Peel"
  },
  {
    "zip": "72679",
    "city": "Tilly"
  },
  {
    "zip": "72683",
    "city": "Vendor"
  },
  {
    "zip": "72685",
    "city": "Western Grove"
  },
  {
    "zip": "72686",
    "city": "Witts Springs"
  },
  {
    "zip": "72687",
    "city": "Yellville"
  },
  {
    "zip": "72714",
    "city": "Bella Vista"
  },
  {
    "zip": "72717",
    "city": "Canehill"
  },
  {
    "zip": "72718",
    "city": "Cave Springs"
  },
  {
    "zip": "72719",
    "city": "Centerton"
  },
  {
    "zip": "72736",
    "city": "Gravette"
  },
  {
    "zip": "72738",
    "city": "Hindsville"
  },
  {
    "zip": "72739",
    "city": "Hiwasse"
  },
  {
    "zip": "72751",
    "city": "Pea Ridge"
  },
  {
    "zip": "72752",
    "city": "Pettigrew"
  },
  {
    "zip": "72753",
    "city": "Prairie Grove"
  },
  {
    "zip": "72761",
    "city": "Siloam Springs"
  },
  {
    "zip": "72768",
    "city": "Sulphur Springs"
  },
  {
    "zip": "72769",
    "city": "Summers"
  },
  {
    "zip": "72774",
    "city": "West Fork"
  },
  {
    "zip": "72776",
    "city": "Witter"
  },
  {
    "zip": "72821",
    "city": "Altus"
  },
  {
    "zip": "72832",
    "city": "Coal Hill"
  },
  {
    "zip": "72834",
    "city": "Dardanelle"
  },
  {
    "zip": "72838",
    "city": "Gravelly"
  },
  {
    "zip": "72839",
    "city": "Hagarville"
  },
  {
    "zip": "72840",
    "city": "Hartman"
  },
  {
    "zip": "72851",
    "city": "New Blaine"
  },
  {
    "zip": "72852",
    "city": "Oark"
  },
  {
    "zip": "72853",
    "city": "Ola"
  },
  {
    "zip": "72854",
    "city": "Ozone"
  },
  {
    "zip": "72856",
    "city": "Pelsor"
  },
  {
    "zip": "72860",
    "city": "Rover"
  },
  {
    "zip": "72865",
    "city": "Subiaco"
  },
  {
    "zip": "72901",
    "city": "Fort Smith"
  },
  {
    "zip": "72923",
    "city": "Barling"
  },
  {
    "zip": "72926",
    "city": "Boles"
  },
  {
    "zip": "72937",
    "city": "Hackett"
  },
  {
    "zip": "72941",
    "city": "Lavaca"
  },
  {
    "zip": "72943",
    "city": "Magazine"
  },
  {
    "zip": "72946",
    "city": "Mountainburg"
  },
  {
    "zip": "72948",
    "city": "Natural Dam"
  },
  {
    "zip": "72951",
    "city": "Ratcliff"
  },
  {
    "zip": "72952",
    "city": "Rudy"
  },
  {
    "zip": "73002",
    "city": "Alex"
  },
  {
    "zip": "73004",
    "city": "Amber"
  },
  {
    "zip": "73005",
    "city": "Anadarko"
  },
  {
    "zip": "73006",
    "city": "Apache"
  },
  {
    "zip": "73009",
    "city": "Binger"
  },
  {
    "zip": "73016",
    "city": "Cashion"
  },
  {
    "zip": "73017",
    "city": "Cement"
  },
  {
    "zip": "73018",
    "city": "Chickasha"
  },
  {
    "zip": "73020",
    "city": "Choctaw"
  },
  {
    "zip": "73024",
    "city": "Corn"
  },
  {
    "zip": "73027",
    "city": "Coyle"
  },
  {
    "zip": "73029",
    "city": "Cyril"
  },
  {
    "zip": "73036",
    "city": "El Reno"
  },
  {
    "zip": "73038",
    "city": "Fort Cobb"
  },
  {
    "zip": "73040",
    "city": "Geary"
  },
  {
    "zip": "73041",
    "city": "Gotebo"
  },
  {
    "zip": "73042",
    "city": "Gracemont"
  },
  {
    "zip": "73045",
    "city": "Harrah"
  },
  {
    "zip": "73048",
    "city": "Hydro"
  },
  {
    "zip": "73053",
    "city": "Lookeba"
  },
  {
    "zip": "73059",
    "city": "Minco"
  },
  {
    "zip": "73063",
    "city": "Mulhall"
  },
  {
    "zip": "73064",
    "city": "Mustang"
  },
  {
    "zip": "73067",
    "city": "Ninnekah"
  },
  {
    "zip": "73075",
    "city": "Pauls Valley"
  },
  {
    "zip": "73080",
    "city": "Purcell"
  },
  {
    "zip": "73082",
    "city": "Rush Springs"
  },
  {
    "zip": "73092",
    "city": "Verden"
  },
  {
    "zip": "73094",
    "city": "Washita"
  },
  {
    "zip": "73096",
    "city": "Weatherford"
  },
  {
    "zip": "73102",
    "city": "Oklahoma City"
  },
  {
    "zip": "73430",
    "city": "Burneyville"
  },
  {
    "zip": "73433",
    "city": "Elmore City"
  },
  {
    "zip": "73438",
    "city": "Healdton"
  },
  {
    "zip": "73442",
    "city": "Loco"
  },
  {
    "zip": "73443",
    "city": "Lone Grove"
  },
  {
    "zip": "73446",
    "city": "Madill"
  },
  {
    "zip": "73450",
    "city": "Milburn"
  },
  {
    "zip": "73456",
    "city": "Ringling"
  },
  {
    "zip": "73458",
    "city": "Springer"
  },
  {
    "zip": "73459",
    "city": "Thackerville"
  },
  {
    "zip": "73461",
    "city": "Wapanucka"
  },
  {
    "zip": "73481",
    "city": "Ratliff City"
  },
  {
    "zip": "73488",
    "city": "Tussy"
  },
  {
    "zip": "73503",
    "city": "Fort Sill"
  },
  {
    "zip": "73523",
    "city": "Altus Afb"
  },
  {
    "zip": "73527",
    "city": "Cache"
  },
  {
    "zip": "73529",
    "city": "Comanche"
  },
  {
    "zip": "73531",
    "city": "Devol"
  },
  {
    "zip": "73540",
    "city": "Faxon"
  },
  {
    "zip": "73543",
    "city": "Geronimo"
  },
  {
    "zip": "73546",
    "city": "Grandfield"
  },
  {
    "zip": "73547",
    "city": "Granite"
  },
  {
    "zip": "73549",
    "city": "Headrick"
  },
  {
    "zip": "73552",
    "city": "Indiahoma"
  },
  {
    "zip": "73554",
    "city": "Mangum"
  },
  {
    "zip": "73559",
    "city": "Mountain Park"
  },
  {
    "zip": "73560",
    "city": "Olustee"
  },
  {
    "zip": "73562",
    "city": "Randlett"
  },
  {
    "zip": "73566",
    "city": "Snyder"
  },
  {
    "zip": "73569",
    "city": "Terral"
  },
  {
    "zip": "73571",
    "city": "Vinson"
  },
  {
    "zip": "73572",
    "city": "Walters"
  },
  {
    "zip": "73573",
    "city": "Waurika"
  },
  {
    "zip": "73620",
    "city": "Arapaho"
  },
  {
    "zip": "73622",
    "city": "Bessie"
  },
  {
    "zip": "73626",
    "city": "Canute"
  },
  {
    "zip": "73628",
    "city": "Cheyenne"
  },
  {
    "zip": "73632",
    "city": "Cordell"
  },
  {
    "zip": "73639",
    "city": "Custer City"
  },
  {
    "zip": "73641",
    "city": "Dill City"
  },
  {
    "zip": "73645",
    "city": "Erick"
  },
  {
    "zip": "73646",
    "city": "Fay"
  },
  {
    "zip": "73647",
    "city": "Foss"
  },
  {
    "zip": "73650",
    "city": "Hammon"
  },
  {
    "zip": "73654",
    "city": "Leedey"
  },
  {
    "zip": "73655",
    "city": "Lone Wolf"
  },
  {
    "zip": "73660",
    "city": "Reydon"
  },
  {
    "zip": "73661",
    "city": "Rocky"
  },
  {
    "zip": "73663",
    "city": "Seiling"
  },
  {
    "zip": "73664",
    "city": "Sentinel"
  },
  {
    "zip": "73667",
    "city": "Taloga"
  },
  {
    "zip": "73668",
    "city": "Texola"
  },
  {
    "zip": "73716",
    "city": "Aline"
  },
  {
    "zip": "73719",
    "city": "Amorita"
  },
  {
    "zip": "73726",
    "city": "Carmen"
  },
  {
    "zip": "73727",
    "city": "Carrier"
  },
  {
    "zip": "73729",
    "city": "Cleo Springs"
  },
  {
    "zip": "73731",
    "city": "Dacoma"
  },
  {
    "zip": "73739",
    "city": "Goltry"
  },
  {
    "zip": "73742",
    "city": "Hennessey"
  },
  {
    "zip": "73749",
    "city": "Jet"
  },
  {
    "zip": "73750",
    "city": "Kingfisher"
  },
  {
    "zip": "73754",
    "city": "Lahoma"
  },
  {
    "zip": "73755",
    "city": "Longdale"
  },
  {
    "zip": "73757",
    "city": "Lucien"
  },
  {
    "zip": "73760",
    "city": "Meno"
  },
  {
    "zip": "73761",
    "city": "Nash"
  },
  {
    "zip": "73762",
    "city": "Okarche"
  },
  {
    "zip": "73763",
    "city": "Okeene"
  },
  {
    "zip": "73766",
    "city": "Pond Creek"
  },
  {
    "zip": "73770",
    "city": "Southard"
  },
  {
    "zip": "73771",
    "city": "Wakita"
  },
  {
    "zip": "73772",
    "city": "Watonga"
  },
  {
    "zip": "73773",
    "city": "Waukomis"
  },
  {
    "zip": "73841",
    "city": "Fort Supply"
  },
  {
    "zip": "73843",
    "city": "Gage"
  },
  {
    "zip": "73844",
    "city": "Gate"
  },
  {
    "zip": "73848",
    "city": "Laverne"
  },
  {
    "zip": "73851",
    "city": "May"
  },
  {
    "zip": "73853",
    "city": "Mutual"
  },
  {
    "zip": "73858",
    "city": "Shattuck"
  },
  {
    "zip": "73859",
    "city": "Vici"
  },
  {
    "zip": "73860",
    "city": "Waynoka"
  },
  {
    "zip": "73931",
    "city": "Balko"
  },
  {
    "zip": "73933",
    "city": "Boise City"
  },
  {
    "zip": "73937",
    "city": "Felt"
  },
  {
    "zip": "73938",
    "city": "Forgan"
  },
  {
    "zip": "73939",
    "city": "Goodwell"
  },
  {
    "zip": "73942",
    "city": "Guymon"
  },
  {
    "zip": "73944",
    "city": "Hardesty"
  },
  {
    "zip": "73945",
    "city": "Hooker"
  },
  {
    "zip": "73947",
    "city": "Keyes"
  },
  {
    "zip": "73949",
    "city": "Texhoma"
  },
  {
    "zip": "73950",
    "city": "Turpin"
  },
  {
    "zip": "74002",
    "city": "Barnsdall"
  },
  {
    "zip": "74003",
    "city": "Bartlesville"
  },
  {
    "zip": "74011",
    "city": "Broken Arrow"
  },
  {
    "zip": "74015",
    "city": "Catoosa"
  },
  {
    "zip": "74017",
    "city": "Claremore"
  },
  {
    "zip": "74022",
    "city": "Copan"
  },
  {
    "zip": "74030",
    "city": "Drumright"
  },
  {
    "zip": "74033",
    "city": "Glenpool"
  },
  {
    "zip": "74035",
    "city": "Hominy"
  },
  {
    "zip": "74036",
    "city": "Inola"
  },
  {
    "zip": "74037",
    "city": "Jenks"
  },
  {
    "zip": "74039",
    "city": "Kellyville"
  },
  {
    "zip": "74041",
    "city": "Kiefer"
  },
  {
    "zip": "74042",
    "city": "Lenapah"
  },
  {
    "zip": "74044",
    "city": "Mannford"
  },
  {
    "zip": "74045",
    "city": "Maramec"
  },
  {
    "zip": "74048",
    "city": "Nowata"
  },
  {
    "zip": "74051",
    "city": "Ochelata"
  },
  {
    "zip": "74053",
    "city": "Oologah"
  },
  {
    "zip": "74055",
    "city": "Owasso"
  },
  {
    "zip": "74056",
    "city": "Pawhuska"
  },
  {
    "zip": "74060",
    "city": "Prue"
  },
  {
    "zip": "74066",
    "city": "Sapulpa"
  },
  {
    "zip": "74070",
    "city": "Skiatook"
  },
  {
    "zip": "74072",
    "city": "S Coffeyville"
  },
  {
    "zip": "74079",
    "city": "Stroud"
  },
  {
    "zip": "74080",
    "city": "Talala"
  },
  {
    "zip": "74081",
    "city": "Terlton"
  },
  {
    "zip": "74083",
    "city": "Wann"
  },
  {
    "zip": "74084",
    "city": "Wynona"
  },
  {
    "zip": "74103",
    "city": "Tulsa"
  },
  {
    "zip": "74301",
    "city": "Vinita"
  },
  {
    "zip": "74332",
    "city": "Big Cabin"
  },
  {
    "zip": "74333",
    "city": "Bluejacket"
  },
  {
    "zip": "74337",
    "city": "Chouteau"
  },
  {
    "zip": "74342",
    "city": "Eucha"
  },
  {
    "zip": "74344",
    "city": "Grove"
  },
  {
    "zip": "74359",
    "city": "Oaks"
  },
  {
    "zip": "74360",
    "city": "Picher"
  },
  {
    "zip": "74361",
    "city": "Pryor"
  },
  {
    "zip": "74363",
    "city": "Quapaw"
  },
  {
    "zip": "74364",
    "city": "Rose"
  },
  {
    "zip": "74366",
    "city": "Spavinaw"
  },
  {
    "zip": "74368",
    "city": "Twin Oaks"
  },
  {
    "zip": "74401",
    "city": "Muskogee"
  },
  {
    "zip": "74421",
    "city": "Beggs"
  },
  {
    "zip": "74422",
    "city": "Boynton"
  },
  {
    "zip": "74423",
    "city": "Braggs"
  },
  {
    "zip": "74425",
    "city": "Canadian"
  },
  {
    "zip": "74426",
    "city": "Checotah"
  },
  {
    "zip": "74427",
    "city": "Cookson"
  },
  {
    "zip": "74428",
    "city": "Council Hill"
  },
  {
    "zip": "74429",
    "city": "Coweta"
  },
  {
    "zip": "74434",
    "city": "Fort Gibson"
  },
  {
    "zip": "74437",
    "city": "Henryetta"
  },
  {
    "zip": "74441",
    "city": "Hulbert"
  },
  {
    "zip": "74447",
    "city": "Okmulgee"
  },
  {
    "zip": "74450",
    "city": "Oktaha"
  },
  {
    "zip": "74451",
    "city": "Park Hill"
  },
  {
    "zip": "74452",
    "city": "Peggs"
  },
  {
    "zip": "74455",
    "city": "Porum"
  },
  {
    "zip": "74461",
    "city": "Stidham"
  },
  {
    "zip": "74462",
    "city": "Stigler"
  },
  {
    "zip": "74464",
    "city": "Tahlequah"
  },
  {
    "zip": "74467",
    "city": "Wagoner"
  },
  {
    "zip": "74470",
    "city": "Webbers Falls"
  },
  {
    "zip": "74471",
    "city": "Welling"
  },
  {
    "zip": "74501",
    "city": "Mcalester"
  },
  {
    "zip": "74523",
    "city": "Antlers"
  },
  {
    "zip": "74528",
    "city": "Blanco"
  },
  {
    "zip": "74529",
    "city": "Blocker"
  },
  {
    "zip": "74534",
    "city": "Centrahoma"
  },
  {
    "zip": "74538",
    "city": "Coalgate"
  },
  {
    "zip": "74547",
    "city": "Hartshorne"
  },
  {
    "zip": "74549",
    "city": "Kiamichi Christian Mission"
  },
  {
    "zip": "74552",
    "city": "Kinta"
  },
  {
    "zip": "74557",
    "city": "Moyers"
  },
  {
    "zip": "74558",
    "city": "Nashoba"
  },
  {
    "zip": "74562",
    "city": "Rattan"
  },
  {
    "zip": "74567",
    "city": "Snow"
  },
  {
    "zip": "74569",
    "city": "Stringtown"
  },
  {
    "zip": "74571",
    "city": "Talihina"
  },
  {
    "zip": "74574",
    "city": "Tuskahoma"
  },
  {
    "zip": "74576",
    "city": "Wardville"
  },
  {
    "zip": "74601",
    "city": "Ponca City"
  },
  {
    "zip": "74632",
    "city": "Braman"
  },
  {
    "zip": "74641",
    "city": "Kaw City"
  },
  {
    "zip": "74644",
    "city": "Marland"
  },
  {
    "zip": "74646",
    "city": "Nardin"
  },
  {
    "zip": "74647",
    "city": "Newkirk"
  },
  {
    "zip": "74650",
    "city": "Ralston"
  },
  {
    "zip": "74651",
    "city": "Red Rock"
  },
  {
    "zip": "74652",
    "city": "Shidler"
  },
  {
    "zip": "74653",
    "city": "Tonkawa"
  },
  {
    "zip": "74726",
    "city": "Bokchito"
  },
  {
    "zip": "74729",
    "city": "Caddo"
  },
  {
    "zip": "74734",
    "city": "Eagletown"
  },
  {
    "zip": "74735",
    "city": "Fort Towson"
  },
  {
    "zip": "74741",
    "city": "Hendrix"
  },
  {
    "zip": "74745",
    "city": "Idabel"
  },
  {
    "zip": "74748",
    "city": "Kenefic"
  },
  {
    "zip": "74754",
    "city": "Ringold"
  },
  {
    "zip": "74755",
    "city": "Rufe"
  },
  {
    "zip": "74759",
    "city": "Soper"
  },
  {
    "zip": "74764",
    "city": "Valliant"
  },
  {
    "zip": "74826",
    "city": "Asher"
  },
  {
    "zip": "74829",
    "city": "Boley"
  },
  {
    "zip": "74831",
    "city": "Byars"
  },
  {
    "zip": "74833",
    "city": "Castle"
  },
  {
    "zip": "74839",
    "city": "Dustin"
  },
  {
    "zip": "74840",
    "city": "Earlsboro"
  },
  {
    "zip": "74843",
    "city": "Fitzhugh"
  },
  {
    "zip": "74848",
    "city": "Holdenville"
  },
  {
    "zip": "74849",
    "city": "Konawa"
  },
  {
    "zip": "74851",
    "city": "Mcloud"
  },
  {
    "zip": "74854",
    "city": "Maud"
  },
  {
    "zip": "74855",
    "city": "Meeker"
  },
  {
    "zip": "74857",
    "city": "Newalla"
  },
  {
    "zip": "74859",
    "city": "Okemah"
  },
  {
    "zip": "74860",
    "city": "Paden"
  },
  {
    "zip": "74865",
    "city": "Roff"
  },
  {
    "zip": "74867",
    "city": "Sasakwa"
  },
  {
    "zip": "74878",
    "city": "Wanette"
  },
  {
    "zip": "74880",
    "city": "Weleetka"
  },
  {
    "zip": "74883",
    "city": "Wetumka"
  },
  {
    "zip": "74884",
    "city": "Wewoka"
  },
  {
    "zip": "74901",
    "city": "Arkoma"
  },
  {
    "zip": "74902",
    "city": "Pocola"
  },
  {
    "zip": "74930",
    "city": "Bokoshe"
  },
  {
    "zip": "74931",
    "city": "Bunch"
  },
  {
    "zip": "74936",
    "city": "Gans"
  },
  {
    "zip": "74937",
    "city": "Heavener"
  },
  {
    "zip": "74939",
    "city": "Hodgen"
  },
  {
    "zip": "74944",
    "city": "Mccurtain"
  },
  {
    "zip": "74948",
    "city": "Muldrow"
  },
  {
    "zip": "74949",
    "city": "Muse"
  },
  {
    "zip": "74953",
    "city": "Poteau"
  },
  {
    "zip": "74955",
    "city": "Sallisaw"
  },
  {
    "zip": "74956",
    "city": "Shady Point"
  },
  {
    "zip": "74959",
    "city": "Spiro"
  },
  {
    "zip": "74962",
    "city": "Vian"
  },
  {
    "zip": "74964",
    "city": "Watts"
  },
  {
    "zip": "74966",
    "city": "Wister"
  },
  {
    "zip": "75019",
    "city": "Coppell"
  },
  {
    "zip": "75022",
    "city": "Flower Mound"
  },
  {
    "zip": "75032",
    "city": "Rockwall"
  },
  {
    "zip": "75033",
    "city": "Frisco"
  },
  {
    "zip": "75048",
    "city": "Sachse"
  },
  {
    "zip": "75050",
    "city": "Grand Prairie"
  },
  {
    "zip": "75056",
    "city": "The Colony"
  },
  {
    "zip": "75058",
    "city": "Gunter"
  },
  {
    "zip": "75065",
    "city": "Lake Dallas"
  },
  {
    "zip": "75068",
    "city": "Little Elm"
  },
  {
    "zip": "75069",
    "city": "Mckinney"
  },
  {
    "zip": "75076",
    "city": "Pottsboro"
  },
  {
    "zip": "75078",
    "city": "Prosper"
  },
  {
    "zip": "75080",
    "city": "Richardson"
  },
  {
    "zip": "75088",
    "city": "Rowlett"
  },
  {
    "zip": "75098",
    "city": "Wylie"
  },
  {
    "zip": "75109",
    "city": "Corsicana"
  },
  {
    "zip": "75115",
    "city": "Desoto"
  },
  {
    "zip": "75124",
    "city": "Eustace"
  },
  {
    "zip": "75125",
    "city": "Ferris"
  },
  {
    "zip": "75126",
    "city": "Forney"
  },
  {
    "zip": "75127",
    "city": "Fruitvale"
  },
  {
    "zip": "75135",
    "city": "Caddo Mills"
  },
  {
    "zip": "75140",
    "city": "Grand Saline"
  },
  {
    "zip": "75141",
    "city": "Hutchins"
  },
  {
    "zip": "75142",
    "city": "Kaufman"
  },
  {
    "zip": "75143",
    "city": "Kemp"
  },
  {
    "zip": "75147",
    "city": "Mabank"
  },
  {
    "zip": "75148",
    "city": "Malakoff"
  },
  {
    "zip": "75149",
    "city": "Mesquite"
  },
  {
    "zip": "75158",
    "city": "Scurry"
  },
  {
    "zip": "75159",
    "city": "Seagoville"
  },
  {
    "zip": "75163",
    "city": "Trinidad"
  },
  {
    "zip": "75165",
    "city": "Waxahachie"
  },
  {
    "zip": "75166",
    "city": "Lavon"
  },
  {
    "zip": "75169",
    "city": "Wills Point"
  },
  {
    "zip": "75180",
    "city": "Balch Springs"
  },
  {
    "zip": "75182",
    "city": "Sunnyvale"
  },
  {
    "zip": "75189",
    "city": "Royse City"
  },
  {
    "zip": "75411",
    "city": "Arthur City"
  },
  {
    "zip": "75412",
    "city": "Bagwell"
  },
  {
    "zip": "75415",
    "city": "Ben Franklin"
  },
  {
    "zip": "75416",
    "city": "Blossom"
  },
  {
    "zip": "75417",
    "city": "Bogata"
  },
  {
    "zip": "75418",
    "city": "Bonham"
  },
  {
    "zip": "75423",
    "city": "Celeste"
  },
  {
    "zip": "75433",
    "city": "Cumby"
  },
  {
    "zip": "75435",
    "city": "Deport"
  },
  {
    "zip": "75438",
    "city": "Dodd City"
  },
  {
    "zip": "75439",
    "city": "Ector"
  },
  {
    "zip": "75440",
    "city": "Emory"
  },
  {
    "zip": "75448",
    "city": "Klondike"
  },
  {
    "zip": "75449",
    "city": "Ladonia"
  },
  {
    "zip": "75450",
    "city": "Lake Creek"
  },
  {
    "zip": "75453",
    "city": "Lone Oak"
  },
  {
    "zip": "75454",
    "city": "Melissa"
  },
  {
    "zip": "75468",
    "city": "Pattonville"
  },
  {
    "zip": "75469",
    "city": "Pecan Gap"
  },
  {
    "zip": "75470",
    "city": "Petty"
  },
  {
    "zip": "75471",
    "city": "Pickton"
  },
  {
    "zip": "75472",
    "city": "Point"
  },
  {
    "zip": "75474",
    "city": "Quinlan"
  },
  {
    "zip": "75477",
    "city": "Roxton"
  },
  {
    "zip": "75480",
    "city": "Scroggins"
  },
  {
    "zip": "75481",
    "city": "Sulphur Bluff"
  },
  {
    "zip": "75487",
    "city": "Talco"
  },
  {
    "zip": "75488",
    "city": "Telephone"
  },
  {
    "zip": "75491",
    "city": "Whitewright"
  },
  {
    "zip": "75495",
    "city": "Van Alstyne"
  },
  {
    "zip": "75496",
    "city": "Wolfe City"
  },
  {
    "zip": "75497",
    "city": "Yantis"
  },
  {
    "zip": "75550",
    "city": "Annona"
  },
  {
    "zip": "75554",
    "city": "Avery"
  },
  {
    "zip": "75555",
    "city": "Bivins"
  },
  {
    "zip": "75556",
    "city": "Bloomburg"
  },
  {
    "zip": "75558",
    "city": "Cookville"
  },
  {
    "zip": "75561",
    "city": "Hooks"
  },
  {
    "zip": "75574",
    "city": "Simms"
  },
  {
    "zip": "75630",
    "city": "Avinger"
  },
  {
    "zip": "75631",
    "city": "Beckville"
  },
  {
    "zip": "75638",
    "city": "Daingerfield"
  },
  {
    "zip": "75639",
    "city": "De Berry"
  },
  {
    "zip": "75644",
    "city": "Gilmer"
  },
  {
    "zip": "75647",
    "city": "Gladewater"
  },
  {
    "zip": "75651",
    "city": "Harleton"
  },
  {
    "zip": "75656",
    "city": "Hughes Springs"
  },
  {
    "zip": "75661",
    "city": "Karnack"
  },
  {
    "zip": "75667",
    "city": "Laneville"
  },
  {
    "zip": "75668",
    "city": "Lone Star"
  },
  {
    "zip": "75681",
    "city": "Mount Enterprise"
  },
  {
    "zip": "75683",
    "city": "Ore City"
  },
  {
    "zip": "75691",
    "city": "Tatum"
  },
  {
    "zip": "75692",
    "city": "Waskom"
  },
  {
    "zip": "75750",
    "city": "Arp"
  },
  {
    "zip": "75754",
    "city": "Ben Wheeler"
  },
  {
    "zip": "75757",
    "city": "Bullard"
  },
  {
    "zip": "75763",
    "city": "Frankston"
  },
  {
    "zip": "75770",
    "city": "Larue"
  },
  {
    "zip": "75778",
    "city": "Murchison"
  },
  {
    "zip": "75784",
    "city": "Reklaw"
  },
  {
    "zip": "75785",
    "city": "Rusk"
  },
  {
    "zip": "75789",
    "city": "Troup"
  },
  {
    "zip": "75838",
    "city": "Donie"
  },
  {
    "zip": "75844",
    "city": "Grapeland"
  },
  {
    "zip": "75850",
    "city": "Leona"
  },
  {
    "zip": "75851",
    "city": "Lovelady"
  },
  {
    "zip": "75853",
    "city": "Montalba"
  },
  {
    "zip": "75859",
    "city": "Streetman"
  },
  {
    "zip": "75860",
    "city": "Teague"
  },
  {
    "zip": "75861",
    "city": "Tennessee Colony"
  },
  {
    "zip": "75901",
    "city": "Lufkin"
  },
  {
    "zip": "75926",
    "city": "Apple Springs"
  },
  {
    "zip": "75928",
    "city": "Bon Wier"
  },
  {
    "zip": "75929",
    "city": "Broaddus"
  },
  {
    "zip": "75931",
    "city": "Brookeland"
  },
  {
    "zip": "75933",
    "city": "Call"
  },
  {
    "zip": "75937",
    "city": "Chireno"
  },
  {
    "zip": "75938",
    "city": "Colmesneil"
  },
  {
    "zip": "75939",
    "city": "Corrigan"
  },
  {
    "zip": "75941",
    "city": "Diboll"
  },
  {
    "zip": "75948",
    "city": "Hemphill"
  },
  {
    "zip": "75954",
    "city": "Joaquin"
  },
  {
    "zip": "75961",
    "city": "Nacogdoches"
  },
  {
    "zip": "75969",
    "city": "Pollok"
  },
  {
    "zip": "75972",
    "city": "San Augustine"
  },
  {
    "zip": "75974",
    "city": "Tenaha"
  },
  {
    "zip": "75975",
    "city": "Timpson"
  },
  {
    "zip": "75977",
    "city": "Wiergate"
  },
  {
    "zip": "75980",
    "city": "Zavalla"
  },
  {
    "zip": "76020",
    "city": "Azle"
  },
  {
    "zip": "76028",
    "city": "Burleson"
  },
  {
    "zip": "76031",
    "city": "Cleburne"
  },
  {
    "zip": "76034",
    "city": "Colleyville"
  },
  {
    "zip": "76039",
    "city": "Euless"
  },
  {
    "zip": "76043",
    "city": "Glen Rose"
  },
  {
    "zip": "76044",
    "city": "Godley"
  },
  {
    "zip": "76048",
    "city": "Granbury"
  },
  {
    "zip": "76052",
    "city": "Haslet"
  },
  {
    "zip": "76053",
    "city": "Hurst"
  },
  {
    "zip": "76058",
    "city": "Joshua"
  },
  {
    "zip": "76060",
    "city": "Kennedale"
  },
  {
    "zip": "76064",
    "city": "Maypearl"
  },
  {
    "zip": "76066",
    "city": "Millsap"
  },
  {
    "zip": "76077",
    "city": "Rainbow"
  },
  {
    "zip": "76078",
    "city": "Rhome"
  },
  {
    "zip": "76082",
    "city": "Springtown"
  },
  {
    "zip": "76092",
    "city": "Southlake"
  },
  {
    "zip": "76093",
    "city": "Rio Vista"
  },
  {
    "zip": "76102",
    "city": "Fort Worth"
  },
  {
    "zip": "76117",
    "city": "Haltom City"
  },
  {
    "zip": "76127",
    "city": "Naval Air Station/ Jrb"
  },
  {
    "zip": "76180",
    "city": "North Richland Hills"
  },
  {
    "zip": "76227",
    "city": "Aubrey"
  },
  {
    "zip": "76238",
    "city": "Era"
  },
  {
    "zip": "76239",
    "city": "Forestburg"
  },
  {
    "zip": "76244",
    "city": "Keller"
  },
  {
    "zip": "76247",
    "city": "Justin"
  },
  {
    "zip": "76249",
    "city": "Krum"
  },
  {
    "zip": "76252",
    "city": "Muenster"
  },
  {
    "zip": "76255",
    "city": "Nocona"
  },
  {
    "zip": "76258",
    "city": "Pilot Point"
  },
  {
    "zip": "76259",
    "city": "Ponder"
  },
  {
    "zip": "76264",
    "city": "Sadler"
  },
  {
    "zip": "76265",
    "city": "Saint Jo"
  },
  {
    "zip": "76266",
    "city": "Sanger"
  },
  {
    "zip": "76301",
    "city": "Wichita Falls"
  },
  {
    "zip": "76311",
    "city": "Sheppard Afb"
  },
  {
    "zip": "76354",
    "city": "Burkburnett"
  },
  {
    "zip": "76360",
    "city": "Electra"
  },
  {
    "zip": "76363",
    "city": "Goree"
  },
  {
    "zip": "76367",
    "city": "Iowa Park"
  },
  {
    "zip": "76373",
    "city": "Oklaunion"
  },
  {
    "zip": "76388",
    "city": "Weinert"
  },
  {
    "zip": "76389",
    "city": "Windthorst"
  },
  {
    "zip": "76401",
    "city": "Stephenville"
  },
  {
    "zip": "76427",
    "city": "Bryson"
  },
  {
    "zip": "76431",
    "city": "Chico"
  },
  {
    "zip": "76432",
    "city": "Blanket"
  },
  {
    "zip": "76433",
    "city": "Bluff Dale"
  },
  {
    "zip": "76444",
    "city": "De Leon"
  },
  {
    "zip": "76445",
    "city": "Desdemona"
  },
  {
    "zip": "76448",
    "city": "Eastland"
  },
  {
    "zip": "76449",
    "city": "Graford"
  },
  {
    "zip": "76454",
    "city": "Gorman"
  },
  {
    "zip": "76455",
    "city": "Gustine"
  },
  {
    "zip": "76460",
    "city": "Loving"
  },
  {
    "zip": "76462",
    "city": "Lipan"
  },
  {
    "zip": "76463",
    "city": "Mingus"
  },
  {
    "zip": "76471",
    "city": "Rising Star"
  },
  {
    "zip": "76472",
    "city": "Santo"
  },
  {
    "zip": "76476",
    "city": "Tolar"
  },
  {
    "zip": "76483",
    "city": "Throckmorton"
  },
  {
    "zip": "76484",
    "city": "Palo Pinto"
  },
  {
    "zip": "76486",
    "city": "Perrin"
  },
  {
    "zip": "76487",
    "city": "Poolville"
  },
  {
    "zip": "76490",
    "city": "Whitt"
  },
  {
    "zip": "76491",
    "city": "Woodson"
  },
  {
    "zip": "76518",
    "city": "Buckholts"
  },
  {
    "zip": "76522",
    "city": "Copperas Cove"
  },
  {
    "zip": "76524",
    "city": "Eddy"
  },
  {
    "zip": "76525",
    "city": "Evant"
  },
  {
    "zip": "76537",
    "city": "Jarrell"
  },
  {
    "zip": "76539",
    "city": "Kempner"
  },
  {
    "zip": "76541",
    "city": "Killeen"
  },
  {
    "zip": "76544",
    "city": "Fort Hood"
  },
  {
    "zip": "76548",
    "city": "Harker Heights"
  },
  {
    "zip": "76550",
    "city": "Lampasas"
  },
  {
    "zip": "76554",
    "city": "Little River Academy"
  },
  {
    "zip": "76556",
    "city": "Milano"
  },
  {
    "zip": "76559",
    "city": "Nolanville"
  },
  {
    "zip": "76566",
    "city": "Purmela"
  },
  {
    "zip": "76567",
    "city": "Rockdale"
  },
  {
    "zip": "76571",
    "city": "Salado"
  },
  {
    "zip": "76578",
    "city": "Thrall"
  },
  {
    "zip": "76621",
    "city": "Abbott"
  },
  {
    "zip": "76622",
    "city": "Aquilla"
  },
  {
    "zip": "76626",
    "city": "Blooming Grove"
  },
  {
    "zip": "76627",
    "city": "Blum"
  },
  {
    "zip": "76629",
    "city": "Bremond"
  },
  {
    "zip": "76633",
    "city": "China Spring"
  },
  {
    "zip": "76637",
    "city": "Cranfills Gap"
  },
  {
    "zip": "76640",
    "city": "Elm Mott"
  },
  {
    "zip": "76642",
    "city": "Groesbeck"
  },
  {
    "zip": "76649",
    "city": "Iredell"
  },
  {
    "zip": "76651",
    "city": "Italy"
  },
  {
    "zip": "76652",
    "city": "Kopperl"
  },
  {
    "zip": "76653",
    "city": "Kosse"
  },
  {
    "zip": "76655",
    "city": "Lorena"
  },
  {
    "zip": "76656",
    "city": "Lott"
  },
  {
    "zip": "76661",
    "city": "Marlin"
  },
  {
    "zip": "76664",
    "city": "Mart"
  },
  {
    "zip": "76666",
    "city": "Mertens"
  },
  {
    "zip": "76667",
    "city": "Mexia"
  },
  {
    "zip": "76673",
    "city": "Mount Calm"
  },
  {
    "zip": "76676",
    "city": "Penelope"
  },
  {
    "zip": "76678",
    "city": "Prairie Hill"
  },
  {
    "zip": "76679",
    "city": "Purdon"
  },
  {
    "zip": "76682",
    "city": "Riesel"
  },
  {
    "zip": "76689",
    "city": "Valley Mills"
  },
  {
    "zip": "76690",
    "city": "Walnut Springs"
  },
  {
    "zip": "76693",
    "city": "Wortham"
  },
  {
    "zip": "76712",
    "city": "Woodway"
  },
  {
    "zip": "76801",
    "city": "Brownwood"
  },
  {
    "zip": "76820",
    "city": "Art"
  },
  {
    "zip": "76821",
    "city": "Ballinger"
  },
  {
    "zip": "76823",
    "city": "Bangs"
  },
  {
    "zip": "76827",
    "city": "Brookesmith"
  },
  {
    "zip": "76828",
    "city": "Burkett"
  },
  {
    "zip": "76831",
    "city": "Castell"
  },
  {
    "zip": "76836",
    "city": "Doole"
  },
  {
    "zip": "76841",
    "city": "Fort Mc Kavett"
  },
  {
    "zip": "76844",
    "city": "Goldthwaite"
  },
  {
    "zip": "76845",
    "city": "Gouldbusk"
  },
  {
    "zip": "76848",
    "city": "Hext"
  },
  {
    "zip": "76852",
    "city": "Lohn"
  },
  {
    "zip": "76853",
    "city": "Lometa"
  },
  {
    "zip": "76859",
    "city": "Menard"
  },
  {
    "zip": "76862",
    "city": "Millersview"
  },
  {
    "zip": "76864",
    "city": "Mullin"
  },
  {
    "zip": "76870",
    "city": "Priddy"
  },
  {
    "zip": "76871",
    "city": "Richland Springs"
  },
  {
    "zip": "76877",
    "city": "San Saba"
  },
  {
    "zip": "76878",
    "city": "Santa Anna"
  },
  {
    "zip": "76882",
    "city": "Talpa"
  },
  {
    "zip": "76883",
    "city": "Telegraph"
  },
  {
    "zip": "76884",
    "city": "Valera"
  },
  {
    "zip": "76885",
    "city": "Valley Spring"
  },
  {
    "zip": "76887",
    "city": "Voca"
  },
  {
    "zip": "76888",
    "city": "Voss"
  },
  {
    "zip": "76890",
    "city": "Zephyr"
  },
  {
    "zip": "76901",
    "city": "San Angelo"
  },
  {
    "zip": "76908",
    "city": "Goodfellow Afb"
  },
  {
    "zip": "76933",
    "city": "Bronte"
  },
  {
    "zip": "76934",
    "city": "Carlsbad"
  },
  {
    "zip": "76935",
    "city": "Christoval"
  },
  {
    "zip": "76937",
    "city": "Eola"
  },
  {
    "zip": "76940",
    "city": "Mereta"
  },
  {
    "zip": "76941",
    "city": "Mertzon"
  },
  {
    "zip": "76943",
    "city": "Ozona"
  },
  {
    "zip": "76945",
    "city": "Robert Lee"
  },
  {
    "zip": "76949",
    "city": "Silver"
  },
  {
    "zip": "76951",
    "city": "Sterling City"
  },
  {
    "zip": "76955",
    "city": "Vancourt"
  },
  {
    "zip": "77301",
    "city": "Conroe"
  },
  {
    "zip": "77315",
    "city": "North Houston"
  },
  {
    "zip": "77331",
    "city": "Coldspring"
  },
  {
    "zip": "77336",
    "city": "Huffman"
  },
  {
    "zip": "77338",
    "city": "Humble"
  },
  {
    "zip": "77357",
    "city": "New Caney"
  },
  {
    "zip": "77364",
    "city": "Pointblank"
  },
  {
    "zip": "77372",
    "city": "Splendora"
  },
  {
    "zip": "77373",
    "city": "Spring"
  },
  {
    "zip": "77375",
    "city": "Tomball"
  },
  {
    "zip": "77417",
    "city": "Beasley"
  },
  {
    "zip": "77420",
    "city": "Boling"
  },
  {
    "zip": "77422",
    "city": "Brazoria"
  },
  {
    "zip": "77423",
    "city": "Brookshire"
  },
  {
    "zip": "77426",
    "city": "Chappell Hill"
  },
  {
    "zip": "77430",
    "city": "Damon"
  },
  {
    "zip": "77432",
    "city": "Danevang"
  },
  {
    "zip": "77435",
    "city": "East Bernard"
  },
  {
    "zip": "77437",
    "city": "El Campo"
  },
  {
    "zip": "77441",
    "city": "Fulshear"
  },
  {
    "zip": "77447",
    "city": "Hockley"
  },
  {
    "zip": "77448",
    "city": "Hungerford"
  },
  {
    "zip": "77449",
    "city": "Katy"
  },
  {
    "zip": "77459",
    "city": "Missouri City"
  },
  {
    "zip": "77461",
    "city": "Needville"
  },
  {
    "zip": "77465",
    "city": "Palacios"
  },
  {
    "zip": "77468",
    "city": "Pledger"
  },
  {
    "zip": "77471",
    "city": "Rosenberg"
  },
  {
    "zip": "77474",
    "city": "Sealy"
  },
  {
    "zip": "77478",
    "city": "Sugar Land"
  },
  {
    "zip": "77480",
    "city": "Sweeny"
  },
  {
    "zip": "77482",
    "city": "Van Vleck"
  },
  {
    "zip": "77484",
    "city": "Waller"
  },
  {
    "zip": "77485",
    "city": "Wallis"
  },
  {
    "zip": "77514",
    "city": "Anahuac"
  },
  {
    "zip": "77515",
    "city": "Angleton"
  },
  {
    "zip": "77518",
    "city": "Bacliff"
  },
  {
    "zip": "77519",
    "city": "Batson"
  },
  {
    "zip": "77520",
    "city": "Baytown"
  },
  {
    "zip": "77530",
    "city": "Channelview"
  },
  {
    "zip": "77531",
    "city": "Clute"
  },
  {
    "zip": "77538",
    "city": "Devers"
  },
  {
    "zip": "77546",
    "city": "Friendswood"
  },
  {
    "zip": "77547",
    "city": "Galena Park"
  },
  {
    "zip": "77560",
    "city": "Hankamer"
  },
  {
    "zip": "77565",
    "city": "Kemah"
  },
  {
    "zip": "77566",
    "city": "Lake Jackson"
  },
  {
    "zip": "77568",
    "city": "La Marque"
  },
  {
    "zip": "77573",
    "city": "League City"
  },
  {
    "zip": "77581",
    "city": "Pearland"
  },
  {
    "zip": "77583",
    "city": "Rosharon"
  },
  {
    "zip": "77587",
    "city": "South Houston"
  },
  {
    "zip": "77590",
    "city": "Texas City"
  },
  {
    "zip": "77597",
    "city": "Wallisville"
  },
  {
    "zip": "77611",
    "city": "Bridge City"
  },
  {
    "zip": "77612",
    "city": "Buna"
  },
  {
    "zip": "77616",
    "city": "Fred"
  },
  {
    "zip": "77619",
    "city": "Groves"
  },
  {
    "zip": "77622",
    "city": "Hamshire"
  },
  {
    "zip": "77623",
    "city": "High Island"
  },
  {
    "zip": "77624",
    "city": "Hillister"
  },
  {
    "zip": "77625",
    "city": "Kountze"
  },
  {
    "zip": "77627",
    "city": "Nederland"
  },
  {
    "zip": "77640",
    "city": "Port Arthur"
  },
  {
    "zip": "77651",
    "city": "Port Neches"
  },
  {
    "zip": "77655",
    "city": "Sabine Pass"
  },
  {
    "zip": "77656",
    "city": "Silsbee"
  },
  {
    "zip": "77659",
    "city": "Sour Lake"
  },
  {
    "zip": "77660",
    "city": "Spurger"
  },
  {
    "zip": "77662",
    "city": "Vidor"
  },
  {
    "zip": "77665",
    "city": "Winnie"
  },
  {
    "zip": "77831",
    "city": "Bedias"
  },
  {
    "zip": "77833",
    "city": "Brenham"
  },
  {
    "zip": "77837",
    "city": "Calvert"
  },
  {
    "zip": "77840",
    "city": "College Station"
  },
  {
    "zip": "77853",
    "city": "Dime Box"
  },
  {
    "zip": "77859",
    "city": "Hearne"
  },
  {
    "zip": "77865",
    "city": "Marquez"
  },
  {
    "zip": "77868",
    "city": "Navasota"
  },
  {
    "zip": "77871",
    "city": "Normangee"
  },
  {
    "zip": "77872",
    "city": "North Zulch"
  },
  {
    "zip": "77954",
    "city": "Cuero"
  },
  {
    "zip": "77962",
    "city": "Ganado"
  },
  {
    "zip": "77963",
    "city": "Goliad"
  },
  {
    "zip": "77964",
    "city": "Hallettsville"
  },
  {
    "zip": "77971",
    "city": "Lolita"
  },
  {
    "zip": "77974",
    "city": "Meyersville"
  },
  {
    "zip": "77979",
    "city": "Port Lavaca"
  },
  {
    "zip": "77983",
    "city": "Seadrift"
  },
  {
    "zip": "77984",
    "city": "Shiner"
  },
  {
    "zip": "77994",
    "city": "Westhoff"
  },
  {
    "zip": "77995",
    "city": "Yoakum"
  },
  {
    "zip": "78002",
    "city": "Atascosa"
  },
  {
    "zip": "78003",
    "city": "Bandera"
  },
  {
    "zip": "78004",
    "city": "Bergheim"
  },
  {
    "zip": "78005",
    "city": "Bigfoot"
  },
  {
    "zip": "78006",
    "city": "Boerne"
  },
  {
    "zip": "78007",
    "city": "Calliham"
  },
  {
    "zip": "78009",
    "city": "Castroville"
  },
  {
    "zip": "78014",
    "city": "Cotulla"
  },
  {
    "zip": "78016",
    "city": "Devine"
  },
  {
    "zip": "78017",
    "city": "Dilley"
  },
  {
    "zip": "78021",
    "city": "Fowlerton"
  },
  {
    "zip": "78022",
    "city": "George West"
  },
  {
    "zip": "78023",
    "city": "Helotes"
  },
  {
    "zip": "78025",
    "city": "Ingram"
  },
  {
    "zip": "78026",
    "city": "Jourdanton"
  },
  {
    "zip": "78027",
    "city": "Kendalia"
  },
  {
    "zip": "78028",
    "city": "Kerrville"
  },
  {
    "zip": "78039",
    "city": "La Coste"
  },
  {
    "zip": "78052",
    "city": "Lytle"
  },
  {
    "zip": "78056",
    "city": "Mico"
  },
  {
    "zip": "78059",
    "city": "Natalia"
  },
  {
    "zip": "78061",
    "city": "Pearsall"
  },
  {
    "zip": "78063",
    "city": "Pipe Creek"
  },
  {
    "zip": "78065",
    "city": "Poteet"
  },
  {
    "zip": "78066",
    "city": "Rio Medina"
  },
  {
    "zip": "78067",
    "city": "San Ygnacio"
  },
  {
    "zip": "78070",
    "city": "Spring Branch"
  },
  {
    "zip": "78073",
    "city": "Von Ormy"
  },
  {
    "zip": "78076",
    "city": "Zapata"
  },
  {
    "zip": "78101",
    "city": "Adkins"
  },
  {
    "zip": "78102",
    "city": "Beeville"
  },
  {
    "zip": "78108",
    "city": "Cibolo"
  },
  {
    "zip": "78111",
    "city": "Ecleto"
  },
  {
    "zip": "78112",
    "city": "Elmendorf"
  },
  {
    "zip": "78114",
    "city": "Floresville"
  },
  {
    "zip": "78118",
    "city": "Karnes City"
  },
  {
    "zip": "78119",
    "city": "Kenedy"
  },
  {
    "zip": "78121",
    "city": "La Vernia"
  },
  {
    "zip": "78123",
    "city": "Mc Queeney"
  },
  {
    "zip": "78130",
    "city": "New Braunfels"
  },
  {
    "zip": "78133",
    "city": "Canyon Lake"
  },
  {
    "zip": "78140",
    "city": "Nixon"
  },
  {
    "zip": "78141",
    "city": "Nordheim"
  },
  {
    "zip": "78148",
    "city": "Universal City"
  },
  {
    "zip": "78150",
    "city": "Randolph A F B"
  },
  {
    "zip": "78151",
    "city": "Runge"
  },
  {
    "zip": "78152",
    "city": "Saint Hedwig"
  },
  {
    "zip": "78154",
    "city": "Schertz"
  },
  {
    "zip": "78155",
    "city": "Seguin"
  },
  {
    "zip": "78159",
    "city": "Smiley"
  },
  {
    "zip": "78160",
    "city": "Stockdale"
  },
  {
    "zip": "78161",
    "city": "Sutherland Springs"
  },
  {
    "zip": "78163",
    "city": "Bulverde"
  },
  {
    "zip": "78236",
    "city": "Lackland A F B"
  },
  {
    "zip": "78330",
    "city": "Agua Dulce"
  },
  {
    "zip": "78332",
    "city": "Alice"
  },
  {
    "zip": "78336",
    "city": "Aransas Pass"
  },
  {
    "zip": "78344",
    "city": "Bruni"
  },
  {
    "zip": "78349",
    "city": "Concepcion"
  },
  {
    "zip": "78353",
    "city": "Encino"
  },
  {
    "zip": "78355",
    "city": "Falfurrias"
  },
  {
    "zip": "78357",
    "city": "Freer"
  },
  {
    "zip": "78360",
    "city": "Guerra"
  },
  {
    "zip": "78361",
    "city": "Hebbronville"
  },
  {
    "zip": "78368",
    "city": "Mathis"
  },
  {
    "zip": "78369",
    "city": "Mirando City"
  },
  {
    "zip": "78370",
    "city": "Odem"
  },
  {
    "zip": "78372",
    "city": "Orange Grove"
  },
  {
    "zip": "78373",
    "city": "Port Aransas"
  },
  {
    "zip": "78375",
    "city": "Premont"
  },
  {
    "zip": "78376",
    "city": "Realitos"
  },
  {
    "zip": "78377",
    "city": "Refugio"
  },
  {
    "zip": "78379",
    "city": "Riviera"
  },
  {
    "zip": "78380",
    "city": "Robstown"
  },
  {
    "zip": "78383",
    "city": "Sandia"
  },
  {
    "zip": "78384",
    "city": "San Diego"
  },
  {
    "zip": "78387",
    "city": "Sinton"
  },
  {
    "zip": "78391",
    "city": "Tynan"
  },
  {
    "zip": "78401",
    "city": "Corpus Christi"
  },
  {
    "zip": "78501",
    "city": "Mcallen"
  },
  {
    "zip": "78536",
    "city": "Delmita"
  },
  {
    "zip": "78537",
    "city": "Donna"
  },
  {
    "zip": "78538",
    "city": "Edcouch"
  },
  {
    "zip": "78550",
    "city": "Harlingen"
  },
  {
    "zip": "78559",
    "city": "La Feria"
  },
  {
    "zip": "78560",
    "city": "La Joya"
  },
  {
    "zip": "78564",
    "city": "Lopeno"
  },
  {
    "zip": "78566",
    "city": "Los Fresnos"
  },
  {
    "zip": "78569",
    "city": "Lyford"
  },
  {
    "zip": "78570",
    "city": "Mercedes"
  },
  {
    "zip": "78575",
    "city": "Olmito"
  },
  {
    "zip": "78576",
    "city": "Penitas"
  },
  {
    "zip": "78577",
    "city": "Pharr"
  },
  {
    "zip": "78578",
    "city": "Port Isabel"
  },
  {
    "zip": "78582",
    "city": "Rio Grande City"
  },
  {
    "zip": "78583",
    "city": "Rio Hondo"
  },
  {
    "zip": "78584",
    "city": "Roma"
  },
  {
    "zip": "78586",
    "city": "San Benito"
  },
  {
    "zip": "78588",
    "city": "San Isidro"
  },
  {
    "zip": "78591",
    "city": "Santa Elena"
  },
  {
    "zip": "78593",
    "city": "Santa Rosa"
  },
  {
    "zip": "78595",
    "city": "Sullivan City"
  },
  {
    "zip": "78596",
    "city": "Weslaco"
  },
  {
    "zip": "78597",
    "city": "South Padre Island"
  },
  {
    "zip": "78605",
    "city": "Bertram"
  },
  {
    "zip": "78608",
    "city": "Briggs"
  },
  {
    "zip": "78609",
    "city": "Buchanan Dam"
  },
  {
    "zip": "78611",
    "city": "Burnet"
  },
  {
    "zip": "78612",
    "city": "Cedar Creek"
  },
  {
    "zip": "78613",
    "city": "Cedar Park"
  },
  {
    "zip": "78614",
    "city": "Cost"
  },
  {
    "zip": "78615",
    "city": "Coupland"
  },
  {
    "zip": "78617",
    "city": "Del Valle"
  },
  {
    "zip": "78618",
    "city": "Doss"
  },
  {
    "zip": "78620",
    "city": "Dripping Springs"
  },
  {
    "zip": "78623",
    "city": "Fischer"
  },
  {
    "zip": "78634",
    "city": "Hutto"
  },
  {
    "zip": "78635",
    "city": "Hye"
  },
  {
    "zip": "78638",
    "city": "Kingsbury"
  },
  {
    "zip": "78641",
    "city": "Leander"
  },
  {
    "zip": "78642",
    "city": "Liberty Hill"
  },
  {
    "zip": "78643",
    "city": "Llano"
  },
  {
    "zip": "78644",
    "city": "Lockhart"
  },
  {
    "zip": "78650",
    "city": "Mc Dade"
  },
  {
    "zip": "78652",
    "city": "Manchaca"
  },
  {
    "zip": "78655",
    "city": "Martindale"
  },
  {
    "zip": "78657",
    "city": "Horseshoe Bay"
  },
  {
    "zip": "78659",
    "city": "Paige"
  },
  {
    "zip": "78660",
    "city": "Pflugerville"
  },
  {
    "zip": "78663",
    "city": "Round Mountain"
  },
  {
    "zip": "78664",
    "city": "Round Rock"
  },
  {
    "zip": "78666",
    "city": "San Marcos"
  },
  {
    "zip": "78669",
    "city": "Spicewood"
  },
  {
    "zip": "78672",
    "city": "Tow"
  },
  {
    "zip": "78676",
    "city": "Wimberley"
  },
  {
    "zip": "78677",
    "city": "Wrightsboro"
  },
  {
    "zip": "78801",
    "city": "Uvalde"
  },
  {
    "zip": "78827",
    "city": "Asherton"
  },
  {
    "zip": "78828",
    "city": "Barksdale"
  },
  {
    "zip": "78830",
    "city": "Big Wells"
  },
  {
    "zip": "78832",
    "city": "Brackettville"
  },
  {
    "zip": "78833",
    "city": "Camp Wood"
  },
  {
    "zip": "78834",
    "city": "Carrizo Springs"
  },
  {
    "zip": "78838",
    "city": "Concan"
  },
  {
    "zip": "78843",
    "city": "Laughlin A F B"
  },
  {
    "zip": "78850",
    "city": "D Hanis"
  },
  {
    "zip": "78852",
    "city": "Eagle Pass"
  },
  {
    "zip": "78861",
    "city": "Hondo"
  },
  {
    "zip": "78870",
    "city": "Knippa"
  },
  {
    "zip": "78873",
    "city": "Leakey"
  },
  {
    "zip": "78877",
    "city": "Quemado"
  },
  {
    "zip": "78879",
    "city": "Rio Frio"
  },
  {
    "zip": "78880",
    "city": "Rocksprings"
  },
  {
    "zip": "78881",
    "city": "Sabinal"
  },
  {
    "zip": "78883",
    "city": "Tarpley"
  },
  {
    "zip": "78884",
    "city": "Utopia"
  },
  {
    "zip": "78885",
    "city": "Vanderpool"
  },
  {
    "zip": "78886",
    "city": "Yancey"
  },
  {
    "zip": "78931",
    "city": "Bleiblerville"
  },
  {
    "zip": "78932",
    "city": "Carmine"
  },
  {
    "zip": "78933",
    "city": "Cat Spring"
  },
  {
    "zip": "78935",
    "city": "Alleyton"
  },
  {
    "zip": "78938",
    "city": "Ellinger"
  },
  {
    "zip": "78941",
    "city": "Flatonia"
  },
  {
    "zip": "78942",
    "city": "Giddings"
  },
  {
    "zip": "78949",
    "city": "Muldoon"
  },
  {
    "zip": "78953",
    "city": "Rosanky"
  },
  {
    "zip": "78956",
    "city": "Schulenburg"
  },
  {
    "zip": "78959",
    "city": "Waelder"
  },
  {
    "zip": "78962",
    "city": "Weimar"
  },
  {
    "zip": "79005",
    "city": "Booker"
  },
  {
    "zip": "79007",
    "city": "Borger"
  },
  {
    "zip": "79009",
    "city": "Bovina"
  },
  {
    "zip": "79011",
    "city": "Briscoe"
  },
  {
    "zip": "79019",
    "city": "Claude"
  },
  {
    "zip": "79022",
    "city": "Dalhart"
  },
  {
    "zip": "79027",
    "city": "Dimmitt"
  },
  {
    "zip": "79031",
    "city": "Earth"
  },
  {
    "zip": "79034",
    "city": "Follett"
  },
  {
    "zip": "79035",
    "city": "Friona"
  },
  {
    "zip": "79036",
    "city": "Fritch"
  },
  {
    "zip": "79039",
    "city": "Groom"
  },
  {
    "zip": "79040",
    "city": "Gruver"
  },
  {
    "zip": "79041",
    "city": "Hale Center"
  },
  {
    "zip": "79046",
    "city": "Higgins"
  },
  {
    "zip": "79052",
    "city": "Kress"
  },
  {
    "zip": "79056",
    "city": "Lipscomb"
  },
  {
    "zip": "79058",
    "city": "Masterson"
  },
  {
    "zip": "79061",
    "city": "Mobeetie"
  },
  {
    "zip": "79064",
    "city": "Olton"
  },
  {
    "zip": "79065",
    "city": "Pampa"
  },
  {
    "zip": "79068",
    "city": "Panhandle"
  },
  {
    "zip": "79070",
    "city": "Perryton"
  },
  {
    "zip": "79079",
    "city": "Shamrock"
  },
  {
    "zip": "79080",
    "city": "Skellytown"
  },
  {
    "zip": "79081",
    "city": "Spearman"
  },
  {
    "zip": "79082",
    "city": "Springlake"
  },
  {
    "zip": "79086",
    "city": "Sunray"
  },
  {
    "zip": "79087",
    "city": "Texline"
  },
  {
    "zip": "79088",
    "city": "Tulia"
  },
  {
    "zip": "79092",
    "city": "Vega"
  },
  {
    "zip": "79097",
    "city": "White Deer"
  },
  {
    "zip": "79098",
    "city": "Wildorado"
  },
  {
    "zip": "79101",
    "city": "Amarillo"
  },
  {
    "zip": "79201",
    "city": "Childress"
  },
  {
    "zip": "79223",
    "city": "Cee Vee"
  },
  {
    "zip": "79227",
    "city": "Crowell"
  },
  {
    "zip": "79234",
    "city": "Flomot"
  },
  {
    "zip": "79235",
    "city": "Floydada"
  },
  {
    "zip": "79237",
    "city": "Hedley"
  },
  {
    "zip": "79240",
    "city": "Lelia Lake"
  },
  {
    "zip": "79241",
    "city": "Lockney"
  },
  {
    "zip": "79244",
    "city": "Matador"
  },
  {
    "zip": "79251",
    "city": "Quail"
  },
  {
    "zip": "79252",
    "city": "Quanah"
  },
  {
    "zip": "79255",
    "city": "Quitaque"
  },
  {
    "zip": "79256",
    "city": "Roaring Springs"
  },
  {
    "zip": "79257",
    "city": "Silverton"
  },
  {
    "zip": "79259",
    "city": "Tell"
  },
  {
    "zip": "79311",
    "city": "Abernathy"
  },
  {
    "zip": "79313",
    "city": "Anton"
  },
  {
    "zip": "79320",
    "city": "Bula"
  },
  {
    "zip": "79322",
    "city": "Crosbyton"
  },
  {
    "zip": "79323",
    "city": "Denver City"
  },
  {
    "zip": "79324",
    "city": "Enochs"
  },
  {
    "zip": "79326",
    "city": "Fieldton"
  },
  {
    "zip": "79329",
    "city": "Idalou"
  },
  {
    "zip": "79330",
    "city": "Justiceburg"
  },
  {
    "zip": "79331",
    "city": "Lamesa"
  },
  {
    "zip": "79336",
    "city": "Levelland"
  },
  {
    "zip": "79339",
    "city": "Littlefield"
  },
  {
    "zip": "79342",
    "city": "Loop"
  },
  {
    "zip": "79343",
    "city": "Lorenzo"
  },
  {
    "zip": "79347",
    "city": "Muleshoe"
  },
  {
    "zip": "79351",
    "city": "Odonnell"
  },
  {
    "zip": "79353",
    "city": "Pep"
  },
  {
    "zip": "79356",
    "city": "Post"
  },
  {
    "zip": "79357",
    "city": "Ralls"
  },
  {
    "zip": "79358",
    "city": "Ropesville"
  },
  {
    "zip": "79359",
    "city": "Seagraves"
  },
  {
    "zip": "79363",
    "city": "Shallowater"
  },
  {
    "zip": "79364",
    "city": "Slaton"
  },
  {
    "zip": "79366",
    "city": "Ransom Canyon"
  },
  {
    "zip": "79370",
    "city": "Spur"
  },
  {
    "zip": "79371",
    "city": "Sudan"
  },
  {
    "zip": "79373",
    "city": "Tahoka"
  },
  {
    "zip": "79376",
    "city": "Tokio"
  },
  {
    "zip": "79382",
    "city": "Wolfforth"
  },
  {
    "zip": "79401",
    "city": "Lubbock"
  },
  {
    "zip": "79502",
    "city": "Aspermont"
  },
  {
    "zip": "79504",
    "city": "Baird"
  },
  {
    "zip": "79505",
    "city": "Benjamin"
  },
  {
    "zip": "79512",
    "city": "Colorado City"
  },
  {
    "zip": "79517",
    "city": "Fluvanna"
  },
  {
    "zip": "79526",
    "city": "Hermleigh"
  },
  {
    "zip": "79528",
    "city": "Jayton"
  },
  {
    "zip": "79530",
    "city": "Lawn"
  },
  {
    "zip": "79533",
    "city": "Lueders"
  },
  {
    "zip": "79534",
    "city": "Mc Caulley"
  },
  {
    "zip": "79535",
    "city": "Maryneal"
  },
  {
    "zip": "79536",
    "city": "Merkel"
  },
  {
    "zip": "79537",
    "city": "Nolan"
  },
  {
    "zip": "79538",
    "city": "Novice"
  },
  {
    "zip": "79540",
    "city": "Old Glory"
  },
  {
    "zip": "79541",
    "city": "Ovalo"
  },
  {
    "zip": "79546",
    "city": "Rotan"
  },
  {
    "zip": "79547",
    "city": "Rule"
  },
  {
    "zip": "79563",
    "city": "Tye"
  },
  {
    "zip": "79567",
    "city": "Winters"
  },
  {
    "zip": "79607",
    "city": "Dyess Afb"
  },
  {
    "zip": "79713",
    "city": "Ackerly"
  },
  {
    "zip": "79718",
    "city": "Balmorhea"
  },
  {
    "zip": "79720",
    "city": "Big Spring"
  },
  {
    "zip": "79734",
    "city": "Fort Davis"
  },
  {
    "zip": "79735",
    "city": "Fort Stockton"
  },
  {
    "zip": "79738",
    "city": "Gail"
  },
  {
    "zip": "79740",
    "city": "Girvin"
  },
  {
    "zip": "79741",
    "city": "Goldsmith"
  },
  {
    "zip": "79748",
    "city": "Knott"
  },
  {
    "zip": "79749",
    "city": "Lenorah"
  },
  {
    "zip": "79752",
    "city": "Mc Camey"
  },
  {
    "zip": "79756",
    "city": "Monahans"
  },
  {
    "zip": "79772",
    "city": "Pecos"
  },
  {
    "zip": "79783",
    "city": "Tarzan"
  },
  {
    "zip": "79835",
    "city": "Canutillo"
  },
  {
    "zip": "79836",
    "city": "Clint"
  },
  {
    "zip": "79839",
    "city": "Fort Hancock"
  },
  {
    "zip": "79843",
    "city": "Marfa"
  },
  {
    "zip": "79845",
    "city": "Presidio"
  },
  {
    "zip": "79847",
    "city": "Salt Flat"
  },
  {
    "zip": "79849",
    "city": "San Elizario"
  },
  {
    "zip": "79852",
    "city": "Terlingua"
  },
  {
    "zip": "79916",
    "city": "Fort Bliss"
  },
  {
    "zip": "80002",
    "city": "Arvada"
  },
  {
    "zip": "80020",
    "city": "Broomfield"
  },
  {
    "zip": "80022",
    "city": "Commerce City"
  },
  {
    "zip": "80033",
    "city": "Wheat Ridge"
  },
  {
    "zip": "80104",
    "city": "Castle Rock"
  },
  {
    "zip": "80105",
    "city": "Deer Trail"
  },
  {
    "zip": "80118",
    "city": "Larkspur"
  },
  {
    "zip": "80133",
    "city": "Palmer Lake"
  },
  {
    "zip": "80423",
    "city": "Bond"
  },
  {
    "zip": "80433",
    "city": "Conifer"
  },
  {
    "zip": "80447",
    "city": "Grand Lake"
  },
  {
    "zip": "80449",
    "city": "Hartsel"
  },
  {
    "zip": "80452",
    "city": "Idaho Springs"
  },
  {
    "zip": "80459",
    "city": "Kremmling"
  },
  {
    "zip": "80461",
    "city": "Leadville"
  },
  {
    "zip": "80463",
    "city": "Mc Coy"
  },
  {
    "zip": "80470",
    "city": "Pine"
  },
  {
    "zip": "80474",
    "city": "Rollinsville"
  },
  {
    "zip": "80479",
    "city": "Toponas"
  },
  {
    "zip": "80487",
    "city": "Steamboat Springs"
  },
  {
    "zip": "80498",
    "city": "Silverthorne"
  },
  {
    "zip": "80501",
    "city": "Longmont"
  },
  {
    "zip": "80510",
    "city": "Allenspark"
  },
  {
    "zip": "80512",
    "city": "Bellvue"
  },
  {
    "zip": "80513",
    "city": "Berthoud"
  },
  {
    "zip": "80514",
    "city": "Dacono"
  },
  {
    "zip": "80517",
    "city": "Estes Park"
  },
  {
    "zip": "80521",
    "city": "Fort Collins"
  },
  {
    "zip": "80543",
    "city": "Milliken"
  },
  {
    "zip": "80545",
    "city": "Red Feather Lakes"
  },
  {
    "zip": "80610",
    "city": "Ault"
  },
  {
    "zip": "80611",
    "city": "Briggsdale"
  },
  {
    "zip": "80612",
    "city": "Carr"
  },
  {
    "zip": "80621",
    "city": "Fort Lupton"
  },
  {
    "zip": "80643",
    "city": "Keenesburg"
  },
  {
    "zip": "80648",
    "city": "Nunn"
  },
  {
    "zip": "80652",
    "city": "Roggen"
  },
  {
    "zip": "80653",
    "city": "Weldona"
  },
  {
    "zip": "80701",
    "city": "Fort Morgan"
  },
  {
    "zip": "80705",
    "city": "Log Lane Village"
  },
  {
    "zip": "80723",
    "city": "Brush"
  },
  {
    "zip": "80726",
    "city": "Crook"
  },
  {
    "zip": "80727",
    "city": "Eckley"
  },
  {
    "zip": "80731",
    "city": "Haxtun"
  },
  {
    "zip": "80733",
    "city": "Hillrose"
  },
  {
    "zip": "80735",
    "city": "Idalia"
  },
  {
    "zip": "80736",
    "city": "Iliff"
  },
  {
    "zip": "80737",
    "city": "Julesburg"
  },
  {
    "zip": "80740",
    "city": "Lindon"
  },
  {
    "zip": "80741",
    "city": "Merino"
  },
  {
    "zip": "80742",
    "city": "New Raymer"
  },
  {
    "zip": "80745",
    "city": "Padroni"
  },
  {
    "zip": "80747",
    "city": "Peetz"
  },
  {
    "zip": "80757",
    "city": "Woodrow"
  },
  {
    "zip": "80804",
    "city": "Arriba"
  },
  {
    "zip": "80808",
    "city": "Calhan"
  },
  {
    "zip": "80810",
    "city": "Cheyenne Wells"
  },
  {
    "zip": "80815",
    "city": "Flagler"
  },
  {
    "zip": "80820",
    "city": "Guffey"
  },
  {
    "zip": "80822",
    "city": "Joes"
  },
  {
    "zip": "80823",
    "city": "Karval"
  },
  {
    "zip": "80824",
    "city": "Kirk"
  },
  {
    "zip": "80825",
    "city": "Kit Carson"
  },
  {
    "zip": "80828",
    "city": "Limon"
  },
  {
    "zip": "80829",
    "city": "Manitou Springs"
  },
  {
    "zip": "80830",
    "city": "Matheson"
  },
  {
    "zip": "80831",
    "city": "Peyton"
  },
  {
    "zip": "80832",
    "city": "Ramah"
  },
  {
    "zip": "80834",
    "city": "Seibert"
  },
  {
    "zip": "80835",
    "city": "Simla"
  },
  {
    "zip": "80840",
    "city": "U S A F Academy"
  },
  {
    "zip": "80861",
    "city": "Vona"
  },
  {
    "zip": "80863",
    "city": "Woodland Park"
  },
  {
    "zip": "80902",
    "city": "Colorado Springs"
  },
  {
    "zip": "81001",
    "city": "Pueblo"
  },
  {
    "zip": "81020",
    "city": "Aguilar"
  },
  {
    "zip": "81029",
    "city": "Campo"
  },
  {
    "zip": "81045",
    "city": "Haswell"
  },
  {
    "zip": "81049",
    "city": "Kim"
  },
  {
    "zip": "81050",
    "city": "La Junta"
  },
  {
    "zip": "81054",
    "city": "Las Animas"
  },
  {
    "zip": "81055",
    "city": "La Veta"
  },
  {
    "zip": "81057",
    "city": "Mc Clave"
  },
  {
    "zip": "81058",
    "city": "Manzanola"
  },
  {
    "zip": "81059",
    "city": "Model"
  },
  {
    "zip": "81062",
    "city": "Olney Springs"
  },
  {
    "zip": "81063",
    "city": "Ordway"
  },
  {
    "zip": "81064",
    "city": "Pritchett"
  },
  {
    "zip": "81071",
    "city": "Sheridan Lake"
  },
  {
    "zip": "81076",
    "city": "Sugar City"
  },
  {
    "zip": "81081",
    "city": "Trinchera"
  },
  {
    "zip": "81084",
    "city": "Two Buttes"
  },
  {
    "zip": "81089",
    "city": "Walsenburg"
  },
  {
    "zip": "81092",
    "city": "Wiley"
  },
  {
    "zip": "81101",
    "city": "Alamosa"
  },
  {
    "zip": "81120",
    "city": "Antonito"
  },
  {
    "zip": "81123",
    "city": "Blanca"
  },
  {
    "zip": "81127",
    "city": "Chimney Rock"
  },
  {
    "zip": "81130",
    "city": "Creede"
  },
  {
    "zip": "81132",
    "city": "Del Norte"
  },
  {
    "zip": "81133",
    "city": "Fort Garland"
  },
  {
    "zip": "81134",
    "city": "San Luis"
  },
  {
    "zip": "81137",
    "city": "Ignacio"
  },
  {
    "zip": "81140",
    "city": "La Jara"
  },
  {
    "zip": "81143",
    "city": "Moffat"
  },
  {
    "zip": "81144",
    "city": "Monte Vista"
  },
  {
    "zip": "81146",
    "city": "Mosca"
  },
  {
    "zip": "81147",
    "city": "Pagosa Springs"
  },
  {
    "zip": "81149",
    "city": "Saguache"
  },
  {
    "zip": "81201",
    "city": "Salida"
  },
  {
    "zip": "81212",
    "city": "Canon City"
  },
  {
    "zip": "81223",
    "city": "Cotopaxi"
  },
  {
    "zip": "81224",
    "city": "Crested Butte"
  },
  {
    "zip": "81236",
    "city": "Nathrop"
  },
  {
    "zip": "81243",
    "city": "Powderhorn"
  },
  {
    "zip": "81252",
    "city": "Westcliffe"
  },
  {
    "zip": "81320",
    "city": "Cahone"
  },
  {
    "zip": "81323",
    "city": "Dolores"
  },
  {
    "zip": "81324",
    "city": "Dove Creek"
  },
  {
    "zip": "81325",
    "city": "Egnar"
  },
  {
    "zip": "81326",
    "city": "Hesperus"
  },
  {
    "zip": "81328",
    "city": "Mancos"
  },
  {
    "zip": "81335",
    "city": "Yellow Jacket"
  },
  {
    "zip": "81411",
    "city": "Bedrock"
  },
  {
    "zip": "81413",
    "city": "Cedaredge"
  },
  {
    "zip": "81418",
    "city": "Eckert"
  },
  {
    "zip": "81419",
    "city": "Hotchkiss"
  },
  {
    "zip": "81422",
    "city": "Naturita"
  },
  {
    "zip": "81424",
    "city": "Nucla"
  },
  {
    "zip": "81428",
    "city": "Paonia"
  },
  {
    "zip": "81431",
    "city": "Redvale"
  },
  {
    "zip": "81435",
    "city": "Telluride"
  },
  {
    "zip": "81521",
    "city": "Fruita"
  },
  {
    "zip": "81522",
    "city": "Gateway"
  },
  {
    "zip": "81523",
    "city": "Glade Park"
  },
  {
    "zip": "81525",
    "city": "Mack"
  },
  {
    "zip": "81601",
    "city": "Glenwood Springs"
  },
  {
    "zip": "81610",
    "city": "Dinosaur"
  },
  {
    "zip": "81611",
    "city": "Aspen"
  },
  {
    "zip": "81621",
    "city": "Basalt"
  },
  {
    "zip": "81624",
    "city": "Collbran"
  },
  {
    "zip": "81630",
    "city": "De Beque"
  },
  {
    "zip": "81635",
    "city": "Parachute"
  },
  {
    "zip": "81640",
    "city": "Maybell"
  },
  {
    "zip": "81643",
    "city": "Mesa"
  },
  {
    "zip": "81648",
    "city": "Rangely"
  },
  {
    "zip": "81650",
    "city": "Rifle"
  },
  {
    "zip": "81652",
    "city": "Silt"
  },
  {
    "zip": "81654",
    "city": "Snowmass"
  },
  {
    "zip": "82005",
    "city": "Fe Warren Afb"
  },
  {
    "zip": "82050",
    "city": "Albin"
  },
  {
    "zip": "82051",
    "city": "Bosler"
  },
  {
    "zip": "82063",
    "city": "Jelm"
  },
  {
    "zip": "82070",
    "city": "Laramie"
  },
  {
    "zip": "82082",
    "city": "Pine Bluffs"
  },
  {
    "zip": "82083",
    "city": "Rock River"
  },
  {
    "zip": "82190",
    "city": "Yellowstone National Park"
  },
  {
    "zip": "82210",
    "city": "Chugwater"
  },
  {
    "zip": "82212",
    "city": "Fort Laramie"
  },
  {
    "zip": "82213",
    "city": "Glendo"
  },
  {
    "zip": "82217",
    "city": "Hawk Springs"
  },
  {
    "zip": "82219",
    "city": "Jay Em"
  },
  {
    "zip": "82222",
    "city": "Lance Creek"
  },
  {
    "zip": "82223",
    "city": "Lingle"
  },
  {
    "zip": "82225",
    "city": "Lusk"
  },
  {
    "zip": "82242",
    "city": "Van Tassell"
  },
  {
    "zip": "82243",
    "city": "Veteran"
  },
  {
    "zip": "82301",
    "city": "Rawlins"
  },
  {
    "zip": "82310",
    "city": "Jeffrey City"
  },
  {
    "zip": "82321",
    "city": "Baggs"
  },
  {
    "zip": "82325",
    "city": "Encampment"
  },
  {
    "zip": "82329",
    "city": "Medicine Bow"
  },
  {
    "zip": "82332",
    "city": "Savery"
  },
  {
    "zip": "82401",
    "city": "Worland"
  },
  {
    "zip": "82410",
    "city": "Basin"
  },
  {
    "zip": "82421",
    "city": "Deaver"
  },
  {
    "zip": "82426",
    "city": "Greybull"
  },
  {
    "zip": "82428",
    "city": "Hyattville"
  },
  {
    "zip": "82432",
    "city": "Manderson"
  },
  {
    "zip": "82433",
    "city": "Meeteetse"
  },
  {
    "zip": "82441",
    "city": "Shell"
  },
  {
    "zip": "82442",
    "city": "Ten Sleep"
  },
  {
    "zip": "82443",
    "city": "Thermopolis"
  },
  {
    "zip": "82512",
    "city": "Crowheart"
  },
  {
    "zip": "82514",
    "city": "Fort Washakie"
  },
  {
    "zip": "82516",
    "city": "Kinnear"
  },
  {
    "zip": "82520",
    "city": "Lander"
  },
  {
    "zip": "82523",
    "city": "Pavillion"
  },
  {
    "zip": "82601",
    "city": "Casper"
  },
  {
    "zip": "82615",
    "city": "Shirley Basin"
  },
  {
    "zip": "82620",
    "city": "Alcova"
  },
  {
    "zip": "82630",
    "city": "Arminto"
  },
  {
    "zip": "82637",
    "city": "Glenrock"
  },
  {
    "zip": "82638",
    "city": "Hiland"
  },
  {
    "zip": "82639",
    "city": "Kaycee"
  },
  {
    "zip": "82642",
    "city": "Lysite"
  },
  {
    "zip": "82643",
    "city": "Midwest"
  },
  {
    "zip": "82646",
    "city": "Natrona"
  },
  {
    "zip": "82649",
    "city": "Shoshoni"
  },
  {
    "zip": "82710",
    "city": "Aladdin"
  },
  {
    "zip": "82714",
    "city": "Devils Tower"
  },
  {
    "zip": "82715",
    "city": "Four Corners"
  },
  {
    "zip": "82720",
    "city": "Hulett"
  },
  {
    "zip": "82721",
    "city": "Moorcroft"
  },
  {
    "zip": "82725",
    "city": "Recluse"
  },
  {
    "zip": "82727",
    "city": "Rozet"
  },
  {
    "zip": "82729",
    "city": "Sundance"
  },
  {
    "zip": "82838",
    "city": "Parkman"
  },
  {
    "zip": "82839",
    "city": "Ranchester"
  },
  {
    "zip": "82844",
    "city": "Wolf"
  },
  {
    "zip": "82925",
    "city": "Cora"
  },
  {
    "zip": "82932",
    "city": "Farson"
  },
  {
    "zip": "82933",
    "city": "Fort Bridger"
  },
  {
    "zip": "82935",
    "city": "Green River"
  },
  {
    "zip": "82936",
    "city": "Lonetree"
  },
  {
    "zip": "82941",
    "city": "Pinedale"
  },
  {
    "zip": "83012",
    "city": "Moose"
  },
  {
    "zip": "83101",
    "city": "Kemmerer"
  },
  {
    "zip": "83113",
    "city": "Big Piney"
  },
  {
    "zip": "83114",
    "city": "Cokeville"
  },
  {
    "zip": "83115",
    "city": "Daniel"
  },
  {
    "zip": "83123",
    "city": "La Barge"
  },
  {
    "zip": "83127",
    "city": "Thayne"
  },
  {
    "zip": "83201",
    "city": "Pocatello"
  },
  {
    "zip": "83211",
    "city": "American Falls"
  },
  {
    "zip": "83212",
    "city": "Arbon"
  },
  {
    "zip": "83214",
    "city": "Arimo"
  },
  {
    "zip": "83215",
    "city": "Atomic City"
  },
  {
    "zip": "83221",
    "city": "Blackfoot"
  },
  {
    "zip": "83226",
    "city": "Challis"
  },
  {
    "zip": "83229",
    "city": "Cobalt"
  },
  {
    "zip": "83230",
    "city": "Conda"
  },
  {
    "zip": "83234",
    "city": "Downey"
  },
  {
    "zip": "83241",
    "city": "Grace"
  },
  {
    "zip": "83245",
    "city": "Inkom"
  },
  {
    "zip": "83246",
    "city": "Lava Hot Springs"
  },
  {
    "zip": "83250",
    "city": "Mccammon"
  },
  {
    "zip": "83251",
    "city": "Mackay"
  },
  {
    "zip": "83252",
    "city": "Malad City"
  },
  {
    "zip": "83274",
    "city": "Shelley"
  },
  {
    "zip": "83276",
    "city": "Soda Springs"
  },
  {
    "zip": "83283",
    "city": "Thatcher"
  },
  {
    "zip": "83285",
    "city": "Wayan"
  },
  {
    "zip": "83287",
    "city": "Fish Haven"
  },
  {
    "zip": "83301",
    "city": "Twin Falls"
  },
  {
    "zip": "83302",
    "city": "Rogerson"
  },
  {
    "zip": "83318",
    "city": "Burley"
  },
  {
    "zip": "83321",
    "city": "Castleford"
  },
  {
    "zip": "83322",
    "city": "Corral"
  },
  {
    "zip": "83323",
    "city": "Declo"
  },
  {
    "zip": "83324",
    "city": "Dietrich"
  },
  {
    "zip": "83328",
    "city": "Filer"
  },
  {
    "zip": "83330",
    "city": "Gooding"
  },
  {
    "zip": "83332",
    "city": "Hagerman"
  },
  {
    "zip": "83333",
    "city": "Hailey"
  },
  {
    "zip": "83334",
    "city": "Hansen"
  },
  {
    "zip": "83336",
    "city": "Heyburn"
  },
  {
    "zip": "83340",
    "city": "Ketchum"
  },
  {
    "zip": "83344",
    "city": "Murtaugh"
  },
  {
    "zip": "83347",
    "city": "Paul"
  },
  {
    "zip": "83348",
    "city": "Picabo"
  },
  {
    "zip": "83352",
    "city": "Shoshone"
  },
  {
    "zip": "83401",
    "city": "Idaho Falls"
  },
  {
    "zip": "83422",
    "city": "Driggs"
  },
  {
    "zip": "83434",
    "city": "Menan"
  },
  {
    "zip": "83435",
    "city": "Monteview"
  },
  {
    "zip": "83436",
    "city": "Newdale"
  },
  {
    "zip": "83440",
    "city": "Rexburg"
  },
  {
    "zip": "83442",
    "city": "Rigby"
  },
  {
    "zip": "83443",
    "city": "Ririe"
  },
  {
    "zip": "83449",
    "city": "Swan Valley"
  },
  {
    "zip": "83450",
    "city": "Terreton"
  },
  {
    "zip": "83451",
    "city": "Teton"
  },
  {
    "zip": "83452",
    "city": "Tetonia"
  },
  {
    "zip": "83463",
    "city": "Gibbonsville"
  },
  {
    "zip": "83464",
    "city": "Leadore"
  },
  {
    "zip": "83466",
    "city": "North Fork"
  },
  {
    "zip": "83467",
    "city": "Salmon"
  },
  {
    "zip": "83469",
    "city": "Shoup"
  },
  {
    "zip": "83520",
    "city": "Ahsahka"
  },
  {
    "zip": "83523",
    "city": "Craigmont"
  },
  {
    "zip": "83524",
    "city": "Culdesac"
  },
  {
    "zip": "83530",
    "city": "Grangeville"
  },
  {
    "zip": "83533",
    "city": "Greencreek"
  },
  {
    "zip": "83535",
    "city": "Juliaetta"
  },
  {
    "zip": "83536",
    "city": "Kamiah"
  },
  {
    "zip": "83537",
    "city": "Kendrick"
  },
  {
    "zip": "83539",
    "city": "Kooskia"
  },
  {
    "zip": "83540",
    "city": "Lapwai"
  },
  {
    "zip": "83542",
    "city": "Lucile"
  },
  {
    "zip": "83543",
    "city": "Nezperce"
  },
  {
    "zip": "83544",
    "city": "Orofino"
  },
  {
    "zip": "83548",
    "city": "Reubens"
  },
  {
    "zip": "83549",
    "city": "Riggins"
  },
  {
    "zip": "83552",
    "city": "Stites"
  },
  {
    "zip": "83553",
    "city": "Weippe"
  },
  {
    "zip": "83554",
    "city": "White Bird"
  },
  {
    "zip": "83604",
    "city": "Bruneau"
  },
  {
    "zip": "83622",
    "city": "Garden Valley"
  },
  {
    "zip": "83623",
    "city": "Glenns Ferry"
  },
  {
    "zip": "83627",
    "city": "Hammett"
  },
  {
    "zip": "83628",
    "city": "Homedale"
  },
  {
    "zip": "83631",
    "city": "Idaho City"
  },
  {
    "zip": "83633",
    "city": "King Hill"
  },
  {
    "zip": "83634",
    "city": "Kuna"
  },
  {
    "zip": "83638",
    "city": "Mccall"
  },
  {
    "zip": "83639",
    "city": "Marsing"
  },
  {
    "zip": "83641",
    "city": "Melba"
  },
  {
    "zip": "83645",
    "city": "Midvale"
  },
  {
    "zip": "83648",
    "city": "Mountain Home A F B"
  },
  {
    "zip": "83651",
    "city": "Nampa"
  },
  {
    "zip": "83654",
    "city": "New Meadows"
  },
  {
    "zip": "83661",
    "city": "Payette"
  },
  {
    "zip": "83666",
    "city": "Placerville"
  },
  {
    "zip": "83670",
    "city": "Sweet"
  },
  {
    "zip": "83672",
    "city": "Weiser"
  },
  {
    "zip": "83677",
    "city": "Yellow Pine"
  },
  {
    "zip": "83702",
    "city": "Boise"
  },
  {
    "zip": "83803",
    "city": "Bayview"
  },
  {
    "zip": "83805",
    "city": "Bonners Ferry"
  },
  {
    "zip": "83808",
    "city": "Calder"
  },
  {
    "zip": "83809",
    "city": "Careywood"
  },
  {
    "zip": "83810",
    "city": "Cataldo"
  },
  {
    "zip": "83811",
    "city": "Clark Fork"
  },
  {
    "zip": "83812",
    "city": "Clarkia"
  },
  {
    "zip": "83813",
    "city": "Cocolalla"
  },
  {
    "zip": "83814",
    "city": "Coeur D Alene"
  },
  {
    "zip": "83821",
    "city": "Coolin"
  },
  {
    "zip": "83823",
    "city": "Deary"
  },
  {
    "zip": "83824",
    "city": "Desmet"
  },
  {
    "zip": "83830",
    "city": "Fernwood"
  },
  {
    "zip": "83842",
    "city": "Medimont"
  },
  {
    "zip": "83845",
    "city": "Moyie Springs"
  },
  {
    "zip": "83846",
    "city": "Mullan"
  },
  {
    "zip": "83848",
    "city": "Nordman"
  },
  {
    "zip": "83852",
    "city": "Ponderay"
  },
  {
    "zip": "83853",
    "city": "Porthill"
  },
  {
    "zip": "83854",
    "city": "Post Falls"
  },
  {
    "zip": "83855",
    "city": "Potlatch"
  },
  {
    "zip": "83856",
    "city": "Priest River"
  },
  {
    "zip": "83858",
    "city": "Rathdrum"
  },
  {
    "zip": "83860",
    "city": "Sagle"
  },
  {
    "zip": "83861",
    "city": "Saint Maries"
  },
  {
    "zip": "83864",
    "city": "Sandpoint"
  },
  {
    "zip": "83868",
    "city": "Smelterville"
  },
  {
    "zip": "83870",
    "city": "Tensed"
  },
  {
    "zip": "83876",
    "city": "Worley"
  },
  {
    "zip": "84002",
    "city": "Altonah"
  },
  {
    "zip": "84003",
    "city": "American Fork"
  },
  {
    "zip": "84005",
    "city": "Eagle Mountain"
  },
  {
    "zip": "84006",
    "city": "Bingham Canyon"
  },
  {
    "zip": "84007",
    "city": "Bluebell"
  },
  {
    "zip": "84008",
    "city": "Bonanza"
  },
  {
    "zip": "84010",
    "city": "Bountiful"
  },
  {
    "zip": "84013",
    "city": "Cedar Valley"
  },
  {
    "zip": "84017",
    "city": "Coalville"
  },
  {
    "zip": "84021",
    "city": "Duchesne"
  },
  {
    "zip": "84022",
    "city": "Dugway"
  },
  {
    "zip": "84023",
    "city": "Dutch John"
  },
  {
    "zip": "84026",
    "city": "Fort Duchesne"
  },
  {
    "zip": "84032",
    "city": "Heber City"
  },
  {
    "zip": "84034",
    "city": "Ibapah"
  },
  {
    "zip": "84035",
    "city": "Jensen"
  },
  {
    "zip": "84036",
    "city": "Kamas"
  },
  {
    "zip": "84037",
    "city": "Kaysville"
  },
  {
    "zip": "84038",
    "city": "Laketown"
  },
  {
    "zip": "84039",
    "city": "Lapoint"
  },
  {
    "zip": "84043",
    "city": "Lehi"
  },
  {
    "zip": "84044",
    "city": "Magna"
  },
  {
    "zip": "84052",
    "city": "Myton"
  },
  {
    "zip": "84054",
    "city": "North Salt Lake"
  },
  {
    "zip": "84056",
    "city": "Hill Afb"
  },
  {
    "zip": "84057",
    "city": "Orem"
  },
  {
    "zip": "84061",
    "city": "Peoa"
  },
  {
    "zip": "84069",
    "city": "Rush Valley"
  },
  {
    "zip": "84070",
    "city": "Sandy"
  },
  {
    "zip": "84072",
    "city": "Tabiona"
  },
  {
    "zip": "84074",
    "city": "Tooele"
  },
  {
    "zip": "84076",
    "city": "Tridell"
  },
  {
    "zip": "84078",
    "city": "Vernal"
  },
  {
    "zip": "84081",
    "city": "West Jordan"
  },
  {
    "zip": "84082",
    "city": "Wallsburg"
  },
  {
    "zip": "84085",
    "city": "Whiterocks"
  },
  {
    "zip": "84087",
    "city": "Woods Cross"
  },
  {
    "zip": "84095",
    "city": "South Jordan"
  },
  {
    "zip": "84096",
    "city": "Herriman"
  },
  {
    "zip": "84101",
    "city": "Salt Lake City"
  },
  {
    "zip": "84302",
    "city": "Brigham City"
  },
  {
    "zip": "84304",
    "city": "Cache Junction"
  },
  {
    "zip": "84307",
    "city": "Corinne"
  },
  {
    "zip": "84309",
    "city": "Deweyville"
  },
  {
    "zip": "84311",
    "city": "Fielding"
  },
  {
    "zip": "84313",
    "city": "Grouse Creek"
  },
  {
    "zip": "84314",
    "city": "Honeyville"
  },
  {
    "zip": "84319",
    "city": "Hyrum"
  },
  {
    "zip": "84329",
    "city": "Park Valley"
  },
  {
    "zip": "84336",
    "city": "Snowville"
  },
  {
    "zip": "84337",
    "city": "Tremonton"
  },
  {
    "zip": "84501",
    "city": "Price"
  },
  {
    "zip": "84511",
    "city": "Blanding"
  },
  {
    "zip": "84513",
    "city": "Castle Dale"
  },
  {
    "zip": "84520",
    "city": "East Carbon"
  },
  {
    "zip": "84526",
    "city": "Helper"
  },
  {
    "zip": "84532",
    "city": "Moab"
  },
  {
    "zip": "84533",
    "city": "Lake Powell"
  },
  {
    "zip": "84601",
    "city": "Provo"
  },
  {
    "zip": "84627",
    "city": "Ephraim"
  },
  {
    "zip": "84642",
    "city": "Manti"
  },
  {
    "zip": "84645",
    "city": "Mona"
  },
  {
    "zip": "84648",
    "city": "Nephi"
  },
  {
    "zip": "84655",
    "city": "Santaquin"
  },
  {
    "zip": "84660",
    "city": "Spanish Fork"
  },
  {
    "zip": "84712",
    "city": "Antimony"
  },
  {
    "zip": "84714",
    "city": "Beryl"
  },
  {
    "zip": "84717",
    "city": "Bryce Canyon"
  },
  {
    "zip": "84720",
    "city": "Cedar City"
  },
  {
    "zip": "84724",
    "city": "Elsinore"
  },
  {
    "zip": "84738",
    "city": "Ivins"
  },
  {
    "zip": "84739",
    "city": "Joseph"
  },
  {
    "zip": "84741",
    "city": "Kanab"
  },
  {
    "zip": "84745",
    "city": "La Verkin"
  },
  {
    "zip": "84747",
    "city": "Loa"
  },
  {
    "zip": "84759",
    "city": "Panguitch"
  },
  {
    "zip": "84765",
    "city": "Santa Clara"
  },
  {
    "zip": "84766",
    "city": "Sevier"
  },
  {
    "zip": "84773",
    "city": "Teasdale"
  },
  {
    "zip": "84774",
    "city": "Toquerville"
  },
  {
    "zip": "84775",
    "city": "Torrey"
  },
  {
    "zip": "84779",
    "city": "Virgin"
  },
  {
    "zip": "84782",
    "city": "Veyo"
  },
  {
    "zip": "84783",
    "city": "Dammeron Valley"
  },
  {
    "zip": "85087",
    "city": "New River"
  },
  {
    "zip": "85117",
    "city": "Apache Junction"
  },
  {
    "zip": "85118",
    "city": "Gold Canyon"
  },
  {
    "zip": "85121",
    "city": "Bapchule"
  },
  {
    "zip": "85122",
    "city": "Casa Grande"
  },
  {
    "zip": "85123",
    "city": "Arizona City"
  },
  {
    "zip": "85127",
    "city": "Chandler Heights"
  },
  {
    "zip": "85131",
    "city": "Eloy"
  },
  {
    "zip": "85138",
    "city": "Maricopa"
  },
  {
    "zip": "85140",
    "city": "San Tan Valley"
  },
  {
    "zip": "85141",
    "city": "Picacho"
  },
  {
    "zip": "85142",
    "city": "Queen Creek"
  },
  {
    "zip": "85147",
    "city": "Sacaton"
  },
  {
    "zip": "85190",
    "city": "Tortilla Flat"
  },
  {
    "zip": "85191",
    "city": "Valley Farms"
  },
  {
    "zip": "85192",
    "city": "Winkelman"
  },
  {
    "zip": "85236",
    "city": "Higley"
  },
  {
    "zip": "85250",
    "city": "Scottsdale"
  },
  {
    "zip": "85253",
    "city": "Paradise Valley"
  },
  {
    "zip": "85263",
    "city": "Rio Verde"
  },
  {
    "zip": "85264",
    "city": "Fort Mcdowell"
  },
  {
    "zip": "85268",
    "city": "Fountain Hills"
  },
  {
    "zip": "85281",
    "city": "Tempe"
  },
  {
    "zip": "85309",
    "city": "Glendale Luke Afb"
  },
  {
    "zip": "85321",
    "city": "Ajo"
  },
  {
    "zip": "85324",
    "city": "Black Canyon City"
  },
  {
    "zip": "85328",
    "city": "Cibola"
  },
  {
    "zip": "85331",
    "city": "Cave Creek"
  },
  {
    "zip": "85333",
    "city": "Dateland"
  },
  {
    "zip": "85335",
    "city": "El Mirage"
  },
  {
    "zip": "85337",
    "city": "Gila Bend"
  },
  {
    "zip": "85338",
    "city": "Goodyear"
  },
  {
    "zip": "85339",
    "city": "Laveen"
  },
  {
    "zip": "85340",
    "city": "Litchfield Park"
  },
  {
    "zip": "85343",
    "city": "Palo Verde"
  },
  {
    "zip": "85347",
    "city": "Roll"
  },
  {
    "zip": "85348",
    "city": "Salome"
  },
  {
    "zip": "85350",
    "city": "Somerton"
  },
  {
    "zip": "85353",
    "city": "Tolleson"
  },
  {
    "zip": "85354",
    "city": "Tonopah"
  },
  {
    "zip": "85355",
    "city": "Waddell"
  },
  {
    "zip": "85356",
    "city": "Wellton"
  },
  {
    "zip": "85361",
    "city": "Wittmann"
  },
  {
    "zip": "85363",
    "city": "Youngtown"
  },
  {
    "zip": "85375",
    "city": "Sun City West"
  },
  {
    "zip": "85390",
    "city": "Wickenburg"
  },
  {
    "zip": "85501",
    "city": "Globe"
  },
  {
    "zip": "85542",
    "city": "Peridot"
  },
  {
    "zip": "85543",
    "city": "Pima"
  },
  {
    "zip": "85606",
    "city": "Cochise"
  },
  {
    "zip": "85610",
    "city": "Elfrida"
  },
  {
    "zip": "85613",
    "city": "Fort Huachuca"
  },
  {
    "zip": "85616",
    "city": "Huachuca City"
  },
  {
    "zip": "85617",
    "city": "Mc Neal"
  },
  {
    "zip": "85621",
    "city": "Nogales"
  },
  {
    "zip": "85623",
    "city": "Oracle"
  },
  {
    "zip": "85624",
    "city": "Patagonia"
  },
  {
    "zip": "85625",
    "city": "Pearce"
  },
  {
    "zip": "85629",
    "city": "Sahuarita"
  },
  {
    "zip": "85631",
    "city": "San Manuel"
  },
  {
    "zip": "85632",
    "city": "San Simon"
  },
  {
    "zip": "85634",
    "city": "Sells"
  },
  {
    "zip": "85635",
    "city": "Sierra Vista"
  },
  {
    "zip": "85637",
    "city": "Sonoita"
  },
  {
    "zip": "85638",
    "city": "Tombstone"
  },
  {
    "zip": "85640",
    "city": "Tumacacori"
  },
  {
    "zip": "85643",
    "city": "Willcox"
  },
  {
    "zip": "85645",
    "city": "Amado"
  },
  {
    "zip": "85648",
    "city": "Rio Rico"
  },
  {
    "zip": "85653",
    "city": "Marana"
  },
  {
    "zip": "85701",
    "city": "Tucson"
  },
  {
    "zip": "85901",
    "city": "Show Low"
  },
  {
    "zip": "85922",
    "city": "Blue"
  },
  {
    "zip": "85924",
    "city": "Concho"
  },
  {
    "zip": "85925",
    "city": "Eagar"
  },
  {
    "zip": "85928",
    "city": "Heber"
  },
  {
    "zip": "85935",
    "city": "Pinetop"
  },
  {
    "zip": "85937",
    "city": "Snowflake"
  },
  {
    "zip": "85938",
    "city": "Springerville"
  },
  {
    "zip": "86001",
    "city": "Flagstaff"
  },
  {
    "zip": "86024",
    "city": "Happy Jack"
  },
  {
    "zip": "86036",
    "city": "Marble Canyon"
  },
  {
    "zip": "86038",
    "city": "Mormon Lake"
  },
  {
    "zip": "86044",
    "city": "Tonalea"
  },
  {
    "zip": "86314",
    "city": "Prescott Valley"
  },
  {
    "zip": "86322",
    "city": "Camp Verde"
  },
  {
    "zip": "86323",
    "city": "Chino Valley"
  },
  {
    "zip": "86324",
    "city": "Clarkdale"
  },
  {
    "zip": "86325",
    "city": "Cornville"
  },
  {
    "zip": "86334",
    "city": "Paulden"
  },
  {
    "zip": "86335",
    "city": "Rimrock"
  },
  {
    "zip": "86336",
    "city": "Sedona"
  },
  {
    "zip": "86403",
    "city": "Lake Havasu City"
  },
  {
    "zip": "86426",
    "city": "Fort Mohave"
  },
  {
    "zip": "86429",
    "city": "Bullhead City"
  },
  {
    "zip": "86434",
    "city": "Peach Springs"
  },
  {
    "zip": "86436",
    "city": "Topock"
  },
  {
    "zip": "86440",
    "city": "Mohave Valley"
  },
  {
    "zip": "86441",
    "city": "Dolan Springs"
  },
  {
    "zip": "86443",
    "city": "Temple Bar Marina"
  },
  {
    "zip": "86444",
    "city": "Meadview"
  },
  {
    "zip": "86445",
    "city": "Willow Beach"
  },
  {
    "zip": "86503",
    "city": "Chinle"
  },
  {
    "zip": "86514",
    "city": "Teec Nos Pos"
  },
  {
    "zip": "87001",
    "city": "Algodones"
  },
  {
    "zip": "87004",
    "city": "Bernalillo"
  },
  {
    "zip": "87005",
    "city": "Bluewater"
  },
  {
    "zip": "87006",
    "city": "Bosque"
  },
  {
    "zip": "87008",
    "city": "Cedar Crest"
  },
  {
    "zip": "87009",
    "city": "Cedarvale"
  },
  {
    "zip": "87010",
    "city": "Cerrillos"
  },
  {
    "zip": "87012",
    "city": "Coyote"
  },
  {
    "zip": "87014",
    "city": "Cubero"
  },
  {
    "zip": "87016",
    "city": "Estancia"
  },
  {
    "zip": "87017",
    "city": "Gallina"
  },
  {
    "zip": "87018",
    "city": "Counselor"
  },
  {
    "zip": "87020",
    "city": "Grants"
  },
  {
    "zip": "87023",
    "city": "Jarales"
  },
  {
    "zip": "87024",
    "city": "Jemez Pueblo"
  },
  {
    "zip": "87025",
    "city": "Jemez Springs"
  },
  {
    "zip": "87026",
    "city": "Laguna"
  },
  {
    "zip": "87029",
    "city": "Lindrith"
  },
  {
    "zip": "87031",
    "city": "Los Lunas"
  },
  {
    "zip": "87035",
    "city": "Moriarty"
  },
  {
    "zip": "87036",
    "city": "Mountainair"
  },
  {
    "zip": "87041",
    "city": "Pena Blanca"
  },
  {
    "zip": "87042",
    "city": "Peralta"
  },
  {
    "zip": "87043",
    "city": "Placitas"
  },
  {
    "zip": "87044",
    "city": "Ponderosa"
  },
  {
    "zip": "87045",
    "city": "Prewitt"
  },
  {
    "zip": "87047",
    "city": "Sandia Park"
  },
  {
    "zip": "87048",
    "city": "Corrales"
  },
  {
    "zip": "87052",
    "city": "Santo Domingo Pueblo"
  },
  {
    "zip": "87053",
    "city": "San Ysidro"
  },
  {
    "zip": "87059",
    "city": "Tijeras"
  },
  {
    "zip": "87062",
    "city": "Veguita"
  },
  {
    "zip": "87068",
    "city": "Bosque Farms"
  },
  {
    "zip": "87083",
    "city": "Cochiti Lake"
  },
  {
    "zip": "87101",
    "city": "Albuquerque"
  },
  {
    "zip": "87117",
    "city": "Kirtland Afb"
  },
  {
    "zip": "87124",
    "city": "Rio Rancho"
  },
  {
    "zip": "87301",
    "city": "Gallup"
  },
  {
    "zip": "87312",
    "city": "Continental Divide"
  },
  {
    "zip": "87315",
    "city": "Fence Lake"
  },
  {
    "zip": "87317",
    "city": "Gamerco"
  },
  {
    "zip": "87323",
    "city": "Thoreau"
  },
  {
    "zip": "87325",
    "city": "Tohatchi"
  },
  {
    "zip": "87410",
    "city": "Aztec"
  },
  {
    "zip": "87415",
    "city": "Flora Vista"
  },
  {
    "zip": "87417",
    "city": "Kirtland"
  },
  {
    "zip": "87419",
    "city": "Navajo Dam"
  },
  {
    "zip": "87420",
    "city": "Shiprock"
  },
  {
    "zip": "87421",
    "city": "Waterflow"
  },
  {
    "zip": "87510",
    "city": "Abiquiu"
  },
  {
    "zip": "87516",
    "city": "Canones"
  },
  {
    "zip": "87520",
    "city": "Chama"
  },
  {
    "zip": "87521",
    "city": "Chamisal"
  },
  {
    "zip": "87522",
    "city": "Chimayo"
  },
  {
    "zip": "87528",
    "city": "Dulce"
  },
  {
    "zip": "87529",
    "city": "El Prado"
  },
  {
    "zip": "87530",
    "city": "El Rito"
  },
  {
    "zip": "87531",
    "city": "Embudo"
  },
  {
    "zip": "87532",
    "city": "Espanola"
  },
  {
    "zip": "87535",
    "city": "Glorieta"
  },
  {
    "zip": "87537",
    "city": "Hernandez"
  },
  {
    "zip": "87538",
    "city": "Ilfeld"
  },
  {
    "zip": "87539",
    "city": "La Madera"
  },
  {
    "zip": "87540",
    "city": "Lamy"
  },
  {
    "zip": "87544",
    "city": "Los Alamos"
  },
  {
    "zip": "87549",
    "city": "Ojo Caliente"
  },
  {
    "zip": "87551",
    "city": "Los Ojos"
  },
  {
    "zip": "87553",
    "city": "Penasco"
  },
  {
    "zip": "87556",
    "city": "Questa"
  },
  {
    "zip": "87557",
    "city": "Ranchos De Taos"
  },
  {
    "zip": "87560",
    "city": "Ribera"
  },
  {
    "zip": "87566",
    "city": "Ohkay Owingeh"
  },
  {
    "zip": "87567",
    "city": "Santa Cruz"
  },
  {
    "zip": "87571",
    "city": "Taos"
  },
  {
    "zip": "87573",
    "city": "Tererro"
  },
  {
    "zip": "87575",
    "city": "Tierra Amarilla"
  },
  {
    "zip": "87576",
    "city": "Trampas"
  },
  {
    "zip": "87579",
    "city": "Vadito"
  },
  {
    "zip": "87580",
    "city": "Valdez"
  },
  {
    "zip": "87581",
    "city": "Vallecitos"
  },
  {
    "zip": "87701",
    "city": "Las Vegas"
  },
  {
    "zip": "87711",
    "city": "Anton Chico"
  },
  {
    "zip": "87713",
    "city": "Chacon"
  },
  {
    "zip": "87718",
    "city": "Eagle Nest"
  },
  {
    "zip": "87722",
    "city": "Guadalupita"
  },
  {
    "zip": "87723",
    "city": "Holman"
  },
  {
    "zip": "87724",
    "city": "La Loma"
  },
  {
    "zip": "87733",
    "city": "Mosquero"
  },
  {
    "zip": "87734",
    "city": "Ocate"
  },
  {
    "zip": "87735",
    "city": "Ojo Feliz"
  },
  {
    "zip": "87740",
    "city": "Raton"
  },
  {
    "zip": "87742",
    "city": "Rociada"
  },
  {
    "zip": "87745",
    "city": "Sapello"
  },
  {
    "zip": "87746",
    "city": "Solano"
  },
  {
    "zip": "87750",
    "city": "Valmora"
  },
  {
    "zip": "87752",
    "city": "Wagon Mound"
  },
  {
    "zip": "87801",
    "city": "Socorro"
  },
  {
    "zip": "87821",
    "city": "Datil"
  },
  {
    "zip": "87823",
    "city": "Lemitar"
  },
  {
    "zip": "87825",
    "city": "Magdalena"
  },
  {
    "zip": "87827",
    "city": "Pie Town"
  },
  {
    "zip": "87828",
    "city": "Polvadera"
  },
  {
    "zip": "87831",
    "city": "San Acacia"
  },
  {
    "zip": "87901",
    "city": "Truth Or Consequences"
  },
  {
    "zip": "87930",
    "city": "Arrey"
  },
  {
    "zip": "87931",
    "city": "Caballo"
  },
  {
    "zip": "87937",
    "city": "Hatch"
  },
  {
    "zip": "88001",
    "city": "Las Cruces"
  },
  {
    "zip": "88002",
    "city": "White Sands Missile Range"
  },
  {
    "zip": "88008",
    "city": "Santa Teresa"
  },
  {
    "zip": "88020",
    "city": "Animas"
  },
  {
    "zip": "88022",
    "city": "Arenas Valley"
  },
  {
    "zip": "88030",
    "city": "Deming"
  },
  {
    "zip": "88034",
    "city": "Faywood"
  },
  {
    "zip": "88044",
    "city": "La Mesa"
  },
  {
    "zip": "88045",
    "city": "Lordsburg"
  },
  {
    "zip": "88047",
    "city": "Mesilla Park"
  },
  {
    "zip": "88049",
    "city": "Mimbres"
  },
  {
    "zip": "88063",
    "city": "Sunland Park"
  },
  {
    "zip": "88072",
    "city": "Vado"
  },
  {
    "zip": "88081",
    "city": "Chaparral"
  },
  {
    "zip": "88101",
    "city": "Clovis"
  },
  {
    "zip": "88113",
    "city": "Causey"
  },
  {
    "zip": "88114",
    "city": "Crossroads"
  },
  {
    "zip": "88116",
    "city": "Elida"
  },
  {
    "zip": "88119",
    "city": "Fort Sumner"
  },
  {
    "zip": "88121",
    "city": "House"
  },
  {
    "zip": "88123",
    "city": "Lingo"
  },
  {
    "zip": "88125",
    "city": "Milnesand"
  },
  {
    "zip": "88130",
    "city": "Portales"
  },
  {
    "zip": "88133",
    "city": "Saint Vrain"
  },
  {
    "zip": "88134",
    "city": "Taiban"
  },
  {
    "zip": "88136",
    "city": "Yeso"
  },
  {
    "zip": "88210",
    "city": "Artesia"
  },
  {
    "zip": "88213",
    "city": "Caprock"
  },
  {
    "zip": "88240",
    "city": "Hobbs"
  },
  {
    "zip": "88252",
    "city": "Jal"
  },
  {
    "zip": "88264",
    "city": "Maljamar"
  },
  {
    "zip": "88301",
    "city": "Carrizozo"
  },
  {
    "zip": "88310",
    "city": "Alamogordo"
  },
  {
    "zip": "88314",
    "city": "Bent"
  },
  {
    "zip": "88316",
    "city": "Capitan"
  },
  {
    "zip": "88317",
    "city": "Cloudcroft"
  },
  {
    "zip": "88330",
    "city": "Holloman Air Force Base"
  },
  {
    "zip": "88337",
    "city": "La Luz"
  },
  {
    "zip": "88339",
    "city": "Mayhill"
  },
  {
    "zip": "88340",
    "city": "Mescalero"
  },
  {
    "zip": "88341",
    "city": "Nogal"
  },
  {
    "zip": "88344",
    "city": "Pinon"
  },
  {
    "zip": "88345",
    "city": "Ruidoso"
  },
  {
    "zip": "88346",
    "city": "Ruidoso Downs"
  },
  {
    "zip": "88348",
    "city": "San Patricio"
  },
  {
    "zip": "88351",
    "city": "Tinnie"
  },
  {
    "zip": "88352",
    "city": "Tularosa"
  },
  {
    "zip": "88354",
    "city": "Weed"
  },
  {
    "zip": "88401",
    "city": "Tucumcari"
  },
  {
    "zip": "88410",
    "city": "Amistad"
  },
  {
    "zip": "88411",
    "city": "Bard"
  },
  {
    "zip": "88414",
    "city": "Capulin"
  },
  {
    "zip": "88417",
    "city": "Cuervo"
  },
  {
    "zip": "88421",
    "city": "Garita"
  },
  {
    "zip": "88427",
    "city": "Mcalister"
  },
  {
    "zip": "88430",
    "city": "Nara Visa"
  },
  {
    "zip": "88433",
    "city": "Quay"
  },
  {
    "zip": "88434",
    "city": "San Jon"
  },
  {
    "zip": "88439",
    "city": "Trementina"
  },
  {
    "zip": "88901",
    "city": "The Lakes"
  },
  {
    "zip": "89005",
    "city": "Boulder City"
  },
  {
    "zip": "89008",
    "city": "Caliente"
  },
  {
    "zip": "89017",
    "city": "Hiko"
  },
  {
    "zip": "89019",
    "city": "Jean"
  },
  {
    "zip": "89020",
    "city": "Amargosa Valley"
  },
  {
    "zip": "89029",
    "city": "Laughlin"
  },
  {
    "zip": "89030",
    "city": "North Las Vegas"
  },
  {
    "zip": "89037",
    "city": "Coyote Springs"
  },
  {
    "zip": "89039",
    "city": "Cal Nev Ari"
  },
  {
    "zip": "89043",
    "city": "Pioche"
  },
  {
    "zip": "89046",
    "city": "Searchlight"
  },
  {
    "zip": "89048",
    "city": "Pahrump"
  },
  {
    "zip": "89070",
    "city": "Indian Springs"
  },
  {
    "zip": "89314",
    "city": "Duckwater"
  },
  {
    "zip": "89408",
    "city": "Fernley"
  },
  {
    "zip": "89410",
    "city": "Gardnerville"
  },
  {
    "zip": "89413",
    "city": "Glenbrook"
  },
  {
    "zip": "89418",
    "city": "Imlay"
  },
  {
    "zip": "89419",
    "city": "Lovelock"
  },
  {
    "zip": "89420",
    "city": "Luning"
  },
  {
    "zip": "89425",
    "city": "Orovada"
  },
  {
    "zip": "89430",
    "city": "Smith"
  },
  {
    "zip": "89433",
    "city": "Sun Valley"
  },
  {
    "zip": "89445",
    "city": "Winnemucca"
  },
  {
    "zip": "89447",
    "city": "Yerington"
  },
  {
    "zip": "89451",
    "city": "Incline Village"
  },
  {
    "zip": "89704",
    "city": "Washoe Valley"
  },
  {
    "zip": "89820",
    "city": "Battle Mountain"
  },
  {
    "zip": "89821",
    "city": "Crescent Valley"
  },
  {
    "zip": "89822",
    "city": "Carlin"
  },
  {
    "zip": "89823",
    "city": "Deeth"
  },
  {
    "zip": "89825",
    "city": "Jackpot"
  },
  {
    "zip": "89828",
    "city": "Lamoille"
  },
  {
    "zip": "89833",
    "city": "Ruby Valley"
  },
  {
    "zip": "90001",
    "city": "Los Angeles"
  },
  {
    "zip": "90069",
    "city": "West Hollywood"
  },
  {
    "zip": "90090",
    "city": "Dodgertown"
  },
  {
    "zip": "90094",
    "city": "Playa Vista"
  },
  {
    "zip": "90201",
    "city": "Bell Gardens"
  },
  {
    "zip": "90230",
    "city": "Culver City"
  },
  {
    "zip": "90245",
    "city": "El Segundo"
  },
  {
    "zip": "90247",
    "city": "Gardena"
  },
  {
    "zip": "90254",
    "city": "Hermosa Beach"
  },
  {
    "zip": "90255",
    "city": "Huntington Park"
  },
  {
    "zip": "90262",
    "city": "Lynwood"
  },
  {
    "zip": "90263",
    "city": "Malibu"
  },
  {
    "zip": "90266",
    "city": "Manhattan Beach"
  },
  {
    "zip": "90272",
    "city": "Pacific Palisades"
  },
  {
    "zip": "90274",
    "city": "Palos Verdes Peninsula"
  },
  {
    "zip": "90275",
    "city": "Rancho Palos Verdes"
  },
  {
    "zip": "90277",
    "city": "Redondo Beach"
  },
  {
    "zip": "90280",
    "city": "South Gate"
  },
  {
    "zip": "90290",
    "city": "Topanga"
  },
  {
    "zip": "90292",
    "city": "Marina Del Rey"
  },
  {
    "zip": "90293",
    "city": "Playa Del Rey"
  },
  {
    "zip": "90301",
    "city": "Inglewood"
  },
  {
    "zip": "90401",
    "city": "Santa Monica"
  },
  {
    "zip": "90501",
    "city": "Torrance"
  },
  {
    "zip": "90620",
    "city": "Buena Park"
  },
  {
    "zip": "90623",
    "city": "La Palma"
  },
  {
    "zip": "90631",
    "city": "La Habra"
  },
  {
    "zip": "90638",
    "city": "La Mirada"
  },
  {
    "zip": "90660",
    "city": "Pico Rivera"
  },
  {
    "zip": "90670",
    "city": "Santa Fe Springs"
  },
  {
    "zip": "90703",
    "city": "Cerritos"
  },
  {
    "zip": "90710",
    "city": "Harbor City"
  },
  {
    "zip": "90716",
    "city": "Hawaiian Gardens"
  },
  {
    "zip": "90717",
    "city": "Lomita"
  },
  {
    "zip": "90720",
    "city": "Los Alamitos"
  },
  {
    "zip": "90723",
    "city": "Paramount"
  },
  {
    "zip": "90731",
    "city": "San Pedro"
  },
  {
    "zip": "90740",
    "city": "Seal Beach"
  },
  {
    "zip": "90755",
    "city": "Signal Hill"
  },
  {
    "zip": "91001",
    "city": "Altadena"
  },
  {
    "zip": "91008",
    "city": "Duarte"
  },
  {
    "zip": "91011",
    "city": "La Canada Flintridge"
  },
  {
    "zip": "91024",
    "city": "Sierra Madre"
  },
  {
    "zip": "91030",
    "city": "South Pasadena"
  },
  {
    "zip": "91040",
    "city": "Sunland"
  },
  {
    "zip": "91042",
    "city": "Tujunga"
  },
  {
    "zip": "91108",
    "city": "San Marino"
  },
  {
    "zip": "91214",
    "city": "La Crescenta"
  },
  {
    "zip": "91301",
    "city": "Agoura Hills"
  },
  {
    "zip": "91302",
    "city": "Calabasas"
  },
  {
    "zip": "91303",
    "city": "Canoga Park"
  },
  {
    "zip": "91307",
    "city": "West Hills"
  },
  {
    "zip": "91320",
    "city": "Newbury Park"
  },
  {
    "zip": "91324",
    "city": "Northridge"
  },
  {
    "zip": "91326",
    "city": "Porter Ranch"
  },
  {
    "zip": "91331",
    "city": "Pacoima"
  },
  {
    "zip": "91335",
    "city": "Reseda"
  },
  {
    "zip": "91340",
    "city": "San Fernando"
  },
  {
    "zip": "91342",
    "city": "Sylmar"
  },
  {
    "zip": "91343",
    "city": "North Hills"
  },
  {
    "zip": "91344",
    "city": "Granada Hills"
  },
  {
    "zip": "91345",
    "city": "Mission Hills"
  },
  {
    "zip": "91350",
    "city": "Santa Clarita"
  },
  {
    "zip": "91351",
    "city": "Canyon Country"
  },
  {
    "zip": "91356",
    "city": "Tarzana"
  },
  {
    "zip": "91360",
    "city": "Thousand Oaks"
  },
  {
    "zip": "91361",
    "city": "Westlake Village"
  },
  {
    "zip": "91364",
    "city": "Woodland Hills"
  },
  {
    "zip": "91381",
    "city": "Stevenson Ranch"
  },
  {
    "zip": "91384",
    "city": "Castaic"
  },
  {
    "zip": "91401",
    "city": "Van Nuys"
  },
  {
    "zip": "91402",
    "city": "Panorama City"
  },
  {
    "zip": "91403",
    "city": "Sherman Oaks"
  },
  {
    "zip": "91601",
    "city": "North Hollywood"
  },
  {
    "zip": "91604",
    "city": "Studio City"
  },
  {
    "zip": "91607",
    "city": "Valley Village"
  },
  {
    "zip": "91701",
    "city": "Rancho Cucamonga"
  },
  {
    "zip": "91702",
    "city": "Azusa"
  },
  {
    "zip": "91706",
    "city": "Baldwin Park"
  },
  {
    "zip": "91708",
    "city": "Chino"
  },
  {
    "zip": "91709",
    "city": "Chino Hills"
  },
  {
    "zip": "91722",
    "city": "Covina"
  },
  {
    "zip": "91731",
    "city": "El Monte"
  },
  {
    "zip": "91733",
    "city": "South El Monte"
  },
  {
    "zip": "91744",
    "city": "La Puente"
  },
  {
    "zip": "91745",
    "city": "Hacienda Heights"
  },
  {
    "zip": "91748",
    "city": "Rowland Heights"
  },
  {
    "zip": "91750",
    "city": "La Verne"
  },
  {
    "zip": "91752",
    "city": "Mira Loma"
  },
  {
    "zip": "91754",
    "city": "Monterey Park"
  },
  {
    "zip": "91765",
    "city": "Diamond Bar"
  },
  {
    "zip": "91770",
    "city": "Rosemead"
  },
  {
    "zip": "91773",
    "city": "San Dimas"
  },
  {
    "zip": "91775",
    "city": "San Gabriel"
  },
  {
    "zip": "91780",
    "city": "Temple City"
  },
  {
    "zip": "91790",
    "city": "West Covina"
  },
  {
    "zip": "91905",
    "city": "Boulevard"
  },
  {
    "zip": "91910",
    "city": "Chula Vista"
  },
  {
    "zip": "91916",
    "city": "Descanso"
  },
  {
    "zip": "91917",
    "city": "Dulzura"
  },
  {
    "zip": "91932",
    "city": "Imperial Beach"
  },
  {
    "zip": "91934",
    "city": "Jacumba"
  },
  {
    "zip": "91935",
    "city": "Jamul"
  },
  {
    "zip": "91945",
    "city": "Lemon Grove"
  },
  {
    "zip": "91963",
    "city": "Potrero"
  },
  {
    "zip": "91980",
    "city": "Tecate"
  },
  {
    "zip": "92003",
    "city": "Bonsall"
  },
  {
    "zip": "92004",
    "city": "Borrego Springs"
  },
  {
    "zip": "92007",
    "city": "Cardiff By The Sea"
  },
  {
    "zip": "92014",
    "city": "Del Mar"
  },
  {
    "zip": "92019",
    "city": "El Cajon"
  },
  {
    "zip": "92024",
    "city": "Encinitas"
  },
  {
    "zip": "92025",
    "city": "Escondido"
  },
  {
    "zip": "92028",
    "city": "Fallbrook"
  },
  {
    "zip": "92037",
    "city": "La Jolla"
  },
  {
    "zip": "92055",
    "city": "Camp Pendleton"
  },
  {
    "zip": "92059",
    "city": "Pala"
  },
  {
    "zip": "92061",
    "city": "Pauma Valley"
  },
  {
    "zip": "92064",
    "city": "Poway"
  },
  {
    "zip": "92066",
    "city": "Ranchita"
  },
  {
    "zip": "92070",
    "city": "Santa Ysabel"
  },
  {
    "zip": "92075",
    "city": "Solana Beach"
  },
  {
    "zip": "92081",
    "city": "Vista"
  },
  {
    "zip": "92086",
    "city": "Warner Springs"
  },
  {
    "zip": "92091",
    "city": "Rancho Santa Fe"
  },
  {
    "zip": "92118",
    "city": "Coronado"
  },
  {
    "zip": "92201",
    "city": "Indio"
  },
  {
    "zip": "92210",
    "city": "Indian Wells"
  },
  {
    "zip": "92211",
    "city": "Palm Desert"
  },
  {
    "zip": "92220",
    "city": "Banning"
  },
  {
    "zip": "92227",
    "city": "Brawley"
  },
  {
    "zip": "92230",
    "city": "Cabazon"
  },
  {
    "zip": "92231",
    "city": "Calexico"
  },
  {
    "zip": "92233",
    "city": "Calipatria"
  },
  {
    "zip": "92234",
    "city": "Cathedral City"
  },
  {
    "zip": "92236",
    "city": "Coachella"
  },
  {
    "zip": "92240",
    "city": "Desert Hot Springs"
  },
  {
    "zip": "92242",
    "city": "Earp"
  },
  {
    "zip": "92243",
    "city": "El Centro"
  },
  {
    "zip": "92250",
    "city": "Holtville"
  },
  {
    "zip": "92252",
    "city": "Joshua Tree"
  },
  {
    "zip": "92253",
    "city": "La Quinta"
  },
  {
    "zip": "92254",
    "city": "Mecca"
  },
  {
    "zip": "92256",
    "city": "Morongo Valley"
  },
  {
    "zip": "92257",
    "city": "Niland"
  },
  {
    "zip": "92262",
    "city": "Palm Springs"
  },
  {
    "zip": "92267",
    "city": "Parker Dam"
  },
  {
    "zip": "92270",
    "city": "Rancho Mirage"
  },
  {
    "zip": "92274",
    "city": "Thermal"
  },
  {
    "zip": "92276",
    "city": "Thousand Palms"
  },
  {
    "zip": "92277",
    "city": "Twentynine Palms"
  },
  {
    "zip": "92280",
    "city": "Vidal"
  },
  {
    "zip": "92281",
    "city": "Westmorland"
  },
  {
    "zip": "92283",
    "city": "Winterhaven"
  },
  {
    "zip": "92284",
    "city": "Yucca Valley"
  },
  {
    "zip": "92285",
    "city": "Landers"
  },
  {
    "zip": "92301",
    "city": "Adelanto"
  },
  {
    "zip": "92305",
    "city": "Angelus Oaks"
  },
  {
    "zip": "92307",
    "city": "Apple Valley"
  },
  {
    "zip": "92310",
    "city": "Fort Irwin"
  },
  {
    "zip": "92311",
    "city": "Barstow"
  },
  {
    "zip": "92313",
    "city": "Grand Terrace"
  },
  {
    "zip": "92314",
    "city": "Big Bear City"
  },
  {
    "zip": "92315",
    "city": "Big Bear Lake"
  },
  {
    "zip": "92320",
    "city": "Calimesa"
  },
  {
    "zip": "92323",
    "city": "Cima"
  },
  {
    "zip": "92328",
    "city": "Death Valley"
  },
  {
    "zip": "92339",
    "city": "Forest Falls"
  },
  {
    "zip": "92342",
    "city": "Helendale"
  },
  {
    "zip": "92347",
    "city": "Hinkley"
  },
  {
    "zip": "92354",
    "city": "Loma Linda"
  },
  {
    "zip": "92356",
    "city": "Lucerne Valley"
  },
  {
    "zip": "92358",
    "city": "Lytle Creek"
  },
  {
    "zip": "92363",
    "city": "Needles"
  },
  {
    "zip": "92364",
    "city": "Nipton"
  },
  {
    "zip": "92365",
    "city": "Newberry Springs"
  },
  {
    "zip": "92366",
    "city": "Mountain Pass"
  },
  {
    "zip": "92368",
    "city": "Oro Grande"
  },
  {
    "zip": "92371",
    "city": "Phelan"
  },
  {
    "zip": "92372",
    "city": "Pinon Hills"
  },
  {
    "zip": "92373",
    "city": "Redlands"
  },
  {
    "zip": "92376",
    "city": "Rialto"
  },
  {
    "zip": "92392",
    "city": "Victorville"
  },
  {
    "zip": "92397",
    "city": "Wrightwood"
  },
  {
    "zip": "92399",
    "city": "Yucaipa"
  },
  {
    "zip": "92401",
    "city": "San Bernardino"
  },
  {
    "zip": "92518",
    "city": "March Air Reserve Base"
  },
  {
    "zip": "92530",
    "city": "Lake Elsinore"
  },
  {
    "zip": "92536",
    "city": "Aguanga"
  },
  {
    "zip": "92539",
    "city": "Anza"
  },
  {
    "zip": "92543",
    "city": "Hemet"
  },
  {
    "zip": "92548",
    "city": "Homeland"
  },
  {
    "zip": "92549",
    "city": "Idyllwild"
  },
  {
    "zip": "92551",
    "city": "Moreno Valley"
  },
  {
    "zip": "92561",
    "city": "Mountain Center"
  },
  {
    "zip": "92562",
    "city": "Murrieta"
  },
  {
    "zip": "92567",
    "city": "Nuevo"
  },
  {
    "zip": "92570",
    "city": "Perris"
  },
  {
    "zip": "92582",
    "city": "San Jacinto"
  },
  {
    "zip": "92584",
    "city": "Menifee"
  },
  {
    "zip": "92590",
    "city": "Temecula"
  },
  {
    "zip": "92595",
    "city": "Wildomar"
  },
  {
    "zip": "92610",
    "city": "Foothill Ranch"
  },
  {
    "zip": "92624",
    "city": "Capistrano Beach"
  },
  {
    "zip": "92625",
    "city": "Corona Del Mar"
  },
  {
    "zip": "92626",
    "city": "Costa Mesa"
  },
  {
    "zip": "92629",
    "city": "Dana Point"
  },
  {
    "zip": "92637",
    "city": "Laguna Woods"
  },
  {
    "zip": "92646",
    "city": "Huntington Beach"
  },
  {
    "zip": "92651",
    "city": "Laguna Beach"
  },
  {
    "zip": "92653",
    "city": "Laguna Hills"
  },
  {
    "zip": "92655",
    "city": "Midway City"
  },
  {
    "zip": "92656",
    "city": "Aliso Viejo"
  },
  {
    "zip": "92657",
    "city": "Newport Coast"
  },
  {
    "zip": "92660",
    "city": "Newport Beach"
  },
  {
    "zip": "92672",
    "city": "San Clemente"
  },
  {
    "zip": "92675",
    "city": "San Juan Capistrano"
  },
  {
    "zip": "92676",
    "city": "Silverado"
  },
  {
    "zip": "92677",
    "city": "Laguna Niguel"
  },
  {
    "zip": "92679",
    "city": "Trabuco Canyon"
  },
  {
    "zip": "92688",
    "city": "Rancho Santa Margarita"
  },
  {
    "zip": "92691",
    "city": "Mission Viejo"
  },
  {
    "zip": "92694",
    "city": "Ladera Ranch"
  },
  {
    "zip": "92701",
    "city": "Santa Ana"
  },
  {
    "zip": "92708",
    "city": "Fountain Valley"
  },
  {
    "zip": "92801",
    "city": "Anaheim"
  },
  {
    "zip": "92821",
    "city": "Brea"
  },
  {
    "zip": "92870",
    "city": "Placentia"
  },
  {
    "zip": "92886",
    "city": "Yorba Linda"
  },
  {
    "zip": "93010",
    "city": "Camarillo"
  },
  {
    "zip": "93013",
    "city": "Carpinteria"
  },
  {
    "zip": "93021",
    "city": "Moorpark"
  },
  {
    "zip": "93022",
    "city": "Oak View"
  },
  {
    "zip": "93023",
    "city": "Ojai"
  },
  {
    "zip": "93030",
    "city": "Oxnard"
  },
  {
    "zip": "93041",
    "city": "Port Hueneme"
  },
  {
    "zip": "93042",
    "city": "Point Mugu Nawc"
  },
  {
    "zip": "93043",
    "city": "Port Hueneme Cbc Base"
  },
  {
    "zip": "93060",
    "city": "Santa Paula"
  },
  {
    "zip": "93063",
    "city": "Simi Valley"
  },
  {
    "zip": "93064",
    "city": "Brandeis"
  },
  {
    "zip": "93066",
    "city": "Somis"
  },
  {
    "zip": "93101",
    "city": "Santa Barbara"
  },
  {
    "zip": "93117",
    "city": "Goleta"
  },
  {
    "zip": "93202",
    "city": "Armona"
  },
  {
    "zip": "93203",
    "city": "Arvin"
  },
  {
    "zip": "93204",
    "city": "Avenal"
  },
  {
    "zip": "93205",
    "city": "Bodfish"
  },
  {
    "zip": "93206",
    "city": "Buttonwillow"
  },
  {
    "zip": "93207",
    "city": "California Hot Springs"
  },
  {
    "zip": "93210",
    "city": "Coalinga"
  },
  {
    "zip": "93212",
    "city": "Corcoran"
  },
  {
    "zip": "93219",
    "city": "Earlimart"
  },
  {
    "zip": "93224",
    "city": "Fellows"
  },
  {
    "zip": "93225",
    "city": "Frazier Park"
  },
  {
    "zip": "93230",
    "city": "Hanford"
  },
  {
    "zip": "93238",
    "city": "Kernville"
  },
  {
    "zip": "93239",
    "city": "Kettleman City"
  },
  {
    "zip": "93240",
    "city": "Lake Isabella"
  },
  {
    "zip": "93242",
    "city": "Laton"
  },
  {
    "zip": "93243",
    "city": "Lebec"
  },
  {
    "zip": "93244",
    "city": "Lemon Cove"
  },
  {
    "zip": "93245",
    "city": "Lemoore"
  },
  {
    "zip": "93249",
    "city": "Lost Hills"
  },
  {
    "zip": "93251",
    "city": "Mc Kittrick"
  },
  {
    "zip": "93254",
    "city": "New Cuyama"
  },
  {
    "zip": "93255",
    "city": "Onyx"
  },
  {
    "zip": "93256",
    "city": "Pixley"
  },
  {
    "zip": "93260",
    "city": "Posey"
  },
  {
    "zip": "93262",
    "city": "Sequoia National Park"
  },
  {
    "zip": "93263",
    "city": "Shafter"
  },
  {
    "zip": "93267",
    "city": "Strathmore"
  },
  {
    "zip": "93270",
    "city": "Terra Bella"
  },
  {
    "zip": "93277",
    "city": "Visalia"
  },
  {
    "zip": "93280",
    "city": "Wasco"
  },
  {
    "zip": "93285",
    "city": "Wofford Heights"
  },
  {
    "zip": "93286",
    "city": "Woodlake"
  },
  {
    "zip": "93287",
    "city": "Woody"
  },
  {
    "zip": "93401",
    "city": "San Luis Obispo"
  },
  {
    "zip": "93402",
    "city": "Los Osos"
  },
  {
    "zip": "93420",
    "city": "Arroyo Grande"
  },
  {
    "zip": "93422",
    "city": "Atascadero"
  },
  {
    "zip": "93427",
    "city": "Buellton"
  },
  {
    "zip": "93430",
    "city": "Cayucos"
  },
  {
    "zip": "93433",
    "city": "Grover Beach"
  },
  {
    "zip": "93434",
    "city": "Guadalupe"
  },
  {
    "zip": "93436",
    "city": "Lompoc"
  },
  {
    "zip": "93442",
    "city": "Morro Bay"
  },
  {
    "zip": "93444",
    "city": "Nipomo"
  },
  {
    "zip": "93445",
    "city": "Oceano"
  },
  {
    "zip": "93446",
    "city": "Paso Robles"
  },
  {
    "zip": "93449",
    "city": "Pismo Beach"
  },
  {
    "zip": "93450",
    "city": "San Ardo"
  },
  {
    "zip": "93451",
    "city": "San Miguel"
  },
  {
    "zip": "93452",
    "city": "San Simeon"
  },
  {
    "zip": "93453",
    "city": "Santa Margarita"
  },
  {
    "zip": "93454",
    "city": "Santa Maria"
  },
  {
    "zip": "93460",
    "city": "Santa Ynez"
  },
  {
    "zip": "93461",
    "city": "Shandon"
  },
  {
    "zip": "93463",
    "city": "Solvang"
  },
  {
    "zip": "93501",
    "city": "Mojave"
  },
  {
    "zip": "93505",
    "city": "California City"
  },
  {
    "zip": "93513",
    "city": "Big Pine"
  },
  {
    "zip": "93516",
    "city": "Boron"
  },
  {
    "zip": "93527",
    "city": "Inyokern"
  },
  {
    "zip": "93529",
    "city": "June Lake"
  },
  {
    "zip": "93532",
    "city": "Lake Hughes"
  },
  {
    "zip": "93543",
    "city": "Littlerock"
  },
  {
    "zip": "93545",
    "city": "Lone Pine"
  },
  {
    "zip": "93546",
    "city": "Mammoth Lakes"
  },
  {
    "zip": "93550",
    "city": "Palmdale"
  },
  {
    "zip": "93553",
    "city": "Pearblossom"
  },
  {
    "zip": "93555",
    "city": "Ridgecrest"
  },
  {
    "zip": "93561",
    "city": "Tehachapi"
  },
  {
    "zip": "93562",
    "city": "Trona"
  },
  {
    "zip": "93563",
    "city": "Valyermo"
  },
  {
    "zip": "93601",
    "city": "Ahwahnee"
  },
  {
    "zip": "93602",
    "city": "Auberry"
  },
  {
    "zip": "93604",
    "city": "Bass Lake"
  },
  {
    "zip": "93608",
    "city": "Cantua Creek"
  },
  {
    "zip": "93609",
    "city": "Caruthers"
  },
  {
    "zip": "93610",
    "city": "Chowchilla"
  },
  {
    "zip": "93614",
    "city": "Coarsegold"
  },
  {
    "zip": "93616",
    "city": "Del Rey"
  },
  {
    "zip": "93618",
    "city": "Dinuba"
  },
  {
    "zip": "93620",
    "city": "Dos Palos"
  },
  {
    "zip": "93622",
    "city": "Firebaugh"
  },
  {
    "zip": "93623",
    "city": "Fish Camp"
  },
  {
    "zip": "93626",
    "city": "Friant"
  },
  {
    "zip": "93630",
    "city": "Kerman"
  },
  {
    "zip": "93631",
    "city": "Kingsburg"
  },
  {
    "zip": "93635",
    "city": "Los Banos"
  },
  {
    "zip": "93641",
    "city": "Miramonte"
  },
  {
    "zip": "93645",
    "city": "O Neals"
  },
  {
    "zip": "93646",
    "city": "Orange Cove"
  },
  {
    "zip": "93647",
    "city": "Orosi"
  },
  {
    "zip": "93648",
    "city": "Parlier"
  },
  {
    "zip": "93651",
    "city": "Prather"
  },
  {
    "zip": "93652",
    "city": "Raisin City"
  },
  {
    "zip": "93654",
    "city": "Reedley"
  },
  {
    "zip": "93660",
    "city": "San Joaquin"
  },
  {
    "zip": "93664",
    "city": "Shaver Lake"
  },
  {
    "zip": "93667",
    "city": "Tollhouse"
  },
  {
    "zip": "93668",
    "city": "Tranquillity"
  },
  {
    "zip": "93669",
    "city": "Wishon"
  },
  {
    "zip": "93675",
    "city": "Squaw Valley"
  },
  {
    "zip": "93920",
    "city": "Big Sur"
  },
  {
    "zip": "93924",
    "city": "Carmel Valley"
  },
  {
    "zip": "93925",
    "city": "Chualar"
  },
  {
    "zip": "93933",
    "city": "Marina"
  },
  {
    "zip": "93950",
    "city": "Pacific Grove"
  },
  {
    "zip": "93953",
    "city": "Pebble Beach"
  },
  {
    "zip": "93955",
    "city": "Seaside"
  },
  {
    "zip": "93960",
    "city": "Soledad"
  },
  {
    "zip": "94005",
    "city": "Brisbane"
  },
  {
    "zip": "94014",
    "city": "Daly City"
  },
  {
    "zip": "94019",
    "city": "Half Moon Bay"
  },
  {
    "zip": "94020",
    "city": "La Honda"
  },
  {
    "zip": "94021",
    "city": "Loma Mar"
  },
  {
    "zip": "94022",
    "city": "Los Altos"
  },
  {
    "zip": "94025",
    "city": "Menlo Park"
  },
  {
    "zip": "94027",
    "city": "Atherton"
  },
  {
    "zip": "94028",
    "city": "Portola Valley"
  },
  {
    "zip": "94030",
    "city": "Millbrae"
  },
  {
    "zip": "94038",
    "city": "Moss Beach"
  },
  {
    "zip": "94044",
    "city": "Pacifica"
  },
  {
    "zip": "94060",
    "city": "Pescadero"
  },
  {
    "zip": "94061",
    "city": "Redwood City"
  },
  {
    "zip": "94066",
    "city": "San Bruno"
  },
  {
    "zip": "94070",
    "city": "San Carlos"
  },
  {
    "zip": "94074",
    "city": "San Gregorio"
  },
  {
    "zip": "94080",
    "city": "South San Francisco"
  },
  {
    "zip": "94101",
    "city": "San Francisco"
  },
  {
    "zip": "94301",
    "city": "Palo Alto"
  },
  {
    "zip": "94501",
    "city": "Alameda"
  },
  {
    "zip": "94503",
    "city": "American Canyon"
  },
  {
    "zip": "94505",
    "city": "Discovery Bay"
  },
  {
    "zip": "94508",
    "city": "Angwin"
  },
  {
    "zip": "94510",
    "city": "Benicia"
  },
  {
    "zip": "94512",
    "city": "Birds Landing"
  },
  {
    "zip": "94515",
    "city": "Calistoga"
  },
  {
    "zip": "94530",
    "city": "El Cerrito"
  },
  {
    "zip": "94535",
    "city": "Travis Afb"
  },
  {
    "zip": "94546",
    "city": "Castro Valley"
  },
  {
    "zip": "94547",
    "city": "Hercules"
  },
  {
    "zip": "94553",
    "city": "Martinez"
  },
  {
    "zip": "94556",
    "city": "Moraga"
  },
  {
    "zip": "94558",
    "city": "Napa"
  },
  {
    "zip": "94563",
    "city": "Orinda"
  },
  {
    "zip": "94564",
    "city": "Pinole"
  },
  {
    "zip": "94567",
    "city": "Pope Valley"
  },
  {
    "zip": "94572",
    "city": "Rodeo"
  },
  {
    "zip": "94577",
    "city": "San Leandro"
  },
  {
    "zip": "94582",
    "city": "San Ramon"
  },
  {
    "zip": "94585",
    "city": "Suisun City"
  },
  {
    "zip": "94586",
    "city": "Sunol"
  },
  {
    "zip": "94589",
    "city": "Vallejo"
  },
  {
    "zip": "94595",
    "city": "Walnut Creek"
  },
  {
    "zip": "94599",
    "city": "Yountville"
  },
  {
    "zip": "94608",
    "city": "Emeryville"
  },
  {
    "zip": "94803",
    "city": "El Sobrante"
  },
  {
    "zip": "94806",
    "city": "San Pablo"
  },
  {
    "zip": "94901",
    "city": "San Rafael"
  },
  {
    "zip": "94904",
    "city": "Greenbrae"
  },
  {
    "zip": "94920",
    "city": "Belvedere Tiburon"
  },
  {
    "zip": "94922",
    "city": "Bodega"
  },
  {
    "zip": "94923",
    "city": "Bodega Bay"
  },
  {
    "zip": "94924",
    "city": "Bolinas"
  },
  {
    "zip": "94925",
    "city": "Corte Madera"
  },
  {
    "zip": "94928",
    "city": "Rohnert Park"
  },
  {
    "zip": "94931",
    "city": "Cotati"
  },
  {
    "zip": "94941",
    "city": "Mill Valley"
  },
  {
    "zip": "94945",
    "city": "Novato"
  },
  {
    "zip": "94946",
    "city": "Nicasio"
  },
  {
    "zip": "94951",
    "city": "Penngrove"
  },
  {
    "zip": "94952",
    "city": "Petaluma"
  },
  {
    "zip": "94956",
    "city": "Point Reyes Station"
  },
  {
    "zip": "94960",
    "city": "San Anselmo"
  },
  {
    "zip": "94965",
    "city": "Sausalito"
  },
  {
    "zip": "94970",
    "city": "Stinson Beach"
  },
  {
    "zip": "94972",
    "city": "Valley Ford"
  },
  {
    "zip": "94974",
    "city": "San Quentin"
  },
  {
    "zip": "95003",
    "city": "Aptos"
  },
  {
    "zip": "95004",
    "city": "Aromas"
  },
  {
    "zip": "95005",
    "city": "Ben Lomond"
  },
  {
    "zip": "95006",
    "city": "Boulder Creek"
  },
  {
    "zip": "95010",
    "city": "Capitola"
  },
  {
    "zip": "95014",
    "city": "Cupertino"
  },
  {
    "zip": "95020",
    "city": "Gilroy"
  },
  {
    "zip": "95030",
    "city": "Los Gatos"
  },
  {
    "zip": "95035",
    "city": "Milpitas"
  },
  {
    "zip": "95037",
    "city": "Morgan Hill"
  },
  {
    "zip": "95039",
    "city": "Moss Landing"
  },
  {
    "zip": "95043",
    "city": "Paicines"
  },
  {
    "zip": "95045",
    "city": "San Juan Bautista"
  },
  {
    "zip": "95046",
    "city": "San Martin"
  },
  {
    "zip": "95066",
    "city": "Scotts Valley"
  },
  {
    "zip": "95073",
    "city": "Soquel"
  },
  {
    "zip": "95075",
    "city": "Tres Pinos"
  },
  {
    "zip": "95076",
    "city": "Watsonville"
  },
  {
    "zip": "95140",
    "city": "Mount Hamilton"
  },
  {
    "zip": "95220",
    "city": "Acampo"
  },
  {
    "zip": "95222",
    "city": "Angels Camp"
  },
  {
    "zip": "95228",
    "city": "Copperopolis"
  },
  {
    "zip": "95237",
    "city": "Lockeford"
  },
  {
    "zip": "95245",
    "city": "Mokelumne Hill"
  },
  {
    "zip": "95246",
    "city": "Mountain Ranch"
  },
  {
    "zip": "95247",
    "city": "Murphys"
  },
  {
    "zip": "95249",
    "city": "San Andreas"
  },
  {
    "zip": "95251",
    "city": "Vallecito"
  },
  {
    "zip": "95257",
    "city": "Wilseyville"
  },
  {
    "zip": "95303",
    "city": "Ballico"
  },
  {
    "zip": "95306",
    "city": "Catheys Valley"
  },
  {
    "zip": "95313",
    "city": "Crows Landing"
  },
  {
    "zip": "95314",
    "city": "Pinecrest"
  },
  {
    "zip": "95316",
    "city": "Denair"
  },
  {
    "zip": "95317",
    "city": "El Nido"
  },
  {
    "zip": "95320",
    "city": "Escalon"
  },
  {
    "zip": "95324",
    "city": "Hilmar"
  },
  {
    "zip": "95325",
    "city": "Hornitos"
  },
  {
    "zip": "95326",
    "city": "Hughson"
  },
  {
    "zip": "95333",
    "city": "Le Grand"
  },
  {
    "zip": "95335",
    "city": "Long Barn"
  },
  {
    "zip": "95336",
    "city": "Manteca"
  },
  {
    "zip": "95338",
    "city": "Mariposa"
  },
  {
    "zip": "95340",
    "city": "Merced"
  },
  {
    "zip": "95345",
    "city": "Midpines"
  },
  {
    "zip": "95346",
    "city": "Mi Wuk Village"
  },
  {
    "zip": "95365",
    "city": "Planada"
  },
  {
    "zip": "95367",
    "city": "Riverbank"
  },
  {
    "zip": "95369",
    "city": "Snelling"
  },
  {
    "zip": "95372",
    "city": "Soulsbyville"
  },
  {
    "zip": "95374",
    "city": "Stevinson"
  },
  {
    "zip": "95379",
    "city": "Tuolumne"
  },
  {
    "zip": "95380",
    "city": "Turlock"
  },
  {
    "zip": "95383",
    "city": "Twain Harte"
  },
  {
    "zip": "95385",
    "city": "Vernalis"
  },
  {
    "zip": "95389",
    "city": "Yosemite National Park"
  },
  {
    "zip": "95417",
    "city": "Branscomb"
  },
  {
    "zip": "95420",
    "city": "Caspar"
  },
  {
    "zip": "95421",
    "city": "Cazadero"
  },
  {
    "zip": "95422",
    "city": "Clearlake"
  },
  {
    "zip": "95423",
    "city": "Clearlake Oaks"
  },
  {
    "zip": "95427",
    "city": "Comptche"
  },
  {
    "zip": "95428",
    "city": "Covelo"
  },
  {
    "zip": "95429",
    "city": "Dos Rios"
  },
  {
    "zip": "95432",
    "city": "Elk"
  },
  {
    "zip": "95441",
    "city": "Geyserville"
  },
  {
    "zip": "95442",
    "city": "Glen Ellen"
  },
  {
    "zip": "95443",
    "city": "Glenhaven"
  },
  {
    "zip": "95444",
    "city": "Graton"
  },
  {
    "zip": "95445",
    "city": "Gualala"
  },
  {
    "zip": "95446",
    "city": "Guerneville"
  },
  {
    "zip": "95448",
    "city": "Healdsburg"
  },
  {
    "zip": "95449",
    "city": "Hopland"
  },
  {
    "zip": "95450",
    "city": "Jenner"
  },
  {
    "zip": "95451",
    "city": "Kelseyville"
  },
  {
    "zip": "95452",
    "city": "Kenwood"
  },
  {
    "zip": "95453",
    "city": "Lakeport"
  },
  {
    "zip": "95454",
    "city": "Laytonville"
  },
  {
    "zip": "95457",
    "city": "Lower Lake"
  },
  {
    "zip": "95460",
    "city": "Mendocino"
  },
  {
    "zip": "95462",
    "city": "Monte Rio"
  },
  {
    "zip": "95463",
    "city": "Navarro"
  },
  {
    "zip": "95464",
    "city": "Nice"
  },
  {
    "zip": "95465",
    "city": "Occidental"
  },
  {
    "zip": "95467",
    "city": "Hidden Valley Lake"
  },
  {
    "zip": "95468",
    "city": "Point Arena"
  },
  {
    "zip": "95469",
    "city": "Potter Valley"
  },
  {
    "zip": "95470",
    "city": "Redwood Valley"
  },
  {
    "zip": "95472",
    "city": "Sebastopol"
  },
  {
    "zip": "95476",
    "city": "Sonoma"
  },
  {
    "zip": "95480",
    "city": "Stewarts Point"
  },
  {
    "zip": "95482",
    "city": "Ukiah"
  },
  {
    "zip": "95485",
    "city": "Upper Lake"
  },
  {
    "zip": "95490",
    "city": "Willits"
  },
  {
    "zip": "95493",
    "city": "Witter Springs"
  },
  {
    "zip": "95511",
    "city": "Alderpoint"
  },
  {
    "zip": "95514",
    "city": "Blocksburg"
  },
  {
    "zip": "95519",
    "city": "Mckinleyville"
  },
  {
    "zip": "95521",
    "city": "Arcata"
  },
  {
    "zip": "95525",
    "city": "Blue Lake"
  },
  {
    "zip": "95527",
    "city": "Burnt Ranch"
  },
  {
    "zip": "95528",
    "city": "Carlotta"
  },
  {
    "zip": "95542",
    "city": "Garberville"
  },
  {
    "zip": "95543",
    "city": "Gasquet"
  },
  {
    "zip": "95546",
    "city": "Hoopa"
  },
  {
    "zip": "95547",
    "city": "Hydesville"
  },
  {
    "zip": "95548",
    "city": "Klamath"
  },
  {
    "zip": "95549",
    "city": "Kneeland"
  },
  {
    "zip": "95550",
    "city": "Korbel"
  },
  {
    "zip": "95551",
    "city": "Loleta"
  },
  {
    "zip": "95552",
    "city": "Mad River"
  },
  {
    "zip": "95554",
    "city": "Myers Flat"
  },
  {
    "zip": "95555",
    "city": "Orick"
  },
  {
    "zip": "95560",
    "city": "Redway"
  },
  {
    "zip": "95562",
    "city": "Rio Dell"
  },
  {
    "zip": "95564",
    "city": "Samoa"
  },
  {
    "zip": "95567",
    "city": "Smith River"
  },
  {
    "zip": "95568",
    "city": "Somes Bar"
  },
  {
    "zip": "95569",
    "city": "Redcrest"
  },
  {
    "zip": "95573",
    "city": "Willow Creek"
  },
  {
    "zip": "95585",
    "city": "Leggett"
  },
  {
    "zip": "95587",
    "city": "Piercy"
  },
  {
    "zip": "95589",
    "city": "Whitethorn"
  },
  {
    "zip": "95595",
    "city": "Zenia"
  },
  {
    "zip": "95605",
    "city": "West Sacramento"
  },
  {
    "zip": "95607",
    "city": "Capay"
  },
  {
    "zip": "95608",
    "city": "Carmichael"
  },
  {
    "zip": "95610",
    "city": "Citrus Heights"
  },
  {
    "zip": "95614",
    "city": "Cool"
  },
  {
    "zip": "95619",
    "city": "Diamond Springs"
  },
  {
    "zip": "95624",
    "city": "Elk Grove"
  },
  {
    "zip": "95626",
    "city": "Elverta"
  },
  {
    "zip": "95627",
    "city": "Esparto"
  },
  {
    "zip": "95629",
    "city": "Fiddletown"
  },
  {
    "zip": "95631",
    "city": "Foresthill"
  },
  {
    "zip": "95636",
    "city": "Grizzly Flats"
  },
  {
    "zip": "95637",
    "city": "Guinda"
  },
  {
    "zip": "95638",
    "city": "Herald"
  },
  {
    "zip": "95640",
    "city": "Ione"
  },
  {
    "zip": "95641",
    "city": "Isleton"
  },
  {
    "zip": "95645",
    "city": "Knights Landing"
  },
  {
    "zip": "95651",
    "city": "Lotus"
  },
  {
    "zip": "95652",
    "city": "Mcclellan"
  },
  {
    "zip": "95655",
    "city": "Mather"
  },
  {
    "zip": "95659",
    "city": "Nicolaus"
  },
  {
    "zip": "95660",
    "city": "North Highlands"
  },
  {
    "zip": "95662",
    "city": "Orangevale"
  },
  {
    "zip": "95663",
    "city": "Penryn"
  },
  {
    "zip": "95664",
    "city": "Pilot Hill"
  },
  {
    "zip": "95670",
    "city": "Rancho Cordova"
  },
  {
    "zip": "95671",
    "city": "Represa"
  },
  {
    "zip": "95672",
    "city": "Rescue"
  },
  {
    "zip": "95673",
    "city": "Rio Linda"
  },
  {
    "zip": "95674",
    "city": "Rio Oso"
  },
  {
    "zip": "95677",
    "city": "Rocklin"
  },
  {
    "zip": "95682",
    "city": "Shingle Springs"
  },
  {
    "zip": "95683",
    "city": "Sloughhouse"
  },
  {
    "zip": "95685",
    "city": "Sutter Creek"
  },
  {
    "zip": "95687",
    "city": "Vacaville"
  },
  {
    "zip": "95689",
    "city": "Volcano"
  },
  {
    "zip": "95709",
    "city": "Camino"
  },
  {
    "zip": "95720",
    "city": "Kyburz"
  },
  {
    "zip": "95722",
    "city": "Meadow Vista"
  },
  {
    "zip": "95726",
    "city": "Pollock Pines"
  },
  {
    "zip": "95746",
    "city": "Granite Bay"
  },
  {
    "zip": "95762",
    "city": "El Dorado Hills"
  },
  {
    "zip": "95903",
    "city": "Beale Afb"
  },
  {
    "zip": "95910",
    "city": "Alleghany"
  },
  {
    "zip": "95912",
    "city": "Arbuckle"
  },
  {
    "zip": "95916",
    "city": "Berry Creek"
  },
  {
    "zip": "95917",
    "city": "Biggs"
  },
  {
    "zip": "95920",
    "city": "Butte City"
  },
  {
    "zip": "95922",
    "city": "Camptonville"
  },
  {
    "zip": "95923",
    "city": "Canyon Dam"
  },
  {
    "zip": "95925",
    "city": "Challenge"
  },
  {
    "zip": "95930",
    "city": "Clipper Mills"
  },
  {
    "zip": "95932",
    "city": "Colusa"
  },
  {
    "zip": "95934",
    "city": "Crescent Mills"
  },
  {
    "zip": "95935",
    "city": "Dobbins"
  },
  {
    "zip": "95941",
    "city": "Forbestown"
  },
  {
    "zip": "95942",
    "city": "Forest Ranch"
  },
  {
    "zip": "95943",
    "city": "Glenn"
  },
  {
    "zip": "95945",
    "city": "Grass Valley"
  },
  {
    "zip": "95946",
    "city": "Penn Valley"
  },
  {
    "zip": "95954",
    "city": "Magalia"
  },
  {
    "zip": "95959",
    "city": "Nevada City"
  },
  {
    "zip": "95960",
    "city": "North San Juan"
  },
  {
    "zip": "95961",
    "city": "Olivehurst"
  },
  {
    "zip": "95962",
    "city": "Oregon House"
  },
  {
    "zip": "95965",
    "city": "Oroville"
  },
  {
    "zip": "95972",
    "city": "Rackerby"
  },
  {
    "zip": "95975",
    "city": "Rough And Ready"
  },
  {
    "zip": "95977",
    "city": "Smartsville"
  },
  {
    "zip": "95979",
    "city": "Stonyford"
  },
  {
    "zip": "95981",
    "city": "Strawberry Valley"
  },
  {
    "zip": "95988",
    "city": "Willows"
  },
  {
    "zip": "95991",
    "city": "Yuba City"
  },
  {
    "zip": "96006",
    "city": "Adin"
  },
  {
    "zip": "96010",
    "city": "Big Bar"
  },
  {
    "zip": "96013",
    "city": "Burney"
  },
  {
    "zip": "96016",
    "city": "Cassel"
  },
  {
    "zip": "96017",
    "city": "Castella"
  },
  {
    "zip": "96019",
    "city": "Shasta Lake"
  },
  {
    "zip": "96023",
    "city": "Dorris"
  },
  {
    "zip": "96024",
    "city": "Douglas City"
  },
  {
    "zip": "96025",
    "city": "Dunsmuir"
  },
  {
    "zip": "96028",
    "city": "Fall River Mills"
  },
  {
    "zip": "96029",
    "city": "Flournoy"
  },
  {
    "zip": "96031",
    "city": "Forks Of Salmon"
  },
  {
    "zip": "96032",
    "city": "Fort Jones"
  },
  {
    "zip": "96033",
    "city": "French Gulch"
  },
  {
    "zip": "96034",
    "city": "Gazelle"
  },
  {
    "zip": "96035",
    "city": "Gerber"
  },
  {
    "zip": "96039",
    "city": "Happy Camp"
  },
  {
    "zip": "96040",
    "city": "Hat Creek"
  },
  {
    "zip": "96041",
    "city": "Hayfork"
  },
  {
    "zip": "96044",
    "city": "Hornbrook"
  },
  {
    "zip": "96047",
    "city": "Igo"
  },
  {
    "zip": "96050",
    "city": "Klamath River"
  },
  {
    "zip": "96051",
    "city": "Lakehead"
  },
  {
    "zip": "96055",
    "city": "Los Molinos"
  },
  {
    "zip": "96056",
    "city": "Mcarthur"
  },
  {
    "zip": "96057",
    "city": "Mccloud"
  },
  {
    "zip": "96058",
    "city": "Macdoel"
  },
  {
    "zip": "96065",
    "city": "Montgomery Creek"
  },
  {
    "zip": "96067",
    "city": "Mount Shasta"
  },
  {
    "zip": "96069",
    "city": "Oak Run"
  },
  {
    "zip": "96071",
    "city": "Old Station"
  },
  {
    "zip": "96073",
    "city": "Palo Cedro"
  },
  {
    "zip": "96075",
    "city": "Paynes Creek"
  },
  {
    "zip": "96076",
    "city": "Platina"
  },
  {
    "zip": "96080",
    "city": "Red Bluff"
  },
  {
    "zip": "96085",
    "city": "Scott Bar"
  },
  {
    "zip": "96086",
    "city": "Seiad Valley"
  },
  {
    "zip": "96088",
    "city": "Shingletown"
  },
  {
    "zip": "96091",
    "city": "Trinity Center"
  },
  {
    "zip": "96096",
    "city": "Whitmore"
  },
  {
    "zip": "96097",
    "city": "Yreka"
  },
  {
    "zip": "96101",
    "city": "Alturas"
  },
  {
    "zip": "96103",
    "city": "Blairsden-graeagle"
  },
  {
    "zip": "96105",
    "city": "Chilcoot"
  },
  {
    "zip": "96107",
    "city": "Coleville"
  },
  {
    "zip": "96108",
    "city": "Davis Creek"
  },
  {
    "zip": "96112",
    "city": "Fort Bidwell"
  },
  {
    "zip": "96118",
    "city": "Loyalton"
  },
  {
    "zip": "96120",
    "city": "Markleeville"
  },
  {
    "zip": "96122",
    "city": "Portola"
  },
  {
    "zip": "96123",
    "city": "Ravendale"
  },
  {
    "zip": "96124",
    "city": "Calpine"
  },
  {
    "zip": "96125",
    "city": "Sierra City"
  },
  {
    "zip": "96126",
    "city": "Sierraville"
  },
  {
    "zip": "96129",
    "city": "Beckwourth"
  },
  {
    "zip": "96130",
    "city": "Susanville"
  },
  {
    "zip": "96132",
    "city": "Termo"
  },
  {
    "zip": "96133",
    "city": "Topaz"
  },
  {
    "zip": "96134",
    "city": "Tulelake"
  },
  {
    "zip": "96136",
    "city": "Wendel"
  },
  {
    "zip": "96146",
    "city": "Olympic Valley"
  },
  {
    "zip": "96150",
    "city": "South Lake Tahoe"
  },
  {
    "zip": "96161",
    "city": "Truckee"
  },
  {
    "zip": "96701",
    "city": "Aiea"
  },
  {
    "zip": "96704",
    "city": "Captain Cook"
  },
  {
    "zip": "96706",
    "city": "Ewa Beach"
  },
  {
    "zip": "96707",
    "city": "Kapolei"
  },
  {
    "zip": "96708",
    "city": "Haiku"
  },
  {
    "zip": "96712",
    "city": "Haleiwa"
  },
  {
    "zip": "96713",
    "city": "Hana"
  },
  {
    "zip": "96717",
    "city": "Hauula"
  },
  {
    "zip": "96720",
    "city": "Hilo"
  },
  {
    "zip": "96725",
    "city": "Holualoa"
  },
  {
    "zip": "96727",
    "city": "Honokaa"
  },
  {
    "zip": "96730",
    "city": "Kaaawa"
  },
  {
    "zip": "96731",
    "city": "Kahuku"
  },
  {
    "zip": "96732",
    "city": "Kahului"
  },
  {
    "zip": "96734",
    "city": "Kailua"
  },
  {
    "zip": "96738",
    "city": "Waikoloa"
  },
  {
    "zip": "96740",
    "city": "Kailua Kona"
  },
  {
    "zip": "96741",
    "city": "Kalaheo"
  },
  {
    "zip": "96743",
    "city": "Kamuela"
  },
  {
    "zip": "96744",
    "city": "Kaneohe"
  },
  {
    "zip": "96746",
    "city": "Kapaa"
  },
  {
    "zip": "96748",
    "city": "Kaunakakai"
  },
  {
    "zip": "96749",
    "city": "Keaau"
  },
  {
    "zip": "96750",
    "city": "Kealakekua"
  },
  {
    "zip": "96753",
    "city": "Kihei"
  },
  {
    "zip": "96754",
    "city": "Kilauea"
  },
  {
    "zip": "96756",
    "city": "Koloa"
  },
  {
    "zip": "96760",
    "city": "Kurtistown"
  },
  {
    "zip": "96761",
    "city": "Lahaina"
  },
  {
    "zip": "96762",
    "city": "Laie"
  },
  {
    "zip": "96766",
    "city": "Lihue"
  },
  {
    "zip": "96768",
    "city": "Makawao"
  },
  {
    "zip": "96772",
    "city": "Naalehu"
  },
  {
    "zip": "96778",
    "city": "Pahoa"
  },
  {
    "zip": "96779",
    "city": "Paia"
  },
  {
    "zip": "96781",
    "city": "Papaikou"
  },
  {
    "zip": "96783",
    "city": "Pepeekeo"
  },
  {
    "zip": "96786",
    "city": "Wahiawa"
  },
  {
    "zip": "96789",
    "city": "Mililani"
  },
  {
    "zip": "96790",
    "city": "Kula"
  },
  {
    "zip": "96791",
    "city": "Waialua"
  },
  {
    "zip": "96792",
    "city": "Waianae"
  },
  {
    "zip": "96793",
    "city": "Wailuku"
  },
  {
    "zip": "96795",
    "city": "Waimanalo"
  },
  {
    "zip": "96797",
    "city": "Waipahu"
  },
  {
    "zip": "96813",
    "city": "Honolulu"
  },
  {
    "zip": "96853",
    "city": "J B P H H"
  },
  {
    "zip": "96854",
    "city": "Wheeler Army Airfield"
  },
  {
    "zip": "96857",
    "city": "Schofield Barracks"
  },
  {
    "zip": "96858",
    "city": "Fort Shafter"
  },
  {
    "zip": "96859",
    "city": "Tripler Army Medical Center"
  },
  {
    "zip": "96861",
    "city": "Camp H M Smith"
  },
  {
    "zip": "96863",
    "city": "M C B H Kaneohe Bay"
  },
  {
    "zip": "96910",
    "city": "Hagatna"
  },
  {
    "zip": "96913",
    "city": "Barrigada"
  },
  {
    "zip": "96915",
    "city": "Santa Rita"
  },
  {
    "zip": "96919",
    "city": "Agana Heights"
  },
  {
    "zip": "96929",
    "city": "Yigo"
  },
  {
    "zip": "96939",
    "city": "Palau"
  },
  {
    "zip": "97004",
    "city": "Beavercreek"
  },
  {
    "zip": "97009",
    "city": "Boring"
  },
  {
    "zip": "97014",
    "city": "Cascade Locks"
  },
  {
    "zip": "97015",
    "city": "Clackamas"
  },
  {
    "zip": "97016",
    "city": "Clatskanie"
  },
  {
    "zip": "97019",
    "city": "Corbett"
  },
  {
    "zip": "97020",
    "city": "Donald"
  },
  {
    "zip": "97021",
    "city": "Dufur"
  },
  {
    "zip": "97022",
    "city": "Eagle Creek"
  },
  {
    "zip": "97023",
    "city": "Estacada"
  },
  {
    "zip": "97026",
    "city": "Gervais"
  },
  {
    "zip": "97028",
    "city": "Government Camp"
  },
  {
    "zip": "97031",
    "city": "Hood River"
  },
  {
    "zip": "97034",
    "city": "Lake Oswego"
  },
  {
    "zip": "97037",
    "city": "Maupin"
  },
  {
    "zip": "97038",
    "city": "Molalla"
  },
  {
    "zip": "97040",
    "city": "Mosier"
  },
  {
    "zip": "97041",
    "city": "Mount Hood Parkdale"
  },
  {
    "zip": "97042",
    "city": "Mulino"
  },
  {
    "zip": "97045",
    "city": "Oregon City"
  },
  {
    "zip": "97048",
    "city": "Rainier"
  },
  {
    "zip": "97049",
    "city": "Rhododendron"
  },
  {
    "zip": "97051",
    "city": "Saint Helens"
  },
  {
    "zip": "97054",
    "city": "Deer Island"
  },
  {
    "zip": "97056",
    "city": "Scappoose"
  },
  {
    "zip": "97058",
    "city": "The Dalles"
  },
  {
    "zip": "97062",
    "city": "Tualatin"
  },
  {
    "zip": "97063",
    "city": "Tygh Valley"
  },
  {
    "zip": "97064",
    "city": "Vernonia"
  },
  {
    "zip": "97067",
    "city": "Welches"
  },
  {
    "zip": "97068",
    "city": "West Linn"
  },
  {
    "zip": "97086",
    "city": "Happy Valley"
  },
  {
    "zip": "97102",
    "city": "Arch Cape"
  },
  {
    "zip": "97117",
    "city": "Gales Creek"
  },
  {
    "zip": "97122",
    "city": "Hebo"
  },
  {
    "zip": "97131",
    "city": "Nehalem"
  },
  {
    "zip": "97132",
    "city": "Newberg"
  },
  {
    "zip": "97133",
    "city": "North Plains"
  },
  {
    "zip": "97141",
    "city": "Tillamook"
  },
  {
    "zip": "97144",
    "city": "Timber"
  },
  {
    "zip": "97148",
    "city": "Yamhill"
  },
  {
    "zip": "97149",
    "city": "Neskowin"
  },
  {
    "zip": "97324",
    "city": "Alsea"
  },
  {
    "zip": "97325",
    "city": "Aumsville"
  },
  {
    "zip": "97326",
    "city": "Blodgett"
  },
  {
    "zip": "97329",
    "city": "Cascadia"
  },
  {
    "zip": "97341",
    "city": "Depoe Bay"
  },
  {
    "zip": "97347",
    "city": "Grand Ronde"
  },
  {
    "zip": "97350",
    "city": "Idanha"
  },
  {
    "zip": "97357",
    "city": "Logsden"
  },
  {
    "zip": "97360",
    "city": "Mill City"
  },
  {
    "zip": "97362",
    "city": "Mount Angel"
  },
  {
    "zip": "97364",
    "city": "Neotsu"
  },
  {
    "zip": "97366",
    "city": "South Beach"
  },
  {
    "zip": "97369",
    "city": "Otter Rock"
  },
  {
    "zip": "97370",
    "city": "Philomath"
  },
  {
    "zip": "97371",
    "city": "Rickreall"
  },
  {
    "zip": "97372",
    "city": "Rose Lodge"
  },
  {
    "zip": "97375",
    "city": "Scotts Mills"
  },
  {
    "zip": "97376",
    "city": "Seal Rock"
  },
  {
    "zip": "97377",
    "city": "Shedd"
  },
  {
    "zip": "97380",
    "city": "Siletz"
  },
  {
    "zip": "97383",
    "city": "Stayton"
  },
  {
    "zip": "97385",
    "city": "Sublimity"
  },
  {
    "zip": "97386",
    "city": "Sweet Home"
  },
  {
    "zip": "97389",
    "city": "Tangent"
  },
  {
    "zip": "97390",
    "city": "Tidewater"
  },
  {
    "zip": "97394",
    "city": "Waldport"
  },
  {
    "zip": "97396",
    "city": "Willamina"
  },
  {
    "zip": "97406",
    "city": "Agness"
  },
  {
    "zip": "97410",
    "city": "Azalea"
  },
  {
    "zip": "97411",
    "city": "Bandon"
  },
  {
    "zip": "97412",
    "city": "Blachly"
  },
  {
    "zip": "97414",
    "city": "Broadbent"
  },
  {
    "zip": "97416",
    "city": "Camas Valley"
  },
  {
    "zip": "97417",
    "city": "Canyonville"
  },
  {
    "zip": "97420",
    "city": "Coos Bay"
  },
  {
    "zip": "97423",
    "city": "Coquille"
  },
  {
    "zip": "97427",
    "city": "Culp Creek"
  },
  {
    "zip": "97429",
    "city": "Days Creek"
  },
  {
    "zip": "97434",
    "city": "Dorena"
  },
  {
    "zip": "97435",
    "city": "Drain"
  },
  {
    "zip": "97443",
    "city": "Glide"
  },
  {
    "zip": "97444",
    "city": "Gold Beach"
  },
  {
    "zip": "97447",
    "city": "Idleyld Park"
  },
  {
    "zip": "97450",
    "city": "Langlois"
  },
  {
    "zip": "97451",
    "city": "Lorane"
  },
  {
    "zip": "97454",
    "city": "Marcola"
  },
  {
    "zip": "97457",
    "city": "Myrtle Creek"
  },
  {
    "zip": "97458",
    "city": "Myrtle Point"
  },
  {
    "zip": "97461",
    "city": "Noti"
  },
  {
    "zip": "97463",
    "city": "Oakridge"
  },
  {
    "zip": "97465",
    "city": "Port Orford"
  },
  {
    "zip": "97467",
    "city": "Reedsport"
  },
  {
    "zip": "97469",
    "city": "Riddle"
  },
  {
    "zip": "97470",
    "city": "Roseburg"
  },
  {
    "zip": "97476",
    "city": "Sixes"
  },
  {
    "zip": "97480",
    "city": "Swisshome"
  },
  {
    "zip": "97481",
    "city": "Tenmile"
  },
  {
    "zip": "97484",
    "city": "Tiller"
  },
  {
    "zip": "97486",
    "city": "Umpqua"
  },
  {
    "zip": "97487",
    "city": "Veneta"
  },
  {
    "zip": "97489",
    "city": "Walterville"
  },
  {
    "zip": "97492",
    "city": "Westfir"
  },
  {
    "zip": "97498",
    "city": "Yachats"
  },
  {
    "zip": "97499",
    "city": "Yoncalla"
  },
  {
    "zip": "97502",
    "city": "Central Point"
  },
  {
    "zip": "97522",
    "city": "Butte Falls"
  },
  {
    "zip": "97523",
    "city": "Cave Junction"
  },
  {
    "zip": "97524",
    "city": "Eagle Point"
  },
  {
    "zip": "97526",
    "city": "Grants Pass"
  },
  {
    "zip": "97531",
    "city": "Kerby"
  },
  {
    "zip": "97532",
    "city": "Merlin"
  },
  {
    "zip": "97537",
    "city": "Rogue River"
  },
  {
    "zip": "97539",
    "city": "Shady Cove"
  },
  {
    "zip": "97540",
    "city": "Talent"
  },
  {
    "zip": "97543",
    "city": "Wilderville"
  },
  {
    "zip": "97601",
    "city": "Klamath Falls"
  },
  {
    "zip": "97621",
    "city": "Beatty"
  },
  {
    "zip": "97624",
    "city": "Chiloquin"
  },
  {
    "zip": "97625",
    "city": "Dairy"
  },
  {
    "zip": "97627",
    "city": "Keno"
  },
  {
    "zip": "97632",
    "city": "Malin"
  },
  {
    "zip": "97635",
    "city": "New Pine Creek"
  },
  {
    "zip": "97637",
    "city": "Plush"
  },
  {
    "zip": "97639",
    "city": "Sprague River"
  },
  {
    "zip": "97640",
    "city": "Summer Lake"
  },
  {
    "zip": "97701",
    "city": "Bend"
  },
  {
    "zip": "97710",
    "city": "Fields"
  },
  {
    "zip": "97711",
    "city": "Ashwood"
  },
  {
    "zip": "97712",
    "city": "Brothers"
  },
  {
    "zip": "97730",
    "city": "Camp Sherman"
  },
  {
    "zip": "97731",
    "city": "Chemult"
  },
  {
    "zip": "97736",
    "city": "Frenchglen"
  },
  {
    "zip": "97737",
    "city": "Gilchrist"
  },
  {
    "zip": "97739",
    "city": "La Pine"
  },
  {
    "zip": "97741",
    "city": "Madras"
  },
  {
    "zip": "97753",
    "city": "Powell Butte"
  },
  {
    "zip": "97754",
    "city": "Prineville"
  },
  {
    "zip": "97756",
    "city": "Redmond"
  },
  {
    "zip": "97759",
    "city": "Sisters"
  },
  {
    "zip": "97760",
    "city": "Terrebonne"
  },
  {
    "zip": "97813",
    "city": "Athena"
  },
  {
    "zip": "97814",
    "city": "Baker City"
  },
  {
    "zip": "97817",
    "city": "Bates"
  },
  {
    "zip": "97818",
    "city": "Boardman"
  },
  {
    "zip": "97820",
    "city": "Canyon City"
  },
  {
    "zip": "97830",
    "city": "Fossil"
  },
  {
    "zip": "97833",
    "city": "Haines"
  },
  {
    "zip": "97834",
    "city": "Halfway"
  },
  {
    "zip": "97835",
    "city": "Helix"
  },
  {
    "zip": "97836",
    "city": "Heppner"
  },
  {
    "zip": "97838",
    "city": "Hermiston"
  },
  {
    "zip": "97841",
    "city": "Imbler"
  },
  {
    "zip": "97842",
    "city": "Imnaha"
  },
  {
    "zip": "97844",
    "city": "Irrigon"
  },
  {
    "zip": "97845",
    "city": "John Day"
  },
  {
    "zip": "97850",
    "city": "La Grande"
  },
  {
    "zip": "97857",
    "city": "Lostine"
  },
  {
    "zip": "97861",
    "city": "Mikkalo"
  },
  {
    "zip": "97862",
    "city": "Milton Freewater"
  },
  {
    "zip": "97867",
    "city": "North Powder"
  },
  {
    "zip": "97868",
    "city": "Pilot Rock"
  },
  {
    "zip": "97874",
    "city": "Spray"
  },
  {
    "zip": "97877",
    "city": "Sumpter"
  },
  {
    "zip": "97885",
    "city": "Wallowa"
  },
  {
    "zip": "97903",
    "city": "Brogan"
  },
  {
    "zip": "97904",
    "city": "Drewsey"
  },
  {
    "zip": "97908",
    "city": "Ironside"
  },
  {
    "zip": "97909",
    "city": "Jamieson"
  },
  {
    "zip": "97910",
    "city": "Jordan Valley"
  },
  {
    "zip": "97911",
    "city": "Juntura"
  },
  {
    "zip": "97913",
    "city": "Nyssa"
  },
  {
    "zip": "98003",
    "city": "Federal Way"
  },
  {
    "zip": "98010",
    "city": "Black Diamond"
  },
  {
    "zip": "98011",
    "city": "Bothell"
  },
  {
    "zip": "98014",
    "city": "Carnation"
  },
  {
    "zip": "98019",
    "city": "Duvall"
  },
  {
    "zip": "98020",
    "city": "Edmonds"
  },
  {
    "zip": "98022",
    "city": "Enumclaw"
  },
  {
    "zip": "98024",
    "city": "Fall City"
  },
  {
    "zip": "98027",
    "city": "Issaquah"
  },
  {
    "zip": "98028",
    "city": "Kenmore"
  },
  {
    "zip": "98036",
    "city": "Lynnwood"
  },
  {
    "zip": "98038",
    "city": "Maple Valley"
  },
  {
    "zip": "98040",
    "city": "Mercer Island"
  },
  {
    "zip": "98043",
    "city": "Mountlake Terrace"
  },
  {
    "zip": "98051",
    "city": "Ravensdale"
  },
  {
    "zip": "98054",
    "city": "Redondo"
  },
  {
    "zip": "98055",
    "city": "Renton"
  },
  {
    "zip": "98065",
    "city": "Snoqualmie"
  },
  {
    "zip": "98070",
    "city": "Vashon"
  },
  {
    "zip": "98072",
    "city": "Woodinville"
  },
  {
    "zip": "98074",
    "city": "Sammamish"
  },
  {
    "zip": "98101",
    "city": "Seattle"
  },
  {
    "zip": "98110",
    "city": "Bainbridge Island"
  },
  {
    "zip": "98221",
    "city": "Anacortes"
  },
  {
    "zip": "98222",
    "city": "Blakely Island"
  },
  {
    "zip": "98237",
    "city": "Concrete"
  },
  {
    "zip": "98239",
    "city": "Coupeville"
  },
  {
    "zip": "98241",
    "city": "Darrington"
  },
  {
    "zip": "98245",
    "city": "Eastsound"
  },
  {
    "zip": "98247",
    "city": "Everson"
  },
  {
    "zip": "98250",
    "city": "Friday Harbor"
  },
  {
    "zip": "98251",
    "city": "Gold Bar"
  },
  {
    "zip": "98253",
    "city": "Greenbank"
  },
  {
    "zip": "98257",
    "city": "La Conner"
  },
  {
    "zip": "98258",
    "city": "Lake Stevens"
  },
  {
    "zip": "98261",
    "city": "Lopez Island"
  },
  {
    "zip": "98262",
    "city": "Lummi Island"
  },
  {
    "zip": "98264",
    "city": "Lynden"
  },
  {
    "zip": "98266",
    "city": "Maple Falls"
  },
  {
    "zip": "98267",
    "city": "Marblemount"
  },
  {
    "zip": "98275",
    "city": "Mukilteo"
  },
  {
    "zip": "98279",
    "city": "Olga"
  },
  {
    "zip": "98281",
    "city": "Point Roberts"
  },
  {
    "zip": "98282",
    "city": "Camano Island"
  },
  {
    "zip": "98284",
    "city": "Sedro Woolley"
  },
  {
    "zip": "98290",
    "city": "Snohomish"
  },
  {
    "zip": "98294",
    "city": "Sultan"
  },
  {
    "zip": "98295",
    "city": "Sumas"
  },
  {
    "zip": "98303",
    "city": "Anderson Island"
  },
  {
    "zip": "98310",
    "city": "Bremerton"
  },
  {
    "zip": "98315",
    "city": "Silverdale"
  },
  {
    "zip": "98320",
    "city": "Brinnon"
  },
  {
    "zip": "98323",
    "city": "Carbonado"
  },
  {
    "zip": "98325",
    "city": "Chimacum"
  },
  {
    "zip": "98326",
    "city": "Clallam Bay"
  },
  {
    "zip": "98328",
    "city": "Eatonville"
  },
  {
    "zip": "98329",
    "city": "Gig Harbor"
  },
  {
    "zip": "98330",
    "city": "Elbe"
  },
  {
    "zip": "98331",
    "city": "Forks"
  },
  {
    "zip": "98333",
    "city": "Fox Island"
  },
  {
    "zip": "98336",
    "city": "Glenoma"
  },
  {
    "zip": "98339",
    "city": "Port Hadlock"
  },
  {
    "zip": "98340",
    "city": "Hansville"
  },
  {
    "zip": "98349",
    "city": "Lakebay"
  },
  {
    "zip": "98351",
    "city": "Longbranch"
  },
  {
    "zip": "98358",
    "city": "Nordland"
  },
  {
    "zip": "98359",
    "city": "Olalla"
  },
  {
    "zip": "98360",
    "city": "Orting"
  },
  {
    "zip": "98362",
    "city": "Port Angeles"
  },
  {
    "zip": "98365",
    "city": "Port Ludlow"
  },
  {
    "zip": "98366",
    "city": "Port Orchard"
  },
  {
    "zip": "98368",
    "city": "Port Townsend"
  },
  {
    "zip": "98370",
    "city": "Poulsbo"
  },
  {
    "zip": "98371",
    "city": "Puyallup"
  },
  {
    "zip": "98376",
    "city": "Quilcene"
  },
  {
    "zip": "98377",
    "city": "Randle"
  },
  {
    "zip": "98380",
    "city": "Seabeck"
  },
  {
    "zip": "98381",
    "city": "Sekiu"
  },
  {
    "zip": "98382",
    "city": "Sequim"
  },
  {
    "zip": "98387",
    "city": "Spanaway"
  },
  {
    "zip": "98388",
    "city": "Steilacoom"
  },
  {
    "zip": "98391",
    "city": "Bonney Lake"
  },
  {
    "zip": "98392",
    "city": "Suquamish"
  },
  {
    "zip": "98402",
    "city": "Tacoma"
  },
  {
    "zip": "98430",
    "city": "Camp Murray"
  },
  {
    "zip": "98467",
    "city": "University Place"
  },
  {
    "zip": "98503",
    "city": "Lacey"
  },
  {
    "zip": "98524",
    "city": "Allyn"
  },
  {
    "zip": "98526",
    "city": "Amanda Park"
  },
  {
    "zip": "98528",
    "city": "Belfair"
  },
  {
    "zip": "98532",
    "city": "Chehalis"
  },
  {
    "zip": "98533",
    "city": "Cinebar"
  },
  {
    "zip": "98535",
    "city": "Copalis Beach"
  },
  {
    "zip": "98536",
    "city": "Copalis Crossing"
  },
  {
    "zip": "98537",
    "city": "Cosmopolis"
  },
  {
    "zip": "98546",
    "city": "Grapeview"
  },
  {
    "zip": "98547",
    "city": "Grayland"
  },
  {
    "zip": "98548",
    "city": "Hoodsport"
  },
  {
    "zip": "98550",
    "city": "Hoquiam"
  },
  {
    "zip": "98552",
    "city": "Humptulips"
  },
  {
    "zip": "98555",
    "city": "Lilliwaup"
  },
  {
    "zip": "98557",
    "city": "Mccleary"
  },
  {
    "zip": "98560",
    "city": "Matlock"
  },
  {
    "zip": "98563",
    "city": "Montesano"
  },
  {
    "zip": "98564",
    "city": "Mossyrock"
  },
  {
    "zip": "98569",
    "city": "Ocean Shores"
  },
  {
    "zip": "98572",
    "city": "Pe Ell"
  },
  {
    "zip": "98575",
    "city": "Quinault"
  },
  {
    "zip": "98581",
    "city": "Ryderwood"
  },
  {
    "zip": "98582",
    "city": "Salkum"
  },
  {
    "zip": "98588",
    "city": "Tahuya"
  },
  {
    "zip": "98589",
    "city": "Tenino"
  },
  {
    "zip": "98590",
    "city": "Tokeland"
  },
  {
    "zip": "98593",
    "city": "Vader"
  },
  {
    "zip": "98596",
    "city": "Winlock"
  },
  {
    "zip": "98597",
    "city": "Yelm"
  },
  {
    "zip": "98603",
    "city": "Ariel"
  },
  {
    "zip": "98605",
    "city": "Bingen"
  },
  {
    "zip": "98606",
    "city": "Brush Prairie"
  },
  {
    "zip": "98607",
    "city": "Camas"
  },
  {
    "zip": "98609",
    "city": "Carrolls"
  },
  {
    "zip": "98612",
    "city": "Cathlamet"
  },
  {
    "zip": "98616",
    "city": "Cougar"
  },
  {
    "zip": "98620",
    "city": "Goldendale"
  },
  {
    "zip": "98621",
    "city": "Grays River"
  },
  {
    "zip": "98624",
    "city": "Ilwaco"
  },
  {
    "zip": "98625",
    "city": "Kalama"
  },
  {
    "zip": "98628",
    "city": "Klickitat"
  },
  {
    "zip": "98638",
    "city": "Naselle"
  },
  {
    "zip": "98640",
    "city": "Ocean Park"
  },
  {
    "zip": "98643",
    "city": "Rosburg"
  },
  {
    "zip": "98645",
    "city": "Silverlake"
  },
  {
    "zip": "98647",
    "city": "Skamokawa"
  },
  {
    "zip": "98649",
    "city": "Toutle"
  },
  {
    "zip": "98650",
    "city": "Trout Lake"
  },
  {
    "zip": "98660",
    "city": "Vancouver"
  },
  {
    "zip": "98670",
    "city": "Wahkiacus"
  },
  {
    "zip": "98671",
    "city": "Washougal"
  },
  {
    "zip": "98672",
    "city": "White Salmon"
  },
  {
    "zip": "98675",
    "city": "Yacolt"
  },
  {
    "zip": "98801",
    "city": "Wenatchee"
  },
  {
    "zip": "98802",
    "city": "East Wenatchee"
  },
  {
    "zip": "98815",
    "city": "Cashmere"
  },
  {
    "zip": "98816",
    "city": "Chelan"
  },
  {
    "zip": "98822",
    "city": "Entiat"
  },
  {
    "zip": "98833",
    "city": "Mazama"
  },
  {
    "zip": "98834",
    "city": "Methow"
  },
  {
    "zip": "98837",
    "city": "Moses Lake"
  },
  {
    "zip": "98840",
    "city": "Okanogan"
  },
  {
    "zip": "98841",
    "city": "Omak"
  },
  {
    "zip": "98843",
    "city": "Orondo"
  },
  {
    "zip": "98846",
    "city": "Pateros"
  },
  {
    "zip": "98847",
    "city": "Peshastin"
  },
  {
    "zip": "98851",
    "city": "Soap Lake"
  },
  {
    "zip": "98855",
    "city": "Tonasket"
  },
  {
    "zip": "98856",
    "city": "Twisp"
  },
  {
    "zip": "98857",
    "city": "Warden"
  },
  {
    "zip": "98901",
    "city": "Yakima"
  },
  {
    "zip": "98922",
    "city": "Cle Elum"
  },
  {
    "zip": "98923",
    "city": "Cowiche"
  },
  {
    "zip": "98926",
    "city": "Ellensburg"
  },
  {
    "zip": "98929",
    "city": "Naches"
  },
  {
    "zip": "98935",
    "city": "Mabton"
  },
  {
    "zip": "98936",
    "city": "Moxee"
  },
  {
    "zip": "98942",
    "city": "Selah"
  },
  {
    "zip": "98947",
    "city": "Tieton"
  },
  {
    "zip": "98948",
    "city": "Toppenish"
  },
  {
    "zip": "98951",
    "city": "Wapato"
  },
  {
    "zip": "98952",
    "city": "White Swan"
  },
  {
    "zip": "98953",
    "city": "Zillah"
  },
  {
    "zip": "99001",
    "city": "Airway Heights"
  },
  {
    "zip": "99003",
    "city": "Chattaroy"
  },
  {
    "zip": "99008",
    "city": "Edwall"
  },
  {
    "zip": "99011",
    "city": "Fairchild Air Force Base"
  },
  {
    "zip": "99016",
    "city": "Greenacres"
  },
  {
    "zip": "99018",
    "city": "Latah"
  },
  {
    "zip": "99019",
    "city": "Liberty Lake"
  },
  {
    "zip": "99022",
    "city": "Medical Lake"
  },
  {
    "zip": "99023",
    "city": "Mica"
  },
  {
    "zip": "99025",
    "city": "Newman Lake"
  },
  {
    "zip": "99026",
    "city": "Nine Mile Falls"
  },
  {
    "zip": "99027",
    "city": "Otis Orchards"
  },
  {
    "zip": "99029",
    "city": "Reardan"
  },
  {
    "zip": "99031",
    "city": "Spangle"
  },
  {
    "zip": "99032",
    "city": "Sprague"
  },
  {
    "zip": "99033",
    "city": "Tekoa"
  },
  {
    "zip": "99034",
    "city": "Tumtum"
  },
  {
    "zip": "99036",
    "city": "Valleyford"
  },
  {
    "zip": "99037",
    "city": "Veradale"
  },
  {
    "zip": "99040",
    "city": "Wellpinit"
  },
  {
    "zip": "99101",
    "city": "Addy"
  },
  {
    "zip": "99103",
    "city": "Almira"
  },
  {
    "zip": "99105",
    "city": "Benge"
  },
  {
    "zip": "99109",
    "city": "Chewelah"
  },
  {
    "zip": "99114",
    "city": "Colville"
  },
  {
    "zip": "99115",
    "city": "Coulee City"
  },
  {
    "zip": "99116",
    "city": "Coulee Dam"
  },
  {
    "zip": "99119",
    "city": "Cusick"
  },
  {
    "zip": "99123",
    "city": "Electric City"
  },
  {
    "zip": "99133",
    "city": "Grand Coulee"
  },
  {
    "zip": "99135",
    "city": "Hartline"
  },
  {
    "zip": "99136",
    "city": "Hay"
  },
  {
    "zip": "99137",
    "city": "Hunters"
  },
  {
    "zip": "99138",
    "city": "Inchelium"
  },
  {
    "zip": "99141",
    "city": "Kettle Falls"
  },
  {
    "zip": "99143",
    "city": "Lacrosse"
  },
  {
    "zip": "99144",
    "city": "Lamona"
  },
  {
    "zip": "99148",
    "city": "Loon Lake"
  },
  {
    "zip": "99150",
    "city": "Malo"
  },
  {
    "zip": "99153",
    "city": "Metaline Falls"
  },
  {
    "zip": "99154",
    "city": "Mohler"
  },
  {
    "zip": "99158",
    "city": "Oakesdale"
  },
  {
    "zip": "99161",
    "city": "Palouse"
  },
  {
    "zip": "99169",
    "city": "Ritzville"
  },
  {
    "zip": "99180",
    "city": "Usk"
  },
  {
    "zip": "99185",
    "city": "Wilbur"
  },
  {
    "zip": "99301",
    "city": "Pasco"
  },
  {
    "zip": "99322",
    "city": "Bickleton"
  },
  {
    "zip": "99324",
    "city": "College Place"
  },
  {
    "zip": "99326",
    "city": "Connell"
  },
  {
    "zip": "99330",
    "city": "Eltopia"
  },
  {
    "zip": "99336",
    "city": "Kennewick"
  },
  {
    "zip": "99341",
    "city": "Lind"
  },
  {
    "zip": "99344",
    "city": "Othello"
  },
  {
    "zip": "99349",
    "city": "Mattawa"
  },
  {
    "zip": "99350",
    "city": "Prosser"
  },
  {
    "zip": "99353",
    "city": "West Richland"
  },
  {
    "zip": "99357",
    "city": "Royal City"
  },
  {
    "zip": "99360",
    "city": "Touchet"
  },
  {
    "zip": "99361",
    "city": "Waitsburg"
  },
  {
    "zip": "99362",
    "city": "Walla Walla"
  },
  {
    "zip": "99371",
    "city": "Washtucna"
  },
  {
    "zip": "99401",
    "city": "Anatone"
  },
  {
    "zip": "99402",
    "city": "Asotin"
  },
  {
    "zip": "99501",
    "city": "Anchorage"
  },
  {
    "zip": "99505",
    "city": "Jber"
  },
  {
    "zip": "99540",
    "city": "Indian"
  },
  {
    "zip": "99556",
    "city": "Anchor Point"
  },
  {
    "zip": "99567",
    "city": "Chugiak"
  },
  {
    "zip": "99568",
    "city": "Clam Gulch"
  },
  {
    "zip": "99572",
    "city": "Cooper Landing"
  },
  {
    "zip": "99573",
    "city": "Copper Center"
  },
  {
    "zip": "99586",
    "city": "Gakona"
  },
  {
    "zip": "99588",
    "city": "Glennallen"
  },
  {
    "zip": "99610",
    "city": "Kasilof"
  },
  {
    "zip": "99611",
    "city": "Kenai"
  },
  {
    "zip": "99615",
    "city": "Kodiak"
  },
  {
    "zip": "99623",
    "city": "Wasilla"
  },
  {
    "zip": "99631",
    "city": "Moose Pass"
  },
  {
    "zip": "99639",
    "city": "Ninilchik"
  },
  {
    "zip": "99669",
    "city": "Soldotna"
  },
  {
    "zip": "99676",
    "city": "Talkeetna"
  },
  {
    "zip": "99702",
    "city": "Eielson Afb"
  },
  {
    "zip": "99703",
    "city": "Fort Wainwright"
  },
  {
    "zip": "99704",
    "city": "Clear"
  },
  {
    "zip": "99705",
    "city": "North Pole"
  },
  {
    "zip": "99714",
    "city": "Salcha"
  },
  {
    "zip": "99731",
    "city": "Fort Greely"
  },
  {
    "zip": "99737",
    "city": "Delta Junction"
  },
  {
    "zip": "99760",
    "city": "Nenana"
  },
  {
    "zip": "99779",
    "city": "Tok"
  },
  {
    "zip": "99901",
    "city": "Ketchikan"
  }
]

CityArea.deleteMany({}, (err, deleted) => {
  if (err) {
    return console.log(err);
  }
  console.log('Deleted!');

  CityArea.create(data, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log("Data created");
    process.exit();
  });
}); 