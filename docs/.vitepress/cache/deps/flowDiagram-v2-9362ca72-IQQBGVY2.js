import {
  flowRendererV2,
  flowStyles
} from "./chunk-6AGC6CGU.js";
import "./chunk-IJA7AXB2.js";
import {
  flowDb,
  parser$1
} from "./chunk-GSF6BXBJ.js";
import "./chunk-KYXV2CXV.js";
import "./chunk-P3M7UO5P.js";
import "./chunk-JFJLWJX6.js";
import "./chunk-MFWFEY5O.js";
import "./chunk-XP7M6FJS.js";
import "./chunk-2AA25MXT.js";
import {
  setConfig
} from "./chunk-UDOVEL2J.js";
import "./chunk-UXIASGQL.js";

// node_modules/mermaid/dist/flowDiagram-v2-9362ca72.js
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-9362ca72-IQQBGVY2.js.map
