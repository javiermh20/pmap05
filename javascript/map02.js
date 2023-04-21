var map = new maplibregl.Map({
    container: 'map',
    style:'https://api.maptiler.com/maps/basic-v2/style.json?key=gEwTz8EZKm1Uu0GCcZVM',
    //style:'https://api.maptiler.com/data/b2aff7b4-a065-4573-90bd-8fa85037ee9d/features.json?key=1figdFzrDvafEOTQPDOn',
    // style:'https://api.maptiler.com/maps/bright-v2/style.json?key=gEwTz8EZKm1Uu0GCcZVM',
    center: [-0.11,51.49],
    // center: [-101.6313894764541, 21.166128124361702],
    zoom: 2
});
map.on('load', ()=>{
    map.addSource('Airport_points',{
    type:'geojson',
    data:'https://api.maptiler.com/data/b2aff7b4-a065-4573-90bd-8fa85037ee9d/features.json?key=1figdFzrDvafEOTQPDOn'
    });
    map.addLayer({
        'id':'Airports',
        'type':'symbol',
        'source':'Airport_points',
        'layout':{
            'icon-image':'Airport_icon',
            'icon-size':0.05,
        }
    });
    map.loadImage('https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-plane-512.png',
        (error,image)=>{
            if(error) throw error;
            map.addImage('Airport_icon',image);
        });
});