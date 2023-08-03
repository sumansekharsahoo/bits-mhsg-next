import {request, gql} from 'graphql-request'

const graphqlAPI= process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

export const getPosts = async ()=>{

    const query= gql`
        query MyQuery {
            postsConnection {
                edges {
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
    `
    const result= await request(graphqlAPI, query);
    return result.postsConnection.edges;
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

export const getEvents = async()=>{
    const query=gql`
        query GetEvents {
            eventsConnection {
                edges {
                    node {
                        date
                        time
                        eventDesc
                        eventImg {
                            url
                        }
                        eventName
                        featuredEvent
                        venue
                        link
                    }
                }
            }
        }
    `
    const result = await request(graphqlAPI,query);
    return result.eventsConnection.edges;
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