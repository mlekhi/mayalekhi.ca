import React, { useEffect } from "react";
import styles from "./Travels.module.css";
import Footer from "../../components/Footer/Footer.jsx";
import L from 'leaflet';
import "leaflet/dist/leaflet.css";

function Travels() {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([51.505, -0.09], 2); // Example coordinates and zoom level

    // Add a tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    // Add a marker
    L.marker([6.8165, 39.2894]).addTo(map)
      .bindPopup('Tanzania');

    // Optionally, you can add more markers or customize further

    return () => {
      // Clean up any resources (e.g., event listeners, timers) if needed
      map.remove();
    };
  }, []);
  return (
    <div className={"content-body"}>
      <div
        className={`${
          styles["home-hero"]
        } ${"flex flex-col-reverse lg:flex-row"}`}>
        <div className={`${styles["home-hero-text"]} ${"lg:w-[60%] w-full"}`}>
          <div>
            <h1>Where I've Been.</h1>
            <div className="map">
              <div id="map" className={styles.map}></div>
            </div>
            <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Travels;
