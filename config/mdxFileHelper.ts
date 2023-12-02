import fs from 'fs';
import path from 'path';

const folderName = '_posts';

export function getAllMdxFiles(options: { includeFileExtension: boolean }) {
  const postFilePaths = fs.readdirSync(folderName).filter((postFilePath) => {
    return path.extname(postFilePath).toLowerCase() === '.mdx';
  });

  if (options.includeFileExtension) {
    return postFilePaths;
  }

  return postFilePaths.map((file) => file.replace('.mdx', ''));
}

export function readMdxFile(args: { fileName: string }) {
  return fs.readFileSync(`./${folderName}/${args.fileName}.mdx`, 'utf8');
}
