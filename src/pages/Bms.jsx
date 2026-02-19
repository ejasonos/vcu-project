import useTelemetry from '../store/telemetry.js'

const Bms = () => {
    const name = useTelemetry((state)=>state.name)
    return (
        <>
          BMS Page
          <p>Lets say {name}</p>
        </>
    )
}

export default Bms