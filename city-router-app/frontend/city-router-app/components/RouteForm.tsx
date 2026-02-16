"use client"; //what is this?

import {useState} from "react";

const cities = [
    "Addis Ababa",
    "Adama", 
    "Bahir Dar",
    "Gondar",
    "Mekelle",
    "Dire Dawa",
    "Hawassa",
    "Jimma",
    "Harar",
    "Shashemene",
    "Debre Birhan",
    "Asella",
    "Dessie",
    "Bishoftu",
    "Arba Minch",
    "Jijiga",
    "Dilla",
    "Sodo",
    "Adigrat",
    "Gambela",
    "Nekemte",
    "Shire",
    "Woldia",
    "Dabat",
    "Debre Markos",
    "Goba",
    "Mizan Teferi",
]

export default function RouteForm() {
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");

    return (
        <div className="space-y-4">
            <select
                value={source}
                onChange={(e) => setSource(e.target.value)}
            >
                

                <option value="">Select Source</option>
                {cities.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>

            <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full border rounded-lg p-2"
            >

                <option value="">Select Destination</option>
                {cities.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}                
            </select>

            <button
                disabled={!source || !destination}
                className="w-full bg-black text-white p-2 rounded-lg disabled:opacity-50"
            >
                Find Route
            </button>
        </div>
    );
}