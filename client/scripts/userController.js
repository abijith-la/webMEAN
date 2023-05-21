app.controller('userController', function ($scope, $http) {
    $scope.title = 'User Registration'
    $scope.username = 'madesh'
    $scope.password = 'pass'
    $scope.register = function () {
        console.log('register')
        var userData = {
            username: $scope.username,
            password: $scope.password
        }
        $http.post('/api/addUser', JSON.stringify(userData))
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })

    }
    $scope.users = []
    $scope.show = function () {
        $http.get('api/getUsers')
            .then((res) => {
                $scope.users = res.data
            })
            .catch((err) => {
                console.log(err)
            })
    }
    $scope.status = "Not Logged In"
    $scope.login = function () {
        console.log('login')
        var userData = {
            username: $scope.username,
            password: $scope.password
        }
        $http.post('/api/login', JSON.stringify(userData))
            .then((res) => {
                if (res.data) {
                    $scope.status = "Logged In"
                }
                else {
                    $scope.status = "Not Logged In"
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    var canvas = document.getElementById('myCanvas')
    var ctx = canvas.getContext('2d')

    // for (var i = 0; i < 400; i = i + 25) {
    //     ctx.beginPath()
    //     ctx.moveTo(0, i)
    //     ctx.lineTo(400, i)
    //     ctx.stroke()
    //     ctx.closePath()
    // }
    // for (var i = 0; i < 400; i = i + 25) {
    //     ctx.beginPath()
    //     ctx.moveTo(i, 0)
    //     ctx.lineTo(i, 400)
    //     ctx.stroke()
    //     ctx.closePath()
    // }

    // ctx.beginPath()
    // ctx.arc(200, 200, 100, 0, 7)
    // ctx.stroke()
    // ctx.closePath()

    // ctx.beginPath()
    // ctx.arc(200, 70, 50, 2.3, 7.1)
    // ctx.stroke()
    // ctx.closePath()

    // ctx.beginPath()
    // ctx.arc(250, 30, 20, 3.2, 8)
    // ctx.stroke()
    // ctx.closePath()

    // ctx.beginPath()
    // ctx.arc(150, 30, 20, 1.3, 6.3)
    // ctx.stroke()
    // ctx.closePath()
   
    var isDrawing = false;
    function startDrawing(e) {
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }
    function draw(e) {
        if (isDrawing) {
            ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
            ctx.stroke();
        }
    }
    function stopDrawing() {
        isDrawing = false;
        ctx.closePath();
    }
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);


})

