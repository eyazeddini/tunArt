import Head from "next/head";
import { Button } from "antd";
import {useState, useEffect} from 'react'
import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "src/styles/Home.module.css";
import swipes from "src/styles/swiper.module.css"
import SinUp from './sinUp'
import Image from "next/image";
import Login from './login';
import axios from 'axios';

interface Props {}

import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Props { }

const inter = Inter({ subsets: ["latin"] });
const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
  { id: 2, name: 'Assets under holding', value: '$119 trillion' },
  { id: 3, name: 'New users annually', value: '46,000' },
]

const Home: React.FC<Props> = () => {
  const [popUp, setPopUp] = useState(false);
  const [popUpLogin, setPopUpLogin] = useState(false);

  const togglePopup = () => {
    setPopUp(!popUp);
    setPopUpLogin(false)
  };
  const togglePopupLogin = () => {
    setPopUpLogin(!popUpLogin);
    setPopUp(false)
  };

  useEffect(() => {
    import('swiper').then((Swiper) => {
      new Swiper.default('.swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    });
  }, []);


  return (
    <div>
      <Head>
   
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>
      </Head>
    <div className={styles.test} >

      <main id={styles.body}>
       
        <div id={styles.main}>
            <div id={styles.box1}></div>
          <div id={styles.box2}>
            <div id={styles.text}>
              ART is the <br/>work of God
            </div>
          </div>
        </div>
        <div id={styles.box3}>
          <div id={styles.container}>
            <div id={styles.logo}>
              <b>ART</b>
            </div>  
            <div id={styles.menu}>
              <ul>
                <Link href={"../MainPage"}><li>HOME</li></Link>
                <li>SERVICES</li>
                <Link href={"../MainPage/aboutUs"}><li>ABOUT</li></Link>
                <Link href={"../MainPage/contactUs"}><li>CONTACT</li></Link>
                <Button onClick={togglePopupLogin} ><li>login</li></Button>
                <Button onClick={togglePopup} ><li>signup</li></Button>
              </ul>
              {popUpLogin && <div className="overlay" ><Login /></div>}
              {popUp && <div className="overlay"><SinUp /></div>}
            </div>
          </div>
          </div>
        
       
      </main>
  
       <div>

          
   </div>
 
      <div className={styles.info}>
        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          {stat.value}
          </dd>
          </div>
          ))}
          </dl>
          </div>
          </div>

</div>

 </div>

<div>
<div className={swipes.swiperContainer}>
  <div className={swipes.swiperWrapper}>
    <div className={swipes.swiperSlide}></div>
    <div className={swipes.swiperSlide}> </div>
    <div className={swipes.swiperSlide}> </div>
    <div className={swipes.swiperSlide}> </div>
    <div className={swipes.swiperSlide}> </div>
    <div className={swipes.swiperSlide}> </div>
    <div className={swipes.swiperSlide}> </div>
    <div className={swipes.swiperSlide}> </div>
  </div>
</div>



<div className={swipes.test}>
  
 <div className={swipes.text}> <h1>Join in, it’s free.</h1> <p> Welcome to our art website! Our platform is dedicated to showcasing the work of talented artists from around the world. We believe that art is a universal language that can bridge cultural divides and connect people from all walks of life.

On our website, you will find a diverse range of art styles and mediums, including paintings, sculptures, photographs, digital art, and more. Our artists are carefully selected based on their creativity, originality, and technical skill, and we are proud to represent both emerging and established artists.

Whether you are an art collector, enthusiast, or simply appreciate the beauty of art, we invite you to explore our collection and discover new artists and works that inspire you. Our website also provides a convenient platform for purchasing art, with secure transactions and worldwide shipping available.

Thank you for visiting our art website, and we hope you enjoy your experience here!</p></div> 
 <div className={swipes.test} >
<div className={swipes.image}></div>
 </div>
 
</div>  

<div className={swipes.test}>
<div className={swipes.image2}></div>
 <div className={swipes.textx}> <h1>Check our shop.</h1> <p>Welcome to our shop! We're thrilled to offer you a carefully curated selection of unique and high-quality products that we know you'll love. Our team has scoured the globe to bring you a range of items that embody our passion for creativity and innovation.

Whether you're searching for that perfect piece of tool to add a pop of color to your work of art, or a one-of-a-kind piece of art to adorn your walls, we've got you covered. From handmade ceramics to sustainable fashion, our shop has something for everyone.

At our core, we believe in supporting independent artists and designers who are pushing the boundaries of their craft. By shopping with us, you're not only getting a beautiful and unique product, but you're also supporting a community of creatives who are passionate about what they do.

So take a look around, and be inspired by our collection of carefully crafted products. We can't wait to see what treasures you find!</p></div> 
 <div className={swipes.test} >

 </div>
 
</div>

<div className={swipes.test}>
  
 <div className={swipes.text}> <h1>Stay tuned for our weekly AUCTIONS.</h1> <p> Get ready for the excitement of our weekly auctions! Every week, we bring you a carefully curated selection of unique and rare items that are sure to delight art enthusiasts .Our auctions offer something for everyone.

Our team of experts scours the globe to find the most interesting and rare items to feature in our auctions. We pride ourselves on offering a diverse range of items that you won't find anywhere else, so you never know what treasures you might uncover.

Whether you're an experienced collector or just starting out, our auctions are the perfect opportunity to add something special to your collection. Plus, our easy-to-use bidding platform makes it easy to participate from anywhere in the world.

So stay tuned for our weekly auctions, and don't miss your chance to bid on some of the most unique and rare items around. It's an experience you won't want to miss!</p></div> 
 <div className={swipes.test} >
<div className={swipes.image3}></div>
 </div>
</div>

<div className={swipes.test}>
 <div className={swipes.textxx}> <h1>"Art is not just a product, it's a journey of self-expression and exploration."</h1> </div> 
</div>

</div>
<div className={swipes.test2}> </div>
    </div>
  );
}

export default Home;
