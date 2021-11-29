import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api";
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin;
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions;
import DialogConstructorOptions = powerbiVisualsApi.extensibility.visual.DialogConstructorOptions;
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];
var reactCircleCard09C7E1520D9C4E9B8A382C50359704A4_DEBUG: IVisualPlugin = {
    name: 'reactCircleCard09C7E1520D9C4E9B8A382C50359704A4_DEBUG',
    displayName: 'ReactCircleCard',
    class: 'Visual',
    apiVersion: '3.8.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId: string, options: DialogConstructorOptions, initialState: object) => {
        const dialogRegistry = globalThis.dialogRegistry;
        if (dialogId in dialogRegistry) {
            new dialogRegistry[dialogId](options, initialState);
        }
    },
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["reactCircleCard09C7E1520D9C4E9B8A382C50359704A4_DEBUG"] = reactCircleCard09C7E1520D9C4E9B8A382C50359704A4_DEBUG;
}
export default reactCircleCard09C7E1520D9C4E9B8A382C50359704A4_DEBUG;