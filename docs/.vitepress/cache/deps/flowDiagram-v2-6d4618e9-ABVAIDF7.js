import {
  flowRendererV2,
  flowStyles
} from "./chunk-ZWGFOCFH.js";
import "./chunk-M2WI3YQO.js";
import {
  flowDb,
  parser$1
} from "./chunk-EMGJAIVE.js";
import "./chunk-2NZDXS7Z.js";
import "./chunk-JHG3VALA.js";
import "./chunk-4IQYOZNH.js";
import "./chunk-OGCOVLC3.js";
import "./chunk-D5F7YJJH.js";
import "./chunk-DWGZQHTT.js";
import {
  setConfig
} from "./chunk-ETJAHPIE.js";
import "./chunk-ZS7NZCD4.js";

// node_modules/.pnpm/mermaid@10.6.0/node_modules/mermaid/dist/flowDiagram-v2-6d4618e9.js
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
//# sourceMappingURL=flowDiagram-v2-6d4618e9-ABVAIDF7.js.map
