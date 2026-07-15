import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' });

const outDir = 'C:/Users/HP/AppData/Local/Temp/claude/C--Users-HP-Documents-proyectos-ksp/bbffeb53-38f8-440f-b470-5859dc6bc30e/scratchpad';

// Find and scroll to the Export & Product Supply section
await page.evaluate(() => {
  const text = Array.from(document.querySelectorAll('h3')).find(el => el.textContent.includes('Export & Product Supply'));
  if (text) text.scrollIntoView({ behavior: 'auto', block: 'center' });
});

await page.waitForTimeout(300);
await page.screenshot({ path: `${outDir}/export-tech-1.png` });

await page.mouse.wheel(0, 500);
await page.waitForTimeout(300);
await page.screenshot({ path: `${outDir}/export-tech-2.png` });

await page.mouse.wheel(0, 500);
await page.waitForTimeout(300);
await page.screenshot({ path: `${outDir}/export-tech-3.png` });

await browser.close();
