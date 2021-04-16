angular.module('appAngular')
    
    .controller('controller',function($scope, $location, $anchorScroll){

        $scope.nameSpace = 'Jonay Z.';
        $scope.firstNameSpace = 'Castro Suárez';
        $scope.emailSpace = 'zeven8540@gmail.com';
        $scope.workSpace = 'Programador Web';
        $scope.phoneSpace = '660520795';
        
        /* let pathEle = $location.path().replace('/','');
        let array = ['about','experience','study', 'portfolio'];
        let ele;
        if(pathEle === ''){
            ele = document.getElementById('about');
            ele.style.backgroundColor = 'var(--body-background-color)';
        }else{
            for(i in array){
                ele = document.getElementById(array[i]);
                ele.style.backgroundColor = 'var(--header-background-color)';
                if(pathEle === array[i]){
                    ele.style.backgroundColor = 'var(--body-background-color)';
                }
            }
        } */
        
        $scope.goPortfolio = ()=>{
            $location.path('/portfolio');
        };
        $scope.nav = (e)=>{
            path = e.target.id;
            if(path === 'about') $location.path('/about');
            else if(path === 'experience') $location.path('/experience');
            else if(path === 'study') $location.path('/study');
            else if(path === 'portfolio') $location.path('/portfolio');
            
        };
        $scope.changeInfo = (e)=>{
            
            if(e) {
                $scope.nameSpace = 'Tacoronte ';
                $scope.firstNameSpace = '- S/C de Tenerife';
                $scope.workSpace = 'España';
            }
            else{
                $scope.nameSpace = 'Jonay Z.';
                $scope.firstNameSpace = 'Castro Suárez';
                $scope.workSpace = 'Programador Web';
            }
            
        };

        $scope.goTo = (id)=>{
            if($location.hash() !== id){
                $location.hash(id);
            }else{
            $anchorScroll();
            }
        };
    });