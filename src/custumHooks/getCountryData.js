function getCountryData ( data ) {

const { country_name, title, description, id,rating,
        hoverContent:{
            price,
            image_url:hoverImg,
            package: {
            date: { totalDays,from,to },
            type,guide
            }
        },
        locations:[
            { image_url:img1, city_name:city1 },
            { image_url:img2, city_name:city2 },
            { image_url:img3, city_name:city3 },
            { image_url:img4, city_name:city4 }
        ]
        } = data;

return { id, country_name, title, description, type, guide,
            img1, img2, img3, img4, city1, city2, city3, city4,
            price, hoverImg, totalDays, from, to, rating }
};

export default getCountryData;