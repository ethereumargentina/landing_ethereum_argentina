import Accordeon from "../components/accordeon"
import { useTranslation } from 'next-i18next'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import {
  Box,
  Link as LinkUI,
  Typography,
} from '@mui/material'

import BuildathonSection from '../components/sections/buildathon'
import AgendaSection from '../components/sections/agenda'
import SponsorsSection from '../components/sections/sponsors'
import EventPartners from '../components/sections/event-partners'
import Background from '../components/background'
import ServicesSection from '../components/sections/services'
import BePartSection from '../components/sections/be-part'
import logo from '../public/assets/home/logo-text.svg'

import twitter from '../public/assets/home/social/twitter.svg';
import telegram from '../public/assets/home/social/telegram.svg';
import instagram from '../public/assets/home/social/instagram.svg';
import linkedin from '../public/assets/home/social/linkedin.svg';


import background2 from '../public/assets/home/background-2.png';
import background3 from '../public/assets/home/background-3.png';
import background4 from '../public/assets/home/background-4.png';
import background5 from '../public/assets/home/background-5.png';
import background6 from '../public/assets/home/background-6-2.png';


import DrawerAppBar from '../components/header/navbar'
import MediaPartners from '../components/sections/media-partner'

interface Props {

}

const buttonTickets = {
  fontFamily: 'becker-wood-type',
  backgroundColor: 'common.black',
  color: 'common.white',
  textAlign: 'center',
  borderRadius: '30px',
  px: '1rem',
  py: '0.4rem',
  textOverflow: 'ellipsis',
  minWidth: '170px',
  fontSize: '1.5em',
}

const fontBecker = {
  fontFamily: 'becker-wood-type',
  fontSize: '1rem',
  color: 'primary.main'
}

const Home = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { t } = useTranslation('home');

  return (
    <>
      <DrawerAppBar />
      {/* 
      <Box component="nav" bgcolor={'#F9B300'}>
        <Typography sx={{ ...fontBecker, textAlign: 'center', py: 1 }}>
          {t('navNextTickets')}
        </Typography>
      </Box> 
      */}

      <main>
        <section className="home">
          <div>
            <Image
              alt="Ethereum Argentina"
              src={logo}
            />
            <h2>{t('eventDate')}</h2>
            <Box sx={buttonTickets}>
              <LinkUI
                href="https://www.youtube.com/@EthereumArgentina"
                rel="noopener"
                target="_blank"
                color={'common.white'}
                style={{ cursor: 'pointer' }}
                underline="hover">
                {t('buttonStreamingText')}
              </LinkUI>
            </Box>
          </div>
        </section>
        <ServicesSection />
        <Background bgColor={'#0B1628'} src={background2.src} />
        <BePartSection />
        <Background bgColor={'#C1E9EF'} src={background3.src} />
        <BuildathonSection />
        <Background bgColor={'#0B1628'} src={background4.src} />
        <AgendaSection />
        <Background bgColor={'#0B1628'} src={background5.src} />
        <SponsorsSection />
        <EventPartners />
        <MediaPartners />
        <Background bgColor={'primary.main'} src={background6.src} />
        <section className="faqs" id="faqs">
          <h3>{t('faqs')}</h3>
          <div className="row">
            <Accordeon title={t('faq1')} content={t('faq1r')} />
            <Accordeon title={t('faq2')} content={t('faq2r')} />
            <Accordeon title={t('faq3')} content={t('faq3r')} />
            <Accordeon title={t('faq4')} content={t('faq4r')} />
            <Accordeon title={t('faq5')} content={t('faq5r')} />
          </div>
        </section>

        <footer>
          <h3>{t('followSocial')}</h3>
          <ul>
            <li><a href="https://t.co/KBr3P3kDS5"><Image src={telegram} alt="Telegram" width={40} /></a></li>
            <li><a href="https://twitter.com/EtherArgentina" target={'_blank'} rel="noreferrer"><Image src={twitter} alt="Twitter" width={40} /></a></li>
            <li><a href="https://www.instagram.com/etherargentina/" target={'_blank'} rel="noreferrer"><Image src={instagram} alt="Instagram" width={40} /></a></li>
            <li><a href="https://www.linkedin.com/company/ethereumargentina" target={'_blank'} rel="noreferrer"><Image src={linkedin} alt="Linkedin" width={40} /></a></li>
          </ul>
        </footer>
      </main>
      <style jsx>{`
        *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html{
          font: normal 100% sans-serif;
          color: #555;
        }

        ul, nav{
          list-style: none;
        } 

        a{
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          opacity: 0.9;
        }

        a:hover{
          opacity: 1;
        }

        a.btn{
          color: #fff;
          border-radius: 4px;
          text-transform: uppercase;
          background-color: #2196F3;
          font-weight: 800;
          text-align: center;
        }

        hr{
          width: 150px;
          height: 2px;
          background-color: #2196F3;
          border: 0;
          margin-bottom: 80px;
        }

        section {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 3rem;
          min-height: 100vh;
        }

        section p{
          max-width: 800px;
          text-align: center;
          margin-bottom: 35px;
          padding: 0 20px;
          line-height: 2;
        }

        section h3{
          font-family: 'becker-wood-type';
          font-style: bold;
          font-weight: 400;
          font-size: 3em;
          line-height: 2rem;
          text-align: center;
          letter-spacing: 0.08em;
          mix-blend-mode: hard-light;
          padding: 2rem;
        }

        section h4{
          font-family: 'futurist-fixed-width';
          padding: 2rem;
          font-style: normal;
          font-size: 1.5em;
          line-height: 2rem;
          text-align: center;
          color: #B4F4FE;
        }

        ul.grid{
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .row {
          max-width: 1440px;
          flex-direction: row;
        }

        @media (max-width: 1000px){


        }

        @media (max-width: 800px){

        }

        /*----------------
          Home Section
        ----------------*/

        .home{
          height: 100vh;
          color: #fff;
          text-align: center;
          background-color: #fff;
          background-image: url('assets/home/background-1.png');
          background-position: bottom;
          background-repeat: no-repeat;
          background-size: 100%;
        }

        .home div {
          display: flex;
          flex-wrap: nowrap;
          justify-content: center;
          align-items: center;
          align-content: center;
          flex-direction: column;
          margin-top: 0;
        }

        .home h1{
          font: bold 60px 'becker-wood-type';
          margin-bottom: 15px;
          letter-spacing: .2rem;
          color: #74ACDF;
        }

        .home h4{
          font-family: 'futurist-fixed-width';
          font-style: normal;
          font-weight: 5;
          font-size: 40px;
          line-height: 107.5%;
          text-align: center;
          letter-spacing: 0.055em;
          color: #000000;
        }

        .home div h2{
          font-family: 'futura-md-bt';
          font-style: normal;
          font-weight: 5;
          font-size: 1.3em;
          line-height: 3em;
          text-align: center;
          color: #0B1628;
        }

        .home a.btn{
          padding: 20px 46px;
          background-color: #FFF;
          color: #5989BD;
        }

        @media (max-width: 800px){

          .home{
            min-height: 600px;
          }

          .home h1{
            font-size: 48px;
          }

          .home h3{
            font-size: 18px;
          }

          .home a.btn{
            padding: 15px 40px;
          }

        }

        @media (max-height: 720px){

          .home {
            min-height: 110vh;
          }

        }

        @media (max-width: 600px){

          .home h3 {
            margin-top: 50px;
          }

        }

        /*-------------
          Services
        -------------*/
        .services{
          background-color: #0B1628;
          // background-image: url('assets/home/background-bottom-2.png');
          // background-position: bottom;
          // background-repeat: no-repeat;
          // background-size: 100%;
        }

        .services h3{
            font: bold 60px 'becker-wood-type';
            font-style: normal;
            font-weight: 400;
            font-size: 36px;
            line-height: 49px;
            text-align: center;
            letter-spacing: 0.08em;
            color: #FFFFFF;
            mix-blend-mode: hard-light;
            padding-top: 2em;
            padding-bottom: 2em;
          }

        .services .grid{
          display: flex;
          justify-content: space-around;
        }

        .services .grid li{
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-wrap: nowrap;
          justify-content: space-between;

        }

        .services .grid li span{
          font-family: 'futurist-fixed-width';
          font-style: normal;
          font-weight: 5;
          font-size: 1.5em;
          line-height: 2rem;
          text-align: center;
          color: #fff;
          padding: 1rem;

        }
        
        @media (max-width: 1200px){
        
          .services .grid{
            display: grid;
            grid-template-columns: auto auto auto;
            grid-gap: 10px;
          }

          .services .grid li{
            margin-bottom: 65px;
          }
        
        }

        @media (max-width: 600px){
        
          .services .grid {
            display: flex;
            flex-basis: 100%;
          }
        
        }

        /*-------------
        Be part
      -------------*/
        .be-part{
          background-color: #C1E9EF;
        }

        .be-part h3{
          color: #B4F4FE;
        }
        .be-part h4{
          color: #B4F4FE;
        }

        .be-part div{
          margin-top: 4rem;
          display: flex;
          border: 1px solid #B4F4FE;
          border-radius: 53.5px;
          justify-content: space-between;
          padding: 1rem;
          background-color: #0B1628;
          width: 80%
        }

        .be-part div span{
          font-family: 'futura-md-bt';
          font-style: normal;
          font-weight: 700;
          font-size: 2rem;
          line-height: 3rem;
          text-align: center;
          background-color: #0B1628;
          padding: .5rem;
          border-radius: 53.5px;
        }

        .be-part a:link, a:visited {
            text-decoration: none;
            color: #fff;
        }

        .be-part div span:hover{
          background-color: #B4F4FE;
          color: #0B1628;
          border-radius: 53.5px;
        }

        @media (max-width: 800px){
          .be-part {
            padding: 0;
          }
          .be-part div{
            width: 80%
          }
          .be-part div span {
            padding: 0.2rem;
            font-size: 1.5rem;
            font-weight: 500;
          }
        }

        @media (max-width: 430px){
          .be-part div span {
            font-size: 1rem;
          }
        }

        /*-------------
        Buildathon
      -------------*/

      .buildathon{
        background-color: #0B1628;
        text-align: left;
      }

      .buildathon .row {
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
        grid-gap: 10px; 
        max-width: 1000px;
      }

      .buildathon .row .box {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: flex-start;
        align-content: flex-start;
        overflow: auto;
        flex-direction: column;
      }

      .buildathon img {
        object-fit: cover;
        max-width: 100%;
        height: auto;
      }

      .buildathon .row .box h3 {
        font-size: 3em;
        text-align: left;
        padding: 0px 0px 15px 0px;
      }
      
      .buildathon .separator {
        margin: 5px 10px;
      }

      .buildathon .row .box span {
        font-family: 'futurist-fixed-width';
        font-style: normal;
        font-weight: 5;
        font-size: 1.5em;
        color: #4BA4D8;
        padding: 0px 0px 15px 0px;
      }

      .buildathon .row .box .wrap p {
        padding: 15px 0px;
        text-align: left;
      }

      .buildathon-information {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px; 
      }
      
      .buildathon-information div {
        text-align: left;
      }

      .buildathon-information div span {
        font-family: 'futurist-fixed-width';
        font-style: normal;
        font-weight: 5;
        font-size: 1.3em;
        padding-bottom: 10px;
        margin-bottom: 10px;
        margin: 0 0 10px 0;
        text-align: left;
        color: #4FAEE3;
      }

      .buildathon-information div p {
        font-family: 'futura-md-bt';
        padding: 0;
        margin: 0;
        text-align: left;
        color: #D9D9D9;
      }

      @media (max-width: 1100px){

        .buildathon .space {
          display: none;
        }

        .buildathon .row .box:nth-child(2) {
          display: none
        }

        .buildathon .wrap button {
          margin: auto;
          width: 50%;
        }

      }

        /*-------------
        FAQs
        -------------*/     
        .faqs{
          background-color: #74ACDF;
          background-image: url('assets/home/background-bottom-4.png');
          background-position: bottom;
          background-repeat: no-repeat;
          background-size: 100%;
          min-height: 100vh;
        }

        .faqs h3{
            margin-bottom: 2rem;
            color: #0B1628;
        }

        .faqs h4{
          font-family: 'futurist-fixed-width';
          font-style: normal;
          font-size: 1.5rem;
          line-height: 2rem;
          text-align: center;
          color: #0B1628;
          mix-blend-mode: hard-light;
          width: 50%;
          margin-top:50px;
        }

        .faqs div{
          min-height: 100vh;
          width: 80%;
          padding-bootom: 5rem;
        }

        /*-------------
          More Information
        -------------*/
        .more-information{
          background-color: #152640;
          background-image: url('assets/home/background-bottom-4.png');
          background-position: bottom;
          background-repeat: no-repeat;
          background-size: 100%;
        }

        .more-information h3{
          font: bold 60px 'becker-wood-type';
          font-style: normal;
          font-weight: 400;
          font-size: 36px;
          line-height: 49px;
          text-align: center;
          letter-spacing: 0.08em;
          color: #FFFFFF;
          mix-blend-mode: hard-light;
        }
        
        /*-------------
          Footer
        -------------*/

        footer{
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          color: #fff;
          background-color: #0B1628;
          padding: 5rem 0;
        }

        footer ul{
          display: flex;
          padding: 2rem;
        }

        footer ul li{
          margin: 0 1rem;	
        }

        footer ul li:first-child{
          margin-left: 0;	
        }

        footer ul li:last-child{
          margin-right: 0;	
        }

        footer p{
          font-size: 1em;
          color: #FFF;
        }

        footer p a{
          color: #fff;
        }

        footer h3 {
            font-family: 'becker-wood-type';
            font-style: normal;
            font-weight: 400;
            font-size: 2.5em;
            line-height: 2rem;
            text-align: center;
            letter-spacing: 0.08em;
            color: #B4F4FE;
            mix-blend-mode: hard-light;
            padding-bottom: 50px;
        }

        @media (max-width: 700px){

          footer{
            padding: 80px 15px;
          }

        }
        `}</style>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['home'])),
  },
})


export default Home;