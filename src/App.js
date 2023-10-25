import { useState } from "react";

export default function App() {
  const [data, setData] = useState({
    key1: 'Barbara',
    key2: 'Hepworth',
    key3: 'bhepworth@react.com',
    key4: 'love cats'
  })

  return (
    <>
      <div style={{margin: '30px'}}>
        <form style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <input style={{maxWidth: '200px', height: '30px', border: '3px solid blue'}} value={data.key1} onChange={(e) => setData({ ...data, key1: e.target.value })}/>
          <input style={{maxWidth: '200px', height: '30px', border: '3px solid blue'}} value={data.key2} onChange={(e) => setData({ ...data, key2: e.target.value })}/>
          <input style={{maxWidth: '200px', height: '30px', border: '3px solid blue'}} value={data.key3} onChange={(e) => setData({ ...data, key3: e.target.value })}/>
          <input style={{maxWidth: '200px', height: '30px', border: '3px solid blue'}} value={data.key4} onChange={(e) => setData({ ...data, key4: e.target.value })}/>
        </form>
        <div>
          <h3>{data.key1}</h3>
          <h3>{data.key2}</h3>
          <h3>{data.key3}</h3>
          <h3>{data.key4}</h3>

        </div>
      </div>
    </>
  )
}