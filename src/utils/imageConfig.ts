/**
 * Shyam Express Pitch Deck - CENTRAL IMAGE SOURCE CONFIGURATION
 * 
 * 💡 HOW TO UPLOAD & DISPLAY YOUR OWN IMAGES IN THE DECK FOR ALL DEVICES (VERCEL, MOBILE, ETC.):
 * 1. Upload your local image (.png, .jpg, .webp) to a free hosting site (e.g., https://postimages.org/ or https://imgur.com/).
 * 2. Copy the "Direct Link" (must end in .png, .jpg, or .webp).
 *    - Example: https://i.postimg.cc/7hQ0mf0K/HEMANT-DAS-MONTAGE.png
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

// 🌟 STEP 1: BASE COMPONENT ASSETS 🌟
// Changing any link here will AUTOMATICALLY update that asset across ALL slides and movie frames!
const baseAssets = {
  khatuShyamHero: getUrl(
    "https://i.postimg.cc/RqrNbfpS/shyam-express-poster-9.webp", 
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
};

// 🌟 STEP 2: SLIDE-BY-SLIDE CONFIGURATION (Falls back automatically to Base Assets above) 🌟
export const IMAGES = {
  ...baseAssets,
  
  // Slide 0: Title Slide Poster Image (Falls back to Khatu Shyam Hero)
  slide0Poster: getUrl(
    "https://i.postimg.cc/RqrNbfpS/shyam-express-poster-9.webp", // Paste custom visual URL here if you want slide-specific override
    baseAssets.khatuShyamHero
  ),

  // Slide 1: One-Line Vision Atmospheric Visual (Mela/Devotees Atmosphere)
  slide1Image: getUrl(
    "https://i.postimg.cc/K8sv9wqf/svf-fight-03-dodge.webp", 
    baseAssets.khatuShyamHero
  ),

  // Slide 2: The Opportunity (Devotee Footfall / Demographic Visual)
  slide2Image: getUrl(
    "https://i.postimg.cc/mhWzdqmt/shyam-express-final.png", 
    baseAssets.khatuShyamHero
  ),

  // Slide 3: Look & Feel - World A Realist Concept Plate (Gritty India)
  slide3WorldA: getUrl(
    "https://i.postimg.cc/W16fTqqn/khatu-shyam-prof.jpg", 
    baseAssets.profShyam
  ),

  // Slide 3: Look & Feel - World B Mythic Concept Plate (Darshan Symmetries)
  slide3WorldB: getUrl(
    "https://i.postimg.cc/9FbGfXMB/shyam-express-banner-2.webp", 
    baseAssets.khatuShyamHero
  ),

  // Slide 4: Character Blueprint - Prof Shyam Character Sheet / Portrait
  slide4Hero: getUrl(
    "https://i.postimg.cc/mgZtpQTp/khatu-diffrent-versions.webp", 
    baseAssets.profShyam
  ),

  // Slide 5: All Star Cast Portrait 1 (Sumedh Mudgalkar)
  slide5Cast1: getUrl(
    "https://i.postimg.cc/MKqk15Dw/sumedh.jpg", 
    baseAssets.sumedhMudgalkar
  ),

  // Slide 5: All Star Cast Portrait 2 (Divya Dutta / Prajakta Mali)
  slide5Cast2: getUrl(
    "https://i.postimg.cc/GmgZwC10/Divya-Dutta-(2).png", 
    baseAssets.divyaDutta
  ),

  // Slide 5: All Star Cast Portrait 3 (Gajraj Rao / Raghubir Yadav)
  slide5Cast3: getUrl(
    "https://i.postimg.cc/SR8MqqPL/Gajraj-Rao.jpg", 
    baseAssets.profShyam
  ),

  // Slide 5: All Star Cast Portrait 4 (Rajesh Sharma / Brijendra Kala)
  slide5Cast4: getUrl(
    "https://i.postimg.cc/3xZ2d8ww/RAJESH-SHARMA.png", 
    baseAssets.hemantMentoring
  ),

  // Slide 6: About the Creator - Hemant Nilim Das Portrait
  slide6CreatorPortrait: getUrl(
    "", 
    baseAssets.hemantNilimDas
  ),

  // Slide 7: Budget Model - Adaptive COP Visual Plate
  slide7BudgetVisual: getUrl(
    "https://i.postimg.cc/MGNHGN1q/svf-fight-01-previs.webp", 
    baseAssets.shyamExpressLogo
  ),

  // Slide 8: Recovery & ROI - Distribution map / Infographic
  slide8Recovery: getUrl(
    "https://i.postimg.cc/8cVCRvyX/svf-fight-02-block.webp", 
    baseAssets.shyamExpressLogo
  ),

  // Slide 9: Next Steps - Closing Visionary Concept
  slide9NextSteps: getUrl(
    "https://i.postimg.cc/K8sv9wqf/svf-fight-03-dodge.webp", 
    baseAssets.khatuShyamHero
  ),

  // --- MOVIE FRAMES SHOWCASE SLIDE ---
  frame1: getUrl("https://i.postimg.cc/W16fTqqn/khatu-shyam-prof.jpg", baseAssets.khatuShyamHero),
  frame2: getUrl("https://i.postimg.cc/8PppTNx6/shyam-01-train-arrival.webp", baseAssets.profShyam),
  frame3: getUrl("https://i.postimg.cc/cLj07YCC/nerf-05-final-render.webp", baseAssets.hemantNilimDas),
  frame4: getUrl("https://i.postimg.cc/QC0rFKvg/nerf-03-virtual-production.webp", baseAssets.sumedhMudgalkar),
  frame5: getUrl("https://i.postimg.cc/vT3LCG6m/svf-01-photon-capture.webp", baseAssets.divyaDutta),
  frame6: getUrl("https://i.postimg.cc/MGNHGN1q/svf-fight-01-previs.webp", baseAssets.prajaktaMali),
  frame7: getUrl("https://i.postimg.cc/8cVCRvyX/svf-fight-02-block.webp", baseAssets.hemantMentoring),
  frame8: getUrl("https://i.postimg.cc/K8sv9wqf/svf-fight-03-dodge.webp", baseAssets.shyamExpressLogo),
  frame9: getUrl("https://i.postimg.cc/rpNdfQrB/fight-nerf-02-block.webp", baseAssets.khatuShyamHero),
  frame10: getUrl("https://i.postimg.cc/5yhkNwm3/fight-nerf-03-dodge.webp", baseAssets.profShyam),
};
