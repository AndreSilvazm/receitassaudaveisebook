import Head from "next/head";
import { motion } from 'framer-motion'

import { useEffect, useState, useRef } from 'react'
import { LegacyRef } from 'react';

import styles from '../styles/Home.module.css'

import { LuSalad } from "react-icons/lu";
import { MdDirectionsRun } from "react-icons/md";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { FaBookBookmark } from "react-icons/fa6";
import Link from "next/link";






export default function Home() {


  const carousel = useRef<HTMLDivElement>(null); // Defina diretamente o tipo da ref como HTMLDivElement
  const [width, setWidth] = useState<number>(0);

  //CALCULANDO O TAMANHO DA TELA
  function handleResize() {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize); //TODA VEZ QUE O TAMANHO DA TELA FOR MUDADO, SERÁ ATRIBUIDO UM NOVO VALOR AO WIDTH
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="">

      <Head>

        <title>
          E-book | Receitas deliciosas
        </title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Cormorant+Garamond:wght@300&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=EB+Garamond&family=Inter:wght@100..900&family=Kode+Mono:wght@400..700&family=Lilita+One&family=Noto+Sans+Lepcha&family=Oswald:wght@200&family=Playfair+Display&family=Poiret+One&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:wght@100;500&family=Rouge+Script&family=Sacramento&family=Silkscreen:wght@400;700&family=Teko:wght@300..700&display=swap" rel="stylesheet">
        </link>

        <meta name="description" content="Bem-vindo à nossa página de receitas saudáveis e deliciosas! Aqui você encontrará uma variedade de pratos irresistíveis que não apenas satisfazem seu paladar." />

      </Head>

      <main>
        <section className="w-full h-screen bg-BgIMG bg-cover bg-center bg-fixed flex justify-center items-center">

          <article className="text-center landingPage ">

            <h1 className="text-gray-50 text-[4em] uppercase mb-6">Receitas deliciosas</h1>
            <Link href='https://pay.kiwify.com.br/mTgS6m2' className="bg-black p-3 w-[100%]  text-white mt-4 rounded-lg">Emagreça com sabor</Link>

          </article>


        </section>


        <section >

          <article className="w-full h-screen  flex justify-center flex-col my-11 md:block md:mt-5 md:h-1/3 md:py-5 md:mb-32  ">

          <h1 className="text-center uppercase text-3xl">Sobre o E-book</h1>


            <div className="w-full text-center flex justify-center">
              <i className=" p-2 text-emerald-500 text-2xl"><FaBookBookmark /></i>

            </div>

            <p className="text-center leading-8 md:w-[80%] md:mb-5 m-auto">Descubra o segredo para alcançar seus ​objetivos de perda de peso sem abrir mão do ​prazer de comer bem. <br />Nosso eBook oferece ​uma variedade de opções para todas as ​refeições do dia, desde café da manhã ​revigorante até jantares reconfortantes, ​garantindo que você nunca mais tenha que ​sacrificar o sabor em nome da saúde.</p>


            <motion.div ref={carousel} whileTap={{ cursor: "pointer" }} className={styles.Carousel}>

              <motion.div

                className={styles.inner}

                drag={width < 1900 ? "x" : false}

                dragConstraints={width < 1900 ? { right: 0, left: -width } : false}>

                {/*IMPRIMINDO DADOS DA API DENTRO DO CAROUSEL */}

                <div className={styles.imageContainer}>
                  <img
                    className="rounded-lg h-[400px]"
                    src="https://receitasdeliciosasparaemagrecer697.my.canva.site/images/653670a17e58028837f36d28dcbe86d1.jpg"
                    alt=""
                  />
                  <div className={styles.overlayText}><a href="https://pay.kiwify.com.br/mTgS6m2">Saiba mais!</a></div>
                </div>

                <div className={styles.imageContainer}>
                  <img
                    className="rounded-lg h-[400px]"
                    src='https://images.pexels.com/photos/8335338/pexels-photo-8335338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt=""
                  />
                  <div className={styles.overlayText}><a href="https://pay.kiwify.com.br/mTgS6m2">Saiba mais!</a></div>
                </div>


                <div className={styles.imageContainer}>
                  <img
                    className="rounded-lg h-[400px]"
                    src='https://images.pexels.com/photos/6544498/pexels-photo-6544498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt=""
                  />
                  <div className={styles.overlayText}><a href="https://pay.kiwify.com.br/mTgS6m2">Saiba mais!</a></div>
                </div>

                <div className={styles.imageContainer}>
                  <img
                    className="rounded-lg h-[400px]"
                    src='https://images.pexels.com/photos/3590401/pexels-photo-3590401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt=""
                  />
                  <div className={styles.overlayText}><a href="https://pay.kiwify.com.br/mTgS6m2">Saiba mais!</a></div>
                </div>


              </motion.div>
            </motion.div>

          </article>


          <article className="VantagensContainer  w-full text-center leading-8 md:h-[80vh]">
            <h1 className="text-center uppercase text-3xl">Vantagens das nossas culínarias</h1>

            <div className="w-full text-center flex justify-center">
              <i className=" p-2 text-emerald-500 text-2xl"><LuSalad /></i>

            </div>


            <p className="md:w-[80%] m-auto">Comer comidas para emagrecer ​oferece vantagens como controle de ​calorias, alta nutricional, sensação ​de saciedade, controle de porções, ​redução de opções não saudáveis, ​facilidade de planejamento, maior ​consistência e aprendizado sobre ​nutrição, promovendo a perda de ​peso de forma saudável e sustentável.</p>


            <div className="w-[90%] my-16 mx-auto">
              <img className="rounded-xl m-auto" src="https://receitasdeliciosasparaemagrecer697.my.canva.site/images/519d24c640881a38000ae08adf8b30fc.jpg" alt="" />
              <span className="italic text-sm text-gray-700">Wrap de atum com abacate</span>

              <p className="text-[.9em] md:w-[30%] md:m-auto">Wrap de atum com abacate oferece nutrição ​balanceada, sensação de saciedade, nutrientes ​essenciais, preparo rápido e baixo teor de ​carboidratos.</p>

            </div>

            

          </article>


        </section>

        <section className="NaoPercatempo w-full text-center leading-8 mt-10 flex flex-col">

          <h1 className="text-center uppercase text-3xl ">Não perca tempo!</h1>

          <div className="w-full text-center flex justify-center">
            <i className=" p-2 text-emerald-500 text-2xl"><MdOutlineEmojiFoodBeverage /></i>

          </div>


          <section className="md:flex md:justify-center md:w-full">

            <div>
              <h1 className="text-xl">Por apenas <br />14,99 R$</h1>

              <span className="italic text-sm text-gray-700">Tenha o acesso imediato ao E-book</span>

              <Link href='https://pay.kiwify.com.br/mTgS6m2'className="w-[90%] m-auto block bg-black text-white p-2 rounded-lg mt-4 md:w-[100%]">Comprar Agora</Link>
            </div>
          </section>
        </section>
      </main>

      <footer className="w-full mt-10 bg-black flex flex-col items-center p-4 text-white text-center ">
        <hr />

        <img className="w-[50%] md:w-[20%]" src="https://receitasdeliciosasparaemagrecer697.my.canva.site/images/3199505d6be4a666a7dd605653b8d967.png" alt="" />

        <h2 className="uppercase mt-3">
          Garantia rápida e incondicional em 7 dias!

        </h2>


      </footer>



    </div>
  )
}
