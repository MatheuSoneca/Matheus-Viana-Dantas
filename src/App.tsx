import './App.css'


function App() {


  return (
    <>
      <header>
        <div className='container'>
          <div className='menu'>
            <h1>Matheus Viana Dantas</h1>
            <button>tema</button>
            <button>language</button>
          </div>
          <div className='subtitle'>
            <nav>
              <ul className="listaHorizontal">
                <li><a href="#about">About me</a></li>
                <li><a href="#technologies">Technologies & Tools</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </nav>
          </div>
        </div>

      </header>

      <main>
        <div className='card'>
          <div id='about'>
            <h2>About me</h2>
            <p>Hello! My name is Matheus Viana Dantas, I am 23 years old and I live in Montes Claros, MG, Brazil.</p>
            <p>I am currently studying Systems Development and have knowledge in JavaScript, TypeScript, and React. I am also learning Node.js and have explored Python. Although I do not have professional experience yet, I have been improving my skills through personal projects and continuous learning.</p>
          </div>
        </div>

        <div className='card'>
          <h2 id='technologies'>Technologies & Tools</h2>
          <strong>Languages:</strong> JavaScript, TypeScript, Python (basic) <br />
          <strong>Front-end:</strong> React, MUI <br />
          <strong>Back-end:</strong> Node.js, Express <br />
          <strong>Databases & APIs:</strong> DBeaver, Postman
        </div>

        <div className='projects'>
          <h2 id='projects'>Projects</h2>
          <div className='projectsCard'>

          </div>
        </div>

      </main>
    </>
  )
}

export default App
