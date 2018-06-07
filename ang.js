
var app = angular.module("myapp", []);
    app.controller("photos", function ($scope) {
        $scope.images = [
            {
                source : './pics/1.jpg',
                desc : 'image1',
                thumb : './pics/1_tn.jpg'
            }, {
                source: './pics/2.jpg',
                desc: 'image2',
                thumb: './pics/2_tn.jpg'
            }, {
                source: './pics/3.jpg',
                desc: 'image3',
                thumb: './pics/3_tn.jpg'
            }, {
                source: './pics/4.jpg',
                desc: 'image4',
                thumb: './pics/4_tn.jpg'
            }, {
                source: './pics/5.jpg',
                desc: 'image5',
                thumb: './pics/5_tn.jpg'
            }, {
                source: './pics/6.jpg',
                desc: 'image6',
                thumb: './pics/6_tn.jpg'
            }, {
                source: './pics/7.jpg',
                desc: 'image7',
                thumb: './pics/7_tn.jpg'
            }, {
                source: './pics/8.jpg',
                desc: 'image8',
                thumb: './pics/8_tn.jpg'
            }, {
                source: './pics/9.jpg',
                desc: 'image9',
                thumb: './pics/9_tn.jpg'
            }, {
                source: './pics/10.jpg',
                desc: 'image10',
                thumb: './pics/10_tn.jpg'
            }, {
                source: './pics/11.jpg',
                desc: 'image11',
                thumb: './pics/11_tn.jpg'
            }, {
                source: './pics/12.jpg',
                desc: 'image12',
                thumb: './pics/12_tn.jpg'
            }, {
                source: './pics/13.jpg',
                desc: 'image13',
                thumb: './pics/13_tn.jpg'
            }, {
                source: './pics/14.jpg',
                desc: 'image14',
                thumb: './pics/14_tn.jpg'
            }, {
                source: './pics/15.jpg',
                desc: 'image15',
                thumb: './pics/15_tn.jpg'
            }, {
                source: './pics/16.jpg',
                desc: 'image16',
                thumb: './pics/16_tn.jpg'
            }, {
                source: './pics/17.jpg',
                desc: 'image17',
                thumb: './pics/17_tn.jpg'
            }, {
                source: './pics/18.jpg',
                desc: 'image18',
                thumb: './pics/18_tn.jpg',
            },

            ];
        $scope.currentimage = $scope.images[0];

        $scope.setimage = function (image) {
            $scope.currentimage = image;

        };    
    });
     
    
    
  


    