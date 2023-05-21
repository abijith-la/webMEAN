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
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    // Draw the teddy bear body
    ctx.beginPath();
    ctx.arc(200, 200, 100, 0, 2 * Math.PI);
    ctx.fillStyle = 'brown';
    ctx.fill();
    ctx.closePath();

    // Draw the teddy bear head
    ctx.beginPath();
    ctx.arc(200, 120, 60, 0, 2 * Math.PI);
    ctx.fillStyle = 'brown';
    ctx.fill();
    ctx.closePath();

    // Draw the teddy bear ears
    ctx.beginPath();
    ctx.moveTo(140, 100);
    ctx.lineTo(160, 70);
    ctx.lineTo(200, 120);
    ctx.lineTo(240, 70);
    ctx.lineTo(260, 100);
    ctx.fillStyle = 'brown';
    ctx.fill();
    ctx.closePath();

    // Draw the teddy bear eyes
    ctx.beginPath();
    ctx.arc(180, 100, 10, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(220, 100, 10, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();

    // Draw the teddy bear nose
    ctx.beginPath();
    ctx.moveTo(200, 115);
    ctx.lineTo(195, 125);
    ctx.lineTo(205, 125);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();

    // Draw the teddy bear mouth
    ctx.beginPath();
    ctx.arc(200, 135, 30, 0, Math.PI);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();

})

