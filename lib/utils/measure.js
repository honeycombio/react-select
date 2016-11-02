'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = measure;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

/*
  _renderAndMount () {
    if (!this._div) {
      this._div = document.createElement('div')
      this._div.style.display = 'inline-block'
      this._div.style.position = 'absolute'
      this._div.style.visibility = 'hidden'
      this._div.style.zIndex = -1

      this._updateDivDimensions(this.props)

      this._containerNode = this._getContainerNode(this.props)
      this._containerNode.appendChild(this._div)
    }
  }


  _measureCell ({
    clientHeight = false,
    clientWidth = true,
    columnIndex,
    rowIndex
  }) {
    const { cellRenderer } = this.props

    const rendered = cellRenderer({
      columnIndex,
      rowIndex
    })

    // Handle edge case where this method is called before the CellMeasurer has completed its initial render (and mounted).
    this._renderAndMount()

    // @TODO Keep an eye on this for future React updates as the interface may change:
    // https://twitter.com/soprano/status/737316379712331776
    ReactDOM.unstable_renderSubtreeIntoContainer(this, rendered, this._div)

    const measurements = {
      height: clientHeight && this._div.clientHeight,
      width: clientWidth && this._div.clientWidth
    }

    ReactDOM.unmountComponentAtNode(this._div)

    return measurements
  }

  _unmountContainer () {
    if (this._div) {
      this._containerNode.removeChild(this._div)

      this._div = null
    }

    this._containerNode = null
  }

  _updateDivDimensions (props) {
    const { height, width } = props

    if (
      height &&
      height !== this._divHeight
    ) {
      this._divHeight = height
      this._div.style.height = `${height}px`
    }

    if (
      width &&
      width !== this._divWidth
    ) {
      this._divWidth = width
      this._div.style.width = `${width}px`
    }
  }
*/

var _div = undefined;

function measure(parentComponent, rendered) {
  if (!_div) {
    _div = document.createElement('div');
    _div.style.display = 'inline-block';
    _div.style.position = 'absolute';
    _div.style.visibility = 'hidden';
    _div.style.zIndex = -1;

    document.body.appendChild(_div);
  }

  _reactDom2['default'].unstable_renderSubtreeIntoContainer(parentComponent, rendered, _div);

  var measurement = {
    height: _div.clientHeight,
    width: _div.clientWidth
  };

  console.log(_div.innerHTML);

  _reactDom2['default'].unmountComponentAtNode(_div);
  return measurement;
}

;
module.exports = exports['default'];