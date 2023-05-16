import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
// import aboutImg from '../assets/hero-bcg.jpg'
const AboutPage = () => {
  return (
    <main>
    <PageHero title="about"></PageHero>
    <Wrapper className='page section section-center'>
  <img src="https://ae01.alicdn.com/kf/HTB1FFwaOVXXXXctXFXXq6xXFXXXq/Women-Office-Suit-Jackets-Coat-Slim-Short-Design-Long-Sleeve-Ladies-Blazer-Girls-Work-Wear-Jacket.jpg_640x640.jpg" alt="about-img" />
  <article>
    <div className="title">
      <h2>our story</h2>
      <div className="underline"></div>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolore dolor adipisci ipsam atque dolorum vero iure quos harum reprehenderit eaque, magnam earum repellat qui repudiandae culpa et sapiente animi. Velit excepturi sed qui est debitis totam natus, amet quae voluptatibus delectus quas incidunt assumenda odit reprehenderit culpa aliquid consequatur.</p>
  </article>
    </Wrapper>
  </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
