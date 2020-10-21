/**
 * @ag-grid-community/core - Advanced Data Grid / Data Table supporting Javascript / React / AngularJS / Web Components
 * @version v24.1.1
 * @link http://www.ag-grid.com/
 * @license MIT
 */
export function keys(map) {
    var arr = [];
    map.forEach(function (_, key) { return arr.push(key); });
    return arr;
}