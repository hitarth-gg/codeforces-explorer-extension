/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import { useEffect, useState } from "react";
import "./App.css";
import { Button, Checkbox, Flex, Link, Text } from "@radix-ui/themes";

interface ProblemDetails {
  name: string;
  tags: string[];
  url: string;
  dateAdded: string;
  division: string;
  index: string;
}

function App() {
  // const [problemDetails, setProblemDetails] = useState<ProblemDetails[]>([]);
  // const [currentProblem, setCurrentProblem] = useState<ProblemDetails | null>(
  //   null
  // );

  // useEffect(() => {
  //   const storedProblemDetails = localStorage.getItem("problemDetails");
  //   if (storedProblemDetails) {
  //     setProblemDetails(JSON.parse(storedProblemDetails));
  //   }

  //   fetchCurrentProblemDetails();
  // }, []);

  // const fetchCurrentProblemDetails = () => {
  //   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  //     if (tabs[0]?.id) {
  //       chrome.tabs.sendMessage(
  //         tabs[0].id,
  //         { action: "getProblemDetails" },
  //         (response: any) => {
  //           if (response?.problemDetails) {
  //             setCurrentProblem(response.problemDetails);
  //           } else {
  //             console.log("Problem details not found or invalid response.");
  //           }
  //         }
  //       );
  //     }
  //   });
  // };

  // const isProblemSaved = (problem: ProblemDetails) => {
  //   return problemDetails.some((p) => p.name === problem.name);
  // };

  // const handleAddRemoveClick = () => {
  //   if (currentProblem) {
  //     if (!isProblemSaved(currentProblem)) {
  //       const updatedProblemDetails = [...problemDetails, currentProblem];
  //       setProblemDetails(updatedProblemDetails);

  //       localStorage.setItem(
  //         "problemDetails",
  //         JSON.stringify(updatedProblemDetails)
  //       );
  //     } else {
  //       const filteredProblemDetails = problemDetails.filter(
  //         (p) => p.name !== currentProblem.name
  //       );
  //       setProblemDetails(filteredProblemDetails);

  //       localStorage.setItem(
  //         "problemDetails",
  //         JSON.stringify(filteredProblemDetails)
  //       );
  //     }
  //   } else {
  //     console.log("No problem details to add/remove.");
  //   }
  // };


  return (
    <div className="App w-96 h-96">
      <div className="flex flex-col items-center justify-between  h-full p-3">
        {/* {currentProblem && (
          <div>
          <p>{currentProblem.name}</p>
          <Button size={"2"} color="gray" variant="outline"  onClick={handleAddRemoveClick}>
          {isProblemSaved(currentProblem) ? "Remove" : "Add"}
          </Button>
          </div>
          )} */}

        {/* <div></div> */}

        <div className="mid_box flex flex-col justify-center items-center  w-4/5 h-4/5 rounded-md"> {/* bg-[#20222430] */}
          {/* <Text as="label" size="2">
            <Flex gap="2">
              Hide Tags
              <Checkbox onClick={handleTagsChange} />
            </Flex>
          </Text> */}
          <img src="gengarLmao.gif" width={150} alt="" />
          <span
          style={{
            fontFamily: "Pixelify Sans",
            fontSize: "1.2rem",
          }}
        >
          codeforces-explorer
        </span>
        </div>

        <Flex gap={"4"}>
          <Link
            size={"1"}
            target="_blank"
            href="https://github.com/hitarth-gg/codeforces-explorer"
          >
            GitHub
          </Link>
          <Link
            size={"1"}
            target="_blank"
            href="https://hitarth-gg.github.io/codeforces-explorer/"
          >
            Website
          </Link>
          <Link
            size={"1"}
            target="_blank"
            href="https://hitarth-gg.github.io/codeforces-explorer-extension/"
          >
            Extension
          </Link>
        </Flex>
      </div>
    </div>
  );
}

export default App;
