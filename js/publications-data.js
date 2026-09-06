/**
 * ============================================================
 *  PUBLICATIONS DATA — the single source of truth.
 *  Add a new publication by copying an object below and editing
 *  it. Every page (Home "Selected Publications" + the full
 *  Publications page) reads from this one file — never hard-code
 *  a publication a second time anywhere else.
 *
 *  Fields:
 *   type:  "journal" | "conference" | "chapter"
 *   area:  one of the RESEARCH_AREAS ids in research-data.js
 *          ("distributed", "satellite", "cps-security", "edge-iot")
 *   authorsHtml: authors with "Suman Sourav"/"Sourav, S." in <strong>
 *   selected: true -> eligible to show in the homepage "Selected
 *             Publications" carousel (most recent `selected` items
 *             are used automatically)
 * ============================================================
 */
const PUBLICATIONS = [
  // ---------------- JOURNAL ARTICLES ----------------

     {
    type: "conference", year: 2026, selected: true, area: "edge-iot",
    title: "On Overcoming Compute and Memory Constraints for Distributed Machine Learning at the IoT Edge",
    authorsHtml: "Debadarshini, J.*; <strong>Sourav, S.</strong>*; Singh, L.; Kumar, S. S.",
    venue: "IEEE Conference on Local Computer Networks (LCN 2026)",
    note: "Accepted and to appear · *<strong>Both authors contributed equally · <span class=\"pub-pill pub-pill-highlight\">🏅 Nominated for Best Paper Award </span> · Core Ranking: B</strong>",
    doi: ""
  },



  {
    type: "journal", year: 2026, selected: true, area: "satellite",
    title: "One-Pass & Smart-Search: A Solver for Minimizing Data Delivery Time over Time-Varying Networks",
    authorsHtml: "Wang, P.; Chen, B.; <strong>Sourav, S.</strong>; Li, H.",
    venue: "IEEE Transactions on Mobile Computing (IEEE TMC)",
    note: "Accepted and to appear · <strong>Journal Core Ranking: A*</strong>",
    doi: "10.1109/TMC.2026.3715422"
  },
  {
    type: "journal", year: 2026, selected: true, area: "edge-iot",
    title: "The Throughput Gain of Hypercycle-level Resource Reservation for Time-Triggered Communication",
    authorsHtml: "Wang, P.; <strong>Sourav, S.</strong>; Chen, B.; Li, H.; Wang, F.; Zhang, F.",
    venue: "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (IEEE TCAD)",
    note: "Accepted and to appear · <strong>Journal Core Ranking: A* equivalent</strong>",
    doi: "10.1109/TCAD.2026.3727381"
  },



    {
    type: "journal", year: 2026, selected: true, area: "satellite",
    title: "An SFC-constrained Max-Flow Solver for Satellite Networks using Flexible Function-Time Expanded Graph",
    authorsHtml: "Wang, P.; <strong>Sourav, S.</strong>; Chen, B.; Li, H.",
    venue: "IEEE Transactions on Mobile Computing (IEEE TMC), vol. 25, no. 3, pp. 4103–4120",
    note:  "<strong>Journal Core Ranking: A*</strong>",
    doi: "10.1109/TMC.2025.3623456"
  },

  {
    type: "journal", year: 2026, selected: true, area: "satellite",
    title: "FlexSatIoE: Flexible Routing and Buffering for Satellite Networks Enabled Internet of Everything Applications",
    authorsHtml: "Wang, P.; <strong>Sourav, S.</strong>; Chen, B.; Li, H.",
    venue: "IEEE Internet of Things Journal (IEEE IOTJ), vol. 13, no. 1, pp. 196–211",
    note: " <strong>Journal Core Ranking: A* equivalent</strong>",
    doi: "10.1109/JIOT.2025.3594890"
  },
  {
    type: "journal", year: 2025, selected: false, area: "cps-security",
    title: "SRLR: Symbolic Regression based Logic Recovery to Counter Programmable Logic Controller Attacks",
    authorsHtml: "Zhou, H.; <strong>Sourav, S.</strong>; Chen, B.; Yu, K.",
    venue: "IEEE Transactions on Information Forensics and Security (TIFS), vol. 20, pp. 12491–12506",
    note: " <strong>Journal Core Ranking: A*</strong>",
    doi: "10.1109/TIFS.2025.3634027"
  },
  {
    type: "journal", year: 2024, selected: false, area: "cps-security",
    title: "Exposing Hidden Attackers in Industrial Control Systems using Micro-distortions",
    authorsHtml: "<strong>Sourav, S.</strong>; Chen, B.",
    venue: "IEEE Transactions on Smart Grid, vol. 15, no. 2, pp. 2089–2101",
    note: " <strong>Journal Core Ranking: A*</strong> equivalent",
    doi: "10.1109/TSG.2023.3300710"
  },
  {
    type: "journal", year: 2023, selected: false, area: "distributed",
    title: "Leader Election in Well-Connected Graphs",
    authorsHtml: "Gilbert, S.; Robinson, P.; <strong>Sourav, S.</strong>",
    venue: "Algorithmica, vol. 85, pp. 1029–1066",
    note: " Authors alphabetically ordered (Distributed Computing convention) ·  <strong>Journal Core Ranking: A*</strong>",
    doi: "10.1007/s00453-022-01068-x"
  },
  {
    type: "journal", year: 2022, selected: false, area: "distributed",
    title: "Latency, Capacity and Distributed MST",
    authorsHtml: "Augustine, J.; Gilbert, S.; Kuhn, F.; Robinson, P.; <strong>Sourav, S.</strong>",
    venue: "Journal of Computer and System Sciences (JCSS), vol. 126, pp. 1–20",
    note: " Authors alphabetically ordered ·  <strong>Journal Core Ranking: A*</strong>",
    doi: "10.1016/j.jcss.2021.11.006"
  },
  {
    type: "journal", year: 2022, selected: false, area: "distributed",
    title: "Distributed Graph Realizations",
    authorsHtml: "Augustine, J.; Choudhary, K.; Cohen, A.; Peleg, D.; Sivasubramaniam, S.; <strong>Sourav, S.</strong>",
    venue: "IEEE Transactions on Parallel and Distributed Systems (TPDS), vol. 33, no. 6, pp. 1321–1337",
    note: " Authors alphabetically ordered ·  <strong>Journal Core Ranking: A*</strong>",
    doi: "10.1109/TPDS.2021.3104239"
  },
  {
    type: "journal", year: 2019, selected: false, area: "distributed",
    title: "Slow Links, Fast Links, and the Cost of Gossip",
    authorsHtml: "<strong>Sourav, S.</strong>; Robinson, P.; Gilbert, S.",
    venue: "IEEE Transactions on Parallel and Distributed Systems (TPDS), vol. 30, no. 9, pp. 2130–2147",
    note: " <strong>Journal Core Ranking: A*</strong>",
    doi: "10.1109/TPDS.2019.2905568"
  },

  // ---------------- CONFERENCE PAPERS ----------------

  {
    type: "conference", year: 2026, selected: true, area: "edge-iot",
    title: "ReClub: Real-Time Cluster-Formation for UAV-Assisted Scalable Data-Collection",
    authorsHtml: "Debadarshini, J.; <strong>Sourav, S.</strong>; Gurusamy, M.",
    venue: "IEEE Wireless Communications and Networking Conference (WCNC 2026), pp. 1–6",
    note: "<strong>Core Ranking: B</strong>",
    doi: "10.1109/WCNC65185.2026.11555742"
  },
  {
    type: "conference", year: 2024, selected: false, area: "edge-iot",
    title: "Enhancing Distributed Data Processing Throughput in IoT Systems using Optimized Task Placement",
    authorsHtml: "Choudhary, V.; Wang, P.; <strong>Sourav, S.</strong>; Chen, B.",
    venue: "IEEE International Conference on Distributed Computing Systems (ICDCS 2024), pp. 1474–1475",
    note: "<strong>Core Ranking: A</strong>",
    doi: "10.1109/ICDCS60910.2024.00158"
  },
  {
    type: "conference", year: 2023, selected: false, area: "satellite",
    title: "One Pass is Sufficient: A Solver for Minimizing Data Delivery Time over Time-varying Networks",
    authorsHtml: "Wang, P.; <strong>Sourav, S.</strong>; Li, H.; Chen, B.",
    venue: "IEEE International Conference on Computer Communications (INFOCOM 2023), pp. 1–10",
    note: "Core Ranking: A*</strong>",
    doi: "10.1109/INFOCOM53939.2023.10228959"
  },
  {
    type: "conference", year: 2023, selected: false, area: "cps-security",
    title: "Machine Learning Assisted Bad Data Detection for High-throughput Substation Communication",
    authorsHtml: "<strong>Sourav, S.</strong>; Biswas, P.; Mohanraj, V.; Chen, B.; Mashima, D.",
    venue: "IEEE International Conference on Communications (ICC 2023), pp. 4131–4137",
    note: "<strong>Core Ranking: B</strong>",
    doi: "10.1109/ICC45041.2023.10278910"
  },
  {
    type: "conference", year: 2022, selected: false, area: "cps-security",
    title: "Detecting Hidden Attackers in Photovoltaic Systems Using Machine Learning",
    authorsHtml: "<strong>Sourav, S.</strong>; Biswas, P.; Chen, B.; Mashima, D.",
    venue: "IEEE SmartGridComm 2022, pp. 360–366",
    note: "<strong>Core Ranking: B</strong> equivalent",
    doi: "10.1109/SmartGridComm52983.2022.9960965"
  },
  {
    type: "conference", year: 2021, selected: false, area: "cps-security",
    title: "Distort to Detect, not Affect: Detecting Stealthy Sensor Attacks with Micro-distortion",
    authorsHtml: "<strong>Sourav, S.</strong>; Chen, B.",
    venue: "IEEE SmartGridComm 2021, pp. 412–418",
    note: "<strong>Core Ranking: B</strong> equivalent",
    doi: "10.1109/SmartGridComm51999.2021.9632311"
  },
  {
    type: "conference", year: 2020, selected: false, area: "distributed",
    title: "Latency, Capacity and Distributed MST",
    authorsHtml: "Augustine, J.; Gilbert, S.; Kuhn, F.; Robinson, P.; <strong>Sourav, S.</strong>",
    venue: "IEEE International Conference on Distributed Computing Systems (ICDCS 2020), pp. 157–167",
    note: "Authors alphabetically ordered · <strong>Core Ranking: A</strong>",
    doi: "10.1109/ICDCS47774.2020.00055"
  },
  {
    type: "conference", year: 2020, selected: false, area: "distributed",
    title: "Distributed Graph Realizations",
    authorsHtml: "Augustine, J.; Choudhary, K.; Cohen, A.; Peleg, D.; Sivasubramaniam, S.; <strong>Sourav, S.</strong>",
    venue: "IEEE International Parallel and Distributed Processing Symposium (IPDPS 2020), pp. 158–167",
    note: "Authors alphabetically ordered · <strong>Core Ranking: A</strong>",
    doi: "10.1109/IPDPS47924.2020.00026"
  },
  {
    type: "conference", year: 2018, selected: false, area: "distributed",
    title: "Leader Election in Well-Connected Graphs",
    authorsHtml: "Gilbert, S.; Robinson, P.; <strong>Sourav, S.</strong>",
    venue: "ACM Symposium on Principles of Distributed Computing (PODC 2018), pp. 227–236",
    note: "Authors alphabetically ordered · <strong>Core Ranking: A*</strong>",
    doi: "10.1145/3212734.3212754"
  },
  {
    type: "conference", year: 2018, selected: false, area: "distributed",
    title: "Slow Links, Fast Links, and the Cost of Gossip",
    authorsHtml: "<strong>Sourav, S.</strong>; Robinson, P.; Gilbert, S.",
    venue: "IEEE International Conference on Distributed Computing Systems (ICDCS 2018), pp. 786–796",
    note: "Best-paper award candidate · <strong>Core Ranking: A</strong>",
    doi: "10.1109/ICDCS.2018.00081"
  },
  {
    type: "conference", year: 2017, selected: false, area: "distributed",
    title: "Brief Announcement: Gossiping with Latencies",
    authorsHtml: "Gilbert, S.; Robinson, P.; <strong>Sourav, S.</strong>",
    venue: "ACM Symposium on Principles of Distributed Computing (PODC 2017), pp. 255–257",
    note: "Authors alphabetically ordered · <strong>Core Ranking: A*</strong>",
    doi: "10.1145/3087801.3087846"
  },

  // ---------------- BOOK CHAPTERS ----------------
  {
    type: "chapter", year: 2026, selected: false, area: "edge-iot",
    title: "Detecting Stealthy Attackers Hiding in Edge-IoT Systems by Using Micro-distortions",
    authorsHtml: "<strong>Sourav, S.</strong>; Debadarshini, J.; Jindal, A.; Chen, B.",
    venue: "Edge Intelligence for IoT and Healthcare: Advances and Applications (Springer, Transactions on Computer Systems and Networks series)",
    note: "Accepted",
    doi: ""
  }
];
