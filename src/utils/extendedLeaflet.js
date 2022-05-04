import L from "leaflet";

L.AwesomeMarkers = {};
L.AwesomeMarkers.Icon = L.Icon.extend({
  options: {
    iconSize: [35, 45],
    iconAnchor: [17, 42],
    popupAnchor: [1, -32],
    shadowAnchor: [10, 12],
    shadowSize: [36, 16],
    className: "awesome-marker",
    extraClasses: "",
    icon: "fa-solid fa-utensils",
    markerColor: "blue",
    iconColor: "#fff",
  },

  initialize: function (options) {
    options = L.Util.setOptions(this, options);
  },

  createIcon: function () {
    const div = document.createElement("div");
    const options = this.options;

    if (options.icon) {
      div.innerHTML = this._createInner();
    }

    this._setIconStyles(div, options.markerColor);
    return div;
  },

  _createInner: function () {
    const options = this.options;
    const colorStyle = `style="color: ${options.iconColor}"`;

    return `<i ${colorStyle} class="${options.icon} ${
      options.extraClasses ? options.extraClasses : ""
    }"></i>`;
  },

  _setIconStyles: function (img, name) {
    const options = this.options;
    const size = L.point(
      options[name === "shadow" ? "shadowSize" : "iconSize"]
    );
    let anchor;

    if (name === "shadow") {
      anchor = L.point(options.shadowAnchor || options.iconAnchor);
    } else {
      anchor = L.point(options.iconAnchor);
    }

    if (!anchor && size) {
      anchor = size.divideBy(2, true);
    }

    img.className = "awesome-marker-" + name + " " + options.className;

    if (anchor) {
      img.style.marginLeft = -anchor.x + "px";
      img.style.marginTop = -anchor.y + "px";
    }

    if (size) {
      img.style.width = size.x + "px";
      img.style.height = size.y + "px";
    }
  },

  createShadow: function () {
    var div = document.createElement("div");

    this._setIconStyles(div, "shadow");
    return div;
  },
});

export default L;
