/**
 * ============================================================
 *  SITE CONFIG — edit this file to update personal information
 *  that appears across the whole website (name, links, contact,
 *  analytics keys). This is the ONE place to change these.
 * ============================================================
 */
const SITE_CONFIG = {
  name: "Suman Sourav",
  fullTitle: "Dr. Suman Sourav — Assistant Professor of Computer Science, Aalborg University",
  position: "Assistant Professor of Computer Science",
  institution: "Aalborg University, Copenhagen",
  email: "sumansourav@cs.aau.dk",

  // [TO UPDATE] — the CV lists these profiles by name only, without URLs.
  // Paste the real addresses below. Until you do, the site shows them as
  // disabled/placeholder links so nothing broken ever goes live.
  links: {
    scholar: "https://scholar.google.com/citations?hl=en&user=xe4WnykAAAAJ&view_op=list_works&sortby=pubdate", // e.g. "https://scholar.google.com/citations?user=XXXXXXX"
    orcid: "https://orcid.org/my-orcid?orcid=0000-0001-6923-5762",   // e.g. "https://orcid.org/0000-0000-0000-0000"
    dblp: "https://dblp.org/pid/190/7190.html",    // e.g. "https://dblp.org/pid/XX/XXXX.html"
    linkedin: "https://www.linkedin.com/in/smnsourav/",// e.g. "https://www.linkedin.com/in/username"
    //github: "",  // optional — not listed in CV
    university: "https://vbn.aau.dk/en/persons/sumansourav/" // e.g. AAU staff profile page
  },

  // [TO UPDATE] Place your CV PDF at assets/cv/Suman_Sourav_CV.pdf
  cvPath: "assets/cv/Suman_Sourav_CV.pdf",

  // [TO UPDATE] Place 1–4 photos here for the homepage carousel, e.g.
  // "assets/images/suman-sourav-1.jpg". Leave empty to show a placeholder frame.
  photos: [
    "assets/images/suman-sourav-1.jpg",
    "assets/images/suman-sourav-2.jpg"
  ],

  // -----------------------------------------------------------
  // Visitor counter / map — see README "Visitor analytics setup"
  // This site uses the free, privacy-conscious goatcounter.com
  // service (no cookies, no IP storage, GDPR-friendly, free tier).
  // 1. Create a free account at https://www.goatcounter.com
  // 2. Put your site code below (the part before .goatcounter.com)
  // 3. Nothing else is needed — no secret API key is ever used
  //    in this client-side file. Do NOT paste any private API
  //    token here; the public tracking snippet is safe to expose.
  // -----------------------------------------------------------
  goatCounterCode: "smnsourav" // e.g. "sumansourav" -> tracks via sumansourav.goatcounter.com
};
