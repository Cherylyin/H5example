function init(){
	initCube3D();
	//initCircle3D();
	//initOrbit();
}
function initCube3D(){

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.getElementById("cube3d").appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1,1,1);
    var material = new THREE.MeshBasicMaterial({color:0x00ff00});
    var cube = new THREE.Mesh(geometry,material);
    scene.add(cube);

    camera.position.z = 5;

    var render = function(){
    	requestAnimationFrame(render);
    	cube.rotation.x +=0.01;
    	cube.rotation.y +=0.01;
    	
    	renderer.render(scene,camera);
    };
    render();

}

function initCircle3D(){
	var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
    camera.position.x = 0;//设置相机的位置坐标
    camera.position.y = 50;//设置相机的位置坐标
    camera.position.z = 100;//设置相机的位置坐标
    camera.up.x = 0;//设置相机的上为「x」轴方向
    camera.up.y = 1;//设置相机的上为「y」轴方向
    camera.up.z = 0;//设置相机的上为「z」轴方向
    camera.lookAt( {x:0, y:0, z:0 } );//设置视野的中心坐标

    var light = new THREE.DirectionalLight(0xff0000,1.0,0);
    light.position.set(200,200,200);
    scene.add(light);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(document.getElementById("cube3d").clientWidth,document.getElementById("cube3d").clientHeight);
    document.getElementById("cube3d").appendChild(renderer.domElement);

    var geometry = new THREE.SphereGeometry();
    var material = new THREE.MeshBasicMaterial({color:0xffff00});
    var circle = new THREE.Mesh(geometry,material);
    circle.position.set(0,0,0,);
    scene.add(circle);


    var render = function(){
    	requestAnimationFrame(render);
    	circle.rotation.x +=0.01;
    	circle.rotation.y +=0.01;
    	
    	renderer.render(scene,camera);
    };
    render();
  // renderer.clear();
//renderer.render(scene,camera);
}
function initOrbit(){


			//document.getElementById( 'newWindow' ).href += window.location.hash;

			 gui = new dat.GUI();
			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 500 );
			camera.position.z = 30;

			var renderer = new THREE.WebGLRenderer( { antialias: true } );
			renderer.setPixelRatio( window.devicePixelRatio );
			renderer.setSize( window.innerWidth, window.innerHeight );
			renderer.setClearColor( 0x000000, 1 );
			document.body.appendChild( renderer.domElement );

			var orbit = new THREE.OrbitControls( camera, renderer.domElement );
			orbit.enableZoom = false;

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

			var mesh = new THREE.Object3D();

			mesh.add( new THREE.LineSegments(

				new THREE.Geometry(),

				new THREE.LineBasicMaterial( {
					color: 0xffffff,
					transparent: true,
					opacity: 0.5
				} )

			) );

			mesh.add( new THREE.Mesh(

				new THREE.Geometry(),

				new THREE.MeshPhongMaterial( {
					color: 0x156289,
					emissive: 0x072534,
					side: THREE.DoubleSide,
					shading: THREE.FlatShading
				} )

			) );

			var options = chooseFromHash( mesh );

			scene.add( mesh );

			var prevFog = false;

			var render = function () {

				requestAnimationFrame( render );

				if ( ! options.fixed ) {

					mesh.rotation.x += 0.005;
					mesh.rotation.y += 0.005;

				}

				renderer.render( scene, camera );

			};

			window.addEventListener( 'resize', function () {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}, false );

			render();

		
}

