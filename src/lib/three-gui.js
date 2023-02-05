import * as dat from "dat.gui";

class CreateGUI {
  gui = new dat.GUI();

  constructor(material) {
    this.gui.add(material, "size").min(0.001).max(0.1).step(0.001).name("size");
    this.gui.add(material, "opacity").min(0).max(1).step(0.001).name("opacity");
  }
}

export { CreateGUI };
