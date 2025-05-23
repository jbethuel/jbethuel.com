import fs from "fs"
import path from "path"
import { isDevelopment } from "./helpers"

const folderName = "_posts"

export function getAllMdxFiles(options: { includeFileExtension: boolean }) {
  let postFilePaths = fs.readdirSync(`./src/${folderName}`).filter((postFilePath) => {
    return path.extname(postFilePath).toLowerCase() === ".mdx"
  })

  // only show playground.mdx and __(xx) when in development
  if (!isDevelopment) {
    postFilePaths = postFilePaths.filter((e) => !e.includes("playground") && !e.startsWith("__"))
  }

  if (options.includeFileExtension) {
    return postFilePaths
  }

  return postFilePaths.map((file) => file.replace(".mdx", ""))
}

export function readMdxFile(args: { fileName: string }) {
  return fs.readFileSync(`./src/${folderName}/${args.fileName}.mdx`, "utf8")
}
