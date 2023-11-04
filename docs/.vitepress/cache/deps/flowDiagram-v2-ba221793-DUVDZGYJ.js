import {
  flowRendererV2,
  flowStyles
} from "./chunk-4A4LFOIX.js";
import "./chunk-R6FCG4Y6.js";
import {
  flowDb,
  parser$1
} from "./chunk-7KKDWBAE.js";
import "./chunk-IX6AWCV5.js";
import "./chunk-VF3OJZCB.js";
import "./chunk-5W3RIOK4.js";
import "./chunk-5UIOO2YF.js";
import "./chunk-LUFOLOUT.js";
import "./chunk-XP7M6FJS.js";
import "./chunk-UK7VC2L3.js";
import {
  setConfig
} from "./chunk-SO64QJN2.js";
import "./chunk-5WWUZCGV.js";

// node_modules/mermaid/dist/flowDiagram-v2-ba221793.js
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
//# sourceMappingURL=flowDiagram-v2-ba221793-DUVDZGYJ.js.map
