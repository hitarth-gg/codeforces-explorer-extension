/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //   interface ProblemDetails {
  //     name: string;
  //     tags: string[];
  //     url: string;
  //     dateAdded: string;
  //     division: string;
  //     index: string;
  //   }

  //   const problemDetails: ProblemDetails = {
  //     name: "Example Problem",
  //     tags: ["math", "greedy"],
  //     url: "https://codeforces.com/contest/1234/problem/A",
  //     dateAdded: new Date().toISOString(),
  //     division: "Div. 2",
  //     index: "A"
  //   };

  //   console.log(problemDetails);

  // function getProblemDetails() {
  //   const nameElement = document.querySelector(".problem-statement .title");
  //   const tagsElements = document.querySelectorAll(".problem-tags a");
  //   const url = window.location.href;

  //   const name = nameElement ? (nameElement as HTMLElement).innerText : "Unknown Problem";
  //   const tags = Array.from(tagsElements).map(tag => (tag as HTMLElement).innerText);

  //   const urlParts = url.split("/");
  //   const contestId = urlParts[4];
  //   const problemIndex = urlParts[6];

  //   const division = "Div. 2";

  //   return {
  //     name,
  //     tags,
  //     url,
  //     dateAdded: new Date().toISOString(),
  //     division,
  //     index: problemIndex
  //   };
  // }

  // chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  //   if (request.action === "getProblemDetails") {
  //     const problemDetails = getProblemDetails();
  //     sendResponse({ problemDetails });
  //   }
  // });

  const [showTagsSetting, setShowTagsSetting] = useState<boolean>(
    localStorage.getItem("showTagsSetting") === "true" || false
  );
  const [tempShowTags, setTempShowTags] = useState<boolean>(!showTagsSetting);

  const handleTagsChange = () => {
    setShowTagsSetting(!showTagsSetting);
    localStorage.setItem("showTagsSetting", String(!showTagsSetting));
    // console.log("showTagsSetting: ", !showTagsSetting);
  };
  const handleTempTagsChange = () => {
    setTempShowTags(!tempShowTags);
    // console.log("tempShowTags: ", !tempShowTags);
  };

  let url = window.location.href;
  useEffect(() => {
    if (url.includes("problem") && showTagsSetting) {
      const tags = document.querySelector(".tag-box");
      const tagParent: HTMLElement | null = tags?.parentNode
        ?.parentNode as HTMLElement | null;
      const problemTags = tagParent?.parentElement?.children[0];
      const ratingArray = tagParent?.querySelectorAll(".roundbox");
      const ratingBox: HTMLElement | null = ratingArray
        ? (ratingArray[ratingArray.length - 1] as HTMLElement)
        : null;
      const rating = ratingArray
        ? ratingArray[ratingArray.length - 1]
            ?.querySelectorAll("span")[0]
            .innerHTML.trim()
        : null;

      // console.log(ratingBox);
      // console.log(rating);
      // console.log(tagParent);

      if (tagParent) {
        // tagParent.style.opacity = tempShowTags ? "1" : "0";
        for (let i = 0; i < tagParent.children.length; i++) {
          const child = tagParent.children[i] as HTMLElement;
          child.style.opacity = tempShowTags ? "1" : "0";
        }
      }

      problemTags?.addEventListener("click", handleTempTagsChange);
      problemTags?.setAttribute(
        "style",
        "cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;"
      );
      problemTags?.setAttribute("title", "Click to toggle tags visibility");

      // inserting a button in problemTags to show ratingBox onClick
      if (ratingBox) {
        const ratingButton = document.createElement("button");
        ratingButton.innerHTML = "| Show Rating";
        ratingButton.className = "ratingButton";
        // ratingButton.style.marginLeft = "1px";
        ratingButton.style.cursor = "pointer";
        ratingButton.style.border = "none";
        ratingButton.style.backgroundColor = "white";
        ratingButton.style.color = "#3b5998";
        ratingButton.style.fontWeight = "bold"; // bold, bolder, lighter, normal
        // ratingButton.style.textDecoration = "underline";
        ratingButton.style.opacity = "1";
        ratingButton.style.transition = "opacity 0.5s";
        ratingButton.style.padding = "0";
        ratingButton.style.fontSize = "1em";
        ratingButton.style.fontFamily = "inherit";
        ratingButton.style.outline = "none";
        ratingButton.style.display = "inline";
        problemTags?.appendChild(ratingButton);

        ratingButton.addEventListener("click", (e) => {
          e.stopPropagation();
          if (ratingBox) {
            ratingBox.style.opacity = "1";
            // console.log("clicked");
          }
        });
      }

      return () => {
        problemTags?.removeEventListener("click", handleTempTagsChange);
        if (problemTags?.lastChild) {
          // problemTags.removeChild(problemTags.lastChild);
        }
        // remove button
        // problemTags?.removeChild(problemTags?.lastChild as Node);
        problemTags?.querySelector(".ratingButton")?.remove();
      };
    } else if (url.includes("settings/general")) {
      const tableLeft = document.querySelector(".subformContainer.table-form");
      if (tableLeft) {
        const row = document.createElement("tr");
        row.className = "cfe_clickToShowTags";
        row.innerHTML = `
          <td class="field-name"><label for="clickToShowTags">Show tags on click (cf-explorer)</label></td>
          <td>
              <input type="checkbox" style="width:1em;" name="clickToShowTags" id="clickToShowTags">
          </td>
        `;
        tableLeft.appendChild(row);

        const checkbox = document.getElementById(
          "clickToShowTags"
        ) as HTMLInputElement;
        checkbox.checked = showTagsSetting;

        checkbox.addEventListener("click", handleTagsChange);

        return () => {
          checkbox.removeEventListener("click", handleTagsChange);
          row.remove();
        };
      }
    }
  }, [showTagsSetting, tempShowTags]);

  /* ------------------------------------------------------ */
  /* --------------------- Helper Functions ---------------- */

  /* ------------------------------------------------------ */

  function extractIdAndIndex(url: string) {
    const regex = /(\d+|[A-Za-z]\d+).*\/([A-Za-z]\d*)$/;
    const match = url.match(regex);
    if (match) {
      return { number: match[1], index: match[2].toUpperCase() };
    }
    return null;
  }

  const handleClick = () => {
    const url = window.location.href;
    if (url.includes("profile")) {
      // console.log(url.split("/")[4]);
      window.open(
        `https://hitarth-gg.github.io/codeforces-explorer/?=${
          url.split("/")[4]
        }`
      );
    } else if (url.includes("contest") || url.includes("problemset")) {
      const x = extractIdAndIndex(url);
      if (x?.number && x.index) {
        window.open(
          `https://hitarth-gg.github.io/codeforces-explorer/?=${x.number}/${x.index}`
        );
      }
    }
  };
  return (
    <a
      style={{
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      CF-EXPLORER
    </a>
  );
}

export default App;
