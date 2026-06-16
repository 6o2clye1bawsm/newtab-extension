import { useEffect, useState } from "react";
import resultBoxStyles from "./ResultsBox.module.css";

interface BookmarksBoxProps {
  query: string;
  visibility: boolean;
}

// 2. The React-way to handle recursion: A self-referencing component
const BookmarkItem = ({ node }: { node: chrome.bookmarks.BookmarkTreeNode }) => {
  // Scenario A: It's a direct bookmark link
  if (node.url) {
    return (
      <li className={resultBoxStyles.bookmarkItem}>
        <a href={node.url} target="_blank" rel="noreferrer">
          {node.title}
        </a>
      </li>
    );
  }

  // Scenario B: It's a folder containing more bookmarks
  if (node.children && node.children.length > 0) {
    return (
      <li className={resultBoxStyles.bookmarkFolder}>
        <span>{node.title}</span>
        <ul>
          {node.children.map((child) => (
            <BookmarkItem key={child.id} node={child} />
          ))}
        </ul>
      </li>
    );
  }

  return null;
};

export default function BookmarksBox({ visibility }: BookmarksBoxProps) {
  // 3. Keep the bookmark data tree in React state
  const [bookmarkTree, setBookmarkTree] = useState<chrome.bookmarks.BookmarkTreeNode[]>([]);

  // 4. Fetch the bookmarks once when the component loads
  useEffect(() => {
    // Check if the Chrome extension API is available in the current context
    if (typeof chrome !== "undefined" && chrome.bookmarks) {
      chrome.bookmarks.getTree((tree: chrome.bookmarks.BookmarkTreeNode[]) => {
        // tree[0].children contains the default Root bookmark folders
        if (tree[0]?.children) {
          setBookmarkTree(tree[0].children);
        }
      });
    }
  }, []);

  const visibilityClass = visibility
    ? resultBoxStyles.visible
    : resultBoxStyles.hidden;

  return (
    <div className={`${resultBoxStyles.bookmarksBox} ${visibilityClass}`}>
      <ul style={{ paddingLeft: 0 }}>
        {bookmarkTree.map((node) => (
          <BookmarkItem key={node.id} node={node} />
        ))}
      </ul>
    </div>
  );
}


