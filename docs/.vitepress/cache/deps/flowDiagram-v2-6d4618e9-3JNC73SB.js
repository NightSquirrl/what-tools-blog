import {
  flowRendererV2,
  flowStyles
} from "./chunk-RU3PLSIQ.js";
import "./chunk-RONSDA7U.js";
import {
  flowDb,
  parser$1
} from "./chunk-PWJBDL5H.js";
import "./chunk-U7X76WVX.js";
import "./chunk-2EWGCEYS.js";
import "./chunk-STLNV6MT.js";
import "./chunk-EO2PBJ4F.js";
import "./chunk-D5F7YJJH.js";
import "./chunk-DWGZQHTT.js";
import {
  setConfig
} from "./chunk-VU54JCGW.js";
import "./chunk-UXIASGQL.js";

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
//# sourceMappingURL=flowDiagram-v2-6d4618e9-3JNC73SB.js.map
