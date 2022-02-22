import React from 'react';
import './Home.scss'
import matrix from '../logos/c59ad2bd4ad2fbacd04017debc679ddb.gif'
import electronics from '../logos/—Pngtree—tech blue line mesh perspective_4073743.png'
import cloud1 from '../logos/cloud1.png'
import cloud2 from '../logos/cloud2.png'
import cloud3 from '../logos/cloud3.png'
import cloud4 from '../logos/cloud4.png'
import cloud5 from '../logos/cloud5.png'
import { useEffect } from 'react';

const Home = () => {

    useEffect(()  => {
        document.body.style.overflow = 'hidden';
    
        return () => {
            document.body.style.overflow = 'auto';
        };
    });

  return (
    <div className='wrapper'>
        <header>
            {/* <img src={matrix} className='background'/> */}
            <div className='banner background'>
                <h1 class="title">Welcome to Store Search!</h1>
                <img src={electronics} class="foreground"/>

                <div className='clouds'>

                    <img src={cloud1} style={{'--i' : 1}}/>

                    <img src={cloud2} style={{'--i' : 2}}/>

                    <img src={cloud3} style={{'--i' : 3}}/>

                    <img src={cloud4} style={{'--i' : 4}}/>

                    <img src={cloud5} style={{'--i' : 5}}/>

                </div>
            </div>
        </header>
        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis unde illo neque at hic quisquam, nulla consectetur, itaque maxime sit iusto aliquam culpa reiciendis eaque recusandae vitae modi, animi expedita perferendis inventore. Culpa incidunt odit dicta quibusdam ullam facilis eum magnam, consectetur voluptates praesentium, pariatur eos nihil! Natus in, autem aut facere repellat eveniet commodi illo ullam hic fugit deserunt explicabo esse atque reprehenderit optio, dicta suscipit sed! Porro fugiat numquam vel magni, iure provident consequuntur velit ut quia itaque repudiandae molestiae, nobis sequi incidunt autem! Cum impedit accusamus laboriosam eaque necessitatibus consectetur incidunt a exercitationem molestias doloribus tenetur amet, ullam at repudiandae, quos reprehenderit adipisci assumenda dolor enim voluptas natus! Assumenda praesentium voluptate culpa quidem quasi impedit unde incidunt odit velit, dolore officiis distinctio, fugit, optio sed. Quos nesciunt eius reprehenderit ipsa consectetur tempora, fugiat provident corporis perspiciatis veritatis totam temporibus voluptates soluta vitae mollitia molestias reiciendis expedita doloribus est. Maxime et fugit expedita id sed cumque harum dignissimos aperiam voluptatum quos obcaecati illo tempore consectetur, sunt perferendis eius aliquid soluta praesentium voluptatem assumenda ex fuga. Iusto, possimus? Dolores deleniti eaque, aperiam consequuntur odit culpa, architecto, quas veniam provident inventore eius. Laboriosam in reprehenderit quidem? Officiis illum molestiae, praesentium velit, illo debitis quasi fuga laborum veritatis necessitatibus fugiat cupiditate! Quia animi provident maxime numquam porro itaque! Provident, rerum. Aliquid cum quo ducimus ad? Repellat nihil, saepe beatae rerum sint eveniet voluptate officiis velit autem officia tempore deserunt sequi quod quae culpa sed. Reprehenderit eveniet ipsum nihil ipsam quam facilis, possimus modi placeat ratione soluta voluptate obcaecati error minima enim, fugiat quaerat architecto, iure dignissimos a eum quidem eos at fuga. Consectetur, quisquam at reprehenderit in exercitationem inventore incidunt dolorum quos adipisci labore? Fugiat facilis ipsum minus, officiis eos modi sequi distinctio pariatur reprehenderit accusantium labore obcaecati, recusandae saepe?</section>

    </div>
  );
};

export default Home;
