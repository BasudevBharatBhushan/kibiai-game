import React, { useEffect, useState } from "react";
import "../../assets/styles/dynamicreport.css";
import Logo from "../../assets/images/logo.svg";
import { initializeA4Pagination } from "../../utils/utility";

const DynamicReport: React.FC = () => {
  const [reportHtml, setReportHtml] = useState<string>("");

  // ======== PLACE YOUR JSON DATA HERE ========
  const sampleJsonData: any[] = [
    {
      TitleHeader: {
        MainHeading: "QC Hold Lots by Item with Details - 2025",
        SubHeading: "Kibizsystems.com",
      },
    },
    {
      Subsummary: {
        Sorting: ["Item No"],
        SubsummaryFields: ["Item No"],
        SubsummaryTotal: ["Available Inventory"],
        SubsummaryDisplay: [],
      },
    },
    {
      Body: {
        BodyField: [
          {
            "Item No": "ORE1115",
            "Lot No": "11241559",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "08/08/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 1740,
            "Lot Status": "--",
          },
          {
            "Item No": "CHI2126",
            "Lot No": "08241105",
            "QC Hold By": "Rida Alrefai",
            "Lot On Hold Date": "09/10/2025",
            "Lot Hold Reason": "Mold appear in bags ",
            "Available Inventory": 10200,
            "Lot Status": "--",
          },
          {
            "Item No": "CHI2128",
            "Lot No": "11241637",
            "QC Hold By": "Seher Shoaib",
            "Lot On Hold Date": "09/02/2025",
            "Lot Hold Reason": "RETURNED",
            "Available Inventory": 4240,
            "Lot Status": "--",
          },
          {
            "Item No": "CHI2127",
            "Lot No": "09241321",
            "QC Hold By": "Arturo Patino",
            "Lot On Hold Date": "08/07/2025",
            "Lot Hold Reason": "treatment",
            "Available Inventory": 38120,
            "Lot Status": "--",
          },
          {
            "Item No": "ONI1896",
            "Lot No": "11189-1896",
            "QC Hold By": "",
            "Lot On Hold Date": "04/09/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 54850,
            "Lot Status": "--",
          },
          {
            "Item No": "ONI1896",
            "Lot No": "11023-1896",
            "QC Hold By": "",
            "Lot On Hold Date": "01/24/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 43600,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1163",
            "Lot No": "012518201",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "08/12/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 1300,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1161",
            "Lot No": "122417924",
            "QC Hold By": "",
            "Lot On Hold Date": "01/03/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 17400,
            "Lot Status": "--",
          },
          {
            "Item No": "GUA2254",
            "Lot No": "10241417",
            "QC Hold By": "Rida Alrefai",
            "Lot On Hold Date": "09/08/2025",
            "Lot Hold Reason": "bugs observed in bag.",
            "Available Inventory": 50,
            "Lot Status": "--",
          },
          {
            "Item No": "TUR1153",
            "Lot No": "122418042",
            "QC Hold By": "",
            "Lot On Hold Date": "01/07/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 38,
            "Lot Status": "--",
          },
          {
            "Item No": "CHI1737",
            "Lot No": "012518401",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "08/20/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 400,
            "Lot Status": "--",
          },
          {
            "Item No": "GIN1081-TA",
            "Lot No": "122418072",
            "QC Hold By": "",
            "Lot On Hold Date": "01/07/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 592,
            "Lot Status": "--",
          },
          {
            "Item No": "GOB2257",
            "Lot No": "122417521",
            "QC Hold By": "",
            "Lot On Hold Date": "01/10/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 600,
            "Lot Status": "--",
          },
          {
            "Item No": "GAR1354",
            "Lot No": "11371-1354",
            "QC Hold By": "",
            "Lot On Hold Date": "01/14/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 22000,
            "Lot Status": "--",
          },
          {
            "Item No": "CHI2134",
            "Lot No": "11100-2134",
            "QC Hold By": "",
            "Lot On Hold Date": "01/14/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55150,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1161",
            "Lot No": "012518913",
            "QC Hold By": "",
            "Lot On Hold Date": "01/17/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 10550,
            "Lot Status": "--",
          },
          {
            "Item No": "WCF2307",
            "Lot No": "122417771",
            "QC Hold By": "",
            "Lot On Hold Date": "01/21/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 400,
            "Lot Status": "--",
          },
          {
            "Item No": "CHI1940",
            "Lot No": "012518802",
            "QC Hold By": "",
            "Lot On Hold Date": "01/21/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 1047,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1161",
            "Lot No": "012519213",
            "QC Hold By": "",
            "Lot On Hold Date": "01/22/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 21500,
            "Lot Status": "--",
          },
          {
            "Item No": "CHI2133",
            "Lot No": "11108-2133",
            "QC Hold By": "",
            "Lot On Hold Date": "01/24/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55100,
            "Lot Status": "--",
          },
          {
            "Item No": "SMO1496",
            "Lot No": "0008081187",
            "QC Hold By": "",
            "Lot On Hold Date": "01/15/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 346.542,
            "Lot Status": "--",
          },
          {
            "Item No": "PIC2109",
            "Lot No": "122417981",
            "QC Hold By": "",
            "Lot On Hold Date": "01/24/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 2000,
            "Lot Status": "--",
          },
          {
            "Item No": "WHI1175",
            "Lot No": "012519382",
            "QC Hold By": "",
            "Lot On Hold Date": "01/28/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 41,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1161",
            "Lot No": "012519863",
            "QC Hold By": "",
            "Lot On Hold Date": "01/30/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 8500,
            "Lot Status": "--",
          },
          {
            "Item No": "MUS1781",
            "Lot No": "012519662",
            "QC Hold By": "",
            "Lot On Hold Date": "01/30/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 250,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1161",
            "Lot No": "012520173",
            "QC Hold By": "",
            "Lot On Hold Date": "02/04/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 8750,
            "Lot Status": "--",
          },
          {
            "Item No": "WCS2308",
            "Lot No": "122417781",
            "QC Hold By": "",
            "Lot On Hold Date": "04/10/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 400,
            "Lot Status": "--",
          },
          {
            "Item No": "CUM1050",
            "Lot No": "012520282",
            "QC Hold By": "",
            "Lot On Hold Date": "02/07/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 1394,
            "Lot Status": "--",
          },
          {
            "Item No": "ORP1262",
            "Lot No": "2018088",
            "QC Hold By": "",
            "Lot On Hold Date": "05/07/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 1085,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1161",
            "Lot No": "022520633",
            "QC Hold By": "",
            "Lot On Hold Date": "02/10/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 12750,
            "Lot Status": "--",
          },
          {
            "Item No": "CHI2285",
            "Lot No": "022520362",
            "QC Hold By": "",
            "Lot On Hold Date": "02/12/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 799,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1744",
            "Lot No": "11505-1744",
            "QC Hold By": "",
            "Lot On Hold Date": "02/13/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55000,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1744",
            "Lot No": "11506-1744",
            "QC Hold By": "",
            "Lot On Hold Date": "02/13/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55000,
            "Lot Status": "--",
          },
          {
            "Item No": "CHI2285",
            "Lot No": "012519752",
            "QC Hold By": "",
            "Lot On Hold Date": "02/14/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 1057,
            "Lot Status": "--",
          },
          {
            "Item No": "CHI2286",
            "Lot No": "012519872",
            "QC Hold By": "",
            "Lot On Hold Date": "02/14/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 348,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1161",
            "Lot No": "022521103",
            "QC Hold By": "",
            "Lot On Hold Date": "02/19/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 5500,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1161",
            "Lot No": "022521183",
            "QC Hold By": "",
            "Lot On Hold Date": "02/19/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 9400,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1744",
            "Lot No": "11508-1744",
            "QC Hold By": "",
            "Lot On Hold Date": "02/19/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55000,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1744",
            "Lot No": "11507-1744",
            "QC Hold By": "",
            "Lot On Hold Date": "02/19/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55000,
            "Lot Status": "--",
          },
          {
            "Item No": "SAG1140",
            "Lot No": "022520862",
            "QC Hold By": "",
            "Lot On Hold Date": "02/20/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 296,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1161",
            "Lot No": "022521283",
            "QC Hold By": "",
            "Lot On Hold Date": "02/20/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 9150,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1161",
            "Lot No": "022521264",
            "QC Hold By": "",
            "Lot On Hold Date": "02/24/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 28850,
            "Lot Status": "--",
          },
          {
            "Item No": "CHI2286",
            "Lot No": "022521032",
            "QC Hold By": "",
            "Lot On Hold Date": "02/24/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 1087,
            "Lot Status": "--",
          },
          {
            "Item No": "CHI2286",
            "Lot No": "022521492",
            "QC Hold By": "",
            "Lot On Hold Date": "02/24/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 2140,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1326",
            "Lot No": "022521442",
            "QC Hold By": "",
            "Lot On Hold Date": "02/24/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 2965,
            "Lot Status": "--",
          },
          {
            "Item No": "CHI2128",
            "Lot No": "022521601",
            "QC Hold By": "Seher Shoaib",
            "Lot On Hold Date": "09/02/2025",
            "Lot Hold Reason": "RETURNED",
            "Available Inventory": 33108.5,
            "Lot Status": "--",
          },
          {
            "Item No": "GAR1735",
            "Lot No": "11549-1735",
            "QC Hold By": "",
            "Lot On Hold Date": "02/26/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 54450,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1491",
            "Lot No": "022521111",
            "QC Hold By": "",
            "Lot On Hold Date": "02/26/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 77,
            "Lot Status": "--",
          },
          {
            "Item No": "GAR1943",
            "Lot No": "012519232",
            "QC Hold By": "",
            "Lot On Hold Date": "02/27/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 340,
            "Lot Status": "--",
          },
          {
            "Item No": "ANA2267",
            "Lot No": "022521782",
            "QC Hold By": "",
            "Lot On Hold Date": "02/27/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 54,
            "Lot Status": "--",
          },
          {
            "Item No": "CHI2286",
            "Lot No": "022521602",
            "QC Hold By": "",
            "Lot On Hold Date": "03/05/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 1077,
            "Lot Status": "--",
          },
          {
            "Item No": "GAR1735",
            "Lot No": "11406-1735",
            "QC Hold By": "",
            "Lot On Hold Date": "04/09/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 54450,
            "Lot Status": "--",
          },
          {
            "Item No": "GAR1735",
            "Lot No": "11550-1735",
            "QC Hold By": "",
            "Lot On Hold Date": "04/09/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 54450,
            "Lot Status": "--",
          },
          {
            "Item No": "GAR1735",
            "Lot No": "11551-1735",
            "QC Hold By": "",
            "Lot On Hold Date": "04/09/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 54450,
            "Lot Status": "--",
          },
          {
            "Item No": "GAR1861-44",
            "Lot No": "032522261",
            "QC Hold By": "",
            "Lot On Hold Date": "03/17/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 44,
            "Lot Status": "--",
          },
          {
            "Item No": "ONI1361",
            "Lot No": "11379-1361",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/11/2025",
            "Lot Hold Reason": "OBSERVE THE PRODUCT FOR CAKING BEFORE SELLING.",
            "Available Inventory": 2050,
            "Lot Status": "--",
          },
          {
            "Item No": "GAR4941",
            "Lot No": "SHA4941-11588",
            "QC Hold By": "",
            "Lot On Hold Date": "03/17/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 54500,
            "Lot Status": "--",
          },
          {
            "Item No": "GAR4941",
            "Lot No": "SHA4941-11589",
            "QC Hold By": "",
            "Lot On Hold Date": "03/17/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 54500,
            "Lot Status": "--",
          },
          {
            "Item No": "GAR1735",
            "Lot No": "11223-1735",
            "QC Hold By": "",
            "Lot On Hold Date": "03/17/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55000,
            "Lot Status": "--",
          },
          {
            "Item No": "GAR1735",
            "Lot No": "11224-1735",
            "QC Hold By": "",
            "Lot On Hold Date": "04/09/2025",
            "Lot Hold Reason": "2.8 ppm-peanut allergen. RETEST= 15 PPM",
            "Available Inventory": 55000,
            "Lot Status": "--",
          },
          {
            "Item No": "GAR1077-L",
            "Lot No": "11266-1077-L",
            "QC Hold By": "",
            "Lot On Hold Date": "03/17/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 52800,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1161",
            "Lot No": "032522993",
            "QC Hold By": "",
            "Lot On Hold Date": "03/26/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 37350,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1161",
            "Lot No": "032523473",
            "QC Hold By": "",
            "Lot On Hold Date": "03/28/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 9250,
            "Lot Status": "--",
          },
          {
            "Item No": "GAR1735",
            "Lot No": "11222-1735",
            "QC Hold By": "",
            "Lot On Hold Date": "03/28/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55000,
            "Lot Status": "--",
          },
          {
            "Item No": "GAR1735",
            "Lot No": "11407-1735",
            "QC Hold By": "",
            "Lot On Hold Date": "03/31/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 54450,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1161",
            "Lot No": "042523753",
            "QC Hold By": "",
            "Lot On Hold Date": "04/04/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 18000,
            "Lot Status": "--",
          },
          {
            "Item No": "PAP1363",
            "Lot No": "11448-1363",
            "QC Hold By": "",
            "Lot On Hold Date": "04/07/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55100,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1161",
            "Lot No": "042524164",
            "QC Hold By": "",
            "Lot On Hold Date": "04/14/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 25100,
            "Lot Status": "--",
          },
          {
            "Item No": "CHI1479",
            "Lot No": "11241619",
            "QC Hold By": "",
            "Lot On Hold Date": "04/17/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 8000,
            "Lot Status": "--",
          },
          {
            "Item No": "CHI2049",
            "Lot No": "042524961",
            "QC Hold By": "",
            "Lot On Hold Date": "04/30/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 300,
            "Lot Status": "--",
          },
          {
            "Item No": "DIL1059",
            "Lot No": "052525241",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "08/12/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 125,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1161",
            "Lot No": "052525663",
            "QC Hold By": "",
            "Lot On Hold Date": "05/13/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 41200,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA5016",
            "Lot No": "052526362",
            "QC Hold By": "",
            "Lot On Hold Date": "05/20/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 10440,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1161",
            "Lot No": "052526652",
            "QC Hold By": "",
            "Lot On Hold Date": "05/22/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 19700,
            "Lot Status": "--",
          },
          {
            "Item No": "FEN1065",
            "Lot No": "11650-1065",
            "QC Hold By": "",
            "Lot On Hold Date": "05/23/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55150,
            "Lot Status": "--",
          },
          {
            "Item No": "HAT5024",
            "Lot No": "052526761",
            "QC Hold By": "",
            "Lot On Hold Date": "05/28/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 175,
            "Lot Status": "--",
          },
          {
            "Item No": "GAR2185",
            "Lot No": "052526771",
            "QC Hold By": "Seher Shoaib",
            "Lot On Hold Date": "08/07/2025",
            "Lot Hold Reason": "returned product",
            "Available Inventory": 20,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1161",
            "Lot No": "052526993",
            "QC Hold By": "",
            "Lot On Hold Date": "06/03/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 3900,
            "Lot Status": "--",
          },
          {
            "Item No": "TET1277",
            "Lot No": "YTSPP240014",
            "QC Hold By": "",
            "Lot On Hold Date": "06/10/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 2204.8,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1715",
            "Lot No": "062528022",
            "QC Hold By": "",
            "Lot On Hold Date": "06/19/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 18700,
            "Lot Status": "--",
          },
          {
            "Item No": "CHI1165",
            "Lot No": "062528011",
            "QC Hold By": "",
            "Lot On Hold Date": "06/19/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 11,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1161",
            "Lot No": "062528293",
            "QC Hold By": "",
            "Lot On Hold Date": "06/25/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 8550,
            "Lot Status": "--",
          },
          {
            "Item No": "TOM1372",
            "Lot No": "L-04-12-24/1",
            "QC Hold By": "",
            "Lot On Hold Date": "02/05/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 5280,
            "Lot Status": "--",
          },
          {
            "Item No": "TUR5035",
            "Lot No": "SFP-25566E",
            "QC Hold By": "",
            "Lot On Hold Date": "06/16/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 10031.84,
            "Lot Status": "--",
          },
          {
            "Item No": "FEN2054",
            "Lot No": "10777-2054",
            "QC Hold By": "",
            "Lot On Hold Date": "01/24/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 43615,
            "Lot Status": "--",
          },
          {
            "Item No": "FEN4790",
            "Lot No": "11691-4790",
            "QC Hold By": "",
            "Lot On Hold Date": "06/30/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 9900,
            "Lot Status": "--",
          },
          {
            "Item No": "SZE5037",
            "Lot No": "24906",
            "QC Hold By": "",
            "Lot On Hold Date": "07/01/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 551,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1161",
            "Lot No": "062528623",
            "QC Hold By": "",
            "Lot On Hold Date": "07/03/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 13700,
            "Lot Status": "--",
          },
          {
            "Item No": "CUM5039",
            "Lot No": "062528362",
            "QC Hold By": "Stephen Nwabachili",
            "Lot On Hold Date": "07/18/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 390,
            "Lot Status": "--",
          },
          {
            "Item No": "OIL1297",
            "Lot No": "525260",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "07/22/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 140,
            "Lot Status": "--",
          },
          {
            "Item No": "SMO1496",
            "Lot No": "0009180854",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "07/22/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 2000,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1161",
            "Lot No": "072529694",
            "QC Hold By": "Sheyla Lomeli",
            "Lot On Hold Date": "07/23/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 40150,
            "Lot Status": "--",
          },
          {
            "Item No": "CAY1305",
            "Lot No": "11706-1305",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "07/23/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55100,
            "Lot Status": "--",
          },
          {
            "Item No": "ONI1898",
            "Lot No": "11822-1898",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "07/23/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55000,
            "Lot Status": "--",
          },
          {
            "Item No": "SES5018",
            "Lot No": "11739-5018",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "07/28/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 6600,
            "Lot Status": "--",
          },
          {
            "Item No": "PAR4946",
            "Lot No": "11664-4946",
            "QC Hold By": "Lucie Brito",
            "Lot On Hold Date": "08/20/2025",
            "Lot Hold Reason": "Yeast & mold results not compliant.",
            "Available Inventory": 14000,
            "Lot Status": "--",
          },
          {
            "Item No": "CAY1305",
            "Lot No": "11707-1305",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "07/28/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55150,
            "Lot Status": "--",
          },
          {
            "Item No": "BEL2302",
            "Lot No": "11791-2302",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "07/29/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 22400,
            "Lot Status": "--",
          },
          {
            "Item No": "CUM1051",
            "Lot No": "11808-1051",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "08/04/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 53550,
            "Lot Status": "--",
          },
          {
            "Item No": "WHI1173",
            "Lot No": "11643-1173",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "08/05/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55100,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1156",
            "Lot No": "11835-1156",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "08/08/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55000,
            "Lot Status": "--",
          },
          {
            "Item No": "PEP4997",
            "Lot No": "082530672",
            "QC Hold By": "Stephen Nwabachili",
            "Lot On Hold Date": "08/12/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 56,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1161",
            "Lot No": "082530653",
            "QC Hold By": "Evelyn Vega",
            "Lot On Hold Date": "08/14/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 23587,
            "Lot Status": "--",
          },
          {
            "Item No": "GAR1735",
            "Lot No": "11820-1735",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "08/18/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55000,
            "Lot Status": "--",
          },
          {
            "Item No": "CHI5006",
            "Lot No": "11710-5006",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "08/18/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55000,
            "Lot Status": "--",
          },
          {
            "Item No": "CHI5027",
            "Lot No": "11713-5027",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "08/18/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55000,
            "Lot Status": "--",
          },
          {
            "Item No": "CHI5007",
            "Lot No": "11711-5007",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "08/18/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55000,
            "Lot Status": "--",
          },
          {
            "Item No": "CHI5028",
            "Lot No": "11714-5028",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "08/18/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55000,
            "Lot Status": "--",
          },
          {
            "Item No": "CUM1051",
            "Lot No": "11819-1051",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "08/18/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 53500,
            "Lot Status": "--",
          },
          {
            "Item No": "TAC1882",
            "Lot No": "062527501",
            "QC Hold By": "Stephen Nwabachili",
            "Lot On Hold Date": "08/20/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 50,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1161",
            "Lot No": "082531123",
            "QC Hold By": "Ana Garcia",
            "Lot On Hold Date": "08/21/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 3298,
            "Lot Status": "--",
          },
          {
            "Item No": "TAC1882",
            "Lot No": "062527501",
            "QC Hold By": "Ana Garcia",
            "Lot On Hold Date": "08/20/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 100,
            "Lot Status": "--",
          },
          {
            "Item No": "SAL1303",
            "Lot No": "W2125-1",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "08/26/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 7200,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1156",
            "Lot No": "082531681",
            "QC Hold By": "Evelyn Vega",
            "Lot On Hold Date": "08/28/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 1751,
            "Lot Status": "--",
          },
          {
            "Item No": "CHI5008",
            "Lot No": "11712-5008",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/09/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55000,
            "Lot Status": "--",
          },
          {
            "Item No": "ORB1002",
            "Lot No": "5002385",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/09/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 1080,
            "Lot Status": "--",
          },
          {
            "Item No": "ORC1261",
            "Lot No": "1000890",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/09/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 280,
            "Lot Status": "--",
          },
          {
            "Item No": "ORP1262",
            "Lot No": "2018430",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/09/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 560,
            "Lot Status": "--",
          },
          {
            "Item No": "ORC1261",
            "Lot No": "1000899",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/09/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 945,
            "Lot Status": "--",
          },
          {
            "Item No": "ORC1261",
            "Lot No": "1000913",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/09/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 1610,
            "Lot Status": "--",
          },
          {
            "Item No": "SAG4958",
            "Lot No": "11726-4958",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/11/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 32385.8,
            "Lot Status": "--",
          },
          {
            "Item No": "WHI1173",
            "Lot No": "11644-1173",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/11/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55000,
            "Lot Status": "--",
          },
          {
            "Item No": "BEL1187",
            "Lot No": "092532481",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/12/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 3600,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1156",
            "Lot No": "11890-1156",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/15/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55000,
            "Lot Status": "--",
          },
          {
            "Item No": "WHI1173",
            "Lot No": "11645-1173",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/15/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55000,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1156",
            "Lot No": "11889-1156",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/15/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55000,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1715",
            "Lot No": "092532702",
            "QC Hold By": "Ana Garcia",
            "Lot On Hold Date": "09/19/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 22650,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1156",
            "Lot No": "11882-1156",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/22/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55000,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1156",
            "Lot No": "11912-1156",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/22/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55000,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1156",
            "Lot No": "11881-1156",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/22/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55000,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1156",
            "Lot No": "11913-1156",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/22/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55000,
            "Lot Status": "--",
          },
          {
            "Item No": "ONI1106-L",
            "Lot No": "11762-1106-L",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/22/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55150,
            "Lot Status": "--",
          },
          {
            "Item No": "JAL2066",
            "Lot No": "11695-2066",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/22/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 20050,
            "Lot Status": "--",
          },
          {
            "Item No": "MIN1204",
            "Lot No": "11695-1204",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/22/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 1000,
            "Lot Status": "--",
          },
          {
            "Item No": "PEP1052",
            "Lot No": "11695-1052",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/22/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 2200,
            "Lot Status": "--",
          },
          {
            "Item No": "MAN1382",
            "Lot No": "11695-1382",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/22/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 4400,
            "Lot Status": "--",
          },
          {
            "Item No": "JAL4939",
            "Lot No": "11695-4939",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/22/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 3375,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA1715",
            "Lot No": "092533022",
            "QC Hold By": "Evelyn Vega",
            "Lot On Hold Date": "09/24/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 19400,
            "Lot Status": "--",
          },
          {
            "Item No": "SUM1968",
            "Lot No": "11891-1968",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/25/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 6650,
            "Lot Status": "--",
          },
          {
            "Item No": "SAG4970",
            "Lot No": "11891-4970",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/25/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 11100,
            "Lot Status": "--",
          },
          {
            "Item No": "SAG5040",
            "Lot No": "11891-5040",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/25/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 11000,
            "Lot Status": "--",
          },
          {
            "Item No": "BAY5011",
            "Lot No": "11891-5011",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/25/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 6600,
            "Lot Status": "--",
          },
          {
            "Item No": "ROS1122",
            "Lot No": "11800-1122",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/25/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 40200,
            "Lot Status": "--",
          },
          {
            "Item No": "PAR4965",
            "Lot No": "11753-4965",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/26/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 15686,
            "Lot Status": "--",
          },
          {
            "Item No": "CUM1899",
            "Lot No": "11810-1899",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/26/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 54900,
            "Lot Status": "--",
          },
          {
            "Item No": "CIN1041",
            "Lot No": "092532512",
            "QC Hold By": "Stephen Nwabachili",
            "Lot On Hold Date": "09/26/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 4000,
            "Lot Status": "--",
          },
          {
            "Item No": "SAF1126",
            "Lot No": "SFP-E24488G",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/29/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 150,
            "Lot Status": "--",
          },
          {
            "Item No": "CAR1015",
            "Lot No": "092533321",
            "QC Hold By": "Stephen Nwabachili",
            "Lot On Hold Date": "09/30/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 28,
            "Lot Status": "--",
          },
          {
            "Item No": "ONI1106-L",
            "Lot No": "11763-1106-L",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/30/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55150,
            "Lot Status": "--",
          },
          {
            "Item No": "CAY1707",
            "Lot No": "11896-1707",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "09/30/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55150,
            "Lot Status": "--",
          },
          {
            "Item No": "CHI2121",
            "Lot No": "092533331",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "10/01/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 10100,
            "Lot Status": "--",
          },
          {
            "Item No": "CHI2123",
            "Lot No": "102533531",
            "QC Hold By": "Ana Garcia",
            "Lot On Hold Date": "10/02/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 38000,
            "Lot Status": "--",
          },
          {
            "Item No": "ROS1125",
            "Lot No": "102533511",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "10/02/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 7000,
            "Lot Status": "--",
          },
          {
            "Item No": "SAL1303",
            "Lot No": "W2525-1",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "10/03/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 14400,
            "Lot Status": "--",
          },
          {
            "Item No": "SAL1303",
            "Lot No": "W2715-3",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "10/03/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 14400,
            "Lot Status": "--",
          },
          {
            "Item No": "ANI1006",
            "Lot No": "092533251",
            "QC Hold By": "Stephen Nwabachili",
            "Lot On Hold Date": "10/03/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 7600,
            "Lot Status": "--",
          },
          {
            "Item No": "CLO1043",
            "Lot No": "092533401",
            "QC Hold By": "Stephen Nwabachili",
            "Lot On Hold Date": "10/03/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 3050,
            "Lot Status": "--",
          },
          {
            "Item No": "CAY1706",
            "Lot No": "11894-1706",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "10/06/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55150,
            "Lot Status": "--",
          },
          {
            "Item No": "ONI1106-L",
            "Lot No": "11764-1106-L",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "10/06/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55150,
            "Lot Status": "--",
          },
          {
            "Item No": "PAP1289",
            "Lot No": "11859-1289",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "10/06/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 55100,
            "Lot Status": "--",
          },
          {
            "Item No": "PAR4946",
            "Lot No": "11818-4946",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "10/06/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 13760,
            "Lot Status": "--",
          },
          {
            "Item No": "RIC2143",
            "Lot No": "L2473791",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "10/06/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 25,
            "Lot Status": "--",
          },
          {
            "Item No": "BLA5049",
            "Lot No": "102533704",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "10/06/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 11500,
            "Lot Status": "--",
          },
          {
            "Item No": "THY1425",
            "Lot No": "102533651",
            "QC Hold By": "Auto",
            "Lot On Hold Date": "10/06/2025",
            "Lot Hold Reason": "",
            "Available Inventory": 3360,
            "Lot Status": "--",
          },
        ],
        BodyFieldOrder: [
          "Lot No",
          "QC Hold By",
          "Lot On Hold Date",
          "Lot Hold Reason",
          "Available Inventory",
          "Lot Status",
        ],
        BodySortOrder: [
          { Column: "Lot No", Order: "Asc" },
          { Column: "Lot On Hold Date", Order: "Asc" },
        ],
        FieldPrefix: {},
        FieldSuffix: {},
        Sorting: [],
      },
    },
    { TrailingGrandSummary: { TrailingGrandSummary: ["Available Inventory"] } },
  ];

  useEffect(() => {
    if (sampleJsonData && sampleJsonData.length > 0) {
      const html = generateDynamicReport(sampleJsonData);
      setReportHtml(html);
    }
  }, [sampleJsonData]);

  useEffect(() => {
    // Run pagination after the report has rendered
    const pagination = initializeA4Pagination();

    // Optional: you can store pagination in state if needed
    console.log(pagination.getTotalPages());
  }, []);

  return (
    <div id="main-div">
      <div className="report-controls">
        <div className="pagination-controls">
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <button className="pagination-button" id="prevPage" disabled>
              <i className="fas fa-chevron-left"></i>
            </button>
            <span className="pagination-info">
              Page <span id="currentPage">1</span> of{" "}
              <span id="totalPages">1</span>
            </span>
            <button className="pagination-button" id="nextPage">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="control-group">
            <button className="control-button">PDF</button>
            <button className="control-button">Excel</button>
          </div>
        </div>
      </div>

      <div id="dynamic-report"></div>
    </div>
  );
};

export default DynamicReport;

// ================== MAIN FUNCTION ==================
function generateDynamicReport(jsonData: any[]): string {
  let insightData = "";
  let tableData = "";
  let tableData_ = "";
  const prefixMap: Record<string, string> = {};
  let fieldPrefix: Record<string, string> = {};
  let fieldSuffix: Record<string, string> = {};
  let bodySortKeys: string[] = [];
  let bodyFieldOrder: string[] = [];
  let bodySortOrder: any[] = [];

  // ===== Helper: Multi Sort =====
  function multiSort(array: any[], sortKeys: string[]) {
    return array.sort((a, b) => {
      for (let key of sortKeys) {
        const trimmedKey = key.trim();
        if (a[trimmedKey] < b[trimmedKey]) return -1;
        if (a[trimmedKey] > b[trimmedKey]) return 1;
      }
      return 0;
    });
  }

  // ===== Helper: Group By =====
  function groupBy(array: any[], key: string) {
    const trimmedKey = key.trim();
    return array.reduce((result: any, currentValue: any) => {
      (result[currentValue[trimmedKey]] =
        result[currentValue[trimmedKey]] || []).push(currentValue);
      return result;
    }, {});
  }

  // ===== Title Header =====
  function generateTitleHeader(titleHeader: any) {
    return `
      <div className="title-header">
        <img style="width:100px" src=${Logo} alt="logo">
        <div>
          <h1>${titleHeader.MainHeading}</h1>
          <h2>U.S. Spice Mills • 4537 W. Fulton St. • Chicago, Illinois 60624 USA • www.usspice.com • (773) 378-6800</h2>
        </div>
      </div>
    `;
  }

  // ===== Nested Subsummaries =====
  function generateNestedSubsummaries(
    data: any[],
    subsummaries: any[],
    level = 0,
    key = ""
  ): string {
    tableData = tableData ? tableData + "_" + key : key;

    if (level >= subsummaries.length) {
      tableData_ = tableData;
      tableData = "";
      return generateBodyTable(data, bodySortKeys, tableData_);
    }

    const currentSubsummary = subsummaries[level];
    const groupField = currentSubsummary.SubsummaryFields[0];
    const groupedData = groupBy(data, groupField);
    const sortOrder = (currentSubsummary.SortOrder || "asc").toLowerCase();
    const groupedEntries = Object.entries(groupedData).sort(
      ([aKey], [bKey]) => {
        let result;
        if (!isNaN(Number(aKey)) && !isNaN(Number(bKey))) {
          result = Number(aKey) - Number(bKey);
        } else {
          result = String(aKey).localeCompare(String(bKey));
        }
        return sortOrder === "asc" ? result : -result;
      }
    );
    const totals = currentSubsummary.SubsummaryTotal || [];
    const displayFields = currentSubsummary.SubsummaryDisplay || [];

    let html = "";

    for (let [groupValue, group] of groupedEntries as [string, any[]][]) {
      const groupFieldPrefix =
        prefixMap[groupField] || fieldPrefix[groupField.trim()] || "";
      const groupFieldSuffix = fieldSuffix[groupField.trim()] || "";

      let displayInfo = "";
      displayFields.forEach((field: string) => {
        const trimmedField = field.trim();
        const prefix = prefixMap[field] || fieldPrefix[trimmedField] || "";
        const suffix = fieldSuffix[trimmedField] || "";
        const value = group[0]?.[field] || "";
        displayInfo += `<span className="display-item"><span className="display-label">${field}:</span> <span className="display-value">${prefix}${value}${suffix}</span></span>`;
      });

      let displayInfoText = "";
      displayFields.forEach((field: string) => {
        const trimmedField = field.trim();
        const prefix = prefixMap[field] || fieldPrefix[trimmedField] || "";
        const suffix = fieldSuffix[trimmedField] || "";
        const value = group[0]?.[field] || "";
        displayInfoText += `${field}: ${prefix}${value}${suffix}, `;
      });

      displayInfoText = displayInfoText.replace(/, $/, "");
      insightData += `${groupField.trim()}-${groupValue} ${displayInfoText}; `;

      let groupTotals: Record<string, number> = {};
      totals.forEach((field: string) => {
        const sum = group.reduce((acc, item) => {
          const value = parseFloat(item[field]);
          return acc + (isNaN(value) ? 0 : value);
        }, 0);
        groupTotals[field] = sum;
      });

      html += `
        <div className="subsummary level-${level}">
          <h${level + 3} className="subsummary-header">
            <span className="field-name">${groupField.trim()}</span>: ${groupFieldPrefix}${
        groupValue || "N/A"
      }${groupFieldSuffix}
          </h${level + 3}>
          ${
            displayInfo
              ? `<div className="subsummary-display">${displayInfo}</div>`
              : ""
          }
          <div className="subsummary-content">
            ${generateNestedSubsummaries(
              group,
              subsummaries,
              level + 1,
              groupField.trim() + "-" + groupValue
            )}
            ${
              totals.length > 0 ? generateSectionTotals(groupTotals, level) : ""
            }
          </div>
        </div>
      `;
    }

    return html;
  }

  // ===== Section Totals =====
  function generateSectionTotals(
    totals: Record<string, number>,
    level: number
  ) {
    let html =
      '<div className="section-totals"><div className="totals-title">Totals</div><div className="totals-grid">';
    for (let [field, total] of Object.entries(totals)) {
      const trimmedField = field.trim();
      const prefix = prefixMap[field] || fieldPrefix[trimmedField] || "";
      const suffix = fieldSuffix[trimmedField] || "";
      const formattedTotal = total.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      html += `
        <div className="total-item">
          <span className="total-label">Total ${field}:</span>
          <span className="total-value">${prefix}${formattedTotal}${suffix}</span>
        </div>
      `;
    }
    html += "</div></div>";
    return html;
  }

  // ===== Field Alignment =====
  function getFieldAlignment(fieldName: string, sampleValue: any): string {
    const currencyPrefixes = ["$", "€", "£", "₹", "¥", "₩", "₽", "₦", "₪"];
    const fieldHasCurrency = currencyPrefixes.some(
      (prefix) =>
        fieldName.includes(prefix) ||
        (sampleValue && sampleValue.toString().trim().startsWith(prefix))
    );

    if (fieldHasCurrency) return "right";
    if (sampleValue) {
      const trimmedValue = sampleValue.toString().trim();
      if (/[a-zA-Z]/.test(trimmedValue)) return "left";
      if (
        !isNaN(parseFloat(trimmedValue.replace(/,/g, ""))) &&
        isFinite(Number(trimmedValue.replace(/,/g, "")))
      )
        return "center";
      if (!isNaN(Date.parse(trimmedValue))) return "center";
    }
    return "left";
  }

  // ===== Body Table =====
  function generateBodyTable(
    data: any[],
    sortKeys: string[],
    tableData_: string
  ) {
    const sortedData = multiSort(data, sortKeys);
    const displayFields =
      bodyFieldOrder && bodyFieldOrder.length > 0
        ? bodyFieldOrder
        : Object.keys(data[0]).filter(
            (key) => !sortKeys.includes(key) && !sortKeys.includes(` ${key}`)
          );

    if (
      bodySortOrder &&
      Array.isArray(bodySortOrder) &&
      bodySortOrder.length > 0
    ) {
      sortedData.sort((a, b) => {
        for (const sortSpec of bodySortOrder) {
          const column = sortSpec.Column;
          const order = sortSpec.Order.toLowerCase();
          if (a[column] === undefined || b[column] === undefined) continue;
          const valA = a[column];
          const valB = b[column];
          const numA = parseFloat(valA);
          const numB = parseFloat(valB);
          const bothAreNumbers = !isNaN(numA) && !isNaN(numB);
          let compareA = bothAreNumbers ? numA : valA;
          let compareB = bothAreNumbers ? numB : valB;
          if (compareA !== compareB) {
            if (order === "asc") return compareA < compareB ? -1 : 1;
            else return compareA > compareB ? -1 : 1;
          }
        }
        return 0;
      });
    }

    let html = `<table className="body-table" data-table-heading="${tableData_}"><thead><tr>`;
    displayFields.forEach((field) => {
      const sampleValue = sortedData[0]?.[field];
      const samplePrefix = prefixMap[field] || fieldPrefix[field.trim()] || "";
      const fullSampleValue = samplePrefix + (sampleValue || "");
      const alignment = getFieldAlignment(field, fullSampleValue);
      html += `<th style="text-align: ${alignment}">${field.trim()}</th>`;
    });
    html += "</tr></thead><tbody>";

    sortedData.forEach((row) => {
      html += "<tr>";
      displayFields.forEach((field) => {
        const trimmedField = field.trim();
        const prefix = prefixMap[field] || fieldPrefix[trimmedField] || "";
        const suffix = fieldSuffix[trimmedField] || "";
        let cellValue = row[field];
        const hasCurrencyPrefix = prefix && [
          "$",
          "€",
          "£",
          "₹",
          "¥",
          "₩",
          "₽",
          "R",
          "₦",
          "₪",
        ];
        if (
          (/total|sum/i.test(field) || hasCurrencyPrefix) &&
          !isNaN(parseFloat(cellValue))
        ) {
          cellValue = parseFloat(cellValue).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });
        }
        const fullCellValue = prefix + (cellValue || "") + suffix;
        const alignment = getFieldAlignment(field, fullCellValue);
        html += `<td style="text-align: ${alignment}">${prefix}${
          cellValue || ""
        }${suffix}</td>`;
      });
      html += "</tr>";
    });

    html += "</tbody></table>";
    return html;
  }

  // ===== Trailing Grand Summary =====
  function generateTrailingSummary(summaryFields: string[], bodyData: any[]) {
    let totals: Record<string, number> = {};
    if (!summaryFields || summaryFields.length === 0) return "";
    summaryFields.forEach((field) => {
      const trimmedField = field.trim();
      totals[trimmedField] = bodyData.reduce(
        (sum, row) => sum + (parseFloat(row[trimmedField]) || 0),
        0
      );
    });

    let html = '<div className="trailing-summary"><h3>Grand Total</h3><table>';
    for (let [field, total] of Object.entries(totals)) {
      const trimmedField = field.trim();
      const prefix = prefixMap[field] || fieldPrefix[trimmedField] || "";
      const suffix = fieldSuffix[trimmedField] || "";
      const formattedTotal = total.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      html += `<tr><td>Total ${field}</td><td>${prefix}${formattedTotal}${suffix}</td></tr>`;
    }
    html += "</table></div>";
    return html;
  }

  // ===== Main Report Builder =====
  let reportHtml =
    '<div className="dynamic-report" id="dynamic-printable-report">';
  reportHtml += `<div className="current-date">${new Date().toLocaleDateString()}</div>`;

  const titleHeader = jsonData.find((item) => "TitleHeader" in item);
  if (titleHeader) reportHtml += generateTitleHeader(titleHeader.TitleHeader);

  const bodyData = jsonData.find((item) => "Body" in item)?.Body?.BodyField;
  bodySortKeys = jsonData.find((item) => "Body" in item)?.Body?.Sorting || [];
  bodyFieldOrder =
    jsonData.find((item) => "Body" in item)?.Body?.BodyFieldOrder || [];
  bodySortOrder =
    jsonData.find((item) => "Body" in item)?.Body?.BodySortOrder || [];
  fieldPrefix =
    jsonData.find((item) => "Body" in item)?.Body?.FieldPrefix || {};
  fieldSuffix =
    jsonData.find((item) => "Body" in item)?.Body?.FieldSuffix || {};

  if (bodyData) {
    const subsummaries = jsonData
      .filter((item) => "Subsummary" in item)
      .map((item) => item.Subsummary);
    reportHtml += generateNestedSubsummaries(bodyData, subsummaries);

    const trailingSummary = jsonData.find(
      (item) => "TrailingGrandSummary" in item
    );
    if (trailingSummary) {
      reportHtml += generateTrailingSummary(
        trailingSummary.TrailingGrandSummary.TrailingGrandSummary,
        bodyData
      );
    }
  }

  reportHtml += "</div>";
  return reportHtml;
}
