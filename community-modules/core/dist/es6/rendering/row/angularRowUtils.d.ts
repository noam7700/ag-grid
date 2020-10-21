// Type definitions for @ag-grid-community/core v24.1.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { RowNode } from "../../entities/rowNode";
import { GridOptionsWrapper } from "../../gridOptionsWrapper";
export declare class AngularRowUtils {
    static createChildScopeOrNull(rowNode: RowNode, parentScope: any, gridOptionsWrapper: GridOptionsWrapper): {
        scope: any;
        scopeDestroyFunc: () => void;
    } | null;
}