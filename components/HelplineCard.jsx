export default function ResourceCard(props){
    return(
        <a href={props.helpObj.Link} target="_blank" className="helpLink">
        <div className="helplineCard">
            <img src={props.imgObj} alt="Unable" className='helpImg' />
            <div className="helpDetails">
                <div className="helpDesc">{props.helpObj.Desc}</div>
                <div className="helpPh">{props.helpObj.Phone}</div>
            </div>
        </div>
        <style jsx>
            {`
                .helplineCard{
                    display: flex;
                    width: 480px;
                    background-color: #ffff;
                    padding: 18px 24px;
                    // margin: 15px 10px 20px 15px;
                    border-radius: 7px;
                    align-items: center;
                    justify-content:space-between;
                    border:2px solid #b0b0b0;
                }
                .helplineCard:hover{
                    border:2px solid #420202;
                    border:2px solid #570600;
                }
                .helpImg{
                    height:100px
                }
                .helpDetails{
                    margin-left: 15px;
                }

                .helpDesc{
                    font-size: 20px;
                }

                .helpPh{
                    margin-top: 2px;
                    font-size: 17px;
                }

                @media screen and (max-width:400px) {
                    .helplineCard{
                        width: 350px;
                    }
                    .helpDesc {
                        font-size: 15px;
                    }
                    .helpPh {
                        font-size: 14px;
                    }
                    .helpLink{
                        font-size: 14px;
                    }
                }

                @media screen and (min-width:600px) and (max-width:1300px){
                    .helplineCard {
                        width: 540px;
                    }
                    .helpImg {
                        width: 180px;
                    }
                    .helpDesc {
                        font-size: 25px;
                    }
                    .helpDetails {
                        margin-left: 24px;
                    }
                    .helpPh {
                        font-size: 24px;
                    }

                    .helpLink {
                        font-size: 24px;
                    }
                }
            `}
        </style>
        </a>
    );
}