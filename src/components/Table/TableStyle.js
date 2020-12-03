import { css } from 'styled-components';

const TableStyle = css`
  /**
 ****************************
 * Generic Styles
 ****************************
*/
  ag-grid,
  ag-grid-angular,
  ag-grid-ng2,
  ag-grid-polymer,
  ag-grid-aurelia {
    display: block;
  }

  .ag-hidden {
    display: none !important;
  }

  .ag-invisible {
    visibility: hidden !important;
  }

  .ag-drag-handle {
    cursor: move;
    cursor: -webkit-grab;
    cursor: grab;
  }

  .ag-column-drop-wrapper {
    display: flex;
  }

  .ag-column-drop-horizontal-half-width {
    display: inline-block;
    width: 50% !important;
  }

  .ag-unselectable {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .ag-selectable {
    -moz-user-select: text;
    -webkit-user-select: text;
    -ms-user-select: text;
    user-select: text;
  }

  .ag-tab {
    position: relative;
  }

  .ag-tab-guard {
    position: absolute;
    width: 0;
    height: 0;
    display: block;
  }

  .ag-select-agg-func-popup {
    position: absolute;
  }

  .ag-input-wrapper,
  .ag-picker-field-wrapper {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    line-height: normal;
    position: relative;
  }

  .ag-shake-left-to-right {
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
    -webkit-animation-duration: 0.2s;
    animation-duration: 0.2s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: ag-shake-left-to-right;
    animation-name: ag-shake-left-to-right;
  }

  @-webkit-keyframes ag-shake-left-to-right {
    from {
      padding-left: 6px;
      padding-right: 2px;
    }
    to {
      padding-left: 2px;
      padding-right: 6px;
    }
  }

  @keyframes ag-shake-left-to-right {
    from {
      padding-left: 6px;
      padding-right: 2px;
    }
    to {
      padding-left: 2px;
      padding-right: 6px;
    }
  }

  .ag-root-wrapper {
    cursor: default;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .ag-root-wrapper.ag-layout-normal {
    height: 100%;
  }

  .ag-watermark {
    position: absolute;
    bottom: 10px;
    right: 25px;
    opacity: 0.5;
    transition: opacity 1s ease-out 3s;
  }
  .ag-watermark:before {
    content: '';
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDk0cHgiIGhlaWdodD0iMjM5cHgiIHZpZXdCb3g9IjAgMCA0OTQgMjM5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0Ny4xICg0NTQyMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+TG9nbzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0wLjYxMjg0OTkzMSwxMDggTDAuNjEyODQ5OTMxLDY3LjQ1OTYzNzQgTDAuNjEyODQ5OTMxLDY3LjQ1OTYzNzQgQzAuNjEyODQ5OTMxLDYyLjEwMDY1MzYgMy40NzE4MzM3OCw1Ny4xNDg3NDgzIDguMTEyODQ5OTMsNTQuNDY5MjU2NCBMOTguMzA2NDI1LDIuMzk1OTcxNTcgTDk4LjMwNjQyNSwyLjM5NTk3MTU3IEMxMDIuOTQ3NDQxLC0wLjI4MzUyMDM1OCAxMDguNjY1NDA5LC0wLjI4MzUyMDM1OCAxMTMuMzA2NDI1LDIuMzk1OTcxNTcgTDExMy4zMDY0MjUsMi4zOTU5NzE1NyBMMjAzLjUsNTQuNDY5MjU2NCBMMjAzLjUsNTQuNDY5MjU2NCBDMjA4LjE0MTAxNiw1Ny4xNDg3NDgzIDIxMSw2Mi4xMDA2NTM2IDIxMSw2Ny40NTk2Mzc0IEwyMTEsMTM4IEwxODEsMTM4IEwxODAuOTk3MDQxLDkzLjk5OTk5OTggTDE4MC45OTYwMzIsOTMuOTk5OTk5OSBDMTgwLjk5NTQ3NSw4NS43MTYxMjI2IDE3NC4yNzk5MDksNzkuMDAxMDA4NyAxNjUuOTk2MDMyLDc5LjAwMTAwODcgTDEyMiw3OC45OTk5OTk5IEMxMTMuNzE1NzI5LDc4Ljk5OTk5OTkgMTA3LDg1LjcxNTcyODYgMTA3LDkzLjk5OTk5OTkgTDEwNywxMzYuMDE1NjIzIEwxMDcsMTM2LjAxNTYyMyBDMTA3LDE0NC4yOTk4OTUgMTEzLjcxNTcyOSwxNTEuMDE1NjIzIDEyMiwxNTEuMDE1NjIzIEwxNjgsMTUxLjAxNTYyMyBMMTY4LDE2MyBDMTY4LDE2NC42NTY4NTQgMTY2LjY1Njg1NCwxNjYgMTY1LDE2NiBMMTIwLDE2NiBMMTIwLDE3OSBMMTY1Ljk5NjAzMiwxNzkgTDE2NS45OTYwMzIsMTc4Ljk5Nzg3NyBDMTc0LjI3OTQ3NCwxNzguOTk3ODc3IDE4MC45OTQ4NiwxNzIuMjgzNDQyIDE4MC45OTYwMzIsMTY0IEwxODEsMTUwLjk2MDU1NCBMMjExLDE1MC45NjA1NTQgTDIxMSwxNzEuNjA2MjA3IEwyMTEsMTcxLjYwNjIwNyBDMjExLDE3Ni45NjUxOTEgMjA4LjE0MTAxNiwxODEuOTE3MDk2IDIwMy41LDE4NC41OTY1ODggTDExMy4zMDY0MjUsMjM2LjY2OTg3MyBMMTEzLjMwNjQyNSwyMzYuNjY5ODczIEMxMDguNjY1NDA5LDIzOS4zNDkzNjUgMTAyLjk0NzQ0MSwyMzkuMzQ5MzY1IDk4LjMwNjQyNSwyMzYuNjY5ODczIEw4LjExMjg0OTkzLDE4NC41OTY1ODggTDguMTEyODQ5OTMsMTg0LjU5NjU4OCBDMy40NzE4MzM3OCwxODEuOTE3MDk2IDAuNjEyODQ5OTMxLDE3Ni45NjUxOTEgMC42MTI4NDk5MzEsMTcxLjYwNjIwNyBMMC42MTI4NDk5MzEsMTIxIEwyNywxMjEgTDI3LDEzNiBDMjcsMTQ0LjI4NDI3MSAzMy43MTU3Mjg3LDE1MSA0MiwxNTEgTDQyLDE1MSBMMTAwLDE1MSBMMTAwLDk0IEMxMDAsODUuNzE1NzI4OCA5My4yODQyNzEyLDc5IDg1LDc5IEwyNyw3OSBMMjcsOTIgTDg0LDkyIEM4NS42NTY4NTQyLDkyIDg3LDkzLjM0MzE0NTggODcsOTUgTDg3LDk1IEw4NywxMDggTDAuNjEyODQ5OTMxLDEwOCBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkxvZ28iPgogICAgICAgICAgICA8cGF0aCBkPSJNNDc3LDU1IEw0OTQsNTUgTDQ5NCwxNTEgTDQzNSwxNTEgQzQyNi43MTU3MjksMTUxIDQyMCwxNDQuMjg0MjcxIDQyMCwxMzYgTDQyMCw5NiBDNDIwLDg3LjcxNTcyODggNDI2LjcxNTcyOSw4MSA0MzUsODEgTDQzNSw4MSBMNDc3LDgxIEw0NzcsNTUgWiBNNDQwLDk4IEM0MzguMzQzMTQ2LDk4IDQzNyw5OS4zNDMxNDU4IDQzNywxMDEgTDQzNywxMzEgQzQzNywxMzIuNjU2ODU0IDQzOC4zNDMxNDYsMTM0IDQ0MCwxMzQgTDQ3NywxMzQgTDQ3Nyw5OCBMNDQwLDk4IFoiIGlkPSJkIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOTYuMDAwMDAwLCA1NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTYiIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMCAyNiAxNyAyNiAxNyA5NiAwIDk2Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aC03IiBmaWxsPSIjRTExRjIyIiBwb2ludHM9IjAgMS4xMzY4NjgzOGUtMTMgMTcgMS4xMzY4NjgzOGUtMTMgMTcgMTcgMCAxNyI+PC9wb2x5Z29uPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMzEsMTUxIEwzNDgsMTUxIEwzNDgsMTAxIEwzNDgsMTAxIEMzNDgsOTkuMzQzMTQ1OCAzNDkuMzQzMTQ2LDk4IDM1MSw5OCBMMzg5LDk4IEwzODksODEgTDM0Niw4MSBMMzQ2LDgxIEMzMzcuNzE1NzI5LDgxIDMzMSw4Ny43MTU3Mjg4IDMzMSw5NiBMMzMxLDE1MSBaIiBpZD0iciIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMzI0LDg2IEwzMjQsNzYgTDMyNCw3NiBDMzI0LDY3LjcxNTcyODggMzE3LjI4NDI3MSw2MSAzMDksNjEgTDI0OSw2MSBMMjQ5LDYxIEMyNDAuNzE1NzI5LDYxIDIzNCw2Ny43MTU3Mjg4IDIzNCw3NiBMMjM0LDEzNiBMMjM0LDEzNiBDMjM0LDE0NC4yODQyNzEgMjQwLjcxNTcyOSwxNTEgMjQ5LDE1MSBMMzA5LDE1MSBMMzA5LDE1MSBDMzE3LjI4NDI3MSwxNTEgMzI0LDE0NC4yODQyNzEgMzI0LDEzNiBMMzI0LDEwMCBMMjg3LDEwMCBMMjg3LDExNyBMMzA3LDExNyBMMzA3LDEzMSBMMzA3LDEzMSBDMzA3LDEzMi42NTY4NTQgMzA1LjY1Njg1NCwxMzQgMzA0LDEzNCBMMjU0LDEzNCBMMjU0LDEzNCBDMjUyLjM0MzE0NiwxMzQgMjUxLDEzMi42NTY4NTQgMjUxLDEzMSBMMjUxLDgxIEwyNTEsODEgQzI1MSw3OS4zNDMxNDU4IDI1Mi4zNDMxNDYsNzggMjU0LDc4IEwzMDQsNzggTDMwNCw3OCBDMzA1LjY1Njg1NCw3OCAzMDcsNzkuMzQzMTQ1OCAzMDcsODEgTDMwNyw4NiBMMzI0LDg2IFoiIGlkPSJHIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJhZyI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iQ29tYmluZWQtU2hhcGUiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjRTExRjIyIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJnIiBmaWxsPSIjRTExRjIyIiB4PSIxMjAiIHk9IjkyIiB3aWR0aD0iNDgiIGhlaWdodD0iNDYiIHJ4PSIzIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDAsMTIxIEw4NywxMjEgTDg3LDEzOCBMNDMsMTM4IEw0MywxMzggQzQxLjM0MzE0NTgsMTM4IDQwLDEzNi42NTY4NTQgNDAsMTM1IEw0MCwxMjEgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRTExRjIyIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);
    -webkit-filter: invert(50%);
    filter: invert(50%);
    background-repeat: no-repeat;
    background-size: 110px 60px;
    display: block;
    height: 60px;
    width: 110px;
  }

  .ag-watermark-text {
    opacity: 0.5;
    font-weight: bold;
    font-family: Impact, sans-serif;
    font-size: 19px;
  }

  .ag-root-wrapper-body {
    display: flex;
    flex-direction: row;
  }
  .ag-root-wrapper-body.ag-layout-normal {
    flex: 1 1 auto;
    height: 0;
    min-height: 0;
  }

  .ag-root {
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .ag-root.ag-layout-normal,
  .ag-root.ag-layout-auto-height {
    overflow: hidden;
    flex: 1 1 auto;
    width: 0;
  }
  .ag-root.ag-layout-normal {
    height: 100%;
  }

  /**
 ****************************
 * Viewports
 ****************************
*/
  .ag-header-viewport,
  .ag-floating-top-viewport,
  .ag-body-viewport,
  .ag-center-cols-viewport,
  .ag-floating-bottom-viewport,
  .ag-body-horizontal-scroll-viewport,
  .ag-virtual-list-viewport {
    position: relative;
    height: 100%;
    min-width: 0px;
    overflow: hidden;
    flex: 1 1 auto;
  }

  .ag-body-viewport.ag-layout-print {
    flex: none;
  }

  @media print {
    .ag-layout-normal {
      display: none;
    }
    .ag-root-wrapper,
    .ag-root-wrapper-body,
    .ag-root,
    .ag-body-viewport,
    .ag-center-cols-container,
    .ag-center-cols-viewport,
    .ag-center-cols-clipper,
    .ag-body-horizontal-scroll-viewport,
    .ag-virtual-list-viewport {
      height: auto !important;
      overflow: hidden !important;
      display: block !important;
    }
    .ag-row {
      page-break-inside: avoid;
    }
  }

  .ag-body-viewport {
    display: flex;
  }
  .ag-body-viewport.ag-layout-normal {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .ag-center-cols-viewport {
    width: 100%;
    overflow-x: auto;
  }

  .ag-body-horizontal-scroll-viewport {
    overflow-x: scroll;
  }

  .ag-virtual-list-viewport {
    overflow: auto;
    width: 100%;
  }

  /**
 ****************************
 * Containers
 ****************************
*/
  .ag-header-container,
  .ag-floating-top-container,
  .ag-body-container,
  .ag-pinned-right-cols-container,
  .ag-center-cols-container,
  .ag-pinned-left-cols-container,
  .ag-floating-bottom-container,
  .ag-body-horizontal-scroll-container,
  .ag-full-width-container,
  .ag-floating-bottom-full-width-container,
  .ag-virtual-list-container {
    position: relative;
  }

  .ag-header-container,
  .ag-floating-top-container,
  .ag-floating-bottom-container {
    height: 100%;
    white-space: nowrap;
  }

  .ag-center-cols-clipper {
    min-height: 100%;
  }

  .ag-center-cols-container {
    display: block;
  }

  .ag-layout-print .ag-center-cols-clipper {
    min-width: 100%;
  }

  .ag-layout-auto-height .ag-center-cols-clipper,
  .ag-layout-auto-height .ag-center-cols-container {
    min-height: 50px;
  }

  .ag-pinned-right-cols-container {
    display: block;
  }

  .ag-body-horizontal-scroll-container {
    height: 100%;
  }

  .ag-full-width-container,
  .ag-floating-top-full-width-container,
  .ag-floating-bottom-full-width-container {
    position: absolute;
    top: 0px;
    left: 0px;
    pointer-events: none;
  }

  .ag-full-width-container {
    width: 100%;
  }

  .ag-floating-bottom-full-width-container,
  .ag-floating-top-full-width-container {
    display: inline-block;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }

  .ag-virtual-list-container {
    overflow: hidden;
  }

  /**
 ****************************
 * Scrollers
 ****************************
*/
  .ag-center-cols-clipper {
    flex: 1;
    min-width: 0;
    overflow: hidden;
  }

  .ag-body-horizontal-scroll {
    min-height: 0;
    min-width: 0;
    width: 100%;
    display: flex;
    position: relative;
  }

  .ag-layout-print .ag-body-horizontal-scroll {
    display: none;
  }

  .ag-force-vertical-scroll {
    overflow-y: scroll !important;
  }
  .ag-force-vertical-scroll.ag-layout-print {
    overflow-y: visible !important;
  }

  .ag-horizontal-left-spacer,
  .ag-horizontal-right-spacer {
    height: 100%;
    min-width: 0;
    overflow-x: scroll;
  }
  .ag-horizontal-left-spacer.ag-scroller-corner,
  .ag-horizontal-right-spacer.ag-scroller-corner {
    overflow-x: hidden;
  }

  /**
 ****************************
 * Headers
 ****************************
*/
  .ag-header,
  .ag-pinned-left-header,
  .ag-pinned-right-header {
    display: inline-block;
    overflow: hidden;
    position: relative;
  }

  .ag-header-cell-sortable {
    cursor: pointer;
  }

  .ag-header {
    display: flex;
    width: 100%;
    white-space: nowrap;
  }

  .ag-pinned-left-header {
    height: 100%;
  }

  .ag-pinned-right-header {
    height: 100%;
  }

  .ag-header-row {
    position: absolute;
    overflow: hidden;
  }

  .ag-header-cell {
    display: inline-flex;
    align-items: center;
    position: absolute;
    height: 100%;
  }

  .ag-header-group-cell-label,
  .ag-header-cell-label {
    display: flex;
    flex: 1 1 auto;
    overflow: hidden;
    align-items: center;
    text-overflow: ellipsis;
    align-self: stretch;
  }

  .ag-header-cell-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ag-right-aligned-header .ag-header-cell-label {
    flex-direction: row-reverse;
  }

  .ag-header-group-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ag-header-cell-resize {
    position: absolute;
    z-index: 2;
    height: 100%;
    width: 8px;
    top: 0;
    cursor: ew-resize;
  }
  .ag-ltr .ag-header-cell-resize {
    right: -4px;
  }
  .ag-rtl .ag-header-cell-resize {
    left: -4px;
  }

  .ag-pinned-left-header .ag-header-cell-resize {
    right: -4px;
  }

  .ag-pinned-right-header .ag-header-cell-resize {
    left: -4px;
  }

  .ag-header-select-all {
    display: flex;
  }

  /**
 ****************************
 * Columns
 ****************************
*/
  .ag-column-moving .ag-cell {
    transition: left 0.2s;
  }

  .ag-column-moving .ag-header-cell {
    transition: left 0.2s;
  }

  .ag-column-moving .ag-header-group-cell {
    transition: left 0.2s, width 0.2s;
  }

  /**
 ****************************
 * Column Panel
 ****************************
*/
  .ag-column-panel {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    flex: 1 1 auto;
  }

  .ag-column-select {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    flex-grow: 3;
    flex-shrink: 1;
    flex-basis: 0;
  }

  .ag-column-select-header {
    position: relative;
    display: flex;
    flex: none;
  }

  .ag-column-select-header-icon {
    position: relative;
  }

  .ag-column-select-header-filter-wrapper {
    flex: 1 1 auto;
  }

  .ag-column-select-header-filter {
    width: 100%;
  }

  .ag-column-select-list {
    flex: 1 1 auto;
    overflow: auto;
  }

  .ag-column-drop {
    display: inline-flex;
    align-items: center;
    overflow: auto;
    width: 100%;
  }

  .ag-column-drop-list {
    display: flex;
    align-items: center;
  }

  .ag-column-drop-cell {
    display: flex;
    align-items: center;
  }

  .ag-column-drop-cell-text {
    overflow: hidden;
    flex: 1 1 auto;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ag-column-drop-vertical {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    flex: 1 1 0;
    align-items: stretch;
  }

  .ag-column-drop-vertical-title-bar {
    display: flex;
    align-items: center;
  }

  .ag-column-drop-vertical-list {
    align-items: stretch;
    flex-grow: 1;
    flex-direction: column;
    overflow-x: auto;
  }
  .ag-column-drop-vertical-list > * {
    flex: none;
  }

  .ag-column-drop-empty .ag-column-drop-vertical-list {
    overflow: hidden;
  }

  .ag-column-drop-vertical-empty-message {
    display: block;
  }

  .ag-column-drop.ag-column-drop-horizontal {
    white-space: nowrap;
    overflow: hidden;
  }

  .ag-column-drop-cell-button {
    cursor: pointer;
  }

  .ag-filter-toolpanel {
    flex: 1 1 0px;
    min-width: 0;
  }

  .ag-filter-toolpanel-header {
    position: relative;
  }

  .ag-filter-toolpanel-header,
  .ag-filter-toolpanel-search {
    display: flex;
    align-items: center;
  }
  .ag-filter-toolpanel-header > *,
  .ag-filter-toolpanel-search > * {
    display: flex;
    align-items: center;
  }

  .ag-filter-apply-panel {
    display: flex;
    justify-content: flex-end;
    overflow: hidden;
  }

  /**
 ****************************
 * Rows
 ****************************
*/
  .ag-row-animation .ag-row {
    transition: top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s, -webkit-transform 0.4s;
    transition: transform 0.4s, top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s;
    transition: transform 0.4s, top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s,
      -webkit-transform 0.4s;
  }

  .ag-row-no-animation .ag-row {
    transition: background-color 0.1s;
  }

  .ag-row {
    white-space: nowrap;
    width: 100%;
  }

  .ag-row-loading {
    display: flex;
    align-items: center;
  }

  .ag-row-position-absolute {
    position: absolute;
  }

  .ag-row-position-relative {
    position: relative;
  }

  .ag-full-width-row {
    overflow: hidden;
    pointer-events: all;
  }

  .ag-row-inline-editing {
    z-index: 1;
  }

  .ag-row-dragging {
    z-index: 2;
  }

  .ag-stub-cell {
    display: flex;
    align-items: center;
  }

  /**
 ****************************
 * Cells
 ****************************
*/
  .ag-cell {
    display: inline-block;
    position: absolute;
    white-space: nowrap;
  }

  .ag-cell-value,
  .ag-group-value {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ag-cell-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .ag-cell-wrapper.ag-row-group {
    align-items: flex-start;
  }

  .ag-full-width-row .ag-cell-wrapper.ag-row-group {
    align-items: center;
  }

  .ag-cell-auto-height {
    height: 100%;
  }

  .ag-cell-inline-editing {
    z-index: 1;
  }
  .ag-cell-inline-editing .ag-cell-edit-wrapper,
  .ag-cell-inline-editing .ag-cell-editor,
  .ag-cell-inline-editing .ag-cell-editor .ag-wrapper,
  .ag-cell-inline-editing .ag-cell-editor input {
    height: 100%;
    width: 100%;
    line-height: normal;
  }

  .ag-cell .ag-icon {
    display: inline-block;
    vertical-align: middle;
  }

  /**
 ****************************
 * Filters
 ****************************
*/
  .ag-set-filter-item {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .ag-set-filter-item-value {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ag-set-filter-item-checkbox {
    display: flex;
    pointer-events: none;
  }

  .ag-filter-body-wrapper {
    display: flex;
    flex-direction: column;
  }

  .ag-filter-filter {
    flex: 1 1 auto;
    overflow: hidden;
  }

  .ag-filter-condition {
    display: flex;
  }

  /**
 ****************************
 * Floating Filter
 ****************************
*/
  .ag-floating-filter-body {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    height: 100%;
  }

  .ag-floating-filter-full-body {
    display: flex;
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
    align-items: center;
    overflow: hidden;
  }

  .ag-floating-filter-full-body > div {
    flex: 1 1 auto;
  }

  .ag-floating-filter {
    display: inline-block;
    position: absolute;
  }

  .ag-floating-filter-input {
    align-items: center;
    display: flex;
    width: 100%;
  }
  .ag-floating-filter-input > * {
    flex: 1 1 auto;
  }

  .ag-floating-filter-button {
    display: flex;
    flex: none;
  }

  /**
 ****************************
 * Drag & Drop
 ****************************
*/
  .ag-dnd-ghost {
    position: absolute;
    display: inline-flex;
    align-items: center;
    cursor: move;
    white-space: nowrap;
  }

  /**
 ****************************
 * Overlay
 ****************************
*/
  .ag-overlay {
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .ag-overlay-panel {
    display: flex;
    height: 100%;
    width: 100%;
  }

  .ag-overlay-wrapper {
    display: flex;
    flex: none;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .ag-overlay-loading-wrapper {
    pointer-events: all;
  }

  /**
 ****************************
 * Popup
 ****************************
*/
  .ag-popup-child {
    z-index: 5;
  }

  .ag-popup-editor {
    position: absolute;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 1;
  }

  .ag-large-text-input {
    display: block;
  }

  /**
 ****************************
 * Virtual Lists
 ****************************
*/
  .ag-virtual-list-item {
    position: absolute;
    width: 100%;
  }

  /**
 ****************************
 * Floating Top and Bottom
 ****************************
*/
  .ag-floating-top {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    position: relative;
    display: flex;
  }

  .ag-pinned-left-floating-top {
    display: inline-block;
    overflow: hidden;
    position: relative;
    min-width: 0px;
  }

  .ag-pinned-right-floating-top {
    display: inline-block;
    overflow: hidden;
    position: relative;
    min-width: 0px;
  }

  .ag-floating-bottom {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    position: relative;
    display: flex;
  }

  .ag-pinned-left-floating-bottom {
    display: inline-block;
    overflow: hidden;
    position: relative;
    min-width: 0px;
  }

  .ag-pinned-right-floating-bottom {
    display: inline-block;
    overflow: hidden;
    position: relative;
    min-width: 0px;
  }

  /**
 ****************************
 * Dialog
 ****************************
*/
  .ag-dialog,
  .ag-panel {
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }

  .ag-panel-title-bar {
    display: flex;
    flex: none;
    align-items: center;
    cursor: default;
  }

  .ag-panel-title-bar-title {
    flex: 1 1 auto;
  }

  .ag-panel-title-bar-buttons {
    display: flex;
  }

  .ag-panel-title-bar-button {
    cursor: pointer;
  }

  .ag-panel-content-wrapper {
    display: flex;
    flex: 1 1 auto;
    position: relative;
    overflow: hidden;
  }

  .ag-dialog {
    position: absolute;
  }

  .ag-resizer {
    position: absolute;
    pointer-events: none;
    z-index: 1;
  }
  .ag-resizer.ag-resizer-topLeft {
    top: 0;
    left: 0;
    height: 5px;
    width: 5px;
    cursor: nwse-resize;
  }
  .ag-resizer.ag-resizer-top {
    top: 0;
    left: 5px;
    right: 5px;
    height: 5px;
    cursor: ns-resize;
  }
  .ag-resizer.ag-resizer-topRight {
    top: 0;
    right: 0;
    height: 5px;
    width: 5px;
    cursor: nesw-resize;
  }
  .ag-resizer.ag-resizer-right {
    top: 5px;
    right: 0;
    bottom: 5px;
    width: 5px;
    cursor: ew-resize;
  }
  .ag-resizer.ag-resizer-bottomRight {
    bottom: 0;
    right: 0;
    height: 5px;
    width: 5px;
    cursor: nwse-resize;
  }
  .ag-resizer.ag-resizer-bottom {
    bottom: 0;
    left: 5px;
    right: 5px;
    height: 5px;
    cursor: ns-resize;
  }
  .ag-resizer.ag-resizer-bottomLeft {
    bottom: 0;
    left: 0;
    height: 5px;
    width: 5px;
    cursor: nesw-resize;
  }
  .ag-resizer.ag-resizer-left {
    left: 0;
    top: 5px;
    bottom: 5px;
    width: 5px;
    cursor: ew-resize;
  }

  /**
 ****************************
 * Tooltip
 ****************************
*/
  .ag-tooltip {
    position: absolute;
    pointer-events: none;
    z-index: 99999;
  }

  /**
 ****************************
 * Animations
 ****************************
*/
  .ag-value-slide-out {
    margin-right: 5px;
    opacity: 1;
    transition: opacity 3s, margin-right 3s;
    transition-timing-function: linear;
  }

  .ag-value-slide-out-end {
    margin-right: 10px;
    opacity: 0;
  }

  .ag-opacity-zero {
    opacity: 0 !important;
  }

  /**
 ****************************
 * Menu
 ****************************
*/
  .ag-menu {
    max-height: 100%;
    overflow-y: auto;
    position: absolute;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .ag-menu-column-select-wrapper {
    height: 265px;
    overflow: auto;
  }

  .ag-menu-list {
    display: table;
  }

  .ag-menu-option,
  .ag-menu-separator {
    display: table-row;
  }

  .ag-menu-separator-cell,
  .ag-menu-option-part {
    display: table-cell;
    vertical-align: middle;
  }

  .ag-menu-option-text {
    white-space: nowrap;
  }

  .ag-menu-column-select-wrapper .ag-column-select {
    height: 100%;
  }

  /**
 ****************************
 * Rich Select
 ****************************
*/
  .ag-rich-select {
    cursor: default;
    outline: none;
  }

  .ag-rich-select-value {
    display: flex;
    align-items: center;
  }

  .ag-rich-select-value-icon {
    flex: 1 1 auto;
    order: 1;
  }
  .ag-ltr .ag-rich-select-value-icon {
    text-align: right;
  }
  .ag-rtl .ag-rich-select-value-icon {
    text-align: left;
  }

  .ag-rich-select-list {
    position: relative;
  }

  .ag-rich-select-virtual-list-item {
    display: flex;
  }

  .ag-rich-select-row {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    white-space: nowrap;
  }

  /**
 ****************************
 * Pagination
 ****************************
*/
  .ag-paging-panel {
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }

  .ag-paging-page-summary-panel {
    display: flex;
    align-items: center;
  }

  .ag-paging-button-wrapper {
    position: relative;
    overflow: hidden;
  }

  .ag-paging-button {
    position: absolute;
  }

  .ag-disabled .ag-paging-page-summary-panel {
    pointer-events: none;
  }

  /**
 ****************************
 * Tool Panel
 ****************************
*/
  .ag-tool-panel-wrapper {
    display: flex;
    overflow-y: auto;
    overflow-x: hidden;
    cursor: default;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 200px;
  }

  .ag-column-select-column,
  .ag-column-select-column-group {
    position: relative;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .ag-column-select-column > *,
  .ag-column-select-column-group > * {
    flex: none;
  }

  .ag-column-select-checkbox {
    display: flex;
  }

  .ag-tool-panel-horizontal-resize {
    cursor: ew-resize;
    height: 100%;
    position: absolute;
    top: 0;
    width: 5px;
    z-index: 1;
  }

  .ag-ltr .ag-side-bar-left .ag-tool-panel-horizontal-resize {
    right: -3px;
  }

  .ag-rtl .ag-side-bar-left .ag-tool-panel-horizontal-resize {
    left: -3px;
  }

  .ag-ltr .ag-side-bar-right .ag-tool-panel-horizontal-resize {
    left: -3px;
  }

  .ag-rtl .ag-side-bar-right .ag-tool-panel-horizontal-resize {
    right: -3px;
  }

  .ag-details-row {
    width: 100%;
  }

  .ag-details-row-fixed-height {
    height: 100%;
  }

  .ag-details-grid {
    width: 100%;
  }

  .ag-details-grid-fixed-height {
    height: 100%;
  }

  .ag-header-group-cell {
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
  }

  .ag-cell-label-container {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .ag-right-aligned-header .ag-cell-label-container {
    flex-direction: row;
  }

  /**
 ****************************
 * Side Bar
 ****************************
*/
  .ag-side-bar {
    display: flex;
    flex-direction: row-reverse;
  }

  .ag-side-bar-left {
    order: -1;
    flex-direction: row;
  }

  .ag-side-button-button {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    white-space: nowrap;
    outline: none;
    cursor: pointer;
  }

  .ag-side-button-label {
    -webkit-writing-mode: vertical-lr;
    -ms-writing-mode: tb-lr;
    writing-mode: vertical-lr;
  }

  /**
 ****************************
 * Status Bar
 ****************************
*/
  .ag-status-bar {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
  }

  .ag-status-panel {
    display: inline-flex;
  }

  .ag-status-name-value {
    white-space: nowrap;
  }

  .ag-status-bar-left {
    display: inline-flex;
  }

  .ag-status-bar-center {
    display: inline-flex;
  }

  .ag-status-bar-right {
    display: inline-flex;
  }

  /**
 ****************************
 * Widgets
 ****************************
*/
  .ag-icon {
    display: block;
    speak: none;
  }

  .ag-group {
    position: relative;
    width: 100%;
  }

  .ag-group-title-bar {
    display: flex;
    align-items: center;
  }

  .ag-group-title {
    display: block;
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .ag-group-title-bar .ag-group-title {
    cursor: default;
  }

  .ag-group-toolbar {
    display: flex;
    align-items: center;
  }

  .ag-group-container {
    display: flex;
  }

  .ag-disabled .ag-group-container {
    pointer-events: none;
  }

  .ag-group-container-horizontal {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .ag-group-container-vertical {
    flex-direction: column;
  }

  .ag-charts-font-size-color {
    display: flex;
    align-self: stretch;
    justify-content: space-between;
  }

  .ag-column-group-icons {
    display: block;
  }
  .ag-column-group-icons > * {
    cursor: pointer;
  }

  .ag-group-item-alignment-stretch .ag-group-item {
    align-items: stretch;
  }

  .ag-group-item-alignment-start .ag-group-item {
    align-items: flex-start;
  }

  .ag-group-item-alignment-end .ag-group-item {
    align-items: flex-end;
  }

  .ag-toggle-button-icon {
    transition: right 0.3s;
    position: absolute;
    top: -1px;
  }

  .ag-input-field,
  .ag-select {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .ag-input-field-input {
    flex: 1 1 auto;
    width: 100%;
    min-width: 0;
  }

  .ag-floating-filter-input .ag-input-field-input[type='date'] {
    width: 1px;
  }

  .ag-range-field {
    display: flex;
    align-items: center;
  }

  .ag-angle-select {
    display: flex;
    align-items: center;
  }

  .ag-angle-select-wrapper {
    display: flex;
  }

  .ag-angle-select-parent-circle {
    display: block;
    position: relative;
  }

  .ag-angle-select-child-circle {
    position: absolute;
  }

  .ag-slider-wrapper {
    display: flex;
  }

  .ag-slider-wrapper .ag-input-field {
    flex: 1 1 auto;
  }

  .ag-picker-field-display {
    flex: 1 1 auto;
  }

  .ag-picker-field {
    display: flex;
    align-items: center;
  }

  .ag-picker-field-icon {
    display: flex;
    border: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  .ag-picker-field-wrapper {
    overflow: hidden;
  }

  .ag-label-align-right .ag-label {
    order: 1;
  }

  .ag-label-align-right > * {
    flex: none;
  }

  .ag-label-align-top {
    flex-direction: column;
    align-items: flex-start;
  }
  .ag-label-align-top > * {
    align-self: stretch;
  }

  .ag-color-panel {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .ag-spectrum-color {
    flex: 1 1 auto;
    position: relative;
    overflow: hidden;
    cursor: default;
  }

  .ag-spectrum-fill {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .ag-spectrum-val {
    cursor: pointer;
  }

  .ag-spectrum-dragger {
    position: absolute;
    pointer-events: none;
    cursor: pointer;
  }

  .ag-spectrum-hue {
    cursor: default;
    background: linear-gradient(
      to left,
      #ff0000 3%,
      #ffff00 17%,
      #00ff00 33%,
      #00ffff 50%,
      #0000ff 67%,
      #ff00ff 83%,
      #ff0000 100%
    );
  }

  .ag-spectrum-alpha {
    cursor: default;
  }

  .ag-spectrum-hue-background {
    width: 100%;
    height: 100%;
  }

  .ag-spectrum-alpha-background {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), black);
    width: 100%;
    height: 100%;
  }

  .ag-spectrum-tool {
    cursor: pointer;
  }

  .ag-spectrum-slider {
    position: absolute;
    pointer-events: none;
  }

  .ag-recent-colors {
    display: flex;
  }

  .ag-recent-color {
    cursor: pointer;
  }

  .ag-ltr .ag-column-select-indent-1 {
    padding-left: 20px;
  }

  .ag-rtl .ag-column-select-indent-1 {
    padding-right: 20px;
  }

  .ag-ltr .ag-row-group-indent-1 {
    padding-left: 20px;
  }

  .ag-rtl .ag-row-group-indent-1 {
    padding-right: 20px;
  }

  .ag-ltr .ag-column-select-indent-2 {
    padding-left: 40px;
  }

  .ag-rtl .ag-column-select-indent-2 {
    padding-right: 40px;
  }

  .ag-ltr .ag-row-group-indent-2 {
    padding-left: 40px;
  }

  .ag-rtl .ag-row-group-indent-2 {
    padding-right: 40px;
  }

  .ag-ltr .ag-column-select-indent-3 {
    padding-left: 60px;
  }

  .ag-rtl .ag-column-select-indent-3 {
    padding-right: 60px;
  }

  .ag-ltr .ag-row-group-indent-3 {
    padding-left: 60px;
  }

  .ag-rtl .ag-row-group-indent-3 {
    padding-right: 60px;
  }

  .ag-ltr .ag-column-select-indent-4 {
    padding-left: 80px;
  }

  .ag-rtl .ag-column-select-indent-4 {
    padding-right: 80px;
  }

  .ag-ltr .ag-row-group-indent-4 {
    padding-left: 80px;
  }

  .ag-rtl .ag-row-group-indent-4 {
    padding-right: 80px;
  }

  .ag-ltr .ag-column-select-indent-5 {
    padding-left: 100px;
  }

  .ag-rtl .ag-column-select-indent-5 {
    padding-right: 100px;
  }

  .ag-ltr .ag-row-group-indent-5 {
    padding-left: 100px;
  }

  .ag-rtl .ag-row-group-indent-5 {
    padding-right: 100px;
  }

  .ag-ltr .ag-column-select-indent-6 {
    padding-left: 120px;
  }

  .ag-rtl .ag-column-select-indent-6 {
    padding-right: 120px;
  }

  .ag-ltr .ag-row-group-indent-6 {
    padding-left: 120px;
  }

  .ag-rtl .ag-row-group-indent-6 {
    padding-right: 120px;
  }

  .ag-ltr .ag-column-select-indent-7 {
    padding-left: 140px;
  }

  .ag-rtl .ag-column-select-indent-7 {
    padding-right: 140px;
  }

  .ag-ltr .ag-row-group-indent-7 {
    padding-left: 140px;
  }

  .ag-rtl .ag-row-group-indent-7 {
    padding-right: 140px;
  }

  .ag-ltr .ag-column-select-indent-8 {
    padding-left: 160px;
  }

  .ag-rtl .ag-column-select-indent-8 {
    padding-right: 160px;
  }

  .ag-ltr .ag-row-group-indent-8 {
    padding-left: 160px;
  }

  .ag-rtl .ag-row-group-indent-8 {
    padding-right: 160px;
  }

  .ag-ltr .ag-column-select-indent-9 {
    padding-left: 180px;
  }

  .ag-rtl .ag-column-select-indent-9 {
    padding-right: 180px;
  }

  .ag-ltr .ag-row-group-indent-9 {
    padding-left: 180px;
  }

  .ag-rtl .ag-row-group-indent-9 {
    padding-right: 180px;
  }

  .ag-ltr {
    direction: ltr;
  }
  .ag-ltr .ag-body,
  .ag-ltr .ag-floating-top,
  .ag-ltr .ag-floating-bottom,
  .ag-ltr .ag-header,
  .ag-ltr .ag-body-viewport,
  .ag-ltr .ag-body-horizontal-scroll {
    flex-direction: row;
  }

  .ag-rtl {
    direction: rtl;
  }
  .ag-rtl .ag-body,
  .ag-rtl .ag-floating-top,
  .ag-rtl .ag-floating-bottom,
  .ag-rtl .ag-header,
  .ag-rtl .ag-body-viewport,
  .ag-rtl .ag-body-horizontal-scroll {
    flex-direction: row-reverse;
  }
  .ag-rtl .ag-icon-contracted,
  .ag-rtl .ag-icon-tree-closed {
    display: block;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  .ag-body .ag-body-viewport {
    -webkit-overflow-scrolling: touch;
  }

  .ag-chart {
    position: relative;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .ag-chart-components-wrapper {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    overflow: hidden;
  }

  .ag-chart-title-edit {
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    text-align: center;
  }

  .ag-chart-title-edit.currently-editing {
    display: inline-block;
  }

  .ag-chart-canvas-wrapper {
    position: relative;
    flex: 1 1 auto;
    overflow: hidden;
  }

  .ag-charts-canvas {
    display: block;
  }

  .ag-chart-menu {
    position: absolute;
    top: 10px;
    width: 24px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .ag-ltr .ag-chart-menu {
    right: 20px;
  }
  .ag-rtl .ag-chart-menu {
    left: 20px;
  }

  .ag-chart-docked-container {
    position: relative;
    width: 0;
    min-width: 0;
    transition: min-width 0.4s;
  }

  .ag-chart-menu-hidden ~ .ag-chart-docked-container {
    max-width: 0;
    overflow: hidden;
  }

  .ag-chart-tabbed-menu {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .ag-chart-tabbed-menu-header {
    flex: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
  }

  .ag-chart-tabbed-menu-body {
    display: flex;
    flex: 1 1 auto;
    align-items: stretch;
    overflow: hidden;
  }

  .ag-chart-tab {
    width: 100%;
    overflow: hidden;
    overflow-y: auto;
  }

  .ag-chart-settings {
    overflow-x: hidden;
  }

  .ag-chart-settings-wrapper {
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
  }

  .ag-chart-settings-nav-bar {
    width: 100%;
    display: flex;
    height: 30px;
    align-items: center;
  }

  .ag-chart-settings-card-selector {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 1 1 auto;
    height: 100%;
    padding: 0 10px;
  }

  .ag-chart-settings-card-item {
    cursor: pointer;
    width: 10px;
    height: 10px;
    background-color: #000;
    position: relative;
  }
  .ag-chart-settings-card-item.ag-not-selected {
    opacity: 0.2;
  }
  .ag-chart-settings-card-item:before {
    content: ' ';
    display: block;
    position: absolute;
    background-color: transparent;
    left: 50%;
    top: 50%;
    margin-left: -10px;
    margin-top: -10px;
    width: 20px;
    height: 20px;
  }

  .ag-chart-settings-prev,
  .ag-chart-settings-next {
    position: relative;
    flex: none;
  }

  .ag-chart-settings-prev-button,
  .ag-chart-settings-next-button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
  }

  .ag-chart-settings-mini-charts-container {
    position: relative;
    flex: 1 1 auto;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .ag-chart-settings-mini-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    overflow: hidden;
  }
  .ag-chart-settings-mini-wrapper.ag-animating {
    transition: left 0.3s;
    transition-timing-function: ease-in-out;
  }

  .ag-chart-mini-thumbnail {
    cursor: pointer;
  }

  .ag-chart-mini-thumbnail-canvas {
    display: block;
  }

  .ag-chart-data-wrapper,
  .ag-chart-format-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .ag-chart-data-section,
  .ag-chart-format-section {
    display: flex;
    margin: 0;
  }

  .ag-charts-font-panel-controls {
    justify-content: space-between;
  }

  .ag-chart-empty-text {
    display: flex;
    top: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .ag-chart .ag-chart-menu {
    opacity: 0;
    pointer-events: none;
  }

  .ag-chart-menu-hidden:hover .ag-chart-menu {
    opacity: 1;
    pointer-events: all;
  }

  .ag-chart-settings-nav-bar {
    padding: 0 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .ag-date-time-list-page-title-bar {
    display: flex;
  }

  .ag-date-time-list-page-column-labels-row,
  .ag-date-time-list-page-entries-row {
    display: flex;
  }

  .ag-date-time-list-page-column-label,
  .ag-date-time-list-page-entry {
    flex-basis: 0;
    flex-grow: 1;
  }

  .ag-date-time-list-page-entry {
    cursor: pointer;
  }
`;

export default TableStyle;
