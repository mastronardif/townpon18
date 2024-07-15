const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'dist/townpon/index.html');
const targetBaseHref = '/dist/townpon/'; //process.env.BASE_HREF || '/';

if (fs.existsSync(indexPath)) {
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  const updatedContent = indexContent.replace(/<base href="\/">/g, `<base href="${targetBaseHref}">`);
  fs.writeFileSync(indexPath, updatedContent, 'utf8');
  console.log(`Successfully set <base href="${targetBaseHref}"> in index.html`);
} else {
  console.log(`index.html not found at path: ${indexPath}`);
}
