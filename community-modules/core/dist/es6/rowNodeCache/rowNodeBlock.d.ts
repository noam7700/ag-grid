// Type definitions for @ag-grid-community/core v24.1.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { AgEvent } from "../events";
import { BeanStub } from "../context/beanStub";
export interface LoadCompleteEvent extends AgEvent {
    success: boolean;
    block: RowNodeBlock;
}
export interface LoadSuccessParams {
    data: any[];
    finalRowCount?: number;
    info?: any;
}
export declare abstract class RowNodeBlock extends BeanStub {
    static EVENT_LOAD_COMPLETE: string;
    static STATE_WAITING_TO_LOAD: string;
    static STATE_LOADING: string;
    static STATE_LOADED: string;
    static STATE_FAILED: string;
    private readonly id;
    private state;
    private version;
    abstract getBlockStateJson(): {
        id: string;
        state: any;
    };
    protected abstract loadFromDatasource(): void;
    protected abstract processServerResult(params: LoadSuccessParams): void;
    protected constructor(id: number);
    getId(): number;
    load(): void;
    getVersion(): number;
    setStateWaitingToLoad(): void;
    getState(): string;
    protected pageLoadFailed(): void;
    protected success(version: number, params: LoadSuccessParams): void;
    protected pageLoaded(version: number, rows: any[], lastRow: number): void;
    protected successCommon(version: number, params: LoadSuccessParams): void;
}