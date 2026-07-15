import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' });

const outDir = 'C:/Users/HP/AppData/Local/Temp/claude/C--Users-HP-Documents-proyectos-ksp/bbffeb53-38f8-440f-b470-5859dc6bc30e/scratchpad';

// Navigate to services section
const servHandle = page.getByText('From material supply to installation').first();
await servHandle.scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
await page.screenshot({ path: `${outDir}/services-1.png` });

await page.mouse.wheel(0, 400);
await page.waitForTimeout(300);
await page.screenshot({ path: `${outDir}/services-2.png` });

await page.mouse.wheel(0, 400);
await page.waitForTimeout(300);
await page.screenshot({ path: `${outDir}/services-3.png` });

await browser.close();
