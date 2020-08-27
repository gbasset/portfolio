import React,{useState, useEffect} from 'react'
import './Home.css'
import img from "../../Assets/images/undraw_code_thinking_1jeh.svg"
import logoReact from "../../Assets/logos/icons8-react.svg"
import jsLogo from "../../Assets/logos/icons8-javascript-logo.svg"
import htmlLogo from "../../Assets/logos/icons8-html-5.svg"
import nodejs from "../../Assets/logos/nodeJsLogo.svg"
import logoSql from "../../Assets/logos/database.svg"
import imgTools from '../../Assets/images/undraw_code_thinking_1jeh.svg'
import down from '../../Assets/logos/down-arrow.gif' 
import Typewriter from 'typewriter-effect';
import { Controller, Scene } from 'react-scrollmagic';
import { Link, useLocation } from 'react-router-dom'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
export default function Home() {
    const path = useLocation()
    const [isWritteFirst, setisWritteFirst] = useState(false);
            useEffect(()=>{
           if(path.pathname !== "/"){
               setTimeout(()=>setisWritteFirst( !isWritteFirst), 4000)
           }
            },[])
    return (
        <div className="">
            <div className="header-home">
                <div className="names">
                    {/* <p className="hello">Bonjour, je suis</p> */}
                    <div  className="hello"> 

            <Typewriter
            options={{
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                changeDelay: 85
              }}
            onInit={(typewriter) => {
                typewriter.typeString(`Bonjour, moi c'est Gaëtan .`)
                .pauseFor(500)
                  .typeString('<br>Je suis Developpeur Web .')
                  .pauseFor(500)
                  .deleteChars(25)
                //   .deleteAll()
                  .typeString('Bonne visite !')
                  .pauseFor(500)
                  .start();

              }}
            />
            </div>
                    {/* <p className="developpeur">Developpeur Web React</p> */}
                </div>
                <div className="image-dev">
                    <img  alt="picture presentation" />
                </div>
                {isWritteFirst && 
                <>
                <section id="section07" className="demo">
                <a><span></span><span></span><span></span>Scroll</a>
                </section>

                 </>
                }
            </div>

            <div className="containerLanguages" >
            <ScrollAnimation 
                animateIn='bounceInUp'
                animateOut='fadeOut'
                delay={100}
                animateOnce={true}
                >
                <h1 className="annimationTechnos">Skills</h1>
                
                
            </ScrollAnimation>  
            <div className="">
            <ScrollAnimation 
                animateIn='bounceInUp'
                animateOut='bounceOutLeft'
                delay={100}
                animateOnce={true}
                >
                <img src={imgTools} alt=""/>
                </ScrollAnimation>
                </div>
            </div>
            <div className="containerLanguage">
            <ScrollAnimation 
                animateIn='bounceInRight'
                animateOut='bounceOutLeft'
                animateOnce={true}
                delay={100}
            >
            <h2 className="annimationLanguages"> Javascript</h2>
            </ScrollAnimation>
            <div className="imgLanguages">
            <ScrollAnimation 
                animateIn='bounceInLeft'
                animateOut='bounceOutLeft'
                delay={100}
                animateOnce={true}
                >
                <img src={jsLogo} alt=""/>
                </ScrollAnimation>
                </div>
            </div>

            <div className="containerLanguage">
            <ScrollAnimation 
                animateIn='bounceInUp'
                animateOut='bounceOutRight'
                delay={100}
                animateOnce={true}
            >
            <h2 className="annimationLanguages">ReactJs</h2>
            </ScrollAnimation>
                <div className="imgLanguages">
            <ScrollAnimation 
                animateIn='bounceInRight'
                animateOut='bounceOutLeft'
                delay={100}
                animateOnce={true}
                >
                <img src={logoReact} alt=""/>
                </ScrollAnimation>
                </div>
            </div>
            <div className="containerLanguage">
            <ScrollAnimation 
            animateIn='bounceInUp'
            animateOut='bounceOutRight'
            delay={100}
            animateOnce={true}
            >
            <h2 className="annimationLanguages">Html / Css</h2>
            </ScrollAnimation>
            <div className="imgLanguages">
            <ScrollAnimation 
                animateIn='bounceInLeft'
                animateOut='bounceOutRight'
                delay={100}
                animateOnce={true}
                >
                <img src={htmlLogo} alt=""/>
                </ScrollAnimation>
                </div>
            </div>
                      
            <div className="containerLanguage">
            <ScrollAnimation 
            animateIn='bounceInUp'
            animateOut='bounceOutLeft'
            delay={100}
            animateOnce={true}
            >
            <h2 className="annimationLanguages">Sql  </h2>
            </ScrollAnimation>
            <div className="imgLanguages">
            <ScrollAnimation 
                animateIn='bounceInRight'
                animateOut='bounceOutLeft'
                delay={100}
                animateOnce={true}
                >
                <img src={logoSql} alt="" style={{maxHeight:'42vh'}}/>
                </ScrollAnimation>
                </div>
            </div>
            <div className="containerLanguage nodeJs">
            <ScrollAnimation 
            animateIn='bounceInUp'
            animateOut='bounceOutRight'
            delay={100}
            animateOnce={true}
            >
            <h2 className="annimationLanguages">NodeJs  </h2>
            </ScrollAnimation>
            <div className="imgLanguages ">
            <ScrollAnimation 
                animateIn='bounceInLeft'
                animateOut='bounceOutLeft'
                delay={100}
                animateOnce={true}
                >
                <img  src={nodejs} alt="" />
                </ScrollAnimation>
                </div>
            </div>
            <div className="text">

                <p>

                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem repellat fugit officia accusantium expedita tempore nostrum ratione, rerum ullam impedit facilis aliquam ad error iure eligendi? Dolorum asperiores necessitatibus quaerat.
                    Tenetur, ab debitis dicta sint vero nisi eos veniam veritatis laudantium, ad magnam nobis suscipit. Natus, a inventore ipsam neque eaque dolor perspiciatis, saepe odit nulla facilis recusandae. Cumque, atque.
                    Perferendis quam aliquid illum laudantium veniam! Eos dolorem nulla animi nisi, cum ut voluptatum accusantium at temporibus quos laboriosam deleniti fugiat. Veritatis, fugit assumenda consequuntur magni voluptate enim ducimus deleniti?
                    Atque eligendi doloremque possimus tenetur dolorum amet itaque vitae autem earum suscipit maiores, nihil ratione quasi voluptatibus, repellat commodi consequuntur veritatis inventore enim provident? A corrupti assumenda esse dolorem blanditiis.
                    Magni animi aut, ea omnis atque optio itaque cum. Delectus ea commodi obcaecati natus reiciendis enim eum assumenda consequuntur, doloribus voluptatibus. Architecto porro aliquam veritatis tempora. Perferendis officiis architecto exercitationem.
                    Quia cum dolor optio quo rerum possimus ab beatae iure sapiente maiores atque ratione alias ipsa aliquid, labore fugit asperiores temporibus consectetur dolorum perferendis magni magnam. Labore, exercitationem pariatur. Laborum.
                    Aspernatur eos deleniti, officiis praesentium beatae tempore nemo ipsum officia delectus unde cumque eveniet impedit commodi explicabo a. Iusto impedit dolore sunt voluptatem asperiores soluta minus quos veniam nemo fugit?
                    Impedit rem nostrum, id voluptatem dolorum repellendus sit quaerat quis consectetur ullam eos ducimus. Iste debitis ipsum voluptatum dolorum laboriosam sapiente sit blanditiis, expedita quas, asperiores id ipsam impedit excepturi!
                    Harum totam est tempora voluptas blanditiis, ab facere perferendis, error eos illo nesciunt voluptatum voluptatibus incidunt vero? Voluptates nisi labore necessitatibus doloribus aperiam repellat sunt accusamus nulla nostrum maiores! Ullam!
                    Quo dignissimos sint nesciunt ipsa placeat distinctio excepturi itaque repellat vitae, officiis earum aperiam, nisi veritatis molestias cumque laudantium! Mollitia, fuga? Mollitia, facilis. Doloribus eligendi nesciunt fugiat eveniet, suscipit recusandae.
                    Vitae sequi, et repudiandae atque odio, sunt quasi laboriosam eius nostrum autem quo consequatur magni ab vero eaque asperiores adipisci temporibus nemo, itaque facere consequuntur laborum. Consectetur repellat labore aut!
                    Quam ullam, nostrum quia maxime mollitia nisi sequi laboriosam veniam culpa eum explicabo numquam. Rem nisi aspernatur libero modi incidunt doloremque, doloribus laboriosam aliquid minus consectetur facere iusto accusamus quisquam!
                   
                </p>
                <p>
                Vitae obcaecati asperiores neque exercitationem, ipsa corrupti, deserunt illum laboriosam hic dolor cumque in quas. Et vitae non veniam aliquam dignissimos maiores temporibus delectus quo, libero soluta voluptatem veritatis quas.
                    Praesentium, autem expedita soluta debitis atque saepe explicabo tempora enim? Voluptate officia sit exercitationem enim quasi debitis, dolorum nulla ab. Unde, minus. Sapiente non dolores dicta animi accusantium excepturi doloribus!
                    Saepe dolor, sit ad veniam aliquam commodi error labore quo, minima quis cumque reprehenderit dolores. Optio, reiciendis quo. Sequi repudiandae porro similique tempore alias facilis voluptatum in mollitia laudantium cumque!
                    Dolorem perspiciatis necessitatibus suscipit adipisci iste quia, harum placeat quas aspernatur temporibus, dignissimos, quis dicta! Ipsam, voluptate. Porro veniam, nam vitae earum ipsam quasi pariatur dolorum doloremque excepturi, dolorem vero?
                    Obcaecati, fugit illo sequi excepturi impedit at saepe amet a cum cumque optio expedita asperiores quod reprehenderit aliquid cupiditate. Magni laudantium iusto nulla hic neque labore sint earum illo eligendi.
                    In delectus sed maiores facilis vitae ab, autem ratione dicta facere expedita assumenda praesentium ipsum ipsa voluptatibus ut, nesciunt dignissimos, adipisci officiis quisquam nemo molestias aspernatur? Quidem porro pariatur soluta.
                    Tempora, maxime eaque quas velit ullam iusto! Doloribus dolorem sunt nesciunt. Laboriosam, architecto, debitis praesentium vel ut deleniti quibusdam non cum aut consequatur quis ipsum explicabo delectus consequuntur maiores eveniet.
                    Deleniti error laborum deserunt voluptatum, laboriosam voluptatibus labore provident tenetur officiis cumque culpa quaerat, consequatur mollitia delectus, modi sapiente ducimus? Voluptas magni unde illo maiores facilis sunt, nulla beatae blanditiis.
                    Ab reprehenderit ipsum commodi. Dolorum reprehenderit aliquam ad molestias similique dolores nobis voluptatum dolor assumenda laudantium repellendus velit esse libero ut nostrum in, mollitia est ullam, dolorem id aspernatur earum?
                    Accusantium dolores porro mollitia asperiores ullam, provident beatae officia libero quae vero optio commodi consectetur, iusto ipsam. Nulla alias labore asperiores accusantium expedita officia dolor maxime at magni. Non, aspernatur!
                    Illum tempora eaque itaque corrupti autem saepe quo vel doloribus animi eos. Quia distinctio itaque odit officiis nobis debitis autem numquam. Consequuntur, beatae. Repellat quasi inventore ut beatae a dignissimos.
                    Obcaecati quod commodi odit corporis, tempore veniam eaque dolor nisi eligendi explicabo eos quisquam impedit placeat debitis harum non quam cupiditate qui fugit ea odio. Nihil officia laboriosam necessitatibus! Culpa.
                    Tempora cupiditate et blanditiis sequi architecto ratione, voluptates sunt tempore voluptatum, nihil nisi aliquam fuga pariatur delectus perspiciatis sint, aut temporibus iste quae? Nobis delectus, quisquam sunt minus dolore nesciunt!
                </p>
            </div>
        </div>
    )
}
