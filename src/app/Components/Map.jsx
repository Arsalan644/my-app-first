"use client";
import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";

const WorldMapProfiles = () => {
  const svgRef = useRef(null);
  const [hoveredUser, setHoveredUser] = useState(null);
  const [worldData, setWorldData] = useState(null);

  // Sample user data with coordinates
  const users = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Product Designer",
      location: "San Francisco",
      coords: [-122.4194, 37.7749],
      avatar: "👩‍💼",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Software Engineer",
      location: "New York",
      coords: [-74.006, 40.7128],
      avatar: "👨‍💻",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Data Scientist",
      location: "Mexico City",
      coords: [-99.1332, 19.4326],
      avatar: "👩‍🔬",
    },
    {
      id: 4,
      name: "James Wilson",
      role: "UX Designer",
      location: "London",
      coords: [-0.1276, 51.5074],
      avatar: "👨‍🎨",
    },
    {
      id: 5,
      name: "Anna Schmidt",
      role: "DevOps Engineer",
      location: "Berlin",
      coords: [13.405, 52.52],
      avatar: "👩‍💻",
    },
    {
      id: 6,
      name: "Raj Patel",
      role: "Product Manager",
      location: "Mumbai",
      coords: [72.8777, 19.076],
      avatar: "👨‍💼",
    },
    {
      id: 7,
      name: "Liu Wei",
      role: "Backend Developer",
      location: "Shanghai",
      coords: [121.4737, 31.2304],
      avatar: "👨‍💻",
    },
    {
      id: 8,
      name: "Olivia Brown",
      role: "Marketing Lead",
      location: "Sydney",
      coords: [151.2093, -33.8688],
      avatar: "👩‍💼",
    },
    {
      id: 9,
      name: "Mohamed Ali",
      role: "Security Expert",
      location: "Cairo",
      coords: [31.2357, 30.0444],
      avatar: "👨‍🔧",
    },
    {
      id: 10,
      name: "Sophie Martin",
      role: "Frontend Dev",
      location: "Paris",
      coords: [2.3522, 48.8566],
      avatar: "👩‍💻",
    },
    {
      id: 11,
      name: "Carlos Silva",
      role: "Cloud Architect",
      location: "São Paulo",
      coords: [-46.6333, -23.5505],
      avatar: "👨‍💻",
    },
    {
      id: 12,
      name: "Yuki Tanaka",
      role: "AI Researcher",
      location: "Tokyo",
      coords: [139.6503, 35.6762],
      avatar: "👩‍🔬",
    },
    {
      id: 13,
      name: "David Kim",
      role: "Mobile Developer",
      location: "Seoul",
      coords: [126.978, 37.5665],
      avatar: "👨‍💻",
    },
    {
      id: 14,
      name: "Maria Gonzalez",
      role: "QA Engineer",
      location: "Madrid",
      coords: [-3.7038, 40.4168],
      avatar: "👩‍🔧",
    },
    {
      id: 15,
      name: "Alex Thompson",
      role: "Blockchain Dev",
      location: "Toronto",
      coords: [-79.3832, 43.6532],
      avatar: "👨‍💻",
    },
  ];

  useEffect(() => {
    // Load world map data
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then((response) => response.json())
      .then((data) => setWorldData(data))
      .catch((error) => console.error("Error loading world data:", error));
  }, []);

  useEffect(() => {
    if (!worldData) return;

    const width = 1200;
    const height = 600;

    // Clear previous SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    // Create projection
    const projection = d3
      .geoNaturalEarth1()
      .scale(200)
      .translate([width / 2, height / 2]);

    const pathGenerator = d3.geoPath().projection(projection);

    // Draw world map
    const countries = topojson.feature(worldData, worldData.objects.countries);

    svg
      .selectAll("path")
      .data(countries.features)
      .enter()
      .append("path")
      .attr("d", pathGenerator)
      .attr("fill", "#1a1a2e")
      .attr("stroke", "#16213e")
      .attr("stroke-width", 0.5);

    // Add user markers
    const markers = svg
      .selectAll(".marker")
      .data(users)
      .enter()
      .append("g")
      .attr("class", "marker")
      .attr("transform", (d) => {
        const coords = projection(d.coords);
        return `translate(${coords[0]}, ${coords[1]})`;
      });

    // Add glowing effect
    markers
      .append("circle")
      .attr("r", 25)
      .attr("fill", "rgba(46, 213, 115, 0.2)")
      .attr("class", "pulse");

    markers
      .append("circle")
      .attr("r", 18)
      .attr("fill", "rgba(46, 213, 115, 0.3)")
      .attr("class", "pulse-delay");

    // Add profile circles
    markers
      .append("circle")
      .attr("r", 20)
      .attr("fill", "#0f3460")
      .attr("stroke", "#2ed573")
      .attr("stroke-width", 2);

    // Add avatar text
    markers
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "0.3em")
      .attr("font-size", "18px")
      .text((d) => d.avatar);

    // Add hover interactions
    markers
      .style("cursor", "pointer")
      .on("mouseenter", function (event, d) {
        setHoveredUser(d);
        d3.select(this)
          .select("circle:nth-child(3)")
          .transition()
          .duration(200)
          .attr("r", 25)
          .attr("stroke-width", 3);
      })
      .on("mouseleave", function () {
        setHoveredUser(null);
        d3.select(this)
          .select("circle:nth-child(3)")
          .transition()
          .duration(200)
          .attr("r", 20)
          .attr("stroke-width", 2);
      });
  }, [worldData]);

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      <style jsx>{`
        @keyframes pulse {
          0% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.2);
          }
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
        }

        @keyframes pulse-delay {
          0% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.3);
          }
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
        }

        .pulse {
          animation: pulse 2s infinite;
          transform-origin: center;
        }

        .pulse-delay {
          animation: pulse-delay 2s infinite;
          animation-delay: 0.5s;
          transform-origin: center;
        }
      `}</style>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          Global Team Network
        </h1>
        <p className="text-gray-400">
          Connect with team members across the world
        </p>
      </div>

      {/* Map Container */}
      <div className="w-full h-full flex items-center justify-center">
        <svg ref={svgRef} className="w-full h-full max-w-7xl"></svg>
      </div>

      {/* User Info Tooltip */}
      {hoveredUser && (
        <div className="absolute top-24 right-8 bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl shadow-2xl border border-green-500/30 animate-fadeIn z-20">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">{hoveredUser.avatar}</div>
            <div>
              <h3 className="text-xl font-bold text-white">
                {hoveredUser.name}
              </h3>
              <p className="text-green-400">{hoveredUser.role}</p>
              <p className="text-gray-400 text-sm mt-1">
                📍 {hoveredUser.location}
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex space-x-3">
              <button className="px-3 py-1 bg-green-500 text-black rounded-lg text-sm font-semibold hover:bg-green-400 transition">
                Connect
              </button>
              <button className="px-3 py-1 bg-gray-700 text-white rounded-lg text-sm font-semibold hover:bg-gray-600 transition">
                View Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
        <div className="flex justify-center space-x-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">
              {users.length}
            </div>
            <div className="text-gray-400 text-sm">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">7</div>
            <div className="text-gray-400 text-sm">Continents</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">24/7</div>
            <div className="text-gray-400 text-sm">Coverage</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default WorldMapProfiles;
