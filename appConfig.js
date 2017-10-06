var locationPath = location.pathname.replace(/\/[^\/]+$/, "/");

window.dojoConfig = {
  deps: ["app/main"],
  has: {
    "esri-featurelayer-webgl": 1
  },
  packages: [
    {
      name: "app",
      location: locationPath + "dist/app"
    }
  ]
};
