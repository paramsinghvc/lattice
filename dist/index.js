function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = _interopDefault(require('styled-components'));
var styledSystem = require('styled-system');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: grid;\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var BREAKPOINTS = {
  xs: 0,
  sm: '480px',
  md: '768px',
  lg: '1024px'
};
var GridBase = styled.section(_templateObject(), styledSystem.space, styledSystem.typography, styledSystem.color, styledSystem.position, styledSystem.layout);
var CellBase = styled.div(_templateObject2(), styledSystem.space, styledSystem.typography, styledSystem.color, styledSystem.position, styledSystem.layout, styledSystem.flexbox);
var Box = styled.div(_templateObject3(), styledSystem.space, styledSystem.typography, styledSystem.color, styledSystem.position, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.shadow);

var flowResolver = function flowResolver(flow) {
  if (flow === void 0) {
    flow = 'row';
  }

  return flow;
};

var rowsColumnsResolver = function rowsColumnsResolver(cols) {
  if (cols === void 0) {
    cols = 12;
  }

  return typeof cols === 'number' ? "repeat(" + cols + ", 1fr)" : cols;
};

function createStyledProp(propName, cssPropName, transform) {
  var _ref;

  return _ref = {}, _ref[propName] = {
    property: cssPropName,
    transform: transform
  }, _ref;
}

function createStyledProps(config) {
  var systemConfig = Object.entries(config).reduce(function (acc, _ref2) {
    var cssPropName = _ref2[0],
        prop = _ref2[1];
    return _extends({}, acc, createStyledProp.apply(void 0, spreadProps(cssPropName, prop)));
  }, {});
  return styledSystem.system(systemConfig);

  function spreadProps(cssPropName, prop) {
    return typeof prop === 'string' ? [prop, cssPropName] : [prop.propName, cssPropName, prop.transform];
  }
}

var formatAreas = function formatAreas(areas) {
  return areas.map(function (area) {
    return "\"" + area + "\"";
  }).join(' ');
};

var Grid = styled(GridBase)(_templateObject4(), createStyledProps({
  gap: 'gap',
  'grid-row-gap': 'rowGap',
  'grid-column-gap': 'columnGap',
  'align-items': 'alignItems',
  'align-content': 'alignContent',
  'justify-items': 'justifyItems',
  'justify-content': 'justifyContent',
  'grid-template-areas': {
    propName: 'areas',
    transform: function transform(areas) {
      return formatAreas(areas);
    }
  },
  'grid-auto-flow': {
    propName: 'flow',
    transform: flowResolver
  },
  'grid-template-columns': {
    propName: 'cols',
    transform: rowsColumnsResolver
  },
  'grid-template-rows': {
    propName: 'rows',
    transform: rowsColumnsResolver
  }
}));
var Cell = styled(CellBase)(_templateObject5(), createStyledProps({
  'grid-area': 'area',
  'grid-column-start': 'x-offset',
  'grid-row-start': 'y-offset',
  'grid-column-end': {
    propName: 'x-span',
    transform: function transform(span) {
      return "span " + span;
    }
  },
  'grid-row-end': {
    propName: 'y-span',
    transform: function transform(span) {
      return "span " + span;
    }
  }
}));

exports.BREAKPOINTS = BREAKPOINTS;
exports.Box = Box;
exports.Cell = Cell;
exports.CellBase = CellBase;
exports.Grid = Grid;
exports.GridBase = GridBase;
//# sourceMappingURL=index.js.map
