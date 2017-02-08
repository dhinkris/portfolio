/*jslint browser:true, plusplus: true */
/*global $, jQuery, main, console*/
//namespace for home screen
var app = angular.module('moneyabcs', []);
var searchTopics = [ {"search_topics_1":"Finance%20Planning"}, {"search_topics_2":"Career%20Planning"}, {"search_topics_3":"Financial%20Planners"}, {"search_topics_4":"Financial%20Goals"}, {"search_topics_5":"Time%20Value%20of%20Money"}, {"search_topics_6":"Money%20Management"}, {"search_topics_7":"Financial%20Record%20System"}, {"search_topics_8":"Personal%20Financial%20Statements"}, {"search_topics_9":"Budgeting"}, {"search_topics_10":"Savings"}, {"search_topics_11":"Payment%20Methods"}, {"search_topics_12":"Bank%20Currency"}, {"search_topics_13":"Insurance%20Companies"}, {"search_topics_14":"Private%20Insurance%20Companies"}, {"search_topics_15":"Financial%20Advisors"},{"search_topics_16":"Career%20Choice"}, {"search_topics_17":"Employment%20Search"}, {"search_topics_18":"Employee%20Benefits"}, {"search_topics_19":"Career%20Development"}, {"search_topics_20":"Taxes"}, {"search_topics_21":"Tax%20Refunds"}, {"search_topics_22":"Tax%20Advance%20Loans"}, {"search_topics_23":"Federal%20Income%20Taxes"}, {"search_topics_24":"Tax%20Deductions"}, {"search_topics_25":"Tax%20Credits"}, {"search_topics_26":"Tax%20Planning"}, {"search_topics_27":"Tax%20Preparers"}, {"search_topics_28":"Tax%20Advisors"}, {"search_topics_29":"Major%20Purchases"}, {"search_topics_30":"Bankers"}, {"search_topics_31":"Consumer%20Credit"}, {"search_topics_32":"Types%20of%20Credit"}, {"search_topics_33":"Revolving%20Loans"}, {"search_topics_34":"Open%20Ended%20Loans"}, {"search_topics_35":"Close%20Ended%20Loans"}, {"search_topics_36":"Revolving%20Loans"}, {"search_topics_37":"Credit%20Capacity"}, {"search_topics_38":"Debt%20History"}, {"search_topics_39":"Applying%20for%20Credit"}, {"search_topics_40":"Interest%20Rates"}, {"search_topics_41":"Credit%20History"}, {"search_topics_42":"Credit%20Scores"}, {"search_topics_43":"Credit%20Counseling"}, {"search_topics_44":"Consumer%20Rights"}, {"search_topics_45":"Predatory%20Lending%20Practices%20"}, {"search_topics_46":"Bank%20Corruption"}, {"search_topics_47":"Title%20Loans"}, {"search_topics_48":"Debt%20Collection"}, {"search_topics_49":"Bankruptcy"}, {"search_topics_50":"Chapter%2011%20Bankruptcy"}, {"search_topics_51":"Pawn%20Shops"}, {"search_topics_52":"Tax%20Advance%20Loans"}, {"search_topics_53":"Payday%20Loans"}, {"search_topics_54":"Rent%20to%20Own"}, {"search_topics_55":"Tax%20Refund%20Anticipation%20Loans"}, {"search_topics_56":"Real%20Estate%20Brokers"}, {"search_topics_57":"Housing"}, {"search_topics_58":"Home%20Buying"}, {"search_topics_59":"Property%20Providers"}, {"search_topics_60":"Brokers%20Price%20Opinio%20BPO"}, {"search_topics_61":"Mortgages"}, {"search_topics_62":"Renting"}, {"search_topics_63":"Homeowners%20Insurance"}, {"search_topics_64":"Property%20Insurance"}, {"search_topics_65":"Mortgage%20Insurance"}, {"search_topics_66":"Renters%20Insurance"}, {"search_topics_67":"Car%20Shopping"}, {"search_topics_68":"Auto%20Loans"}, {"search_topics_69":"Home%20Selling"}, {"search_topics_70":"Liability%20Insurance"}, {"search_topics_71":"Auto%20Insurance"}, {"search_topics_72":"Health%20Plans"}, {"search_topics_73":"Home%20Health%20Care"}, {"search_topics_74":"Health%20Maintenance%20Organizations%20HMOs"}, {"search_topics_75":"Preferred%20Provider%20Organization%20PPOs"}, {"search_topics_76":"Medical%20Service%20Plans"}, {"search_topics_77":"Health%20Insurance"}, {"search_topics_78":"Medical%20Insurance"}, {"search_topics_79":"Medicare"}, {"search_topics_80":"Medicaid"}, {"search_topics_81":"Bodily%20Injury%20Insurance"}, {"search_topics_82":"Short%20Term%20Disability%20Insurance%20"}, {"search_topics_83":"Long%20Term%20Disability%20Insurance%20"}, {"search_topics_84":"Whole%20Life%20Insurance"}, {"search_topics_85":"Turned%20Life%20Insurance"}, {"search_topics_86":"Short%20Term%20Insurance"}, {"search_topics_87":"Term%20Life%20Insurance"}, {"search_topics_88":"Annuities"}, {"search_topics_89":"Insurance%20Beneficiaries%20"}, {"search_topics_90":"Child%20Custody"}, {"search_topics_91":"Custody"}, {"search_topics_92":"Investments"}, {"search_topics_93":"Investment%20Goals"}, {"search_topics_94":"Investment%20Strategies"}, {"search_topics_95":"Investment%20Income"}, {"search_topics_96":"Investment%20Growth"}, {"search_topics_97":"Investment%20Equity"}, {"search_topics_98":"Investment%20Risks"}, {"search_topics_99":"Investment%20Alternatives"}, {"search_topics_100":"Asset%20Allocation"}, {"search_topics_101":"Diversification"}, {"search_topics_102":"Modern%20Markets"}, {"search_topics_103":"Capital%20Markets"}, {"search_topics_104":"Stocks"}, {"search_topics_105":"Mutual%20Funds"}, {"search_topics_106":"Real%20Estate"}, {"search_topics_107":"Real%20Estate%20Investment%20Trusts%20REITs"}, {"search_topics_108":"Common%20Stock"}, {"search_topics_109":"Preferred%20Stock"}, {"search_topics_110":"Corporate%20Bonds"}, {"search_topics_111":"Government%20Bonds"}, {"search_topics_112":"Municipal%20Bonds"}, {"search_topics_113":"Convertible%20Bonds"}, {"search_topics_114":"Exchange%20Traded%20Funds"}, {"search_topics_115":"Index%20Funds"}, {"search_topics_116":"Precious%20Metals"}, {"search_topics_117":"Collectibles"}, {"search_topics_118":"Gold"}, {"search_topics_119":"Stock%20Brokers"}, {"search_topics_120":"Investment%20Bankers"}, {"search_topics_121":"Financial%20Analysts"}, {"search_topics_122":"Retirement"}, {"search_topics_123":"Retirement%20Planning"}, {"search_topics_124":"Retirement%20Housing"}, {"search_topics_125":"Retirement%20Income"}, {"search_topics_126":"Retirement%20Living%20Expenses"}, {"search_topics_127":"Social%20Security"}, {"search_topics_128":"Pensions"}, {"search_topics_129":"Public%20Pensions"}, {"search_topics_130":"Employer%20Pensions"}, {"search_topics_131":"Personal%20Retirement%20Plans"}, {"search_topics_132":"Individual%20Retirement%20Accounts"}, {"search_topics_133":"Roth%20Individual%20Retirement%20Accounts"}, {"search_topics_134":"401%20A"}, {"search_topics_135":"401%20B"}, {"search_topics_136":"401%20K"}, {"search_topics_137":"403%20B"}, {"search_topics_138":"457"}, {"search_topics_139":"Thrift%20Savings%20Plan%20TSP"}, {"search_topics_140":"Retirement%20Employment"}, {"search_topics_141":"Wills"}, {"search_topics_142":"Power%20of%20Attorney"}, {"search_topics_143":"Letter%20of%20Lest%20Instruction"}, {"search_topics_144":"Trusts"}, {"search_topics_145":"Trustees"}, {"search_topics_146":"Estate"}, {"search_topics_147":"Probate"}, {"search_topics_148":"Lawyers"},{"search_topics_149":"debit%20collection"},{"search_topics_150" : "home%20owners%20insurance"}];
app.directive('imageonload', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
        element.bind('error', function(){
			var index;
			for(var loopVar = 0;loopVar < 150;loopVar++){
				index = loopVar + 1;
				if(searchTopics[loopVar]["search_topics_" + index] == angular.element(this).attr("topic").replace(/ /g,"%20")){
					angular.element(this).attr("src", "./images/defaultImg/search_" + index + "/" + Math.ceil(Math.random()*5) + ".png");
				}
			}
			angular.element(this).attr("set","yes");
		});
		element.on('load', function (event) {
			
			if(angular.element(this)[0].width <= 80 && angular.element(this).attr("set") == "no"){
				console.log(angular.element(this)[0].width)
				var index;
				for(var loopVar = 0;loopVar < 150;loopVar++){
					index = loopVar + 1;
					if(searchTopics[loopVar]["search_topics_" + index] == angular.element(this).attr("topic").replace(/ /g,"%20")){
						angular.element(this).attr("src", "./images/defaultImg/search_" + index + "/" + Math.ceil(Math.random()*5) + ".png");
					}
				}
				angular.element(this).attr("set","yes");
			}
        });
    }
  };
});


app.controller("moneycontroller",function($scope,$http,$sce,$window){
	$scope.emailArticleToFriend = function(event){
		var str = event.target.id.split("_")[1];
		if(str <= 2){
			$scope.emailArticle = $scope.articleFeatured[str-1];
		} else {
			console.log($scope.article[str-3])
			$scope.emailArticle = $scope.article[str-3];
		}
		console.log($scope.emailArticle)
		/*$http.post('/send',{articleTitle : profile.iframeLink}).success(function(res){
        	console.log("email sent")
			
    	});*/
	}
    
	$scope.sendMail = function(){
		if($scope.senderEmail == ""){
			//error handling block (print err msg in #mailer)
		} else {
			console.log($scope.recieverEmail)
			$http.post('/send',{emailArticle : $scope.emailArticle,receiver : $scope.recieverEmail,sender : localStorage.getItem("uName")}).success(function(res){
				console.log(res)
			});
		}
	}
    // email the resources
    $scope.emailArticlesToFriend = function(event){
        var str = event.target.id.split("_")[1];
        console.log($scope.resources);
        $scope.emailArticle = { };
        $scope.emailArticle = {title:" "};
        $scope.emailArticle.title = $scope.resources[str-1].webUrl;
        console.log($scope.emailArticle.title)
    }

    	//contact mail
	$scope.contactMail = function(){
		/*alert("email");
		alert($scope.email);*/
		if($scope.subject == ""){

			//error handling block (print err msg in #mailer)
		}
		else if($scope.subject == "General Customer Service"){
			console.log($scope.subject)
			$http.post('/send1',{subject : $scope.subject,email:$scope.email,message:$scope.message,name:$scope.name,sender : localStorage.getItem("uName")}).success(function(res){
				alert(console.log(res));
				});
		}
		else if($scope.subject == "suggestions"){
			console.log($scope.subject)
			$http.post('/send1',{subject : $scope.subject,email:$scope.email,message:$scope.message,name:$scope.name,sender : localStorage.getItem("uName")}).success(function(res){
				alert(console.log(res));
				});
		}
		else {
			console.log($scope.subject)
			$http.post('/send1',{subject : $scope.subject,email:$scope.email,message:$scope.message,name:$scope.name,sender : localStorage.getItem("uName")}).success(function(res){
				alert(console.log(res));
				});
		}
        $scope.email=" ";
        $scope.subject=" ";
        $scope.name=" ";
        $scope.message=" ";
		var test = new cAlert("You query has been successfully sent.<p> We will get back to you as early as possible", "success",20);
        test.alert();
	}
	$scope.getUserProfile = function(){
		$http.post('/api/getProfile',{emailId : $window.localStorage.getItem("uName")}).success(function(res){
        	$scope.loginProfile = res;
			console.log("*****************************************");
			console.log(res);
			console.log("*****************************************");
    	});
	}
	$scope.searchArticle = function() {
		console.log("in search data");
		$http.post("/searchSample", {name: document.getElementById('search-key').value }).success(function(res) {
            //$scope.hello = data;
			console.log(res);
			$(".searchHide").hide();
			$("#articleLoadMore").hide();
			if(res.data.length > 0){
				$scope.totalRes = res.data;
				//$scope.articleFeatured = $scope.totalRes.splice(0,2);
				$scope.article = $scope.totalRes.splice(0,res.data.length);
				console.log($scope.article);
				for(var i=0;i<res.data.length;i++){
					url = $scope.article[i].iframeLink;
					$scope.article[i].iframeLink = $sce.trustAsResourceUrl(url);
				}
			} else {
				//print error message that data is not found
				$scope.err = res.errMsg;
			}
        });
	}
	var setData = function(res){
		var url = "";
		$scope.backUp = res;
		$scope.totalRes = res;
		$scope.articleFeatured = $scope.totalRes.splice(0,2);
		$scope.article = $scope.totalRes.splice(0,8);
		/*for(var i=0;i<8;i++){
			url = $scope.article[i].iframeLink;
			$scope.article[i].iframeLink = $sce.trustAsResourceUrl(url);
			$scope.article[i].iframeLinkTemp = $scope.article[i].iframeLink
		}*/
		$(".sidebar_icons").show();
	}
	$scope.logOutProfile = function(){
		//alert("sdfsdjfn");
		localStorage.setItem("uName", "");
		$window.location.href = "/logout";
	}
	
	var checkDuplicateObj = function() {
		console.log($scope.loginProfile[0].title.length);
		console.log("--");
		console.log($scope.loginProfile[0].title[0].title);
		console.log("--");
		console.log($scope.profiles.title);
		for (i = 0; i < $scope.loginProfile[0].title.length; i++) {
	        if ($scope.loginProfile[0].title[i].title === $scope.profiles.title) {
	            return true;
	        }
    	}
   		return false;
	}
	
	$scope.addme = function(event){
		var test = new cAlert("Article has been added to your profile", "success",20);
        test.alert();
        //var self1 = $selff
        $scope.profiles={};
        event.preventDefault();
        //alert(event.target.id);
        if(event.target.id <= 2){
        	var profile = $scope.articleFeatured[event.target.id-1];
        } else {
        	var profile = $scope.article[event.target.id-3];
        }
        
        console.log(profile);
        $scope.profiles = profile;
         //profile=$scope.profiles;
         //compare and see if selected article is present in $scope.loginProfile
         //if its there, dont do anything, else add to existing list
        console.log("$scope.loginProfile ============")
        console.log($scope.loginProfile)
        if($scope.loginProfile.length > 0){
        	//check if duplicates are there
        	//alert("hi")
        	var boolVal = checkDuplicateObj();
        	if(!boolVal){
        		console.log("new article is being appended to collection")
        		$scope.loginProfile[0].title.push($scope.profiles);
        		var newObj = $scope.loginProfile;
        		//$scope.loginProfile = newObj;

        		console.log(newObj);
        	} else {
        		console.log("duplicate found!!!!!!!!!!")
        		return;
        	}
        } else {
        	var newObj = [{ 
        		emailId:$window.localStorage.getItem("uName"),
        		title:[$scope.profiles]
        	}];
        	$scope.loginProfile = newObj;
        }
        console.log(newObj);
        $http.post('/api/profile',{newObj}).success(function(res){
            console.log("pushing new article to db - profile collection");
            var result = res;
        });
	}
	//var getgoogleDrive = function(){
//		$http.get('/googleDrive')
  //      .success(function(data) {
  //          console.log(data);
  //      });
//	}
    $scope.getCustomizedArticles = function(){
        if($(".selected-topics .tag").text().length > 0){
           var selectedStr=$(".selected-topics .tag").text().substr(1);
            selectedStr = selectedStr.replace(/x  /g,',');
            var test = new cAlert("Your customized values are save.", "success",20);
            test.alert();
            localStorage.setItem("articleTopics",selectedStr)
            getFeaturedArticles($scope);  
        } else{
            var test = new cAlert("No Articles selected.", "danger",20);
            test.alert();
        }
    }
    $scope.resetCustomized = function(){
        localStorage.setItem("articleTopics","");
        var test = new cAlert("Your customization has been resetted.", "danger",20);
        test.alert();
    }
    
	var getFeaturedArticles = function($scope){
		
		
		$scope.func = function(){
			
			if(!localStorage.getItem("uName") || localStorage.getItem("uName") == ""){
				$("#login").css('display','block')

			} else {
				$scope.getUserProfile();
				$("#loggedin").css('display','block')
			}
			if(!localStorage.getItem("fromEmailArticle") || localStorage.getItem("fromEmailArticle") == ""){
				var articleTopics = localStorage.getItem("articleTopics");
				console.log(articleTopics);
				if(articleTopics){
					$http.post("/article/chosenTopics", {articleTopics : localStorage.getItem("articleTopics") }).success(function(res) {
						console.log(res);
						setData(res);
					});
				} else {
					$http.get("/article/featured").success(function(res){
						console.log("inside featured");
						console.log(res);
						setData(res);
                        // console.log('test');
					});
				}
			} else {
				$http.get("/article/featured").success(function(res){
					var featuredData = res;
					var searchKey = $('<textarea />').html(localStorage.getItem("fromEmailArticle")).text();
					//$http.post("/searchSample", {name: searchKey }).success(function(res) {
						//if(res.data.length <= 0){
							$http.post("/searchArticle", {name: searchKey }).success(function(res) {
								console.log(res.data[0])
								if(res.data.length > 0){
									johnRemoved = featuredData.filter(function(el) {
										return el.title !== res.data[0].title;
									});
									johnRemoved.unshift(res.data[0])
									setData(johnRemoved);
									localStorage.setItem("fromEmailArticle","")
								}
							})
						//}
					//})
				});
				
			}
			
			
		}
		$scope.func();
	}
	
	$scope.sortByDate = function(){
		console.log(res);
		var res = $scope.article.concat($scope.articleFeatured);
		res.sort(function(a,b){
			var aa = new Date(a.date);
			aa = (aa == "Invalid Date" ? 0 : aa);
			console.log(aa);
			var bb = new Date(b.date);
			bb = (bb == "Invalid Date" ? 0 : bb);
			console.log(bb);
			return bb - aa;
		});
		$scope.articleFeatured = res.splice(0,2);
		$scope.article = res.splice(0,8);
	}
	
	getFeaturedArticles($scope);
	
	
	//getgoogleDrive();
	$scope.loadMore = function(){
		//var arr = $scope.totalRes.splice(0,9);
		var arr = ($scope.totalRes.length >= 8 ? $scope.totalRes.splice(0,8) : $scope.totalRes.splice(0,$scope.totalRes.length));
		console.log($scope.totalRes.length);
		for(var i=0;i < arr.length;i++){
			$scope.article.push(arr[i]);
		}
		($scope.totalRes.length == 0 ? $scope.hideShowMore = !$scope.hideShowMore : "");
	}
	$scope.formData = {};
	
   $http.get('/resources.json').success(function (data){
		$scope.resources = data;
	});
	console.log($scope.resources); 
    
    // when landing on the page, get all todos and show them
    $http.get("/api/todos")
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
        $http.post("/api/todos", $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
	$scope.createFinance = function() {
        $http.post("/api/finance", $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
});


app.controller("MoneyController",function($http,$scope){
	$http.get('/api/username')
        .success(function(data) {
            $scope.user = data;
            console.log(data);
        });
        
});

	


