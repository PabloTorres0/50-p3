import React from 'react'
import './principal.css'
import img from '../components/assets/img1.avif'




const Principal = () => {
  
  return (
      <section className='container-component'>
        <header>
          <h1>
            Amazing Article
          </h1>
          <span>
            Florin Pop
          </span>
        </header>

        <main>
          <p>  
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis tempore laboriosam recusandae nostrum voluptatibus nesciunt magnam, ratione dolores. Doloribus, eligendi facere inventore vel deserunt voluptas ratione eaque rem, quaerat cumque odit! Quisquam, quia necessitatibus. Voluptates aut libero eligendi ipsa repellat eaque velit! Esse soluta aut natus nobis commodi aliquam earum hic ratione, dolorum voluptatum sed quam. Ad odit cum expedita iste libero rem fugiat? Reprehenderit quidem vitae magni sapiente placeat odit iure fuga consectetur! Vitae laudantium commodi ducimus dolore consequatur! 
          </p>
          <h3>
            My Dog
          </h3>
            <img src={img} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae cumque, eius quasi deleniti, alias voluptate ratione quos in veritatis velit excepturi harum ipsum quo? Quaerat impedit architecto eos dicta earum sequi beatae numquam ea unde, reiciendis, labore consectetur ipsa. Perspiciatis aliquam reiciendis dolorem necessitatibus illo iure tempore magni ab dolor assumenda itaque nostrum quo omnis consequatur nesciunt in laudantium tempora similique, magnam mollitia aperiam saepe? Illo officia modi dolor quod itaque ratione quae sunt, iure nostrum suscipit eos, perferendis eum, nam inventore? Ut similique suscipit quis earum, hic labore iure itaque rerum dolorum qui delectus quisquam laudantium magnam aliquid illum repellat magni deserunt, eius repudiandae sint ullam cupiditate, ex officiis ad. Voluptatibus eaque illo dolorem, quis cumque quod! Dolor nam illo alias distinctio labore magnam illum possimus! Unde distinctio eum vel, sunt eveniet, nemo ipsum molestiae numquam amet minima modi alias repudiandae veritatis ipsa minus facilis corporis hic explicabo reiciendis?
          </p>
        </main>
      </section>    
  )
}

export default Principal