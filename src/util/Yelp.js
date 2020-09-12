const apiKey = 'QueTH0ZvSaqw3INdulNM4AAL9BXc5JiJ2Lm4KOSlUsMk8oQnDhrDQ_1Jn61LziCoWLJdHY4fOvQD0zNMbyIHaAnUOn_lsJMH9C4zVklJJwWexFErTeV78JCLCU9YX3Yx';


export const Yelp = {

function search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    { headers: { Authorization: `Bearer ${apiKey}`}
    }).then(response => response.json())
    .then((jsonResponse) => {
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map( (business) => {
                {id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories.title,
                rating: business.rating,
                reviewCount: business.review_count } }
            );
        }
    });
}

};