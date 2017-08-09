function init(){
	initCube3D();
	initCircle3D();
	
}
function initCube3D(){
	var width = document.getElementById("cube3d").clientWidth;
	var height = document.getElementById("circle3d").clientHeight;

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75,width/height,0.1,1000);
    camera.position.z = 100;
    
    var lights = [];
			lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
			lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
			lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

			lights[ 0 ].position.set( 0, 200, 0 );
			lights[ 1 ].position.set( 100, 200, 100 );
			lights[ 2 ].position.set( - 100, - 200, - 100 );

			scene.add( lights[ 0 ] );
			scene.add( lights[ 1 ] );
			scene.add( lights[ 2 ] );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width,height);
    document.getElementById("cube3d").appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(50,50,50);
    var material = new THREE.MeshBasicMaterial({color:0x00ff00});
    var cube = new THREE.Mesh(geometry,material);


    var mesh = new THREE.Object3D();
    mesh.add( new THREE.LineSegments(

				geometry,

				new THREE.LineBasicMaterial( {
					color: 0xffffff,
					transparent: true,
					opacity: 1
				} )

			) );
    mesh.add(cube);

    scene.add(mesh);

    var render = function(){
    	requestAnimationFrame(render);
    	mesh.rotation.x +=0.01;
    	mesh.rotation.y +=0.01;
    	
    	renderer.render(scene,camera);
    };
    render();

}

function initCircle3D(){
	var width = document.getElementById("circle3d").clientWidth;
	var height = document.getElementById("circle3d").clientHeight;

	var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(75,width/height,0.1,1000);    
    camera.position.z = 100;//设置相机的位置坐标
    var lights = [];
			lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
			lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
			lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

			lights[ 0 ].position.set( 0, 200, 0 );
			lights[ 1 ].position.set( 100, 200, 100 );
			lights[ 2 ].position.set( - 100, - 200, - 100 );

			scene.add( lights[ 0 ] );
			scene.add( lights[ 1 ] );
			scene.add( lights[ 2 ] );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width,height);
    renderer.setClearColor( 0xffffff, 1 );
    document.getElementById("circle3d").appendChild(renderer.domElement);

    var mesh = new THREE.Object3D();
    var geometry = new THREE.SphereGeometry();

    mesh.add( new THREE.LineSegments(
				geometry,
				new THREE.LineBasicMaterial( {
					color: 0xffffff,
					transparent: true,
					opacity: 0.5
				} )

			) );
     
    mesh.add(new THREE.Mesh(
    	             geometry,
    	             new THREE.MeshPhongMaterial({
    	            color:0x156289,
    	            emissive: 0x072534,
					side: THREE.DoubleSide,
					shading: THREE.FlatShading
				})
    	));

    scene.add(mesh);


    var render = function(){
    	requestAnimationFrame(render);
    	mesh.rotation.x +=0.005;
    	mesh.rotation.y +=0.005;
    	
    	renderer.render(scene,camera);
    };
    render();
  
}

