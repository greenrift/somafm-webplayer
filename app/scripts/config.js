angular.module('config', [])

.constant('AppURLs', {allStations:{url:'/channels.xml'},pls:{url:'/[STATION_ID].pls?popup',key:'[STATION_ID]'},playList:{url:'/songs/[STATION_ID].xml',key:'[STATION_ID]'},community:{sections:[{key:'news',active:true,config:{dataUrl:'/news.xml'}},{key:'twitter',active:false},{key:'flickr',active:false},{key:'gallery',active:true},{key:'facebook',active:false}]},news:{url:'/news.xml'}})

;