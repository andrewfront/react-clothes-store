import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import heroBcg from '../assets/hero-bcg.jpg'
// import heroBcg2 from '../assets/hero-bcg-2.jpg'

const Hero = () => {
  return <Wrapper className='section-center'>
    <article className='content'>
      <h1>we enjoy <br />our clothes</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur voluptatibus neque, quis explicabo quas deleniti dignissimos quibusdam quam pariatur nam?</p>
      <Link to='/products' className="btn hero-btn">shop now</Link>
    </article>
    <article className='img-container'>
      <img src="https://ae01.alicdn.com/kf/HTB1FFwaOVXXXXctXFXXq6xXFXXXq/Women-Office-Suit-Jackets-Coat-Slim-Short-Design-Long-Sleeve-Ladies-Blazer-Girls-Work-Wear-Jacket.jpg_640x640.jpg" alt="hero" className='main-img'/>
      <img src="https://media.istockphoto.com/id/675054750/photo/snowball-fight.jpg?s=612x612&w=0&k=20&c=X4kby7wGK1ONKThHoibGpu17nPeIydIzUZiiOB8Ihq8=" alt="hero" className='accent-img'/>
    </article>
  </Wrapper>
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    // .img-container::before {
    //   content: '';
    //   position: absolute;
    //   width: 10%;
    //   height: 80%;
    //   background: var(--clr-primary-9);
    //   bottom: 0%;
    //   left: -8%;
    //   border-radius: var(--radius);
    // }
  }
`

export default Hero
