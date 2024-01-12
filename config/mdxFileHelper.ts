import fs from 'fs';
import path from 'path';

const folderName = '_posts';

export function getAllMdxFiles(options: { includeFileExtension: boolean }) {
  let postFilePaths = fs.readdirSync(folderName).filter((postFilePath) => {
    return path.extname(postFilePath).toLowerCase() === '.mdx';
  });

  // only show playground.mdx when in development
  if (process.env.NODE_ENV !== 'development') {
    postFilePaths = postFilePaths.filter((e) => !e.includes('playground'));
  }

  // exclude draft blog posts
  postFilePaths = postFilePaths.filter((e) => !e.startsWith('__'));

  if (options.includeFileExtension) {
    return postFilePaths;
  }

  return postFilePaths.map((file) => file.replace('.mdx', ''));
}

export function readMdxFile(args: { fileName: string }) {
  return fs.readFileSync(`./${folderName}/${args.fileName}.mdx`, 'utf8');
}
