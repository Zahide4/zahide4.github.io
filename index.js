var renderer, scene, camera, mesh;

function initaite() {
    var canvas = document.getElementById('canvas');
    var width = $('#canvas').width();
    var height = $('#canvas').height();
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xff0000);
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 150);
    var geometry = new THREE.SphereGeometry(80, 10, 10);
    var material = new THREE.MeshBasicMaterial({
        color: 0x9972df,
        wireframe: true,
    });


    
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);



    var light = new THREE.SpotLight(0xFF0000);
    light.position.set(50, 50, 150);
    scene.add(light);
    renderer.setClearColor(0x00000, 0);


}

var render = function () {
    requestAnimationFrame(render);

    mesh.rotation.x += 0.003;
    mesh.rotation.y += 0.003;
    mesh.rotation.z += 0.003;

    renderer.render(scene, camera);
};

document.body.onscroll = moveCamera;

function moveCamera(){

    mesh.rotation.x += 0.03;
    mesh.rotation.z += 0.03;
    mesh.rotation.y += 0.03;
    
    renderer.render(scene, camera);
    console.log(window.pageYOffset)
}

render();


