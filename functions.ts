import { Options } from "./quartz/components/ExplorerNode"
export const mapFn: Options["mapFn"] = (node) => {
        // Use a regular expression to keep only alphabetic characters
        node.displayName = node.displayName.replace(/[^a-zA-Z]/g, ' ');
}

export const sortFn: Options["sortFn"] = (a, b) => {
    if ((!a.file && !b.file) || (a.file && b.file)) {
        return a.displayName.localeCompare(b.displayName)
      }
      if (a.file && !b.file) {
        return -1
      } else {
        return 1
      }
}