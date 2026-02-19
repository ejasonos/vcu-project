import useTelemetry from '../store/telemetry.js'

const Home = () => {
    const name = useTelemetry((state)=>state.name)
    return (
        <>
          Home Page
          <p>Lets say {name}</p>
        </>
    )
}

export default Home