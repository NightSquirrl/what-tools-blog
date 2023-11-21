import {
  flowRendererV2,
  flowStyles
} from "./chunk-KL2B3TA4.js";
import "./chunk-2WJGH7VZ.js";
import {
  flowDb,
  parser$1
} from "./chunk-2OIZ3MNK.js";
import "./chunk-SZXPNSAS.js";
import "./chunk-54WCA4MJ.js";
import "./chunk-POD4F6LC.js";
import "./chunk-XG7XR5U4.js";
import "./chunk-XP7M6FJS.js";
import "./chunk-2AA25MXT.js";
import {
  setConfig
} from "./chunk-AWFYYM6L.js";
import "./chunk-5WWUZCGV.js";

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
//# sourceMappingURL=flowDiagram-v2-9362ca72-2ZBXYNF7.js.map
