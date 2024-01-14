import {
  flowRendererV2,
  flowStyles
} from "./chunk-UTLBZKED.js";
import "./chunk-JW37DOMR.js";
import {
  flowDb,
  parser$1
} from "./chunk-5KC37GZT.js";
import "./chunk-WJT32HSG.js";
import "./chunk-VS637MSR.js";
import "./chunk-OJFRULIU.js";
import "./chunk-AOKNXSGT.js";
import "./chunk-D5F7YJJH.js";
import "./chunk-DWGZQHTT.js";
import {
  setConfig
} from "./chunk-MM6DDPZ5.js";
import "./chunk-LQ2VYIYD.js";

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
//# sourceMappingURL=flowDiagram-v2-6d4618e9-ZFJ672XI.js.map
