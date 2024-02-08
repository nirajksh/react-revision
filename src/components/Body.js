import React from "react";
import {IMG_CDN_URL} from "../common.js"



//https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf
const Body = () => {
  const restaurantData = 
  [
    {
      info: {
        id: "251514",
        name: "Bikaner Sweets And Pastry Shop",
        cloudinaryImageId: "xcjaxvxnuupuf9vo1ux2",
        locality: "Boring Road",
        areaName: "Sri Krishnapuri",
        costForTwo: "₹420 for two",
        cuisines: ["Bakery", "Sweets"],
        avgRating: 4.5,
        veg: true,
        parentId: "45906",
        avgRatingString: "4.5",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 1.5,
          serviceability: "SERVICEABLE",
          slaString: "23 mins",
          lastMileTravelString: "1.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-24 22:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        select: true,
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/bikaner-sweets-and-pastry-shop-boring-road-sri-krishnapuri-patna-251514",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "381297",
        name: "My Bakery World",
        cloudinaryImageId: "g4rf2hu8zhacjj6cvtcr",
        locality: "Mandiri Nala",
        areaName: "Lodipur",
        costForTwo: "₹534 for two",
        cuisines: ["Desserts"],
        avgRating: 4.2,
        veg: true,
        parentId: "251260",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "34 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-24 23:55:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/my-bakery-world-mandiri-nala-lodipur-patna-381297",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "324612",
        name: "Benzoz Pizza",
        cloudinaryImageId: "h00vciwuc7ctejcx24qc",
        locality: "Boring Canal Road",
        areaName: "Sri Krishnapuri",
        costForTwo: "₹200 for two",
        cuisines: ["Italian"],
        avgRating: 3.6,
        parentId: "43487",
        avgRatingString: "3.6",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 2,
          serviceability: "SERVICEABLE",
          slaString: "36 mins",
          lastMileTravelString: "2.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-24 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹349",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/benzoz-pizza-boring-canal-road-sri-krishnapuri-patna-324612",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "230250",
        name: "Pour Tous",
        cloudinaryImageId: "lnjmdcml4anmh5hhdwv0",
        locality: "Boring Road",
        areaName: "Patliputra Colony",
        costForTwo: "₹250 for two",
        cuisines: ["Biryani", "Chinese", "Kebabs"],
        avgRating: 4.4,
        parentId: "160184",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "32 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-24 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/pour-tous-boring-road-patliputra-colony-patna-230250",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "89715",
        name: "Dragon Flames Delivery",
        cloudinaryImageId: "vju93xt1vvirqcrdquqy",
        locality: "Boring Road",
        areaName: "Sri Krishnapuri",
        costForTwo: "₹313 for two",
        cuisines: ["Chinese"],
        avgRating: 4.4,
        parentId: "74654",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 1.1,
          serviceability: "SERVICEABLE",
          slaString: "27 mins",
          lastMileTravelString: "1.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-24 22:15:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/dragon-flames-delivery-boring-road-sri-krishnapuri-patna-89715",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "698241",
        name: "Domino's Pizza",
        cloudinaryImageId: "0e7bc46a0e74d28b0d88e1fad2830dbc",
        locality: "Sheeraj Complex",
        areaName: "Buddha Colony",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.2,
        parentId: "2456",
        avgRatingString: "4.2",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 25,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-24 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹299",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/dominos-pizza-sheeraj-complex-buddha-colony-patna-698241",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "261077",
        name: "La Pino'z Pizza",
        cloudinaryImageId: "rxj2ustl2df033ajwlad",
        locality: "patliputra",
        areaName: "Patliputra Colony",
        costForTwo: "₹300 for two",
        cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
        avgRating: 4,
        parentId: "4961",
        avgRatingString: "4.0",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 1.5,
          serviceability: "SERVICEABLE",
          slaString: "29 mins",
          lastMileTravelString: "1.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-25 02:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹549",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-patliputra-patliputra-colony-patna-261077",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "81234",
        name: "KFC",
        cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
        locality: "Vasundara Matro mall",
        areaName: "Kidwaipuri",
        costForTwo: "₹450 for two",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        avgRating: 4.3,
        parentId: "547",
        avgRatingString: "4.3",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 0.7,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          lastMileTravelString: "0.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-25 00:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/kfc-vasundara-matro-mall-kidwaipuri-patna-81234",
        type: "WEBLINK",
      },
    }
  ]
 console.log(restaurantData)
 
const RestaurantCard=({name,locality,cloudinaryImageId,avgRating})=>{
  console.log(name)
  return(<div className="container">
     <div className="card">
          <img className="res_img" alt="img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
         <ul>
          <li>{name} </li>
          <li>{locality}</li>
          <li>Rating{avgRating}</li>

         </ul>

         </div>
  </div>)
}


  return (
    <div className="container">
     {
      restaurantData && restaurantData.map((res)=>{
        return <RestaurantCard {...res.info} key={res.info.id} />
      })

     }
    </div>
  );
};

export default Body;
