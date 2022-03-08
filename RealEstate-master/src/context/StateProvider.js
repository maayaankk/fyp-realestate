import React, { createContext, useReducer, useEffect, useContext } from "react";


const StateContext = createContext();

// const UserContext = createContext();

export const StateContextProvider = ({ reducer, initialState, children }) => {

  const [houses, dispatch] = useReducer(reducer, {
    Homes: [
      {
        city: "Mumbai",
        state: "MH",
        street: "Sahar Road",
        taluka: "Andheri",
        useCode: "Single Family",
        bedrooms: "1",
        bathrooms: "1",
        face: "East",
        finishedSqFt: "500",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "2CR",
        index: 2,
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-17-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-14-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-13-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-12-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-10-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-6-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-5-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/29/Location-Plan-8-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Tirupati Balaji, Building no:4, Nearby NEXA, Fullfurnished flat with all the electric applience inbuild in it.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.11252001079102,
        longitude: 72.84897542013033
      },
      {
        zestimate: "4850000",
        finishedSqFt: "720",
        taluka: "Kharghar",
        city: "Navi-Mumbai",
        state: "MH",
        street: "Parski Hill Road",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "2",
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2022/02/10/Project-Photo-11-Mangalam-Navi-Mumbai-5325493_345_1366.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2022/02/09/Project-Photo-10-Mangalam-Navi-Mumbai-5325493_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2022/02/09/Project-Photo-9-Mangalam-Navi-Mumbai-5325493_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2022/01/27/Project-Photo-4-Mangalam-Navi-Mumbai-5325493_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2022/02/11/Floor-Plan-13-Mangalam-Navi-Mumbai-5325493_600_800.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "MUMBAI-PUNE EXPRESSWAY - 10 min Upcoming Pisarve Metro - 5 Min 2.5 Acres of Luxury Community Living 1&2 BHK Spacious Homes Close to Central Park & Golf Course , Iskcon Temple",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.04638598722474,
        longitude: 73.07026444806905

      },
      {
        zestimate: "4500000",
        finishedSqFt: 600,
        taluka: "Kharghar",
        city: "Navi-Mumbai",
        state: "MH",
        street: "Raintree Marg",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "2",
        images: [
          "https://property.magicbricks.com/mb-microsite/3/tenxhabitat-zenithspacerealty-thane/images/gallery/g7.jpg",
          "https://property.magicbricks.com/mb-microsite/3/tenxhabitat-zenithspacerealty-thane/images/gallery/g1.jpg",
          "https://property.magicbricks.com/mb-microsite/3/tenxhabitat-zenithspacerealty-thane/images/gallery/g2.jpg",
          "https://property.magicbricks.com/mb-microsite/3/tenxhabitat-zenithspacerealty-thane/images/gallery/g5.jpg",
          "https://property.magicbricks.com/mb-microsite/3/tenxhabitat-zenithspacerealty-thane/images/gallery/g6.jpg",
          "https://property.magicbricks.com/mb-microsite/3/tenxhabitat-zenithspacerealty-thane/images/floorplan/floor.jpg"
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "FLOORING - COMMON AREAS - Entrance lift lobby and staircases: Granite / Vitrified tile flooring. - FLOORING - APARTMENT Inside the apartment: Double charged vitrified tile flooring with the option to upgrade* Bedrooms: Double charged Vitrified tile flooring with an option to upgrade* Kitchen: Vitrified tile flooring, Provision for a modular kitchen, Provision for a water heater and water purifier Black Granite Platform with stainless steel sink, 2ft height wall tiles above the cooking granite platform.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.04875989694061,
        longitude: 73.07338346305919
      },
      {
        zestimate: "6700000",
        finishedSqFt: "650",
        taluka: "Kharghar",
        city: "Navi-Mumbai",
        state: "MH",
        street: "Sahar Road",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "2",
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-17-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-14-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-13-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-12-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-10-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-6-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-5-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/29/Location-Plan-8-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Tirupati Balaji, Building no:4, Nearby NEXA, Fullfurnished flat with all the electric applience inbuild in it.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.04347598711554,
        longitude: 73.0691302607952
      },
      {
        zestimate: "4500000",
        finishedSqFt: "650",
        taluka: "Kharghar",
        city: "Navi-Mumbai",
        state: "MH",
        street: "Sahar Road",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "2",
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-17-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-14-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-13-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-12-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-10-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-6-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-5-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/29/Location-Plan-8-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Tirupati Balaji, Building no:4, Nearby NEXA, Fullfurnished flat with all the electric applience inbuild in it.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.052320697765047,
        longitude: 73.07212775572025
      },
      {
        zestimate: "5000000",
        finishedSqFt: "665",
        taluka: "Kharghar",
        city: "Navi-Mumbai",
        state: "MH",
        street: "Sahar Road",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "2",
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-17-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-14-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-13-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-12-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-10-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-6-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-5-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/29/Location-Plan-8-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Tirupati Balaji, Building no:4, Nearby NEXA, Fullfurnished flat with all the electric applience inbuild in it.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.05086575612349,
        longitude: 73.07840629241491
      },
      {
        zestimate: "2018000",
        finishedSqFt: "375",
        taluka: "Dombivali",
        city: "Thane",
        state: "MH",
        street: "Sahar Road",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "2",
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-17-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-14-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-13-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-12-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-10-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-6-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-5-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/29/Location-Plan-8-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Tirupati Balaji, Building no:4, Nearby NEXA, Fullfurnished flat with all the electric applience inbuild in it.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.226998834018545,
        longitude: 73.08739335935599
      },
      {
        zestimate: "65000000",
        finishedSqFt: "1200",
        taluka: "Churchgate",
        city: "Mumbai",
        state: "MH",
        street: "Sahar Road",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "2",
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-17-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-14-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-13-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-12-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-10-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-6-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-5-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/29/Location-Plan-8-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Tirupati Balaji, Building no:4, Nearby NEXA, Fullfurnished flat with all the electric applience inbuild in it.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 18.930807395730966,
        longitude: 72.8233973780507
      },
      {
        zestimate: "45000000",
        finishedSqFt: "1717",
        taluka: "Prabhadevi",
        city: "Mumbai",
        state: "MH",
        street: "Sahar Road",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "2",
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-17-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-14-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-13-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-12-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-10-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-6-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-5-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/29/Location-Plan-8-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Tirupati Balaji, Building no:4, Nearby NEXA, Fullfurnished flat with all the electric applience inbuild in it.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.015249248491198,
        longitude: 72.82427985174019
      },
      {
        zestimate: "16500000",
        finishedSqFt: "750",
        taluka: "Jogeshwari West",
        city: "Mumbai",
        state: "MH",
        street: "Sahar Road",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "2",
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-17-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-14-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-13-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-12-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-10-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-6-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-5-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/29/Location-Plan-8-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Tirupati Balaji, Building no:4, Nearby NEXA, Fullfurnished flat with all the electric applience inbuild in it.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.142461142576472,
        longitude: 72.84587430080578
      },
      {
        zestimate: "2375000",
        finishedSqFt: "525",
        taluka: "Kalyan East",
        city: "Thane",
        state: "MH",
        street: "Sahar Road",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "2",
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-17-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-14-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-13-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-12-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-10-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-6-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-5-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/29/Location-Plan-8-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Tirupati Balaji, Building no:4, Nearby NEXA, Fullfurnished flat with all the electric applience inbuild in it.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.22861602220163,
        longitude: 73.13652975797888
      },
      {
        zestimate: "19500000",
        finishedSqFt: "1200",
        taluka: "Malad East",
        city: "Mumbai",
        state: "MH",
        street: "Sahar Road",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "2",
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-17-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-14-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-13-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-12-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-10-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-6-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-5-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/29/Location-Plan-8-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Tirupati Balaji, Building no:4, Nearby NEXA, Fullfurnished flat with all the electric applience inbuild in it.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.170834741416794,
        longitude: 72.9583478864386
      },
      {
        zestimate: "2000000",
        finishedSqFt: "420",
        taluka: "Virar East",
        city: "Mumbai",
        state: "MH",
        street: "Sahar Road",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "2",
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-17-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-14-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-13-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-12-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-10-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-6-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-5-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/29/Location-Plan-8-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Tirupati Balaji, Building no:4, Nearby NEXA, Fullfurnished flat with all the electric applience inbuild in it.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.44311503569141,
        longitude: 72.83067222845345
      },
      {
        zestimate: "2500000",
        finishedSqFt: "540",
        taluka: "Virar East",
        city: "Mumbai",
        state: "MH",
        street: "Sahar Road",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "2",
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-17-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-14-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-13-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-12-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-10-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-6-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-5-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/29/Location-Plan-8-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Tirupati Balaji, Building no:4, Nearby NEXA, Fullfurnished flat with all the electric applience inbuild in it.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.442791291479917,
        longitude: 72.79599663309247
      },
      {
        zestimate: "2250000",
        finishedSqFt: "415",
        taluka: "Virar East",
        city: "Mumbai",
        state: "MH",
        street: "Sahar Road",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "2",
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-17-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-14-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-13-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-12-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-10-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-6-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-5-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/29/Location-Plan-8-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`
        ],
        desc: "Tirupati Balaji, Building no:4, Nearby NEXA, Fullfurnished flat with all the electric applience inbuild in it.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.487300056866736,
        longitude: 72.82895561482172
      },
      {
        zestimate: "2700000",
        finishedSqFt: "650",
        taluka: "Virar",
        city: "Mumbai",
        state: "MH",
        street: "Sahar Road",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "2",
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-17-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-14-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-13-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-12-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-10-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-6-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-5-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/29/Location-Plan-8-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Tirupati Balaji, Building no:4, Nearby NEXA, Fullfurnished flat with all the electric applience inbuild in it.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.481312316435226,
        longitude: 72.79410835809757
      },
      {
        zestimate: "22000000",
        finishedSqFt: "1100",
        taluka: "Malad West",
        city: "Mumbai",
        state: "MH",
        street: "Sahar Road",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "2",
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-17-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-14-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-13-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-12-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-10-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-6-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-5-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/29/Location-Plan-8-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Tirupati Balaji, Building no:4, Nearby NEXA, Fullfurnished flat with all the electric applience inbuild in it.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.183577619390668,
        longitude: 72.81746861942277
      },
      {
        zestimate: "17000000",
        finishedSqFt: "1105",
        taluka: "Borivali East",
        city: "Mumbai",
        state: "MH",
        street: "Sahar Road",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "2",
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-17-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-14-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-13-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-12-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-10-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-6-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-5-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/29/Location-Plan-8-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Tirupati Balaji, Building no:4, Nearby NEXA, Fullfurnished flat with all the electric applience inbuild in it.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.11252001079102,
        longitude: 72.84897542013033
      },
      {
        zestimate: "43500000",
        finishedSqFt: "2600",
        taluka: "Malad East",
        city: "Mumbai",
        state: "MH",
        street: "Sahar Road",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "2",
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-17-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-14-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-13-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-12-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-10-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-6-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-5-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/29/Location-Plan-8-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Tirupati Balaji, Building no:4, Nearby NEXA, Fullfurnished flat with all the electric applience inbuild in it.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.11252001079102,
        longitude: 72.84897542013033
      },
      {
        zestimate: "4760000",
        finishedSqFt: "700",
        taluka: "Mira Road East",
        city: "Mumbai",
        state: "MH",
        street: "Sahar Road",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "2",
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-17-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-14-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-13-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-12-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-10-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-6-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-5-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/29/Location-Plan-8-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Tirupati Balaji, Building no:4, Nearby NEXA, Fullfurnished flat with all the electric applience inbuild in it.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.11252001079102,
        longitude: 72.84897542013033
      },
      {
        zestimate: "18100000",
        finishedSqFt: "1296",
        taluka: "Goregaon West",
        city: "Mumbai",
        state: "MH",
        street: "Sahar Road",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "2",
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-17-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-14-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-13-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-12-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-10-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-6-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-5-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/29/Location-Plan-8-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Tirupati Balaji, Building no:4, Nearby NEXA, Fullfurnished flat with all the electric applience inbuild in it.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.11252001079102,
        longitude: 72.84897542013033
      },
      {
        zestimate: "23800000",
        finishedSqFt: "1638",
        taluka: "Goregaon West",
        city: "Mumbai",
        state: "MH",
        street: "Sahar Road",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "2",
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-17-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-14-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-13-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-12-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-10-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-6-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-5-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/29/Location-Plan-8-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Tirupati Balaji, Building no:4, Nearby NEXA, Fullfurnished flat with all the electric applience inbuild in it.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.11252001079102,
        longitude: 72.84897542013033
      },
      {
        zestimate: "21200000",
        finishedSqFt: "1465",
        taluka: "Goregaon West",
        city: "Mumbai",
        state: "MH",
        street: "Sahar Road",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "2",
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-17-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-14-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-13-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-12-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-10-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-6-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-5-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/29/Location-Plan-8-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Tirupati Balaji, Building no:4, Nearby NEXA, Fullfurnished flat with all the electric applience inbuild in it.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.11252001079102,
        longitude: 72.84897542013033
      },
      {
        zestimate: "8600000",
        finishedSqFt: "700",
        taluka: "Borivali East",
        city: "Mumbai",
        state: "MH",
        street: "Sahar Road",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "2",
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-17-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-14-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-13-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-12-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-10-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-6-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-5-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/29/Location-Plan-8-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Tirupati Balaji, Building no:4, Nearby NEXA, Fullfurnished flat with all the electric applience inbuild in it.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.11252001079102,
        longitude: 72.84897542013033
      },
      {
        zestimate: "36500000",
        finishedSqFt: "2030",
        taluka: "Goregaon West",
        city: "Mumbai",
        state: "MH",
        street: "Sahar Road",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "2",
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-17-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-14-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-13-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-12-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/06/Project-Photo-10-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-6-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/29/Project-Photo-5-Agarwal-Floresta-Maple-Mumbai-5315359_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/29/Location-Plan-8-Agarwal-Floresta-Maple-Mumbai-5315359_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Tirupati Balaji, Building no:4, Nearby NEXA, Fullfurnished flat with all the electric applience inbuild in it.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.11252001079102,
        longitude: 72.84897542013033
      },







      {
        city: "Mumbai",
        state: "MH",
        street: "Dattapada Road",
        taluka: "Borivali East",
        useCode: "Single Family",
        bedrooms: "4",
        bathrooms: "6",
        finishedSqFt: "1500",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "3.12CR",
        index: 2,
        images: [
          "https://img.staticmb.com/mbimages/project/popup/Project-Photo-7-Oberoi-Sky-City-Mumbai-5086084_450_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/07/05/Project-Photo-39-Oberoi-Sky-City-Mumbai-5086084_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/07/05/Project-Photo-38-Oberoi-Sky-City-Mumbai-5086084_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/07/05/Project-Photo-37-Oberoi-Sky-City-Mumbai-5086084_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/07/05/Project-Photo-36-Oberoi-Sky-City-Mumbai-5086084_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/07/05/Project-Photo-35-Oberoi-Sky-City-Mumbai-5086084_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/07/05/Project-Photo-34-Oberoi-Sky-City-Mumbai-5086084_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/07/05/Project-Photo-33-Oberoi-Sky-City-Mumbai-5086084_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/02/23/Project-Photo-30-Oberoi-Sky-City-Mumbai-5086084_444_491.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/02/23/Project-Photo-27-Oberoi-Sky-City-Mumbai-5086084_747_1119.jpg",
          "https://img.staticmb.com/mbimages/project/popup/Project-Photo-12-Oberoi-Sky-City-Mumbai-5086084_450_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/Location-Plan-32-Oberoi-Sky-City-Mumbai-5086084_511_800.jpg"
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Off Western Express Highway, Dattapada Rd, Borivali East, Mumbai, Maharashtra 400066, Details:This is under construction possession will start on Jun 23. Nice skyscraper tower it will well look from the balcony with all modern amenities available is residents Mumbai. Location advantage educational institutions, hospitals, banks, College School shopping malls, and recreation areas being nearby. Oberoi Sky City offers good facilities also very close to western Express Highway and Borivali Railway Station.",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.221850475897007,
        longitude: 72.86438522258356
      },
      {
        city: "Mumbai",
        state: "MH",
        street: "Subash Road",
        taluka: "Andheri East",
        useCode: "Single Family",
        bedrooms: "1",
        bathrooms: "1",
        finishedSqFt: "650",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "1CR",
        index: 2,
        images: [
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/18/Photo_h600_w900/57588287_5_1627220933715_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/18/Photo_h600_w900/57588287_8_1627220933715_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/18/Photo_h600_w900/57588287_7_1627220933715_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/18/Photo_h600_w900/57588287_6_1627220933715_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/18/Photo_h600_w900/57588287_13_1627220933715_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/18/Photo_h600_w900/57588287_4_1627220933715_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/18/Photo_h600_w900/57588287_1_1627220933715_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/18/Photo_h600_w900/57588287_3_1627220933715_600_900.jpg",
          "https://img.staticmb.com/mbimages/project//popup/Location-Plan-4-Asta-Mumbai-5071680_400_477.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Multistorey apartment is available for sale. It is a good location property. Please contact for more details.₹ 1.65 Cr.Andheri East, Mumbai - Western Suburbs, Maharashtra. Semi-Furnished",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.148048709376102,
        longitude: 72.83938778615574
      },
      {
        city: "Mumbai",
        state: "MH",
        street: "Sion Tromby Road",
        taluka: "Chembur",
        useCode: "Single Family",
        bedrooms: "4",
        bathrooms: "6",
        finishedSqFt: "2000",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "6.9CR",
        index: 2,
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/03/17/Project-Photo-11-Purva-Clermont-Mumbai-5235629_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/03/16/Project-Photo-5-Purva-Clermont-Mumbai-5235629_345_1366.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/03/17/Project-Photo-15-Purva-Clermont-Mumbai-5235629_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/03/17/Project-Photo-14-Purva-Clermont-Mumbai-5235629_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/03/17/Project-Photo-9-Purva-Clermont-Mumbai-5235629_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/03/17/Project-Photo-8-Purva-Clermont-Mumbai-5235629_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/03/17/Project-Photo-7-Purva-Clermont-Mumbai-5235629_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/03/17/Project-Photo-5-Purva-Clermont-Mumbai-5235629_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Planned with utmost care and perfection High-rise residential development World Home Series Collection Grand entrance, impeccable designs",
        parkingType: "On-street",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.05095781173085,
        longitude: 72.89998442635721
      },
      {
        city: "Mumbai",
        state: "MH",
        street: "Colony Road",
        taluka: "Ghatkopar",
        useCode: "Single Family",
        bedrooms: "4",
        bathrooms: "6",
        finishedSqFt: "2000",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "3.2CR",
        index: 2,
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/09/06/Project-Photo-17-Sandu-Sanskar-Mumbai-5097357_505_2000.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/06/Project-Photo-13-Sandu-Sanskar-Mumbai-5097357_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/09/06/Project-Photo-12-Sandu-Sanskar-Mumbai-5097357_1200_1600.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/04/12/Location-Plan-17-Sandu-Sanskar-Mumbai-5097357_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/09/06/Floor-Plan-17-Sandu-Sanskar-Mumbai-5097357_1200_1600.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Connectivity to major areas of central and southern Mumbai, and Thane is excellent through the central line, LBS Marg, and the Eastern Express Highway. Further, the Eastern Express Highway, along with easy access to Kurla station (harbour line) provide connectivity to Navi Mumbai. The metro and Andheri-Kurla Road connect to Airport, and western suburbs. The under-construction Metro Line 4 (Wadala-Ghatkopar-Mulund-Kasarvadavali) which is expected by the end of 2022 would enhance connectivity to Mumbai and Thane. Moreover, Mumbai International Airport is located within 5-7 km from Ghatkopar West.",
        parkingType: "Inside",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.046874060209696,
        longitude: 72.90715292764868
      },
      {
        city: "Mumbai",
        state: "MH",
        street: "Piramal Road",
        taluka: "Mulund",
        useCode: "Single Family",
        bedrooms: "4",
        bathrooms: "6",
        finishedSqFt: "2000",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "4.2CR",
        index: 2,
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/08/12/Site-Photos-47-Piramal-Revanta-Mumbai-5098339_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/08/12/Project-Photo-46-Piramal-Revanta-Mumbai-5098339_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2019/05/03/Project-Photo-34-Piramal-Revanta-Mumbai-5098339_390_1000.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/08/12/Site-Photos-48-Piramal-Revanta-Mumbai-5098339_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2019/05/03/Project-Photo-33-Piramal-Revanta-Mumbai-5098339_702_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2019/02/14/Project-Photo-31-Piramal-Revanta-Mumbai-5098339_500_1000.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2019/02/14/Project-Photo-29-Piramal-Revanta-Mumbai-5098339_500_1000.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2018/11/05/Location-Plan-23-Piramal-Revanta-Mumbai-5098339_558_900.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Gate No. 3, Piramal Revanta Sales Office, near Marathon Cosmos, Moti Nagar, Mulund Colony, Mulund West, Mumbai, Maharashtra 400080",
        parkingType: "Inside",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.168472685047387,
        longitude: 72.93593786813133
      },
      {
        city: "Mumbai",
        state: "MH",
        street: "Industrial Road",
        taluka: "Kharghar",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "4",
        finishedSqFt: "1500",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "1.5CR",
        index: 2,
        images: [
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/21/Photo_h600_w900/57548071_1_MG_8695_600_900.JPG",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/21/Photo_h40_w60/57548071_3_MG_8625_40_60.JPG",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/21/Photo_h600_w900/57548071_6_MG_8619_600_900.JPG",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/21/Photo_h600_w900/57548071_8_MG_8622_600_900.JPG",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/21/Photo_h600_w900/57548071_9_MG_8620_600_900.JPG",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/21/Photo_h600_w900/57548071_10_MG_8623_600_900.JPG",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/21/Photo_h600_w900/57548071_4_MG_8689_600_900.JPG",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/21/Photo_h600_w900/57548071_7_MG_8678_600_900.JPG",

          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "CCTV Camera Security Earthquake Resistant Gated Community High Speed Elevators Video Door Security Gazebo Senior Citizen Sitout",
        parkingType: "Inside",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.070042617707927,
        longitude: 73.08437525309327
      },

      {
        city: "Mumbai",
        state: "MH",
        street: "Express Highway Road",
        taluka: "Mira Bhyandar",
        useCode: "Single Family",
        bedrooms: "3",
        bathrooms: "6",
        finishedSqFt: "2000",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "1.5CR",
        index: 2,
        images: [
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/13/Photo_h600_w900/57514577_8_hatsAppImage2021-09-03at21.48.52(1)_600_900.jpeg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/13/Photo_h600_w900/57514577_7_hatsAppImage2021-09-03at21.48.56_600_900.jpeg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/13/Photo_h600_w900/57514577_6_hatsAppImage2021-09-03at21.48.55_600_900.jpeg",
          "https://img.staticmb.com/mbimages/project/popup/2021/06/08/Project-Photo-20-Aaradhya-Highpark-Mumbai-5118027_600_800.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/13/Photo_h600_w900/57514577_4_hatsAppImage2021-09-03at21.48.54(1)_600_900.jpeg",
          "https://img.staticmb.com/mbimages/project/popup/2021/06/08/Project-Photo-16-Aaradhya-Highpark-Mumbai-5118027_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/06/08/Project-Photo-15-Aaradhya-Highpark-Mumbai-5118027_600_800.jpg",

          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "FacilitiesPower Back Up, Lift, Rain Water Harvesting, Club House, Swimming Pool, Gymnasium, Reserved Parking, Security, Water Storage, Private Terrace/Garden, Vaastu Compliant, Service/Goods Lift, Air Conditioned, Visitor Parking, Intercom Facility, Laundry Service, Internet/Wi-Fi Connectivity, DTH Television Facility, Conference Room, Piped Gas, Jogging and Strolling Track, Outdoor Tennis Courts, Fingerprint Access. AddressOn Western Express Highway, Next to Dahisar check Naka, Mumbai, Maharashtra 401107, Mira Road East, Mumbai, Maharashtra. LandmarksMetro Station nearby, Highway Connected , Mall, School,",
        parkingType: "Inside",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.279921028684942,
        longitude: 72.8587169497218
      },
      {
        city: "Mumbai",
        state: "MH",
        street: "Balaji Chowk",
        taluka: "Mira Bhayndar",
        useCode: "Single Family",
        bedrooms: "1",
        bathrooms: "2",
        finishedSqFt: "500",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "50L",
        index: 2,
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/03/11/Project-Photo-1-North-Barcelona--Mumbai-5235507_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/06/01/Project-Photo-10-North-Barcelona--Mumbai-5235507_345_1366.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/03/11/Project-Photo-8-North-Barcelona--Mumbai-5235507_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/03/11/Project-Photo-7-North-Barcelona--Mumbai-5235507_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/03/11/Project-Photo-6-North-Barcelona--Mumbai-5235507_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/03/11/Project-Photo-4-North-Barcelona--Mumbai-5235507_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/03/11/Project-Photo-3-North-Barcelona--Mumbai-5235507_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/03/11/Location-Plan-10-North-Barcelona--Mumbai-5235507_600_800.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "North Barcelona invites residents to experience open living & peaceful lifestyle. A place where open spaces are abound and amenities allow communities to interact in new ways. Spread across 3 zones, there are enough engagement points to ensure that one is spending more time outside of the four walls of the apartment.",
        parkingType: "Inside",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.299728076709027,
        longitude: 72.84689986944353
      },
      {
        city: "Mumbai",
        state: "MH",
        street: "SV Road",
        taluka: "Bhayandar",
        useCode: "Single Family",
        bedrooms: "3",
        bathrooms: "6",
        finishedSqFt: "1500",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "2CR",
        index: 2,
        images: [
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/24/Photo_h600_w900/57345585_9_PropertyImage673-8797008280948_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/24/Photo_h600_w900/57345585_8_PropertyImage377-1386695382686_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/24/Photo_h600_w900/57345585_3_PropertyImage313-3812855926225_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/24/Photo_h600_w900/57345585_4_PropertyImage219-0514603294471_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/24/Photo_h600_w900/57345585_7_PropertyImage671-7607643786872_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/24/Photo_h600_w900/57345585_6_PropertyImage420-24551264169264_600_900.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2018/05/21/Project-Photo-19-Samriddhi-Mumbai-5011613_667_1000.JPG",
          "https://img.staticmb.com/mbimages/project/popup/2018/05/21/Project-Photo-18-Samriddhi-Mumbai-5011613_667_1000.JPG",
          "https://img.staticmb.com/mbimages/project//popup/Location-Plan-9-Samriddhi-Mumbai-5011613_689_850.jpg",

          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Power Back Up, Lift, Rain Water Harvesting, Club House, Swimming Pool, Gymnasium, Park, Reserved Parking, Security, Water Storage, AG Samriddhi Private TerraceGarden, Vaastu Compliant, ServiceGoods Lift, Air Conditioned, Visitor Parking, Intercom Facility, Maintenance Staff, Laundry Service, InternetWiFi Connectivity, DTH Television Facility, RO Water System, Banquet Hall, CafeteriaFood Court, Conference Room, Piped Gas, Jogging and Strolling Track, Outdoor Tennis Courts, Health club with Steam Jaccuzi, Fireplace",
        parkingType: "Inside",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.29373343273329,
        longitude: 72.8661259425718
      },
      {
        city: "Mumbai",
        state: "MH",
        street: "Station Road",
        taluka: "Nalasopara",
        useCode: "Single Family",
        bedrooms: "3",
        bathrooms: "6",
        finishedSqFt: "1500",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "80L",
        index: 2,
        images: [

          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/10/Photo_h600_w900/57464125_5_0197250-734a-4d3a-aa19-1e30dcf88805_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/10/Photo_h600_w900/57464125_4_f5fc976-e6fd-42f5-b04b-ee33aba55124_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/10/Photo_h600_w900/57464125_2_4313acb-8186-4e50-b058-be33cb31bd92_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/10/Photo_h600_w900/57464125_3_815d99c-1098-4dde-b75f-e7ce41812301_600_900.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2020/08/11/Project-Photo-8-Sahakar-Premier-Mumbai-5109603_562_1000.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2020/08/11/Project-Photo-7-Sahakar-Premier-Mumbai-5109603_691_921.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2020/08/11/Project-Photo-6-Sahakar-Premier-Mumbai-5109603_691_921.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2020/08/11/Project-Photo-5-Sahakar-Premier-Mumbai-5109603_562_1000.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2020/08/11/Project-Photo-4-Sahakar-Premier-Mumbai-5109603_562_1000.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2020/08/11/Project-Photo-3-Sahakar-Premier-Mumbai-5109603_1777_1000.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2020/08/11/Project-Photo-1-Sahakar-Premier-Mumbai-5109603_1777_1000.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Sahakar Premier in Mira Road East, Mira Road And Beyond by Premier Realty is a residential project.The project offers Apartment with perfect combination of contemporary architecture and features to provide comfortable living.The Apartment are of the following configurations 1BHK and 2BHK.The size of the Apartment ranges in between 32.0 Sq. mt and 51.47 Sq. mt. Sahakar Premier price ranges from 50.00 Lacs to 76.00 Lacs.",
        parkingType: "Inside",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.41438249278307,
        longitude: 72.81637939693526
      },
      {
        city: "Mumbai",
        state: "MH",
        street: "RD Road",
        taluka: "Nalasopara",
        useCode: "Single Family",
        bedrooms: "1",
        bathrooms: "2",
        finishedSqFt: "1500",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "40L",
        index: 2,
        images: [
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/19/Photo_h600_w900/57595887_2_hatsAppImage2021-03-11at16.46.57(1)_600_900.jpeg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/19/Photo_h600_w900/57595887_1_hatsAppImage2021-03-11at16.46.58_600_900.jpeg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/19/Photo_h600_w900/57595887_3_hatsAppImage2021-03-11at16.46.54_600_900.jpeg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/19/Photo_h600_w900/57595887_4_hatsAppImage2021-03-11at16.46.55_600_900.jpeg"

          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "1 bhk flat on sale prime location ,VVCMC approved project,nalasopara west.Power Back Up, Lift, Club House, Reserved Parking, Security, Water Storage, Visitor Parking, Intercom Facility, Maintenance Staff, Waste Disposal, Internet/Wi-Fi Connectivity, DTH Television Facility, Jogging and Strolling Track.Nalasopara West, Mumbai, Samel Pada, Mumbai - North Mumbai, Maharashtra",
        parkingType: "Inside",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.416972881328228,
        longitude: 72.83097061236006
      },
      {
        city: "Mumbai",
        state: "MH",
        street: "Deshpande Road",
        taluka: "Virar",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "4",
        finishedSqFt: "1500",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "40L",
        index: 2,
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/10/12/Project-Photo-28-Mayfair-Virar-Gardens-Mumbai-5000676_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/12/Project-Photo-30-Mayfair-Virar-Gardens-Mumbai-5000676_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/10/12/Project-Photo-29-Mayfair-Virar-Gardens-Mumbai-5000676_600_800.jpg",

          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Mayfair Housing Virar Gardens Phase 2 is Developed By Mayfair Housing. Affordable flats in Virar.everyone deserve to live a life which involves no stress with an abundance of luxury. upgrade your view to enjoy emerald ,gorgeous, scenery and breathtakingly Beautiful views. Codename SARA Virar offers vide verities of Amenities one and all. from kids to adults every one will have somethings to look forwards to, top-notch echo facilities are guaranteed to make your living experience here enjoyable and memorable. The open green area, together with amenities like the gym, the swimming pool and the jogging track ensure the residents a healthy and fit lifestyle. Other necessary amenities like power backup, uninterrupted water supply, multipurpose hall, etc. are also available.",
        parkingType: "Inside",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.45694999813327,
        longitude: 72.80319588480172
      },
      {
        city: "Mumbai",
        state: "MH",
        street: "Highway Road",
        taluka: "Virar",
        useCode: "Single Family",
        bedrooms: "3",
        bathrooms: "6",
        finishedSqFt: "1500",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "70L",
        index: 2,
        images: [
          "https://img.staticmb.com/mbimages/project/popup/2021/07/27/Project-Photo-16-Blu-Pearl-Mumbai-5123999_345_1366.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/07/19/Project-Photo-15-Blu-Pearl-Mumbai-5123999_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/07/19/Project-Photo-7-Blu-Pearl-Mumbai-5123999_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/07/19/Project-Photo-14-Blu-Pearl-Mumbai-5123999_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/07/19/Project-Photo-13-Blu-Pearl-Mumbai-5123999_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/07/19/Project-Photo-12-Blu-Pearl-Mumbai-5123999_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/07/19/Project-Photo-11-Blu-Pearl-Mumbai-5123999_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/07/19/Project-Photo-9-Blu-Pearl-Mumbai-5123999_600_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/07/19/Project-Photo-8-Blu-Pearl-Mumbai-5123999_600_800.jpg",
          "https://img.staticmb.com/mbimages/project//popup/2021/07/19/Location-Plan-2-Blu-Pearl-Mumbai-5123999_1200_1600.jpg",

          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Huge and spacious rooms of international standard with all amenities and scenic. Premium apartment. Luxury lifestyle.Power Back Up, Lift, Rain Water Harvesting, Swimming Pool, Gymnasium, Park, Reserved Parking, Security, Water Storage, Private Terrace/Garden, Vaastu Compliant, Service/Goods Lift, Intercom Facility, Maintenance Staff, Waste Disposal, Laundry Service, Internet/Wi-Fi Connectivity, DTH Television Facility, Jogging and Strolling Track, Skyline View, Private pool , Sea facing, Skydeck, Theme based Architectures, Fireplace.",
        parkingType: "Inside",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.4515264394999,
        longitude: 72.78881601001511
      },
      {
        city: "Mumbai",
        state: "MH",
        street: "Lokmanya Tilak Road",
        taluka: "Borivali",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "4",
        finishedSqFt: "1500",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "1.2CR",
        index: 2,
        images: [
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/15/Photo_h600_w900/57540017_5_aster-bedroom-malvigajjar_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/15/Photo_h600_w900/57540017_6_Living-Dinning-Bommanahalli_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/15/Photo_h600_w900/57540017_1_imple-Indian-Kitchen-Design-U-Shaped-Layout-1024x768_600_900.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/05/07/Project-Photo-71-Rivali-Park-Mumbai-5022300_533_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/05/07/Project-Photo-70-Rivali-Park-Mumbai-5022300_533_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/05/07/Project-Photo-69-Rivali-Park-Mumbai-5022300_526_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/05/07/Project-Photo-68-Rivali-Park-Mumbai-5022300_526_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2021/05/07/Project-Photo-64-Rivali-Park-Mumbai-5022300_526_800.jpg",
          "https://img.staticmb.com/mbimages/project/popup/Project-Photo-52-Rivali-Park-Mumbai-5022300_600_800.jpg",
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "NO BROKERAGE APPLICABLE.. this is 2BHK specious flat .. its swimmming pool and amenities facing flat . all modern amenities and connected to all major roads. good township and good place .Power Back Up, Lift, Rain Water Harvesting, Club House, Swimming Pool, Gymnasium, Park, Reserved Parking, Security, Water Storage, Vaastu Compliant, Service/Goods Lift, Visitor Parking, Intercom Facility, Maintenance Staff, Laundry Service, Internet/Wi-Fi Connectivity, DTH Television Facility, Banquet Hall, Piped Gas, Jogging and Strolling Track, Outdoor Tennis Courts, Theme based Architectures, Fireplace, Smart Home",
        parkingType: "Inside",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.229369901330823,
        longitude: 72.84926790483019
      },
      {
        city: "Mumbai",
        state: "MH",
        street: "Court Lane",
        taluka: "Borivali",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "4",
        finishedSqFt: "1500",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "1.3CR",
        index: 2,
        images: [

          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "",
        parkingType: "Inside",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.231375678403996,
        longitude: 72.85375255815637
      },
      {
        city: "Mumbai",
        state: "MH",
        street: "Kastur Park Road",
        taluka: "Borivali",
        useCode: "Single Family",
        bedrooms: "1",
        bathrooms: "2",
        finishedSqFt: "1500",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "98L",
        index: 2,
        images: [


          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "",
        parkingType: "Inside",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.222896231195616,
        longitude: 72.84693022709462
      },
      {
        city: "Mumbai",
        state: "MH",
        street: "RSC Road no. 6",
        taluka: "Borivali",
        useCode: "Single Family",
        bedrooms: "1",
        bathrooms: "2",
        finishedSqFt: "1500",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "94L",
        index: 2,
        images: [


          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "",
        parkingType: "Inside",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.21058294425017,
        longitude: 72.81996037877808
      },
      {
        city: "Mumbai",
        state: "MH",
        street: "Devidas Road",
        taluka: "Borivali",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "4",
        finishedSqFt: "1500",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "1.4CR",
        index: 2,
        images: [
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/10/Photo_h600_w900/57410633_8_PropertyImage3-0661657575109524_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/10/Photo_h600_w900/57410633_2_PropertyImage428-3378629034996_600_900.jpg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/10/Photo_h600_w900/57410633_3_PropertyImage213-5632939447607_600_900.jpg"

          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Rivali Park in Borivali East, Mumbai AndheriDahisar by CCI Projects and G Corp is a residential project. Highlights of project IGBC Gold Rating Precertification.Uninterrupted Views of Borivali National Park. The project offers Apartment with perfect combination of contemporary architecture and features to provide comfortable living.",
        parkingType: "Inside",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.240533378780498,
        longitude: 72.84789405390359
      },
      {
        city: "Mumbai",
        state: "MH",
        street: "Shimpali Road",
        taluka: "Borivli",
        useCode: "Single Family",
        bedrooms: "1",
        bathrooms: "2",
        finishedSqFt: "1500",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "80L",
        index: 2,
        images: [

          "https://img.staticmb.com/mbimages/project/popup/Project-Photo-52-Rivali-Park-Mumbai-5022300_600_800.jpg"

          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "3BHK 1040 carpet area, higher floor, new building nearing possession in shimpoli prime location. Big room sizes.Lift, Reserved Parking, Security, Vaastu Compliant, Visitor Parking, Intercom Facility, Maintenance Staff, Jogging and Strolling Track.",
        parkingType: "Inside",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.222717715999007,
        longitude: 72.84614070048536
      },
      {
        city: "Mumbai",
        state: "MH",
        street: "Gorai Link Road",
        taluka: "Borivali",
        useCode: "Single Family",
        bedrooms: "2",
        bathrooms: "4",
        finishedSqFt: "1500",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "1.35CR",
        index: 2,
        images: [

          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/12/Photo_h600_w900/57496917_3_hatsAppImage2021-10-04at14.18.40_600_900.jpeg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/12/Photo_h600_w900/57496917_5_hatsAppImage2021-10-04at14.18.40(2)_600_900.jpeg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/12/Photo_h600_w900/57496917_6_hatsAppImage2021-10-04at14.18.40(1)_600_900.jpeg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/12/Photo_h600_w900/57496917_7_hatsAppImage2021-10-04at14.18.39_600_900.jpeg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/12/Photo_h600_w900/57496917_16_hatsAppImage2021-10-04at14.18.37(3)_600_900.jpeg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/12/Photo_h600_w900/57496917_14_hatsAppImage2021-10-04at14.18.38(2)_600_900.jpeg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/12/Photo_h600_w900/57496917_10_hatsAppImage2021-10-04at14.18.38(4)_600_900.jpeg",
          "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Oct/12/Photo_h600_w900/57496917_8_hatsAppImage2021-10-04at14.18.39(2)_600_900.jpeg"
          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "Power Back Up, Lift, Reserved Parking, Security, Water Storage, Visitor Parking, Maintenance Staff, Piped Gas",
        parkingType: "Inside",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.23036598938469,
        longitude: 72.82811047807792
      },
      {
        city: "Mumbai",
        state: "MH",
        street: "Jayant Sawan Road",
        taluka: "Borivali",
        useCode: "Single Family",
        bedrooms: "1",
        bathrooms: "2",
        finishedSqFt: "1500",
        zpid: "2101515056",
        rentzestimate: "2,350",
        zestimate: "89L",
        index: 2,
        images: [

          "https://img.staticmb.com/mbimages/project/popup/2019/03/04/Project-Photo-23-Rustomjee-Summit-Mumbai-5018803_667_1000.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2019/03/04/Project-Photo-25-Rustomjee-Summit-Mumbai-5018803_445_903.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2019/03/04/Project-Photo-24-Rustomjee-Summit-Mumbai-5018803_667_1000.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2019/03/04/Project-Photo-22-Rustomjee-Summit-Mumbai-5018803_667_1000.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2019/03/04/Project-Photo-21-Rustomjee-Summit-Mumbai-5018803_667_1000.jpg",
          "https://img.staticmb.com/mbimages/project/popup/2019/03/04/Project-Photo-19-Rustomjee-Summit-Mumbai-5018803_667_1000.jpg",

          // `https://maps.googleapis.com/maps/api/streetview?size=400x250&location=37.648635,-122.430063&fov=80&heading=70&pitch=0&key=AIzaSyDcXNX_SoIFTdYVs0QPk8e9ST6e9YwwN2c`

        ],
        desc: "East west, 876 sq ft carpet, 2bhk can be converted 3bhk, recently renovated, newly built kitchen,1 master bedroom,dedicated open parking.",
        parkingType: "Inside",
        yearBuilt: "Unknown",
        zipcode: "94114",
        latitude: 19.23904829883075,
        longitude: 72.85765428587878
      },

    ],
    Display: { DashBoard: true },
    Input: { passed: true }
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(houses));
  }, [houses]);
  useEffect(() => {
    //console.log(GetData('884 devon', 'Kearny', "nj"))
    /*
      if(houses.Homes.length < 1) {
        dispatch({type:'LOADING', loading: true})
        let UserInfo = {
          addr: "20 devon st",
          city: "East rutherford",
          sta: "NJ",
        }
        GetHouseInfo(UserInfo)
        .then(data => { 
          console.log(data)
          if (data) {
              dispatch({type:'SEARCH_ZPID', addr:UserInfo.addr, city:UserInfo.city, sta:UserInfo.sta , info: data, passed: true, loading: false})
          } else {
              dispatch({type:'SEARCH_ZPID', addr:UserInfo.addr, city:UserInfo.city, sta:UserInfo.sta , info: [], passed: false, loading: false})
          }
        })
      }
    }, []);
    */
  });
  return (
    <StateContext.Provider value={{ houses, dispatch }}>
      {/* <UserContext.Provider value={{ reducer, initialState }}> */}
      {children}
      {/* </UserContext.Provider> */}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext)

// export const UserStateValue = () => useContext(UserContext)

export { StateContext };





