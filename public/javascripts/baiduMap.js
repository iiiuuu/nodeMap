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
map.setCurrentCity("西安");
map.centerAndZoom("西安",11);