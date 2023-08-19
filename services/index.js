import {request, gql} from 'graphql-request'

const graphqlAPI= process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

export const getPosts = async ()=>{

    const query= gql`
        query GetPosts {
            posts(orderBy: date_DESC) {
                createdAt
                date
                slug
                title
                excerpt
                author {
                bio
                name
                id
                photo {
                    url
                }
                }
                featuredImage {
                url
                }
                categories {
                name
                slug
                }
            }
            }
    `
    const result= await request(graphqlAPI, query);
    return result.posts;
};

export const getCategories=async()=>{
    const query=gql`
        query GetCategories{
            categories{
                name
                slug
            }
        } 
    `
    const result= await request(graphqlAPI,query);
    return result.categories;
};

export const getPostDetails = async (slug)=>{

    const query= gql`
        query GetPostDetails($slug: String!) {
            post(where:{slug: $slug}){
                author {
                    bio
                    name
                    id
                    photo {
                        url
                    }
                }
                createdAt
                slug
                title
                date
                excerpt
                featuredImage {
                    url
                }
                categories {
                    name
                    slug
                }
                content{
                    raw
                }
            }
        }
    `
    const result= await request(graphqlAPI, query,{slug});
    return result.post;
};

// export const getEvents = async()=>{
//     const query=gql`
//         query GetEvents {
//             eventsConnection {
//                 edges {
//                     node {
//                         date
//                         time
//                         eventDesc
//                         eventImg {
//                             url
//                         }
//                         eventName
//                         featuredEvent
//                         venue
//                         link
//                     }
//                 }
//             }
//         }
//     `
//     const result = await request(graphqlAPI,query);
//     return result.eventsConnection.edges;
// }

export const getEvents = async()=>{
    const query=gql`
        query GetEvents {
            events(orderBy: endDate_DESC) {
                eventName
                eventDesc
                upcomingEvent
                endDate
                venue
                time
                date
                eventImg {
                url
                }
                link
            }
        }
    `
    const result = await request(graphqlAPI,query);
    return result.events;
}

export const getUpcomingEvents = async()=>{
    const query=gql`
        query GetUpcomingEvents{
            events(where:{upcomingEvent:true}){
                eventName
                eventDesc
                upcomingEvent
                endDate
                venue
                time
                date
                eventImg {
                url
                }
                link
            }
        }
    `
    const result= await request(graphqlAPI,query);
    return result.events;
}
export const getPastEvents = async()=>{
    const query=gql`
        query GetPastEvents{
            events(where:{upcomingEvent:false}){
                eventName
                eventDesc
                upcomingEvent
                endDate
                venue
                time
                date
                eventImg {
                url
                }
                link
            }
        }
    `
    const result= await request(graphqlAPI,query);
    return result.events;
}



export const getMusic = async()=>{
    const query=gql`
        query GetMusic {
            musicsConnection {
                edges {
                node {
                    backgroundColor {
                        hex
                    }
                    fontColor {
                        hex
                    }
                    image {
                        url
                    }
                    link
                    playlistTitle
                }
                }
            }
        }
    `
    const result = await request(graphqlAPI,query);
    return result.musicsConnection.edges;
}

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            date
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};

export const getRecentPosts=async()=>{
    const query = gql`
        query GetPostDetails(){
            posts(
                orderBy: date_ASC
                last: 3
            ){
                title
                featuredImage{
                    url
                }
                date
                slug
                author{
                    name
                }
            }
        }
    `
    
    const result= await request(graphqlAPI, query);
    return result.posts;
}

export const getRecentEvents=async()=>{
    const query = gql`
        query GetEventDetails(){
            events(
                orderBy: endDate_DESC
                first: 3
            ){
                eventImg {
                    url
                }
                eventName
                date
                venue
                link
            }
        }
    `
    
    const result= await request(graphqlAPI, query);
    return result.events;
}