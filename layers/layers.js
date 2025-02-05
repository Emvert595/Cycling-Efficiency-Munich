ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25832").setExtent([673824.386847, 5325537.326583, 706900.493996, 5346731.725338]);
var wms_layers = [];


        var lyr_CartoDB__0 = new ol.layer.Tile({
            'title': 'CartoDB_',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_CyclingnetworkMunich_1 = new ol.format.GeoJSON();
var features_CyclingnetworkMunich_1 = format_CyclingnetworkMunich_1.readFeatures(json_CyclingnetworkMunich_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_CyclingnetworkMunich_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CyclingnetworkMunich_1.addFeatures(features_CyclingnetworkMunich_1);
var lyr_CyclingnetworkMunich_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CyclingnetworkMunich_1, 
                style: style_CyclingnetworkMunich_1,
                popuplayertitle: 'Cycling network Munich',
                interactive: false,
                title: '<img src="styles/legend/CyclingnetworkMunich_1.png" /> Cycling network Munich'
            });
var format_Routes_2 = new ol.format.GeoJSON();
var features_Routes_2 = format_Routes_2.readFeatures(json_Routes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Routes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routes_2.addFeatures(features_Routes_2);
var lyr_Routes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Routes_2, 
                style: style_Routes_2,
                popuplayertitle: 'Routes',
                interactive: true,
    title: 'Route with accumulated delays<br /><br />\
    <img src="styles/legend/slice1.png"/>'
            
        });
var format_dissolved_segments_3 = new ol.format.GeoJSON();
var features_dissolved_segments_3 = format_dissolved_segments_3.readFeatures(json_dissolved_segments_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_dissolved_segments_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dissolved_segments_3.addFeatures(features_dissolved_segments_3);
var lyr_dissolved_segments_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dissolved_segments_3, 
                style: style_dissolved_segments_3,
                popuplayertitle: 'dissolved_segments',
                interactive: false
            });

        var lyr_Positronlabelsonly_4 = new ol.layer.Tile({
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png'
            })
        });
var format_Trafficlights_5 = new ol.format.GeoJSON();
var features_Trafficlights_5 = format_Trafficlights_5.readFeatures(json_Trafficlights_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Trafficlights_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trafficlights_5.addFeatures(features_Trafficlights_5);
var lyr_Trafficlights_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trafficlights_5, 
                style: style_Trafficlights_5,
                popuplayertitle: 'Traffic lights',
                interactive: false,
                title: '<img src="styles/legend/Trafficlights_5.png" /> Traffic light'
            });
var format_Homeaddress_6 = new ol.format.GeoJSON();
var features_Homeaddress_6 = format_Homeaddress_6.readFeatures(json_Homeaddress_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Homeaddress_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Homeaddress_6.addFeatures(features_Homeaddress_6);
cluster_Homeaddress_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Homeaddress_6
});
var lyr_Homeaddress_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Homeaddress_6, 
                style: style_Homeaddress_6,
                popuplayertitle: 'Home address',
                interactive: true,
                title: '<img src="styles/legend/Homeaddress_6.png" /> Home address'
            });
var format_TUM_7 = new ol.format.GeoJSON();
var features_TUM_7 = format_TUM_7.readFeatures(json_TUM_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_TUM_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TUM_7.addFeatures(features_TUM_7);
var lyr_TUM_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TUM_7, 
                style: style_TUM_7,
                popuplayertitle: 'TUM',
                interactive: false,
                title: '<img src="styles/legend/TUM_7.png" /> TUM [Starting point]'
            });
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: ''});
var group_MAINMAP = new ol.layer.Group({
                                layers: [lyr_Routes_2,lyr_dissolved_segments_3,lyr_Positronlabelsonly_4,lyr_Trafficlights_5,lyr_Homeaddress_6,lyr_TUM_7,],
                                fold: "open",
                                title: 'MAIN MAP'});
var group_tum_to_point = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'tum_to_point'});
var group_segments = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'segments'});
var group_BACKGROUNDINFORMATION = new ol.layer.Group({
                                layers: [lyr_CyclingnetworkMunich_1,],
                                fold: "open",
                                title: 'BACKGROUND INFORMATION'});

lyr_CartoDB__0.setVisible(true);lyr_CyclingnetworkMunich_1.setVisible(false);lyr_Routes_2.setVisible(true);lyr_dissolved_segments_3.setVisible(true);lyr_Positronlabelsonly_4.setVisible(true);lyr_Trafficlights_5.setVisible(true);lyr_Homeaddress_6.setVisible(true);lyr_TUM_7.setVisible(true);
var layersList = [lyr_CartoDB__0,group_BACKGROUNDINFORMATION,group_MAINMAP];
lyr_CyclingnetworkMunich_1.set('fieldAliases', {'name': 'name', 'link_id': 'link_id', 'osm_way_id': 'osm_way_id', 'from_node_': 'from_node_', 'to_node_id': 'to_node_id', 'dir_flag': 'dir_flag', 'length': 'length', 'lanes': 'lanes', 'free_speed': 'free_speed', 'capacity': 'capacity', 'link_type_': 'link_type_', 'link_type': 'link_type', 'allowed_us': 'allowed_us', 'from_biway': 'from_biway', 'is_link': 'is_link', 'VDF_fftt1': 'VDF_fftt1', 'VDF_cap1': 'VDF_cap1', });
lyr_Routes_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Street': 'Street', 'Number': 'Number', 'Postalcode': 'Postalcode', 'Easting': 'Easting', 'Northing': 'Northing', 'start': 'start', 'end': 'end', 'cost': 'cost', 'segment_id': 'segment_id', 'Last stop': 'Last stop', 'Accumulated number of stops': 'Accumulated number of stops', 'Accumulated waiting time': 'Accumulated waiting time', 'layer': 'layer', 'path': 'path', 'Segment length (m)': 'Segment length (m)', 'Accumulated waiting time (min)': 'Accumulated waiting time (min)', });
lyr_dissolved_segments_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Street': 'Street', 'Number': 'Number', 'Postalcode': 'Postalcode', 'Easting': 'Easting', 'Northing': 'Northing', 'start': 'start', 'end': 'end', 'cost': 'cost', 'segment_id': 'segment_id', 'Last stop': 'Last stop', 'Accumulate': 'Accumulate', 'Accumula_1': 'Accumula_1', 'layer': 'layer', 'path': 'path', 'Segment le': 'Segment le', 'Accumula_2': 'Accumula_2', });
lyr_Trafficlights_5.set('fieldAliases', {'name': 'name', 'node_id': 'node_id', 'osm_node_i': 'osm_node_i', 'osm_highwa': 'osm_highwa', 'zone_id': 'zone_id', 'ctrl_type': 'ctrl_type', 'node_type': 'node_type', 'activity_t': 'activity_t', 'is_boundar': 'is_boundar', 'x_coord': 'x_coord', 'y_coord': 'y_coord', 'intersecti': 'intersecti', 'poi_id': 'poi_id', 'notes': 'notes', 'x': 'x', 'y': 'y', 'point_id': 'point_id', 'value': 'value', 'acc_stop': 'acc_stop', 'acc_time': 'acc_time', 'layer': 'layer', 'path': 'path', });
lyr_Homeaddress_6.set('fieldAliases', {'Name': 'Name', 'Street': 'Street', 'Number': 'Number', 'Postalcode': 'Postalcode', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_TUM_7.set('fieldAliases', {'id': 'id', });
lyr_CyclingnetworkMunich_1.set('fieldImages', {'name': 'TextEdit', 'link_id': 'TextEdit', 'osm_way_id': 'TextEdit', 'from_node_': 'TextEdit', 'to_node_id': 'TextEdit', 'dir_flag': 'Range', 'length': 'TextEdit', 'lanes': 'TextEdit', 'free_speed': 'TextEdit', 'capacity': 'TextEdit', 'link_type_': 'TextEdit', 'link_type': 'TextEdit', 'allowed_us': 'TextEdit', 'from_biway': 'Range', 'is_link': 'Range', 'VDF_fftt1': 'TextEdit', 'VDF_cap1': 'TextEdit', });
lyr_Routes_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Street': 'TextEdit', 'Number': 'TextEdit', 'Postalcode': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', 'segment_id': 'TextEdit', 'Last stop': 'Range', 'Accumulated number of stops': 'TextEdit', 'Accumulated waiting time': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Segment length (m)': '', 'Accumulated waiting time (min)': 'TextEdit', });
lyr_dissolved_segments_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Street': 'TextEdit', 'Number': 'TextEdit', 'Postalcode': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', 'segment_id': 'TextEdit', 'Last stop': 'TextEdit', 'Accumulate': 'TextEdit', 'Accumula_1': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Segment le': 'TextEdit', 'Accumula_2': 'TextEdit', });
lyr_Trafficlights_5.set('fieldImages', {'name': 'TextEdit', 'node_id': 'TextEdit', 'osm_node_i': 'TextEdit', 'osm_highwa': 'TextEdit', 'zone_id': 'TextEdit', 'ctrl_type': 'TextEdit', 'node_type': 'TextEdit', 'activity_t': 'TextEdit', 'is_boundar': 'TextEdit', 'x_coord': 'TextEdit', 'y_coord': 'TextEdit', 'intersecti': 'TextEdit', 'poi_id': 'TextEdit', 'notes': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'point_id': 'TextEdit', 'value': 'TextEdit', 'acc_stop': 'TextEdit', 'acc_time': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Homeaddress_6.set('fieldImages', {'Name': 'TextEdit', 'Street': 'TextEdit', 'Number': 'TextEdit', 'Postalcode': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_TUM_7.set('fieldImages', {'id': 'TextEdit', });
lyr_CyclingnetworkMunich_1.set('fieldLabels', {'name': 'no label', 'link_id': 'no label', 'osm_way_id': 'no label', 'from_node_': 'no label', 'to_node_id': 'no label', 'dir_flag': 'no label', 'length': 'no label', 'lanes': 'no label', 'free_speed': 'no label', 'capacity': 'no label', 'link_type_': 'no label', 'link_type': 'no label', 'allowed_us': 'no label', 'from_biway': 'no label', 'is_link': 'no label', 'VDF_fftt1': 'no label', 'VDF_cap1': 'no label', });
lyr_Routes_2.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'Street': 'hidden field', 'Number': 'hidden field', 'Postalcode': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', 'start': 'hidden field', 'end': 'hidden field', 'cost': 'hidden field', 'segment_id': 'hidden field', 'Last stop': 'hidden field', 'Accumulated number of stops': 'hidden field', 'Accumulated waiting time': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Segment length (m)': 'inline label - visible with data', 'Accumulated waiting time (min)': 'inline label - visible with data', });
lyr_dissolved_segments_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Street': 'no label', 'Number': 'no label', 'Postalcode': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', 'segment_id': 'no label', 'Last stop': 'no label', 'Accumulate': 'no label', 'Accumula_1': 'no label', 'layer': 'no label', 'path': 'no label', 'Segment le': 'no label', 'Accumula_2': 'no label', });
lyr_Trafficlights_5.set('fieldLabels', {'name': 'no label', 'node_id': 'no label', 'osm_node_i': 'no label', 'osm_highwa': 'no label', 'zone_id': 'no label', 'ctrl_type': 'no label', 'node_type': 'no label', 'activity_t': 'no label', 'is_boundar': 'no label', 'x_coord': 'no label', 'y_coord': 'no label', 'intersecti': 'no label', 'poi_id': 'no label', 'notes': 'no label', 'x': 'no label', 'y': 'no label', 'point_id': 'no label', 'value': 'no label', 'acc_stop': 'no label', 'acc_time': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Homeaddress_6.set('fieldLabels', {'Name': 'hidden field', 'Street': 'inline label - visible with data', 'Number': 'hidden field', 'Postalcode': 'inline label - visible with data', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_TUM_7.set('fieldLabels', {'id': 'no label', });
lyr_TUM_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});