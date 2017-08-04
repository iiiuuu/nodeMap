/**
 * Created by Administrator on 2017/8/3.
 */
var map = new BMap.Map("container");
/*var point = new BMap.Point(116.404, 39.915);
map.setCurrentCity("西安");*/
map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.OverviewMapControl());
map.addControl(new BMap.MapTypeControl());
map.enableScrollWheelZoom(true);
var myGeo = new BMap.Geocoder();
var index =0;
map.centerAndZoom("西安",11);

$.ajax({
    type : 'GET',
    url : '/getInfo',
    success : function(data) {
        var s=JSON.parse(data)
        if(s.status==200){
            var q=new Array("1");
            t=s.dataList;
            bdGEO(t);
        }
    }
});
function bdGEO(address){
    for(i=0;i<address.length;i++){
        var s=address[i];
        myGeo.getPoint(address[i], function(point){
            if (point) {
                var addressq = new BMap.Point(point.lng, point.lat);
                console.log(s);
                addMarker(addressq,new BMap.Label(":"+s));
            }
        }, "西安市");
    }
    console.log("end");
}
function addMarker(point,label){
    var marker = new BMap.Marker(point);
    map.addOverlay(marker);
    marker.setLabel(label);
}

