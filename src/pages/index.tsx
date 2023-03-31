import {useState} from 'react';

export default function Home(props:any) {
  const [count, setCount] = useState(props.initCount);

  return (
    <>
      <main>
    <div className="content">
      <h1>Welcome to My Awesome Landing Page</h1>

      <button onClick={() => setCount(count+ 1)} className="cta-button">Awesome Button</button>
      <div className="counter">Awesome clicks: <span>{count}</span></div>

      <div className="description">
        <p>A landing page is a web page that is designed to capture a visitor attention and convert them into a customer or lead. Landing pages typically have a single goal, such as getting visitors to sign up for a newsletter or purchase a product.</p>
      </div>

      <div className="feature-list">
        <h2>Features</h2>
        <ul>
          <li>Responsive design</li>
          <li>Clean and modern layout</li>
          <li>Easy to customize</li>
          <li>SEO friendly</li>
          <li>Fast loading speed</li>
        </ul>
      </div>
    </div>
  </main>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {initCount: 0}, 
  }
}
