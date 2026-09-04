/**
 * Research themes shown on the Research page and used to tag
 * publications (see the "area" field in publications-data.js).
 */
const RESEARCH_AREAS = [

  {
    id: "satellite",
    icon: "🛰️",
    title: "Satellite & Time-Varying Networks",
    summary: "Routing and scheduling algorithms for satellite constellations and other networks whose topology changes over time, aimed at minimizing data delivery time end to end.",
    detail: "As satellite constellations and other time-varying networks become central infrastructure, classical routing assumptions break down. This line of work develops algorithms for maximizing performance and communication by minimizing data delivery times over satellite and IoE (Internet of Everything) networks."
  },

  {
    id: "edge-iot",
    icon: "📡",
    title: "Edge-Cloud Systems & Distributed Machine Learning",
    summary: "Making distributed machine learning and real-time coordination practical under the compute, memory, and connectivity limits of IoT edge devices and UAV fleets.",
    detail: "Modern IoT deployments increasingly need to run machine learning close to where data is generated. We look at task placement for distributed data processing, overcoming compute/memory constraints for distributed ML at the edge, and real-time cluster formation for UAV-assisted data collection."
  },
  {
    id: "distributed",
    icon: "🕸️",
    title: "Distributed Systems & Graph Algorithms",
    summary: "Foundational questions about how fast and how reliably information can spread in a network — leader election, minimum spanning trees, and gossip protocols under realistic latency and connectivity constraints.",
    detail: "This is where my research began during his PhD at NUS: understanding how the *shape* of a network (its connectivity, its link latencies) governs the fundamental limits of distributed computation. Work here spans leader election in well-connected graphs, distributed MST construction, gossip-based information spreading, and distributed graph realizability."
  },

  {
    id: "cps-security",
    icon: "🛡️",
    title: "Industrial IoT, Cyber-Physical Systems & Security",
    summary: "Detecting stealthy attacks on industrial control systems, smart grids, and photovoltaic systems using lightweight micro-distortion techniques and machine learning.",
    detail: "Cyber-physical systems — power grids, substations, programmable logic controllers — are attractive targets precisely because attacks can be disguised as noise. This research develops detection techniques (including a 'micro-distortion' approach) and machine-learning-assisted bad-data detection for high-throughput industrial communication."
  }
];
