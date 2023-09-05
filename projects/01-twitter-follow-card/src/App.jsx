import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo Heraldo',
    isFollowing: false
  },
  {
    userName: 'Pacohdz',
    name: 'Paco Hernández',
    isFollowing: true
  },
  {
    userName: 'TMChain',
    name: 'Tomás',
    isFollowing: true
  }

]

function App() {


  return (
    <>
      <section className="container-TwitterFollowCard">
        <TwitterFollowCard name='Miguel Ángel' userName='midudev' initialIsFollowing />
        <TwitterFollowCard name='Pablo' userName='pheralb' isFollowing />
        <TwitterFollowCard name='Elon Kusk' userName='elonmusk' />

        <br/>
        <br/>
        <br/>

        {
          users.map(user => {
            const {userName, name, isFollowing} = user
            return(
              <TwitterFollowCard
                initialIsFollowing={isFollowing}
                key={userName + name}
                name={name}
                userName={userName}
              />
            )
          })
        }
      </section>
    </>
  )
}

export default App