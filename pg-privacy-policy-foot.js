/* jkt-privacy-semantic-basis-table-2026-09-05 */
try{
(function(){
"use strict";
var pageId="6a732e93101fdb20d5899ff6";
function run(){
if(document.documentElement.getAttribute("data-wf-page")!==pageId)return;
var wrap=document.querySelector(".pp_table_wrap");
if(!wrap||document.getElementById("jkt-privacy-basis-table"))return;
var columns=Array.prototype.filter.call(wrap.children,function(node){return node.classList&&node.classList.contains("pp_table");});
if(columns.length!==2)return;
var purposeCells=columns[0].querySelectorAll(".pp_table_body > .pp_table_td");
var basisCells=columns[1].querySelectorAll(".pp_table_body > .pp_table_td");
var purposeTitle=columns[0].querySelector(".pp_table_th_title > *");
var basisTitle=columns[1].querySelector(".pp_table_th_title > *");
if(purposeCells.length!==7||basisCells.length!==7||!purposeTitle||!basisTitle)return;
var purposes=[],bases=[];
for(var i=0;i<7;i++){
var purpose=purposeCells[i].querySelector(".pp_table_td_item");
var basis=basisCells[i].querySelector(".pp_table_td_item");
if(!purpose||!basis)return;
purposes.push(purpose);
bases.push(basis);
}
var table=document.createElement("table");
table.id="jkt-privacy-basis-table";
table.setAttribute("role","table");
var caption=document.createElement("caption");
caption.textContent="Purposes and legal bases for processing";
table.appendChild(caption);
var thead=document.createElement("thead");
thead.setAttribute("role","rowgroup");
var headRow=document.createElement("tr");
headRow.setAttribute("role","row");
var purposeHead=document.createElement("th");
purposeHead.id="jkt-privacy-purpose-heading";
purposeHead.scope="col";
purposeHead.setAttribute("role","columnheader");
purposeHead.appendChild(purposeTitle);
var basisHead=document.createElement("th");
basisHead.id="jkt-privacy-basis-heading";
basisHead.scope="col";
basisHead.setAttribute("role","columnheader");
basisHead.appendChild(basisTitle);
headRow.appendChild(purposeHead);
headRow.appendChild(basisHead);
thead.appendChild(headRow);
table.appendChild(thead);
var tbody=document.createElement("tbody");
tbody.setAttribute("role","rowgroup");
for(var rowIndex=0;rowIndex<7;rowIndex++){
var row=document.createElement("tr");
row.setAttribute("role","row");
var purposeCell=document.createElement("th");
purposeCell.id="jkt-privacy-purpose-"+(rowIndex+1);
purposeCell.scope="row";
purposeCell.setAttribute("role","rowheader");
purposeCell.setAttribute("headers","jkt-privacy-purpose-heading");
purposeCell.setAttribute("data-label","Purpose");
purposeCell.appendChild(purposes[rowIndex]);
var basisCell=document.createElement("td");
basisCell.setAttribute("role","cell");
basisCell.setAttribute("headers",purposeCell.id+" jkt-privacy-basis-heading");
basisCell.setAttribute("data-label","Legal Basis");
basisCell.appendChild(bases[rowIndex]);
row.appendChild(purposeCell);
row.appendChild(basisCell);
tbody.appendChild(row);
}
table.appendChild(tbody);
wrap.replaceChildren(table);
wrap.dataset.jktSemanticBasisTable="true";
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",run,{once:true});else run();
})();
}catch(e){console.warn("jkt page block failed: jkt-privacy-semantic-basis-table-2026-09-05",e)}
