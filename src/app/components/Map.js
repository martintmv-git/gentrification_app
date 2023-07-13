"use client"
import React, { useEffect } from 'react';
import maplibre from 'maplibre-gl'; 

function MapComponent() {
  useEffect(() => {
    const map = new maplibre.Map({
      container: 'map',
      style: 'https://api.maptiler.com/maps/streets/style.json?key=yqoBKpegIKzfVwh70q12',
      center: [5.4697, 51.4416],
      zoom: 9,
      bearing: 0,
      pitch: 0,
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new maplibre.NavigationControl());

    // Function to toggle between 2D and 3D view.
    function toggle3D() {
      if (map.getPitch() === 0) {
        map.easeTo({ pitch: 60 });
      } else {
        map.easeTo({ pitch: 0 });
      }
    }

    // Add a button to toggle 3D view.
    const button = document.createElement('a');
    button.textContent = 'Toggle 3D';
    button.style.position = 'absolute';
    button.style.zIndex = '1';
    button.style.top = '10px';
    button.style.right = '10px';
    button.style.backgroundColor = '#F3F4F6'; // bg-gray-100
    button.style.padding = '10px 20px'; // px-5 py-2.5
    button.style.textDecoration = 'none'; // remove underline
    button.style.borderRadius = '0.375rem'; // rounded-md
    button.style.color = '#991B1B'; // text-red-600
    button.style.fontWeight = '500'; // font-medium
    button.style.fontSize = '0.875rem'; // text-sm
    button.style.cursor = 'pointer';
    button.onclick = toggle3D;

    // Append the button within the map container
    const mapContainer = document.getElementById('map');
    mapContainer.style.position = 'relative'; // Ensure it's positioned relative to the map
    mapContainer.appendChild(button);

    return () => {
      map.remove(); 
      // Remove the button when component is unmounted
      if (mapContainer.contains(button)) {
        mapContainer.removeChild(button);
      }
    };
  }, []);

  return (
    <div id="map" className="w-full h-screen"></div>
  );
}

export default MapComponent;