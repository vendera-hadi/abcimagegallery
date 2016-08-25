// static data
var allCategories = [
      { status: true, filter: 'all', text: 'All' },
      { status: false, filter: '1', text: 'Outbound' },
      { status: false, filter: '2', text: 'Eatery' },
      { status: false, filter: '3', text: 'Travelling' }
    ];
var loremipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam eros, faucibus ac varius id, blandit eu libero. Nam arcu odio, pulvinar quis luctus nec, laoreet a metus. Aenean vel nisl non sem porta vulputate. Vivamus mattis augue sit amet fringilla facilisis. Nulla a elementum sapien, a tincidunt lectus. Etiam at semper felis, eget euismod orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
var images = [
	{ source: 'img/city_1.jpg', category: '1', title: 'Have Fun', date: '2015-12-10', description: loremipsum, show: true },
	{ source: 'img/nature_2.jpg', category: '1', title: 'He Smile', date: '2015-12-11', description: loremipsum, show: true },
	{ source: 'img/city_3.jpg', category: '2', title: 'Gotcha!!', date: '2015-11-09', description: loremipsum, show: true },
	{ source: 'img/industrial_1.jpg', category: '2', title: 'What a Nice Day', date: '2015-10-22', description: loremipsum, show: true},
	{ source: 'img/industrial_2.jpg', category: '3', title: 'TGIF Moment', date: '2015-12-20', description: loremipsum, show: true},
	{ source: 'img/nature_1.jpg', category: '3', title: 'Hello World', date: '2016-01-02', description: loremipsum, show: true},
	{ source: 'img/city_2.jpg', category: '1', title: 'Hi There', date: '2015-11-30', description: loremipsum, show: true},
	{ source: 'img/nature_3.jpg', category: '2', title: 'CMon Bro', date: '2015-12-03', description: loremipsum, show: true},
	{ source: 'img/industrial_3.jpg', category: '3', title: 'Yes We Can', date: '2015-12-06', description: loremipsum, show: true},
];

// functions
var changeCategoryFunction = function (event) {
	      	var clickedCategory = event.target.attributes[0].value;
	      	var falseIndex, trueIndex, showIndex = [], hideIndex = [];
	      	for(var i=0; i < this.categories.length; i++){
	      		// track index
	      		if(this.categories[i].status == true) falseIndex = i;
	      		if(this.categories[i].filter == clickedCategory) trueIndex = i;
	      	}
	      	this.categories[falseIndex].status = false;
	      	this.categories[trueIndex].status = true;
	      	// find index of matching category
	      	for(i=0; i < this.images.length; i++){
	      		if(clickedCategory == 'all') showIndex.push(i);
	      		else if(this.images[i].category == clickedCategory) showIndex.push(i);
	      		else hideIndex.push(i);
	      	}
	      	if(showIndex.length > 0){
	      		for(i=0; i < showIndex.length; i++){
	      			this.images[showIndex[i]].show = true;
	      		}
	      	}
	      	if(hideIndex.length > 0){
	      		for(i=0; i < hideIndex.length; i++){
	      			this.images[hideIndex[i]].show = false;
	      		}
	      	}
	    };

var sortImage = function (sortMethod) {
			var sortBy = $('#sortDropdown').val();
			var showIndex = [];
	      	if(sortBy == "title"){
	      		if(sortMethod == 'desc') this.images.sort(function(a,b) { return a.title < b.title; });
	      		else if(sortMethod == 'asc') this.images.sort(function(a,b) { return a.title > b.title; });
	      	}else if(sortBy == "date"){
	      		if(sortMethod == 'desc') this.images.sort(function(a,b) { return a.date < b.date; });
	      		else if(sortMethod == 'asc') this.images.sort(function(a,b) { return a.date > b.date; });
	      	}
		};

// vue controller
var Vue =  new Vue({
    el: '.demo-content',
    data: {
        categories: allCategories,
        images: images
    },
    methods: {
		changeCategory: changeCategoryFunction,
		sort: sortImage
	}
});