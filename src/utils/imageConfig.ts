/**
 * Shyam Express Pitch Deck - CENTRAL IMAGE SOURCE CONFIGURATION
 * 
 * 💡 HOW TO UPLOAD & DISPLAY YOUR OWN IMAGES IN THE DECK FOR ALL DEVICES (VERCEL, MOBILE, ETC.):
 * 1. Upload your local image (.png, .jpg, .webp) to a free hosting site (e.g., https://postimages.org/ or https://imgur.com/).
 * 2. Copy the "Direct Link" (must end in .png, .jpg, or .webp).
 *    - Example: https://i.postimg.cc/RqrNbfpS/shyam-express-poster-9.webp
 * 3. Replace the placeholder URLs inside the double quotes below with your direct links.
 * 4. Save this file. If any link is empty ("") or contains "your-direct-link", the app will
 *    automatically fall back to the pre-packaged high-quality assets so it never looks broken!
 */

// @ts-ignore
import localKhatuShyamHero from "../assets/images/khatu_shyam_hero_1783612474905.jpg";
// @ts-ignore
import localSumedhMudgalkar from "../assets/images/sumedh_mudgalkar_1783617889941.jpg";
// @ts-ignore
import localDivyaDutta from "../assets/images/divya_dutta_actress_1783617903496.jpg";
// @ts-ignore
import localProfShyam from "../assets/images/prof_shyam_turnaround_1783617863544.jpg";
// @ts-ignore
import localHemantMentoring from "../assets/images/hemant_mentoring_1783617934923.jpg";
// @ts-ignore
import localHemantNilimDas from "../assets/images/hemant_nilim_das_1783617875633.jpg";
// @ts-ignore
import localPrajaktaMali from "../assets/images/prajakta_mali_actress_1783617922399.jpg";
// @ts-ignore
import localShyamExpressLogo from "../assets/images/shyam_express_logo_1783665032905.jpg";

// Smart helper to use custom URL if valid, otherwise fall back to pre-packaged asset
const getUrl = (customUrl: string, fallbackAsset: string): string => {
  if (!customUrl || customUrl.trim() === "" || customUrl.includes("your-direct-link")) {
    return fallbackAsset;
  }
  return customUrl.trim();
};

// 🌟 EDIT THE LINKS INSIDE THE QUOTES BELOW TO CUSTOMIZE ALL IMAGES PERMANENTLY! 🌟
export const IMAGES = {
  // --- BASE COMPONENT ASSETS ---
  khatuShyamHero: getUrl(
    "", 
    localKhatuShyamHero
  ),
  sumedhMudgalkar: getUrl(
    "https://i.postimg.cc/7hQ0mf0K/HEMANT-DAS-MONTAGE.png", 
    localSumedhMudgalkar
  ), 
  divyaDutta: getUrl(
    "https://i.postimg.cc/7hQ0mf0K/HEMANT-DAS-MONTAGE.png", 
    localDivyaDutta
  ),           
  prajaktaMali: getUrl(
    "https://i.postimg.cc/7hQ0mf0K/HEMANT-DAS-MONTAGE.png", 
    localPrajaktaMali
  ),       
  profShyam: getUrl(
    "https://i.postimg.cc/7hQ0mf0K/HEMANT-DAS-MONTAGE.png", 
    localProfShyam
  ),             
  hemantMentoring: getUrl(
    "https://i.postimg.cc/7hQ0mf0K/HEMANT-DAS-MONTAGE.png", 
    localHemantMentoring
  ), 
  hemantNilimDas: getUrl(
    "https://i.postimg.cc/7hQ0mf0K/HEMANT-DAS-MONTAGE.png", 
    localHemantNilimDas
  ),   
  shyamExpressLogo: getUrl(
    "https://i.postimg.cc/7hQ0mf0K/HEMANT-DAS-MONTAGE.png", 
    localShyamExpressLogo
  ),

  // --- DYNAMIC SLIDE-BY-SLIDE VISUAL ZONES ---
  
  // Slide 0: Title Slide Poster Image
  slide0Poster: getUrl(
    "", // https://i.postimg.cc/7hQ0mf0K/HEMANT-DAS-MONTAGE.png (e.g. "https://i.postimg.cc/...")
    localKhatuShyamHero
  ),

  // Slide 1: One-Line Vision Atmospheric Visual (Mela/Devotees Atmosphere)
  slide1Image: getUrl(
    "", // https://i.postimg.cc/7hQ0mf0K/HEMANT-DAS-MONTAGE.png
    localKhatuShyamHero
  ),

  // Slide 2: The Opportunity (Devotee Footfall / Demographic Visual)
  slide2Image: getUrl(
    "", // Paste custom visual URL here
    localKhatuShyamHero
  ),

  // Slide 3: Look & Feel - World A Realist Concept Plate (Gritty India)
  slide3WorldA: getUrl(
    "", // Paste custom visual URL here
    localProfShyam
  ),

  // Slide 3: Look & Feel - World B Mythic Concept Plate (Darshan Symmetries)
  slide3WorldB: getUrl(
    "", // Paste custom visual URL here
    localKhatuShyamHero
  ),

  // Slide 4: Character Blueprint - Prof Shyam Character Sheet / Portrait
  slide4Hero: getUrl(
    "", // Paste custom visual URL here
    localProfShyam
  ),

  // Slide 5: All Star Cast Portrait 1 (Sumedh Mudgalkar)
  slide5Cast1: getUrl(
    "", // Paste custom visual URL here
    localSumedhMudgalkar
  ),

  // Slide 5: All Star Cast Portrait 2 (Divya Dutta / Prajakta Mali)
  slide5Cast2: getUrl(
    "", // Paste custom visual URL here
    localDivyaDutta
  ),

  // Slide 5: All Star Cast Portrait 3 (Gajraj Rao / Raghubir Yadav)
  slide5Cast3: getUrl(
    "", // Paste custom visual URL here
    localProfShyam
  ),

  // Slide 5: All Star Cast Portrait 4 (Rajesh Sharma / Brijendra Kala)
  slide5Cast4: getUrl(
    "", // Paste custom visual URL here
    localHemantMentoring
  ),

  // Slide 6: About the Creator - Hemant Nilim Das Portrait
  slide6CreatorPortrait: getUrl(
    "", // Paste custom visual URL here
    localHemantNilimDas
  ),

  // Slide 7: Budget Model - Adaptive COP Visual Plate
  slide7BudgetVisual: getUrl(
    "", // Paste custom visual URL here
    localShyamExpressLogo
  ),

  // Slide 8: Recovery & ROI - Distribution map / Infographic
  slide8Recovery: getUrl(
    "", // Paste custom visual URL here
    localShyamExpressLogo
  ),

  // Slide 9: Next Steps - Closing Visionary Concept
  slide9NextSteps: getUrl(
    "", // Paste custom visual URL here
    localKhatuShyamHero
  ),

  // --- MOVIE FRAMES SHOWCASE SLIDE ---
  frame1: getUrl("", localKhatuShyamHero),
  frame2: getUrl("", localProfShyam),
  frame3: getUrl("", localHemantNilimDas),
  frame4: getUrl("", localSumedhMudgalkar),
  frame5: getUrl("", localDivyaDutta),
  frame6: getUrl("", localPrajaktaMali),
  frame7: getUrl("", localHemantMentoring),
  frame8: getUrl("", localShyamExpressLogo),
  frame9: getUrl("", localKhatuShyamHero),
  frame10: getUrl("", localProfShyam),
};
