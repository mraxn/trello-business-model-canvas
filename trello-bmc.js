function createCanvasTable(listWrappers)
{

  let keyPartners           = {};
  let keyActivities         = {};
  let keyResources          = {};
  let costStructure         = {};
  let valuePropositions     = {};
  let customerRelationships = {};
  let channels              = {};
  let customerSegments      = {};
  let revenueStreams        = {};

  for (let iListWrapper = 0; iListWrapper < listWrappers.length-1; iListWrapper++)
  {
    listWrappers[iListWrapper].style.height = "auto";

    switch (listWrappers[iListWrapper].children[0].children[0].children[1].innerText)
    {
      case "Key Partners":
        keyPartners = listWrappers[iListWrapper];
        break;
      case "Key Activities":
        keyActivities = listWrappers[iListWrapper];
        break;
      case "Key Resources":
        keyResources = listWrappers[iListWrapper];
        break;
      case "Cost Structure":
        costStructure = listWrappers[iListWrapper];
        break;
      case "Value Propositions":
        valuePropositions = listWrappers[iListWrapper];
        break;
      case "Customer Relationships":
        customerRelationships = listWrappers[iListWrapper];
        break;
      case "Channels":
        channels = listWrappers[iListWrapper];
        break;
      case "Customer Segments":
        customerSegments = listWrappers[iListWrapper];
        break;
      case "Revenue Streams":
        revenueStreams = listWrappers[iListWrapper];
        break;
      default:
        break;
    }
  }

  // keyPartners.style.height = "auto";
  keyPartners.style.position = "absolute";
  keyPartners.style.left = 0 + "px";
  keyPartners.style.width = myWidth + "px";

  keyActivities.style.position = "absolute";
  keyActivities.style.left = myMargin * 3 + myWidth + "px";
  keyActivities.style.width = myWidth + "px";

  keyPartners.children[0].style.height = "auto";
  keyActivities.children[0].style.height = "auto";
  keyResources.children[0].style.height = "auto";
  costStructure.children[0].style.height = "auto";
  valuePropositions.children[0].style.height = "auto";
  customerRelationships.children[0].style.height = "auto";
  channels.children[0].style.height = "auto";
  customerSegments.children[0].style.height = "auto";
  revenueStreams.children[0].style.height = "auto";

  keyPartners.style.height = "auto";
  keyActivities.style.height = "auto";
  keyResources.style.height = "auto";
  costStructure.style.height = "auto";
  valuePropositions.style.height = "auto";
  customerRelationships.style.height = "auto";
  channels.style.height = "auto";
  customerSegments.style.height = "auto";
  revenueStreams.style.height = "auto";

  let height1 = parseInt(window.getComputedStyle(keyPartners, null).getPropertyValue("height"));
  let height2 = parseInt(window.getComputedStyle(keyActivities, null).getPropertyValue("height"));
  let height3 = parseInt(window.getComputedStyle(keyResources, null).getPropertyValue("height"));
  let height4 = parseInt(window.getComputedStyle(costStructure, null).getPropertyValue("height"));
  let height5 = parseInt(window.getComputedStyle(valuePropositions, null).getPropertyValue("height"));
  let height6 = parseInt(window.getComputedStyle(customerRelationships, null).getPropertyValue("height"));
  let height7 = parseInt(window.getComputedStyle(channels, null).getPropertyValue("height"));
  let height8 = parseInt(window.getComputedStyle(customerSegments, null).getPropertyValue("height"));
  let height9 = parseInt(window.getComputedStyle(revenueStreams, null).getPropertyValue("height"));

  let heights = [height1, height2 + height3 + myMargin * 2, height4, height5, height6 + height7 + myMargin * 2, height8, height9];

  let maxHeight = Math.max(...heights);

  keyPartners.style.height = maxHeight + "px";

  keyResources.style.position = "absolute";
  keyResources.style.top = height2 + myMargin * 2 + "px";
  keyResources.style.left = myMargin * 3 + myWidth + "px";
  keyResources.style.width = myWidth + "px";

  valuePropositions.style.position = "absolute";
  valuePropositions.style.width = myWidth + "px";
  valuePropositions.style.left = myMargin * 5 + myWidth * 2 + "px";

  customerRelationships.style.position = "absolute";
  customerRelationships.style.left = myMargin * 7 + myWidth * 3 + "px";

  // channels.style.height = "auto";
  channels.style.position = "absolute";
  channels.style.left = myMargin * 7 + myWidth * 3 + "px";
  channels.style.width = myWidth + "px";
  channels.style.top = height6 + 8 + "px";

  customerSegments.style.position = "absolute";
  customerSegments.style.left = myMargin * 9 + myWidth * 4 + "px";

  costStructure.style.position = "absolute";
  costStructure.style.left = "4px";
  costStructure.style.top = maxHeight + 8 + "px";
  costStructure.style.width = (myWidth * 5 + myMargin * 9) / 2 - myMargin * 2 + "px";

  revenueStreams.style.position = "absolute";
  revenueStreams.style.left = (myWidth * 5 + myMargin * 9) / 2 + "px";
  revenueStreams.style.top = maxHeight + 8 + "px";
  revenueStreams.style.width = (myWidth * 5 + myMargin * 9) / 2 + "px";

  keyPartners.children[0].style.height = maxHeight + "px";
  valuePropositions.children[0].style.height = maxHeight + "px";
  customerSegments.children[0].style.height = maxHeight + "px";

}

function MutationObserverCallback(mutations)
{
  for (let mutation of mutations) 
  {
    createCanvasTable(listWrappers);
    // console.log(mutation);
    // if (mutation.target.parentElement.className === "list js-list-content")
  }
}

let myWidth = 272;
let myMargin = 4;

document.body.style.zoom="50%"
// window.style.zoom="50%"
let board = document.getElementById("board");

let listWrappers = document.getElementsByClassName("list-wrapper");

createCanvasTable(listWrappers);

document.body.style.zoom="100%"

let mutationObserver = new MutationObserver(MutationObserverCallback);
let mutationObserverOptions = 
{
  characterData: true,
  characterDataOldValue: true,
  childList: true,
  subtree: true
}; 

mutationObserver.observe(board, mutationObserverOptions);