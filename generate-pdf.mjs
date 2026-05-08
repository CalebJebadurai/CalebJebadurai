import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, 'caleb-jebadurai-cv.html');
const pdfPath = path.join(__dirname, 'Caleb-Jebadurai-CV.pdf');

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
await page.pdf({
  path: pdfPath,
  format: 'A4',
  printBackground: false,
  margin: { top: '0.5in', right: '0.55in', bottom: '0.4in', left: '0.55in' },
});
await browser.close();
console.log(`PDF saved to ${pdfPath}`);
