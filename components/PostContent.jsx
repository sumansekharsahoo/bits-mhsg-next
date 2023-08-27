import React from 'react'
import moment from 'moment'
const PostContent = ({post}) => {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;

        if (obj) {
        if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
        }

        if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
        }

        if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
        }
        }

        switch (type) {
        case 'heading-three':
            return <h3 key={index} className="text-3xl md:text-4xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
        case 'heading-two':
            return <h2 key={index} className="text-2xl md:text-3xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
        case 'heading-one':
            return <h1 key={index} className="text-xl md:text-2xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h1>;
        case 'paragraph':
            return <p key={index} className="mb-8 text-md md:text-lg">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
        case 'heading-four':
            return <h4 key={index} className="text-xl md:text-2xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
        case 'heading-five':
            return <h5 key={index} className="text-lg md:text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h5>;
        case 'heading-six':
            return <h6 key={index} className="text-lg md:text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h6>;
        case 'image':
            return (
            <img
                key={index}
                alt={obj.title}
                height={obj.height}
                width={obj.width}
                src={obj.src}
            />
            );
        default:
            return modifiedText;
        }
    };
    
  return (
    <>
        <div className="bg-white shadow-lg rounded-lg p-2.5 md:p-5 lg:p-12 lg:pt-10 pb-4 md:pb-12 mb-6 flex flex-col items-center">
        <h1 className="mb-8 text-2xl md:text-3xl font-semibold">{post.title}</h1>
        <img src={post.featuredImage.url} alt="" className="artImg object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
        
        <div className=" px-1 md:px-4 lg:px-0 my-5">
          <div className="flex items-center w-full mb-6 justify-center">
            <div className=" flex items-center justify-center lg:mb-0 lg:w-auto md:mr-24 mr-12">
              <img
                alt={post.author.name}
                height="40px"
                width="40px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
              />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg md:text-xl">{post.author.name}</p>
            </div>
            <div className="font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle text-lg md:text-xl">{moment(post.date).format('MMM DD, YYYY')}</span>
            </div>
          </div>
            <div className='catg text-lg md:text-xl text-center mb-8 font-semibold	'><span >Categories: </span>{post.categories.map((catg)=>(
                  <a href={`/category/${catg.slug}`} key={catg.name} className={`catgBox ${catg.name.length%2===1?'bg-[#edf4fe] text-[#4d51b8]':'bg-[#fceff4] text-[#e35b83]'}`}>#{catg.name}</a>
                ))}  </div>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
      <style jsx>
        {`
          .catgBox{
            padding:2px 3px;
            // background-color:#f0f5ec;
            border-radius:5px;
            border:1px solid #b0b0b0;
            margin-right:5px;
            // color:#689e46
          }
          .artImg{
            height:450px;
          }
          @media screen and (max-width:600px){
            .artImg{
              height:auto;
            }
          }
        
        `}
      </style>

    </>
  )
}

export default PostContent