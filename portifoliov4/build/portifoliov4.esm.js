import { B as BUILD, c as consoleDevInfo, H, w as win, N as NAMESPACE, p as promiseResolve, b as bootstrapLazy } from './index-B0epqJa_.js';
export { s as setNonce } from './index-B0epqJa_.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.30.0 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  if (BUILD.isDev && !BUILD.isTesting) {
    consoleDevInfo("Running in development mode.");
  }
  if (BUILD.cloneNodeFix) {
    patchCloneNodeFix(H.prototype);
  }
  const scriptElm = BUILD.scriptDataOpts ? win.document && Array.from(win.document.querySelectorAll("script")).find(
    (s) => new RegExp(`/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute("data-stencil-namespace") === NAMESPACE
  ) : null;
  const importMeta = import.meta.url;
  const opts = BUILD.scriptDataOpts ? (scriptElm || {})["data-opts"] || {} : {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};
var patchCloneNodeFix = (HTMLElementPrototype) => {
  const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
  HTMLElementPrototype.cloneNode = function(deep) {
    if (this.nodeName === "TEMPLATE") {
      return nativeCloneNodeFn.call(this, deep);
    }
    const clonedNode = nativeCloneNodeFn.call(this, false);
    const srcChildNodes = this.childNodes;
    if (deep) {
      for (let i = 0; i < srcChildNodes.length; i++) {
        if (srcChildNodes[i].nodeType !== 2) {
          clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["my-projects-component",[[1,"my-projects-component",{"responsible":[4],"windowSize":[32]},[[9,"resize","getWindowDimensions"]]]]],["my-about-component",[[1,"my-about-component",{"responsible":[4],"windowSize":[32]},[[9,"resize","getWindowDimensions"]]]]],["my-canvas-particle-component",[[1,"my-canvas-particle-component",{"responsible":[4],"statusAnimation":[32]},[[9,"scroll","getScroolPosition"]]]]],["my-cardskill-component",[[1,"my-cardskill-component",{"responsible":[4],"incrementRadius":[32],"mousePos":[32],"windowSize":[32]},[[9,"resize","getWindowDimensions"]]]]],["my-experience-component",[[1,"my-experience-component",{"responsible":[4],"windowSize":[32]},[[9,"resize","getWindowDimensions"]]]]],["my-footer-component",[[1,"my-footer-component",{"responsible":[4],"windowSize":[32]},[[9,"resize","getWindowDimensions"]]]]],["my-projectscard-component",[[0,"my-projectscard-component",{"projectObj":[16,"project-obj"],"showCard":[32],"imageSliderCounter":[32]},null,{"showCard":["handleShowCardChange"]}]]],["my-homepage",[[1,"my-homepage",{"windowSize":[32]},[[9,"resize","getWindowDimensions"]]]]]], options);
});
//# sourceMappingURL=portifoliov4.esm.js.map

//# sourceMappingURL=portifoliov4.esm.js.map