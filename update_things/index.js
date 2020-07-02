class World {
  constructor() {
    // Set the scene:
    this.scene = new THREE.Scene();

    // Set the camera:
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0,0,100);

    // Set the renderer:
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    // ---

    this.animate();
  }

  animate() {
    const world = this;
    requestAnimationFrame(()=>{
      world.animate();
    });
    
	  this.renderer.render(this.scene, this.camera);
  }
}